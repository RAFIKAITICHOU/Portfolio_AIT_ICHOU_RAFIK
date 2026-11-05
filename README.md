# Portfolio Multi-Pages Professionnel — AIT ICHOU Rafik 🚀

Un portfolio d'ingénierie moderne, réactif et haut de gamme conçu en **React**, **React Router DOM**, **Vite** et **CSS Modulaire / Glassmorphism**.

Ce portfolio a été spécialement structuré en **véritable application multi-pages (Multi-Page Application)** où chaque rubrique dispose de sa propre page dédiée avec sa propre URL, reprenant et enrichissant l'architecture du site original.

---

## 🗺️ Les Pages Dédiées & Routes

| Route | Page | Description |
| :--- | :--- | :--- |
| `/` | **Accueil (Home)** | Hero immersif, disponibilité PFE 2027, KPI stats, aperçu des projets phares et accès direct aux rubriques. |
| `/about` | **À Propos** | Rigueur d'ingénierie, démarche agile, les 4 piliers de valeur PFE et faits marquants. |
| `/formation` | **Formation Académique** | Cursus complet : Cycle Ingénieur EMSI (2025-2027) et Licence en Informatique (2022-2025). |
| `/certifications` | **Certifications** | Accréditations officielles vérifiables IBM (Cloud, Data Science, Machine Learning, Deep Learning) avec liens Coursera & Credly. |
| `/experience` | **Expérience Professionnelle** | Stage DSI OCP Safi (*Smart HSE 360*), Présidence Club E-TEAM ENS, stage de 6 mois à l'ENS Marrakech (*absENS*) et Formateur Green AI. |
| `/projects` | **Projets & Études de Cas** | Filtrage par catégories, recherche en temps réel et **modal d'étude de cas d'ingénierie complète** (problème, solution, métriques). |
| `/skills` | **Compétences Techniques** | Stack classée par domaines (Backend, Frontend/Mobile, Qualité & Tests, IA/IoT, Bases de données) avec niveaux de maîtrise. |
| `/objectives` | **Objectifs & Vision** | Objectif immédiat Stage PFE (dès le 25 janvier 2027, 4 à 6 mois) et vision à long terme d'Architecte Logiciel Cloud / IA. |
| `/contact` | **Contact & Échanges** | Canaux directs (Email, WhatsApp direct, LinkedIn, GitHub), copie en 1 clic et formulaire interactif avec validation. |

---

## ✨ Fonctionnalités Globales

- 🌓 **Thème Sombre / Clair (Dark & Light Mode)** : Persistance automatique via `localStorage` et détection des préférences système de l'OS.
- 🌐 **Bilingue Intégral (FR / EN)** : Commutateur instantané de langue conservant l'état de navigation.
- 🧭 **Navigation Fluide & Fil d'Ariane (Breadcrumbs)** : Liens actifs mis en évidence dans la navbar, fil d'Ariane sur chaque page et retour automatique en haut de page à chaque changement d'URL (`ScrollToTop`).
- 💼 **Sélecteur de CV Multi-Profils** : Téléchargement direct des 3 formats PDF (Ingénieur Full-Stack PFE, QA / Testing, Mobile & Web).
- 📱 **Menu Mobile Responsive** : Tiroir latéral élégant avec flou d'arrière-plan.

---

## 🛠️ Stack Technologique

- **Framework** : React 18+
- **Routage** : React Router DOM 7+ (HashRouter garantissant un fonctionnement parfait en local et sur GitHub Pages sans configuration serveur)
- **Bundler** : Vite 6 (Démarrage ultra-rapide et build optimisé)
- **Design System** : CSS Moderne (variables thématiques, glassmorphism, responsive grid)
- **Composants Icônes** : SVG vectoriels intégrés (aucun ralentissement de chargement)

---

## 🚀 Démarrage Rapide

### 1. Lancer en mode développement
```bash
cd react-portfolio
npm run dev
```
Ouvrez votre navigateur sur : **`http://localhost:3000`**

### 2. Compiler pour la production
```bash
npm run build
```
Les fichiers compilés et optimisés sont générés dans `react-portfolio/dist/`.

### 3. Prévisualiser le build
```bash
npm run preview
```

---

## 📁 Arborescence du Projet

```text
react-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── public/
│   ├── assets/
│   │   ├── photo.jpeg
│   │   └── logoo.jpg
│   └── Cv/
│       ├── CV_AIT_ICHOU_Rafik_PFE.pdf
│       ├── CV_AIT_ICHOU_Rafik_PFE_Testing.pdf
│       └── CV_AIT_ICHOU_Rafik_PFE__développement_full_stack_et_mobile.pdf
└── src/
    ├── main.jsx
    ├── App.jsx                       # Routeur principal (HashRouter & Routes)
    ├── index.css                     # Système de style (thèmes, animations, responsive)
    ├── data/
    │   └── portfolioData.js          # Données bilingues exhaustives
    ├── pages/                        # LES PAGES DÉDIÉES
    │   ├── HomePage.jsx              # Page Accueil
    │   ├── AboutPage.jsx             # Page À Propos
    │   ├── FormationPage.jsx         # Page Formation
    │   ├── CertificationsPage.jsx    # Page Certifications
    │   ├── ExperiencePage.jsx        # Page Expérience
    │   ├── ProjectsPage.jsx          # Page Projets
    │   ├── SkillsPage.jsx            # Page Compétences
    │   ├── ObjectivesPage.jsx        # Page Objectifs
    │   └── ContactPage.jsx           # Page Contact
    └── components/                   # Composants réutilisables
        ├── Navbar.jsx                # Barre de navigation fixe (NavLink actifs)
        ├── Hero.jsx
        ├── Stats.jsx
        ├── About.jsx
        ├── Formation.jsx
        ├── Certifications.jsx
        ├── Experience.jsx
        ├── Projects.jsx
        ├── ProjectModal.jsx
        ├── Skills.jsx
        ├── Contact.jsx
        ├── CvModal.jsx
        ├── Toast.jsx
        ├── Footer.jsx
        ├── ScrollToTop.jsx           # Remonte en haut lors de chaque navigation
        └── Icons.jsx
```
