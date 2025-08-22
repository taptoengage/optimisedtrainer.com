import React from "react";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProductShowcase from "@/components/ProductShowcase";
import BenefitsSection from "@/components/BenefitsSection";
import MissionSection from "@/components/MissionSection";
import EmailCtaSection from "@/components/EmailCtaSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection backgroundUrl="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=2400&auto=format&fit=crop&q=80" />

      <FeaturesSection />

      <ProductShowcase
        imageUrl="https://api.builder.io/api/v1/image/assets/TEMP/05ec04a4a985abd486ca0010617f6130c2f10fc4?width=1680"
      />

      <BenefitsSection
        trainerImage="/assets/trainer.jpg"
        clientImage="https://api.builder.io/api/v1/image/assets/TEMP/f4044a7cae68fd2752a37eff955a9b24c1cadcc4?width=1302"
      />

      <MissionSection />
      <EmailCtaSection />
      <Footer />
    </main>
  );
}