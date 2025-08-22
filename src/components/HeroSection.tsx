import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/path-to-your-hero.jpg')" }}>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          Welcome to Our Product
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-8">
          A short value proposition goes here — no more horizontal scroll.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#features" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg">
            Get Started
          </a>
          <a href="#learn-more" className="bg-white/10 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold backdrop-blur hover:bg-white/20">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}