import React, { useState, useEffect } from 'react';

const HalloweenToggle: React.FC = () => {
  const [isSpooky, setIsSpooky] = useState(false);

  useEffect(() => {
    if (isSpooky) {
      document.body.classList.add('theme-halloween');
      playSpookySound();
    } else {
      document.body.classList.remove('theme-halloween');
    }
  }, [isSpooky]);

  const playSpookySound = () => {
    // Simuler un son ou juste un effet visuel
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.type = 'sawtooth';
    oscillator.frequency.setValueAtTime(100, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(50, audioContext.currentTime + 0.5);
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.5);
  };

  return (
    <div className="fixed top-28 left-6 z-40">
      <button 
        onClick={() => setIsSpooky(!isSpooky)}
        className={`group relative w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-lg transition-all duration-500 ${isSpooky ? 'bg-orange-500 rotate-12 scale-110 shadow-[0_0_20px_#ff7518]' : 'bg-pop-pink hover:bg-pop-purple'}`}
        title={isSpooky ? "Back to Girly Pop" : "Halloween Mode 🎃"}
      >
        <span className="transform transition-transform duration-300 group-hover:scale-125 group-active:scale-90">
           {isSpooky ? '👻' : '🎃'}
        </span>
        
        {isSpooky && (
          <>
            <span className="absolute -top-2 -left-2 text-xl animate-bounce">🦇</span>
            <span className="absolute -bottom-1 -right-2 text-xl animate-bounce animation-delay-200">🕸️</span>
          </>
        )}
      </button>
      
      {isSpooky && (
          <div className="absolute top-full mt-2 left-0 bg-black text-orange-500 text-[10px] font-bold px-2 py-1 rounded whitespace-nowrap border border-orange-500 font-display tracking-widest">
              SPOOKY SEASON!
          </div>
      )}
    </div>
  );
};

export default HalloweenToggle;