import React, { useState, useRef } from 'react';
import { ASSETS } from '../constants';

const Manifesto: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const { left, width } = containerRef.current.getBoundingClientRect();
    let clientX;
    
    if ('touches' in event) {
        clientX = event.touches[0].clientX;
    } else {
        clientX = (event as React.MouseEvent).clientX;
    }

    const newPos = ((clientX - left) / width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, newPos)));
  };

  return (
    <section className="h-screen flex bg-[#F0F0F0] relative overflow-hidden select-none">
        {/* SEO Content */}
        <div className="sr-only">
          <h2>Ma Philosophie de Design et Développement</h2>
          <p>
            Designer et développeuse, je ne choisis pas entre le code et l'art.
            Pour moi, une interface est une sculpture logique où le design attire l'attention
            et la technique la retient. Ma philosophie repose sur trois piliers fondamentaux :
            le pixel perfect pour une précision absolue, le story driven pour des expériences
            engageantes, et le code crafted pour des performances optimales.
          </p>
        </div>

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
        {/* PANEL 2 : SLIDER INTERACTIF (ROUGH VS FINAL) */}
        {/* ------------------------------------------------ */}
        <div className="w-[100vw] md:w-[60vw] h-full relative flex items-center justify-center border-r border-black/10 bg-[#E5E5E5]">
            
            {/* Le Cadre "Blueprint" */}
            <div className="relative w-[70%] h-[70%] border-2 border-black bg-white p-4 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] group reveal-node">
                
                {/* Conteneur du Slider */}
                <div 
                    ref={containerRef}
                    className="relative w-full h-full overflow-hidden border border-gray-200 cursor-ew-resize touch-none"
                    onMouseMove={handleMove}
                    onTouchMove={handleMove}
                >
                     {/* IMAGE 1 : FINAL (Arrière-plan) */}
                     <div className="absolute inset-0 w-full h-full">
                         <img 
                            src={ASSETS.MANIFESTO_BG}
                            alt="Final Render"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = `https://placehold.co/800x1000/111/FFF?text=FINAL+RENDER`;
                            }}
                            className="w-full h-full object-cover grayscale contrast-125"
                         />
                         <span className="absolute top-4 right-4 bg-black text-white px-2 py-1 text-[9px] font-black uppercase tracking-widest z-10">
                            FINAL RENDER
                         </span>
                     </div>

                     {/* IMAGE 2 : SKETCH (Premier plan, clippé) */}
                     <div 
                        className="absolute inset-0 w-full h-full border-r-2 border-pop-pink bg-white"
                        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                     >
                         <img 
                            src={ASSETS.MANIFESTO_SKETCH}
                            alt="Rough Sketch"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = `https://placehold.co/800x1000/fff/000?text=ROUGH+SKETCH`;
                            }}
                            className="w-full h-full object-cover grayscale contrast-100 opacity-80"
                         />
                         {/* Grid overlay sur le sketch pour l'effet "Work in progress" */}
                         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-30 mix-blend-multiply"></div>
                         
                         <span className="absolute top-4 left-4 bg-pop-pink text-white px-2 py-1 text-[9px] font-black uppercase tracking-widest z-10">
                            ROUGH SKETCH
                         </span>
                     </div>

                     {/* THE SLIDER HANDLE */}
                     <div 
                        className="absolute top-0 bottom-0 w-0.5 bg-pop-pink z-20 shadow-[0_0_10px_rgba(255,0,128,0.5)]"
                        style={{ left: `${sliderPosition}%` }}
                     >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border-2 border-pop-pink rounded-full flex items-center justify-center shadow-lg">
                            <div className="flex gap-0.5">
                                <div className="w-0.5 h-3 bg-pop-pink"></div>
                                <div className="w-0.5 h-3 bg-pop-pink"></div>
                            </div>
                        </div>
                     </div>
                </div>

                {/* Annotations Techniques autour du cadre */}
                <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-pop-pink"></div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-pop-pink"></div>
                
                <span className="absolute -top-6 left-0 text-[9px] font-black uppercase tracking-widest text-black">FIG 01. — PROCESS</span>
                <span className="absolute -bottom-6 right-0 text-[9px] font-black uppercase tracking-widest text-black flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-pop-pink animate-pulse"></span>
                    INTERACTIVE ANALYSIS
                </span>
                
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
                    {
                        id: '01',
                        title: 'PIXEL PERFECT',
                        desc: "Chaque détail compte. L'alignement est une religion. Je crois en la précision absolue : grilles structurées, espacements calculés, typographie millimétrique. Un pixel de décalage peut ruiner l'harmonie d'une interface. La perfection visuelle n'est pas une option, c'est une exigence."
                    },
                    {
                        id: '02',
                        title: 'STORY DRIVEN',
                        desc: "Une image sans histoire est juste une décoration. Chaque projet raconte quelque chose. Je conçois des expériences qui engagent émotionnellement, qui créent une connexion. Le design n'est pas seulement esthétique, il communique, il inspire, il transforme l'ordinaire en mémorable."
                    },
                    {
                        id: '03',
                        title: 'CODE CRAFTED',
                        desc: "Développé proprement. Performant. Scalable. Mon code est mon artisanat : structuré, optimisé, maintenable. Je privilégie l'élégance technique et les bonnes pratiques. Performance native, architecture évolutive, tests rigoureux. Parce qu'un beau design mérite un code à la hauteur."
                    }
                ].map((item, idx) => (
                    <div key={item.id} className={`reveal-node delay-${idx * 100} group`}>
                        <div className="flex items-baseline gap-4 mb-2">
                            <span className="text-pop-pink font-mono font-bold text-sm">/{item.id}</span>
                            <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                                {item.title}
                            </h4>
                        </div>
                        <p className="text-sm text-gray-400 pl-10 max-w-md font-medium leading-relaxed group-hover:text-white transition-colors">
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