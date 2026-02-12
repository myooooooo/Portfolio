import React from 'react';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] glass-nav border-b border-black/5">
      <div className="max-w-[1800px] mx-auto h-20 flex justify-between items-center px-8 md:px-12">
        <div 
          onClick={() => onNavigate('home')}
          className="text-xl font-black tracking-ultra-tight cursor-pointer uppercase flex items-center gap-1"
        >
          ZINEB<span className="w-2 h-2 bg-pop-pink rounded-full"></span>
        </div>

        <nav className="hidden md:flex gap-16">
          {['WORK', 'ABOUT', 'CONTACT'].map((id) => (
            <button
              key={id}
              onClick={() => onNavigate(id.toLowerCase())}
              className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-pop-pink transition-colors relative group"
            >
              {id}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-8">
          <span className="hidden lg:block text-[10px] font-bold text-gray-400 uppercase tracking-widest">Currently @ Polytech</span>
          <button 
             onClick={() => onNavigate('contact')}
             className="text-[10px] font-black uppercase tracking-widest bg-luxe-black text-white px-8 py-3 rounded-none hover:bg-pop-pink transition-colors"
          >
            LET'S TALK
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;