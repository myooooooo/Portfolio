import React from 'react';

const Hero: React.FC = () => {
  const line1 = "ZINEB".split(' ');
  const line2 = "ANSSAFOU".split(' ');
  const line3 = "L'AUDACE".split(' ');
  const line4 = "DU PIXEL.".split(' ');

  return (
    <section className="relative w-screen h-screen flex flex-col items-start justify-center px-8 md:px-20 bg-transparent overflow-hidden">
      {/* Structural Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zineb z-0 text-center w-full">
        ZINEB
      </div>

      <div className="relative z-10 w-full max-w-[1400px]">
        {/* Label */}
        <div className="reveal-node mb-10 flex items-center gap-4">
          <span className="text-[10px] font-bold uppercase tracking-widest-luxe text-pop-pink">
            MMI DIJON / LAURÉATE NSI 2024
          </span>
          <span className="font-cursive text-xl text-luxe-black/30 -rotate-12 translate-y-1">
            passionnée
          </span>
        </div>

        {/* Monumental Titles */}
        <div className="relative">
          <h1 className="font-black tracking-ultra-tight uppercase mb-12 relative z-10">
            <div className="text-[14vw] md:text-[11vw] leading-[0.82] text-luxe-black">
              <div className="flex flex-wrap gap-x-6 md:gap-x-10">
                {line1.map((word, i) => (
                  <span key={i} className="mask-container stagger-word">
                    <span className={`mask-word stagger-${(i % 7) + 1}`}>{word}</span>
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-x-6 md:gap-x-10 text-pop-pink">
                {line2.map((word, i) => (
                  <span key={i} className="mask-container stagger-word">
                    <span className={`mask-word stagger-${(i % 7) + 2}`}>{word}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="text-[8vw] md:text-[5vw] leading-[0.9] text-luxe-black mt-4 md:mt-6 opacity-60">
              {/* Ajout de gap-x-4 pour espacer les mots L'AUDACE DU PIXEL */}
              <div className="flex flex-wrap gap-x-4 md:gap-x-8">
                {line3.concat(line4).map((word, i) => (
                  <span key={i} className="mask-container stagger-word">
                    <span className={`mask-word stagger-${(i % 7) + 4}`}>{word}</span>
                  </span>
                ))}
              </div>
            </div>
          </h1>
          
          <div className="absolute top-0 right-10 z-20 reveal-node delay-1000 hidden md:block">
            <span className="font-cursive text-9xl text-luxe-black/80 drop-shadow-sm -rotate-12 block">
              Visionary
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end w-full">
          <div className="md:col-span-6 reveal-node delay-500 relative">
             <div className="absolute -top-10 -left-6 font-cursive text-pop-pink text-2xl -rotate-12">Digital Soul</div>
             <p className="text-xl md:text-2xl font-medium text-gray-400 leading-tight uppercase max-w-xl">
               Zineb Anssafou. Designer d'interface & <span className="text-luxe-black">Artiste de l'ombre.</span>
             </p>
          </div>
          <div className="md:col-span-6 flex justify-start md:justify-end reveal-node delay-700">
             <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest animate-pulse">
                <span>SCROLL DOWN</span> 
                <span className="text-pop-pink">➔</span> 
                <span className="text-gray-400">(Or Sideways)</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;