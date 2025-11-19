import React from 'react';
import { FAVORITES } from '../constants';

const MoodBoard: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-3xl border-2 border-pop-purple shadow-[8px_8px_0px_0px_#FF0080] rotate-1 hover:rotate-0 transition-transform duration-300">
      <div className="text-center mb-6 relative">
        <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-yellow-100 text-pop-purple px-4 py-1 text-sm font-display rotate-[-2deg] shadow-sm border border-yellow-200 animate-wiggle">
             My Personal Vibe ✨
        </span>
        <h4 className="font-display text-2xl text-pop-pink">Mood Board</h4>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {FAVORITES.map((fav, index) => (
          <div 
            key={index} 
            className={`${fav.bgColor} p-3 rounded-xl flex flex-col items-center text-center transform transition-transform hover:scale-105 hover:-rotate-1 cursor-default shadow-sm group`}
          >
            <span className="text-2xl mb-1 block group-hover:animate-jelly">{fav.icon}</span>
            <span className="text-[10px] uppercase font-bold tracking-wider opacity-70 block mb-1 group-hover:opacity-100 transition-opacity">{fav.category}</span>
            <span className="font-bold text-sm leading-tight">{fav.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodBoard;