import React, { useEffect, useState } from 'react';

const ScrollCat: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Prevent division by zero
      if (windowHeight === 0) return;

      const scroll = totalScroll / windowHeight;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    // Call handler immediately to set initial state correctly
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-2 z-[9999] pointer-events-none">
      {/* The Background Line (Track) */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-200/50 backdrop-blur-sm"></div>
      
      {/* The Progress Bar (Fill) */}
      <div 
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-pop-pink via-pop-purple to-pop-accent transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      >
        {/* The Cat */}
        <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 text-2xl filter drop-shadow-sm">
            {/* scale-x-[-1] flips the cat to face right */}
            <div className="scale-x-[-1] animate-bounce-slow">🐈</div>
        </div>
      </div>
    </div>
  );
};

export default ScrollCat;