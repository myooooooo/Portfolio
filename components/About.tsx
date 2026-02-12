import React from 'react';
import { EXPERIENCE, PROFILE_IMAGE_URL } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-transparent px-6 overflow-hidden">
      <div className="max-w-[980px] mx-auto">
        <div className="mb-24 text-center">
           <div className="reveal-text-container mb-2">
             <h2 className="reveal-text-content text-5xl md:text-7xl font-bold tracking-tight text-apple-black">Créative.</h2>
           </div>
           <div className="reveal-text-container stagger-1 mb-2">
             <h2 className="reveal-text-content text-5xl md:text-7xl font-bold tracking-tight text-apple-black">Passionnée.</h2>
           </div>
           <div className="reveal-text-container stagger-2 mb-8">
             <h2 className="reveal-text-content text-5xl md:text-7xl font-bold tracking-tight text-apple-black">Rigoureuse.</h2>
           </div>
           
           <div className="reveal-text-container stagger-3">
             <p className="reveal-text-content text-xl md:text-2xl text-apple-gray max-w-2xl mx-auto font-medium">
               Je m'appelle Zineb. Je crée des expériences numériques qui fusionnent l'esthétique et la fonction.
             </p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
           <div className="reveal-node rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-100">
              <img src={PROFILE_IMAGE_URL} alt="Portrait" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000" />
           </div>
           <div className="space-y-12">
              <div>
                 <div className="reveal-text-container mb-4">
                    <h4 className="reveal-text-content text-sm font-bold uppercase tracking-widest text-apple-gray">LE PARCOURS</h4>
                 </div>
                 <div className="reveal-node stagger-1">
                    <p className="text-lg font-medium text-apple-black leading-relaxed">
                      Actuellement en 2ème année de BUT MMI, j'explore l'intersection entre le design graphique et le développement. Mon approche est guidée par la simplicité et l'impact visuel.
                    </p>
                 </div>
              </div>
              <div>
                 <div className="reveal-text-container mb-4">
                    <h4 className="reveal-text-content text-sm font-bold uppercase tracking-widest text-apple-gray">DISTINCTIONS</h4>
                 </div>
                 <div className="reveal-node stagger-2">
                    <p className="text-lg font-medium text-apple-black">
                      🏆 Prix Territorial Trophées NSI 2024
                    </p>
                 </div>
              </div>
           </div>
        </div>

        {/* Experience List - Apple Style Table */}
        <div className="pt-20 border-t border-black/5">
           <div className="reveal-text-container mb-12">
             <h3 className="reveal-text-content text-2xl font-bold">Expériences.</h3>
           </div>
           <div className="space-y-4">
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className="reveal-node stagger-1 flex flex-col md:flex-row justify-between py-10 border-b border-black/5 last:border-0 hover:bg-white/40 transition-colors px-4 rounded-2xl">
                   <div className="md:w-1/3 mb-4 md:mb-0">
                      <span className="text-sm font-bold text-apple-gray">{exp.period}</span>
                   </div>
                   <div className="md:w-1/3">
                      <h4 className="text-lg font-bold text-apple-black">{exp.company}</h4>
                      <p className="text-apple-gray text-sm">{exp.role}</p>
                   </div>
                   <div className="md:w-1/3 mt-2 md:mt-0">
                      <p className="text-sm text-apple-black leading-relaxed opacity-70">{exp.description}</p>
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