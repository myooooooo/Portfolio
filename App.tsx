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

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // FIX: Système de scroll horizontal forcé
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || selectedProject) return;

    const handleWheel = (e: WheelEvent) => {
      // Si on est dans un projet en détail, on laisse le scroll vertical normal
      if (selectedProject) return;

      // On empêche le scroll vertical de la page
      e.preventDefault();

      // On déplace le container horizontalement
      // deltaY est le mouvement vertical de la molette, on l'ajoute au scrollLeft
      container.scrollLeft += e.deltaY + e.deltaX;
    };

    // L'option { passive: false } est CRUCIALE pour que e.preventDefault() fonctionne
    container.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [selectedProject]);

  // Déclenchement des animations lors du scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const triggerAnimations = () => {
      const elements = document.querySelectorAll('.reveal-node, .mask-container');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        // On active l'animation quand l'élément est visible dans le viewport horizontal
        if (rect.left < window.innerWidth * 0.9) {
          el.classList.add('revealed');
        }
      });
    };

    container.addEventListener('scroll', triggerAnimations);
    // Initial check
    setTimeout(triggerAnimations, 100);
    
    return () => container.removeEventListener('scroll', triggerAnimations);
  }, [selectedProject]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element && scrollContainerRef.current) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });
    }
  };

  const handleOpenProject = (projectId: number) => {
    const project = PROJECTS.find(p => p.id === projectId);
    if (project) setSelectedProject(project);
  };

  const handleCloseProject = () => setSelectedProject(null);

  return (
    <main className="h-screen w-screen bg-[#FFF8F9] selection:bg-pop-pink selection:text-white relative overflow-hidden">
      <ChatWidget />
      <ScrollCat containerRef={scrollContainerRef} />

      {selectedProject ? (
        <div className="fixed inset-0 z-[200] overflow-y-auto bg-white">
          <ProjectDetail project={selectedProject} onBack={handleCloseProject} />
        </div>
      ) : (
        <>
          <Header onNavigate={scrollToSection} />
          
          <div ref={scrollContainerRef} className="snap-container">
            {/* HOME */}
            <section id="home" className="snap-section">
              <Hero />
            </section>

            {/* WORK */}
            <section id="work" className="snap-section bg-transparent">
              <ProjectList onOpenProject={handleOpenProject} />
            </section>
            
            {/* ABOUT */}
            <section id="about" className="snap-section bg-white">
              <About />
            </section>

            {/* CONTACT */}
            <section id="contact" className="snap-section bg-luxe-black text-white flex flex-col justify-center px-8 md:px-20 relative overflow-hidden">
               {/* Huge background name */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-white/[0.02] whitespace-nowrap pointer-events-none select-none tracking-ultra-tight">
                 ZINEB
               </div>

               <div className="max-w-[1200px] mx-auto text-center relative z-10 space-y-16 w-full">
                  <div className="reveal-node">
                     <span className="text-pop-pink font-black tracking-widest-luxe uppercase text-[10px] mb-8 block">PRÊTE POUR LA SUITE</span>
                     <h2 className="text-7xl md:text-[12vw] font-black tracking-ultra-tight uppercase leading-[0.85]">
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
            </section>
          </div>
        </>
      )}
    </main>
  );
};

export default App;