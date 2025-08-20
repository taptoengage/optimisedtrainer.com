import React from 'react';

export const MissionSection: React.FC = () => {
  const values = [
    {
      emoji: '🎯',
      title: 'Our Mission',
      description: 'Simplify business management so trainers can focus on their passion — helping clients achieve their goals.'
    },
    {
      emoji: '💡',
      title: 'Our Vision',
      description: 'A world where every independent trainer has the tools to build a thriving, sustainable business.'
    },
    {
      emoji: '🤝',
      title: 'Our Values',
      description: 'Simplicity, reliability, and genuine care for the fitness community that drives everything we do.'
    }
  ];

  return (
    <section className="flex w-full flex-col items-start h-[470px] bg-[rgba(248,250,252,0.30)] px-96 py-20 xl:px-80 lg:px-64 md:px-48 max-md:px-32 max-md:py-16 max-sm:px-5 max-sm:py-10">
      <div className="flex flex-col items-start gap-7 self-stretch relative">
        <header className="flex flex-col items-center self-stretch relative">
          <h2 className="self-stretch text-[#1A1A1A] text-center text-2xl font-semibold leading-8 lg:text-xl lg:leading-7 max-sm:text-lg max-sm:leading-6">
            Empowering independent trainers, not just big gyms
          </h2>
        </header>
        
        <div className="flex flex-col items-center self-stretch relative max-sm:w-full">
          <p className="self-stretch text-[#1A1A1A] text-center text-base font-normal leading-relaxed max-md:text-sm max-md:leading-6 max-sm:text-sm max-sm:leading-6">
            We believe personal trainers should have access to the same powerful tools as large fitness chains. That's why we built Optimised Trainer — to level the playing field and help independent trainers focus on what they do best: transforming lives through fitness.
          </p>
        </div>
        
        <div className="flex justify-center items-start gap-7 self-stretch relative pt-7 max-md:flex-col max-md:gap-6">
          {values.map((value, index) => (
            <article key={index} className="w-[243px] self-stretch relative flex flex-col items-center max-md:w-full">
              <div className="flex w-[243px] flex-col items-center relative mb-2">
                <span className="text-[#1A1A1A] text-center text-2xl font-normal leading-[31.5px]">
                  {value.emoji}
                </span>
              </div>
              <h3 className="flex w-[243px] flex-col items-center relative mb-[5px]">
                <span className="text-[#1A1A1A] text-center text-[17px] font-semibold leading-[24.5px]">
                  {value.title}
                </span>
              </h3>
              <div className="flex w-[243px] flex-col items-center relative">
                <p className="text-slate-500 text-center text-sm font-normal leading-6 max-sm:text-sm max-sm:leading-6">
                  {value.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
