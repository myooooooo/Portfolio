
import React, { useRef, useState, useEffect } from 'react';

const DoodleLayer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [color, setColor] = useState('#FF0080');

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
    canvas.setPointerCapture(e.pointerId); // Capture le pointeur pour éviter de perdre le focus si on sort vite

    const { clientX, clientY, pressure, pointerType } = e;
    
    ctx.beginPath();
    ctx.moveTo(clientX, clientY);
    
    // Calcul de l'épaisseur initiale
    let lineWidth = 5;
    // Si c'est un stylet, on utilise la pression (pression normale ~0.5, max 1.0)
    if (pointerType === 'pen') {
       // On multiplie la pression pour avoir une variation visible (de 1px à 25px par ex)
       lineWidth = Math.max(1, pressure * 25);
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = color;
  };

  const draw = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !isActive) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { clientX, clientY, pressure, pointerType } = e;

    // On dessine le segment vers la nouvelle position
    ctx.lineTo(clientX, clientY);
    ctx.stroke();

    // Pour la sensibilité à la pression continue :
    // L'astuce est de commencer un nouveau chemin (beginPath) à chaque mouvement
    // pour pouvoir changer le lineWidth dynamiquement.
    if (pointerType === 'pen' && pressure > 0) {
        ctx.beginPath();
        ctx.moveTo(clientX, clientY);
        // Variation dynamique de l'épaisseur selon la pression
        const newWidth = Math.max(1, pressure * 25);
        ctx.lineWidth = newWidth;
    }
  };

  const stopDrawing = (e: React.PointerEvent<HTMLCanvasElement>) => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (canvas) {
        canvas.releasePointerCapture(e.pointerId);
        const ctx = canvas.getContext('2d');
        ctx?.beginPath(); // Reset path pour ne pas relier au prochain trait
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
    }
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
        style={{ touchAction: 'none' }} // Important pour désactiver le scroll natif sur mobile/tablette
      />

      {/* Controls */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[9001] flex gap-2 items-end">
        {isActive && (
          <div className="flex gap-2 animate-scale-in bg-white p-2 rounded-full shadow-xl border-2 border-pop-purple mb-20 md:mb-0">
            <button onClick={() => setColor('#FF0080')} className={`w-8 h-8 rounded-full bg-pop-pink border-2 ${color === '#FF0080' ? 'border-black scale-110' : 'border-white'}`}></button>
            <button onClick={() => setColor('#9D00FF')} className={`w-8 h-8 rounded-full bg-pop-purple border-2 ${color === '#9D00FF' ? 'border-black scale-110' : 'border-white'}`}></button>
            <button onClick={() => setColor('#00E0FF')} className={`w-8 h-8 rounded-full bg-pop-accent border-2 ${color === '#00E0FF' ? 'border-black scale-110' : 'border-white'}`}></button>
            <button onClick={() => setColor('#000000')} className={`w-8 h-8 rounded-full bg-black border-2 ${color === '#000000' ? 'border-white scale-110 shadow-lg' : 'border-white'}`}></button>
            <div className="w-px h-8 bg-gray-200 mx-1"></div>
            <button onClick={clearCanvas} className="text-xl hover:scale-110 transition-transform" title="Effacer">🗑️</button>
          </div>
        )}

        <button
          onClick={() => setIsActive(!isActive)}
          className={`w-14 h-14 rounded-full shadow-[0px_4px_0px_0px_rgba(0,0,0,0.2)] flex items-center justify-center text-2xl transition-all hover:scale-110 active:scale-95 ${isActive ? 'bg-pop-yellow text-black rotate-12 border-4 border-pop-purple' : 'bg-white text-pop-purple border-2 border-pop-purple'}`}
          title={isActive ? "Fermer le mode dessin" : "Activer le mode dessin (Supporte l'Apple Pencil)"}
        >
          {isActive ? '✕' : '✏️'}
        </button>
      </div>
    </>
  );
};

export default DoodleLayer;
