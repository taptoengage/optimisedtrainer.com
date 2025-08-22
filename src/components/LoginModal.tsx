import React, { useEffect, useRef } from "react";

type LoginModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function LoginModal({ open, onClose }: LoginModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Basic focus management
  useEffect(() => {
    if (open) {
      // focus first input after mount
      const id = requestAnimationFrame(() => firstFieldRef.current?.focus());
      // lock body scroll
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        cancelAnimationFrame(id);
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      aria-hidden={!open}
      className="fixed inset-0 z-50"
    >
      {/* Overlay */}
      <button
        aria-label="Close login dialog"
        onClick={onClose}
        className="absolute inset-0 bg-black/60"
      />

      {/* Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-title"
        ref={dialogRef}
        className="relative z-10 flex min-h-full items-center justify-center p-4 sm:p-6"
      >
        <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl ring-1 ring-black/5">
          <div className="px-6 pt-6 pb-4">
            <h2 id="login-title" className="text-2xl font-semibold text-gray-900">
              Log in
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Welcome back! Enter your details to continue.
            </p>

            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                // Frontend-only demo: just close for now
                onClose();
              }}
            >
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  ref={firstFieldRef}
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600" />
                  Remember me
                </label>
                <a href="#forgot" className="text-sm font-medium text-blue-600 hover:text-blue-700">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="mt-2 w-full rounded-lg bg-blue-600 px-4 py-2.5 font-semibold text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                Log in
              </button>
            </form>

            <p className="mt-4 text-center text-sm text-gray-500">
              Don't have an account? <a href="#signup" className="font-medium text-blue-600 hover:text-blue-700">Sign up</a>
            </p>
          </div>

          <div className="flex justify-end px-6 pb-6">
            <button
              onClick={onClose}
              className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}