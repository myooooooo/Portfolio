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
    description: "Plugin Photoshop open source publie sur GitHub. Etend les capacites natives d'Adobe par des filtres creatifs personnalisables. Cycle complet (architecture, code, doc, deploiement) realise en autonomie.",
    imageUrl: "/images/project-01-cover.jpg",
    link: "#",
    impact: "Plugin Photoshop open source publie sur GitHub. Etend les capacites natives d'Adobe par des filtres creatifs personnalisables. Cycle complet realise en autonomie.",
    impactProof: "Comprendre l'architecture interne d'un logiciel Adobe (APIs UXP/CEP), c'est un niveau structurellement different de 'maitriser Photoshop'. C'est verifiable sur GitHub en 10 secondes.",
    metrics: ["Open Source sur GitHub", "APIs UXP/CEP", "Cycle complet en autonomie"],
    method: [
      { title: "Identification du besoin", description: "Analyse des frictions dans le workflow creatif Photoshop. Identification de filtres absents nativement et conception d'une solution extensible." },
      { title: "Orchestration IA (Claude Code)", description: "Utilisation de Claude Code pour architecturer le plugin. Processus d'iteration : prompt, output, test, correction. Pilotage actif de l'IA, pas de simple execution." },
      { title: "Architecture technique", description: "Structure du plugin (manifest, UXP panel, logique de filtre). Comprehension profonde de l'ecosysteme Adobe et de ses APIs." },
      { title: "Documentation", description: "README GitHub complet comme preuve de maturite professionnelle. Documentation technique claire pour un projet open source." }
    ],
    tools: ["Claude Code (orchestration IA)", "Photoshop APIs UXP/CEP", "GitHub (versioning, doc, deploiement)", "Adobe Photoshop (tests)"],
    visuals: ["Interface du plugin dans Photoshop", "Code GitHub (manifest / fonction principale)", "README GitHub", "Avant / Apres : avec et sans le filtre X-FLTR"]
  },
  {
    id: 2,
    title: "SIMULATEUR MMI",
    subtitle: "Je cree des outils que les gens cherchent.",
    category: "OUTIL WEB — #1 GOOGLE",
    year: "2024",
    description: "Outil web classe #1 sur Google pour la requete cible. Trafic organique recurrent sans aucune publicite. Adopte spontanement par la communaute etudiante MMI.",
    imageUrl: "/images/project-02-cover.jpg",
    link: "#",
    impact: "Outil web classe #1 sur Google pour la requete cible. Trafic organique recurrent sans aucune publicite. Adopte spontanement par la communaute etudiante MMI — sans promotion active.",
    impactProof: "Identification d'un besoin reel non satisfait + competence SEO technique + deploiement autonome + validation par l'usage reel.",
    metrics: ["#1 Google", "Trafic organique sans pub", "Adoption communautaire spontanee"],
    method: [
      { title: "Identification du vide", description: "Le cursus MMI n'avait pas d'outil officiel pour calculer les moyennes. Besoin identifie via les demandes repetees sur les groupes etudiants." },
      { title: "Developpement", description: "Architecture de l'outil, logique de calcul, UX de saisie. Decisions de design orientees utilisateur (champ de saisie rapide vs formulaire complet)." },
      { title: "SEO organique", description: "Titre de page, balises meta, structure des URLs, choix des mots-cles. Optimisation technique pour atteindre la position #1 Google." },
      { title: "Distribution", description: "Decouverte par les utilisateurs via GitHub, bouche a oreille, partage Discord. Preuve que le produit avait une valeur reelle." }
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
    description: "Pipeline de production audiovisuel complet livre pour un departement d'ingenierie. LUT personnalisee integree a la charte officielle Polytech — livrable perenne adopte par l'institution.",
    imageUrl: "/images/project-03-cover.jpg",
    link: "#",
    impact: "Pipeline de production audiovisuel complet livre pour un departement d'ingenierie. LUT personnalisee integree a la charte officielle Polytech — livrable perenne adopte par l'institution.",
    impactProof: "Travailler pour des ingenieurs (pas des creatifs), c'est traduire des enjeux techniques complexes en langage visuel accessible. Ce n'est pas du decor — c'est de la communication critique.",
    metrics: ["LUT integree a la charte officielle", "Pipeline complet livre", "Environnement ingenierie"],
    method: [
      { title: "Brief ingenieur vers Brief creatif", description: "Transformation d'une demande technique ('on a besoin de videos pour nos reseaux') en vision visuelle coherente. Questions strategiques pour cadrer le besoin." },
      { title: "Pipeline de production", description: "Captation terrain (Sony A7C), import/organisation, montage Premiere Pro, motion design After Effects (signetiques neon, tracking camera, rotoscopie, texte 3D), export." },
      { title: "LUT personnalisee", description: "Creation d'un profil colorimetrique sur mesure sous Photoshop. Uniformisation de sources differentes (conditions de tournage variees) en un rendu coherent." },
      { title: "Integration a la charte", description: "La LUT est maintenant dans la charte officielle Polytech. Livrable de qualite institutionnelle — pas juste un rendu 'correct'." }
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
    description: "Laureate #1 — Prix Territorial de Dijon (Trophees NSI 2024). Premiere sur l'ensemble des lycees de la zone academique. Direction artistique complete + pilotage du developpement Python.",
    imageUrl: "/images/project-04-cover.jpg",
    link: "#",
    impact: "Laureate #1 — Prix Territorial de Dijon (Trophees NSI 2024). Premiere sur l'ensemble des lycees de la zone academique. Direction artistique complete + pilotage du developpement Python.",
    impactProof: "La plupart des profils design savent faire un logo. Peu savent aussi piloter un developpement technique en parallele et livrer l'ensemble dans les delais d'une competition nationale.",
    metrics: ["1er Prix Territorial de Dijon", "Double role DA + Tech Lead", "Competition nationale NSI"],
    method: [
      { title: "Double role DA + Tech Lead", description: "Gestion de la tension entre vision artistique et contraintes techniques du developpement Python. Decisions strategiques, pas juste execution." },
      { title: "Identite visuelle", description: "Processus de creation du logo : moodboard, esquisses, selection, finalisation. Iterations avec versions rejetees et justification des choix." },
      { title: "Pilotage dev Python", description: "Role de specification, test et iteration avec l'equipe. Conception du document de specs et du flow utilisateur." },
      { title: "Video de presentation", description: "Livree dans les delais pour la competition. Processus complet : storyboard, tournage, montage, rendu final." }
    ],
    tools: ["Suite Adobe (Illustrator pour logo, After Effects pour video)", "Python (pilotage dev — specs, tests, iterations)", "Figma (maquettes UX de l'app)"],
    visuals: ["Diplome / ceremonie de remise de prix", "Logo final + variations", "Moodboard / planche d'inspiration", "Version rejetee + explication du choix"]
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

export const SYSTEM_INSTRUCTION = `
Tu es l'assistant IA de Zineb Anssafou.
TON ROLE : Agir comme Zineb, Creative & AI Systems Designer.
TON : "Etudiant Pro". Dynamique, creative, tu utilises le "je", credible techniquement.
CONTEXTE :
- BUT MMI Creation Numerique a Dijon.
- Stage chez POLYTECH (pipeline audiovisuel, LUT dans la charte officielle).
- X-FLTR : plugin Photoshop open source publie sur GitHub (APIs UXP/CEP).
- Simulateur MMI : #1 Google, adopte par la communaute.
- SPORTORO : 1er Prix Territorial NSI 2024.
- Je ne me contente pas d'utiliser les outils Adobe — j'en etends les capacites.
STYLE : Phrases courtes. Impact d'abord, methode ensuite, outils en dernier.
`;