import React from 'react';
import { EmailSignupForm } from './EmailSignupForm';

export const HeroSection: React.FC = () => {
  const handleWatchDemo = () => {
    console.log('Watch demo clicked');
  };

  return (
    <section className="flex w-full flex-col items-start h-[494px] pt-[84px] pb-[168px] px-[281px] relative max-md:pt-[60px] max-md:pb-[120px] max-md:px-10 max-sm:pt-10 max-sm:pb-20 max-sm:px-5">
      <div className="flex w-full h-[494px] flex-col items-start absolute top-0 inset-x-0">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/ce75efa29674fec23ce01cf60a76b9d7b6da49bf?width=3840"
          alt="Personal trainer working with client"
          className="h-[493.5px] w-full shrink-0 self-stretch relative object-cover"
        />
        <div className="w-full h-[493.5px] absolute left-0 top-0 bg-gradient-to-r from-black/20 to-transparent" />
      </div>
      
      <div className="flex flex-col items-start gap-[21px] self-stretch relative z-[1]">
        <header className="flex flex-col items-start self-stretch relative">
          <h1 className="self-stretch text-[#1A1A1A] text-5xl font-semibold leading-[56px] max-md:text-4xl max-md:leading-[44px] max-sm:text-[28px] max-sm:leading-9">
            Train Smarter.
            <br />
            Run Your Business Better.
          </h1>
        </header>
        
        <div className="flex w-[588px] max-w-[588px] flex-col items-start relative max-sm:w-full">
          <p className="text-[#1A1A1A] text-base font-normal leading-[24.5px] max-md:text-sm max-md:leading-[22px]">
            A complete client management system built for
            <br />
            independent personal trainers. Streamline scheduling,
            <br />
            payments, and client relationships in one elegant platform.
          </p>
        </div>
        
        <div className="flex items-start gap-3.5 self-stretch relative pt-[7px] max-sm:flex-col max-sm:gap-3">
          <EmailSignupForm 
            buttonText="Join the Beta"
            className="flex items-start gap-3.5"
          />
          <button
            onClick={handleWatchDemo}
            className="flex h-[35px] justify-center items-center border border-slate-200 relative cursor-pointer bg-white hover:bg-gray-50 pt-[7.75px] pb-[9.25px] px-[29px] rounded-md border-solid max-sm:w-full max-sm:justify-center transition-colors"
          >
            <span className="text-[#1A1A1A] text-center text-xs font-normal leading-[17.5px]">
              Watch Demo
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
