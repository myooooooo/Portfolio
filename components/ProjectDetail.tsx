import React, { useEffect, useRef } from 'react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 2. TRIGGER ANIMATIONS
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      } 
    );

    const elements = document.querySelectorAll('.project-detail-container .reveal-node');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const openImage = (url: string) => {
    window.open(url, '_blank');
  };

  // Custom Image Logic
  let galleryImages: { url: string; label: string }[] = [];

  if (project.title === "MYO RACER") {
    galleryImages = [
        { url: "https://placehold.co/1200x600/FF0080/FFF?text=MYO+Detail+Zoom", label: "Zoom Détail" },
        { url: "https://placehold.co/800x800/9D00FF/FFF?text=MYO+Sketch", label: "Sketch Phase" },
        { url: "https://placehold.co/800x800/00E0FF/000?text=MYO+Process", label: "Color Process" },
    ];
  } else if (project.title === "Y2K POP COVERS") {
    galleryImages = [
        { url: "https://placehold.co/800x800/FF0080/FFF?text=Cover+V1+(Pink)", label: "Version Pink" },
        { url: "https://placehold.co/800x800/00E0FF/000?text=Cover+V2+(Blue)", label: "Version Blue" },
        { url: "https://placehold.co/800x800/9D00FF/FFF?text=Cover+V3+(Dark)", label: "Version Dark" },
    ];
  } else {
    galleryImages = [
        { url: project.imageUrl, label: "Alternate View 1" },
        { url: project.imageUrl, label: "Alternate View 2" },
    ]
  }

  return (
    <div ref={containerRef} className="project-detail-container min-h-screen bg-white text-luxe-black relative z-[200] overflow-x-hidden animate-fade-in-up">
      
      {/* 1. Header Navigation - Minimal */}
      <div className="fixed top-0 left-0 w-full h-24 bg-white/90 backdrop-blur-md z-50 flex items-center justify-between px-8 md:px-16 border-b border-black">
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

      <div className="pt-32 pb-20 max-w-[1920px] mx-auto">

         {/* 2. Title Section - Full Width */}
         <div className="px-6 md:px-16 mb-12 reveal-node">
            <h1 className="text-[10vw] md:text-[12vw] leading-[0.8] font-black uppercase tracking-tighter text-luxe-black mb-6">
              {project.title}
              <span className="text-pop-pink text-[14vw] leading-none">.</span>
            </h1>
         </div>

         {/* 3. Data Grid Bar - Swiss Style */}
         <div className="border-y-2 border-black grid grid-cols-2 md:grid-cols-4 reveal-node">
            <div className="p-6 md:p-8 border-r md:border-r-2 border-black">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-2">Year</span>
                <span className="text-xl font-bold">{project.year}</span>
            </div>
            <div className="p-6 md:p-8 border-r-0 md:border-r-2 border-black">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-2">Category</span>
                <span className="text-xl font-bold">{project.category}</span>
            </div>
            <div className="p-6 md:p-8 border-r md:border-r-2 border-t-2 md:border-t-0 border-black">
                 <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-2">Role</span>
                 <span className="text-xl font-bold">Art Direction & UI</span>
            </div>
            <div className="p-6 md:p-8 border-t-2 md:border-t-0 border-black bg-luxe-black text-white flex items-center justify-center cursor-pointer hover:bg-pop-pink transition-colors group" onClick={() => project.link && window.open(project.link)}>
                 <span className="text-sm font-black uppercase tracking-widest group-hover:mr-4 transition-all">Visit Live</span>
                 <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xl">↗</span>
            </div>
         </div>

         {/* 4. Layout: Text LEFT / Images RIGHT */}
         <div className="grid grid-cols-1 md:grid-cols-12 min-h-screen">
            
            {/* LEFT COLUMN: Sticky Context (30%) */}
            <div className="md:col-span-4 border-r-0 md:border-r-2 border-black bg-gray-50/50 p-8 md:p-16 relative">
               <div className="md:sticky md:top-40 reveal-node stagger-1 space-y-12">
                   <div>
                      <h3 className="text-xs font-black uppercase tracking-[0.4em] text-pop-pink mb-6">The Brief</h3>
                      <p className="text-xl md:text-2xl font-bold uppercase leading-tight text-luxe-black">
                        {project.description}
                      </p>
                      <p className="mt-6 text-sm text-gray-600 font-medium leading-relaxed">
                        Un projet conçu pour repousser les limites de l'interaction visuelle. L'objectif était de créer une expérience immersive qui reflète l'identité unique de la marque tout en restant fonctionnelle.
                      </p>
                   </div>

                   <div className="pt-8 border-t-2 border-gray-200">
                      <h3 className="text-xs font-black uppercase tracking-[0.4em] text-gray-400 mb-6">Toolbox</h3>
                      <div className="flex flex-wrap gap-2">
                         {['Figma', 'Procreate', 'Adobe Suite', 'Creativity'].map((t) => (
                            <span key={t} className="bg-white border-2 border-black px-4 py-2 text-[10px] font-black uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                               {t}
                            </span>
                         ))}
                      </div>
                   </div>
               </div>
            </div>

            {/* RIGHT COLUMN: Visual Flow (70%) */}
            <div className="md:col-span-8 bg-white">
                {/* Hero Image */}
                <div className="w-full border-b-2 border-black cursor-pointer group overflow-hidden" onClick={() => openImage(project.imageUrl)}>
                     <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                      />
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 gap-0">
                    {galleryImages.map((img, idx) => (
                        <div key={idx} className="border-b-2 border-black relative group cursor-pointer" onClick={() => openImage(img.url)}>
                             <div className="p-8 md:p-16 flex flex-col items-center">
                                 <div className="relative shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                                     <img
                                       src={img.url}
                                       alt={img.label}
                                       className="w-full max-w-4xl h-auto object-cover border-2 border-black"
                                     />
                                     {/* Hover Overlay */}
                                     <div className="absolute inset-0 bg-pop-pink/20 opacity-0 group-hover:opacity-100 transition-opacity border-2 border-transparent group-hover:border-pop-pink flex items-center justify-center">
                                        <div className="bg-white px-6 py-2 text-xs font-black uppercase tracking-widest border border-black transform rotate-3">
                                            Zoom View
                                        </div>
                                     </div>
                                 </div>
                                 
                                 <div className="mt-8 flex items-center gap-4">
                                     <span className="w-12 h-[2px] bg-black"></span>
                                     <span className="text-xs font-bold uppercase tracking-widest">{img.label}</span>
                                     <span className="w-12 h-[2px] bg-black"></span>
                                 </div>
                             </div>
                        </div>
                    ))}
                </div>

                {/* Next Project Footer inside Right Column */}
                <div className="p-16 md:p-32 bg-luxe-black text-white text-center flex flex-col items-center justify-center min-h-[50vh] reveal-node">
                     <p className="text-xs font-black uppercase tracking-[0.5em] text-gray-500 mb-8">End of Case Study</p>
                     <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-12 hover:text-pop-pink transition-colors cursor-pointer" onClick={onBack}>
                        NEXT<br/>PROJECT
                     </h2>
                     <button 
                        onClick={onBack}
                        className="px-12 py-4 border-2 border-white text-white font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                     >
                        Back to Works
                     </button>
                </div>
            </div>
         </div>

      </div>
    </div>
  );
};

export default ProjectDetail;