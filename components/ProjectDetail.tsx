import React, { useEffect } from 'react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openImage = (url: string) => {
    window.open(url, '_blank');
  };

  // Custom Image Logic (preserved from previous version)
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
    // Default mock images if no specific ones
    galleryImages = [
        { url: project.imageUrl, label: "Alternate View 1" },
        { url: project.imageUrl, label: "Alternate View 2" },
    ]
  }

  return (
    <div className="min-h-screen bg-white text-luxe-black relative z-[200] overflow-x-hidden animate-fade-in-up">
      
      {/* 1. Header Navigation Brutalist */}
      <div className="fixed top-0 left-0 w-full h-20 border-b-2 border-luxe-black bg-white/95 backdrop-blur-sm z-50 flex items-center justify-between px-6 md:px-12">
         <button 
            onClick={onBack}
            className="text-sm font-black uppercase tracking-widest hover:text-pop-pink transition-colors flex items-center gap-4 group"
         >
            <span className="text-xl group-hover:-translate-x-2 transition-transform">←</span>
            <span>Back to Index</span>
         </button>
         
         <div className="hidden md:flex gap-8">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                CATEGORY: <span className="text-luxe-black">{project.category}</span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                YEAR: <span className="text-luxe-black">{project.year}</span>
            </span>
         </div>
      </div>

      <div className="pt-32 pb-20 px-6 md:px-12 max-w-[1800px] mx-auto">

         {/* 2. Massive Title Section */}
         <div className="mb-20 border-b-4 border-luxe-black pb-12 reveal-node">
            <h1 className="text-[11vw] leading-[0.8] font-black uppercase tracking-tighter break-words text-luxe-black">
              {project.title}
              <span className="text-pop-pink">.</span>
            </h1>
         </div>

         {/* 3. Asymmetric Grid Layout */}
         <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 mb-32">
            
            {/* LEFT COLUMN: Sticky Info & Context */}
            <div className="md:col-span-4 h-fit md:sticky md:top-32 space-y-10 reveal-node stagger-1">
               
               <div>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4 border-l-2 border-pop-pink pl-3">Context</h3>
                  <p className="text-xl md:text-2xl font-bold uppercase leading-tight text-luxe-black">
                    {project.description}
                  </p>
               </div>
               
               <div className="border-t-2 border-gray-200 pt-6">
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4">Tools Used</h3>
                  <div className="flex flex-wrap gap-2">
                     {['Figma', 'Procreate', 'Adobe Suite', 'Creativity', 'Love'].map((t) => (
                        <span key={t} className="border-2 border-luxe-black px-4 py-2 text-xs font-black uppercase hover:bg-luxe-black hover:text-white transition-all cursor-default shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                           {t}
                        </span>
                     ))}
                  </div>
               </div>

               <div className="border-t-2 border-gray-200 pt-6">
                  <a 
                    href={project.link || "#"} 
                    className="group flex items-center justify-between w-full bg-luxe-black text-white px-6 py-4 text-sm font-black uppercase tracking-widest hover:bg-pop-pink transition-colors"
                  >
                     <span>Open Project</span>
                     <span className="group-hover:rotate-45 transition-transform duration-300">↗</span>
                  </a>
               </div>

            </div>

            {/* RIGHT COLUMN: Visuals Flow */}
            <div className="md:col-span-8 space-y-16 reveal-node stagger-2">
                
                {/* Hero Image */}
                <div className="relative group cursor-pointer" onClick={() => openImage(project.imageUrl)}>
                    <div className="absolute inset-0 bg-pop-pink translate-x-3 translate-y-3 md:translate-x-5 md:translate-y-5 border-2 border-luxe-black"></div>
                    <div className="relative border-2 border-luxe-black bg-white p-2 md:p-4 hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-300">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                         <div className="absolute bottom-6 left-6 bg-white border border-black px-3 py-1 text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                            Main View
                         </div>
                    </div>
                </div>

                {/* Gallery Images */}
                {galleryImages.map((img, idx) => (
                    <div 
                        key={idx} 
                        className="relative group cursor-pointer"
                        onClick={() => openImage(img.url)}
                    >
                         <div className="border-2 border-luxe-black overflow-hidden relative">
                            <img
                              src={img.url}
                              alt={img.label}
                              className="w-full h-auto object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                            />
                            {/* Overlay Label on Hover */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                 <span className="bg-luxe-black text-white px-6 py-3 text-lg font-black uppercase tracking-widest transform rotate-[-2deg]">
                                    {img.label}
                                 </span>
                            </div>
                         </div>
                         <div className="mt-2 flex justify-between items-end border-b border-black pb-1">
                            <span className="text-[10px] font-black uppercase tracking-widest text-pop-pink">Fig. 0{idx + 1}</span>
                            <span className="text-xs font-bold uppercase">{img.label}</span>
                         </div>
                    </div>
                ))}
            </div>
         </div>
         
         {/* 4. Footer / Next Project Area */}
         <div className="border-t-4 border-luxe-black pt-20 mt-20 text-center reveal-node">
            <p className="text-xs font-black uppercase tracking-[0.5em] mb-6 text-gray-400">Ready for the next one?</p>
            <h2 className="text-[7vw] md:text-[8vw] font-black uppercase leading-[0.85] mb-12">
               LIKE WHAT <br/> <span className="text-pop-pink" style={{ WebkitTextStroke: '2px black', color: 'transparent' }}>YOU SEE?</span>
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-6">
                <button 
                   onClick={onBack}
                   className="border-2 border-luxe-black bg-transparent text-luxe-black text-xl font-black uppercase px-12 py-6 hover:bg-luxe-black hover:text-white transition-colors"
                >
                   Back to Works
                </button>
                <a 
                   href="mailto:zineb.anssafou@icloud.com"
                   className="bg-pop-pink border-2 border-pop-pink text-white text-xl font-black uppercase px-12 py-6 hover:bg-white hover:text-pop-pink transition-colors"
                >
                   Start a Project
                </a>
            </div>
         </div>

      </div>
    </div>
  );
};

export default ProjectDetail;