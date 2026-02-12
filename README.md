# 🌸 PORTFOLIO SUISSE — ZINEB ANSSAFOU

> Un portfolio interactif au style **Néo-Suisse / Typographique**, intégrant une navigation horizontale fluide, des thèmes saisonniers et une IA conversationnelle (Gemini).

![Badge React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Badge Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Badge Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Badge Gemini](https://img.shields.io/badge/Google_Gemini-8E75B2?style=for-the-badge&logo=google-bard&logoColor=white)

---

## ✨ Fonctionnalités Principales

*   **Design Suisse & Minimaliste** : Mise en page rigoureuse, typographie monumentale et navigation horizontale (Scrolljacking fluide).
*   **Assistant IA (Gemini)** : Chatbot intégré ("Zineb AI") capable de répondre aux questions sur ton parcours et tes projets.
*   **Système de Thèmes** : Bascule entre les modes "Girly Pop" (défaut), "Halloween" 🎃, "Noël" 🎄, "Rétro Windows 95" 💾 et "Hacker" 🕶️.
*   **Doodle Layer** : Une couche de dessin interactive qui permet aux visiteurs de gribouiller sur le site.
*   **Animations Avancées** : Effets de révélation au scroll, transitions fluides et micro-interactions.
*   **Responsive** : Adapté pour Desktop (expérience optimale) et Mobile.

---

## 🚀 Installation & Démarrage

### 1. Cloner le projet
```bash
git clone https://github.com/ton-pseudo/portfolio-suisse-zineb.git
cd portfolio-suisse-zineb
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Configurer l'IA (Clé API)
Ce projet utilise l'API Google Gemini.
1.  Obtiens ta clé API gratuite ici : [Google AI Studio](https://aistudio.google.com/).
2.  À la racine du projet, crée un fichier `.env` (ou renomme `.env.example`).
3.  Ajoute ta clé :
```env
API_KEY=ta_cle_api_google_ici
```

### 4. Lancer le serveur de développement
```bash
npm run dev
```
Le site sera accessible sur `http://localhost:5173`.

---

## 🖼️ Gestion des Images

Le site est configuré pour charger automatiquement les images depuis le dossier `public/images/`.

**IMPORTANT :** Pour que tes projets s'affichent correctement, tu dois nommer tes fichiers images exactement comme suit :

| Projet | Type | Nom du fichier requis |
| :--- | :--- | :--- |
| **Profil** | Photo Principale | `profile.jpg` |
| **Projet 01** | Couverture | `project-01-cover.jpg` |
| | Détail 1 | `project-01-detail-1.jpg` |
| | Détail 2 | `project-01-detail-2.jpg` |
| | Détail 3 | `project-01-detail-3.jpg` |
| **Projet 02** | Couverture | `project-02-cover.jpg` |
| | Détails... | `project-02-detail-1.jpg`, etc. |

*(Voir le fichier `public/images/README.txt` pour la liste complète).*

---

## 🛠️ Stack Technique

*   **Framework** : React 18 (TypeScript)
*   **Build Tool** : Vite
*   **Styling** : Tailwind CSS
*   **IA SDK** : `@google/generative-ai`
*   **Polices** : Inter (Google Fonts) & Meow Script

---

## 🌍 Déploiement (Vercel)

Ce projet est optimisé pour Vercel.

1.  Installe Vercel CLI ou connecte ton repo GitHub à Vercel.
2.  Dans les **Settings** de ton projet Vercel, va dans **Environment Variables**.
3.  Ajoute une variable nommée `API_KEY` avec ta clé Google Gemini.
4.  Déploie !

*(Note : Le fichier `vite.config.ts` et `package.json` sont déjà configurés pour le build).*

---

## 🎨 Personnalisation

*   **Données** : Modifie `constants.ts` pour changer tes textes, projets et expériences.
*   **Prompt IA** : Modifie la constante `SYSTEM_INSTRUCTION` dans `constants.ts` pour changer la personnalité du chatbot.
*   **Couleurs** : Les couleurs principales (`pop-pink`, `luxe-black`) sont définies dans `index.html` (variables CSS) et `tailwind.config` (script dans le head).

---

Made with 💖 & ☕ by **Zineb Anssafou**
