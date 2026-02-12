import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-transparent px-6 text-center overflow-hidden">
      <div className="flex flex-col items-center max-w-5xl">
        
        <div className="reveal-text-container mb-6">
          <span className="reveal-text-content text-xs font-bold uppercase tracking-[0.3em] text-apple-gray">
            MMI DIJON — STUDENT & ARTIST
          </span>
        </div>
        
        <h1 className="text-6xl md:text-[8vw] font-extrabold tracking-tight leading-[1] text-apple-black mb-10">
          <div className="reveal-text-container stagger-1">
            <span className="reveal-text-content">L'art de l'image,</span>
          </div>
          <div className="reveal-text-container stagger-2">
            <span className="reveal-text-content text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-600 to-black">
              la rigueur du design.
            </span>
          </div>
        </h1>

        <div className="reveal-text-container stagger-3 mb-12">
          <p className="reveal-text-content text-xl md:text-2xl font-medium text-apple-gray max-w-2xl leading-relaxed">
            Zineb Anssafou. Visual Artist & Digital Designer basée à Dijon. Lauréate NSI 2024.
          </p>
        </div>

        <div className="reveal-node stagger-4 flex gap-4">
           <button className="bg-apple-black text-white px-8 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity">
             Voir mes projets
           </button>
           <button className="text-apple-blue font-semibold text-sm flex items-center gap-1 hover:underline">
             En savoir plus <span className="text-lg">›</span>
           </button>
        </div>
      </div>

      {/* Decorative Subtle Shadow */}
      <div className="absolute bottom-0 w-full h-[30vh] bg-gradient-to-t from-soft-pink/50 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;