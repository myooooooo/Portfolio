import React from 'react';
import { PROJECTS } from '../constants';

interface ProjectListProps {
  onOpenProject: (projectId: number) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({ onOpenProject }) => {
  return (
    <div className="flex h-full items-center px-20 md:px-40 gap-40 bg-transparent">
        
        {/* Intro Text Block (First item in the row) */}
        <div className="flex-shrink-0 w-[50vw] md:w-[30vw] reveal-node">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-ultra-tight leading-[0.8] mb-8">
                SÉLECTION <br/> <span className="text-pop-pink">PROJETS.</span>
            </h2>
            <p className="text-xs font-black uppercase tracking-widest-luxe text-gray-400 border-l-4 border-pop-pink pl-6 py-2">
                UNE EXPLORATION CONTINUE ENTRE L'ESTHÉTIQUE ET LA FONCTION.
                <br/> GLISSEZ POUR EXPLORER.
            </p>
        </div>

        {/* Horizontal Projects Loop */}
        {PROJECTS.map((project, index) => (
            <div 
              key={project.id}
              onClick={() => onOpenProject(project.id)}
              className="group cursor-pointer flex-shrink-0 w-[80vw] md:w-[45vw] lg:w-[35vw] reveal-node relative"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-6 border border-black/5 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-pop-pink/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-multiply"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out" 
                />
                
                {/* Floating Year Tag */}
                <div className="absolute top-4 left-4 z-20">
                   <span className="bg-white text-luxe-black text-[9px] font-black px-3 py-1 uppercase tracking-widest">
                     {project.year}
                   </span>
                </div>
              </div>
              
              {/* Info Below */}
              <div className="flex justify-between items-baseline border-b-2 border-luxe-black pb-4 group-hover:border-pop-pink transition-colors">
                <div>
                   <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter group-hover:text-pop-pink transition-colors">
                     {project.title}
                   </h3>
                   <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-luxe-black">
                     {project.category}
                   </span>
                </div>
                <div className="text-4xl font-black text-gray-100 group-hover:text-pop-pink/20 transition-colors">
                  0{index + 1}
                </div>
              </div>
            </div>
        ))}

        {/* Spacer at the end */}
        <div className="w-20 flex-shrink-0"></div>
    </div>
  );
};

export default ProjectList;