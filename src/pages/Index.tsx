import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { ProductShowcase } from '@/components/ProductShowcase';
import { BenefitsSection } from '@/components/BenefitsSection';
import { MissionSection } from '@/components/MissionSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex w-full flex-col items-center bg-white">
      <main className="flex flex-col w-full">
        <HeroSection />
        <FeaturesSection />
        
        <ProductShowcase />
        
        <BenefitsSection />
        <MissionSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
