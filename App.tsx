import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectList from './components/ProjectList';
import ProjectDetail from './components/ProjectDetail';
import About from './components/About';
import ChatWidget from './components/ChatWidget';
import Services from './components/Services';
import CreativeTools from './components/CreativeTools';
import { PROJECTS } from './constants';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Scroll Reveal Logic (manual trigger on mount/navigation)
  useEffect(() => {
    const trigger = () => {
        document.querySelectorAll('.reveal-node, .reveal-text-container').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.95) {
                el.classList.add('revealed');
            }
        });
    };
    window.addEventListener('scroll', trigger);
    trigger(); // Initial check
    return () => window.removeEventListener('scroll', trigger);
  }, [selectedProject]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenProject = (projectId: number) => {
    const project = PROJECTS.find(p => p.id === projectId);
    if (project) setSelectedProject(project);
  };

  const handleCloseProject = () => setSelectedProject(null);

  return (
    <main className="min-h-screen w-full bg-[#fffafa] selection:bg-apple-blue selection:text-white overflow-x-hidden relative">
      
      <ChatWidget />

      {selectedProject ? (
        <ProjectDetail project={selectedProject} onBack={handleCloseProject} />
      ) : (
        <>
          <Header onNavigate={scrollToSection} />
          
          <div id="home">
            <Hero />
          </div>

          <div id="work">
            <ProjectList onOpenProject={handleOpenProject} />
          </div>

          <div className="bg-transparent">
            <Services />
            <CreativeTools />
          </div>
          
          <div id="about">
            <About />
          </div>

          <footer id="contact" className="py-40 bg-apple-black text-white px-6 text-center reveal-node">
             <div className="max-w-[800px] mx-auto">
                <div className="reveal-text-container mb-12">
                  <h2 className="reveal-text-content text-5xl md:text-7xl font-bold tracking-tight">
                    Prête à créer la suite.
                  </h2>
                </div>
                <p className="text-xl text-apple-gray mb-12">
                   Vous avez un projet ou souhaitez simplement discuter ? Je suis à l'écoute.
                </p>
                <a href="mailto:zineb.anssafou@icloud.com" className="bg-white text-apple-black px-10 py-4 rounded-full font-bold hover:opacity-90 transition-opacity">
                  Envoyer un e-mail
                </a>
                
                <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between text-[11px] font-medium text-apple-gray uppercase tracking-widest">
                   <span>© 2025 Zineb Anssafou</span>
                   <div className="flex gap-8 mt-4 md:mt-0">
                      <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                      <a href="#" className="hover:text-white transition-colors">Behance</a>
                      <a href="#" className="hover:text-white transition-colors">Instagram</a>
                   </div>
                </div>
             </div>
          </footer>
        </>
      )}
    </main>
  );
};

export default App;