import React from 'react';

const StickerBoard: React.FC = () => {
  // Fixed positions for "stuck" look but responding to hover
  const stickers = [
    { icon: '🌈', top: '15%', left: '5%', rotate: '-12deg', delay: '0s' },
    { icon: '🍭', top: '25%', right: '8%', rotate: '15deg', delay: '1s' },
    { icon: '🍄', bottom: '20%', left: '3%', rotate: '6deg', delay: '2s' },
    { icon: '👾', top: '60%', right: '5%', rotate: '-8deg', delay: '0.5s' },
    { icon: '🛹', bottom: '10%', right: '15%', rotate: '20deg', delay: '1.5s' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden hidden lg:block">
      {stickers.map((sticker, idx) => (
        <div
          key={idx}
          className="absolute text-5xl pointer-events-auto hover:scale-125 hover:animate-wiggle transition-transform cursor-grab active:cursor-grabbing opacity-80 hover:opacity-100 filter drop-shadow-md"
          style={{
            top: sticker.top,
            left: sticker.left,
            right: sticker.right,
            bottom: sticker.bottom,
            transform: `rotate(${sticker.rotate})`,
          }}
          title="Take me!"
        >
          {sticker.icon}
        </div>
      ))}
    </div>
  );
};

export default StickerBoard;