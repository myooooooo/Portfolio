import React from 'react';
import { ASSETS } from '../constants';

const Manifesto: React.FC = () => {
  return (
    <div className="h-screen flex flex-row bg-white relative">
        
        {/* PANEL 1: KINETIC TYPOGRAPHY */}
        <div className="w-[85vw] md:w-[60vw] h-full flex flex-col justify-between p-12 md:p-20 border-r border-black/10 relative overflow-hidden group bg-swiss-black text-white">
           
           {/* Moving Marquee Text Background */}
           <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none select-none overflow-hidden flex flex-col justify-center gap-8">
               <div className="whitespace-nowrap text-[10vh] font-black text-transparent stroke-text opacity-50" style={{ WebkitTextStroke: '1px white' }}>
                   DESIGN IS INTELLIGENCE MADE VISIBLE — DESIGN IS INTELLIGENCE MADE VISIBLE —
               </div>
               <div className="whitespace-nowrap text-[10vh] font-black text-transparent stroke-text opacity-50 ml-[-200px]" style={{ WebkitTextStroke: '1px white' }}>
                   FORM FOLLOWS FUNCTION — FORM FOLLOWS FUNCTION — FORM FOLLOWS FUNCTION —
               </div>
               <div className="whitespace-nowrap text-[10vh] font-black text-transparent stroke-text opacity-50" style={{ WebkitTextStroke: '1px white' }}>
                   LESS BUT BETTER — LESS BUT BETTER — LESS BUT BETTER — LESS BUT BETTER —
               </div>
           </div>

           <div className="z-10 relative mt-20 reveal-node">
               <span className="text-pop-pink font-mono text-xs mb-4 block tracking-widest">/// MANIFESTO.SYS</span>
               <h2 className="text-[14vw] leading-[0.75] font-black uppercase tracking-tighter mask-text">
                  <span>NOT</span>
               </h2>
               <h2 className="text-[14vw] leading-[0.75] font-black uppercase tracking-tighter mask-text delay-100 pl-12">
                  <span>JUST</span>
               </h2>
               <h2 className="text-[14vw] leading-[0.75] font-black uppercase tracking-tighter text-pop-pink mask-text delay-200">
                  <span>PIXELS.</span>
               </h2>
           </div>
           
           <div className="z-10 relative border-t border-white/20 pt-8 flex justify-between items-end reveal-node delay-300">
               <p className="text-sm md:text-lg font-bold uppercase tracking-widest max-w-xs leading-relaxed text-gray-400">
                  Le code est ma toile. <br/>
                  L'écran est ma galerie.
               </p>
               <div className="animate-spin-slow text-4xl">✶</div>
           </div>
        </div>

        {/* PANEL 2: IMAGE & SLOGAN (Style Poster) */}
        <div className="w-[100vw] md:w-[70vw] h-full relative border-r border-black/10 overflow-hidden flex items-center justify-center bg-gray-100">
            <img 
              src={ASSETS.MANIFESTO_BG}
              alt="Abstract Fluid" 
              onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://placehold.co/1080x1920/1a1a1a/ffffff?text=MANIFESTO+ART`;
              }}
              className="absolute inset-0 w-full h-full object-cover opacity-100 grayscale contrast-125 mix-blend-multiply hover:scale-105 transition-transform duration-[3s] ease-out"
            />
            
            <div className="relative z-10 text-center mix-blend-difference pointer-events-none">
               <h3 className="text-[12vw] font-black uppercase tracking-ultra-tight text-white leading-none mask-text">
                  <span>RAW</span>
               </h3>
               <div className="h-2 w-full bg-white my-4 scale-x-0 animate-expand-width"></div>
               <h3 className="text-[12vw] font-black uppercase tracking-ultra-tight text-white leading-none mask-text delay-100">
                  <span>MOTION</span>
               </h3>
            </div>
        </div>

        {/* PANEL 3: PHILOSOPHIE */}
        <div className="w-[90vw] md:w-[50vw] h-full bg-white flex flex-col justify-center p-12 border-r border-black/10 relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[400px] font-black text-gray-50 select-none pointer-events-none">
                 *
             </div>

            <div className="space-y-12 relative z-10">
               <div className="reveal-node">
                  <div className="flex items-center gap-4 mb-4">
                      <span className="h-px w-10 bg-black"></span>
                      <span className="text-black text-xs font-bold uppercase tracking-widest">Vision</span>
                  </div>
                  <p className="text-4xl md:text-5xl font-black uppercase leading-[0.95] tracking-tight mask-text">
                     <span>L'ESTHÉTIQUE SANS</span>
                  </p>
                  <p className="text-4xl md:text-5xl font-black uppercase leading-[0.95] tracking-tight mask-text delay-100">
                     <span>FONCTION EST <span className="text-pop-pink">INUTILE.</span></span>
                  </p>
               </div>
               
               <div className="reveal-node">
                  <p className="text-4xl md:text-5xl font-black uppercase leading-[0.95] tracking-tight text-gray-300 hover:text-black transition-colors duration-500 mask-text delay-200">
                     <span>LA FONCTION SANS ÂME</span>
                  </p>
                  <p className="text-4xl md:text-5xl font-black uppercase leading-[0.95] tracking-tight text-gray-300 hover:text-black transition-colors duration-500 mask-text delay-300">
                     <span>EST <span className="line-through decoration-pop-pink decoration-4 text-black">ENNUYEUSE.</span></span>
                  </p>
               </div>
            </div>
        </div>

    </div>
  );
};

export default Manifesto;