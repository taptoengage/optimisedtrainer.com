import React from 'react';
import { EmailSignupForm } from './EmailSignupForm';

export const HeroSection: React.FC = () => {
  const handleWatchDemo = () => {
    console.log('Watch demo clicked');
  };

  return (
    <section className="flex w-full flex-col items-start h-[494px] pt-20 pb-42 px-72 relative lg:px-60 md:pt-16 md:pb-32 md:px-40 max-md:pt-12 max-md:pb-24 max-md:px-10 max-sm:pt-10 max-sm:pb-20 max-sm:px-5">
      <div className="flex w-full h-[494px] flex-col items-start absolute top-0 inset-x-0">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/ce75efa29674fec23ce01cf60a76b9d7b6da49bf?width=3840"
          alt="Personal trainer working with client"
          className="h-[493.5px] w-full shrink-0 self-stretch relative object-cover"
        />
        <div className="w-full h-[493.5px] absolute left-0 top-0 bg-gradient-to-r from-black/20 to-transparent" />
      </div>
      
      <div className="hero-text-white flex flex-col items-start gap-6 self-stretch relative z-[1]">
        <header className="flex flex-col items-start self-stretch relative">
          <h1 className="self-stretch text-5xl font-semibold leading-[56px] lg:text-4xl lg:leading-[48px] md:text-4xl md:leading-[44px] max-md:text-3xl max-md:leading-10 max-sm:text-[28px] max-sm:leading-9">
            Train Smarter. Run Your Business Better.
          </h1>
        </header>
        
        <div className="flex max-w-xl flex-col items-start relative max-sm:w-full">
          <p className="text-base font-normal leading-relaxed md:text-base md:leading-6 max-md:text-sm max-md:leading-6 max-sm:text-sm max-sm:leading-6">
            A complete client management system built for independent personal trainers. Streamline scheduling, payments, and client relationships in one elegant platform.
          </p>
        </div>
        
        <div className="flex items-start gap-3.5 self-stretch relative pt-2 max-sm:flex-col max-sm:gap-3">
          <EmailSignupForm 
            buttonText="Join the Beta"
            className="flex items-start gap-3.5"
          />
          <button
            onClick={handleWatchDemo}
            className="flex h-11 min-h-11 justify-center items-center border border-slate-200 relative cursor-pointer bg-white hover:bg-gray-50 hover:border-slate-300 hover:shadow-md px-8 py-2 rounded-md border-solid max-sm:w-full max-sm:justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 active:transition-transform"
          >
            <span className="text-[#1A1A1A] text-center text-sm font-medium leading-5">
              Watch Demo
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
