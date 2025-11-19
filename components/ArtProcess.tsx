import React, { useState, useRef } from 'react';

const ArtProcess: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const { left, width } = containerRef.current.getBoundingClientRect();
    let clientX;

    if ('touches' in event) {
      clientX = event.touches[0].clientX;
    } else {
      clientX = (event as React.MouseEvent).clientX;
    }

    const position = ((clientX - left) / width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, position)));
  };

  return (
    <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
                 <span className="text-4xl animate-bounce block mb-2">✨</span>
                 <h3 className="font-display text-5xl text-pop-pink">Magic Process</h3>
                 <p className="text-gray-500 font-medium mt-2">Glisse pour voir l'évolution : Croquis vs Final</p>
            </div>

            <div 
                ref={containerRef}
                className="relative w-full max-w-3xl mx-auto aspect-[4/3] rounded-3xl overflow-hidden cursor-ew-resize shadow-[0px_20px_50px_rgba(0,0,0,0.2)] border-4 border-pop-purple group"
                onMouseMove={handleMove}
                onTouchMove={handleMove}
            >
                {/* Image Finale (Background) - Using placeholder for demo, replace with real Final URL */}
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://placehold.co/800x600/1a1a2e/FFF?text=FINAL+RENDER')" }}
                >
                     <span className="absolute top-4 right-4 bg-pop-purple text-white text-xs font-bold px-3 py-1 rounded-full">FINAL ✨</span>
                </div>

                {/* Image Croquis (Foreground - Clipped) - Using placeholder, replace with real Sketch URL */}
                <div 
                    className="absolute inset-0 bg-cover bg-center border-r-4 border-white"
                    style={{ 
                        backgroundImage: "url('https://placehold.co/800x600/ffffff/000?text=SKETCH+Draft')",
                        clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
                    }}
                >
                     <span className="absolute top-4 left-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-full border border-black">SKETCH ✏️</span>
                </div>

                {/* Slider Handle */}
                <div 
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                    style={{ left: `${sliderPosition}%` }}
                >
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-pop-pink font-bold border-2 border-pop-pink">
                        ↔
                    </div>
                </div>
            </div>
            
            <p className="text-center text-xs text-gray-400 mt-4 italic">
                *Projet Myo Racer - 20h de travail sur Procreate
            </p>
        </div>
    </section>
  );
};

export default ArtProcess;