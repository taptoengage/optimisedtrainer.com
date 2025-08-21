import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { ProductShowcase } from '@/components/ProductShowcase';
import { BenefitsSection } from '@/components/BenefitsSection';
import { MissionSection } from '@/components/MissionSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex w-full flex-col items-center bg-white overflow-x-hidden max-w-full">
      <main className="flex flex-col w-full overflow-x-hidden max-w-full">
        <HeroSection />
        <div className="hidden">
          <FeaturesSection />
        </div>
        
        <div className="hidden">
          <ProductShowcase />
        </div>
        
        <div className="hidden">
          <BenefitsSection />
        </div>
        <div className="hidden">
          <MissionSection />
        </div>
        <div className="hidden">
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Index;
