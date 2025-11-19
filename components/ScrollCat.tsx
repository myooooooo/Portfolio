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
    <div className="fixed bottom-0 left-0 w-full h-3 z-[9999] pointer-events-none">
      {/* The Background Line (Track) */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-200/50 backdrop-blur-sm border-t border-gray-300/50"></div>
      
      {/* The Progress Bar (Fill) */}
      <div 
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-pop-pink via-pop-purple to-pop-accent transition-all duration-100 ease-out shadow-[0_0_10px_rgba(255,0,128,0.5)]"
        style={{ width: `${scrollProgress * 100}%` }}
      >
        {/* The Cat - Positioned above the bar so it's not cut off */}
        <div className="absolute right-0 bottom-0 transform translate-x-1/2 translate-y-0.5 text-2xl filter drop-shadow-sm leading-none">
            {/* scale-x-[-1] flips the cat to face right */}
            <div className="scale-x-[-1] animate-bounce-slow pb-1">🐈</div>
        </div>
      </div>
    </div>
  );
};

export default ScrollCat;