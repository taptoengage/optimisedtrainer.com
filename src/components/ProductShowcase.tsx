import React from 'react';

export const ProductShowcase: React.FC = () => {
  return (
    <section className="inline-flex flex-col justify-center items-center gap-14 w-[1400px] h-[958px] px-[21px] py-0 max-md:w-[calc(100%_-_80px)] max-md:p-0 max-sm:w-[calc(100%_-_40px)]">
      <div className="flex w-[1358px] flex-col items-center gap-14 relative">
        <header className="flex w-[1358px] flex-col items-center gap-3.5 relative max-sm:w-full">
          <h2 className="self-stretch text-[#1A1A1A] text-center text-2xl font-semibold leading-8">
            Beautiful design meets powerful functionality
          </h2>
          <div className="flex w-[588px] max-w-[588px] flex-col items-center relative max-sm:w-full">
            <p className="text-[#1A1A1A] text-center text-base font-normal leading-[24.5px]">
              Intuitive interfaces designed specifically
              <br />
              for personal trainers and their clients.
            </p>
          </div>
        </header>
        
        <div className="flex w-[896px] flex-col items-start shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] relative h-[616px] p-7 rounded-[14px] max-md:w-full max-md:p-5">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/05ec04a4a985abd486ca0010617f6130c2f10fc4?width=1680"
            alt="Optimised Trainer Dashboard"
            className="h-[560px] max-w-4xl self-stretch relative object-cover rounded-lg"
          />
          <div className="flex w-[261px] max-w-[280px] flex-col items-start gap-[9.5px] absolute backdrop-blur-sm bg-[rgba(255,255,255,0.90)] p-[21px] rounded-xl right-[42px] top-[42px]">
            <h3 className="self-stretch text-[#1A1A1A] text-[13px] font-semibold leading-[21px]">
              Dashboard Overview
            </h3>
            <ul className="flex flex-col items-start gap-1.5 self-stretch relative list-none">
              <li className="self-stretch text-slate-500 text-[11px] font-normal leading-[17.5px]">
                • Daily appointment tracking
              </li>
              <li className="self-stretch text-slate-500 text-[11px] font-normal leading-[17.5px]">
                • Revenue analytics
              </li>
              <li className="self-stretch text-slate-500 text-[11px] font-normal leading-[17.5px]">
                • Clients running low on their pack quota
              </li>
              <li className="self-stretch text-slate-500 text-[11px] font-normal leading-[17.5px]">
                • Payment status
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex max-w-[784px] justify-center items-start gap-7 relative w-[784px] max-md:flex-col max-md:w-full">
          <article className="flex flex-col items-start gap-[9.5px] flex-[1_0_0] self-stretch border relative bg-white p-[29px] rounded-xl border-solid border-[rgba(226,232,240,0.50)]">
            <h3 className="self-stretch text-[#1A1A1A] text-[17px] font-semibold leading-[24.5px]">
              For Trainers
            </h3>
            <p className="self-stretch text-slate-500 text-[11px] font-normal leading-[17.5px]">
              Comprehensive business management with scheduling,
              <br />
              payment processing, client communication, and progress
              <br />
              tracking — all in one place.
            </p>
          </article>
          
          <article className="flex flex-col items-start gap-[9.5px] flex-[1_0_0] self-stretch border relative bg-white p-[29px] rounded-xl border-solid border-[rgba(226,232,240,0.50)]">
            <h3 className="self-stretch text-[#1A1A1A] text-[17px] font-semibold leading-[24.5px]">
              For Clients
            </h3>
            <p className="self-stretch text-slate-500 text-[11px] font-normal leading-[17.5px]">
              Simple booking interface, secure payments, workout
              <br />
              tracking, and direct communication with their trainer.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
