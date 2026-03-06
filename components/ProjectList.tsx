import React from 'react';
import { PROJECTS } from '../constants';

interface ProjectListProps {
  onOpenProject: (projectId: number) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({ onOpenProject }) => {
  return (
    <div className="flex items-center h-full px-20 w-max bg-white relative" role="region" aria-label="Projects gallery">

      {/* Ligne directrice centrale (décoration suisse) */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-red-500/20 z-0 pointer-events-none" aria-hidden="true"></div>

      {PROJECTS.map((project, index) => {
        const positionType = index % 4;

        let containerClasses = "";
        let imageAspectRatio = "";

        switch (positionType) {
            case 0:
                containerClasses = "self-end mb-20 w-[35vw] md:w-[28vw]";
                imageAspectRatio = "aspect-[3/4]";
                break;
            case 1:
                containerClasses = "self-start mt-20 w-[38vw] md:w-[30vw]";
                imageAspectRatio = "aspect-square";
                break;
            case 2:
                containerClasses = "self-center w-[42vw] md:w-[35vw]";
                imageAspectRatio = "aspect-[16/9]";
                break;
            case 3:
                containerClasses = "self-start mt-40 w-[35vw] md:w-[26vw]";
                imageAspectRatio = "aspect-[4/5]";
                break;
        }

        return (
          <article
            key={project.id}
            className={`group relative flex-shrink-0 mx-8 cursor-pointer z-10 transition-transform duration-500 hover:z-20 ${containerClasses}`}
            onClick={() => onOpenProject(project.id)}
            role="button"
            tabIndex={0}
            aria-label={`View ${project.title} project details`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onOpenProject(project.id);
              }
            }}
          >
             <div className="mb-2 overflow-hidden" aria-hidden="true">
                <span className="block text-[10px] font-black text-pop-pink -translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    N&deg;0{project.id}
                </span>
             </div>

             <div className={`relative w-full ${imageAspectRatio} bg-gray-100 overflow-hidden border border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,0.1)] group-hover:shadow-[15px_15px_0px_0px_#FF0080] transition-all duration-300`}>
                <img
                    src={project.imageUrl}
                    alt={`${project.title} - ${project.category} project from ${project.year}`}
                    loading="lazy"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://placehold.co/800x800/f5f5f5/000000?text=${project.title}`;
                    }}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
                />

                <div className="absolute inset-0 bg-pop-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply" aria-hidden="true"></div>

                {/* Metric badge on hover */}
                {project.metrics[0] && (
                  <div className="absolute bottom-4 left-4 bg-white border border-black px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                    <span className="text-[10px] font-black uppercase tracking-widest text-pop-pink">
                        {project.metrics[0]}
                    </span>
                  </div>
                )}
             </div>

             <div className="mt-4 flex flex-col items-start">
                <h3 className="text-2xl md:text-4xl font-black uppercase leading-none tracking-tighter-extreme group-hover:text-pop-pink transition-colors">
                    {project.title}
                </h3>
                <div className="flex items-center gap-4 mt-2 opacity-60 group-hover:opacity-100 transition-opacity">
                    <span className="text-[9px] font-bold uppercase tracking-widest border border-black px-2 py-0.5 rounded-full">{project.year}</span>
                    <span className="text-[9px] font-bold uppercase tracking-widest">{project.category}</span>
                </div>
             </div>
          </article>
        );
      })}

      {/* Espace vide à la fin pour le scroll */}
      <div className="w-[20vw] flex-shrink-0" aria-hidden="true"></div>
    </div>
  );
};

export default ProjectList;