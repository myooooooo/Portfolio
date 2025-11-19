import React from 'react';
import { EXPERIENCE, SOCIALS, PROFILE_IMAGE_URL } from '../constants';
import MoodBoard from './MoodBoard';
import RPGStats from './RPGStats';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-pop-light/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-20 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Polaroid & MoodBoard & Stats */}
            <div className="md:col-span-5 flex flex-col gap-10">
                {/* Polaroid Effect */}
                <div className="relative bg-white p-4 pb-16 shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 w-full max-w-md mx-auto group">
                    {/* Washi Tape */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-pop-pink/40 rotate-2 z-20"></div>
                    
                    <div className="w-full aspect-[4/5] overflow-hidden bg-gray-100 relative">
                        <img src={PROFILE_IMAGE_URL} alt="Profile" className="w-full h-full object-cover filter contrast-110 transition-transform duration-700 group-hover:scale-110" />
                        {/* Sticker overlay */}
                        <div className="absolute bottom-2 right-2 text-4xl animate-bounce-slow">👩‍🎓</div>
                    </div>
                    <div className="absolute bottom-4 left-0 w-full text-center font-display text-pop-purple text-xl">
                        Zineb A. ✌️
                    </div>
                </div>

                <MoodBoard />
                
                <RPGStats />
            </div>

            {/* Right Column: Text & Bio */}
            <div className="md:col-span-7">
                <div className="inline-block bg-pop-accent/20 text-pop-purple px-4 py-1 rounded-full text-xs font-bold mb-4 border border-pop-accent uppercase tracking-widest">
                    Profil Créatif & Technique
                </div>
                <h3 className="font-display text-5xl text-pop-purple mb-2">
                    Zineb Anssafou
                </h3>
                <h4 className="text-xl font-bold text-pop-pink mb-6">
                    Designer Numérique & Community Manager
                </h4>
                
                <div className="bg-white p-8 rounded-3xl shadow-[4px_4px_0px_0px_rgba(255,0,128,0.2)] border-2 border-pop-light mb-8 relative">
                     <span className="absolute -top-3 -right-3 text-4xl animate-bounce-slow">🏆</span>
                     <p className="text-lg text-gray-700 leading-relaxed font-medium">
                        Étudiante en <strong className="text-pop-purple">BUT MMI</strong> (Création Numérique) et lauréate des <strong className="text-pop-purple">Trophées NSI 2024</strong>.
                        <br/><br/>
                        Avec 2 ans d'expérience en tant que Community Manager (+10k membres), je mêle stratégie, relationnel et créativité. Mon univers ? Le dessin semi-réaliste, la Suite Adobe et une touche de Python.
                    </p>
                    <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-200 text-sm text-blue-800 font-bold flex items-center gap-2">
                        <span>🚀</span> 
                        <span>Recherche stage de 10-12 semaines (Dès Janvier 2026)</span>
                    </div>
                </div>

                {/* Skills Pills */}
                <div className="mb-8">
                    <h5 className="text-sm font-bold uppercase tracking-widest text-pop-purple mb-3 ml-2">Mes Super-Pouvoirs</h5>
                    <div className="flex flex-wrap gap-3">
                        {['Procreate 🎨', 'Adobe Suite ✨', 'Motion Design 🎬', 'Community Management 💬', 'Anglais C1 🇬🇧', 'Python 🐍'].map(skill => (
                            <span key={skill} className="bg-white text-pop-purple border border-pop-purple/20 px-4 py-2 rounded-full text-sm font-bold hover:bg-pop-purple hover:text-white transition-all hover:scale-110 cursor-default shadow-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Experience List */}
                <div className="space-y-4 mb-8">
                    <h5 className="text-sm font-bold uppercase tracking-widest text-pop-purple mb-3 ml-2">Expériences Clés</h5>
                    {EXPERIENCE.map((exp, idx) => (
                        <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm flex items-start border-l-4 border-pop-pink hover:translate-x-2 transition-transform group">
                            <div className="mr-4 text-2xl group-hover:animate-spin-slow">⚡</div>
                            <div>
                                <h5 className="font-bold text-lg text-pop-purple">{exp.company}</h5>
                                <p className="text-xs font-bold text-pop-pink uppercase mb-2">{exp.role} | {exp.period}</p>
                                <p className="text-sm text-gray-600">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Socials */}
                <div className="flex gap-4 mt-10">
                    {SOCIALS.map(link => (
                        <a key={link.label} href={link.url} className="w-14 h-14 bg-pop-pink text-white rounded-full flex items-center justify-center font-bold text-lg hover:bg-pop-purple hover:scale-110 hover:rotate-12 transition-all shadow-[0px_4px_0px_0px_rgba(0,0,0,0.2)]">
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;