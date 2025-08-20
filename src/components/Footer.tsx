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
    <footer className="flex flex-col items-center w-full bg-[#1A1A1A] py-20 lg:py-16 max-md:py-12 max-sm:py-10 border-2 border-red-500">
      {/* Hero signup section */}
      <div className="flex flex-col items-center gap-8 w-full px-6 mb-20 lg:mb-16 max-md:mb-12 max-sm:mb-10 border-2 border-yellow-500">
        <header className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-white text-2xl font-semibold leading-8 lg:text-xl lg:leading-7 max-sm:text-lg max-sm:leading-6">
            Be the first to experience Optimised Trainer
          </h2>
          <p className="text-[rgba(255,255,255,0.80)] text-base font-normal leading-relaxed max-w-2xl max-md:text-sm max-md:leading-6 max-sm:text-sm max-sm:leading-6">
            Join our exclusive beta program and get early access to the platform that's revolutionizing how personal trainers run their business.
          </p>
        </header>
        
        <div className="flex justify-center w-full max-w-md">
          <EmailSignupForm 
            variant="dark"
            buttonText="Join Beta"
            placeholder="Enter your email"
            className="w-full"
          />
        </div>
        
        <p className="text-[rgba(255,255,255,0.60)] text-center text-sm font-normal leading-5 max-sm:text-xs">
          No spam, just updates on our progress and early access.
        </p>
      </div>
      
      {/* Footer navigation */}
      <div className="flex flex-col w-full px-6 pt-10 border-t border-[rgba(255,255,255,0.20)] border-2 border-blue-500">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-6 max-sm:items-start">
            <div className="flex flex-col">
              <h3 className="text-white text-xl font-semibold leading-7 tracking-[-0.525px] lg:text-lg max-sm:text-base">
                Optimised Trainer
              </h3>
            </div>
            
            <nav className="flex items-center gap-8 max-sm:flex-wrap max-sm:gap-4">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(link.href)}
                  className="text-[rgba(255,255,255,0.80)] hover:text-white text-sm font-normal leading-5 transition-colors duration-200 cursor-pointer bg-transparent border-none focus:outline-none focus:text-white max-sm:text-xs"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
          
          <div className="flex flex-col items-center pt-8 border-t border-[rgba(255,255,255,0.20)]">
            <p className="text-[rgba(255,255,255,0.60)] text-center text-sm font-normal leading-5 max-sm:text-xs">
              © 2025 Optimised Trainer. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
