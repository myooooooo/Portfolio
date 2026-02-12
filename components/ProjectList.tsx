import React from 'react';
import { PROJECTS } from '../constants';

interface ProjectListProps {
  onOpenProject: (projectId: number) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({ onOpenProject }) => {
  return (
    <section id="work" className="py-24 bg-[#f5f5f7]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="reveal-node mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-apple-black">
            Projets sélectionnés.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id}
              onClick={() => onOpenProject(project.id)}
              className="reveal-node group relative aspect-[4/5] md:aspect-square bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              {/* Contrast Overlay for visibility */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
              
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              />
              
              <div className="absolute top-0 left-0 p-10 z-20 w-full">
                <span className="text-xs font-bold uppercase tracking-widest text-white/80 mb-2 block translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {project.category}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                  {project.title}
                </h3>
              </div>

              {/* Tag Year - Always visible for contrast info */}
              <div className="absolute bottom-8 left-8 z-20 flex gap-2">
                 <span className="glass px-4 py-1.5 rounded-full text-[10px] font-bold text-apple-black shadow-sm">
                   {project.year}
                 </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;