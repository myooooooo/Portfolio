import { Project, Experience, SocialLink, FavoriteItem } from './types';

// --- GESTION CENTRALISÉE DES IMAGES (ASSETS) ---
// C'est ici que tu références toutes tes images. 
// Dépose les fichiers correspondants dans le dossier 'public/images/'
export const ASSETS = {
  PROFILE: "/images/profile.jpg",
  MANIFESTO_BG: "/images/manifesto-bg.jpg", // Image FINAL (Rendu)
  MANIFESTO_SKETCH: "/images/manifesto-sketch.jpg", // Image ROUGH (Croquis/Fil de fer)
};

export const PROJECTS: Project[] = [
  // --- 5 DESSINS / ILLUSTRATIONS ---
  {
    id: 1,
    title: "MYO RACER",
    category: "ILLUSTRATION 🎨",
    year: "2024",
    description: "CONCEPT : Character Design d'une pilote futuriste. CHALLENGE : Rendre la transluminescence de la peau et les reflets néons sur l'armure sous Procreate. RÉSULTAT : Une illustration phare qui définit mon style 'Semi-Réaliste Cyber'.",
    imageUrl: "/images/project-01-cover.jpg", 
    link: "https://www.artstation.com"
  },
  {
    id: 2,
    title: "CYBER GEISHA",
    category: "CONCEPT ART 🎎",
    year: "2023",
    description: "CONCEPT : Fusion entre tradition japonaise et robotique lourde. CHALLENGE : Intégrer des câbles et des circuits imprimés de manière organique sur un visage humain. RÉSULTAT : Travail approfondi sur l'anatomie et les textures métalliques.",
    imageUrl: "/images/project-02-cover.jpg",
    link: "#"
  },
  {
    id: 3,
    title: "ETHEREAL GAZE",
    category: "PORTRAIT 👁️",
    year: "2024",
    description: "CONCEPT : Étude de lumière et d'émotion sur un portrait féminin onirique. CHALLENGE : Utiliser une palette de couleurs restreinte (Violets/Bleus) pour créer une ambiance mystique sans perdre en volume. RÉSULTAT : Une pièce virale sur mes réseaux (+2k likes).",
    imageUrl: "/images/project-03-cover.jpg",
    link: "#"
  },
  {
    id: 4,
    title: "MECH WARRIOR",
    category: "CHARA DESIGN 🤖",
    year: "2023",
    description: "CONCEPT : Soldat d'élite pour un jeu vidéo fictif. CHALLENGE : Créer une silhouette lisible (Shape Language) tout en surchargeant les détails de l'équipement. RÉSULTAT : Planche de recherche complète avec vues de face, dos et expressions.",
    imageUrl: "/images/project-04-cover.jpg",
    link: "#"
  },
  {
    id: 5,
    title: "SKETCHBOOK 24",
    category: "CROQUIS ✏️",
    year: "2024",
    description: "CONCEPT : Compilation de mes recherches graphiques quotidiennes. CHALLENGE : S'imposer une rigueur de dessin journalière (Speedpainting 30min). RÉSULTAT : Une progression visible de mon trait et une bibliothèque de poses pour mes futurs projets.",
    imageUrl: "/images/project-05-cover.jpg",
    link: "#"
  },

  // --- 3 RÉALISATIONS BUT MMI ---
  {
    id: 6,
    title: "SPORTORO",
    category: "APP & NSI AWARD 🏆",
    year: "2024",
    description: "CONCEPT : App de productivité (Pomodoro) gamifiée pour étudiants. CHALLENGE : Double casquette UI/UX et Dev Python. Créer une interface motivante tout en gérant la logique backend. RÉSULTAT : Lauréate du Prix Territorial NSI 2024.",
    imageUrl: "/images/project-06-cover.jpg",
    link: "#"
  },
  {
    id: 7,
    title: "MMI CAST",
    category: "BRANDING 🎙️",
    year: "2023",
    description: "CONCEPT : Identité visuelle totale pour le podcast du BDE MMI. CHALLENGE : Concevoir un logo et une charte graphique modulable pour YouTube, Instagram et Print. RÉSULTAT : Une identité forte qui a professionnalisé l'image de l'asso étudiante.",
    imageUrl: "/images/project-07-cover.jpg",
    link: "#"
  },
  {
    id: 8,
    title: "CORTEX LMS",
    category: "UX/UI DESIGN 🧠",
    year: "2024",
    description: "CONCEPT : Refonte ergonomique d'une plateforme de cours en ligne (LMS). CHALLENGE : Simplifier des parcours utilisateurs complexes pour réduire la charge cognitive des étudiants. RÉSULTAT : Maquettes Figma interactives et Design System complet.",
    imageUrl: "/images/project-08-cover.jpg",
    link: "#"
  },

  // --- 2 SITES CODÉS (PROJETS PERSO) ---
  {
    id: 9,
    title: "NEO WEATHER",
    category: "REACT APP 🌦️",
    year: "2024",
    description: "CONCEPT : Une app météo qui juge vos goûts vestimentaires selon le temps. CHALLENGE : Consommer l'API OpenWeatherMap et générer des phrases sarcastiques conditionnelles. RÉSULTAT : Un site React fun, responsive et codé proprement (Clean Code).",
    imageUrl: "/images/project-09-cover.jpg",
    link: "#"
  },
  {
    id: 10,
    title: "RETRO TODO",
    category: "JS VANILLA 💾",
    year: "2023",
    description: "CONCEPT : Une To-Do List au style Windows 95 pixel-perfect. CHALLENGE : Gérer le LocalStorage pour la persistance des données et recréer le CSS 'brutaliste' des années 90 sans framework. RÉSULTAT : Une plongée nostalgique et technique dans le DOM.",
    imageUrl: "/images/project-10-cover.jpg",
    link: "#"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "STAGIAIRE DESIGN & DEV",
    company: "POLYTECH",
    period: "2025 — PRÉSENT",
    description: "Stage technique. Conception d'interfaces pour des projets d'ingénierie. Je traduis des besoins techniques complexes en UI claires et fonctionnelles."
  },
  {
    role: "ÉTUDIANTE MMI (CRÉA)",
    company: "IUT DIJON",
    period: "2024 — PRÉSENT",
    description: "Parcours Création Numérique. Approfondissement de la Direction Artistique, de l'UX Design et du développement Front-End."
  },
  {
    role: "CHEFFE DE PROJET",
    company: "LYCÉE H. PARRIAT",
    period: "2023 — 2024",
    description: "Projet SPORTORO (Trophées NSI). Pilotage du projet, développement Python et conception de l'identité graphique."
  },
  {
    role: "COMMUNITY MANAGER",
    company: "DISCORD / INSTA",
    period: "2019 — 2022",
    description: "Animation d'une communauté Tech & Art (+10k membres). Création de contenus visuels et modération."
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
TON RÔLE : Agir comme Zineb, une étudiante en BUT MMI passionnée et professionnelle.
TON : "Étudiant Pro". Tu es dynamique, créative, tu utilises le "je", mais tu restes crédible techniquement.
CONTEXTE :
- Tu es en 2ème année de BUT MMI à Dijon.
- Tu es actuellement en stage chez POLYTECH.
- Tu as gagné le prix territorial NSI 2024 avec l'app Sportoro.
- Tu dessines en semi-réaliste sur Procreate (c'est ta force en UI).
- Tu codes aussi (React, Python), tu n'es pas "juste" une graphiste.
STYLE : Phrases courtes. Un peu d'emojis ✨ mais pas trop. Tu aimes l'esthétique "Girly Pop" mélangée au "Swiss Style".
`;