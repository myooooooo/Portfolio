import React, { useState, useEffect, useRef } from 'react';

type Season = 'normal' | 'halloween' | 'christmas' | 'secret' | 'retro';

const ThemeSwitcher: React.FC = () => {
  const [season, setSeason] = useState<Season>('normal');
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clean up existing classes
    document.body.classList.remove('theme-halloween', 'theme-christmas', 'theme-secret', 'theme-retro');

    if (season === 'halloween') {
      document.body.classList.add('theme-halloween');
    } else if (season === 'christmas') {
      document.body.classList.add('theme-christmas');
    } else if (season === 'secret') {
      document.body.classList.add('theme-secret');
    } else if (season === 'retro') {
      document.body.classList.add('theme-retro');
    }
  }, [season]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (newSeason: Season) => {
    setSeason(newSeason);
    setIsOpen(false); // Close menu after selection
  };

  return (
    <div ref={menuRef} className="fixed top-28 left-6 z-50 flex flex-col gap-2">
      {/* Main Toggle Button - Toggles Menu on Click */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg transition-all duration-300 bg-white text-pop-pink border-2 border-pop-pink hover:scale-110 z-20 relative ${isOpen ? 'rotate-180 bg-pop-light' : ''}`}
        title="Changer de Thème"
      >
        {isOpen ? '✖️' : '🎨'}
      </button>

      {/* Dropdown Menu */}
      <div className={`flex flex-col gap-3 absolute top-16 left-0 transition-all duration-300 origin-top ${isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-0 pointer-events-none'}`}>
          
          <button onClick={() => handleSelect('normal')} className="w-12 h-12 rounded-full bg-pop-pink text-white flex items-center justify-center shadow-md hover:scale-110 transition-transform animate-fade-in-up" style={{animationDelay: '0ms'}} title="Girly Pop (Normal)">
             🌸
          </button>

          <button onClick={() => handleSelect('retro')} className="w-12 h-12 rounded-none bg-[#008080] border-2 border-white text-white flex items-center justify-center shadow-md hover:scale-110 transition-transform animate-fade-in-up" style={{animationDelay: '50ms'}} title="Windows 95">
             💾
          </button>

          <button onClick={() => handleSelect('halloween')} className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-md hover:scale-110 transition-transform animate-fade-in-up" style={{animationDelay: '100ms'}} title="Halloween">
             🎃
          </button>

          <button onClick={() => handleSelect('christmas')} className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-md hover:scale-110 transition-transform animate-fade-in-up" style={{animationDelay: '150ms'}} title="Noël">
             🎄
          </button>

          <button onClick={() => handleSelect('secret')} className="w-12 h-12 rounded-full bg-black text-green-500 flex items-center justify-center shadow-md hover:scale-110 transition-transform animate-fade-in-up" style={{animationDelay: '200ms'}} title="Hacker">
             🕶️
          </button>

      </div>
      
      {season === 'retro' && !isOpen && (
        <div className="absolute top-0 left-16 ml-2 bg-[#ffffcc] border border-black px-2 py-1 text-xs font-mono whitespace-nowrap animate-pulse pointer-events-none">
            Welcome to 1995!
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;