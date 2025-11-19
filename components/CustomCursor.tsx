import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') !== null ||
        target.closest('button') !== null
      );
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  // Mobile check: don't show on touch devices
  if (typeof navigator !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return null;
  }

  return (
    <>
      {/* Main Cursor Dot */}
      <div 
        className="fixed pointer-events-none z-[9999] transition-transform duration-100 ease-out flex items-center justify-center mix-blend-difference"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : isPointer ? 1.5 : 1})`
        }}
      >
        <div className={`rounded-full bg-white ${isPointer ? 'h-8 w-8 opacity-50' : 'h-4 w-4'}`}></div>
      </div>

      {/* Trailing Sparkle/Emoji */}
      <div 
        className="fixed pointer-events-none z-[9998] transition-all duration-300 ease-out"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) translate(${isPointer ? '20px' : '10px'}, ${isPointer ? '20px' : '10px'})`
        }}
      >
        <span className="text-2xl filter drop-shadow-md">
          {isClicking ? '💥' : isPointer ? '✨' : '💖'}
        </span>
      </div>
    </>
  );
};

export default CustomCursor;