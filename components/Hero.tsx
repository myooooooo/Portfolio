import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

const Hero: React.FC = () => {
  const name = "ZINEB";
  const surname = "ANSSAFOU";
  const [isActive, setIsActive] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 100);

    // GSAP animations for hero elements
    if (heroRef.current) {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo(
        '.portfolio-label',
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8 }
      )
      .fromTo(
        '.hero-subtitle',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
        '-=0.4'
      )
      .fromTo(
        '.hero-meta',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6 },
        '-=0.3'
      );
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-screen h-screen flex flex-col justify-center px-6 md:px-12 pt-20 flex-shrink-0 border-r border-black/10"
    >
      {/* SEO Content */}
      <div className="sr-only">
        <h1>Zineb Anssafou - Designer & Developer Portfolio</h1>
        <p>
          Portfolio professionnel de Zineb Anssafou, designer et développeuse créative basée à Dijon, France.
          Spécialisée en design d'interface utilisateur (UI/UX), motion design et développement web moderne avec React et TypeScript.
          Je transforme des concepts complexes en expériences visuelles cohérentes et impactantes,
          en combinant esthétique raffinée et code performant. Mes compétences incluent Figma, Procreate, After Effects, Python,
          design systems, animations web, prototypage interactif et développement front-end créatif.
          Actuellement en mission chez Polytech, disponible pour des projets de design digital,
          création d'interfaces innovantes et développement d'applications web sur mesure.
        </p>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full border-l border-black/10 pointer-events-none hidden md:block"></div>

      <div className="max-w-[1600px] mx-auto w-full relative z-10">
        {/* Portfolio Label */}
        <div className={`mb-12 reveal portfolio-label ${isActive ? 'active' : ''}`}>
          <span className="text-[10px] font-black uppercase tracking-widest-label text-pop-pink flex items-center gap-4">
            <span className="w-8 h-[2px] bg-pop-pink"></span>
            PORTFOLIO 2025
          </span>
        </div>

        {/* Main Title with Letter Animation */}
        <div className={`reveal mb-12 ${isActive ? 'active' : ''}`}>
          {/* Ligne 1 : ZINEB */}
          <h1 className="text-swiss-black text-[15vw] md:text-[13vw] font-black uppercase leading-[0.8] tracking-tighter-extreme flex flex-wrap">
            {name.split('').map((char, index) => (
              <span key={`name-${index}`} className="char-wrapper">
                <span
                  className="char-reveal"
                  style={{ transitionDelay: `${index * 0.08}s` }}
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
                  style={{ transitionDelay: `${0.4 + (index * 0.08)}s` }}
                >
                  {char}
                </span>
              </span>
            ))}
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

        {/* Subtitle */}
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-12 items-end reveal delay-200 ${isActive ? 'active' : ''}`}>
          <div className="md:col-span-6">
            <div className="mask-text hero-subtitle">
              <p className="text-xl md:text-3xl font-medium leading-tight uppercase max-w-xl text-gray-400">
                <span>SITES 100% LIGHTHOUSE</span>
              </p>
            </div>
            <div className="mask-text delay-100 hero-subtitle">
              <p className="text-xl md:text-3xl font-medium leading-tight uppercase max-w-xl text-gray-400">
                <span>EN <strong className="text-black font-black">48H</strong></span>
              </p>
            </div>
            <div className="mask-text delay-200 hero-subtitle">
              <p className="text-xl md:text-3xl font-medium leading-tight uppercase max-w-xl text-gray-400">
                <span className="text-black font-black">PILOTÉS PAR L'IA.</span>
              </p>
            </div>
          </div>

          <div className="md:col-span-6 md:text-right">
            <div className="inline-flex flex-col items-end gap-6 hero-meta">
              <span className="font-cursive text-5xl text-black/80 -rotate-6 transform origin-bottom-right hover:scale-110 transition-transform cursor-default">
                creative dev & artist
              </span>
              <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest-label text-black animate-pulse">
                <span>SCROLL HORIZONTALEMENT</span>
                <span className="text-pop-pink text-lg">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Meta Info */}
      <div className="absolute bottom-12 left-0 w-full px-6 md:px-12 flex justify-between items-end pointer-events-none hero-meta">
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
