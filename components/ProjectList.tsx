import React from 'react';
import { PROJECTS } from '../constants';

const ProjectList: React.FC = () => {
  return (
    <section id="work" className="py-20 px-4 md:px-12 bg-white rounded-t-[3rem] relative z-10">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h3 className="font-display text-6xl text-pop-pink mb-4 transform hover:scale-110 transition-transform inline-block cursor-default">
            Mes Créations
        </h3>
        <div className="h-2 w-24 bg-pop-purple mx-auto rounded-full mt-2"></div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-6xl mx-auto">
        {PROJECTS.map((project, index) => (
          <a 
            key={project.id} 
            href={project.link || "#"}
            target={project.link && project.link !== "#" ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="group block relative"
          >
            {/* Card Background Effect */}
            <div className="absolute inset-0 bg-pop-purple rounded-3xl transform translate-x-2 translate-y-2 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
            
            <div className="relative bg-pop-light p-4 rounded-3xl transition-all duration-500 ease-cubic 
                            group-hover:-translate-y-3 group-hover:scale-[1.02] group-hover:rotate-1 
                            border-2 border-transparent group-hover:border-pop-pink group-hover:bg-white
                            shadow-sm group-hover:shadow-[0px_20px_40px_rgba(255,0,128,0.25)] z-10">
                
                {/* Image Container */}
                <div className="aspect-[4/3] overflow-hidden rounded-2xl w-full relative">
                    <div className="absolute inset-0 bg-pop-pink/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 z-20 bg-white/90 backdrop-blur text-pop-purple px-3 py-1 rounded-full text-xs font-bold border border-pop-purple shadow-sm group-hover:animate-bounce">
                        {project.category}
                    </div>
                </div>

                {/* Content */}
                <div className="pt-6 pb-2 px-2">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-3xl font-display text-pop-purple group-hover:text-pop-pink transition-colors">
                        {project.title}
                        </h3>
                        <span className="bg-white border border-pop-pink text-pop-pink text-xs font-bold px-3 py-1 rounded-full shadow-sm transform group-hover:rotate-12 transition-transform">
                            {project.year}
                        </span>
                    </div>
                    <p className="text-sm text-gray-600 font-medium leading-relaxed group-hover:text-gray-800 transition-colors">
                        {project.description}
                    </p>
                    
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                         <span className="text-xs font-bold text-pop-accent uppercase tracking-widest flex items-center gap-2">
                            Voir le projet <span>➜</span>
                         </span>
                    </div>
                </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectList;