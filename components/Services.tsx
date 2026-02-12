import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      id: "01",
      title: "ART DIRECTION",
      description: "Conception d'univers visuels uniques. Je définis l'ADN graphique de vos projets pour marquer les esprits.",
      capabilities: ["Brand Strategy", "Visual Language", "Moodboarding"],
    },
    {
      id: "02",
      title: "DIGITAL DESIGN",
      description: "Interface utilisateur (UI) et expérience (UX) centrées sur l'émotion et la clarté. Du pixel au prototype.",
      capabilities: ["UI/UX Design", "Figma Expert", "Web Ecosystems"],
    },
    {
      id: "03",
      title: "CHARACTER ART",
      description: "Ma spécialité : le dessin semi-réaliste. Création d'OCs et d'illustrations narratives complexes.",
      capabilities: ["Procreate Mastery", "Narrative Art", "Semi-Realism"],
    }
  ];

  return (
    <section className="bg-white border-t border-black py-0 reveal-container">
      <div className="grid grid-cols-1 md:grid-cols-12 border-b border-black">
        {/* Sidebar Title */}
        <div className="md:col-span-4 p-8 md:p-12 border-r border-black flex flex-col justify-between min-h-[400px]">
          <div className="reveal-text">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 block stagger-item">Section / 03</span>
            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] stagger-item [transition-delay:100ms]">
              CORE<br/>CAPABILI-<br/>TIES<span className="text-pop-pink">.</span>
            </h3>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest leading-relaxed max-w-[200px] mt-12 stagger-item [transition-delay:200ms]">
            UNE APPROCHE MÉTHODIQUE MÊLANT RIGUEUR TECHNIQUE ET EXPLOSION CRÉATIVE.
          </p>
        </div>

        {/* Services Grid */}
        <div className="md:col-span-8 grid grid-cols-1">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="group relative border-b last:border-b-0 border-black p-8 md:p-12 flex flex-col md:flex-row gap-8 hover:bg-black hover:text-white transition-all duration-700 reveal-container"
            >
              {/* Tech line reveal */}
              <div className="flex items-center gap-4 md:w-24">
                <span className="text-sm font-black font-mono stagger-item">{service.id}</span>
                <div className={`h-[1px] flex-1 bg-current opacity-20 line-reveal stagger-item`}></div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="reveal-text">
                  <h4 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 group-hover:translate-x-4 transition-transform duration-500 stagger-item">
                    {service.title}
                  </h4>
                </div>
                <p className="text-sm md:text-lg font-medium leading-snug max-w-xl opacity-60 group-hover:opacity-100 transition-opacity stagger-item [transition-delay:100ms]">
                  {service.description}
                </p>
              </div>

              {/* Capability List */}
              <div className="md:w-48 flex flex-col gap-1">
                <span className="text-[8px] font-black uppercase tracking-widest mb-2 opacity-40 stagger-item">Expertise /</span>
                {service.capabilities.map((cap, i) => (
                  <span key={cap} className="text-[10px] font-bold uppercase tracking-tighter whitespace-nowrap stagger-item" style={{ transitionDelay: `${i * 50 + 200}ms` }}>
                    — {cap}
                  </span>
                ))}
              </div>

              {/* Hover ID background */}
              <div className="absolute top-4 right-4 text-[120px] font-black opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none select-none italic leading-none">
                {service.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;