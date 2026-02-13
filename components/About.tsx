import React from 'react';
import { EXPERIENCE, PROFILE_IMAGE_URL } from '../constants';

const About: React.FC = () => {
  return (
    <div className="flex h-full items-center px-10 md:px-20 gap-20 md:gap-40 bg-white">
        {/* SEO Content */}
        <div className="sr-only">
          <h2>À Propos de Zineb Anssafou</h2>
          <p>
            Zineb Anssafou est une designer et développeuse créative basée à Dijon, France.
            Étudiante en 2ème année de BUT MMI (Métiers du Multimédia et de l'Internet),
            elle fusionne sa sensibilité artistique avec la rigueur du code pour créer des
            expériences digitales uniques. Actuellement en stage technique chez Polytech,
            elle adapte sa créativité aux exigences d'un environnement ingénieur complexe.
            Ses compétences incluent Figma, Procreate, React, After Effects, Python et UI/UX design.
            Passionnée par l'intersection entre design et développement, elle crée des interfaces
            qui allient esthétique raffinée et performance technique.
          </p>
        </div>

        {/* Column 1: Title & Bio */}
        <div className="flex-shrink-0 w-[85vw] md:w-[45vw] flex flex-col justify-center h-full pt-40 pb-10">
            <div className="relative mb-16 reveal-node">
                <div className="absolute -top-16 -left-4 font-cursive text-pop-pink text-7xl -rotate-6 opacity-80 z-10 w-full animate-pulse">Hello !</div>
                <h2 className="text-7xl md:text-[9vw] font-black uppercase leading-[0.8] tracking-ultra-tight relative z-0">
                    <span className="mask-text block"><span>PROFIL</span></span>
                    <span className="mask-text block delay-100"><span className="text-pop-pink">HYBRIDE.</span></span>
                </h2>
            </div>
            
            <div className="reveal-node mb-12 max-w-2xl">
                <p className="text-lg md:text-2xl font-medium text-gray-500 uppercase leading-tight mask-text">
                   <span>ÉTUDIANTE EN 2ÈME ANNÉE DE <span className="text-black font-bold">BUT MMI</span>,</span>
                </p>
                <p className="text-lg md:text-2xl font-medium text-gray-500 uppercase leading-tight mask-text delay-100">
                   <span>JE FUSIONNE MA SENSIBILITÉ ARTISTIQUE</span>
                </p>
                <p className="text-lg md:text-2xl font-medium text-gray-500 uppercase leading-tight mask-text delay-200">
                   <span>AVEC LA RIGUEUR DU CODE.</span>
                </p>
            </div>

            <div className="border-l-4 border-black pl-8 py-2 reveal-node stagger-3">
                 <div className="text-xs font-black tracking-widest-luxe text-gray-400 uppercase mb-3">/ CURRENT STATUS</div>
                 <p className="text-base font-bold leading-relaxed uppercase max-w-lg text-black">
                   Actuellement en stage technique chez <span className="bg-pop-pink text-white px-2 shadow-sm">Polytech</span>. <br/>
                   J'y apprends à adapter ma créativité aux exigences d'un environnement ingénieur complexe.
                 </p>
            </div>
        </div>

        {/* Column 2: Photo & Skills */}
        <div className="flex-shrink-0 w-[85vw] md:w-[35vw] flex flex-col h-full justify-center gap-12">
             <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden bg-gray-100 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] border-4 border-black group">
               <div className="absolute top-6 -right-8 bg-pop-pink text-white text-xs font-bold py-1 px-10 rotate-45 z-10 shadow-sm">ZINEB.AI</div>
               <img 
                 src={PROFILE_IMAGE_URL} 
                 alt="ZINEB" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-black/5 pointer-events-none group-hover:opacity-0 transition-opacity"></div>
             </div>

             <div className="reveal-node max-w-md mx-auto w-full">
                 <h4 className="text-xs font-black tracking-widest-luxe text-black uppercase mb-6 border-b-2 border-black pb-2">STACK TECHNIQUE</h4>
                 <div className="flex flex-wrap gap-3">
                    {['FIGMA', 'PROCREATE', 'REACT', 'AFTER EFFECTS', 'PYTHON', 'UI/UX'].map((tool, i) => (
                      <span key={tool} className={`px-4 py-2 text-sm font-bold uppercase tracking-wider border-2 border-black hover:bg-black hover:text-white transition-all cursor-default ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                        {tool}
                      </span>
                    ))}
                 </div>
             </div>
        </div>

        {/* Column 3: Timeline */}
        <div className="flex-shrink-0 w-[90vw] md:w-[60vw] h-full flex flex-col justify-center py-10 relative">
            <div className="mb-10 pl-2">
                <span className="text-pop-pink font-cursive text-3xl mb-1 block">My Path</span>
                <h3 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                    TIMELINE<span className="text-pop-pink">.</span>
                </h3>
            </div>

            {/* Grille Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                {EXPERIENCE.map((exp, i) => (
                    <div key={i} className="group relative bg-white border-2 border-black p-6 flex flex-col justify-between h-[240px] md:h-[260px] hover:bg-black hover:text-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#FF0080]">
                        <div className="absolute top-0 right-4 text-7xl font-black text-gray-100 group-hover:text-white/10 transition-colors select-none z-0">
                            0{i + 1}
                        </div>
                        
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-2">
                                <span className={`text-[10px] font-bold px-2 py-1 uppercase tracking-widest border border-black group-hover:border-white group-hover:text-black group-hover:bg-white transition-colors ${i === 0 ? 'bg-pop-pink text-white border-none' : 'bg-transparent text-gray-500'}`}>
                                    {exp.period}
                                </span>
                            </div>
                            <h4 className="text-2xl font-black uppercase leading-[0.9] mb-1 tracking-tight group-hover:text-pop-pink transition-colors">
                                {exp.company}
                            </h4>
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block group-hover:text-gray-300">
                                {exp.role}
                            </span>
                        </div>

                        <p className="relative z-10 text-xs md:text-sm font-medium text-gray-600 leading-relaxed border-t-2 border-gray-100 pt-4 group-hover:text-gray-300 group-hover:border-white/20 transition-colors line-clamp-3">
                            {exp.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
        
        <div className="w-40 flex-shrink-0"></div>
    </div>
  );
};

export default About;