import React from 'react';
import { PROJECTS } from '../constants';

interface ProjectListProps {
  onOpenProject: (projectId: number) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({ onOpenProject }) => {
  return (
    <section id="work" className="py-40 bg-transparent">
      <div className="max-w-[1800px] mx-auto px-8 md:px-12">
        <div className="reveal-node mb-32 flex flex-col md:flex-row justify-between items-end gap-10">
          <h2 className="text-6xl md:text-[8vw] font-black uppercase tracking-ultra-tight leading-[0.8]">
            SÉLECTION <br/> DE PROJETS<span className="text-pop-pink">.</span>
          </h2>
          <p className="text-[10px] font-black uppercase tracking-widest-luxe text-gray-400 max-w-[200px]">
            UNE EXPLORATION CONTINUE ENTRE L'ESTHÉTIQUE ET LA FONCTION.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id}
              onClick={() => onOpenProject(project.id)}
              className={`reveal-node group cursor-pointer ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 mb-8 border border-black/5">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                />
                <div className="absolute top-6 left-6 flex gap-2">
                   <span className="bg-luxe-black text-white text-[9px] font-black px-4 py-1.5 uppercase tracking-widest">
                     {project.year}
                   </span>
                </div>
              </div>
              
              <div className="flex justify-between items-start border-b-2 border-luxe-black pb-8">
                <div>
                   <h3 className="text-4xl font-black uppercase tracking-ultra-tight group-hover:text-pop-pink transition-colors">
                     {project.title}
                   </h3>
                   <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                     {project.category}
                   </span>
                </div>
                <div className="text-3xl font-black text-luxe-black/10 group-hover:text-pop-pink transition-colors">
                  0{index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;