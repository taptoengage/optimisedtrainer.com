import React from "react";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProductShowcase from "@/components/ProductShowcase";
import BenefitsSection from "@/components/BenefitsSection";
import MissionSection from "@/components/MissionSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <ProductShowcase />
      <BenefitsSection
        trainerImage="/assets/trainer.jpg"   // update to your actual asset paths
        clientImage="/assets/client.jpg"
      />
      <MissionSection />
      <Footer />
    </main>
  );
}