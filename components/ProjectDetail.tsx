
import React, { useEffect } from 'react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openImage = (url: string) => {
    window.open(url, '_blank');
  };

  // Logic to determine gallery content based on project
  const showGallery = ["MYO RACER", "Y2K POP COVERS"].includes(project.title);
  const isY2K = project.title === "Y2K POP COVERS";

  // Custom Image Logic
  let galleryImages: { url: string; label: string; color: string }[] = [];

  if (project.title === "MYO RACER") {
    galleryImages = [
        { url: "https://placehold.co/1200x600/FF0080/FFF?text=MYO+Detail+Zoom", label: "Zoom Détail", color: "text-pop-purple" },
        { url: "https://placehold.co/800x800/9D00FF/FFF?text=MYO+Sketch", label: "Sketch", color: "text-pop-pink" },
        { url: "https://placehold.co/800x800/00E0FF/000?text=MYO+Process", label: "Process", color: "text-pop-accent" },
    ];
  } else if (project.title === "Y2K POP COVERS") {
    galleryImages = [
        { url: "https://placehold.co/800x800/FF0080/FFF?text=Cover+V1+(Pink)", label: "Version Pink", color: "text-pop-pink" },
        { url: "https://placehold.co/800x800/00E0FF/000?text=Cover+V2+(Blue)", label: "Version Blue", color: "text-pop-accent" },
        { url: "https://placehold.co/800x800/9D00FF/FFF?text=Cover+V3+(Dark)", label: "Version Dark", color: "text-pop-purple" },
    ];
  }

  return (
    <div className="min-h-screen bg-white relative z-[100] animate-fade-in-up">
      {/* Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 p-6 z-50 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-pop-light">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 bg-pop-light px-6 py-3 rounded-full font-bold text-pop-purple hover:bg-pop-purple hover:text-white transition-all shadow-sm"
        >
          <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
          <span>Retour aux projets</span>
        </button>
        
        <span className="font-display text-2xl text-pop-pink hidden md:block">
          {project.title}
        </span>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 max-w-5xl">
        
        {/* Hero Header */}
        <div className="text-center mb-12">
           <div className="flex justify-center gap-3 mb-4">
              <span className="bg-pop-pink text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest shadow-sm rotate-[-2deg]">
                {project.category}
              </span>
              <span className="bg-white border border-pop-purple text-pop-purple px-4 py-1 rounded-full text-sm font-bold shadow-sm rotate-[2deg]">
                {project.year}
              </span>
           </div>
           <h1 className="font-display text-6xl md:text-8xl text-pop-purple mb-6 drop-shadow-sm">
             {project.title}
           </h1>
           <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
             {project.description}
           </p>
        </div>

        {/* Main Hero Image */}
        <div 
            onClick={() => openImage(project.imageUrl)}
            className="w-full aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white mb-16 relative group cursor-pointer"
        >
            <div className="absolute inset-0 bg-gradient-to-t from-pop-purple/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-10">
                 <span className="bg-white text-pop-purple px-6 py-2 rounded-full font-bold transform translate-y-10 group-hover:translate-y-0 transition-transform">Voir en grand 🔍</span>
            </div>
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
        </div>

        {/* The Story / Process Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
           <div className={showGallery ? "md:col-span-4" : "md:col-span-12"}>
              <h3 className="font-display text-4xl text-pop-pink mb-4">Le Brief ✨</h3>
              <div className="bg-pop-light/30 p-6 rounded-3xl border border-pop-light sticky top-32">
                 <p className="text-gray-700 mb-4 leading-relaxed">
                   Pour ce projet, l'objectif était de repousser les limites créatives tout en gardant une cohérence visuelle forte. J'ai utilisé mes compétences en <strong>{project.category.split(' ')[0]}</strong> pour créer quelque chose d'unique.
                 </p>
                 <h4 className="font-bold text-pop-purple mb-3 uppercase text-xs tracking-widest mt-6">Outils utilisés</h4>
                 <div className="flex flex-wrap gap-2">
                    {['Procreate', 'Photoshop', 'Cœur', 'Magie'].map(tag => (
                        <span key={tag} className="bg-white text-pop-purple px-3 py-1 rounded-full text-xs font-bold shadow-sm border border-pop-light">
                          {tag}
                        </span>
                    ))}
                 </div>
              </div>
           </div>
           
           {showGallery && (
               <div className="md:col-span-8">
                  <h3 className="font-display text-4xl text-pop-accent mb-6 flex items-center gap-2">
                    Galerie <span className="text-2xl">📸</span>
                  </h3>
                  
                  {/* Conditional Layout: 3 Cols for Y2K (Equal covers), Bento for Myo (Detail + Process) */}
                  {isY2K ? (
                      /* Y2K Layout: 3 Equal Columns for 3 Covers */
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {galleryImages.map((img, idx) => (
                              <div 
                                key={idx}
                                onClick={() => openImage(img.url)}
                                className="cursor-pointer aspect-square rounded-3xl overflow-hidden shadow-md border-4 border-white hover:scale-105 transition-transform duration-300 group relative"
                              >
                                <img src={img.url} alt={img.label} className="w-full h-full object-cover" />
                                <div className={`absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold ${img.color} opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1`}>
                                    {img.label} <span className="text-[10px]">↗</span>
                                </div>
                              </div>
                          ))}
                      </div>
                  ) : (
                      /* Myo Racer Layout: Bento Grid (1 Large + 2 Small) */
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         {/* Large Image (Full Width) */}
                         <div 
                            onClick={() => openImage(galleryImages[0].url)}
                            className="cursor-pointer md:col-span-2 aspect-[16/9] rounded-3xl overflow-hidden shadow-md border-4 border-white transform hover:scale-[1.01] transition-transform duration-300 group relative"
                         >
                            <img src={galleryImages[0].url} alt={galleryImages[0].label} className="w-full h-full object-cover" />
                            <div className={`absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold ${galleryImages[0].color} opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1`}>
                                {galleryImages[0].label} <span className="text-[10px]">↗</span>
                            </div>
                         </div>

                         {/* Square Image 1 */}
                         <div 
                            onClick={() => openImage(galleryImages[1].url)}
                            className="cursor-pointer aspect-square rounded-3xl overflow-hidden shadow-md border-4 border-white rotate-1 hover:rotate-0 transition-transform duration-300 group relative"
                         >
                            <img src={galleryImages[1].url} alt={galleryImages[1].label} className="w-full h-full object-cover" />
                            <div className={`absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold ${galleryImages[1].color} opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1`}>
                                {galleryImages[1].label} <span className="text-[10px]">↗</span>
                            </div>
                         </div>

                         {/* Square Image 2 */}
                         <div 
                            onClick={() => openImage(galleryImages[2].url)}
                            className="cursor-pointer aspect-square rounded-3xl overflow-hidden shadow-md border-4 border-white -rotate-1 hover:rotate-0 transition-transform duration-300 group relative"
                         >
                            <img src={galleryImages[2].url} alt={galleryImages[2].label} className="w-full h-full object-cover" />
                            <div className={`absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold ${galleryImages[2].color} opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1`}>
                                {galleryImages[2].label} <span className="text-[10px]">↗</span>
                            </div>
                         </div>
                      </div>
                  )}
               </div>
           )}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-pop-purple text-white rounded-[3rem] p-12 relative overflow-hidden shadow-[0px_10px_30px_rgba(157,0,255,0.3)]">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            
            {/* Decorative floating elements */}
            <div className="absolute top-10 left-10 text-4xl animate-bounce-slow opacity-50">✏️</div>
            <div className="absolute bottom-10 right-10 text-4xl animate-spin-slow opacity-50">🌟</div>

            <h2 className="text-3xl md:text-5xl font-display mb-6 relative z-10">Tu aimes ce projet ?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-md mx-auto relative z-10">
              Je peux créer quelque chose de similaire pour toi (ou quelque chose de complètement différent) !
            </p>
            <a 
              href="mailto:zineb.anssafou@icloud.com" 
              className="inline-flex items-center gap-2 bg-white text-pop-purple px-10 py-4 rounded-full font-bold text-lg hover:bg-pop-pink hover:text-white transition-all hover:scale-105 shadow-lg relative z-10"
            >
               <span>Discutons-en !</span>
               <span>💌</span>
            </a>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;
