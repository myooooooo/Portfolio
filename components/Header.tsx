import React from 'react';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] glass border-b border-black/5">
      <div className="max-w-[980px] mx-auto h-12 flex justify-between items-center px-6">
        <div 
          onClick={() => onNavigate('home')}
          className="text-sm font-semibold tracking-tight cursor-pointer hover:opacity-70 transition-opacity"
        >
          ZINEB ANSSAFOU
        </div>

        <nav className="flex gap-8">
          {['work', 'about', 'contact'].map((id) => (
            <button
              key={id}
              onClick={() => onNavigate(id)}
              className="text-[11px] font-medium uppercase tracking-wider text-apple-gray hover:text-apple-black transition-colors"
            >
              {id}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;