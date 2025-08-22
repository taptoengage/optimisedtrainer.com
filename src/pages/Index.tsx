import React from "react";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Features */}
      <FeaturesSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}