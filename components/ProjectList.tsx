import React, { useState } from 'react';
import BentoGrid from './BentoGrid';
import ProjectModal from './ProjectModal';
import { PROJECTS } from '../constants';

interface ProjectListProps {
  onOpenProject?: (projectId: number) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({ onOpenProject }) => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Ajout des technologies pour chaque projet (à personnaliser selon tes vrais projets)
  const projectsWithTech = PROJECTS.map(project => ({
    ...project,
    technologies: getTechnologies(project.id),
    challenge: getProjectDetails(project.id).challenge,
    solution: getProjectDetails(project.id).solution,
    results: getProjectDetails(project.id).results,
  }));

  const handleProjectClick = (projectId: number) => {
    const project = projectsWithTech.find(p => p.id === projectId);
    if (project) {
      // Convert to modal format
      const modalProject = {
        ...project,
        image: project.imageUrl,
        link: project.link || '#',
        github: project.github || undefined,
      };
      setSelectedProject(modalProject);
      setIsModalOpen(true);
      if (onOpenProject) onOpenProject(projectId);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      <div className="w-full h-full flex flex-col justify-center bg-white relative px-[5vw]">
        {/* Titre de section - Marges horizontales fixes 5vw */}
        <div className="mb-12">
          <h2 className="text-[8vw] md:text-[6vw] font-black uppercase leading-[0.8] tracking-ultra-tight">
            <span className="block text-black">SELECTED</span>
            <span className="block text-pop-pink">WORKS<span className="text-black">.</span></span>
          </h2>
          <p className="mt-6 text-sm font-mono text-gray-500 uppercase tracking-wider">
            Sites 100% Lighthouse • 48h • Pilotés par l'IA
          </p>
        </div>

        {/* Bento Grid - Occupe toute la largeur */}
        <BentoGrid projects={projectsWithTech} onProjectClick={handleProjectClick} />
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
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

// Helper pour les détails de projet
function getProjectDetails(projectId: number) {
  const detailsMap: Record<number, { challenge: string; solution: string; results: string }> = {
    1: {
      challenge: "Créer un portfolio qui reflète ma double identité designer-développeur avec une expérience unique et mémorable.",
      solution: "Architecture horizontale avec Lenis smooth scroll, animations GSAP sophistiquées, et système Bento Grid pour les projets. Intégration d'un curseur magnétique et micro-interactions partout.",
      results: "Score Lighthouse 100/100. Expérience fluide et engageante. Design distinctif qui marque les esprits."
    },
    2: {
      challenge: "Développer un site artistique élégant avec des performances natives et une esthétique raffinée.",
      solution: "Next.js pour l'optimisation SEO, animations subtiles avec Framer Motion, typographie soignée, et galerie optimisée pour les images haute résolution.",
      results: "Temps de chargement < 1.5s. Engagement utilisateur +40%. Référencement naturel optimisé."
    },
    3: {
      challenge: "Interface interactive complexe nécessitant des visualisations de données dynamiques.",
      solution: "React avec Canvas API pour les rendus performants, GSAP pour les transitions fluides, architecture componentisée pour la maintenabilité.",
      results: "Performance 60fps garantie. UX intuitive validée par tests utilisateurs. Code maintenable et scalable."
    },
    4: {
      challenge: "Prototype interactif haute-fidélité avec animations complexes et états multiples.",
      solution: "TypeScript pour la type-safety, design system cohérent dans Figma, prototypage Framer avec vraies données.",
      results: "Validation client au premier itération. Développement accéléré grâce au design system. Zéro bug de production."
    },
    5: {
      challenge: "Site e-commerce avec grille produits responsive et performance optimale.",
      solution: "Vue 3 avec Nuxt pour le SSR, CSS Grid natif pour des layouts flexibles, lazy loading intelligent des images.",
      results: "Conversion rate +25%. Core Web Vitals tous au vert. Expérience mobile parfaite."
    },
    6: {
      challenge: "Expérience 3D immersive dans le navigateur sans compromettre les performances.",
      solution: "Three.js optimisé avec LOD (Level of Detail), React Three Fiber pour l'intégration React, WebGL shaders personnalisés.",
      results: "Performance stable sur mobile. Expérience wow factor garantie. Zéro latence perceptible."
    },
  };

  return detailsMap[projectId] || {
    challenge: "Créer une expérience web unique et performante.",
    solution: "Technologies modernes, architecture solide, attention aux détails.",
    results: "Projet livré en temps et en heure avec des performances optimales."
  };
}

export default ProjectList;
