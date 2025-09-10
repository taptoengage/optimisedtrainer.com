import React from "react";
import { Link } from "react-router-dom";

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
            <Link 
              to="/signup"
              className="inline-flex h-11 min-h-11 justify-center items-center bg-blue-600 hover:bg-blue-700 hover:shadow-md px-8 py-3 rounded-md text-white text-center text-base font-medium leading-5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95"
            >
              Get Full Details & Join Beta
            </Link>
          </div>

          <p className="mt-3 text-xs text-gray-400">
            Learn more about features, see cost benefits, and join our waitlist.
          </p>
        </div>
      </div>
    </section>
  );
}