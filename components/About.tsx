import React from 'react';
import { EXPERIENCE, PROFILE_IMAGE_URL, FAVORITES, SOCIALS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="flex h-full items-center px-10 md:px-20 gap-20 md:gap-40 bg-white">

      {/* SEO Content */}
      <div className="sr-only">
        <h2>A Propos de Zineb Anssafou — Creative & AI Systems Designer</h2>
        <p>
          Zineb Anssafou, Creative & AI Systems Designer, BUT MMI Creation Numerique a Dijon.
          Plugin Photoshop open source (X-FLTR), Simulateur MMI #1 Google, LUT dans la charte officielle Polytech,
          1er Prix Territorial NSI 2024. Je n'utilise pas les outils Adobe — j'en etends les capacites.
        </p>
      </div>

      {/* ── Col 1 : Bio ────────────────────────────────────────── */}
      <div className="flex-shrink-0 w-[85vw] md:w-[40vw] flex flex-col max-h-[calc(100vh-120px)]">

        <div className="relative mb-4 reveal-node">
          <div className="absolute -top-8 -left-3 font-cursive text-pop-pink text-4xl -rotate-6 opacity-80 z-10 animate-pulse">
            Hello !
          </div>
          <h2 className="text-5xl md:text-[5.5vw] font-black uppercase leading-[0.8] tracking-ultra-tight relative z-0">
            <span className="mask-text block"><span>PROOF</span></span>
            <span className="mask-text block delay-100"><span className="text-pop-pink">OF WORK.</span></span>
          </h2>
        </div>

        {/* Tagline */}
        <div className="reveal-node mb-3">
          <p className="text-base md:text-lg font-medium text-gray-500 uppercase leading-tight mask-text">
            <span>CREATIVE & <span className="text-black font-bold">AI SYSTEMS DESIGNER</span>,</span>
          </p>
          <p className="text-base md:text-lg font-medium text-gray-500 uppercase leading-tight mask-text delay-100">
            <span>BUT MMI CREATION NUMERIQUE.</span>
          </p>
          <p className="text-base md:text-lg font-medium text-gray-500 uppercase leading-tight mask-text delay-200">
            <span>IMPACT D'ABORD. METHODE ENSUITE. <span className="text-black font-bold">OUTILS EN DERNIER.</span></span>
          </p>
        </div>

        {/* Bio paragraph */}
        <div className="reveal-node stagger-2 mb-3">
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-medium max-w-lg">
            Je suis a la croisee du design et du code — pas pour faire les deux a moitie,
            mais pour les faire se renforcer mutuellement.
            <span className="text-black font-bold"> Ce portfolio n'est pas une vitrine. C'est un dossier de preuves.</span>
          </p>
        </div>

        {/* Current status */}
        <div className="border-l-4 border-black pl-6 py-1 reveal-node stagger-3 mb-4">
          <div className="text-[10px] font-black tracking-widest-luxe text-gray-400 uppercase mb-1">/ CURRENT STATUS</div>
          <p className="text-sm font-bold leading-relaxed uppercase max-w-lg text-black">
            En stage chez <span className="bg-pop-pink text-white px-2 shadow-sm">Polytech</span> — Pipeline audiovisuel complet,
            LUT personnalisee integree a la charte officielle.
          </p>
        </div>

        {/* CTA */}
        <div className="reveal-node stagger-4 flex gap-3">
          {SOCIALS.map((s) => (
            <a
              key={s.platform}
              href={s.url === '#' ? undefined : s.url}
              aria-label={s.platform}
              target={s.url.startsWith('http') ? '_blank' : undefined}
              rel={s.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="px-4 py-2 border-2 border-black text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all cursor-pointer"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* ── Col 2 : Photo + Favoris ────────────────────────────── */}
      <div className="flex-shrink-0 w-[85vw] md:w-[30vw] flex flex-col items-center gap-6 max-h-[calc(100vh-120px)]">

        {/* Photo */}
        <div className="relative w-full max-w-xs overflow-hidden bg-gray-100 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] border-4 border-black group" style={{ aspectRatio: '3/4', maxHeight: '50vh' }}>
          <div className="absolute top-4 -right-7 bg-pop-pink text-white text-[10px] font-bold py-1 px-8 rotate-45 z-10 shadow-sm">
            ZINEB.AI
          </div>
          <img
            src={PROFILE_IMAGE_URL}
            alt="Zineb Anssafou"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/5 pointer-events-none group-hover:opacity-0 transition-opacity" />
        </div>

        {/* Favoris bento */}
        <div className="reveal-node w-full max-w-xs">
          <h4 className="text-[10px] font-black tracking-widest-luxe text-black uppercase mb-3 border-b-2 border-black pb-1">
            / EN DEHORS DU CODE
          </h4>
          <div className="grid grid-cols-3 gap-1.5">
            {FAVORITES.map((fav) => (
              <div
                key={fav.category}
                className={`${fav.bgColor} border-2 border-black p-2 flex flex-col gap-0.5 hover:-translate-y-1 transition-transform`}
              >
                <span className="text-lg leading-none">{fav.icon}</span>
                <span className="text-[8px] font-black uppercase tracking-widest opacity-60 leading-none">
                  {fav.category}
                </span>
                <span className="text-[10px] font-black uppercase leading-tight">
                  {fav.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Col 3 : Stack + Timeline ───────────────────────────── */}
      <div className="flex-shrink-0 w-[90vw] md:w-[55vw] flex flex-col max-h-[calc(100vh-120px)] relative">

        {/* Stack */}
        <div className="reveal-node mb-6">
          <h4 className="text-[10px] font-black tracking-widest-luxe text-black uppercase mb-3 border-b-2 border-black pb-1">
            / STACK TECHNIQUE
          </h4>
          <div className="flex flex-wrap gap-2">
            {['CLAUDE CODE', 'PHOTOSHOP APIs UXP/CEP', 'PREMIERE PRO', 'AFTER EFFECTS', 'GITHUB', 'SEO TECHNIQUE', 'FIGMA', 'PYTHON', 'REACT'].map((tool, i) => (
              <span
                key={tool}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider border-2 border-black hover:bg-black hover:text-white transition-all cursor-default ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-4 pl-2">
          <span className="text-pop-pink font-cursive text-2xl mb-1 block">My Path</span>
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
            TIMELINE<span className="text-pop-pink">.</span>
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-3 w-full">
          {EXPERIENCE.map((exp, i) => (
            <div
              key={i}
              className="group relative bg-white border-2 border-black p-4 flex flex-col justify-between h-[180px] hover:bg-black hover:text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#FF0080]"
            >
              <div className="absolute top-0 right-3 text-5xl font-black text-gray-100 group-hover:text-white/10 transition-colors select-none z-0">
                0{i + 1}
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 uppercase tracking-widest border border-black group-hover:border-white group-hover:text-black group-hover:bg-white transition-colors ${i === 0 ? 'bg-pop-pink text-white border-none' : 'bg-transparent text-gray-500'}`}>
                    {exp.period}
                  </span>
                </div>
                <h4 className="text-lg font-black uppercase leading-[0.9] mb-0.5 tracking-tight group-hover:text-pop-pink transition-colors">
                  {exp.company}
                </h4>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block group-hover:text-gray-300">
                  {exp.role}
                </span>
              </div>

              <p className="relative z-10 text-[10px] md:text-xs font-medium text-gray-600 leading-relaxed border-t-2 border-gray-100 pt-2 group-hover:text-gray-300 group-hover:border-white/20 transition-colors line-clamp-2">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-40 flex-shrink-0" />
    </div>
  );
};

export default About;
