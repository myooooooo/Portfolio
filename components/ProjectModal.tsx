import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  technologies: string[];
  category: string;
  year: string;
  challenge?: string;
  solution?: string;
  results?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            layoutId={`project-${project.id}`}
            className="fixed inset-8 md:inset-20 z-50 overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="relative w-full h-full bg-white border-4 border-black shadow-[30px_30px_0px_0px_rgba(0,0,0,1)] overflow-y-auto">

              {/* Close Button */}
              <button
                onClick={onClose}
                className="magnetic absolute top-6 right-6 z-10 w-12 h-12 bg-black text-white hover:bg-pop-pink transition-all duration-300 border-2 border-black flex items-center justify-center group"
                data-cursor="CLOSE"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Hero Image */}
              <motion.div
                layoutId={`project-image-${project.id}`}
                className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden bg-gray-100"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-pop-pink text-white text-xs font-black uppercase tracking-widest">
                        {project.category}
                      </span>
                      <span className="text-white/80 text-sm font-mono">{project.year}</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black uppercase text-white leading-none tracking-tighter">
                      {project.title}
                    </h2>
                  </motion.div>
                </div>
              </motion.div>

              {/* Content */}
              <div className="p-8 md:p-12 space-y-12">

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <h3 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-4 border-b-2 border-black pb-2">
                    OVERVIEW
                  </h3>
                  <p className="text-xl md:text-2xl font-medium text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                </motion.div>

                {/* Technologies */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <h3 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-4">
                    TECH STACK
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.05, duration: 0.3 }}
                        className="px-4 py-2 bg-gray-100 border-2 border-black text-sm font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Challenge, Solution, Results */}
                {(project.challenge || project.solution || project.results) && (
                  <div className="grid md:grid-cols-3 gap-8">
                    {project.challenge && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="border-l-4 border-pop-pink pl-6"
                      >
                        <h4 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-3">
                          CHALLENGE
                        </h4>
                        <p className="text-sm font-medium text-gray-700 leading-relaxed">
                          {project.challenge}
                        </p>
                      </motion.div>
                    )}

                    {project.solution && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="border-l-4 border-black pl-6"
                      >
                        <h4 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-3">
                          SOLUTION
                        </h4>
                        <p className="text-sm font-medium text-gray-700 leading-relaxed">
                          {project.solution}
                        </p>
                      </motion.div>
                    )}

                    {project.results && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="border-l-4 border-green-500 pl-6"
                      >
                        <h4 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-3">
                          RESULTS
                        </h4>
                        <p className="text-sm font-medium text-gray-700 leading-relaxed">
                          {project.results}
                        </p>
                      </motion.div>
                    )}
                  </div>
                )}

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="flex gap-4 pt-8 border-t-2 border-gray-200"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="magnetic flex items-center gap-3 px-8 py-4 bg-black text-white font-bold uppercase tracking-wider hover:bg-pop-pink transition-all duration-300 border-2 border-black group"
                    data-cursor="VISIT"
                  >
                    <span>View Live</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="magnetic flex items-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300 border-2 border-black group"
                      data-cursor="CODE"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
