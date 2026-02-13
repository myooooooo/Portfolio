import React from 'react';
import BentoGrid from './BentoGrid';
import { PROJECTS } from '../constants';

interface ProjectListProps {
  onOpenProject: (projectId: number) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({ onOpenProject }) => {
  // Ajout des technologies pour chaque projet (à personnaliser selon tes vrais projets)
  const projectsWithTech = PROJECTS.map(project => ({
    ...project,
    technologies: getTechnologies(project.id)
  }));

  return (
    <div className="w-max h-full flex flex-col justify-center bg-white relative">
      {/* Titre de section sticky */}
      <div className="sticky top-0 left-0 z-20 p-20">
        <h2 className="text-[8vw] md:text-[6vw] font-black uppercase leading-[0.8] tracking-ultra-tight">
          <span className="block text-black">SELECTED</span>
          <span className="block text-pop-pink">WORKS<span className="text-black">.</span></span>
        </h2>
        <p className="mt-6 text-sm font-mono text-gray-500 uppercase tracking-wider">
          Sites 100% Lighthouse • 48h • Pilotés par l'IA
        </p>
      </div>

      {/* Bento Grid */}
      <BentoGrid projects={projectsWithTech} onProjectClick={onOpenProject} />
    </div>
  );
};

// Helper pour attribuer des technologies aux projets
function getTechnologies(projectId: number): string[] {
  const techMap: Record<number, string[]> = {
    1: ['React', 'TypeScript', 'Vite'],
    2: ['Next.js', 'Tailwind', 'Vercel'],
    3: ['React', 'GSAP', 'Canvas'],
    4: ['TypeScript', 'Figma', 'Framer'],
    5: ['Vue', 'Nuxt', 'CSS Grid'],
    6: ['React', 'Three.js', 'WebGL'],
  };

  return techMap[projectId] || ['React', 'TypeScript', 'CSS'];
}

export default ProjectList;
