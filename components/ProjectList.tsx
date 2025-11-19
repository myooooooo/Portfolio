
import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';

interface ProjectListProps {
  onOpenProject: (projectId: number) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({ onOpenProject }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate network request
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-6xl mx-auto min-h-[400px]">
        {isLoading ? (
           // Loading Skeletons
           Array.from({ length: 4 }).map((_, idx) => (
             <div key={idx} className="relative bg-pop-light/30 p-4 rounded-3xl border border-pop-light overflow-hidden">
               <div className="aspect-[4/3] bg-white/50 rounded-2xl mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer opacity-50"></div>
               </div>
               <div className="h-8 bg-white/50 rounded-full w-3/4 mb-2"></div>
               <div className="h-4 bg-white/50 rounded-full w-1/2"></div>
               
               {/* Cute Loading Spinner Centered Overlay */}
               {idx === 0 && (
                 <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <div className="bg-white p-4 rounded-full shadow-xl">
                        <div className="text-4xl animate-spin-slow">🌸</div>
                    </div>
                 </div>
               )}
             </div>
           ))
        ) : (
          PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              onClick={() => onOpenProject(project.id)}
              className="group block relative animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
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
                      <p className="text-sm text-gray-600 font-medium leading-relaxed group-hover:text-gray-800 transition-colors line-clamp-2">
                          {project.description}
                      </p>
                      
                      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                          <span className="text-xs font-bold text-pop-accent uppercase tracking-widest flex items-center gap-2">
                              Voir les détails <span>➜</span>
                          </span>
                      </div>
                  </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ProjectList;
