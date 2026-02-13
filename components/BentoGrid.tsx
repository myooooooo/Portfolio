import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  imageUrl: string;
  description?: string;
  technologies?: string[];
}

interface BentoGridProps {
  projects: Project[];
  onProjectClick: (projectId: number) => void;
}

const BentoGrid: React.FC<BentoGridProps> = ({ projects, onProjectClick }) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll('.project-card');

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, [projects]);

  const getGridClass = (index: number): string => {
    const pattern = index % 6;
    switch (pattern) {
      case 0: return 'col-span-1 row-span-2'; // Tall
      case 1: return 'col-span-2 row-span-1'; // Wide
      case 2: return 'col-span-1 row-span-1'; // Square
      case 3: return 'col-span-2 row-span-2'; // Large
      case 4: return 'col-span-1 row-span-1'; // Square
      case 5: return 'col-span-1 row-span-2'; // Tall
      default: return 'col-span-1 row-span-1';
    }
  };

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-3 gap-4 md:gap-6 p-8 md:p-20 w-full auto-rows-[200px]"
    >
      {projects.map((project, index) => (
        <motion.article
          key={project.id}
          layoutId={`project-${project.id}`}
          className={`project-card group relative ${getGridClass(index)} overflow-hidden bg-gray-100 border-2 border-black cursor-pointer magnetic`}
          onClick={() => onProjectClick(project.id)}
          data-cursor="VIEW"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {/* Image */}
          <motion.div layoutId={`project-image-${project.id}`} className="absolute inset-0">
            <img
              src={project.imageUrl}
              alt={project.title}
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://placehold.co/800x800/f5f5f5/000000?text=${project.title}`;
              }}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />

            {/* Skeleton loader overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse opacity-0 group-hover:opacity-0" />
          </motion.div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Content */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            {/* Project number */}
            <div className="absolute top-4 left-4 text-xs font-mono font-bold text-white bg-black px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
              N°{String(project.id).padStart(2, '0')}
            </div>

            {/* Technologies */}
            {project.technologies && (
              <div className="flex gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="text-[9px] font-bold uppercase tracking-wider bg-pop-pink text-white px-2 py-1 rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-black uppercase leading-none tracking-tight text-white mb-2 group-hover:text-pop-pink transition-colors">
              {project.title}
            </h3>

            {/* Meta */}
            <div className="flex items-center gap-3 text-white/80">
              <span className="text-xs font-mono">{project.year}</span>
              <span className="w-1 h-1 bg-white/50 rounded-full" />
              <span className="text-xs uppercase tracking-wider">{project.category}</span>
            </div>
          </div>

          {/* Hover border effect */}
          <div className="absolute inset-0 border-4 border-pop-pink opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </motion.article>
      ))}
    </div>
  );
};

export default BentoGrid;
