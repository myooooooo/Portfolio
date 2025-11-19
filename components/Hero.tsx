import React from 'react';
import DailyVibe from './DailyVibe';

const Hero: React.FC = () => {
  return (
    <section className="pt-40 pb-20 min-h-[90vh] flex flex-col justify-center items-center text-center relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-pop-purple/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-pop-pink/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-white/30 to-transparent pointer-events-none"></div>

      {/* Floating Stickers - Specific to Art & MMI */}
      <div className="absolute top-32 left-[10%] text-4xl animate-float opacity-80 rotate-12" title="Digital Art">🖊️</div>
      <div className="absolute bottom-40 left-[15%] text-5xl animate-float animation-delay-2000 opacity-80 -rotate-12" title="Community Management">💬</div>
      <div className="absolute top-40 right-[15%] text-4xl animate-float animation-delay-1000 opacity-80 rotate-6" title="University Life">🎓</div>
      <div className="absolute bottom-32 right-[10%] text-5xl animate-float animation-delay-3000 opacity-80 -rotate-6" title="Award Winner">🏆</div>

      <div className="relative z-10 px-4 max-w-6xl mx-auto">
        
        {/* Current Status Pill - Student Edition */}
        <div className="mb-8 inline-flex items-center gap-2 bg-white/80 backdrop-blur border-2 border-pop-purple rounded-full px-5 py-2 shadow-[4px_4px_0px_0px_#9D00FF] transform hover:scale-105 transition-transform cursor-help group" title="Objectif 2026">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pop-pink opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pop-pink"></span>
            </span>
            <span className="text-xs font-bold text-pop-purple uppercase tracking-wider group-hover:hidden">Status: Open to work (Janv 26) ✨</span>
            <span className="text-xs font-bold text-pop-purple uppercase tracking-wider hidden group-hover:block">Recherche Stage 10-12 semaines 📂</span>
        </div>
        
        {/* Badges */}
        <div className="flex justify-center gap-3 mb-6 animate-fade-in-up flex-wrap">
            <span className="bg-pop-yellow text-pop-purple px-3 py-1 rounded-md font-display text-sm rotate-[-3deg] shadow-sm border border-pop-purple">BUT MMI 2</span>
            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-md font-display text-sm rotate-[2deg] shadow-sm border border-blue-300">Designer Numérique</span>
            <span className="bg-pop-pink text-white px-3 py-1 rounded-md font-display text-sm rotate-[-1deg] shadow-sm border border-pop-purple">Community Manager</span>
        </div>

        <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8 text-pop-purple drop-shadow-sm relative">
          Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-pop-accent to-pop-purple">Designer</span>
          <br/>
          <span className="text-4xl md:text-6xl align-middle text-gray-400 font-serif italic opacity-60">&</span>
          <br/>
          Visual <span className="font-display text-pop-pink inline-block hover:scale-110 hover:rotate-3 transition-transform duration-300 cursor-cell underline decoration-wavy decoration-pop-yellow underline-offset-8">Storyteller</span>
          
          {/* Hand drawn SVG underline */}
          <svg className="absolute -bottom-8 right-10 w-32 h-32 text-pop-yellow opacity-90 animate-wiggle hidden md:block" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M10,50 Q30,20 50,50 T90,50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
             <path d="M80,40 L90,50 L80,60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
             <circle cx="90" cy="20" r="5" fill="#FF0080" className="animate-ping" />
          </svg>
        </h2>
        
        <p className="text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
          Hello ! Je suis <strong className="inline-block hover:animate-glitch text-pop-purple cursor-crosshair">Zineb</strong>. Étudiante MMI, illustratrice et CM.
          <br/>
          Lauréate des Trophées NSI, je cherche à allier <span className="text-pop-pink font-bold">stratégie</span> et <span className="text-pop-purple font-bold">créativité</span>.
          <br/>
          <span className="italic text-base text-gray-500 mt-2 block">"Passionnée par l'image, guidée par le code." 🌙</span>
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-10">
            <button 
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-pop-purple text-white text-lg font-bold py-4 px-10 rounded-full shadow-[0px_8px_0px_0px_#6a00aa] hover:shadow-[0px_4px_0px_0px_#6a00aa] hover:translate-y-1 transition-all flex items-center justify-center gap-2 group active:scale-95"
            >
                VOIR MON TRAVAIL <span className="group-hover:animate-spin-slow">🎨</span>
            </button>
            <button 
                 onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                 className="bg-white text-pop-pink border-2 border-pop-pink text-lg font-bold py-4 px-8 rounded-full shadow-sm hover:bg-pop-light transition-colors hover:rotate-3 active:scale-95"
            >
                Mon CV & Parcours 📜
            </button>
        </div>

        {/* The Invented Gadget */}
        <DailyVibe />

      </div>
    </section>
  );
};

export default Hero;