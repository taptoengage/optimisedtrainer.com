import React from "react";

export default function MissionSection() {
  const values = [
    {
      emoji: "🎯",
      title: "Our Mission",
      description:
        "Simplify business management so trainers can focus on their passion — helping clients achieve their goals.",
    },
    {
      emoji: "💡",
      title: "Our Vision",
      description:
        "A world where every independent trainer has the tools to build a thriving, sustainable business.",
    },
    {
      emoji: "🤝",
      title: "Our Values",
      description:
        "Simplicity, reliability, and genuine care for the fitness community that drives everything we do.",
    },
  ];

  return (
    <section className="w-full bg-slate-50/30 py-16 lg:py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading + lead */}
        <header className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
            Empowering independent trainers, not just big gyms
          </h2>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#1A1A1A]">
            We believe personal trainers should have access to the same powerful tools as large
            fitness chains. That's why we built Optimised Trainer — to level the playing field and
            help independent trainers focus on what they do best: transforming lives through fitness.
          </p>
        </header>

        {/* Value tiles */}
        <div className="mt-12 grid gap-10 sm:gap-12 sm:grid-cols-3">
          {values.map((v, i) => (
            <article key={i} className="text-center max-w-md mx-auto">
              <div className="text-3xl leading-none mb-3">{v.emoji}</div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">{v.title}</h3>
              <p className="mt-3 text-slate-500 text-sm leading-6">{v.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}