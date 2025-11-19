
import React from 'react';

const Marquee: React.FC = () => {
  const items = [
    "OPEN TO WORK", "ILLUSTRATRICE", "CHARACTER DESIGN", "DIGITAL ARTIST", "GIRLY POP AESTHETIC", "SEMI-REALISM", "VISUAL STORYTELLING"
  ];

  return (
    <div className="bg-pop-purple text-white py-3 overflow-hidden border-y-4 border-pop-pink rotate-1 z-20 relative shadow-lg mb-10">
      <div className="animate-marquee whitespace-nowrap flex gap-8">
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-8">
             <span className="text-lg font-bold tracking-widest">{item}</span>
             <span className="text-xl">✨</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
