import React from 'react';

const Hero: React.FC = () => {
  const line1 = "ZINEB".split(' ');
  const line2 = "ANSSAFOU".split(' ');
  const line3 = "L'AUDACE".split(' ');
  const line4 = "DU PIXEL.".split(' ');

  return (
    <section className="relative min-h-screen flex flex-col items-start justify-start pt-32 md:pt-48 px-8 md:px-20 bg-transparent overflow-hidden">
      {/* Structural Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zineb z-0 text-center w-full">
        ZINEB
      </div>

      <div className="relative z-10 w-full max-w-[1400px]">
        {/* Label Uppercase with Cursive touch - Spacing increased with mt-8 */}
        <div className="reveal-node mb-16 flex items-center gap-4">
          <span className="text-[10px] font-bold uppercase tracking-widest-luxe text-pop-pink">
            MMI DIJON / LAURÉATE NSI 2024
          </span>
          <span className="font-cursive text-xl text-luxe-black/30 -rotate-12 translate-y-1">
            passionnée
          </span>
        </div>

        {/* Monumental Titles - Word by Word */}
        <div className="relative">
          <h1 className="font-black tracking-ultra-tight uppercase mb-20 relative z-10">
            {/* Main Name - Large */}
            <div className="text-[14vw] md:text-[12vw] leading-[0.82] text-luxe-black">
              <div className="flex flex-wrap">
                {line1.map((word, i) => (
                  <span key={i} className="mask-container stagger-word">
                    <span className={`mask-word stagger-${(i % 7) + 1}`}>{word}</span>
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap text-pop-pink">
                {line2.map((word, i) => (
                  <span key={i} className="mask-container stagger-word">
                    <span className={`mask-word stagger-${(i % 7) + 2}`}>{word}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Slogan - Smaller for hierarchy */}
            <div className="text-[8vw] md:text-[6vw] leading-[0.9] text-luxe-black mt-4 md:mt-8">
              <div className="flex flex-wrap">
                {line3.concat(line4).map((word, i) => (
                  <span key={i} className="mask-container stagger-word">
                    <span className={`mask-word stagger-${(i % 7) + 4}`}>{word}</span>
                  </span>
                ))}
              </div>
            </div>
          </h1>
          
          {/* Cursive Signature Overlay */}
          <div className="absolute top-0 right-0 md:right-10 z-20 reveal-node delay-1000">
            <span className="font-cursive text-6xl md:text-9xl text-luxe-black/80 drop-shadow-sm -rotate-12 block">
              Visionary
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end w-full">
          <div className="md:col-span-6 reveal-node delay-500 relative">
             <div className="absolute -top-10 -left-6 font-cursive text-pop-pink text-2xl -rotate-12">Digital Soul</div>
             <p className="text-xl md:text-3xl font-medium text-gray-400 leading-tight uppercase max-w-xl">
               Zineb Anssafou. Designer d'interface & <span className="text-luxe-black">Artiste de l'ombre.</span>
             </p>
          </div>
          <div className="md:col-span-6 flex justify-start md:justify-end reveal-node delay-700">
             <button className="group relative flex items-center gap-6 text-luxe-black font-black uppercase text-sm tracking-widest">
               <span className="w-16 h-[2px] bg-luxe-black group-hover:w-24 group-hover:bg-pop-pink transition-all duration-700"></span>
               DÉCOUVRIR MES MONDES
             </button>
          </div>
        </div>
      </div>

      {/* Vertical Indicator */}
      <div className="absolute right-10 bottom-10 flex flex-col items-center gap-6 reveal-node delay-1000">
        <span className="text-[10px] font-bold uppercase tracking-widest [writing-mode:vertical-lr]">EXPLORE NOW</span>
        <div className="w-[1px] h-20 bg-luxe-black/10"></div>
      </div>
    </section>
  );
};

export default Hero;