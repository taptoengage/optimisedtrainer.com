import React, { useState } from "react";
import { Link } from "react-router-dom";

type HeroSectionProps = {
  backgroundUrl?: string;
};

export default function HeroSection({
  backgroundUrl = "/assets/hero.jpg",
}: HeroSectionProps) {
  const [imgOk, setImgOk] = useState(true);

  return (
    <section
      className="
        relative w-full
        min-h-[70vh] sm:min-h-[80vh] md:min-h-screen
        flex items-center
        bg-neutral-900
      "
      aria-label="Hero"
    >
      {/* Background image */}
      {imgOk && (
        <img
          src={backgroundUrl}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover z-0"
          loading="eager"
          decoding="async"
          onError={() => setImgOk(false)}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55 z-10" />

      {/* Content */}
      <div className="relative z-20 w-full pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))]">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-left">
            <h1 className="text-white font-extrabold leading-tight tracking-tight text-4xl sm:text-5xl md:text-6xl">
              <span className="block">Train Smarter.</span>
              <span className="block">Run Your Business Better.</span>
            </h1>

            <p className="mt-6 text-gray-200 text-base sm:text-lg md:text-xl max-w-xl">
              A complete client management system built for independent personal trainers.
              Streamline scheduling, payments, and client relationships in one elegant platform.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/signup"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg text-center"
              >
                Join the Beta
              </Link>
              <a
                href="#watch-demo"
                className="bg-white/10 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold backdrop-blur hover:bg-white/20 text-center"
              >
                Watch Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}