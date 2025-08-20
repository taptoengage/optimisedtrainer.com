import React from 'react';

export const ProductShowcase: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-14 w-full max-w-6xl px-6 py-16 lg:py-20">
      <div className="flex flex-col items-center gap-14 w-full">
        <header className="flex flex-col items-center gap-3.5 w-full">
          <h2 className="text-[#1A1A1A] text-center text-2xl font-semibold leading-8 lg:text-xl lg:leading-7 max-sm:text-lg max-sm:leading-6">
            Beautiful design meets powerful functionality
          </h2>
          <div className="flex max-w-2xl flex-col items-center relative max-sm:w-full">
            <p className="text-[#1A1A1A] text-center text-base font-normal leading-relaxed max-md:text-sm max-md:leading-6 max-sm:text-sm max-sm:leading-6">
              Intuitive interfaces designed specifically for personal trainers and their clients.
            </p>
          </div>
        </header>
        
        <div className="flex flex-col items-start shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] relative w-full max-w-4xl p-7 rounded-[14px] max-md:p-5 aspect-[4/3]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/05ec04a4a985abd486ca0010617f6130c2f10fc4?width=1680"
            alt="Optimised Trainer Dashboard"
            className="w-full h-full object-cover rounded-lg aspect-[4/3]"
          />
          <div className="flex flex-col items-start gap-2.5 absolute backdrop-blur-sm bg-[rgba(255,255,255,0.90)] p-5 rounded-xl right-6 top-6 w-72 max-w-sm lg:w-64 md:w-56 max-md:w-48 max-sm:w-44 max-sm:p-4 max-sm:right-4 max-sm:top-4">
            <h3 className="text-[#1A1A1A] text-sm font-semibold leading-6 max-sm:text-xs max-sm:leading-5">
              Dashboard Overview
            </h3>
            <ul className="flex flex-col items-start gap-1.5 w-full list-none">
              <li className="text-slate-500 text-sm font-normal leading-5">
                • Daily appointment tracking
              </li>
              <li className="text-slate-500 text-sm font-normal leading-5">
                • Revenue analytics
              </li>
              <li className="text-slate-500 text-sm font-normal leading-5">
                • Clients running low on their pack quota
              </li>
              <li className="text-slate-500 text-sm font-normal leading-5">
                • Payment status
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex justify-center items-start gap-7 w-full max-w-3xl max-md:flex-col max-md:gap-6">
          <article className="flex flex-col items-start gap-2.5 flex-1 border bg-white p-8 rounded-xl border-solid border-[rgba(226,232,240,0.50)] hover:shadow-md transition-shadow duration-200 max-md:p-6">
            <h3 className="text-[#1A1A1A] text-lg font-semibold leading-6 max-sm:text-base">
              For Trainers
            </h3>
            <p className="text-slate-500 text-sm font-normal leading-6">
              Comprehensive business management with scheduling, payment processing, client communication, and progress tracking — all in one place.
            </p>
          </article>
          
          <article className="flex flex-col items-start gap-2.5 flex-1 border bg-white p-8 rounded-xl border-solid border-[rgba(226,232,240,0.50)] hover:shadow-md transition-shadow duration-200 max-md:p-6">
            <h3 className="text-[#1A1A1A] text-lg font-semibold leading-6 max-sm:text-base">
              For Clients
            </h3>
            <p className="text-slate-500 text-sm font-normal leading-6">
              Simple booking interface, secure payments, workout tracking, and direct communication with their trainer.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
