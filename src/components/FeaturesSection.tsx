import React from 'react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: (
        <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="feature-icon" style={{ width: '28px', height: '28px', flexShrink: 0, position: 'relative' }}>
          <path d="M10.1734 2.33331V6.99998" stroke="#2563EB" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M19.5067 2.33331V6.99998" stroke="#2563EB" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M23.0067 4.66669H6.67336C5.3847 4.66669 4.34003 5.71136 4.34003 7.00002V23.3334C4.34003 24.622 5.3847 25.6667 6.67336 25.6667H23.0067C24.2954 25.6667 25.34 24.622 25.34 23.3334V7.00002C25.34 5.71136 24.2954 4.66669 23.0067 4.66669Z" stroke="#2563EB" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M4.34003 11.6667H25.34" stroke="#2563EB" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      ),
      title: 'Streamlined Scheduling',
      description: 'Effortless booking system that syncs with your calendar. Clients can book, reschedule, and manage their sessions with ease.'
    },
    {
      icon: (
        <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="feature-icon" style={{ width: '28px', height: '28px', flexShrink: 0, position: 'relative' }}>
          <path d="M23.8233 5.83331H5.15666C3.86799 5.83331 2.82333 6.87798 2.82333 8.16665V19.8333C2.82333 21.122 3.86799 22.1666 5.15666 22.1666H23.8233C25.112 22.1666 26.1567 21.122 26.1567 19.8333V8.16665C26.1567 6.87798 25.112 5.83331 23.8233 5.83331Z" stroke="#2563EB" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M2.82333 11.6667H26.1567" stroke="#2563EB" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      ),
      title: 'Payments & Credit System',
      description: 'Secure payment processing with flexible credit packages. Handle billing, refunds, and package management seamlessly.'
    },
    {
      icon: (
        <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="feature-icon" style={{ width: '28px', height: '28px', flexShrink: 0, position: 'relative' }}>
          <path d="M18.8366 24.5V22.1667C18.8366 20.929 18.345 19.742 17.4698 18.8668C16.5946 17.9917 15.4076 17.5 14.17 17.5H7.16996C5.93229 17.5 4.7453 17.9917 3.87013 18.8668C2.99496 19.742 2.5033 20.929 2.5033 22.1667V24.5" stroke="#2563EB" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M18.8367 3.64935C19.8374 3.90878 20.7236 4.49316 21.3563 5.31076C21.989 6.12836 22.3322 7.13289 22.3322 8.16669C22.3322 9.20048 21.989 10.205 21.3563 11.0226C20.7236 11.8402 19.8374 12.4246 18.8367 12.684" stroke="#2563EB" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M25.8367 24.5V22.1667C25.8359 21.1327 25.4918 20.1282 24.8583 19.311C24.2248 18.4938 23.3378 17.9102 22.3367 17.6517" stroke="#2563EB" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M10.67 12.8333C13.2473 12.8333 15.3366 10.744 15.3366 8.16667C15.3366 5.58934 13.2473 3.5 10.67 3.5C8.09263 3.5 6.0033 5.58934 6.0033 8.16667C6.0033 10.744 8.09263 12.8333 10.67 12.8333Z" stroke="#2563EB" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      ),
      title: 'Client Engagement Tools',
      description: 'Build stronger relationships with progress tracking, workout plans, and direct communication features.'
    }
  ];

  return (
    <section className="flex w-full flex-col items-start h-[483px] bg-[rgba(248,250,252,0.30)] px-[260px] py-[84px] max-md:px-10 max-md:py-[60px] max-sm:px-5 max-sm:py-10">
      <div className="flex max-w-[1400px] flex-col items-start gap-14 self-stretch relative px-[21px] py-0">
        <header className="flex flex-col items-center gap-3.5 self-stretch relative">
          <h2 className="self-stretch text-[#1A1A1A] text-center text-2xl font-semibold leading-8">
            Everything you need to grow your training business
          </h2>
          <div className="flex w-[588px] max-w-[588px] flex-col items-center relative max-sm:w-full">
            <p className="text-[#1A1A1A] text-center text-base font-normal leading-[24.5px]">
              Focus on what you do best — training clients
              <br />— while we handle the business management.
            </p>
          </div>
        </header>
        
        <div className="flex justify-center items-start gap-[42px] self-stretch relative max-md:flex-col max-md:gap-8">
          {features.map((feature, index) => (
            <article key={index} className="w-[425px] self-stretch relative flex flex-col items-center max-md:w-full">
              <div className="flex w-14 justify-center items-center relative h-14 bg-[rgba(37,99,235,0.10)] mb-[21px] px-0 py-3.5 rounded-[14px]">
                {feature.icon}
              </div>
              <h3 className="flex w-[425px] flex-col items-center relative h-[21px] mb-3.5">
                <span className="text-[#1A1A1A] text-center text-lg font-semibold leading-6">
                  {feature.title}
                </span>
              </h3>
              <div className="flex w-[336px] max-w-[336px] flex-col items-center relative">
                <p className="text-[#1A1A1A] text-center text-[13px] font-normal leading-[21px]">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
