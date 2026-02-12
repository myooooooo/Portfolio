import React, { useEffect, useRef, useState } from 'react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Custom Image Logic - Unify all images into one gallery array including the main one
  let allImages: { url: string; label: string; type: string }[] = [
    { url: project.imageUrl, label: "Main Visual", type: "Hero" }
  ];

  if (project.title === "MYO RACER") {
    allImages.push(
        { url: "https://placehold.co/1200x600/FF0080/FFF?text=MYO+Detail+Zoom", label: "Zoom Détail", type: "Detail" },
        { url: "https://placehold.co/800x800/9D00FF/FFF?text=MYO+Sketch", label: "Sketch Phase", type: "Draft" },
        { url: "https://placehold.co/800x800/00E0FF/000?text=MYO+Process", label: "Color Process", type: "Process" }
    );
  } else if (project.title === "Y2K POP COVERS") {
    allImages.push(
        { url: "https://placehold.co/800x800/FF0080/FFF?text=Cover+V1+(Pink)", label: "Version Pink", type: "Variant" },
        { url: "https://placehold.co/800x800/00E0FF/000?text=Cover+V2+(Blue)", label: "Version Blue", type: "Variant" },
        { url: "https://placehold.co/800x800/9D00FF/FFF?text=Cover+V3+(Dark)", label: "Version Dark", type: "Variant" }
    );
  } else {
    allImages.push(
        { url: "https://placehold.co/800x600/111/FFF?text=Alternate+View+1", label: "Alternate View", type: "Mockup" },
        { url: "https://placehold.co/800x600/222/FFF?text=Alternate+View+2", label: "Close Up", type: "Detail" }
    );
  }

  // CALCUL DYNAMIQUE DE LA HAUTEUR (COMPACT)
  // On réduit le multiplicateur à 35vh par image (au lieu de 70) pour un scroll beaucoup plus rapide/court.
  const trackHeight = `${Math.max(100, allImages.length * 35 + 50)}vh`;

  // 1. SCROLL LISTENER
  useEffect(() => {
    const scrollContainer = document.getElementById('project-modal-scroll');
    if (!scrollContainer) return;

    const handleScroll = () => {
        if (!scrollTrackRef.current) return;
        
        const rect = scrollTrackRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const totalHeight = rect.height - viewportHeight;
        
        let progress = 0;
        if (rect.top <= 0) {
            progress = Math.abs(rect.top) / totalHeight;
        }
        
        progress = Math.min(Math.max(progress, 0), 1);
        setScrollProgress(progress);
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [trackHeight]); 

  const openImage = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div ref={containerRef} className="project-detail-container min-h-screen bg-white text-luxe-black relative overflow-x-hidden">
      
      {/* 1. Sticky Header */}
      <div className="sticky top-0 w-full h-24 bg-white/95 backdrop-blur-md z-[300] flex items-center justify-between px-8 md:px-16 border-b border-black">
         <button 
            onClick={onBack}
            className="group flex items-center gap-3 text-sm font-black uppercase tracking-widest hover:text-pop-pink transition-colors"
         >
            <div className="w-10 h-10 border-2 border-current rounded-full flex items-center justify-center group-hover:-translate-x-1 transition-transform">
                ←
            </div>
            <span>Back to Works</span>
         </button>
         
         <div className="hidden md:block">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
               Viewing Project / <span className="text-luxe-black">0{project.id}</span>
            </span>
         </div>
      </div>

      {/* Main Content: Padding-top ajusté pour coller au header */}
      <div className="pt-24 max-w-[1920px] mx-auto">

         {/* 2. Title Section: Marges réduites */}
         <div className="px-6 md:px-16 mb-4 mt-4 reveal-node">
            <h1 className="text-[10vw] md:text-[12vw] leading-[0.8] font-black uppercase tracking-tighter text-luxe-black">
              {project.title}
              <span className="text-pop-pink text-[14vw] leading-none">.</span>
            </h1>
         </div>

         {/* 3. Data Grid Bar */}
         <div className="border-y-2 border-black grid grid-cols-2 md:grid-cols-4 reveal-node mb-0">
            <div className="p-4 md:p-6 border-r md:border-r-2 border-black">
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 block mb-1">Year</span>
                <span className="text-lg font-bold">{project.year}</span>
            </div>
            <div className="p-4 md:p-6 border-r-0 md:border-r-2 border-black">
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 block mb-1">Category</span>
                <span className="text-lg font-bold">{project.category}</span>
            </div>
            <div className="p-4 md:p-6 border-r md:border-r-2 border-t-2 md:border-t-0 border-black">
                 <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 block mb-1">Role</span>
                 <span className="text-lg font-bold">Art Direction</span>
            </div>
            <div className="p-4 md:p-6 border-t-2 md:border-t-0 border-black bg-luxe-black text-white flex items-center justify-center cursor-pointer hover:bg-pop-pink transition-colors group" onClick={() => project.link && window.open(project.link)}>
                 <span className="text-xs font-black uppercase tracking-widest group-hover:mr-2 transition-all">Visit</span>
                 <span className="opacity-0 group-hover:opacity-100 transition-opacity text-lg">↗</span>
            </div>
         </div>

         {/* 4. SCROLLYTELLING LAYOUT */}
         <div className="grid grid-cols-1 md:grid-cols-12 border-t border-black relative">
            
            {/* LEFT COLUMN: Sticky Info */}
            <div className="md:col-span-4 border-r-0 md:border-r-2 border-black bg-gray-50/50 hidden md:block z-10">
               {/* Sticky Container */}
               <div className="sticky top-24 p-8 lg:p-12 h-[calc(100vh-6rem)] flex flex-col justify-between">
                   <div className="space-y-8">
                      <div>
                        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-pop-pink mb-4">The Brief</h3>
                        <p className="text-xl md:text-2xl font-bold uppercase leading-tight text-luxe-black">
                          {project.description}
                        </p>
                      </div>
                      <div className="w-8 h-1 bg-black"></div>
                      <p className="text-sm text-gray-600 font-medium leading-relaxed max-w-sm">
                        Déroulez pour explorer la galerie.
                      </p>
                   </div>
                   
                   <div>
                      <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-3">Toolbox</h3>
                      <div className="flex flex-wrap gap-2">
                         {['Figma', 'Procreate', 'Adobe Suite'].map((t) => (
                            <span key={t} className="bg-white border border-black px-2 py-1 text-[9px] font-black uppercase">
                               {t}
                            </span>
                         ))}
                      </div>
                   </div>
               </div>
            </div>

            {/* RIGHT COLUMN: The Scrollytelling Track */}
            <div 
                ref={scrollTrackRef} 
                className="md:col-span-8 relative"
                style={{ height: trackHeight }}
            >
                {/* Le Sticky Viewport */}
                <div className="sticky top-24 h-[calc(100vh-6rem)] overflow-hidden bg-white flex items-center">
                    
                    {/* The Horizontal Movable Track */}
                    <div 
                        className="flex flex-nowrap items-center px-10 md:px-20 gap-10 md:gap-20 will-change-transform"
                        style={{ transform: `translateX(-${scrollProgress * (allImages.length - 1) * 70}vw)` }} 
                    >
                        {allImages.map((img, idx) => (
                            <div 
                                key={idx} 
                                className="flex-shrink-0 w-[85vw] md:w-[60vw] group cursor-pointer"
                                onClick={() => openImage(img.url)}
                            >
                                <div className="border-2 border-black p-2 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-300">
                                    <div className="relative aspect-[4/3] overflow-hidden border border-black/10 bg-gray-100">
                                        <img
                                            src={img.url}
                                            alt={img.label}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/111/FFF?text=Image+Not+Found';
                                            }}
                                        />
                                        <div className="absolute top-4 left-4 bg-pop-pink text-white text-[9px] font-black uppercase px-2 py-1">
                                            {img.type}
                                        </div>
                                    </div>
                                    <div className="mt-3 flex justify-between items-end px-2 pb-1">
                                        <h3 className="text-xl md:text-3xl font-black uppercase tracking-tighter">{img.label}</h3>
                                        <span className="text-[10px] font-bold font-mono text-gray-400">0{idx + 1}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                        {/* End of Gallery Call to Action - Reduced Size */}
                        <div className="flex-shrink-0 w-[50vw] md:w-[30vw] h-[40vh] flex flex-col items-center justify-center border-l-2 border-black pl-10 md:pl-20">
                             <h2 className="text-4xl md:text-5xl font-black uppercase leading-none mb-6 text-center">
                                THE<br/><span className="text-pop-pink">END.</span>
                             </h2>
                             <button onClick={onBack} className="bg-luxe-black text-white px-8 py-3 font-black uppercase tracking-widest text-sm hover:bg-pop-pink transition-colors">
                                Next Project →
                             </button>
                        </div>
                    </div>

                    {/* Progress Bar Horizontal Bottom */}
                    <div className="absolute bottom-0 left-0 h-1 bg-gray-100 w-full">
                        <div 
                            className="h-full bg-pop-pink transition-all duration-100 ease-out"
                            style={{ width: `${scrollProgress * 100}%` }}
                        ></div>
                    </div>

                </div>
            </div>
         </div>
         
         {/* Footer simple - Compact */}
         <div className="bg-luxe-black text-white py-10 text-center relative z-20 border-t-2 border-white/10">
             <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-3">Project End</p>
             <button onClick={onBack} className="text-lg font-black uppercase border-b-2 border-white/20 hover:text-pop-pink hover:border-pop-pink transition-colors pb-1">
                Back to Index
             </button>
         </div>

      </div>
    </div>
  );
};

export default ProjectDetail;