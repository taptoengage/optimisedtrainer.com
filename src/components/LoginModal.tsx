// src/components/LoginModal.tsx
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

// Where to send users after auth completes
const APP_DASHBOARD_URL = "https://optimisedtrainer.online/app";

const LoginModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  // OAuth callback - redirect to app domain to store session there
  const OAUTH_CALLBACK_URL = "https://optimisedtrainer.online/auth/callback";
  
  // App domain URLs for email authentication
  const APP_EMAIL_LOGIN_URL = "https://optimisedtrainer.online/login";
  const APP_SIGNUP_URL = "https://optimisedtrainer.online/signup";

  // Close on ESC
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // If we already have a session, bounce to the app
  useEffect(() => {
    const goIfAuthed = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        window.location.replace(APP_DASHBOARD_URL);
      }
    };
    void goIfAuthed();

    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (session) {
        window.location.replace(APP_DASHBOARD_URL);
      }
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const signInWithGoogle = useCallback(async () => {
    try {
      setError(null);
      setInfo(null);
      setLoading(true);
      const { error: err } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: OAUTH_CALLBACK_URL },
      });
      if (err) throw err; // Redirect will occur on success
    } catch (e: any) {
      console.error(e);
      setError(e.message || "Google sign-in failed.");
    } finally {
      setLoading(false);
    }
  }, []);

  const signInWithPassword = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      // Redirect to the app login page with the email prefilled
      const url = APP_EMAIL_LOGIN_URL + "?email=" + encodeURIComponent(email);
      window.location.href = url;
    },
    [email]
  );

  const signUpWithPassword = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      // Redirect to the app signup page with the email prefilled
      const url = APP_SIGNUP_URL + "?email=" + encodeURIComponent(email);
      window.location.href = url;
    },
    [email]
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative z-10 w-full max-w-md rounded-xl bg-neutral-900 border border-white/10 p-6 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white">Login</h2>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Google OAuth */}
        <button
          onClick={signInWithGoogle}
          disabled={loading}
          className="w-full h-11 rounded-md bg-white text-black font-medium hover:bg-white/90 transition disabled:opacity-60"
        >
          Continue with Google
        </button>

        {/* Divider */}
        <div className="my-4 flex items-center gap-3 text-white/40">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-xs">or</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Email + Password */}
        <form onSubmit={signInWithPassword} className="space-y-3">
          <label className="block">
            <span className="mb-1 block text-sm text-white/80">Email</span>
            <input
              type="email"
              inputMode="email"
              autoComplete="email"
              className="w-full h-11 rounded-md bg-white/10 border border-white/15 px-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              required
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm text-white/80">Password</span>
            <input
              type="password"
              autoComplete="current-password"
              className="w-full h-11 rounded-md bg-white/10 border border-white/15 px-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              required
            />
          </label>

          <div className="flex gap-2">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 h-11 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition disabled:opacity-60"
            >
              {loading ? "Signing in…" : "Login"}
            </button>
            <button
              type="button"
              onClick={signUpWithPassword}
              disabled={loading}
              className="flex-1 h-11 rounded-md bg-green-600 hover:bg-green-700 text-white font-medium transition disabled:opacity-60"
            >
              {loading ? "Creating…" : "Sign up"}
            </button>
          </div>
        </form>

        {error && (
          <div className="mt-3 rounded-md border border-red-500/30 bg-red-500/10 p-3 text-red-200 text-sm">
            {error}
          </div>
        )}
        {info && (
          <div className="mt-3 rounded-md border border-emerald-500/30 bg-emerald-500/10 p-3 text-emerald-200 text-sm">
            {info}
          </div>
        )}

        <p className="mt-4 text-xs text-white/40">
          By continuing you agree to our Terms and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default LoginModal;