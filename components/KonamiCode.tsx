import React, { useEffect, useState } from 'react';

const KonamiCode: React.FC = () => {
  const [input, setInput] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);

  const KONAMI_CODE = [
    'ArrowUp', 'ArrowUp', 
    'ArrowDown', 'ArrowDown', 
    'ArrowLeft', 'ArrowRight', 
    'ArrowLeft', 'ArrowRight', 
    'b', 'a'
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newKey = e.key;
      
      setInput((prev) => {
        const updated = [...prev, newKey];
        if (updated.length > KONAMI_CODE.length) {
          updated.shift();
        }
        
        // Check for match
        if (JSON.stringify(updated) === JSON.stringify(KONAMI_CODE)) {
          setSuccess(true);
          setTimeout(() => setSuccess(false), 5000); // Party for 5 seconds
          return []; // Reset
        }
        
        return updated;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!success) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center overflow-hidden animate-disco bg-black/50 backdrop-blur-sm">
       <div className="text-9xl animate-bounce">👯‍♀️</div>
       <div className="absolute top-10 left-10 text-6xl animate-spin">💿</div>
       <div className="absolute bottom-10 right-10 text-6xl animate-spin">💿</div>
       <div className="absolute top-1/2 left-10 text-6xl animate-pulse">🎉</div>
       <div className="absolute top-1/2 right-10 text-6xl animate-pulse">🎉</div>
       <h1 className="absolute top-1/4 w-full text-center text-white font-display text-8xl animate-wiggle drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">
         SECRET PARTY MODE !!!
       </h1>
    </div>
  );
};

export default KonamiCode;