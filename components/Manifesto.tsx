import React from 'react';
import { ASSETS } from '../constants';

const Manifesto: React.FC = () => {
  return (
    <section className="h-screen flex bg-[#F0F0F0] relative overflow-hidden select-none">
        
        {/* DECOR: GRILLE DE FOND (Papier millimétré subtil) */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        {/* ------------------------------------------------ */}
        {/* PANEL 1 : LE TITRE & L'INTRODUCTION (Context) */}
        {/* ------------------------------------------------ */}
        <div className="w-[85vw] md:w-[45vw] h-full flex flex-col justify-center px-12 md:px-20 border-r border-black/10 relative z-10 bg-white">
           <div className="reveal-node">
               <div className="flex items-center gap-3 mb-6">
                   <div className="w-3 h-3 bg-pop-pink rounded-full animate-pulse"></div>
                   <span className="text-xs font-mono font-bold uppercase tracking-widest text-gray-500">System_Philosophy_v2.0</span>
               </div>
               
               <h2 className="text-[12vw] md:text-[6vw] font-black uppercase leading-[0.9] tracking-tighter-extreme mb-8 text-swiss-black">
                   THE<br/>
                   <span className="text-pop-pink">DUAL</span><br/>
                   SOUL.
               </h2>

               <div className="w-20 h-2 bg-black mb-8"></div>

               <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-600 max-w-md text-justify">
                   Je ne choisis pas entre le <strong>Code</strong> et l'<strong>Art</strong>. 
                   Pour moi, une interface est une sculpture logique. Le design attire l'attention, 
                   la technique la retient. C'est cette fusion qui crée l'iconique.
               </p>
           </div>

           {/* Technical Badge */}
           <div className="absolute bottom-12 left-12 border border-black px-4 py-2 flex items-center gap-4 reveal-node delay-200">
               <span className="font-black text-2xl">A+</span>
               <div className="flex flex-col text-[9px] font-bold uppercase leading-tight">
                   <span>Performance</span>
                   <span>Aesthetics</span>
               </div>
           </div>
        </div>

        {/* ------------------------------------------------ */}
        {/* PANEL 2 : L'IMAGE ANALYSÉE (The Concrete Visual) */}
        {/* ------------------------------------------------ */}
        <div className="w-[100vw] md:w-[60vw] h-full relative flex items-center justify-center border-r border-black/10 bg-[#E5E5E5]">
            
            {/* Le Cadre "Blueprint" */}
            <div className="relative w-[70%] h-[70%] border-2 border-black bg-white p-4 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] group reveal-node">
                
                {/* L'Image Principale */}
                <div className="relative w-full h-full overflow-hidden border border-gray-200">
                     <img 
                        src={ASSETS.MANIFESTO_BG}
                        alt="Artistic Vision"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://placehold.co/800x1000/111/FFF?text=ART+VISION`;
                        }}
                        className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                     />
                     
                     {/* Overlay Grid lines (Les traits de coupe) */}
                     <div className="absolute top-0 left-1/2 w-px h-full bg-white/30"></div>
                     <div className="absolute top-1/2 left-0 w-full h-px bg-white/30"></div>
                     
                     {/* Floating UI Elements over image */}
                     <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur text-white px-3 py-1 text-[10px] font-mono">
                         RGB: 255, 0, 128
                     </div>
                </div>

                {/* Annotations Techniques autour du cadre */}
                <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-pop-pink"></div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-pop-pink"></div>
                
                <span className="absolute -top-6 left-0 text-[9px] font-black uppercase tracking-widest text-black">FIG 01. — VISION</span>
                <span className="absolute -bottom-6 right-0 text-[9px] font-black uppercase tracking-widest text-black">SCALE 1:1</span>
                
                {/* Side Data */}
                <div className="absolute top-10 -right-8 flex flex-col gap-2 opacity-50">
                     <span className="text-[8px] font-mono rotate-90 origin-left">H: 1920px</span>
                </div>
            </div>

        </div>

        {/* ------------------------------------------------ */}
        {/* PANEL 3 : LES PILIERS (The Pillars) */}
        {/* ------------------------------------------------ */}
        <div className="w-[85vw] md:w-[45vw] h-full bg-swiss-black text-white flex flex-col justify-center p-12 md:p-16 border-r border-black/10">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-gray-500 mb-12 border-b border-white/20 pb-4">
                CORE_VALUES
            </h3>

            <div className="space-y-12">
                {[
                    { id: '01', title: 'PIXEL PERFECT', desc: "Chaque détail compte. L'alignement est une religion." },
                    { id: '02', title: 'STORY DRIVEN', desc: "Une image sans histoire est juste une décoration." },
                    { id: '03', title: 'CODE CRAFTED', desc: "Développé proprement. Performant. Scalable." }
                ].map((item, idx) => (
                    <div key={item.id} className={`reveal-node delay-${idx * 100} group`}>
                        <div className="flex items-baseline gap-4 mb-2">
                            <span className="text-pop-pink font-mono font-bold text-sm">/{item.id}</span>
                            <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                                {item.title}
                            </h4>
                        </div>
                        <p className="text-sm text-gray-400 pl-10 max-w-xs font-medium leading-relaxed group-hover:text-white transition-colors">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-auto pt-12">
                <div className="w-full h-px bg-white/20 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1/3 h-full bg-pop-pink animate-slide-right"></div>
                </div>
                <div className="flex justify-between mt-2 text-[9px] font-mono text-gray-500">
                    <span>PROCESSING...</span>
                    <span>100%</span>
                </div>
            </div>
        </div>

    </section>
  );
};

export default Manifesto;