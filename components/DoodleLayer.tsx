
import React, { useRef, useState, useEffect } from 'react';

const DoodleLayer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [color, setColor] = useState('#FF0080');
  const [isEraser, setIsEraser] = useState(false);

  // Palette de peinture élargie
  const paintColors = [
    '#FF0080', // Pink
    '#9D00FF', // Purple
    '#00E0FF', // Cyan
    '#FFFF00', // Yellow
    '#FF5733', // Orange
    '#76FF03', // Lime
    '#000000', // Black
    '#FFFFFF', // White
  ];

  const isCustomColor = !paintColors.includes(color) && !isEraser;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Utilisation des Pointer Events pour gérer Souris + Touch + Stylet (Pression)
  const startDrawing = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isActive) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsDrawing(true);
    canvas.setPointerCapture(e.pointerId); // Capture le pointeur pour éviter de perdre le focus

    const { clientX, clientY, pressure, pointerType } = e;
    
    ctx.beginPath();
    ctx.moveTo(clientX, clientY);
    
    // Calcul de l'épaisseur initiale
    let lineWidth = 5;
    // Si c'est un stylet, on utilise la pression (pression normale ~0.5, max 1.0)
    if (pointerType === 'pen') {
       lineWidth = Math.max(1, pressure * 25);
    }

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (isEraser) {
        ctx.globalCompositeOperation = 'destination-out'; // Mode gomme
        ctx.lineWidth = lineWidth * 3; // La gomme est plus grosse
    } else {
        ctx.globalCompositeOperation = 'source-over'; // Mode dessin
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
    }
  };

  const draw = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !isActive) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { clientX, clientY, pressure, pointerType } = e;

    // Important : Réappliquer le mode (gomme ou dessin) au cas où le contexte change
    if (isEraser) {
        ctx.globalCompositeOperation = 'destination-out';
    } else {
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = color;
    }

    // On dessine le segment vers la nouvelle position
    ctx.lineTo(clientX, clientY);
    ctx.stroke();

    // Pour la sensibilité à la pression continue
    if (pointerType === 'pen' && pressure > 0) {
        ctx.beginPath();
        ctx.moveTo(clientX, clientY);
        // Variation dynamique de l'épaisseur selon la pression
        const newWidth = Math.max(1, pressure * 25);
        ctx.lineWidth = isEraser ? newWidth * 3 : newWidth;
    }
  };

  const stopDrawing = (e: React.PointerEvent<HTMLCanvasElement>) => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (canvas) {
        canvas.releasePointerCapture(e.pointerId);
        const ctx = canvas.getContext('2d');
        ctx?.beginPath(); 
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const handleColorSelect = (c: string) => {
    setColor(c);
    setIsEraser(false);
  };

  return (
    <>
      {/* The Canvas Overlay with Pointer Events */}
      <canvas
        ref={canvasRef}
        onPointerDown={startDrawing}
        onPointerMove={draw}
        onPointerUp={stopDrawing}
        onPointerLeave={stopDrawing}
        className={`fixed inset-0 z-[9000] touch-none transition-opacity duration-300 ${isActive ? 'opacity-100 pointer-events-auto cursor-crosshair' : 'opacity-0 pointer-events-none'}`}
        style={{ touchAction: 'none' }} 
      />

      {/* Controls */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-[9001] flex flex-col items-center gap-4">
        
        {isActive && (
          <div className="animate-scale-in relative">
             {/* Wooden Palette Shape */}
             <div className="w-80 h-60 bg-[#eebb88] rounded-[50%] border-b-8 border-r-8 border-[#d49b6a] shadow-2xl flex flex-wrap content-center justify-center gap-3 p-8 relative transform -rotate-6">
                
                {/* Wood Texture (Subtle) */}
                <div className="absolute inset-0 rounded-[50%] bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-30 pointer-events-none"></div>
                
                {/* Thumb Hole */}
                <div className="absolute bottom-5 right-10 w-10 h-10 bg-black/20 rounded-full shadow-inner border-2 border-[#d49b6a]/50"></div>

                {/* Eraser Tool */}
                <button
                    onClick={() => setIsEraser(true)}
                    className={`w-12 h-12 rounded-md transform transition-transform hover:scale-110 active:scale-95 relative group flex items-center justify-center ${isEraser ? 'ring-4 ring-pop-pink rotate-[-10deg]' : 'rotate-6'}`}
                    style={{ 
                        background: 'linear-gradient(135deg, #ffffff 40%, #ffb6c1 40%)', // Gomme bicolore
                        boxShadow: '2px 4px 6px rgba(0,0,0,0.3)'
                    }}
                    title="Gomme"
                >
                   <span className="text-xl filter drop-shadow-sm">🧼</span>
                </button>

                {/* Paint Blobs */}
                {paintColors.map((c) => (
                    <button
                        key={c}
                        onClick={() => handleColorSelect(c)}
                        className={`w-10 h-10 rounded-full transition-transform hover:scale-110 active:scale-95 relative group ${color === c && !isEraser ? 'scale-125 z-10 ring-2 ring-white/50' : ''}`}
                        style={{ 
                            backgroundColor: c,
                            boxShadow: `inset -2px -4px 5px rgba(0,0,0,0.2), inset 2px 2px 5px rgba(255,255,255,0.6), 2px 4px 5px rgba(0,0,0,0.3)` 
                        }}
                        title={c}
                    >
                        {/* Wet highlight */}
                        <div className="absolute top-2 left-2 w-3 h-2 bg-white opacity-60 rounded-full blur-[1px]"></div>
                    </button>
                ))}

                {/* Custom Color Picker Blob (Rainbow) */}
                <label 
                    className={`w-10 h-10 rounded-full transition-transform hover:scale-110 active:scale-95 relative group cursor-pointer overflow-hidden ${isCustomColor ? 'scale-125 z-10 ring-2 ring-white/50' : ''}`}
                    title="Couleur personnalisée"
                    style={{
                        background: 'conic-gradient(from 180deg at 50% 50%, #FF0000 0deg, #FFFF00 60deg, #00FF00 120deg, #00FFFF 180deg, #0000FF 240deg, #FF00FF 300deg, #FF0000 360deg)',
                        boxShadow: `inset -2px -4px 5px rgba(0,0,0,0.2), inset 2px 2px 5px rgba(255,255,255,0.6), 2px 4px 5px rgba(0,0,0,0.3)`
                    }}
                >
                    <input 
                        type="color" 
                        className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                        onChange={(e) => handleColorSelect(e.target.value)}
                        value={isEraser ? '#000000' : color}
                    />
                     {/* Wet highlight */}
                     <div className="absolute top-2 left-2 w-3 h-2 bg-white opacity-60 rounded-full blur-[1px] pointer-events-none"></div>
                </label>


                {/* Rag (Clear Button) */}
                <button 
                    onClick={clearCanvas} 
                    className="absolute -top-2 -right-2 w-14 h-14 bg-gray-200 rounded-full shadow-md flex items-center justify-center text-xl transform rotate-12 hover:rotate-45 transition-transform border-2 border-gray-300"
                    title="Tout effacer (Chiffon)"
                >
                    🧽
                </button>
             </div>
          </div>
        )}

        <button
          onClick={() => setIsActive(!isActive)}
          className={`w-16 h-16 rounded-full shadow-[0px_6px_0px_0px_rgba(0,0,0,0.2)] flex items-center justify-center text-3xl transition-all hover:scale-110 active:scale-95 active:shadow-none active:translate-y-1 ${isActive ? 'bg-red-500 text-white rotate-12 border-4 border-white' : 'bg-white text-pop-purple border-4 border-pop-purple animate-bounce-slow'}`}
          title={isActive ? "Fermer le mode dessin" : "Sortir mes pinceaux !"}
        >
          {isActive ? '✖️' : '🎨'}
        </button>
      </div>
    </>
  );
};

export default DoodleLayer;
