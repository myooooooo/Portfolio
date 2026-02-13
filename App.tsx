import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectList from './components/ProjectList';
import ProjectDetail from './components/ProjectDetail';
import About from './components/About';
import Manifesto from './components/Manifesto';
import ChatWidget from './components/ChatWidget';
import ScrollCat from './components/ScrollCat';
import MagneticCursor from './components/MagneticCursor';
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
  const [bgColor, setBgColor] = useState('rgb(255, 248, 249)');
  const containerRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    if (selectedProject) return; // Disable when modal is open

    const container = containerRef.current;
    if (!container) return;

    // Initialize Lenis for horizontal smooth scroll
    const lenis = new Lenis({
      wrapper: container,
      content: container.firstElementChild as HTMLElement,
      orientation: 'horizontal',
      gestureOrientation: 'both',
      smoothWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 2,
      infinite: false,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;

    // Animation loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    // Cleanup
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [selectedProject]);

  // Handle scroll progress + background color
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollX = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const currentProgress = maxScroll > 0 ? scrollX / maxScroll : 0;
      setProgress(currentProgress);

      // --- BACKGROUND COLOR TRANSITION ---
      const aboutSection = document.getElementById('about');
      const contactSection = document.getElementById('contact');

      if (aboutSection && contactSection) {
        const aboutStart = aboutSection.offsetLeft;
        const contactStart = contactSection.offsetLeft;
        const viewportWidth = window.innerWidth;

        let newColor = 'rgb(255, 248, 249)';

        if (scrollX < aboutStart) {
          // ROSE → BLANC
          const factor = scrollX / aboutStart;
          newColor = interpolateColor([255, 248, 249], [255, 255, 255], factor);
        } else {
          // BLANC → NOIR
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
        if (rect.left < window.innerWidth * 0.95 && rect.right > 0) {
          el.classList.add('active', 'revealed');
        }
      });
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial trigger

    return () => container.removeEventListener('scroll', handleScroll);
  }, [selectedProject]);

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
      {/* MAGNETIC CURSOR */}
      <MagneticCursor disabled={!!selectedProject} />

      {/* BACKGROUND DYNAMIQUE */}
      <div
        className="fixed inset-0 -z-10 transition-none"
        style={{ backgroundColor: bgColor }}
      />

      {/* GRAIN TEXTURE */}
      <div className="noise-overlay" />

      {/* GRILLE SUISSE */}
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
            className="relative z-10 flex flex-row flex-nowrap h-screen w-screen overflow-x-auto overflow-y-hidden scrollbar-hide"
            style={{ scrollBehavior: 'auto' }}
          >
            {/* 1. HERO */}
            <div id="home" className="flex-shrink-0 w-screen h-screen">
              <Hero />
            </div>

            {/* 2. WORK */}
            <div id="work" className="flex-shrink-0 h-screen flex items-center">
              <ProjectList onOpenProject={handleOpenProject} />
            </div>

            {/* 3. MANIFESTO */}
            <div id="manifesto" className="flex-shrink-0 h-screen flex">
              <Manifesto />
            </div>

            {/* 4. ABOUT */}
            <div id="about" className="flex-shrink-0 h-screen flex items-center">
              <About />
            </div>

            {/* 5. CONTACT */}
            <section
              id="contact"
              className="flex-shrink-0 w-screen h-screen bg-black text-white flex flex-col justify-center px-8 md:px-20 relative overflow-hidden"
              aria-label="Contact section"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-white/[0.02] whitespace-nowrap pointer-events-none select-none tracking-ultra-tight" aria-hidden="true">
                ZINEB
              </div>

              <div className="max-w-[1200px] mx-auto text-center relative z-10 space-y-16 w-full">
                <div className="reveal-node">
                  <span className="text-pop-pink font-black tracking-widest-luxe uppercase text-[10px] mb-8 block drop-shadow-sm mask-text">
                    <span>PRÊTE POUR LA SUITE</span>
                  </span>
                  <h2 className="text-7xl md:text-[10vw] font-black tracking-ultra-tight uppercase leading-[0.85] text-white mt-20 md:mt-32">
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
                    className="magnetic inline-flex items-center gap-10 bg-white text-black border-4 border-black px-16 py-8 rounded-none font-black text-xl hover:bg-pop-pink hover:text-white hover:border-pop-pink transition-all group shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)]"
                    data-cursor="CONNECT"
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
                        className="magnetic hover:text-white transition-colors"
                        target={social.url.startsWith('http') ? '_blank' : undefined}
                        rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                        aria-label={`Visit ${social.platform}`}
                        data-cursor="VISIT"
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
