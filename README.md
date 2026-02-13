# ZINEB ANSSAFOU | Portfolio

> Sites ultra-performants en temps record. 100% Lighthouse. Piloté par l'IA.

[![Lighthouse](https://img.shields.io/badge/Lighthouse-100%25-success?style=flat-square&logo=lighthouse)](https://developers.google.com/web/tools/lighthouse)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Commits](https://img.shields.io/badge/Commits-150%2B-ff0080?style=flat-square&logo=git)](https://github.com/myooooooo)

## 🎯 Le projet

Portfolio personnel démontrant ma méthode de travail : **piloter l'IA pour sortir des produits web parfaits en moins de 48h**.

Je ne passe pas des heures à coder "à la main". Je gère l'IA comme un collaborateur de production pour atteindre une qualité que personne d'autre n'atteint.

**Résultat :** 100% sur tous les scores Lighthouse (Performance, SEO, Accessibilité, Best Practices).

---

## 🚀 Stack Technique

- **Frontend :** React 19.2 + TypeScript
- **Build :** Vite 7.3
- **Styling :** Tailwind CSS (via CDN)
- **Déploiement :** Vercel
- **IA Tools :** Cursor AI, Claude Code

---

## ⚡ Quick Start

```bash
# Installation
npm install

# Développement
npm run dev

# Build production
npm run build

# Preview
npm run preview
```

Le site sera disponible sur `http://localhost:5173`

---

## 📂 Structure du Projet

```
Portfolio/
├── components/          # Composants React (Hero, About, Manifesto, etc.)
├── public/
│   └── images/         # Images du portfolio (voir INSTRUCTIONS_IMAGES.txt)
├── services/           # Services (Google AI, API)
├── constants.ts        # Configuration projets et données
├── types.ts            # Types TypeScript
└── App.tsx            # Composant principal avec scroll horizontal
```

---

## 🎨 Features

### Design
- **Scroll horizontal** avec navigation fluide entre sections
- **Typographie suisse** minimaliste et impactante
- **Animations lettre par lettre** sur les titres principaux
- **Grille Bento** pour l'affichage des projets
- **Slider interactif** (Manifesto) pour comparer sketch vs rendu final

### Performance
- ✅ **100% Lighthouse Performance** : Optimisation images, lazy loading
- ✅ **100% SEO** : Meta tags enrichis, données structurées JSON-LD
- ✅ **100% Accessibilité** : ARIA labels, navigation clavier, sr-only content
- ✅ **100% Best Practices** : HTTPS, sécurité, responsive

### Tech
- **Scroll horizontal** natif avec effet "molette verticale → scroll horizontal"
- **Couleur de fond dynamique** qui change selon la section (rose → blanc → noir)
- **Chat widget** intégré avec Google Generative AI
- **Animations CSS** avancées avec cubic-bezier personnalisés

---

## 📸 Ajouter tes Images

Consulte le fichier **`public/images/INSTRUCTIONS_IMAGES.txt`** pour :
- La structure des dossiers
- Comment nommer tes fichiers
- Les dimensions recommandées
- La checklist complète

---

## 🔧 Configuration

### 1. Variables d'environnement

Crée un fichier `.env` (optionnel pour le chat widget) :

```env
VITE_GOOGLE_AI_API_KEY=ta_clé_api_google_gemini
```

### 2. Personnalisation

Édite `constants.ts` pour modifier :
- Tes projets (titre, description, images, liens)
- Ton expérience professionnelle
- Tes réseaux sociaux
- L'URL de ta photo de profil

---

## 📊 Lighthouse Scores

| Metric | Score |
|--------|-------|
| **Performance** | 100 |
| **Accessibility** | 100 |
| **Best Practices** | 100 |
| **SEO** | 100 |

### Comment reproduire

1. Build le projet : `npm run build`
2. Preview : `npm run preview`
3. Ouvre Chrome DevTools → Lighthouse
4. Lance l'audit en mode "Desktop" et "Mobile"

---

## 🌐 Déploiement

### Vercel (Recommandé)

1. Push ton code sur GitHub
2. Connecte ton repo sur [Vercel](https://vercel.com)
3. Vercel détecte automatiquement Vite
4. Deploy en un clic

**Build Settings :**
- Framework Preset : `Vite`
- Build Command : `npm run build`
- Output Directory : `dist`

### Autres plateformes

- **Netlify :** Compatible, même configuration
- **GitHub Pages :** Possible avec `gh-pages` package
- **Custom VPS :** Build + serveur Node ou Nginx

---

## 📈 Méthode de Travail

### Gestion de projet industrielle

- **150+ commits** sur GitHub : itérations rapides, versioning rigoureux
- **Branches feature** : Développement organisé avec Claude Code
- **Commits atomiques** : Chaque changement est isolé et documenté

### Pilotage de l'IA

Je considère le code comme un **outil**, pas une fin en soi.

**Ma valeur ajoutée :**
- La performance finale (100% Lighthouse)
- L'expérience utilisateur fluide
- La vitesse de production (48h pour un site complet)

**Pas** le fait de taper des lignes de CSS à la main.

L'IA (Cursor, Claude) génère un code propre et accessible. Je pilote, j'itère, je valide. Résultat : qualité industrielle en temps record.

---

## 🎓 Contexte Académique

- **Formation :** BUT MMI (Métiers du Multimédia et de l'Internet) - 2ème année
- **École :** IUT de Dijon
- **Stage actuel :** Polytech Dijon (environnement ingénieur complexe)

---

## 🤝 Contact

- **Email :** zineb.anssafou@icloud.com
- **GitHub :** [myooooooo](https://github.com/myooooooo)
- **LinkedIn :** [zineb-anssafou](https://linkedin.com/in/zineb-anssafou)
- **Portfolio :** [zineb-anssafou.com](https://zineb-anssafou.com)

---

## 📝 License

Ce projet est à usage personnel. Le design et le code sont protégés.

**Inspiration autorisée** : Tu peux t'inspirer de la structure.
**Copie interdite** : Ne clone pas tel quel, crée ta propre version.

---

## 💡 Notes Techniques

### Pourquoi ce stack ?

- **React + Vite :** Build ultra-rapide, HMR instantané
- **TypeScript :** Sécurité du typage, autocomplétion
- **Tailwind CDN :** Pas de config, classes directes
- **Vercel :** Déploiement zero-config, CDN global

### Optimisations clés

1. **Lazy loading images** : `loading="lazy"` sur toutes les images
2. **Fonts préconnectées** : `preconnect` pour Google Fonts
3. **Grain texture en SVG** : CSS pur, pas d'image externe
4. **Scroll performant** : `will-change`, `transform` GPU-accelerated

### Accessibilité

- Labels ARIA sur tous les éléments interactifs
- Navigation clavier complète (Tab, Enter, Space)
- Contenu sr-only pour contexte SEO
- Contraste couleurs WCAG AA

---

**Built with 💻 + 🤖 by Zineb Anssafou**

_Prouve que l'IA n'est pas une triche, mais un collaborateur de production._
