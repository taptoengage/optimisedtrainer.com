import React, { useState } from "react";

type HeroSectionProps = {
  backgroundUrl?: string;
  onJoinBeta?: (email: string) => void;
  onWatchDemo?: () => void;
  demoEnabled?: boolean; // set false to keep the greyed state
};

export default function HeroSection({
  backgroundUrl = "/assets/hero.jpg", // <-- change to your asset
  onJoinBeta,
  onWatchDemo,
  demoEnabled = false,
}: HeroSectionProps) {
  const [email, setEmail] = useState("");

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    onJoinBeta?.(email);
  };

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
      {/* Dark overlay contained to the section */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Safe-area padding avoids notch clipping on iOS */}
      <div className="relative z-10 w-full pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))]">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Left-aligned content block */}
          <div className="max-w-2xl">
            <h1 className="text-white font-extrabold leading-tight tracking-tight
                           text-4xl sm:text-5xl md:text-6xl">
              <span className="block">Train Smarter.</span>
              <span className="block">Run Your Business Better.</span>
            </h1>

            <p className="mt-6 text-gray-200 text-base sm:text-lg md:text-xl max-w-xl">
              A complete client management system built for independent personal trainers.
              Streamline scheduling, payments, and client relationships in one elegant platform.
            </p>

            {/* Email + CTAs */}
            <form
              onSubmit={handleJoin}
              className="
                mt-8
                flex flex-col gap-4
                sm:flex-row sm:items-center
              "
            >
              {/* Email input */}
              <input
                type="email"
                inputMode="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
                  w-full sm:w-[260px]
                  rounded-lg
                  px-4 py-3
                  text-gray-900
                  bg-white/95
                  placeholder-gray-500
                  shadow
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                "
                aria-label="Email address"
              />

              {/* Join the Beta */}
              <button
                type="submit"
                className="
                  inline-flex items-center justify-center
                  rounded-lg px-5 py-3
                  font-semibold
                  bg-blue-600 text-white
                  hover:bg-blue-700
                  shadow-lg
                  transition
                "
              >
                Join the Beta
              </button>

              {/* Watch Demo (muted/disabled look by default) */}
              <button
                type="button"
                onClick={demoEnabled ? onWatchDemo : undefined}
                disabled={!demoEnabled}
                className={`
                  inline-flex items-center justify-center
                  rounded-lg px-5 py-3 font-semibold
                  border
                  ${demoEnabled
                    ? "bg-white/10 border-white/40 text-white hover:bg-white/20 backdrop-blur"
                    : "bg-white/10 border-white/30 text-white/60 cursor-not-allowed"}
                `}
              >
                Watch Demo
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}