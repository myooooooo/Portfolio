import React from 'react';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-white/80 backdrop-blur-md border-b border-black">
      <div className="max-w-[1800px] mx-auto h-20 flex justify-between items-center px-8 md:px-12">
        <div 
          onClick={() => onNavigate('home')}
          className="text-xl font-black tracking-tighter-extreme cursor-pointer uppercase flex items-center gap-2 group"
        >
          <div className="w-5 h-5 bg-pop-pink group-hover:rotate-45 transition-transform duration-500"></div>
          ZINEB ANSSAFOU
        </div>

        <nav className="hidden md:flex gap-12">
          {['WORK', 'ABOUT', 'CONTACT'].map((id) => (
            <button
              key={id}
              onClick={() => onNavigate(id.toLowerCase())}
              className="text-[10px] font-black uppercase tracking-widest-label text-gray-400 hover:text-pop-pink transition-colors relative"
            >
              {id}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <span className="hidden lg:block text-[9px] font-black text-gray-300 uppercase tracking-widest-label">Based in Dijon, FR</span>
          <button 
             onClick={() => onNavigate('contact')}
             className="text-[10px] font-black uppercase tracking-widest-label bg-black text-white px-8 py-4 border border-black hover:bg-white hover:text-black transition-all"
          >
            GET IN TOUCH
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;