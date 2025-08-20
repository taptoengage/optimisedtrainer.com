import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { ProductShowcase } from '@/components/ProductShowcase';
import { BenefitsSection } from '@/components/BenefitsSection';
import { MissionSection } from '@/components/MissionSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex w-full flex-col items-start shrink-0 bg-white">
      <div className="flex min-h-[1152px] flex-col items-start self-stretch relative">
        <main className="h-[3225.5px] self-stretch relative">
          <HeroSection />
          
          <div className="absolute left-0 top-[494px] w-full">
            <FeaturesSection />
          </div>
          
          <div className="absolute left-[260px] top-[1061px] max-md:left-10 max-sm:left-5">
            <ProductShowcase />
          </div>
          
          <div className="absolute left-0 top-[2102px] w-full">
            <BenefitsSection />
          </div>
          
          <div className="absolute left-0 top-[2757px] w-full">
            <MissionSection />
          </div>
          
          <div className="absolute left-0 top-[3227px] w-full">
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
