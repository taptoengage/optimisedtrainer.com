import React from "react";

export default function FeaturesSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading + subcopy */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Everything you need to grow your training business
          </h2>
          <p className="mt-4 text-gray-600">
            Focus on what you do best — training clients
            <span className="hidden sm:inline"> — </span>
            <span className="block sm:hidden" />
            while we handle the business management.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Streamlined Scheduling */}
          <div className="text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600/10">
              {/* calendar icon */}
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Streamlined Scheduling</h3>
            <p className="mt-3 text-gray-600 max-w-md mx-auto">
              Effortless booking system that syncs with your calendar.
              Clients can book, reschedule, and manage their sessions with ease.
            </p>
          </div>

          {/* Payments & Credit System */}
          <div className="text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600/10">
              {/* card icon */}
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <path d="M2 10h20M6 15h4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Payments &amp; Credit System</h3>
            <p className="mt-3 text-gray-600 max-w-md mx-auto">
              Secure payment processing with flexible credit packages.
              Handle billing, refunds, and package management seamlessly.
            </p>
          </div>

          {/* Client Engagement Tools */}
          <div className="text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600/10">
              {/* users icon */}
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Client Engagement Tools</h3>
            <p className="mt-3 text-gray-600 max-w-md mx-auto">
              Build stronger relationships with progress tracking, workout plans,
              and direct communication features.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}