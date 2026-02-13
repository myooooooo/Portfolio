import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectList from './components/ProjectList';
import ProjectDetail from './components/ProjectDetail';
import About from './components/About';
import Manifesto from './components/Manifesto';
import ChatWidget from './components/ChatWidget';
import ScrollCat from './components/ScrollCat';
import { PROJECTS, SOCIALS } from './constants';
import { Project } from './types';

// Helper pour interpoler entre deux couleurs RGB
const interpolateColor = (start: number[], end: number[], factor: number) => {
  const safeFactor = Math.max(0, Math.min(1, factor));
  const r = Math.round(start[0] + (end[0] - start[0]) * safeFactor);
  const g = Math.round(start[1] + (end[1] - start[1]) * safeFactor);
  const b = Math.round(start[2] + (end[2] - start[2]) * safeFactor);
  return `rgb(${r}, ${g}, ${b})`;
};

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [progress, setProgress] = useState(0);
  const [bgColor, setBgColor] = useState('rgb(255, 248, 249)'); // Default bg-luxe (Rose)
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Mapping Molette Verticale -> Scroll Horizontal
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Si une modale est ouverte, on laisse le comportement par défaut
      if (selectedProject) return;

      // Si le scroll est principalement vertical
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        // On empêche le scroll vertical (qui ne fait rien ici car overflow-y: hidden)
        // Mais surtout on transforme ce deltaY en scrollLeft
        container.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    };

    // { passive: false } est obligatoire pour pouvoir utiliser preventDefault()
    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => container.removeEventListener('wheel', handleWheel);
  }, [selectedProject]); // Re-attach when returning to main view

  // 2. Gestion de la barre de progression, des animations et du BACKGROUND DYNAMIQUE
  useEffect(() => {
    // Petit délai pour s'assurer que le DOM est prêt lors du retour d'un projet
    const timer = setTimeout(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
          if (!container) return;
          
          const scrollX = container.scrollLeft;
          const maxScroll = container.scrollWidth - container.clientWidth;
          const currentProgress = maxScroll > 0 ? scrollX / maxScroll : 0;
          setProgress(currentProgress);

          // --- LOGIQUE DE COULEUR DE FOND INTELLIGENTE ---
          const aboutSection = document.getElementById('about');
          const contactSection = document.getElementById('contact');
          
          if (aboutSection && contactSection) {
            const aboutStart = aboutSection.offsetLeft;
            const contactStart = contactSection.offsetLeft;
            const viewportWidth = window.innerWidth;

            let newColor = 'rgb(255, 248, 249)';

            if (scrollX < aboutStart) {
                // PHASE 1 : ROSE vers BLANC
                const transitionEnd = aboutStart; 
                const factor = scrollX / transitionEnd;
                newColor = interpolateColor([255, 248, 249], [255, 255, 255], factor);
            } else {
                // PHASE 2 : BLANC vers NOIR
                const fadeStart = contactStart - viewportWidth * 0.8;
                
                if (scrollX > fadeStart) {
                    const factor = (scrollX - fadeStart) / (contactStart - fadeStart);
                    newColor = interpolateColor([255, 255, 255], [0, 0, 0], factor);
                } else {
                    newColor = 'rgb(255, 255, 255)';
                }
            }
            setBgColor(newColor);
          }

          // Trigger animations
          const elements = document.querySelectorAll('.reveal-node, .mask-container, .reveal');
          elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            // Si l'élément rentre dans la fenêtre (marge de sécurité)
            if (rect.left < window.innerWidth * 0.95 && rect.right > 0) {
              el.classList.add('active', 'revealed');
            }
          });
        };

        container.addEventListener('scroll', handleScroll);
        
        // IMPORTANT: On force l'exécution immédiate pour afficher le contenu visible
        handleScroll();
        
        // Cleanup function defined inside
        return () => container.removeEventListener('scroll', handleScroll);
    }, 100);

    // Cleanup du timeout
    return () => clearTimeout(timer);
  }, [selectedProject]); // CRUCIAL : Se relance quand on ferme un projet (selectedProject devient null)

  const scrollToSection = (id: string) => {
    setTimeout(() => {
        const element = document.getElementById(id);
        if (element && containerRef.current) {
            const leftPos = element.offsetLeft;
            containerRef.current.scrollTo({
                left: leftPos,
                behavior: 'smooth'
            });
        }
    }, 100);
  };

  const handleOpenProject = (projectId: number) => {
    const project = PROJECTS.find(p => p.id === projectId);
    if (project) setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    setTimeout(() => {
        const workSection = document.getElementById('work');
        if (workSection && containerRef.current) {
            containerRef.current.scrollTo({
                left: workSection.offsetLeft,
                behavior: 'auto'
            });
        }
    }, 50);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden text-black bg-white">
      {/* BACKGROUND DYNAMIQUE FIXE */}
      <div 
        className="fixed inset-0 -z-10 transition-none"
        style={{ backgroundColor: bgColor }}
      />
      
      {/* GRAIN TEXTURE */}
      <div className="noise-overlay" />

      {/* GRILLE SUISSE FIXE (Visible seulement si le fond est assez clair, géré par l'opacité CSS si besoin, ici on la laisse) */}
      <div className="fixed inset-0 z-0 swiss-grid-bg opacity-50 pointer-events-none" />

      <ChatWidget />
      <ScrollCat progress={progress} />

      {selectedProject ? (
        <div 
            id="project-modal-scroll" 
            className="fixed inset-0 z-[200] overflow-y-auto bg-white animate-fade-in-up"
        >
          <ProjectDetail project={selectedProject} onBack={handleCloseProject} />
        </div>
      ) : (
        <>
          <Header onNavigate={scrollToSection} />
          
          <div 
            id="horizontal-scroll-container"
            ref={containerRef}
            className="relative z-10 flex flex-row flex-nowrap h-screen w-screen overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide"
          >
            {/* 1. HERO */}
            <div id="home" className="flex-shrink-0 w-screen h-screen snap-start">
              <Hero />
            </div>

            {/* 2. WORK */}
            <div id="work" className="flex-shrink-0 h-screen flex items-center snap-start">
              <ProjectList onOpenProject={handleOpenProject} />
            </div>
            
            {/* 3. MANIFESTO */}
            <div id="manifesto" className="flex-shrink-0 h-screen flex snap-start">
               <Manifesto />
            </div>

            {/* 4. ABOUT */}
            <div id="about" className="flex-shrink-0 h-screen flex items-center snap-start">
              <About />
            </div>

            {/* 5. CONTACT - CORRECTION : Fond noir forcé pour visibilité */}
            <section id="contact" className="flex-shrink-0 w-screen h-screen bg-black text-white flex flex-col justify-center px-8 md:px-20 relative overflow-hidden snap-start" aria-label="Contact section">

               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-white/[0.02] whitespace-nowrap pointer-events-none select-none tracking-ultra-tight" aria-hidden="true">
                 ZINEB
               </div>

               <div className="max-w-[1200px] mx-auto text-center relative z-10 space-y-16 w-full">
                  <div className="reveal-node">
                     <span className="text-pop-pink font-black tracking-widest-luxe uppercase text-[10px] mb-8 block drop-shadow-sm mask-text">
                        <span>PRÊTE POUR LA SUITE</span>
                     </span>
                     {/* AJOUT DE MARGIN-TOP (mt-12) POUR DESCENDRE LE TITRE */}
                     <h2 className="text-7xl md:text-[10vw] font-black tracking-ultra-tight uppercase leading-[0.85] text-white mt-12 md:mt-20">
                       <span className="mask-text block"><span>CRÉONS</span></span>
                       <span className="mask-text block delay-100"><span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>L'ICONIQUE.</span></span>
                     </h2>
                  </div>

                  <div className="reveal-node space-y-4 pt-8">
                    <p className="text-xl md:text-2xl text-gray-400 font-bold uppercase tracking-tight">
                       ACTUELLEMENT EN MISSION CHEZ <span className="text-white">POLYTECH</span>
                    </p>
                    <p className="text-xs text-gray-600 font-black uppercase tracking-widest-luxe">
                       DISPONIBLE POUR ÉCHANGER SUR VOS FUTURS PROJETS.
                    </p>
                  </div>

                  <div className="reveal-node pt-8">
                    <a
                      href="mailto:zineb.anssafou@icloud.com"
                      className="inline-flex items-center gap-10 bg-white text-luxe-black px-16 py-8 rounded-none font-black text-xl hover:bg-pop-pink hover:text-white transition-all group shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)]"
                      aria-label="Send an email to Zineb Anssafou"
                    >
                      LET'S CONNECT
                      <span className="group-hover:translate-x-4 transition-transform" aria-hidden="true">→</span>
                    </a>
                  </div>

                  <footer className="mt-20 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-widest-luxe text-gray-600 gap-10">
                     <span>© 2025 ZINEB ANSSAFOU • DIJON • FRANCE</span>
                     <nav className="flex gap-12" aria-label="Social media links">
                        {SOCIALS.filter(s => s.platform !== 'Email').map((social) => (
                          <a
                            key={social.platform}
                            href={social.url}
                            className="hover:text-white transition-colors"
                            target={social.url.startsWith('http') ? '_blank' : undefined}
                            rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                            aria-label={`Visit ${social.platform}`}
                          >
                            {social.platform.toUpperCase()}
                          </a>
                        ))}
                     </nav>
                  </footer>
               </div>
            </section>
          </div>
        </>
      )}
    </div>
  );
};

export default App;