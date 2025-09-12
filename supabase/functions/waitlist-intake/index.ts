import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.4';

const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const hcaptchaSecret = Deno.env.get('HCAPTCHA_SECRET')!;

// Initialize Supabase client with service role for database access
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Allowed origins for CORS
const allowedOrigins = [
  'https://optimisedtrainer.com',
  'https://optimisedtrainer.online', 
  'http://localhost:5173',
  'http://localhost:4321',
  'https://1eed2f44-9a36-4ae6-acf4-38cf783df502.sandbox.lovable.dev' // Add current dev URL
];

interface RateLimitCheck {
  allowed: boolean;
  remaining?: number;
  resetTime?: number;
}

async function checkRateLimit(key: string, bucket: string, limit: number, windowMinutes: number): Promise<RateLimitCheck> {
  const windowMs = windowMinutes * 60 * 1000;
  const now = new Date();
  const windowEnd = new Date(now.getTime() + windowMs);
  
  try {
    // Try to get existing rate limit record
    const { data: existing } = await supabase
      .from('security_rate_limits')
      .select('*')
      .eq('rate_key', key)
      .eq('bucket', bucket)
      .single();

    if (existing) {
      const windowEndTime = new Date(existing.window_end);
      
      // If window has expired, reset
      if (now > windowEndTime) {
        await supabase
          .from('security_rate_limits')
          .update({
            count: 1,
            window_start: now.toISOString(),
            window_end: windowEnd.toISOString(),
            updated_at: now.toISOString()
          })
          .eq('id', existing.id);
        
        return { allowed: true, remaining: limit - 1, resetTime: windowEnd.getTime() };
      }
      
      // Check if limit exceeded
      if (existing.count >= limit) {
        return { 
          allowed: false, 
          remaining: 0, 
          resetTime: windowEndTime.getTime() 
        };
      }
      
      // Increment count
      const newCount = existing.count + 1;
      await supabase
        .from('security_rate_limits')
        .update({
          count: newCount,
          updated_at: now.toISOString()
        })
        .eq('id', existing.id);
      
      return { 
        allowed: true, 
        remaining: limit - newCount, 
        resetTime: windowEndTime.getTime() 
      };
    } else {
      // Create new rate limit record
      await supabase
        .from('security_rate_limits')
        .insert({
          rate_key: key,
          bucket: bucket,
          count: 1,
          window_start: now.toISOString(),
          window_end: windowEnd.toISOString()
        });
      
      return { allowed: true, remaining: limit - 1, resetTime: windowEnd.getTime() };
    }
  } catch (error) {
    console.error('Rate limit check error:', error);
    // Fail open for availability, but log the error
    return { allowed: true };
  }
}

async function verifyHCaptcha(token: string, remoteIp?: string): Promise<boolean> {
  try {
    const response = await fetch('https://hcaptcha.com/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: hcaptchaSecret,
        response: token,
        ...(remoteIp && { remoteip: remoteIp })
      }),
    });

    const result = await response.json();
    return result.success === true;
  } catch (error) {
    console.error('hCaptcha verification error:', error);
    return false;
  }
}

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

function getClientIP(request: Request): string {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
         request.headers.get('x-real-ip') ||
         request.headers.get('cf-connecting-ip') ||
         'unknown';
}

serve(async (req) => {
  // CORS headers with strict origin allowlist
  const origin = req.headers.get('origin') || '';
  const isAllowedOrigin = allowedOrigins.includes(origin);
  
  const corsHeaders = {
    'Access-Control-Allow-Origin': isAllowedOrigin ? origin : 'null',
    'Access-Control-Allow-Headers': 'content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Max-Age': '86400', // 24 hours
  };

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { 
      status: 200,
      headers: corsHeaders 
    });
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  // Validate origin
  if (!isAllowedOrigin) {
    console.warn('Rejected request from unauthorized origin:', origin);
    return new Response(JSON.stringify({ error: 'Unauthorized origin' }), {
      status: 403,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  try {
    const body = await req.json();
    const { email, token } = body;

    // Validate required fields
    if (!email || !token) {
      return new Response(JSON.stringify({ 
        error: 'Email and captcha token are required' 
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return new Response(JSON.stringify({ 
        error: 'Invalid email format' 
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    const normalizedEmail = normalizeEmail(email);
    const clientIP = getClientIP(req);

    // Rate limiting checks
    const [emailRateLimit, ipRateLimit] = await Promise.all([
      checkRateLimit(normalizedEmail, 'email_daily', 3, 24 * 60), // 3 attempts per day per email
      checkRateLimit(clientIP, 'ip_10min', 10, 10) // 10 attempts per 10 minutes per IP
    ]);

    if (!emailRateLimit.allowed) {
      console.warn('Email rate limit exceeded:', normalizedEmail);
      return new Response(JSON.stringify({ 
        error: 'Too many attempts for this email. Please try again later.',
        resetTime: emailRateLimit.resetTime
      }), {
        status: 429,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json',
          'Retry-After': '3600' // 1 hour
        }
      });
    }

    if (!ipRateLimit.allowed) {
      console.warn('IP rate limit exceeded:', clientIP);
      return new Response(JSON.stringify({ 
        error: 'Too many attempts from this IP. Please try again later.',
        resetTime: ipRateLimit.resetTime
      }), {
        status: 429,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json',
          'Retry-After': '600' // 10 minutes
        }
      });
    }

    // Verify hCaptcha token
    const isValidCaptcha = await verifyHCaptcha(token, clientIP);
    if (!isValidCaptcha) {
      console.warn('Invalid hCaptcha token from IP:', clientIP);
      return new Response(JSON.stringify({ 
        error: 'Invalid captcha. Please try again.' 
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Insert into waitlist using direct database access with service role
    const { data, error } = await supabase
      .from('waitlist_signups')
      .insert({
        email: normalizedEmail,
        normalized_email: normalizedEmail,
        source: 'waitlist_form',
        ip_address: clientIP,
        user_agent: req.headers.get('user-agent')?.slice(0, 500) || null,
        status: 'pending'
      })
      .select('id')
      .single();

    if (error) {
      // Check if it's a duplicate email error
      if (error.code === '23505') { // unique_violation
        console.log('Duplicate email signup attempt:', normalizedEmail);
        return new Response(JSON.stringify({ 
          status: 'duplicate',
          message: 'You are already on our waitlist!' 
        }), {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }
      
      console.error('Database error:', error);
      return new Response(JSON.stringify({ 
        error: 'Failed to process signup. Please try again.' 
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    console.log('Successful waitlist signup:', normalizedEmail, 'ID:', data.id);
    
    return new Response(JSON.stringify({ 
      status: 'created',
      message: 'Successfully added to waitlist!' 
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Unexpected error in waitlist-intake:', error);
    return new Response(JSON.stringify({ 
      error: 'Internal server error' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
});