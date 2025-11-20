
import React, { useState, useEffect } from 'react';

const RetroOverlay: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full h-10 bg-[#c0c0c0] border-t-2 border-[#ffffff] z-[99999] flex items-center justify-between px-1 select-none font-[VT323]">
      {/* Start Button */}
      <button className="flex items-center gap-1 px-2 py-1 border-2 border-[#ffffff] border-r-[#404040] border-b-[#404040] active:border-[#404040] active:border-r-[#ffffff] active:border-b-[#ffffff] bg-[#c0c0c0] ml-1">
        <span className="font-bold text-black tracking-wider text-lg">❖ Start</span>
      </button>

      <div className="flex items-center gap-2">
          {/* Fake active window tab */}
          <div className="hidden md:flex items-center px-4 py-1 bg-[#c0c0c0] border-2 border-[#404040] border-r-[#ffffff] border-b-[#ffffff] shadow-inner">
            <span className="text-black text-sm">My Portfolio - Netscape</span>
          </div>
      </div>

      {/* Tray */}
      <div className="flex items-center gap-2 border-2 border-[#404040] border-r-[#ffffff] border-b-[#ffffff] px-2 py-1 bg-[#c0c0c0] mr-1">
        <span className="text-black text-lg">🔊</span>
        <span className="text-black font-bold text-lg">
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
};

export default RetroOverlay;
