import React, { useState } from 'react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden md:block">
      <div className="bg-white border-2 border-pop-pink rounded-2xl p-3 shadow-[4px_4px_0px_0px_#FF0080] w-56 transform transition-transform hover:scale-105">
        <div className="flex items-center gap-3">
            <div className={`w-10 h-10 bg-pop-purple rounded-full flex items-center justify-center text-white ${isPlaying ? 'animate-spin-slow' : ''}`}>
                💿
            </div>
            <div className="flex-1 overflow-hidden">
                <div className="text-xs font-bold text-pop-purple uppercase tracking-wider mb-1">Now Playing</div>
                <div className="text-sm font-bold text-pop-pink truncate">
                    {isPlaying ? 'Britney - Toxic 🎵' : 'Paused'}
                </div>
            </div>
            <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-8 h-8 bg-pop-light rounded-full flex items-center justify-center text-pop-pink hover:bg-pop-pink hover:text-white transition-colors"
            >
                {isPlaying ? '⏸' : '▶'}
            </button>
        </div>
        
        {/* Progress Bar Fake */}
        <div className="mt-3 h-1.5 bg-pop-light rounded-full overflow-hidden">
            <div className={`h-full bg-pop-accent ${isPlaying ? 'w-2/3 animate-pulse' : 'w-1/3'}`}></div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;