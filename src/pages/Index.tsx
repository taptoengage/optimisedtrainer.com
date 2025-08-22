import React from "react";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProductShowcase from "@/components/ProductShowcase";
import BenefitsSection from "@/components/BenefitsSection";
import MissionSection from "@/components/MissionSection";
import EmailCtaSection from "@/components/EmailCtaSection"; // <- new
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <ProductShowcase />
      <BenefitsSection
        trainerImage="/assets/trainer.jpg"
        clientImage="/assets/client.jpg"
      />
      <MissionSection />
      <EmailCtaSection />   {/* <- email signup band */}
      <Footer />
    </main>
  );
}