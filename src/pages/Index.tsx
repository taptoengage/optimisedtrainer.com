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
      <HeroSection
        backgroundUrl="https://source.unsplash.com/Hfc8VGI2ekU/2400x1200"
        title="Train Smarter. Run Your Business Better."
        subtitle="A complete client management system built for independent personal trainers. Streamline scheduling, payments, and client relationships in one elegant platform."
      />

      <FeaturesSection />

      <ProductShowcase
        imageUrl="https://api.builder.io/api/v1/image/assets/TEMP/05ec04a4a985abd486ca0010617f6130c2f10fc4?width=1680"
      />

      <BenefitsSection
        trainerImage="https://api.builder.io/api/v1/image/assets/TEMP/797d3a2b736de9e12e68288bb951d29e3b463cea?width=1302"
        clientImage="https://api.builder.io/api/v1/image/assets/TEMP/f4044a7cae68fd2752a37eff955a9b24c1cadcc4?width=1302"
      />

      <MissionSection />

      <EmailCtaSection />

      <Footer />
    </main>
  );
}