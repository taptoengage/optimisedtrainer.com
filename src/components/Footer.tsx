import React from 'react';
import { EmailSignupForm } from './EmailSignupForm';

export const Footer: React.FC = () => {
  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Product', href: '#product' },
    { label: 'About', href: '#about' },
    { label: 'Privacy', href: '#privacy' },
    { label: 'Terms', href: '#terms' }
  ];

  const handleNavClick = (href: string) => {
    console.log('Navigation clicked:', href);
  };

  return (
    <footer className="flex flex-col items-center gap-[84px] self-stretch w-full bg-[#1A1A1A] pt-[84px] max-md:pt-[60px]">
      <div className="w-[1358px] h-[182px] relative max-w-full px-4">
        <header className="flex w-full flex-col items-center absolute h-[21px] left-0 top-0">
          <h2 className="text-white text-center text-2xl font-semibold leading-8">
            Be the first to experience Optimised Trainer
          </h2>
        </header>
        
        <div className="flex w-[588px] max-w-full flex-col items-center absolute h-[49px] left-1/2 transform -translate-x-1/2 top-[42px] max-sm:w-full max-sm:relative max-sm:left-0 max-sm:transform-none">
          <p className="text-[rgba(255,255,255,0.80)] text-center text-base font-normal leading-[24.5px]">
            Join our exclusive beta program and get early access to the platform
            <br />
            that's revolutionizing how personal trainers run their business.
          </p>
        </div>
        
        <div className="flex w-[392px] items-start gap-[10.5px] absolute h-[39px] pt-[7px] left-1/2 transform -translate-x-1/2 top-28 max-sm:w-full max-sm:relative max-sm:left-0 max-sm:transform-none">
          <EmailSignupForm 
            variant="dark"
            buttonText="Join Beta"
            placeholder="Enter your email"
            className="w-full"
          />
        </div>
        
        <div className="flex w-full flex-col items-center absolute h-[18px] left-0 top-[164px] max-sm:w-full max-sm:relative max-sm:left-0">
          <p className="text-[rgba(255,255,255,0.60)] text-center text-[11px] font-normal leading-[17.5px]">
            No spam, just updates on our progress and early access.
          </p>
        </div>
      </div>
      
      <div className="flex flex-col items-start self-stretch relative pt-[43px] pb-[42px] px-[260px] border-t-[rgba(255,255,255,0.20)] border-t border-solid max-md:px-10 max-md:py-8 max-sm:px-5 max-sm:py-6">
        <div className="flex max-w-[1400px] flex-col items-start gap-7 self-stretch relative px-[21px] py-0">
          <div className="flex justify-between items-center self-stretch relative max-sm:flex-col max-sm:gap-4 max-sm:items-start">
            <div className="flex flex-col items-start relative">
              <h3 className="text-white text-xl font-semibold leading-7 tracking-[-0.525px]">
                Optimised Trainer
              </h3>
            </div>
            
            <nav className="flex items-center gap-7 relative max-sm:flex-wrap max-sm:gap-4">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(link.href)}
                  className="text-[rgba(255,255,255,0.80)] hover:text-white text-xs font-normal leading-[17.5px] transition-colors cursor-pointer bg-transparent border-none"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
          
          <div className="flex flex-col items-start self-stretch relative pt-7 border-t-[rgba(255,255,255,0.20)] border-t border-solid">
            <div className="flex flex-col items-center self-stretch relative">
              <p className="self-stretch text-[rgba(255,255,255,0.60)] text-center text-[11px] font-normal leading-[17.5px]">
                © 2025 Optimised Trainer. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
