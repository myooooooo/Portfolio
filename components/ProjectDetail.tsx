import React from 'react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  // Formatage de l'ID (ex: 1 devient "01")
  const projectIdStr = String(project.id).padStart(2, '0');

  // Génération dynamique des images locales
  // Il suffit de placer les images dans public/images/ avec le format : project-XX-detail-Y.jpg
  let allImages: { url: string; label: string; type: string; format: 'landscape' | 'square' | 'portrait' }[] = [
    { url: project.imageUrl, label: "Hero Visual", type: "Main", format: 'landscape' },
    { url: `/images/project-${projectIdStr}-detail-1.jpg`, label: "Detail View", type: "Zoom", format: 'square' },
    { url: `/images/project-${projectIdStr}-detail-2.jpg`, label: "Context / Use", type: "Concept", format: 'portrait' },
    { url: `/images/project-${projectIdStr}-detail-3.jpg`, label: "Process / Draft", type: "Process", format: 'landscape' }
  ];

  return (
    <div className="fixed inset-0 z-[200] bg-white flex flex-col md:flex-row animate-fade-in-up overflow-hidden" role="dialog" aria-labelledby="project-title" aria-modal="true">

      {/* ------------------------------------------------------- */}
      {/* COLONNE GAUCHE : INFO FIXE (STICKY SIDEBAR) */}
      {/* ------------------------------------------------------- */}
      <aside className="w-full md:w-[35%] lg:w-[30%] h-auto md:h-full border-b md:border-b-0 md:border-r border-black flex flex-col justify-between bg-white z-20 shrink-0 md:overflow-y-auto scrollbar-hide">

         {/* Top: Header & Back */}
         <div className="p-6 md:p-8 lg:p-10 pb-0">
            <button
                onClick={onBack}
                className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest hover:text-pop-pink transition-colors mb-8 md:mb-12"
                aria-label="Close project details and return to gallery"
            >
                <div className="w-8 h-8 border border-black rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all" aria-hidden="true">
                    ←
                </div>
                <span>Back to Index</span>
            </button>

            {/* Title Block */}
            <div className="mb-8">
                <span className="text-[10px] font-bold uppercase tracking-widest text-pop-pink block mb-2">Project 0{project.id}</span>
                <h1 id="project-title" className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-luxe-black break-words hyphens-auto">
                    {project.title}
                </h1>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base font-medium leading-relaxed text-gray-600 mb-8 border-l-2 border-pop-pink pl-4">
                {project.description}
            </p>
         </div>

         {/* Bottom: Metadata Grid */}
         <div className="mt-auto">
            {/* Grid Infos */}
            <div className="grid grid-cols-2 border-t border-black">
                <div className="p-6 md:p-8 border-r border-black border-b border-black">
                    <span className="text-[9px] text-gray-400 font-black uppercase tracking-widest block mb-1">Year</span>
                    <span className="text-sm font-bold block">{project.year}</span>
                </div>
                <div className="p-6 md:p-8 border-b border-black">
                    <span className="text-[9px] text-gray-400 font-black uppercase tracking-widest block mb-1">Role</span>
                    <span className="text-sm font-bold block">Art Direction</span>
                </div>
                <div className="p-6 md:p-8 border-r border-black">
                    <span className="text-[9px] text-gray-400 font-black uppercase tracking-widest block mb-1">Category</span>
                    <span className="text-sm font-bold block">{project.category}</span>
                </div>
                <button
                    className="p-6 md:p-8 bg-black text-white cursor-pointer hover:bg-pop-pink transition-colors flex items-center justify-center group"
                    onClick={() => project.link && window.open(project.link, '_blank', 'noopener,noreferrer')}
                    aria-label={`Visit ${project.title} website`}
                    disabled={!project.link}
                >
                    <span className="text-[10px] font-black uppercase tracking-widest mr-2">Visit</span>
                    <span className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" aria-hidden="true">↗</span>
                </button>
            </div>
         </div>
      </aside>

      {/* ------------------------------------------------------- */}
      {/* COLONNE DROITE : GALERIE SCROLLABLE (FULL HEIGHT) */}
      {/* ------------------------------------------------------- */}
      <main className="w-full md:w-[65%] lg:w-[70%] h-full overflow-y-auto bg-gray-50 relative flex flex-col" aria-label="Project images gallery">

         {/* Images Loop */}
         {allImages.map((img, idx) => (
            <figure key={idx} className="w-full relative group">
                <div className="relative overflow-hidden">
                    {/* Image Container */}
                    <img
                        src={img.url}
                        alt={`${project.title} - ${img.label}`}
                        loading={idx === 0 ? 'eager' : 'lazy'}
                        onError={(e) => {
                            // Fallback si l'image n'est pas trouvée par l'utilisateur
                            (e.target as HTMLImageElement).src = `https://placehold.co/1000x800/f0f0f0/cccccc?text=Image+Missing+${idx}`;
                        }}
                        className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 block"
                    />

                    {/* Overlay Info on Hover */}
                    <div className="absolute inset-0 bg-pop-pink/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none mix-blend-multiply" aria-hidden="true"></div>

                    <div className="absolute top-6 right-6 bg-white border border-black px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0" aria-hidden="true">
                        <span className="text-[10px] font-black uppercase tracking-widest text-black">
                            {String(idx + 1).padStart(2, '0')} — {img.type}
                        </span>
                    </div>
                </div>

                {/* Petit label sous l'image pour le rythme visuel */}
                <figcaption className="bg-white border-b border-black py-3 px-6 flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{img.label}</span>
                    <span className="text-[10px] font-mono font-bold" aria-hidden="true">IMAGE_DATA_0{idx + 1}</span>
                </figcaption>
            </figure>
         ))}

         {/* Footer de la galerie */}
         <div className="bg-luxe-black text-white p-20 text-center mt-auto flex flex-col items-center justify-center min-h-[50vh]">
            <span className="text-pop-pink text-4xl mb-4 animate-bounce" aria-hidden="true">↓</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
                Next<br/>Project
            </h2>
            <button
                onClick={onBack}
                className="border-2 border-white px-8 py-3 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                aria-label="Return to all projects"
            >
                Back to Works
            </button>
         </div>
      </main>

    </div>
  );
};

export default ProjectDetail;