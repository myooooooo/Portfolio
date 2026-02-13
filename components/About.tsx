import React, { useRef } from 'react';
import { EXPERIENCE, PROFILE_IMAGE_URL } from '../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const column1Ref = useRef<HTMLDivElement>(null);
  const column2Ref = useRef<HTMLDivElement>(null);
  const column3Ref = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);

  // Tech stack with proficiency levels
  const techStack = [
    { name: 'FIGMA', level: 95 },
    { name: 'PROCREATE', level: 90 },
    { name: 'REACT', level: 85 },
    { name: 'AFTER EFFECTS', level: 80 },
    { name: 'PYTHON', level: 75 },
    { name: 'UI/UX', level: 92 }
  ];

  // GSAP Animations
  useGSAP(() => {
    if (!containerRef.current) return;

    const scroller = document.querySelector('#horizontal-scroll-container');
    if (!scroller) return;

    // Animate columns on scroll
    const columns = [column1Ref.current, column2Ref.current, column3Ref.current];

    columns.forEach((column, index) => {
      if (!column) return;

      gsap.fromTo(
        column,
        { opacity: 0, x: index === 0 ? -80 : index === 1 ? 0 : 80, y: index === 1 ? 50 : 0 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: column,
            scroller: scroller,
            start: 'left 75%',
            horizontal: true,
            toggleActions: 'play none none reverse',
          }
        }
      );
    });

    // Animate tech stack items with progress bars
    if (techStackRef.current) {
      const techItems = techStackRef.current.querySelectorAll('.tech-item');
      const progressBars = techStackRef.current.querySelectorAll('.progress-bar');

      gsap.fromTo(
        techItems,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: techStackRef.current,
            scroller: scroller,
            start: 'left 60%',
            horizontal: true,
          }
        }
      );

      // Animate progress bars
      progressBars.forEach((bar, index) => {
        const level = techStack[index].level;
        gsap.fromTo(
          bar,
          { width: '0%' },
          {
            width: `${level}%`,
            duration: 1.5,
            ease: 'power2.out',
            delay: index * 0.1,
            scrollTrigger: {
              trigger: techStackRef.current,
              scroller: scroller,
              start: 'left 60%',
              horizontal: true,
            }
          }
        );
      });
    }

    // Animate timeline cards
    const timelineCards = containerRef.current.querySelectorAll('.timeline-card');
    gsap.fromTo(
      timelineCards,
      { opacity: 0, scale: 0.9, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: column3Ref.current,
          scroller: scroller,
          start: 'left 70%',
          horizontal: true,
        }
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="flex h-full items-center px-10 md:px-20 gap-20 md:gap-40 bg-white">
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
        <div ref={column1Ref} className="flex-shrink-0 w-[85vw] md:w-[45vw] flex flex-col justify-center h-full pt-40 pb-10">
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
        <div ref={column2Ref} className="flex-shrink-0 w-[85vw] md:w-[35vw] flex flex-col h-full justify-center gap-12">
             <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden bg-gray-100 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] border-4 border-black group">
               <div className="absolute top-6 -right-8 bg-pop-pink text-white text-xs font-bold py-1 px-10 rotate-45 z-10 shadow-sm">ZINEB.AI</div>
               <img 
                 src={PROFILE_IMAGE_URL} 
                 alt="ZINEB" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-black/5 pointer-events-none group-hover:opacity-0 transition-opacity"></div>
             </div>

             <div ref={techStackRef} className="reveal-node max-w-md mx-auto w-full">
                 <h4 className="text-xs font-black tracking-widest-luxe text-black uppercase mb-6 border-b-2 border-black pb-2">
                   STACK TECHNIQUE
                   <span className="ml-2 text-pop-pink">/ PROFICIENCY</span>
                 </h4>
                 <div className="space-y-4">
                    {techStack.map((tech, i) => (
                      <div key={tech.name} className="tech-item">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold uppercase tracking-wider">{tech.name}</span>
                          <span className="text-xs font-mono text-gray-500">{tech.level}%</span>
                        </div>
                        <div className="h-1.5 bg-gray-200 border border-black/10 overflow-hidden">
                          <div
                            className="progress-bar h-full bg-gradient-to-r from-pop-pink to-black transition-all duration-300"
                            style={{ width: '0%' }}
                          />
                        </div>
                      </div>
                    ))}
                 </div>
             </div>
        </div>

        {/* Column 3: Timeline */}
        <div ref={column3Ref} className="flex-shrink-0 w-[90vw] md:w-[60vw] h-full flex flex-col justify-center py-10 relative">
            <div className="mb-10 pl-2">
                <span className="text-pop-pink font-cursive text-3xl mb-1 block">My Path</span>
                <h3 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                    TIMELINE<span className="text-pop-pink">.</span>
                </h3>
            </div>

            {/* Grille Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                {EXPERIENCE.map((exp, i) => (
                    <div key={i} className="timeline-card group relative bg-white border-2 border-black p-6 flex flex-col justify-between h-[240px] md:h-[260px] hover:bg-black hover:text-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#FF0080] magnetic" data-cursor={exp.company.toUpperCase()}>
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