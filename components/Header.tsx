import React from 'react';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="fixed top-4 left-0 right-0 mx-4 z-50">
      <div className="bg-white/80 backdrop-blur-md rounded-full border-2 border-pop-pink shadow-[0px_4px_0px_0px_rgba(255,0,128,0.2)] px-6 py-3 flex justify-between items-center">
        
        {/* Logo Area */}
        <div className="flex items-center">
          <h1 className="text-2xl font-display text-pop-pink transform -rotate-2 hover:rotate-0 transition-transform cursor-pointer">
            Girly<span className="text-pop-purple">Pop</span>✨
          </h1>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex gap-2 items-center">
          <button onClick={() => onNavigate('work')} className="px-4 py-2 rounded-full hover:bg-pop-light text-sm font-bold text-pop-purple hover:text-pop-pink transition-all">PROJETS</button>
          <button onClick={() => onNavigate('about')} className="px-4 py-2 rounded-full hover:bg-pop-light text-sm font-bold text-pop-purple hover:text-pop-pink transition-all">À PROPOS</button>
          <button onClick={() => onNavigate('contact')} className="bg-pop-pink text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-pop-purple hover:scale-105 transition-all shadow-lg">
            CONTACT 💕
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
           <button onClick={() => onNavigate('contact')} className="text-2xl">
             🍔
           </button>
        </div>
      </div>
    </header>
  );
};

export default Header;