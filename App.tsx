import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectList from './components/ProjectList';
import ProjectDetail from './components/ProjectDetail';
import About from './components/About';
import ChatWidget from './components/ChatWidget';
import ScrollCat from './components/ScrollCat';
import { PROJECTS } from './constants';
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
          const elements = document.querySelectorAll('.reveal-node, .mask-container');
          elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            // Si l'élément rentre dans la fenêtre (marge de sécurité)
            if (rect.left < window.innerWidth * 0.9) {
              el.classList.add('revealed');
            }
          });
        };

        container.addEventListener('scroll', handleScroll);
        
        // IMPORTANT: On force l'exécution immédiate pour afficher le contenu visible
        handleScroll();
        
        // Cleanup function defined inside
        return () => container.removeEventListener('scroll', handleScroll);
    }, 50);

    // Cleanup du timeout
    return () => clearTimeout(timer);
  }, [selectedProject]); // CRUCIAL : Se relance quand on ferme un projet (selectedProject devient null)

  const scrollToSection = (id: string) => {
    // Petit hack pour laisser le temps au render si on vient de fermer un projet
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

  const handleCloseProject = () => setSelectedProject(null);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* BACKGROUND DYNAMIQUE FIXE */}
      <div 
        className="fixed inset-0 -z-10 transition-none"
        style={{ backgroundColor: bgColor }}
      />

      <ChatWidget />
      <ScrollCat progress={progress} />

      {selectedProject ? (
        <div className="fixed inset-0 z-[200] overflow-y-auto bg-white animate-fade-in-up">
          <ProjectDetail project={selectedProject} onBack={handleCloseProject} />
        </div>
      ) : (
        <>
          <Header onNavigate={scrollToSection} />
          
          {/* MAIN HORIZONTAL CONTAINER */}
          <div 
            id="horizontal-scroll-container"
            ref={containerRef}
            className="flex flex-row flex-nowrap h-screen w-screen overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide"
          >
            {/* HERO : Fixe 100vw */}
            <div id="home" className="flex-shrink-0 w-screen h-screen snap-start">
              <Hero />
            </div>

            {/* WORK : Largeur dynamique selon le contenu */}
            <div id="work" className="flex-shrink-0 h-screen flex items-center snap-start">
              <ProjectList onOpenProject={handleOpenProject} />
            </div>
            
            {/* ABOUT : Largeur dynamique */}
            <div id="about" className="flex-shrink-0 h-screen flex items-center snap-start">
              <About />
            </div>

            {/* CONTACT : Fixe 100vw - Fond Transparent pour laisser voir le dégradé noir */}
            <div id="contact" className="flex-shrink-0 w-screen h-screen bg-transparent text-white flex flex-col justify-center px-8 md:px-20 relative overflow-hidden snap-start">
               {/* Background Huge Name */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-white/[0.02] whitespace-nowrap pointer-events-none select-none tracking-ultra-tight">
                 ZINEB
               </div>

               <div className="max-w-[1200px] mx-auto text-center relative z-10 space-y-16 w-full">
                  <div className="reveal-node">
                     <span className="text-pop-pink font-black tracking-widest-luxe uppercase text-[10px] mb-8 block">PRÊTE POUR LA SUITE</span>
                     <h2 className="text-7xl md:text-[10vw] font-black tracking-ultra-tight uppercase leading-[0.85]">
                       CRÉONS <br/> <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>L'EXCEPTION.</span>
                     </h2>
                  </div>
                  
                  <div className="reveal-node space-y-4">
                    <p className="text-xl md:text-2xl text-gray-400 font-bold uppercase tracking-tight">
                       ACTUELLEMENT EN STAGE @ <span className="text-white">POLYTECH</span>
                    </p>
                    <p className="text-xs text-gray-600 font-black uppercase tracking-widest-luxe">
                       PROCHAIN STAGE DISPONIBLE : JANVIER 2026
                    </p>
                  </div>

                  <div className="reveal-node pt-8">
                    <a href="mailto:zineb.anssafou@icloud.com" className="inline-flex items-center gap-10 bg-white text-luxe-black px-16 py-8 rounded-none font-black text-xl hover:bg-pop-pink hover:text-white transition-all group">
                      CONTACTEZ-MOI
                      <span className="group-hover:translate-x-4 transition-transform">→</span>
                    </a>
                  </div>
                  
                  <div className="mt-20 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-widest-luxe text-gray-600 gap-10">
                     <span>© 2025 ZINEB ANSSAFOU • DIJON • FRANCE</span>
                     <div className="flex gap-12">
                        <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
                        <a href="#" className="hover:text-white transition-colors">INSTAGRAM</a>
                        <a href="#" className="hover:text-white transition-colors">BEHANCE</a>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;