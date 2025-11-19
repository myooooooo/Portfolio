import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Illustration & Art",
      icon: "🎨",
      description: "Je donne vie à des personnages (OCs) et des univers. Style semi-réaliste, ambiance néon, couvertures d'albums...",
      tags: ["Character Design", "Procreate", "Cover Art", "Semi-Realism"],
      color: "bg-pop-pink",
      textColor: "text-white"
    },
    {
      title: "Branding Visuel",
      icon: "✨",
      description: "Création d'identités visuelles complètes pour marques ou créateurs. Logos, chartes et déclinaisons graphiques.",
      tags: ["Logo", "Identité", "Vecteur", "Print"],
      color: "bg-pop-purple",
      textColor: "text-white"
    },
    {
      title: "Web & UI Design",
      icon: "💅",
      description: "Parce qu'un beau dessin mérite un bel écrin. Je conçois des interfaces web esthétiques et fonctionnelles.",
      tags: ["Figma", "Maquettes", "UI Design", "No-Code"],
      color: "bg-white",
      textColor: "text-pop-purple"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
            <span className="bg-white border border-pop-pink text-pop-pink px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest shadow-sm inline-block mb-4 transform -rotate-2 hover:rotate-2 transition-transform cursor-default">
                Mes Services
            </span>
            <h3 className="font-display text-5xl md:text-6xl text-pop-purple drop-shadow-sm">
                Où la magie <span className="text-pop-pink inline-block hover:animate-jelly">opère</span>
            </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
                key={index} 
                className={`group relative p-8 rounded-[2.5rem] border-4 border-transparent transition-all duration-300 hover:-translate-y-3 hover:shadow-[0px_15px_0px_0px_rgba(0,0,0,0.1)] ${service.color === 'bg-white' ? 'border-pop-purple' : ''} ${service.color}`}
            >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-[5rem] pointer-events-none transition-transform group-hover:scale-150"></div>

                <div className="text-5xl mb-6 inline-block animate-float group-hover:animate-tada">
                    {service.icon}
                </div>
                
                <h4 className={`text-2xl font-display mb-4 ${service.textColor} group-hover:translate-x-2 transition-transform`}>
                    {service.title}
                </h4>
                
                <p className={`font-medium text-lg mb-8 leading-relaxed opacity-90 ${service.textColor === 'text-white' ? 'text-pop-light' : 'text-gray-600'}`}>
                    {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {service.tags.map(tag => (
                        <span key={tag} className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider transition-transform hover:scale-110 ${service.textColor === 'text-white' ? 'bg-white/20 text-white' : 'bg-pop-light text-pop-purple'}`}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;