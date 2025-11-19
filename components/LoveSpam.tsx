import React, { useState, useEffect } from 'react';

interface Heart {
  id: number;
  left: number; // percentage
  size: number; // pixels
  emoji: string;
}

const LoveSpam: React.FC = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);
  const [count, setCount] = useState(0);

  const emojis = ['💖', '✨', '🎀', '🌸', '🦄', '💅'];

  const spawnHearts = () => {
    const newHearts: Heart[] = [];
    const batchSize = 5; // Number of hearts per click

    for (let i = 0; i < batchSize; i++) {
      newHearts.push({
        id: Date.now() + i,
        left: Math.random() * 100, // Random horizontal position inside the button area roughly
        size: 20 + Math.random() * 30,
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
      });
    }

    setHearts(prev => [...prev, ...newHearts]);
    setCount(c => c + 1);

    // Cleanup hearts after animation
    setTimeout(() => {
      setHearts(prev => prev.filter(h => !newHearts.find(nh => nh.id === h.id)));
    }, 1000);
  };

  return (
    <div className="fixed bottom-24 left-6 z-40 hidden md:flex flex-col items-center gap-2">
      <div className="relative">
        {hearts.map(heart => (
          <div
            key={heart.id}
            className="absolute bottom-full pointer-events-none animate-float-up"
            style={{
              left: `${heart.left - 50}px`, // Center roughly
              fontSize: `${heart.size}px`,
            }}
          >
            {heart.emoji}
          </div>
        ))}
        
        <button
          onClick={spawnHearts}
          className="w-14 h-14 rounded-full bg-white border-2 border-pop-pink shadow-[4px_4px_0px_0px_#FF0080] flex items-center justify-center text-2xl hover:scale-110 active:scale-90 transition-all group"
        >
          <span className="group-active:scale-150 transition-transform">💝</span>
        </button>
      </div>
      <span className="bg-pop-purple text-white text-[10px] font-bold px-2 py-1 rounded-full">
        {count} Loves
      </span>
    </div>
  );
};

export default LoveSpam;