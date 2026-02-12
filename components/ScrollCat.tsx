import React, { useEffect, useState } from 'react';

interface ScrollCatProps {
  containerRef?: React.RefObject<HTMLDivElement>;
}

const ScrollCat: React.FC<ScrollCatProps> = ({ containerRef }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef?.current || document.documentElement;
      const totalScroll = container.scrollLeft || window.scrollY;
      const scrollWidth = container.scrollWidth - container.clientWidth;
      
      if (scrollWidth <= 0) return;

      const scroll = totalScroll / scrollWidth;
      setScrollProgress(scroll);
    };

    const element = containerRef?.current || window;
    element.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => element.removeEventListener('scroll', handleScroll);
  }, [containerRef]);

  return (
    <div className="fixed bottom-0 left-0 w-full h-3 z-[150] pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full bg-gray-200/50 backdrop-blur-sm border-t border-gray-300/50"></div>
      <div 
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-pop-pink via-pop-purple to-pop-pink transition-all duration-100 ease-out shadow-[0_0_10px_rgba(255,0,128,0.5)]"
        style={{ width: `${scrollProgress * 100}%` }}
      >
        <div className="absolute right-0 bottom-0 transform translate-x-1/2 translate-y-0.5 text-2xl filter drop-shadow-sm leading-none">
            <div className="scale-x-[-1] animate-bounce-slow pb-1">🐈</div>
        </div>
      </div>
    </div>
  );
};

export default ScrollCat;