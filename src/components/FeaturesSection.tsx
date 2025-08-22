import React from "react";
import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
  const features = [
    {
      title: "Fast Performance",
      description: "Optimized code ensures smooth experience across devices."
    },
    {
      title: "Mobile First",
      description: "Designed from the ground up to look great on any screen."
    },
    {
      title: "Easy Integration",
      description: "Seamlessly connects with your existing workflows."
    }
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Features You’ll Love
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FeatureCard key={i} title={f.title} description={f.description} />
          ))}
        </div>
      </div>
    </section>
  );
}