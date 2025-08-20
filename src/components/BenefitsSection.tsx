import React from 'react';

export const BenefitsSection: React.FC = () => {
  const trainerBenefits = [
    {
      icon: (
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="benefits-list-icon" style={{ width: '17.5px', height: '17.5px', position: 'relative' }}>
          <path d="M9.25 5.125V9.5L12.1667 10.9583" stroke="#2563EB" strokeWidth="1.09375" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M9.24998 16.7916C13.2771 16.7916 16.5416 13.527 16.5416 9.49992C16.5416 5.47284 13.2771 2.20825 9.24998 2.20825C5.2229 2.20825 1.95831 5.47284 1.95831 9.49992C1.95831 13.527 5.2229 16.7916 9.24998 16.7916Z" stroke="#2563EB" strokeWidth="1.09375" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      ),
      text: 'Save 10+ hours per week on admin tasks'
    },
    {
      icon: (
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="benefits-list-icon" style={{ width: '17.5px', height: '17.5px', position: 'relative' }}>
          <path d="M12.1667 5.85425H16.5417V10.2292" stroke="#2563EB" strokeWidth="1.09375" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M16.5416 5.85425L10.3437 12.0522L6.6979 8.40633L1.95831 13.1459" stroke="#2563EB" strokeWidth="1.09375" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      ),
      text: 'Increase revenue with automated billing'
    },
    {
      icon: (
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="benefits-list-icon" style={{ width: '17.5px', height: '17.5px', position: 'relative' }}>
          <path d="M16.3965 8.04163C16.7296 9.67591 16.4922 11.375 15.7241 12.8554C14.9561 14.3359 13.7037 15.5083 12.1758 16.1772C10.6479 16.846 8.9369 16.9708 7.32812 16.5309C5.71934 16.0909 4.31002 15.1126 3.33518 13.7593C2.36035 12.406 1.87892 10.7594 1.97119 9.0941C2.06346 7.42879 2.72385 5.84544 3.84223 4.60811C4.9606 3.37077 6.46936 2.55423 8.1169 2.29467C9.76444 2.0351 11.4512 2.34819 12.8958 3.18173" stroke="#2563EB" strokeWidth="1.09375" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M7.0625 8.77091L9.25 10.9584L16.5417 3.66675" stroke="#2563EB" strokeWidth="1.09375" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      ),
      text: 'Reduce no-shows with smart reminders'
    }
  ];

  const clientBenefits = [
    {
      icon: (
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="benefits-list-icon" style={{ width: '17.5px', height: '17.5px', position: 'relative' }}>
          <path d="M12.8958 2.20825H5.60416C4.79875 2.20825 4.14583 2.86117 4.14583 3.66659V15.3333C4.14583 16.1387 4.79875 16.7916 5.60416 16.7916H12.8958C13.7012 16.7916 14.3542 16.1387 14.3542 15.3333V3.66659C14.3542 2.86117 13.7012 2.20825 12.8958 2.20825Z" stroke="#2563EB" strokeWidth="1.09375" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M9.25 13.875H9.25729" stroke="#2563EB" strokeWidth="1.09375" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      ),
      text: 'Book sessions anytime, anywhere'
    },
    {
      icon: (
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="benefits-list-icon" style={{ width: '17.5px', height: '17.5px', position: 'relative' }}>
          <path d="M16.3966 8.04163C16.7296 9.67591 16.4922 11.375 15.7242 12.8554C14.9561 14.3359 13.7037 15.5083 12.1758 16.1772C10.6479 16.846 8.93691 16.9708 7.32813 16.5309C5.71935 16.0909 4.31003 15.1126 3.3352 13.7593C2.36036 12.406 1.87894 10.7594 1.97121 9.0941C2.06348 7.42879 2.72387 5.84544 3.84224 4.60811C4.96062 3.37077 6.46938 2.55423 8.11692 2.29467C9.76446 2.0351 11.4512 2.34819 12.8958 3.18173" stroke="#2563EB" strokeWidth="1.09375" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M7.0625 8.77091L9.25 10.9584L16.5417 3.66675" stroke="#2563EB" strokeWidth="1.09375" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      ),
      text: 'Track progress and achievements'
    },
    {
      icon: (
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="benefits-list-icon" style={{ width: '17.5px', height: '17.5px', position: 'relative' }}>
          <path d="M9.25 5.125V9.5L12.1667 10.9583" stroke="#2563EB" strokeWidth="1.09375" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M9.25 16.7916C13.2771 16.7916 16.5417 13.527 16.5417 9.49992C16.5417 5.47284 13.2771 2.20825 9.25 2.20825C5.22292 2.20825 1.95833 5.47284 1.95833 9.49992C1.95833 13.527 5.22292 16.7916 9.25 16.7916Z" stroke="#2563EB" strokeWidth="1.09375" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      ),
      text: 'Receive timely session reminders'
    }
  ];

  return (
    <section className="flex w-full flex-col items-start min-h-[653px] bg-[rgba(248,250,252,0.20)] px-72 py-20 lg:px-60 md:px-40 max-md:px-10 max-sm:px-5">
      <div className="flex justify-center items-center gap-14 self-stretch relative max-md:flex-col max-md:gap-8 max-sm:gap-6">
        <article className="flex flex-col items-start gap-7 flex-[1_0_0] relative max-sm:gap-5">
          <div className="flex flex-col items-start self-stretch relative">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/797d3a2b736de9e12e68288bb951d29e3b463cea?width=1302"
              alt="Professional personal trainer"
              className="w-full object-cover rounded-[14px] aspect-[16/9]"
            />
            <div className="w-full h-full absolute rounded-[14px] left-0 top-0 bg-gradient-to-r from-black/20 to-transparent" />
          </div>
          
          <div className="flex flex-col items-start gap-3.5 self-stretch relative">
            <h3 className="self-stretch text-[#1A1A1A] text-xl font-semibold leading-7">
              Built for Trainers
            </h3>
            <p className="self-stretch text-[#1A1A1A] text-sm font-normal leading-6 max-sm:text-sm max-sm:leading-6">
              Spend less time on paperwork and more time doing what you love — training clients and growing your business.
            </p>
            
            <ul className="flex flex-col items-start gap-[13px] self-stretch relative pt-1.5 list-none">
              {trainerBenefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-[10.5px] self-stretch relative">
                  {benefit.icon}
                  <span className="text-[#1A1A1A] text-sm font-normal leading-5">
                    {benefit.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </article>
        
        <article className="flex flex-col items-start gap-7 flex-[1_0_0] relative">
          <div className="flex flex-col items-start self-stretch relative">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/f4044a7cae68fd2752a37eff955a9b24c1cadcc4?width=1302"
              alt="Client using fitness app"
              className="w-full object-cover rounded-[14px] aspect-[16/9]"
            />
            <div className="w-full h-full absolute rounded-[14px] left-0 top-0 bg-gradient-to-r from-black/20 to-transparent" />
          </div>
          
          <div className="flex flex-col items-start gap-3.5 self-stretch relative">
            <h3 className="self-stretch text-[#1A1A1A] text-xl font-semibold leading-7">
              Loved by Clients
            </h3>
            <p className="self-stretch text-[#1A1A1A] text-sm font-normal leading-6 max-sm:text-sm max-sm:leading-6">
              Give your clients a premium experience with intuitive booking, secure payments, and seamless communication.
            </p>
            
            <ul className="flex flex-col items-start gap-[13px] self-stretch relative pt-1.5 list-none">
              {clientBenefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-[10.5px] self-stretch relative">
                  {benefit.icon}
                  <span className="text-[#1A1A1A] text-sm font-normal leading-5">
                    {benefit.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};
