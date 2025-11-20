
import React, { useState, useEffect } from 'react';

type Season = 'normal' | 'halloween' | 'christmas' | 'secret' | 'retro';

const SeasonToggle: React.FC = () => {
  const [season, setSeason] = useState<Season>('normal');

  useEffect(() => {
    // Clean up existing classes
    document.body.classList.remove('theme-halloween', 'theme-christmas', 'theme-secret', 'theme-retro');

    if (season === 'halloween') {
      document.body.classList.add('theme-halloween');
    } else if (season === 'christmas') {
      document.body.classList.add('theme-christmas');
    } else if (season === 'secret') {
      document.body.classList.add('theme-secret');
    } else if (season === 'retro') {
      document.body.classList.add('theme-retro');
    }
  }, [season]);

  const toggleSeason = () => {
    if (season === 'normal') setSeason('halloween');
    else if (season === 'halloween') setSeason('christmas');
    else if (season === 'christmas') setSeason('secret');
    else if (season === 'secret') setSeason('retro');
    else setSeason('normal');
  };

  return (
    <div className="fixed top-28 left-6 z-40">
      <button 
        onClick={toggleSeason}
        className={`group relative w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-lg transition-all duration-500 hover:scale-110 active:scale-95 
          ${season === 'normal' ? 'bg-pop-pink hover:bg-pop-purple' : ''}
          ${season === 'halloween' ? 'bg-orange-500 rotate-6 shadow-[0_0_20px_#ff7518]' : ''}
          ${season === 'christmas' ? 'bg-red-600 -rotate-6 shadow-[0_0_20px_#D42426] border-2 border-yellow-400' : ''}
          ${season === 'secret' ? 'bg-black border-2 border-green-500 shadow-[0_0_20px_#00FF00]' : ''}
          ${season === 'retro' ? 'bg-[#008080] border-4 border-[#c0c0c0] shadow-none rounded-none' : ''}
        `}
        title="Change Theme!"
      >
        <span className="transform transition-transform duration-300 group-hover:rotate-12">
           {season === 'normal' && '🌸'}
           {season === 'halloween' && '🎃'}
           {season === 'christmas' && '🎄'}
           {season === 'secret' && '🕶️'}
           {season === 'retro' && '💾'}
        </span>
        
        {season === 'halloween' && <span className="absolute -bottom-1 -right-1 text-lg animate-bounce">🦇</span>}
        {season === 'christmas' && <span className="absolute -top-2 right-0 text-lg animate-spin-slow">❄️</span>}
        {season === 'secret' && <span className="absolute -top-2 -left-2 text-lg animate-pulse">💻</span>}
      </button>
      
      <div className="absolute top-full mt-2 left-0 bg-white/90 backdrop-blur text-pop-purple text-[10px] font-bold px-2 py-1 rounded border border-pop-purple whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
          {season === 'normal' && 'Girly Pop Mode'}
          {season === 'halloween' && 'Spooky Mode'}
          {season === 'christmas' && 'Merry Christmas'}
          {season === 'secret' && 'System Hacked'}
          {season === 'retro' && 'Windows 95'}
      </div>
    </div>
  );
};

export default SeasonToggle;
