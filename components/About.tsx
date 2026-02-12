import React from 'react';
import { EXPERIENCE, PROFILE_IMAGE_URL } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-40 bg-white px-8 md:px-20 h-full overflow-y-auto">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Massive Headline */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-20 md:mb-40 items-start">
          <div className="md:col-span-8 relative">
            <div className="absolute -top-12 left-0 font-cursive text-pop-pink text-3xl -rotate-6">L'histoire commence ici...</div>
            <h2 className="text-7xl md:text-[10vw] font-black uppercase leading-[0.8] tracking-ultra-tight mb-16">
              <span className="reveal-node block">UNE VISION</span>
              <span className="reveal-node stagger-1 block text-pop-pink">MODERNE.</span>
            </h2>
            <p className="text-xl md:text-4xl font-medium text-gray-400 uppercase leading-none max-w-4xl reveal-node stagger-2">
              BORN IN ART. <span className="text-luxe-black">MADE FOR DIGITAL.</span> 
              JE CRÉE DES RÉCITS VISUELS OÙ CHAQUE PIXEL A UNE RAISON D'ÊTRE.
            </p>
          </div>
          <div className="md:col-span-4 reveal-node stagger-3 pt-10 relative">
             <span className="absolute top-0 right-0 font-cursive text-pop-pink/30 text-5xl rotate-12">Creative soul</span>
             <div className="text-[10px] font-black tracking-widest-luxe text-gray-300 uppercase mb-4">/ PROFILE</div>
             <p className="text-sm font-bold leading-relaxed uppercase">
               Actuellement stagiaire chez Polytech et étudiante en BUT MMI, je développe une approche hybride entre le design graphique et l'innovation technologique.
             </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32 md:mb-60">
          <div className="lg:col-span-6 reveal-node relative">
             <div className="absolute -bottom-8 -right-8 z-10 font-cursive text-white text-4xl -rotate-12 bg-pop-pink px-6 py-2 shadow-xl">C'est moi !</div>
             <div className="aspect-[4/5] overflow-hidden bg-gray-100">
               <img 
                 src={PROFILE_IMAGE_URL} 
                 alt="ZINEB" 
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
               />
             </div>
          </div>
          <div className="lg:col-span-6 flex flex-col justify-between py-10">
             <div className="space-y-20">
                <div className="reveal-node">
                   <h4 className="text-[10px] font-black tracking-widest-luxe text-pop-pink uppercase mb-8">01 / CAPACITÉS</h4>
                   <div className="grid grid-cols-2 gap-x-10 gap-y-6">
                      {['FIGMA', 'PROCREATE', 'REACT', 'AFTER EFFECTS', 'PYTHON', 'UI/UX'].map(tool => (
                        <div key={tool} className="border-b border-black/10 py-4 text-xl font-black uppercase tracking-tighter hover:text-pop-pink transition-colors relative group">
                          {tool}
                        </div>
                      ))}
                   </div>
                </div>

                <div className="reveal-node stagger-1">
                   <div className="flex items-center gap-4">
                      <h4 className="text-[10px] font-black tracking-widest-luxe text-pop-pink uppercase">02 / DISTINCTIONS</h4>
                      <span className="font-cursive text-pop-pink text-xl">fierté</span>
                   </div>
                   <p className="text-3xl font-black uppercase tracking-tight mt-8">
                     PRIX TERRITORIAL <br/> TROPHÉES NSI 2024
                   </p>
                </div>
             </div>
          </div>
        </div>

        {/* List - Swiss Table Style */}
        <div className="reveal-node pt-20 border-t-2 border-luxe-black">
           <div className="flex justify-between items-baseline mb-20">
             <h3 className="text-4xl md:text-6xl font-black uppercase tracking-ultra-tight">EXPERIENCES<span className="text-pop-pink">.</span></h3>
             <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest-luxe">HISTORIQUE 23-25</span>
           </div>
           
           <div className="divide-y-2 divide-black/5">
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className="group grid grid-cols-1 md:grid-cols-12 py-16 items-start hover:bg-pop-pink/5 transition-colors px-4 relative">
                   <div className="md:col-span-2 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4 md:mb-0">
                      [{exp.period}]
                   </div>
                   <div className="md:col-span-6">
                      <h4 className="text-3xl font-black uppercase tracking-tighter mb-2 group-hover:text-pop-pink transition-colors">{exp.company}</h4>
                      <div className="flex items-center gap-3">
                        <p className="text-[10px] font-black uppercase tracking-widest-luxe opacity-40">{exp.role}</p>
                        {i === 0 && <span className="font-cursive text-pop-pink text-sm">Now</span>}
                      </div>
                   </div>
                   <div className="md:col-span-4 mt-6 md:mt-0">
                      <p className="text-sm font-bold uppercase leading-relaxed text-gray-500 group-hover:text-luxe-black transition-colors">
                        {exp.description}
                      </p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;