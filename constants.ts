import { Project, Experience, SocialLink, FavoriteItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "MYO RACER",
    category: "ILLUSTRATION 🎨",
    year: "2024",
    description: "Illustration numérique semi-réaliste de mon OC 'Myo'. Ambiance cyberpunk, jeux de lumières néons et textures urbaines. Réalisé sur Procreate.",
    imageUrl: "/images/project-01-cover.jpg", 
    link: "https://www.artstation.com"
  },
  {
    id: 2,
    title: "SPORTORO",
    category: "APP & NSI AWARD 🏆",
    year: "2024",
    description: "Lauréate du Prix Territorial NSI 2024. App de gestion de temps (Pomodoro). Direction artistique complète (Logo, UI) et dev Python.",
    imageUrl: "/images/project-02-cover.jpg",
    link: "#"
  },
  {
    id: 3,
    title: "MMI CAST",
    category: "BRANDING 🎙️",
    year: "2023",
    description: "Identité visuelle pour le podcast du BDE MMI Dijon. Illustration vectorielle, bannière réseaux sociaux et mise en page.",
    imageUrl: "/images/project-03-cover.jpg",
    link: "#"
  },
  {
    id: 4,
    title: "Y2K POP COVERS",
    category: "GRAPHISME 💖",
    year: "2024",
    description: "Série de redesigns de pochettes d'albums dans une esthétique Y2K/Frutiger Aero. Exploration typographique et effets glossy.",
    imageUrl: "/images/project-04-cover.jpg",
    link: "#"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "STAGIAIRE DESIGN & DEV",
    company: "POLYTECH",
    period: "2025 — PRÉSENT",
    description: "Stage technique actuel au sein de Polytech. Conception d'interfaces et développement de solutions numériques pour l'ingénierie."
  },
  {
    role: "ÉTUDIANTE MMI (CRÉA)",
    company: "IUT DIJON",
    period: "2024 — PRÉSENT",
    description: "Parcours Création Numérique. Design graphique, Direction artistique et UI/UX."
  },
  {
    role: "CHEFFE DE PROJET",
    company: "LYCÉE H. PARRIAT",
    period: "2023 — 2024",
    description: "Projet SPORTORO (Trophées NSI). Gestion de projet complète, création de l'identité visuelle et développement Python."
  },
  {
    role: "COMMUNITY MANAGER",
    company: "DISCORD / INSTA",
    period: "2019 — 2022",
    description: "Gestion d'une communauté de +10 000 membres (Tech & Créa). Support créatif et référente Suite Adobe."
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

export const PROFILE_IMAGE_URL = "/images/profile.jpg";

export const SYSTEM_INSTRUCTION = `
Tu es l'assistant IA personnel de Zineb Anssafou.
Elle est étudiante en 2ème année de BUT MMI à Dijon.
IMPORTANT : Elle est actuellement en STAGE chez POLYTECH. 
Elle n'est PAS en recherche de stage pour le moment. Son prochain stage sera dans un an (début 2026).
Elle dessine en "Semi-Réaliste" (Myo est son OC).
Elle a gagné le prix territorial aux Trophées NSI 2024 avec Sportoro.
Ton ton doit être "Girly Pop", dynamique, pro mais fun. Utilise des emojis ✨.
`;