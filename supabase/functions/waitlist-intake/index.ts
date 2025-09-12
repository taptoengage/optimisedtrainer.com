// supabase/functions/waitlist-intake/index.ts
// Deno runtime (Supabase Edge Functions)

import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.2";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const HCAPTCHA_SECRET = Deno.env.get("HCAPTCHA_SECRET")!;
const ALLOWED_ORIGINS = (Deno.env.get("ALLOWED_ORIGINS") ?? "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

// Defaults match our plan; override via function secrets if needed
const RATE_LIMIT_MAX_PER_EMAIL_PER_DAY = Number(
  Deno.env.get("RATE_LIMIT_MAX_PER_EMAIL_PER_DAY") ?? "3",
);
const RATE_LIMIT_MAX_PER_IP_PER_10M = Number(
  Deno.env.get("RATE_LIMIT_MAX_PER_IP_PER_10M") ?? "10",
);

// Optional: mask duplicate vs created to reduce email enumeration
const MASK_DUPLICATES = (Deno.env.get("MASK_DUPLICATES") ?? "true") === "true";

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

type RateLimitResult = {
  allowed: boolean;
  remaining?: number;
  resetTime?: number; // epoch ms
};

function cors(origin: string | null) {
  const isAllowed = origin ? ALLOWED_ORIGINS.includes(origin) : false;
  return {
    isAllowed,
    headers: {
      "Access-Control-Allow-Origin": isAllowed ? origin! : "null",
      "Access-Control-Allow-Headers": "content-type",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Max-Age": "86400",
      "Vary": "Origin",
    },
  };
}

function json(
  body: Record<string, unknown>,
  status = 200,
  extraHeaders: Record<string, string> = {},
) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...extraHeaders },
  });
}

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

function isValidEmail(email: string): boolean {
  // Simple, pragmatic email check + length bound
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email) && email.length <= 254;
}

function getClientIP(req: Request): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    req.headers.get("cf-connecting-ip") ||
    "unknown"
  );
}

async function verifyHCaptcha(token: string, remoteIp?: string): Promise<boolean> {
  try {
    const resp = await fetch("https://hcaptcha.com/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: HCAPTCHA_SECRET,
        response: token,
        ...(remoteIp ? { remoteip: remoteIp } : {}),
      }),
    });
    const data = await resp.json();
    return data?.success === true;
  } catch (err) {
    console.error("hCaptcha verification error:", err);
    return false;
  }
}

/**
 * Best-effort rate limiting using the security_rate_limits table.
 * Note: For true atomicity under extreme concurrency, move this logic into a SQL function.
 */
async function checkRateLimit(
  key: string,
  bucket: string,
  limit: number,
  windowMinutes: number,
): Promise<RateLimitResult> {
  const now = new Date();
  const windowMs = windowMinutes * 60 * 1000;
  const newWindowEnd = new Date(now.getTime() + windowMs);

  try {
    // Try to read existing record
    const { data: existing, error: selErr } = await supabase
      .from("security_rate_limits")
      .select("*")
      .eq("rate_key", key)
      .eq("bucket", bucket)
      .single();

    if (!selErr && existing) {
      const existingWindowEnd = new Date(existing.window_end);

      // Window expired -> reset window and count
      if (now > existingWindowEnd) {
        const { error: updErr } = await supabase
          .from("security_rate_limits")
          .update({
            count: 1,
            window_start: now.toISOString(),
            window_end: newWindowEnd.toISOString(),
            updated_at: now.toISOString(),
          })
          .eq("id", existing.id);

        if (updErr) throw updErr;
        return { allowed: true, remaining: Math.max(0, limit - 1), resetTime: newWindowEnd.getTime() };
      }

      // Still within window
      if (existing.count >= limit) {
        return { allowed: false, remaining: 0, resetTime: existingWindowEnd.getTime() };
      }

      const newCount = existing.count + 1;
      const { error: incErr } = await supabase
        .from("security_rate_limits")
        .update({ count: newCount, updated_at: now.toISOString() })
        .eq("id", existing.id);

      if (incErr) throw incErr;

      return {
        allowed: true,
        remaining: Math.max(0, limit - newCount),
        resetTime: existingWindowEnd.getTime(),
      };
    }

    // No existing: create fresh record (handles most races with unique index)
    const { error: insErr } = await supabase.from("security_rate_limits").insert({
      rate_key: key,
      bucket,
      count: 1,
      window_start: now.toISOString(),
      window_end: newWindowEnd.toISOString(),
    });

    if (insErr) {
      // If a concurrent insert happened, fall back to a normal read/increment path
      if (insErr.code === "23505") {
        return await checkRateLimit(key, bucket, limit, windowMinutes);
      }
      throw insErr;
    }

    return { allowed: true, remaining: Math.max(0, limit - 1), resetTime: newWindowEnd.getTime() };
  } catch (err) {
    console.error("Rate limit check error:", err);
    // Fail CLOSED for security: do not allow if we cannot validate RL
    return { allowed: false };
  }
}

serve(async (req) => {
  const origin = req.headers.get("origin");
  const { isAllowed, headers: corsHeaders } = cors(origin);

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405, corsHeaders);
  }

  if (!isAllowed) {
    console.warn("Rejected unauthorized origin:", origin);
    return json({ error: "Unauthorized origin" }, 403, corsHeaders);
  }

  try {
    const body = await req.json().catch(() => ({}));
    const emailRaw = (body?.email ?? "") as string;
    const token = (body?.token ?? "") as string;

    if (!emailRaw || !token) {
      return json({ error: "Email and captcha token are required" }, 400, corsHeaders);
    }

    if (!isValidEmail(emailRaw)) {
      return json({ error: "Invalid email format" }, 400, corsHeaders);
    }

    const email = normalizeEmail(emailRaw);
    const clientIP = getClientIP(req);

    // Rate limits (email daily & IP per 10 minutes)
    const [rlEmail, rlIp] = await Promise.all([
      checkRateLimit(email, "email_daily", RATE_LIMIT_MAX_PER_EMAIL_PER_DAY, 24 * 60),
      checkRateLimit(clientIP, "ip_10min", RATE_LIMIT_MAX_PER_IP_PER_10M, 10),
    ]);

    if (!rlEmail.allowed) {
      return json(
        { error: "Too many attempts for this email. Please try again later.", resetTime: rlEmail.resetTime },
        429,
        { ...corsHeaders, "Retry-After": "3600" },
      );
    }

    if (!rlIp.allowed) {
      return json(
        { error: "Too many attempts from this IP. Please try again later.", resetTime: rlIp.resetTime },
        429,
        { ...corsHeaders, "Retry-After": "600" },
      );
    }

    // Verify hCaptcha
    const captchaOk = await verifyHCaptcha(token, clientIP);
    if (!captchaOk) {
      return json({ error: "Invalid captcha. Please try again." }, 400, corsHeaders);
    }

    // Insert signup
    const { error: insErr } = await supabase
      .from("waitlist_signups")
      .insert({
        email,
        normalized_email: email,
        source: "waitlist_form",
        ip_address: clientIP,
        user_agent: req.headers.get("user-agent")?.slice(0, 500) ?? null,
        status: "pending",
      })
      .select("id")
      .single();

    if (insErr) {
      // Unique violation => duplicate
      if (insErr.code === "23505") {
        if (MASK_DUPLICATES) {
          return json({ status: "ok", message: "Thanks! You're on the list." }, 200, corsHeaders);
        }
        return json({ status: "duplicate", message: "You are already on our waitlist!" }, 200, corsHeaders);
      }
      console.error("DB insert error:", insErr);
      return json({ error: "Failed to process signup. Please try again." }, 500, corsHeaders);
    }

    // Success
    if (MASK_DUPLICATES) {
      // Same message as duplicate to reduce enumeration
      return json({ status: "ok", message: "Thanks! You're on the list." }, 200, corsHeaders);
    }
    return json({ status: "created", message: "Successfully added to waitlist!" }, 200, corsHeaders);
  } catch (err) {
    console.error("Unexpected error in waitlist-intake:", err);
    return json({ error: "Internal server error" }, 500, corsHeaders);
  }
});