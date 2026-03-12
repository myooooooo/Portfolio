import { Project, Experience, SocialLink, FavoriteItem } from './types';

// --- GESTION CENTRALISÉE DES IMAGES (ASSETS) ---
export const ASSETS = {
  PROFILE: "/images/profile.jpg",
  MANIFESTO_BG: "/images/manifesto-bg.jpg",
  MANIFESTO_SKETCH: "/images/manifesto-sketch.jpg",
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "X-FLTR",
    subtitle: "Quand les outils n'existent pas, je les construis.",
    category: "PHOTOSHOP PLUGIN (OPEN SOURCE)",
    year: "2024",
    description: "Plugin Photoshop open source publie sur GitHub. Etend les capacites natives d'Adobe par des filtres creatifs personnalisables, inaccessibles via l'interface standard. Cycle complet — architecture, code, doc, deploiement — realise en totale autonomie.",
    imageUrl: "/images/project-01-cover.jpg",
    link: "#",
    impact: "Plugin Photoshop open source publie sur GitHub. Etend les capacites natives d'Adobe par des filtres creatifs personnalisables. Cycle complet realise en autonomie — de l'idee au deploiement public.",
    impactProof: "Comprendre l'architecture interne d'un logiciel Adobe (APIs UXP/CEP), c'est un niveau structurellement different de 'maitriser Photoshop'. Ecrire le plugin, c'est comprendre la machine de l'interieur. C'est verifiable sur GitHub en 10 secondes.",
    metrics: ["Open Source sur GitHub", "APIs UXP/CEP natives", "Cycle complet en autonomie"],
    method: [
      { title: "Identification du besoin", description: "Analyse des frictions dans le workflow creatif Photoshop. Identification de filtres absents nativement, recensement des besoins recurrents et conception d'une architecture extensible pour les accueillir." },
      { title: "Orchestration IA (Claude Code)", description: "Utilisation de Claude Code pour architecturer et coder le plugin. Processus d'iteration : prompt, output, test, correction, re-prompt. Pilotage actif de l'IA — chaque decision reste la mienne." },
      { title: "Architecture technique", description: "Structure complete du plugin : manifest UXP, panel de contr\\u00f4le, logique des filtres, gestion des parametres utilisateur. Comprehension profonde de l'ecosysteme Adobe et de ses contraintes API." },
      { title: "Documentation", description: "README GitHub complet avec captures, instructions d'installation et exemples d'utilisation. La documentation est traitee comme un livrable a part entiere — preuve de maturite professionnelle." }
    ],
    tools: ["Claude Code (orchestration IA)", "Photoshop APIs UXP/CEP", "GitHub (versioning, doc, deploiement)", "Adobe Photoshop (tests & validation)"],
    visuals: ["Interface du plugin dans Photoshop", "Code GitHub (manifest / fonction principale)", "README GitHub", "Avant / Apres : avec et sans le filtre X-FLTR"]
  },
  {
    id: 2,
    title: "SIMULATEUR MMI",
    subtitle: "Je cree des outils que les gens cherchent.",
    category: "OUTIL WEB — #1 GOOGLE",
    year: "2024",
    description: "Outil web classe #1 sur Google pour la requete cible. Trafic organique recurrent sans aucune publicite. Adopte spontanement par la communaute etudiante MMI — des centaines d'utilisateurs, zero budget marketing.",
    imageUrl: "/images/project-02-cover.jpg",
    link: "#",
    impact: "Outil web classe #1 sur Google pour la requete cible. Trafic organique recurrent sans aucune publicite. Adopte spontanement par la communaute etudiante MMI — sans promotion active, uniquement par la valeur du produit.",
    impactProof: "Identification d'un besoin reel non satisfait + execution technique propre + SEO maitrise + deploiement autonome + validation par l'usage reel. Chaque etape est une competence independante. Toutes realisees seule.",
    metrics: ["#1 Google", "Trafic organique sans pub", "Adoption communautaire spontanee"],
    method: [
      { title: "Identification du vide", description: "Le cursus MMI n'avait pas d'outil officiel pour calculer les moyennes. Besoin identifie via les demandes repetees sur les groupes etudiants — un vrai probleme, pas un projet academique." },
      { title: "Developpement", description: "Architecture de l'outil, logique de calcul, UX de saisie optimisee. Decisions de design orientees utilisateur : priorite a la rapidite de saisie et a la lisibilite du resultat." },
      { title: "SEO organique", description: "Titre de page, balises meta, structure des URLs, choix des mots-cles cibles. Optimisation technique poussee pour atteindre — et maintenir — la position #1 Google sans aucune publicite." },
      { title: "Distribution", description: "Decouverte par les utilisateurs via GitHub, bouche a oreille et partage dans les groupes etudiants. Preuve que le produit avait une valeur reelle : il s'est distribue seul." }
    ],
    tools: ["JavaScript / HTML / CSS", "GitHub Pages (deploiement)", "SEO technique (balises, structure, mots-cles)", "Claude Code (assistance prototypage)"],
    visuals: ["Position #1 Google (requete visible)", "Interface du simulateur", "Stats GitHub / messages utilisateurs", "Extrait du code (fonction de calcul)"]
  },
  {
    id: 3,
    title: "POLYTECH",
    subtitle: "Je traduis le langage des ingenieurs en images qui parlent.",
    category: "STAGE — PIPELINE AUDIOVISUEL",
    year: "2025",
    description: "Pipeline de production audiovisuel complet concu et livre pour un departement d'ingenierie lors d'un stage. LUT personnalisee sur mesure, integree a la charte officielle Polytech — livrable perenne adopte par l'institution.",
    imageUrl: "/images/project-03-cover.jpg",
    link: "#",
    impact: "Pipeline de production audiovisuel complet livre pour un departement d'ingenierie. LUT personnalisee integree a la charte officielle Polytech — livrable de qualite institutionnelle, pas un rendu de stage jetable.",
    impactProof: "Travailler pour des ingenieurs (pas des creatifs), c'est traduire des enjeux techniques complexes en langage visuel accessible et credible. Ce n'est pas du decor — c'est de la communication institutionnelle critique.",
    metrics: ["LUT integree a la charte officielle", "Pipeline complet livre en stage", "Contexte ingenierie exigeant"],
    method: [
      { title: "Brief ingenieur vers Brief creatif", description: "Transformation d'une demande technique vague ('on a besoin de videos pour nos reseaux') en vision visuelle coherente et argumentee. Questions strategiques pour cadrer le besoin, le public cible et les contraintes." },
      { title: "Pipeline de production", description: "Captation terrain (Sony A7C), import et organisation des rushes, montage Premiere Pro, motion design After Effects (signetiques neon, tracking camera, rotoscopie, texte 3D), export multi-formats." },
      { title: "LUT personnalisee", description: "Creation d'un profil colorimetrique sur mesure sous Photoshop. Objectif : uniformiser des sources tournees dans des conditions variees (eclairages, cameras differentes) en un rendu coherent et identifiable." },
      { title: "Integration a la charte", description: "La LUT est maintenant referencee dans la charte graphique officielle Polytech. Ce n'est pas un livrable de stage — c'est un standard adopte par l'institution." }
    ],
    tools: ["Sony A7C (captation terrain)", "Adobe Premiere Pro (montage)", "Adobe After Effects (motion design, Saber, tracking, rotoscopie)", "Adobe Photoshop (creation LUT custom)"],
    visuals: ["Signetique neon (After Effects)", "Comparaison avant/apres LUT", "Timeline Premiere Pro", "Frame du film final"]
  },
  {
    id: 4,
    title: "SPORTORO",
    subtitle: "Direction artistique + gestion de projet technique = 1er prix.",
    category: "TROPHEES NSI — 1ER PRIX TERRITORIAL",
    year: "2024",
    description: "Laureate #1 — Prix Territorial de Dijon (Trophees NSI 2024). Premiere sur l'ensemble des lycees de la zone academique. Double casquette : Direction Artistique complete et pilotage du developpement Python en parallele.",
    imageUrl: "/images/project-04-cover.jpg",
    link: "#",
    impact: "Laureate #1 — Prix Territorial de Dijon (Trophees NSI 2024). Premiere sur l'ensemble des lycees de la zone academique. Direction artistique complete et pilotage dev Python — livres ensemble, dans les delais, en competition nationale.",
    impactProof: "La plupart des profils design savent faire un logo. Peu savent aussi specifier un developpement technique, gerer une equipe et livrer l'ensemble dans les delais d'une competition nationale. C'est cette double competence qui a fait la difference.",
    metrics: ["1er Prix Territorial de Dijon", "Double role DA + Tech Lead", "Competition nationale NSI"],
    method: [
      { title: "Double role DA + Tech Lead", description: "Gestion simultanee de la vision artistique et des contraintes techniques du developpement Python. Arbitrages constants entre ce qui est beau et ce qui est faisable dans les delais — decisions strategiques, pas juste execution." },
      { title: "Identite visuelle", description: "Processus complet de creation du logo : moodboard, recherches, esquisses, selection, finalisation. Les versions rejetees sont documentees — chaque choix est argumente, pas intuitif." },
      { title: "Pilotage dev Python", description: "Role de specification, recette et iteration avec l'equipe de dev. Conception du cahier des charges fonctionnel, des maquettes Figma et du flow utilisateur comme pont entre DA et technique." },
      { title: "Video de presentation", description: "Livree dans les delais de la competition. Processus complet en autonomie : storyboard, tournage, montage, motion design, rendu final pret pour jury." }
    ],
    tools: ["Suite Adobe (Illustrator pour logo, After Effects pour video)", "Python (pilotage dev — specs, tests, iterations)", "Figma (maquettes UX de l'app)"],
    visuals: ["Diplome / ceremonie de remise de prix", "Logo final + variations", "Moodboard / planche d'inspiration", "Version rejetee + explication du choix"]
  },
  {
    id: 6,
    title: "CROUS BOT",
    subtitle: "Automatiser la veille, c'est gagner la course au logement.",
    category: "BOT — PYTHON (OPEN SOURCE)",
    year: "2025",
    description: "Bot open source qui surveille trouverunlogement.lescrous.fr toutes les heures et alerte en temps reel. Alertes @everyone, DMs personnalises par filtres, favoris, alertes one-shot, notifications push ntfy.sh et resume hebdomadaire — entierement automatise.",
    imageUrl: "/images/project-06-cover.jpg",
    link: "#",
    impact: "Automatisation complete de la veille logement CROUS. 15+ commandes slash, scraping SvelteKit, systeme d'alertes multi-niveaux et DMs filtres par utilisateur — zero intervention manuelle, disponibilite maximale.",
    impactProof: "Le marche du logement etudiant CROUS est ultra-competitif : les logements partent en quelques minutes. Surveiller manuellement est impossible. Ce bot transforme une contrainte humaine en avantage systematique pour ses abonnes.",
    metrics: ["15+ commandes slash", "Veille horaire automatique", "Push ntfy.sh integre"],
    method: [
      { title: "Reverse engineering SvelteKit", description: "L'API directe renvoie 405. Analyse du HTML de la page pour extraire les donnees JSON embarquees par SvelteKit. Parsing robuste avec plusieurs fallbacks pour garantir la collecte meme en cas de changement du site." },
      { title: "Architecture du bot", description: "discord.py 2.x avec app_commands pour les slash commands groupes (/alert, /fav). Tasks loop declenchee a heure pile, vues interactives avec bouton Verifier maintenant et systeme de DMs personnalises." },
      { title: "Systeme de donnees persistant", description: "9 fichiers JSON auto-crees au premier lancement : abonnes, filtres, historique complet, stats, alertes, favoris, weekly stats. Zero base de donnees externe — deploiement en une commande, portabilite maximale." },
      { title: "Alertes multi-niveaux", description: "@everyone pour les nouveaux logements, DMs filtres par utilisateur (jusqu'a 4 filtres simultanes), alertes one-shot sur un logement precis, suivi des favoris, push ntfy.sh. Mode veille et plage silencieuse configurables individuellement." }
    ],
    tools: ["Python 3 (discord.py 2.x)", "Requests + BeautifulSoup (scraping)", "aiohttp (ntfy.sh push)", "GitHub (versioning)", "launchd macOS (auto-restart)"],
    visuals: ["Architecture du bot (schema)", "Exemple DM horaire (embed)", "Commandes slash", "Extrait code scraper SvelteKit"]
  },
  {
    id: 5,
    title: "CREATIVE LAB",
    subtitle: "L'esthetique comme socle de l'innovation.",
    category: "ILLUSTRATION — VISUAL RESEARCH",
    year: "2023 — 2025",
    description: "Laboratoire visuel centralisant mes meilleures illustrations Procreate. Rendu de materiaux haute fidelite, etudes anatomiques, lighting dramatique et compositions narratives — une base de donnees graphique personnelle qui alimente tous mes projets design et code.",
    imageUrl: "/images/project-05-cover.jpg",
    link: "#",
    impact: "Demonstrer une capacite de Direction Artistique de haute fidelite. Ce laboratoire visuel sert de base graphique pour mes projets de design et de code — prouvant une sensibilite artistique humaine que les outils IA ne remplacent pas.",
    impactProof: "La maitrise technique du rendu (lumiere, matiere, anatomie) est la fondation invisible derriere chaque decision de design. Ce lab prouve que chaque choix visuel est argumente et nourri par la pratique — pas accidentel.",
    metrics: ["8 Etudes Visuelles", "High-Fidelity Rendering", "Procreate + Photoshop"],
    method: [
      { title: "Exploration multi-directionnelle", description: "Rendu de materiaux (peau, cheveux, tissus, textiles), etudes anatomiques poussees, lighting dramatique et compositions narratives. Chaque illustration cible une competence specifique — c'est un entrainement, pas de la decoration." },
      { title: "Processus iteratif WIP", description: "Les illustrations sont documentees en Work In Progress, etape par etape. L'objectif : montrer le chemin creatif, pas juste le resultat final. Preuve de methode et de reflexion, pas de magie." },
      { title: "Palette et langage visuel", description: "Exploration systematique des palettes : neons cyberpunk, pastels romantiques, eclairages cinematographiques. Constitution progressive d'un vocabulaire visuel personnel reconnaissable et coherent." },
      { title: "Application au design produit", description: "Ce repertoire graphique alimente directement les projets UI et DA comme Sportoro et X-FLTR. La sensibilite artistique developpee ici se traduit en decisions de design plus precises et argumentees." }
    ],
    tools: ["Procreate (illustration, rendu, WIP)", "Adobe Photoshop (finition, retouche)"],
    visuals: [
      "Broken Doll — Portrait semi-realiste, fond violet dramatique",
      "Golden Reverie — Etude capillaire, rendu doux et lumineux",
      "Neon Wanderer — Character design urbain, accessories et fashion",
      "Night Bloom — Portrait neon, ambiance cyberpunk",
      "Magenta Rush — Composition oblique, cheveux vibrants",
      "Etude 06 — A venir",
      "Etude 07 — A venir",
      "Etude 08 — A venir"
    ]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "PIPELINE AUDIOVISUEL & LUT",
    company: "POLYTECH DIJON",
    period: "2025 — PRESENT",
    description: "Stage technique en robotique. Pipeline video complet, LUT personnalisee integree a la charte officielle. Traduction d'enjeux ingenieurs en langage visuel."
  },
  {
    role: "ETUDIANTE MMI (CREATION NUM.)",
    company: "IUT DIJON",
    period: "2024 — PRESENT",
    description: "Parcours Creation Numerique. Direction Artistique, UX Design, dev Front-End. Plugin Photoshop open source, Simulateur #1 Google."
  },
  {
    role: "DA + TECH LEAD — 1ER PRIX NSI",
    company: "LYCEE H. PARRIAT",
    period: "2023 — 2024",
    description: "Projet SPORTORO. Double casquette Direction Artistique et pilotage dev Python. Laureate #1 Prix Territorial de Dijon."
  },
  {
    role: "COMMUNITY MANAGER",
    company: "DISCORD / INSTA",
    period: "2019 — 2022",
    description: "Animation d'une communaute Tech & Art (+10 000 membres). Creation de contenus visuels et moderation."
  }
];

export const FAVORITES: FavoriteItem[] = [
  { category: "Style Art", value: "Semi-Réalisme", icon: "🎨", bgColor: "bg-pop-yellow" },
  { category: "Logiciel Chouchou", value: "Procreate", icon: "🖌️", bgColor: "bg-gray-900 text-white" },
  { category: "Vibe", value: "Girly Pop & Neon", icon: "✨", bgColor: "bg-pop-pink text-white" },
  { category: "Langues", value: "Anglais C1", icon: "🇬🇧", bgColor: "bg-pop-purple text-white" },
  { category: "Passion", value: "Character Design", icon: "🧛‍♀️", bgColor: "bg-blue-200" },
  { category: "Carburant", value: "Iced Latte", icon: "🧊", bgColor: "bg-orange-200" },
];

export const SOCIALS: SocialLink[] = [
  { platform: "LinkedIn", url: "#", label: "LI" },
  { platform: "Behance", url: "#", label: "Be" },
  { platform: "Instagram", url: "#", label: "IG" },
  { platform: "Email", url: "mailto:zineb.anssafou@icloud.com", label: "HI!" },
];

// Utilisation de la nouvelle constante ASSETS
export const PROFILE_IMAGE_URL = ASSETS.PROFILE;
