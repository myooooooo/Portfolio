import React, { useState } from 'react';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[100] bg-white/80 backdrop-blur-md border-b border-black">
        <div className="max-w-[1800px] mx-auto h-20 flex justify-between items-center px-8 md:px-12">
          <div
            onClick={() => handleNavigate('home')}
            className="text-xl font-black tracking-tighter-extreme cursor-pointer uppercase flex items-center gap-2 group"
            aria-label="Navigate to home"
          >
            <div className="w-5 h-5 bg-pop-pink group-hover:rotate-45 transition-transform duration-500"></div>
            <span className="hidden sm:inline">ZINEB ANSSAFOU</span>
            <span className="sm:hidden">ZA</span>
          </div>

          <nav className="hidden md:flex gap-12" aria-label="Main navigation">
            {['WORK', 'ABOUT', 'CONTACT'].map((id) => (
              <button
                key={id}
                onClick={() => handleNavigate(id.toLowerCase())}
                className="text-[10px] font-black uppercase tracking-widest-label text-gray-400 hover:text-pop-pink transition-colors relative"
                aria-label={`Navigate to ${id.toLowerCase()}`}
              >
                {id}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4 md:gap-6">
            <span className="hidden lg:block text-[9px] font-black text-gray-300 uppercase tracking-widest-label">Based in Dijon, FR</span>
            <button
              onClick={() => handleNavigate('contact')}
              className="hidden sm:block text-[10px] font-black uppercase tracking-widest-label bg-black text-white px-8 py-4 border border-black hover:bg-white hover:text-black transition-all"
              aria-label="Get in touch"
            >
              GET IN TOUCH
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 group"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[99] md:hidden transition-all duration-300 ${mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-50' : 'opacity-0'}`}
          onClick={() => setMobileMenuOpen(false)}
        ></div>
        <nav
          className={`absolute top-20 right-0 w-full max-w-sm bg-white border-l border-b border-black transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col p-8 gap-6">
            {['HOME', 'WORK', 'ABOUT', 'CONTACT'].map((id) => (
              <button
                key={id}
                onClick={() => handleNavigate(id.toLowerCase())}
                className="text-2xl font-black uppercase tracking-tighter text-left hover:text-pop-pink transition-colors"
                aria-label={`Navigate to ${id.toLowerCase()}`}
              >
                {id}
              </button>
            ))}
            <button
              onClick={() => handleNavigate('contact')}
              className="mt-4 text-[10px] font-black uppercase tracking-widest-label bg-black text-white px-8 py-4 border border-black hover:bg-white hover:text-black transition-all"
              aria-label="Get in touch"
            >
              GET IN TOUCH
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;