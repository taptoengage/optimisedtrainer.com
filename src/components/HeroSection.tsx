import React from "react";

type HeroSectionProps = {
  /** Path or URL to your hero image */
  backgroundUrl?: string;
  /** Optional: override main heading */
  title?: string;
  /** Optional: subheading/lead */
  subtitle?: string;
};

export default function HeroSection({
  backgroundUrl = "/path-to-your-hero.jpg",
  title = "Welcome to Our Product",
  subtitle = "A short value proposition goes here — no more horizontal scroll.",
}: HeroSectionProps) {
  return (
    <section
      className="
        relative w-full
        min-h-[70vh] sm:min-h-[80vh] md:min-h-screen
        bg-cover bg-center
        flex items-center
      "
      style={{ backgroundImage: `url('${backgroundUrl}')` }}
      aria-label="Hero"
    >
      {/* Overlay stays INSIDE section bounds */}
      <div className="absolute inset-0 bg-black/50" />

      {/* iOS safe-area padding to avoid notch clipping */}
      <div
        className="
          relative z-10 w-full
          pt-[max(1rem,env(safe-area-inset-top))]
          pb-[max(1rem,env(safe-area-inset-bottom))]
        "
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              {title}
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 mb-8">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#features"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg"
              >
                Get Started
              </a>

              <a
                href="#learn-more"
                className="bg-white/10 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold backdrop-blur hover:bg-white/20"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}