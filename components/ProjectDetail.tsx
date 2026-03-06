import React from 'react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const projectIdStr = String(project.id).padStart(2, '0');

  return (
    <div className="fixed inset-0 z-[200] bg-white flex flex-col md:flex-row animate-fade-in-up overflow-hidden" role="dialog" aria-labelledby="project-title" aria-modal="true">

      {/* COLONNE GAUCHE : INFO FIXE */}
      <aside className="w-full md:w-[35%] lg:w-[30%] h-auto md:h-full border-b md:border-b-0 md:border-r border-black flex flex-col justify-between bg-white z-20 shrink-0 md:overflow-y-auto scrollbar-hide">

         <div className="p-6 md:p-8 lg:p-10 pb-0">
            <button
                onClick={onBack}
                className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest hover:text-pop-pink transition-colors mb-8 md:mb-12"
                aria-label="Close project details and return to gallery"
            >
                <div className="w-8 h-8 border border-black rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all" aria-hidden="true">
                    &larr;
                </div>
                <span>Back to Index</span>
            </button>

            <div className="mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-pop-pink block mb-2">Project 0{project.id}</span>
                <h1 id="project-title" className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-luxe-black break-words hyphens-auto">
                    {project.title}
                </h1>
            </div>

            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 italic">
                &ldquo;{project.subtitle}&rdquo;
            </p>

            <p className="text-sm md:text-base font-medium leading-relaxed text-gray-600 mb-8 border-l-2 border-pop-pink pl-4">
                {project.description}
            </p>

            {/* Metrics badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.metrics.map((metric, i) => (
                <span key={i} className="text-[10px] font-black uppercase tracking-wider bg-pop-pink/10 text-pop-pink px-3 py-1.5 border border-pop-pink/20">
                  {metric}
                </span>
              ))}
            </div>
         </div>

         {/* Bottom: Metadata Grid */}
         <div className="mt-auto">
            <div className="grid grid-cols-2 border-t border-black">
                <div className="p-6 md:p-8 border-r border-black border-b border-black">
                    <span className="text-[9px] text-gray-400 font-black uppercase tracking-widest block mb-1">Year</span>
                    <span className="text-sm font-bold block">{project.year}</span>
                </div>
                <div className="p-6 md:p-8 border-b border-black">
                    <span className="text-[9px] text-gray-400 font-black uppercase tracking-widest block mb-1">Category</span>
                    <span className="text-sm font-bold block">{project.category}</span>
                </div>
                <div className="p-6 md:p-8 border-r border-black">
                    <span className="text-[9px] text-gray-400 font-black uppercase tracking-widest block mb-1">Role</span>
                    <span className="text-sm font-bold block">Direction & Execution</span>
                </div>
                <button
                    className="p-6 md:p-8 bg-black text-white cursor-pointer hover:bg-pop-pink transition-colors flex items-center justify-center group"
                    onClick={() => project.link && project.link !== '#' && window.open(project.link, '_blank', 'noopener,noreferrer')}
                    aria-label={`Visit ${project.title} website`}
                    disabled={!project.link || project.link === '#'}
                >
                    <span className="text-[10px] font-black uppercase tracking-widest mr-2">Visit</span>
                    <span className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" aria-hidden="true">&nearr;</span>
                </button>
            </div>
         </div>
      </aside>

      {/* COLONNE DROITE : CONTENU SCROLLABLE */}
      <main className="w-full md:w-[65%] lg:w-[70%] h-full overflow-y-auto bg-gray-50 relative flex flex-col" aria-label="Project details">

         {/* HERO IMAGE */}
         <figure className="w-full relative group">
            <div className="relative overflow-hidden">
                <img
                    src={project.imageUrl}
                    alt={`${project.title} - Hero visual`}
                    loading="eager"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://placehold.co/1200x600/f0f0f0/cccccc?text=${project.title}`;
                    }}
                    className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 block"
                />
                <div className="absolute inset-0 bg-pop-pink/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none mix-blend-multiply" aria-hidden="true"></div>
            </div>
            <figcaption className="bg-white border-b border-black py-3 px-6 flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Hero Visual</span>
                <span className="text-[10px] font-mono font-bold" aria-hidden="true">PROJECT_0{project.id}</span>
            </figcaption>
         </figure>

         {/* SECTION 1: IMPACT */}
         <section className="bg-white border-b border-black p-8 md:p-12 lg:p-16">
            <div className="flex items-baseline gap-4 mb-6">
                <span className="text-pop-pink font-mono font-bold text-sm">/01</span>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">IMPACT</h2>
            </div>
            <div className="pl-10">
                <p className="text-base md:text-lg font-medium leading-relaxed text-gray-700 mb-6 max-w-2xl">
                    {project.impact}
                </p>
                <div className="border-l-4 border-pop-pink pl-6 py-2">
                    <p className="text-sm font-bold text-gray-500 uppercase leading-relaxed max-w-xl">
                        Ce que ca prouve : {project.impactProof}
                    </p>
                </div>
            </div>
         </section>

         {/* SECTION 2: METHODE */}
         <section className="bg-white border-b border-black p-8 md:p-12 lg:p-16">
            <div className="flex items-baseline gap-4 mb-8">
                <span className="text-pop-pink font-mono font-bold text-sm">/02</span>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">METHODE</h2>
            </div>
            <div className="pl-10 space-y-8">
                {project.method.map((step, idx) => (
                    <div key={idx} className="group">
                        <div className="flex items-baseline gap-3 mb-2">
                            <span className="text-[10px] font-mono font-bold text-pop-pink">{String(idx + 1).padStart(2, '0')}</span>
                            <h3 className="text-lg md:text-xl font-black uppercase tracking-tight group-hover:text-pop-pink transition-colors">
                                {step.title}
                            </h3>
                        </div>
                        <p className="text-sm text-gray-600 pl-8 max-w-xl font-medium leading-relaxed">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
         </section>

         {/* SECTION 3: OUTILS */}
         <section className="bg-white border-b border-black p-8 md:p-12 lg:p-16">
            <div className="flex items-baseline gap-4 mb-6">
                <span className="text-pop-pink font-mono font-bold text-sm">/03</span>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">OUTILS</h2>
            </div>
            <div className="pl-10 flex flex-wrap gap-3">
                {project.tools.map((tool, i) => (
                    <span key={i} className={`px-4 py-2 text-sm font-bold uppercase tracking-wider border-2 border-black hover:bg-black hover:text-white transition-all cursor-default ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                        {tool}
                    </span>
                ))}
            </div>
         </section>

         {/* SECTION 4: VISUELS */}
         <section className="bg-gray-50 p-8 md:p-12 lg:p-16">
            <div className="flex items-baseline gap-4 mb-8">
                <span className="text-pop-pink font-mono font-bold text-sm">/04</span>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">VISUELS</h2>
                {project.visuals.length >= 6 && (
                  <span className="ml-4 text-[10px] font-black uppercase tracking-widest text-gray-400">
                    {project.visuals.length} ILLUSTRATIONS
                  </span>
                )}
            </div>
            <div className={`pl-10 grid gap-6 ${project.visuals.length >= 6 ? 'grid-cols-2' : 'grid-cols-1 md:grid-cols-2'}`}>
                {project.visuals.map((visual, idx) => (
                    <figure key={idx} className="group relative">
                        <div className={`relative overflow-hidden border border-black bg-white ${project.visuals.length >= 6 ? 'aspect-[3/4]' : ''}`}>
                            <img
                                src={`/images/project-${projectIdStr}-detail-${idx + 1}.jpg`}
                                alt={`${project.title} - ${visual}`}
                                loading="lazy"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = `https://placehold.co/600x800/f5f5f5/999999?text=${encodeURIComponent(visual.split(' — ')[0])}`;
                                }}
                                className={`w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ${project.visuals.length >= 6 ? 'absolute inset-0 h-full group-hover:scale-105' : 'h-auto'}`}
                            />
                            <div className="absolute inset-0 bg-pop-pink/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none mix-blend-multiply" aria-hidden="true"></div>

                            {/* Index badge */}
                            <div className="absolute top-3 left-3 bg-white/90 border border-black px-2 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-[10px] font-black font-mono">{String(idx + 1).padStart(2, '0')}</span>
                            </div>
                        </div>
                        <figcaption className="mt-2 flex justify-between items-center">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 truncate">{visual.split(' — ')[0]}</span>
                            <span className="text-[10px] font-mono font-bold text-gray-300 flex-shrink-0 ml-2" aria-hidden="true">FIG_{String(idx + 1).padStart(2, '0')}</span>
                        </figcaption>
                    </figure>
                ))}
            </div>
         </section>

         {/* Footer */}
         <div className="bg-swiss-black text-white p-20 text-center mt-auto flex flex-col items-center justify-center min-h-[50vh]">
            <span className="text-pop-pink text-4xl mb-4 animate-bounce" aria-hidden="true">&darr;</span>
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
