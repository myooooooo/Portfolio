
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectList from './components/ProjectList';
import About from './components/About';
import ChatWidget from './components/ChatWidget';
import ContactForm from './components/ContactForm';
import CustomCursor from './components/CustomCursor';
import Marquee from './components/Marquee';
import MusicPlayer from './components/MusicPlayer';
import StickerBoard from './components/StickerBoard';
import LoveSpam from './components/LoveSpam';
import Services from './components/Services';
import CreativeTools from './components/CreativeTools';
import DiscordTestimonials from './components/DiscordTestimonials';
import ArtProcess from './components/ArtProcess';
import KonamiCode from './components/KonamiCode';
import ScrollCat from './components/ScrollCat';

const App: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen w-full bg-pop-light bg-dot-pattern bg-fixed text-swiss-black selection:bg-pop-pink selection:text-white overflow-x-hidden font-sans relative">
      
      {/* Cool Stuff Additions */}
      <KonamiCode />
      <ScrollCat />
      <CustomCursor />
      <MusicPlayer />
      <LoveSpam />
      <StickerBoard />

      <Header onNavigate={scrollToSection} />
      
      <div id="home">
        <Hero />
      </div>

      {/* MOVED UP: Les Projets/Dessins sont maintenant ici, juste après le Hero */}
      <div id="work" className="relative z-20 -mt-10">
        <ProjectList />
      </div>

      {/* Processus de Création - Avant/Après Slider */}
      <ArtProcess />

      {/* Marquee sans les vagues SVG */}
      <div className="py-10">
        <Marquee />
      </div>
      
      <Services />

      <DiscordTestimonials />

      <CreativeTools />
      
      <div id="about">
        <About />
      </div>

      {/* Wavy Separator Contact */}
      <div className="w-full leading-none relative z-20 -mb-1">
           <svg className="block w-full h-16 md:h-32 fill-white" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
          </svg>
      </div>

      <div id="contact" className="py-20 md:py-32 px-4 md:px-0 bg-white relative">
         <div className="container mx-auto max-w-5xl relative z-10">
            <div className="mb-16 text-center">
                <span className="text-6xl animate-pulse mb-4 block transform hover:rotate-180 transition-transform duration-700">✨</span>
                <h2 className="text-5xl md:text-6xl font-display text-pop-purple mb-6">
                    Let's Draw <span className="text-pop-pink">Together</span>!
                </h2>
                <p className="text-lg text-gray-600 max-w-md mx-auto font-medium">
                    Envie d'une illustration, d'un chara-design ou d'une collab artistique ?
                    <br/>
                    Je suis prête à donner vie à tes idées ! <a href="mailto:zineb.anssafou@icloud.com" className="text-pop-pink font-bold underline decoration-wavy hover:text-pop-purple">zineb.anssafou@icloud.com</a>
                </p>
            </div>
            
            <ContactForm />

            <div className="mt-20 text-center text-sm font-bold text-pop-purple/50 tracking-widest flex justify-center items-center gap-2">
                <span>Made with 💖 & 🦄 — {new Date().getFullYear()} Zineb Anssafou.</span>
            </div>
         </div>
      </div>

      <ChatWidget />
    </main>
  );
};

export default App;