import React from "react";

type BenefitsSectionProps = {
  trainerImage?: string;
  clientImage?: string;
};

export default function BenefitsSection({
  trainerImage = "/assets/trainer.jpg", // replace with your asset
  clientImage = "/assets/client.jpg",   // replace with your asset
}: BenefitsSectionProps) {
  const trainerBenefits = [
    {
      icon: (
        <svg viewBox="0 0 18 19" fill="none" className="w-4 h-4 flex-shrink-0">
          <path d="M9.25 5.125V9.5L12.1667 10.9583" stroke="#2563EB" strokeWidth="1.09375" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.24998 16.7916C13.2771 16.7916 16.5416 13.527 16.5416 9.49992C16.5416 5.47284 13.2771 2.20825 9.24998 2.20825C5.2229 2.20825 1.95831 5.47284 1.95831 9.49992C1.95831 13.527 5.2229 16.7916 9.24998 16.7916Z" stroke="#2563EB" strokeWidth="1.09375" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      text: "Save 10+ hours per week on admin tasks",
    },
    {
      icon: (
        <svg viewBox="0 0 18 19" fill="none" className="w-4 h-4 flex-shrink-0">
          <path d="M12.1667 5.85425H16.5417V10.2292" stroke="#2563EB" strokeWidth="1.09375" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.5416 5.85425L10.3437 12.0522L6.6979 8.40633L1.95831 13.1459" stroke="#2563EB" strokeWidth="1.09375" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      text: "Increase revenue with automated billing",
    },
    {
      icon: (
        <svg viewBox="0 0 18 19" fill="none" className="w-4 h-4 flex-shrink-0">
          <path d="M16.3965 8.04163C16.7296 9.67591 16.4922 11.375 15.7241 12.8554C14.9561 14.3359 13.7037 15.5083 12.1758 16.1772C10.6479 16.846 8.9369 16.9708 7.32812 16.5309C5.71934 16.0909 4.31002 15.1126 3.33518 13.7593C2.36035 12.406 1.87892 10.7594 1.97119 9.0941C2.06346 7.42879 2.72385 5.84544 3.84223 4.60811C4.9606 3.37077 6.46936 2.55423 8.1169 2.29467C9.76444 2.0351 11.4512 2.34819 12.8958 3.18173" stroke="#2563EB" strokeWidth="1.09375" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.0625 8.77091L9.25 10.9584L16.5417 3.66675" stroke="#2563EB" strokeWidth="1.09375" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      text: "Reduce no-shows with smart reminders",
    },
  ];

  const clientBenefits = [
    {
      icon: (
        <svg viewBox="0 0 18 19" fill="none" className="w-4 h-4 flex-shrink-0">
          <path d="M12.8958 2.20825H5.60416C4.79875 2.20825 4.14583 2.86117 4.14583 3.66659V15.3333C4.14583 16.1387 4.79875 16.7916 5.60416 16.7916H12.8958C13.7012 16.7916 14.3542 16.1387 14.3542 15.3333V3.66659C14.3542 2.86117 13.7012 2.20825 12.8958 2.20825Z" stroke="#2563EB" strokeWidth="1.09375" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.25 13.875H9.25729" stroke="#2563EB" strokeWidth="1.09375" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      text: "Book sessions anytime, anywhere",
    },
    {
      icon: (
        <svg viewBox="0 0 18 19" fill="none" className="w-4 h-4 flex-shrink-0">
          <path d="M16.3966 8.04163C16.7296 9.67591 16.4922 11.375 15.7242 12.8554C14.9561 14.3359 13.7037 15.5083 12.1758 16.1772C10.6479 16.846 8.93691 16.9708 7.32813 16.5309C5.71935 16.0909 4.31003 15.1126 3.3352 13.7593C2.36036 12.406 1.87894 10.7594 1.97121 9.0941C2.06348 7.42879 2.72387 5.84544 3.84224 4.60811C4.96062 3.37077 6.46938 2.55423 8.11692 2.29467C9.76446 2.0351 11.4512 2.34819 12.8958 3.18173" stroke="#2563EB" strokeWidth="1.09375" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.0625 8.77091L9.25 10.9584L16.5417 3.66675" stroke="#2563EB" strokeWidth="1.09375" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      text: "Track progress and achievements",
    },
    {
      icon: (
        <svg viewBox="0 0 18 19" fill="none" className="w-4 h-4 flex-shrink-0">
          <path d="M9.25 5.125V9.5L12.1667 10.9583" stroke="#2563EB" strokeWidth="1.09375" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.25 16.7916C13.2771 16.7916 16.5417 13.527 16.5417 9.49992C16.5417 5.47284 13.2771 2.20825 9.25 2.20825C5.22292 2.20825 1.95833 5.47284 1.95833 9.49992C1.95833 13.527 5.22292 16.7916 9.25 16.7916Z" stroke="#2563EB" strokeWidth="1.09375" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      text: "Receive timely session reminders",
    },
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two responsive columns */}
        <div className="grid gap-16 md:gap-14 md:grid-cols-2">
          {/* Trainers */}
          <div>
            {/* Image with gradient overlay, rounded, and no fixed height */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={trainerImage}
                alt="Professional personal trainer"
                className="w-full h-auto object-cover aspect-[16/9]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
            </div>

            {/* Copy */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-[#1A1A1A]">Built for Trainers</h3>
              <p className="mt-4 text-[#1A1A1A] text-base leading-7">
                Spend less time on paperwork and more time doing what you love — training clients and growing your business.
              </p>
              <ul className="mt-6 space-y-3">
                {trainerBenefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    {b.icon}
                    <span className="text-[#1A1A1A] text-sm leading-5">{b.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Clients */}
          <div>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={clientImage}
                alt="Client using fitness app"
                className="w-full h-auto object-cover aspect-[16/9]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-[#1A1A1A]">Loved by Clients</h3>
              <p className="mt-4 text-[#1A1A1A] text-base leading-7">
                Give your clients a premium experience with intuitive booking, secure payments, and seamless communication.
              </p>
              <ul className="mt-6 space-y-3">
                {clientBenefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    {b.icon}
                    <span className="text-[#1A1A1A] text-sm leading-5">{b.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}