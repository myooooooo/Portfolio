import React from 'react';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="fixed top-4 left-0 right-0 mx-4 z-50 flex justify-center transition-all duration-500">
      {/* LIQUID GLASS CONTAINER */}
      <div className="relative w-full max-w-4xl bg-gradient-to-b from-white/60 to-white/20 backdrop-blur-2xl backdrop-saturate-[180%] rounded-full border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.15),inset_0_0_0_1px_rgba(255,255,255,0.5),inset_0_4px_6px_rgba(255,255,255,0.9),inset_0_-4px_6px_rgba(0,0,0,0.05)] px-6 py-3 flex justify-between items-center overflow-hidden transition-all duration-500 group hover:scale-[1.01]">
        
        {/* Reflet Spéculaire (Glossy Shine) */}
        <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-80"></div>
        
        {/* Reflet "Mouillé" sur la moitié supérieure */}
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent pointer-events-none"></div>

        {/* Logo Area */}
        <div className="flex items-center relative z-10">
          <h1 
            onClick={() => onNavigate('home')}
            className="text-2xl font-display text-pop-pink transform -rotate-2 hover:rotate-0 transition-transform cursor-pointer drop-shadow-sm active:scale-95 select-none"
          >
            Girly<span className="text-pop-purple">Pop</span>✨
          </h1>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex gap-2 items-center relative z-10">
          <button onClick={() => onNavigate('work')} className="px-4 py-2 rounded-full hover:bg-white/40 text-sm font-bold text-pop-purple hover:text-pop-pink transition-all border border-transparent hover:border-white/50 hover:shadow-[inset_0_0_10px_rgba(255,255,255,0.5)]">
            PROJETS
          </button>
          <button onClick={() => onNavigate('about')} className="px-4 py-2 rounded-full hover:bg-white/40 text-sm font-bold text-pop-purple hover:text-pop-pink transition-all border border-transparent hover:border-white/50 hover:shadow-[inset_0_0_10px_rgba(255,255,255,0.5)]">
            À PROPOS
          </button>
          <button onClick={() => onNavigate('contact')} className="ml-2 bg-pop-pink/90 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-pop-purple hover:scale-105 transition-all shadow-[0_4px_15px_rgba(255,0,128,0.3),inset_0_2px_4px_rgba(255,255,255,0.3)] border border-white/20">
            CONTACT 💕
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden relative z-10">
           <button onClick={() => onNavigate('contact')} className="text-2xl filter drop-shadow-md hover:scale-110 transition-transform bg-white/30 p-2 rounded-full border border-white/40">
             🍔
           </button>
        </div>
      </div>
    </header>
  );
};

export default Header;