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
        
        <div className="flex justify-center w-full px-6 lg:px-16 md:px-12 max-md:px-10 max-sm:px-5">
          <ProductShowcase />
        </div>
        
        <BenefitsSection />
        <MissionSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
