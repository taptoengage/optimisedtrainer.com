import React from "react";
import { EmailSignupForm } from "@/components/EmailSignupForm";

export default function EmailCtaSection() {
  return (
    <section className="w-full bg-[#111] text-gray-100 py-14 sm:py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Be the first to experience Optimised Trainer
          </h2>

          <p className="mt-4 text-gray-300">
            Join our exclusive beta program and get early access to the platform
            that&apos;s revolutionizing how personal trainers run their business.
          </p>

          <div className="mt-6 flex justify-center">
            {/* Use the dark variant to match the screenshot */}
            <EmailSignupForm
              variant="dark"
              buttonText="Join Beta"
              placeholder="Enter your email"
              className="w-full max-w-xl"
            />
          </div>

          <p className="mt-3 text-xs text-gray-400">
            No spam, just updates on our progress and early access.
          </p>
        </div>
      </div>
    </section>
  );
}