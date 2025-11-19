import React, { useState } from 'react';

const DailyVibe: React.FC = () => {
  const vibes = [
    "En charrette 🚑",
    "Caféine : 110% ☕",
    "CSS Master 💅",
    "Pixel Perfect 👌",
    "Rendering... ⏳",
    "Slay the day ✨",
    "Ctrl+Z Life 🔙",
    "Bug Hunt 🐛",
    "Inspiration : 404 🔍"
  ];

  const [currentVibe, setCurrentVibe] = useState("Click me! 🔮");
  const [isSpinning, setIsSpinning] = useState(false);

  const getVibe = () => {
    setIsSpinning(true);
    let count = 0;
    const interval = setInterval(() => {
      setCurrentVibe(vibes[Math.floor(Math.random() * vibes.length)]);
      count++;
      if (count > 10) {
        clearInterval(interval);
        setIsSpinning(false);
      }
    }, 100);
  };

  return (
    <div className="mt-8 inline-block">
      <div className="relative group cursor-pointer" onClick={getVibe}>
        <div className="absolute inset-0 bg-pop-accent rounded-xl rotate-3 group-hover:rotate-6 transition-transform"></div>
        <div className="relative bg-white border-2 border-pop-purple px-6 py-3 rounded-xl shadow-sm flex items-center gap-3 hover:-translate-y-1 transition-transform">
            <span className={`text-2xl ${isSpinning ? 'animate-spin' : ''}`}>🔮</span>
            <div className="flex flex-col items-start">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Daily Vibe Generator</span>
                <span className="text-lg font-bold text-pop-purple font-display min-w-[150px] text-left">
                    {currentVibe}
                </span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DailyVibe;