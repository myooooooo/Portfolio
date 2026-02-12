import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const name = "ZINEB";
  const surname = "ANSSAFOU";
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Déclenche l'animation après un court délai pour laisser le temps au DOM de se peindre
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 100); // 100ms de délai
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-screen h-screen flex flex-col justify-center px-6 md:px-12 pt-20 flex-shrink-0 border-r border-black/10">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full border-l border-black/10 pointer-events-none hidden md:block"></div>
      
      <div className="max-w-[1600px] mx-auto w-full relative z-10">
        <div className={`mb-12 reveal ${isActive ? 'active' : ''}`}>
          <span className="text-[10px] font-black uppercase tracking-widest-label text-pop-pink flex items-center gap-4">
             <span className="w-8 h-[2px] bg-pop-pink"></span>
             PORTFOLIO 2025
          </span>
        </div>

        {/* LETTER BY LETTER ANIMATION */}
        {/* On retire 'active' par défaut, c'est le state isActive qui va l'ajouter */}
        <div className={`reveal mb-12 ${isActive ? 'active' : ''}`} aria-label="ZINEB ANSSAFOU">
            {/* Ligne 1 : ZINEB */}
            <h1 className="text-swiss-black text-[15vw] md:text-[13vw] font-black uppercase leading-[0.8] tracking-tighter-extreme flex flex-wrap">
                {name.split('').map((char, index) => (
                    <span key={`name-${index}`} className="char-wrapper">
                        <span 
                            className="char-reveal" 
                            style={{ transitionDelay: `${index * 0.08}s` }} // Délai un peu plus long pour l'élégance
                        >
                            {char}
                        </span>
                    </span>
                ))}
            </h1>
            
            {/* Ligne 2 : ANSSAFOU */}
            <h1 className="text-pop-pink text-[15vw] md:text-[13vw] font-black uppercase leading-[0.8] tracking-tighter-extreme flex flex-wrap">
                {surname.split('').map((char, index) => (
                    <span key={`surname-${index}`} className="char-wrapper">
                        <span 
                            className="char-reveal" 
                            // On commence le délai après la fin du premier mot (+0.4s)
                            style={{ transitionDelay: `${0.4 + (index * 0.08)}s` }}
                        >
                            {char}
                        </span>
                    </span>
                ))}
                {/* Le point final noir */}
                <span className="char-wrapper">
                    <span 
                        className="char-reveal text-black" 
                        style={{ transitionDelay: `${0.4 + (surname.length * 0.08)}s` }}
                    >
                        .
                    </span>
                </span>
            </h1>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-12 gap-12 items-end reveal delay-200 ${isActive ? 'active' : ''}`}>
          <div className="md:col-span-6">
             <div className="mask-text">
                <p className="text-xl md:text-3xl font-medium leading-tight uppercase max-w-xl text-gray-400">
                  <span>JE TRANSFORME DES CONCEPTS</span>
                </p>
             </div>
             <div className="mask-text delay-100">
                <p className="text-xl md:text-3xl font-medium leading-tight uppercase max-w-xl text-gray-400">
                  <span>COMPLEXES EN <strong className="text-black font-black">SYSTÈMES VISUELS</strong></span>
                </p>
             </div>
             <div className="mask-text delay-200">
                <p className="text-xl md:text-3xl font-medium leading-tight uppercase max-w-xl text-gray-400">
                  <span>COHÉRENTS ET IMPACTANTS.</span>
                </p>
             </div>
          </div>
          
          <div className="md:col-span-6 md:text-right">
            <div className="inline-flex flex-col items-end gap-6">
              <span className="font-cursive text-5xl text-black/80 -rotate-6 transform origin-bottom-right hover:scale-110 transition-transform cursor-default">
                  creative dev & artist
              </span>
              <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest-label text-black animate-pulse">
                <span>SCROLL HORIZONTALLY</span>
                <span className="text-pop-pink text-lg">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative lines & Data */}
      <div className="absolute bottom-12 left-0 w-full px-6 md:px-12 flex justify-between items-end pointer-events-none">
        <div className="flex flex-col gap-1">
             <span className="text-[9px] font-mono text-gray-400">LOC: 47.3220° N, 5.0415° E</span>
             <div className="h-px bg-black w-24"></div>
        </div>
        <div className="h-24 w-px bg-black/20"></div>
      </div>
    </section>
  );
};

export default Hero;