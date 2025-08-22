import React from "react";

type ProductShowcaseProps = {
  imageUrl?: string; // dashboard/tablet image
  alt?: string;
};

export default function ProductShowcase({
  imageUrl = "/assets/dashboard.png", // replace with your image path
  alt = "Optimised Trainer Dashboard",
}: ProductShowcaseProps) {
  const bullets = [
    "Daily appointment tracking",
    "Revenue analytics",
    "Clients running low on their pack quota",
    "Payment status",
  ];

  return (
    <section className="w-full py-16 lg:py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto">
          <h2 className="text-[#1A1A1A] text-3xl sm:text-4xl font-semibold leading-tight">
            Beautiful design meets powerful functionality
          </h2>
          <p className="mt-4 text-[#1A1A1A] text-base sm:text-lg leading-relaxed">
            Intuitive interfaces designed specifically for personal trainers and their clients.
          </p>
        </header>

        {/* Image + overlay */}
        <div className="mt-10 sm:mt-12">
          <div className="relative rounded-2xl bg-white p-4 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
            {/* Image frame */}
            <div className="overflow-hidden rounded-xl">
              <img
                src={imageUrl}
                alt={alt}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Overlay card: absolute on sm+, stacked on mobile */}
            <div className="hidden sm:flex flex-col gap-2.5 absolute right-6 top-6 w-72 lg:w-64 md:w-56 bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow border border-slate-200">
              <h3 className="text-[#1A1A1A] text-sm font-semibold leading-6">
                Dashboard Overview
              </h3>
              <ul className="flex flex-col gap-1.5 text-slate-500 text-sm leading-5 list-none">
                {bullets.map((b, i) => (
                  <li key={i}>• {b}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile overlay (readable, no overflow) */}
          <div className="sm:hidden mt-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow border border-slate-200">
            <h3 className="text-[#1A1A1A] text-sm font-semibold leading-6">
              Dashboard Overview
            </h3>
            <ul className="mt-2 flex flex-col gap-1.5 text-slate-500 text-sm leading-5 list-none">
              {bullets.map((b, i) => (
                <li key={i}>• {b}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* For Trainers / For Clients */}
        <div className="mt-10 sm:mt-12 grid gap-7 md:grid-cols-2">
          <article className="flex flex-col gap-2.5 rounded-xl border border-[rgba(226,232,240,0.50)] bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-[#1A1A1A] text-lg font-semibold leading-6">
              For Trainers
            </h3>
            <p className="text-slate-500 text-sm leading-6">
              Comprehensive business management with scheduling, payment
              processing, client communication, and progress tracking — all in
              one place.
            </p>
          </article>

          <article className="flex flex-col gap-2.5 rounded-xl border border-[rgba(226,232,240,0.50)] bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-[#1A1A1A] text-lg font-semibold leading-6">
              For Clients
            </h3>
            <p className="text-slate-500 text-sm leading-6">
              Simple booking interface, secure payments, workout tracking, and
              direct communication with their trainer.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}