export const portfolioData = {
  personal: {
    name: "Rafik AIT ICHOU",
    shortName: "Rafik AIT ICHOU",
    brandText: "ICHOU.IT",
    title: {
      fr: "Ingénieur d'État en Informatique & Réseaux — Développement Digital & Systèmes d'Information",
      en: "State Engineer in Computer Science & Networks — Digital Development & Information Systems"
    },
    subTitleSchool: {
      fr: "École Marocaine des Sciences de l'Ingénieur (EMSI Marrakech)",
      en: "Moroccan School of Engineering Sciences (EMSI Marrakech)"
    },
    status: {
      fr: "Stage PFE · 4 à 6 mois · Dès le 25 janvier 2027",
      en: "Graduation Internship · 4 to 6 months · From Jan 25, 2027"
    },
    statusShort: {
      fr: "PFE dès le 25 Janvier 2027",
      en: "PFE from Jan 25, 2027"
    },
    bioShort: {
      fr: "Élève-ingénieur à l'EMSI Marrakech (Promo 2027). Passionné par l'architecture logicielle modulaire, les écosystèmes Spring Boot / Angular / React, le développement mobile Flutter et l'assurance qualité rigoureuse (TDD, SonarQube, Selenium).",
      en: "Engineering student at EMSI Marrakech (Class of 2027). Passionate about modular software architectures, Spring Boot / Angular / React ecosystems, Flutter mobile development, and rigorous QA (TDD, SonarQube, Selenium)."
    },
    bioLong: {
      fr: "Fort d'une expérience industrielle éprouvée à la DSI du Groupe OCP Safi sur le projet Smart HSE 360 (avec 86,8% de couverture SonarQube et 222 tests automatisés), je combine rigueur d'ingénierie, conception logicielle clean code et esprit d'innovation. Ancien président du club de robotique E-TEAM ENS, j'accorde une importance primordiale au travail collaboratif agile et à l'impact concret des solutions déployées.",
      en: "With proven industrial experience at OCP Safi IT Dept on the Smart HSE 360 platform (featuring 86.8% SonarQube coverage and 222 automated tests), I combine engineering discipline, clean code design, and an innovative mindset. Former president of the E-TEAM ENS robotics club, I prioritize agile team collaboration and delivering measurable real-world impact."
    },
    location: {
      fr: "Marrakech / Casablanca • Mobilité Nationale & Internationale",
      en: "Marrakech / Casablanca • National & International Mobility"
    },
    email: "rafikaitichou@gmail.com",
    phone: "+212 600-607637",
    phoneDisplay: "+212 6 00 60 76 37",
    whatsappLink: "https://wa.me/212600607637?text=Bonjour%20Mr.%20AIT%20ICHOU%20Rafik%2C%20j%27ai%20vu%20votre%20portfolio%20et%20je%20souhaite%20%C3%A9changer%20avec%20vous.",
    calendarBookingLink: "https://calendly.com/rafikaitichou",
    github: "https://github.com/RAFIKAITICHOU",
    linkedin: "https://www.linkedin.com/in/rafik-ait-ichou/",
    photo: "/assets/photo.jpeg",
    logo: "/assets/logoo.jpg",
    cvDefault: "/Cv/CV_AIT_ICHOU_Rafik_PFE.pdf",
    cvList: [
      {
        id: "pfe-general",
        title: {
          fr: "CV Ingénieur Full-Stack PFE (Principal)",
          en: "Full-Stack Engineer PFE Resume (Main)"
        },
        path: "/Cv/CV_AIT_ICHOU_Rafik_PFE.pdf",
        badge: "Recommandé"
      },
      {
        id: "pfe-testing",
        title: {
          fr: "CV Spécialisé QA & Testing Logiciel",
          en: "QA & Software Testing Specialized Resume"
        },
        path: "/Cv/CV_AIT_ICHOU_Rafik_PFE_Testing.pdf",
        badge: "QA / Test"
      },
      {
        id: "pfe-mobile",
        title: {
          fr: "CV Développeur Full-Stack & Mobile",
          en: "Full-Stack & Mobile Developer Resume"
        },
        path: "/Cv/CV_AIT_ICHOU_Rafik_PFE__développement_full_stack_et_mobile.pdf",
        badge: "Mobile & Web"
      }
    ]
  },

  stats: [
    {
      value: "15+",
      label: {
        fr: "Projets d'Ingénierie Réalisés",
        en: "Engineering Projects Delivered"
      },
      sub: {
        fr: "Full-Stack, Mobile, IoT, IA & Systèmes avec code vérifiable",
        en: "Full-Stack, Mobile, IoT, AI & Systems with verifiable code"
      }
    },
    {
      value: "86.8%",
      label: {
        fr: "Couverture de Code SonarQube",
        en: "SonarQube Code Coverage"
      },
      sub: {
        fr: "Qualité logicielle validée sur le projet Smart HSE 360 (OCP Safi)",
        en: "Validated code quality on Smart HSE 360 platform (OCP Safi)"
      }
    },
    {
      value: "222",
      label: {
        fr: "Tests Automatisés Déployés",
        en: "Automated Tests Executed"
      },
      sub: {
        fr: "164 tests unitaires JUnit 5/Mockito et 58 tests E2E Selenium",
        en: "164 JUnit 5/Mockito unit tests and 58 Selenium E2E tests"
      }
    },
    {
      value: "5",
      label: {
        fr: "Certifications IBM & Cloud",
        en: "IBM & Cloud Certifications"
      },
      sub: {
        fr: "Accréditations vérifiables en Cloud, Data Science & Deep Learning",
        en: "Verified credentials in Cloud, Data Science & Deep Learning"
      }
    }
  ],

  experiences: [
    {
      id: "ocp-safi",
      role: {
        fr: "Ingénieur Stagiaire – Direction des Systèmes d'Information (DSI)",
        en: "Software Engineering Intern – IT Directorate (DSI)"
      },
      company: "Groupe OCP – Site Industriel de Safi",
      type: {
        fr: "Stage Ingénieur • 2 mois",
        en: "Engineering Internship • 2 months"
      },
      period: {
        fr: "Juillet 2026 – Août 2026",
        en: "July 2026 – August 2026"
      },
      featured: true,
      badge: "Stage OCP Safi",
      projectTitle: "Smart HSE 360",
      description: {
        fr: "Conception et mise en œuvre d'une plateforme intelligente de traçabilité des incidents HSE (Hygiène, Sécurité, Environnement) pour le site industriel OCP Safi.",
        en: "Design and deployment of an intelligent HSE (Health, Safety, Environment) incident traceability platform for the OCP Safi industrial plant."
      },
      highlights: [
        {
          fr: "Architecture 4 couches modulaire et gouvernance Scrum avec product backlog complet.",
          en: "4-tier modular software architecture and Scrum governance with full product backlog."
        },
        {
          fr: "Backend sécurisé Spring Boot (JWT, API REST) & Frontend réactif Angular pour 5 profils d'utilisateurs industriels.",
          en: "Secure Spring Boot backend (JWT, REST API) & reactive Angular frontend for 5 industrial user roles."
        },
        {
          fr: "Application mobile Flutter avec scan QR Code sur site pour déclaration immédiate et preuves photos hors-ligne.",
          en: "Flutter mobile app with on-site QR code scanning for instant incident logging and offline photo capture."
        },
        {
          fr: "Module IA : classification automatique de gravité, matrice de criticité matricielle et détection de récurrence.",
          en: "AI module: automatic severity categorization, risk matrix calculation, and recurrence detection."
        },
        {
          fr: "Assurance qualité exemplaire : 164 tests unitaires (JUnit 5, Mockito), 58 tests E2E Selenium et 86,8% de couverture SonarQube.",
          en: "High-grade QA: 164 unit tests (JUnit 5, Mockito), 58 Selenium E2E tests, and 86.8% SonarQube code coverage."
        }
      ],
      skills: ["Spring Boot", "Angular", "Flutter", "PostgreSQL", "MinIO", "Docker", "SonarQube", "Selenium", "Scrum"],
      result: {
        fr: "Attestation officielle délivrée avec félicitations par la Direction OCP Safi attestant de la robustesse opérationnelle du système.",
        en: "Official certificate awarded with honors by OCP Safi Management validating operational system robustness."
      }
    },
    {
      id: "eteam-president",
      role: {
        fr: "Président du Club & Responsable Technique",
        en: "Club President & Technical Lead"
      },
      company: "Club Technologique E-TEAM ENS – Université Cadi Ayyad",
      type: {
        fr: "Leadership Associatif & Projets",
        en: "Associative Leadership & Projects"
      },
      period: {
        fr: "2024 – Présent",
        en: "2024 – Present"
      },
      featured: false,
      badge: "Leadership",
      projectTitle: "Gouvernance & Projets Robotiques / IA",
      description: {
        fr: "Progression continue jusqu'à la présidence exécutive du club technologique et robotique de l'université.",
        en: "Progression through technical leadership up to the executive presidency of the university robotics club."
      },
      highlights: [
        {
          fr: "Président (Fév. 2026 – Présent) : Stratégie globale, pilotage de 40+ membres et organisation de hackathons régionaux.",
          en: "President (Feb 2026 – Present): Overall strategy, leading 40+ members, and organizing regional tech hackathons."
        },
        {
          fr: "Chef Ingénierie & Technologie (2025 – 2026) : Encadrement des projets en robotique autonome, vision artificielle et IoT.",
          en: "Head of Engineering & Tech (2025 – 2026): Supervising projects in autonomous robotics, computer vision, and IoT."
        },
        {
          fr: "Chef Software & Hardware (2024 – 2025) : Conception et animation d'ateliers de programmation (Raspberry Pi, ESP32, Python).",
          en: "Head of Software & Hardware (2024 – 2025): Designed programming workshops (Raspberry Pi, ESP32, Python)."
        }
      ],
      skills: ["Leadership", "IoT", "Arduino", "Raspberry Pi", "Python", "Gestion de Projet", "Robotique"],
      result: {
        fr: "Multiples récompenses universitaires et structuration d'une équipe technique autonome et productive.",
        en: "Multiple university awards and establishment of a high-performing autonomous technical team."
      }
    },
    {
      id: "ens-absens",
      role: {
        fr: "Stagiaire en Développement Informatique",
        en: "Software Development Intern"
      },
      company: "École Normale Supérieure (ENS Marrakech)",
      type: {
        fr: "Stage de Développement • 6 mois",
        en: "Development Internship • 6 months"
      },
      period: {
        fr: "Décembre 2024 – Juin 2025",
        en: "December 2024 – June 2025"
      },
      featured: false,
      badge: "Stage 6 mois",
      projectTitle: "absENS – Automatisation d'émargement",
      description: {
        fr: "Développement d'un système intelligent et anti-fraude pour la gestion et l'automatisation de l'assiduité universitaire.",
        en: "Development of an intelligent anti-fraud automated attendance tracking system for the university."
      },
      highlights: [
        {
          fr: "Architecture 3 tiers : application mobile Android native (Java), backend de gestion Laravel et boîtier caméra Raspberry Pi sous OpenCV.",
          en: "3-tier architecture: native Android app (Java), Laravel management backend, and Raspberry Pi camera unit running OpenCV."
        },
        {
          fr: "Génération de QR codes dynamiques horodatés et chiffrés pour neutraliser tout partage de capture d'écran.",
          en: "Time-based dynamic encrypted QR codes to eliminate fraudulent screenshot sharing."
        },
        {
          fr: "Tableaux de bord statistiques instantanés et export automatisé des rapports d'absence pour l'administration.",
          en: "Instant analytics dashboards and automated absence report export for university administration."
        }
      ],
      skills: ["Android Java", "Laravel", "Raspberry Pi", "OpenCV", "MySQL", "QR Code Dynamique"],
      result: {
        fr: "Attestation de stage de 6 mois validée avec succès par la Direction de l'ENS Marrakech.",
        en: "6-month internship certificate successfully validated and delivered by ENS Marrakech Direction."
      }
    },
    {
      id: "formateur-ai",
      role: {
        fr: "Formateur en Robotique & Systèmes Intelligents",
        en: "Instructor in Robotics & Smart Systems"
      },
      company: "Université Cadi Ayyad & ENS Marrakech",
      type: {
        fr: "Pédagogie & Formation Technique",
        en: "Pedagogy & Technical Training"
      },
      period: {
        fr: "2025 – 2026",
        en: "2025 – 2026"
      },
      featured: false,
      badge: "Formation",
      projectTitle: "Green AI Workshops",
      description: {
        fr: "Animation de formations pratiques dédiées aux solutions intelligentes et automatisées pour le tri écologique des déchets.",
        en: "Conducted hands-on workshops dedicated to smart automated solutions for ecological waste sorting."
      },
      highlights: [
        {
          fr: "Prise en main des microcontrôleurs avancés (ESP32, Arduino, Raspberry Pi) et interfaçage de capteurs optiques.",
          en: "Hands-on mastery of microcontrollers (ESP32, Arduino, Raspberry Pi) and optical sensor interfacing."
        },
        {
          fr: "Coaching d'équipes d'étudiants de la phase de conception électronique jusqu'au code embarqué final.",
          en: "Coached student teams from circuit design stage to final embedded firmware implementation."
        }
      ],
      skills: ["Pédagogie", "ESP32", "Arduino", "IoT", "Computer Vision", "Green Tech"],
      result: {
        fr: "Sensibilisation et formation de plus de 80 étudiants aux technologies d'automatisation verte.",
        en: "Trained and mentored over 80 students in green automation technologies."
      }
    }
  ],

  projects: [
    {
      id: "smart-hse-360",
      title: "Smart HSE 360",
      subtitle: {
        fr: "Plateforme Industrielle de Traçabilité des Incidents HSE",
        en: "Industrial HSE Incident Traceability & Analytics Platform"
      },
      category: "industrial",
      categoryLabel: {
        fr: "Industriel • Web & Mobile",
        en: "Industrial • Web & Mobile"
      },
      featured: true,
      tagline: {
        fr: "Digitalisation et traçabilité de bout en bout des incidents de sécurité pour le site OCP Safi.",
        en: "End-to-end incident traceability and risk prevention for OCP Safi industrial operations."
      },
      problem: {
        fr: "Sur le site industriel OCP Safi, le suivi des incidents d'hygiène, sécurité et environnement s'effectuait sur papier et tableurs dispersés. Cela entraînait des délais de traitement critiques, un risque de perte de preuves et l'impossibilité d'effectuer des analyses prédictives.",
        en: "At the OCP Safi industrial site, HSE incident reports were handled through paper logs and fragmented spreadsheets, creating escalation delays, evidence loss risks, and zero predictive analytics."
      },
      solution: {
        fr: "Conception d'une plateforme modulaire 4 couches : API REST sécurisée Spring Boot (JWT), portail web Angular réactif pour les superviseurs et application mobile Flutter avec scan de QR code sur équipement pour déclaration immédiate et capture de photos.",
        en: "Delivered an integrated 4-tier platform: Secure Spring Boot REST API with JWT, Angular web dashboard for plant supervisors, and Flutter mobile app with QR code scanning for immediate on-site reporting."
      },
      result: {
        fr: "164 tests unitaires JUnit 5/Mockito, 58 scénarios E2E Selenium, 86,8% de couverture SonarQube et attestation officielle de satisfaction délivrée par la Direction OCP Safi.",
        en: "164 JUnit 5/Mockito unit tests, 58 Selenium E2E tests, 86.8% SonarQube code coverage, and official certificate of excellence delivered by OCP Safi Management."
      },
      technologies: ["Spring Boot", "Angular", "Flutter", "PostgreSQL", "MinIO", "Docker", "SonarQube", "Selenium", "WebSockets"],
      metrics: [
        { label: "Tests Unitaires", value: "164 Tests" },
        { label: "Tests E2E Selenium", value: "58 Scénarios" },
        { label: "Couverture SonarQube", value: "86.8%" },
        { label: "Profils Métier", value: "5 Rôles" }
      ],
      github: "https://github.com/RAFIKAITICHOU/Smart-HSE-360-OCP-Safi",
      badgeColor: "red"
    },
    {
      id: "smart-parking",
      title: "Smart Parking System",
      subtitle: {
        fr: "Vision par Ordinateur, IoT & Réservation Web Temps Réel",
        en: "Computer Vision, IoT & Real-time Web Reservation"
      },
      category: "iot",
      categoryLabel: {
        fr: "IoT & Intelligence Artificielle",
        en: "IoT & Artificial Intelligence"
      },
      featured: true,
      tagline: {
        fr: "Détection optique des places disponibles et réservation instantanée.",
        en: "Optical parking spot detection and synchronized live booking."
      },
      problem: {
        fr: "La congestion urbaine est amplifiée par les conducteurs tournant à la recherche d'une place libre, entraînant gaspillage de carburant et saturation des voies.",
        en: "Urban congestion is worsened by drivers circling for vacant parking slots, burning fuel, and congesting city centers."
      },
      solution: {
        fr: "Caméras intelligentes ESP32-CAM / Raspberry Pi exécutant des modèles YOLOv8 & OpenCV, synchronisées par WebSockets vers un backend Spring Boot et un portail moderne Next.js avec paiement sécurisé Stripe.",
        en: "Smart ESP32-CAM / Raspberry Pi cameras running YOLOv8 & OpenCV, streaming via WebSockets to a Spring Boot backend and modern Next.js interface with Stripe payment."
      },
      result: {
        fr: "Précision de détection optique de 94%+, actualisation d'état en moins de 500 ms et réduction estimée de 40% du temps de recherche d'une place.",
        en: "94%+ optical detection precision, sub-500ms state updates, and an estimated 40% reduction in parking search time."
      },
      technologies: ["Next.js", "React", "Spring Boot", "Python", "YOLOv8", "OpenCV", "ESP32-CAM", "Raspberry Pi", "WebSockets", "Stripe"],
      metrics: [
        { label: "Précision Détection", value: "94%+" },
        { label: "Latence WebSocket", value: "< 500ms" },
        { label: "Paiements", value: "Stripe & PayPal" }
      ],
      github: "https://github.com/RAFIKAITICHOU/Smart-Parking-System",
      badgeColor: "slate"
    },
    {
      id: "absens",
      title: "absENS",
      subtitle: {
        fr: "Gestion Intelligente & Anti-Fraude de l'Assiduité Universitaire",
        en: "Intelligent Anti-Fraud Academic Attendance System"
      },
      category: "mobile",
      categoryLabel: {
        fr: "Mobile & Embarqué • ENS Marrakech",
        en: "Mobile & Embedded • ENS Marrakech"
      },
      featured: true,
      tagline: {
        fr: "Émargement instantané par QR Code dynamique sécurisé.",
        en: "Instant student roll-call using dynamic rotating QR codes."
      },
      problem: {
        fr: "L'appel traditionnel prenait 15 minutes par amphi et les feuilles papier d'émargement étaient vulnérables aux signatures frauduleuses et erreurs manuelles.",
        en: "Manual roll-call consumed 15 minutes per lecture, and paper sign-up sheets were prone to buddy signing and transcription errors."
      },
      solution: {
        fr: "Système tripartite : application mobile Android native pour étudiants, module Raspberry Pi avec caméra OpenCV scannant les QR codes rotatifs chiffrés, et portail Laravel avec exports de présence automatiques.",
        en: "3-tier architecture: native Android app for students, Raspberry Pi camera station running OpenCV to scan rotating encrypted QR codes, and Laravel admin portal."
      },
      result: {
        fr: "Émargement validé en moins de 3 secondes par étudiant, zéro fraude par photo d'écran et attestation officielle de stage de 6 mois validée.",
        en: "Student check-in completed in under 3 seconds, zero screenshot fraud, and official 6-month internship certificate awarded."
      },
      technologies: ["Android Java", "Laravel", "Raspberry Pi", "OpenCV", "MySQL", "Chart.js"],
      metrics: [
        { label: "Vitesse Émargement", value: "< 3s / étudiant" },
        { label: "Durée du Projet", value: "6 Mois (ENS)" },
        { label: "Taux de Fraude", value: "0%" }
      ],
      github: "https://github.com/RAFIKAITICHOU/Gestion-absence-ENS",
      demoVideo: "https://drive.google.com/file/d/19eoYorQPimVH6lmmgELYJKr7TIFKw5rC/view?usp=sharing",
      badgeColor: "green"
    },
    {
      id: "ring-sizer",
      title: "Ring Sizer",
      subtitle: {
        fr: "Application Mobile Bijouterie & Cotation Or Temps Réel",
        en: "Jewelry Ring Calibration & Live Gold Ticker App"
      },
      category: "mobile",
      categoryLabel: {
        fr: "Mobile Flutter",
        en: "Mobile Flutter"
      },
      featured: false,
      tagline: {
        fr: "Mesure millimétrique tactile de bagues et cours financier de l'or.",
        en: "Millimeter tactile ring sizing and live gold market tracker."
      },
      problem: {
        fr: "Incertitude récurrente sur le tour de doigt lors de commandes de bijoux et besoin des artisans de disposer du cours de l'or actualisé en continu.",
        en: "Frequent finger sizing errors during online jewelry purchases and lack of live precious metals pricing for artisans."
      },
      solution: {
        fr: "Application mobile Flutter avec cercle tactile ajustable au dixième de millimètre, interconnectée aux APIs Metals.live pour le cours de l'or en temps réel et backend Laravel pour le catalogue.",
        en: "Flutter application with screen-calibrated ring caliper, synced to Metals.live API for live spot prices and Laravel backend."
      },
      result: {
        fr: "Précision millimétrique sur tous formats d'écrans mobiles, conversion multi-devises et mode hors-ligne avec cache local.",
        en: "Millimeter-grade accuracy across device screen densities, multi-currency conversion, and offline caching."
      },
      technologies: ["Flutter", "Dart", "Laravel", "REST API", "Metals.live API", "MySQL", "Sanctum"],
      metrics: [
        { label: "Précision Calibrage", value: "0.1 mm" },
        { label: "Mise à jour Or", value: "Temps Réel" }
      ],
      github: "https://github.com/RAFIKAITICHOU/Ring-Sizer",
      badgeColor: "amber"
    },
    {
      id: "smartstock",
      title: "SmartStock",
      subtitle: {
        fr: "Gestion de Stock Desktop Robuste & Architecture MVC / DAO",
        en: "Robust Desktop Inventory & MVC / DAO Architecture"
      },
      category: "desktop",
      categoryLabel: {
        fr: "Génie Logiciel & Desktop",
        en: "Software Engineering & Desktop"
      },
      featured: false,
      tagline: {
        fr: "Système de caisse et de gestion logistique d'inventaire sécurisé.",
        en: "Secure point-of-sale inventory and warehouse logistics software."
      },
      problem: {
        fr: "Ruptures de stocks imprévues et erreurs manuelles de saisie des mouvements d'articles dans les points de vente.",
        en: "Unexpected stock shortages and manual human errors in retail warehouse inventory tracking."
      },
      solution: {
        fr: "Application desktop Java/JavaFX respectant strictement les patrons de conception MVC, DAO et Service, avec alertes de seuil critique et transactions ACID MySQL.",
        en: "Java/JavaFX desktop software strictly adhering to MVC, DAO, and Service patterns, with threshold alerts and ACID transactions."
      },
      result: {
        fr: "Cohérence transactionnelle garantie, inventaires automatisés et traçabilité complète des commandes fournisseurs.",
        en: "Guaranteed ACID transactional consistency, automated audits, and supplier purchase order traceability."
      },
      technologies: ["Java", "JavaFX", "FXML", "MySQL", "JDBC", "Pattern MVC/DAO", "Maven"],
      metrics: [
        { label: "Fiabilité", value: "Transactions ACID" },
        { label: "Architecture", value: "MVC + DAO" }
      ],
      github: "https://github.com/RAFIKAITICHOU/SmartStock",
      badgeColor: "blue"
    },
    {
      id: "one-click-ecommerce",
      title: "One Click E-Commerce",
      subtitle: {
        fr: "Plateforme Marchande Complète avec RBAC & Analytics",
        en: "Full E-Commerce Platform with RBAC & Visual Analytics"
      },
      category: "fullstack",
      categoryLabel: {
        fr: "E-Commerce & Gestion",
        en: "E-Commerce & Management"
      },
      featured: false,
      tagline: {
        fr: "Boutique en ligne moderne avec gestion avancée des permissions.",
        en: "Modern online store with advanced role-based access control."
      },
      problem: {
        fr: "Nécessité de gérer simultanément le catalogue client, les commandes, les expéditions et des droits d'accès stricts entre gestionnaires et administrateurs.",
        en: "Need to manage catalog, orders, logistics, and strict permission levels between sales staff and admin users."
      },
      solution: {
        fr: "Plateforme Laravel intégrant Spatie Permissions (RBAC), contrôle des stocks anti-survente, panier AJAX fluide et tableau de bord commercial avec Chart.js.",
        en: "Comprehensive Laravel platform featuring Spatie RBAC permissions, stock-locking checkout, responsive AJAX cart, and Chart.js analytics."
      },
      result: {
        fr: "Expérience d'achat fluide, administration granulaire sécurisée et suivi commercial précis en temps réel.",
        en: "Smooth shopping flow, granular role protection, and accurate real-time business telemetry."
      },
      technologies: ["Laravel PHP", "Spatie Permissions", "MySQL", "Chart.js", "Bootstrap 5", "Blade"],
      metrics: [
        { label: "Sécurité", value: "RBAC Spatie" },
        { label: "Analytics", value: "Graphiques Temps Réel" }
      ],
      github: "https://github.com/RAFIKAITICHOU/Plateforme-E-commerce",
      badgeColor: "rose"
    }
  ],

  skillCategories: [
    {
      id: "backend",
      title: {
        fr: "Backend & Architectures",
        en: "Backend & Architecture"
      },
      icon: "Server",
      description: {
        fr: "Conception de services robustes, sécurisés et hautement disponibles.",
        en: "Designing resilient, secure, and highly available microservices."
      },
      skills: [
        { name: "Spring Boot (Java)", level: "Maîtrisé", usedIn: "Projet OCP Safi (Smart HSE 360) & Smart Parking" },
        { name: "RESTful APIs & Microservices", level: "Maîtrisé", usedIn: "Architectures 4 couches & JWT" },
        { name: "Spring Security & JWT", level: "Maîtrisé", usedIn: "Authentification multi-rôles sécurisée" },
        { name: "Laravel (PHP)", level: "Maîtrisé", usedIn: "Projet absENS & E-Commerce" },
        { name: "Node.js / Express", level: "Pratiqué", usedIn: "Services légers & APIs temps réel" },
        { name: "ASP.NET Core (C#)", level: "Pratiqué", usedIn: "Système de budget entreprise" }
      ]
    },
    {
      id: "frontend-mobile",
      title: {
        fr: "Frontend & Mobile",
        en: "Frontend & Mobile"
      },
      icon: "Layout",
      description: {
        fr: "Interfaces réactives et centrées sur l'expérience utilisateur.",
        en: "Fluid, high-performance, and user-centered interfaces."
      },
      skills: [
        { name: "React & Next.js", level: "Maîtrisé", usedIn: "Smart Parking & Portfolio moderne" },
        { name: "Angular", level: "Maîtrisé", usedIn: "Plateforme industrielle OCP Safi" },
        { name: "Flutter (Dart)", level: "Maîtrisé", usedIn: "Smart HSE 360 & Ring Sizer" },
        { name: "Android Natif (Java)", level: "Maîtrisé", usedIn: "Projet absENS (Stage 6 mois ENS)" },
        { name: "TypeScript / JavaScript ES6+", level: "Maîtrisé", usedIn: "Développement web réactif" }
      ]
    },
    {
      id: "testing-qa",
      title: {
        fr: "Qualité Logicielle, Tests & DevOps",
        en: "QA, Testing & DevOps"
      },
      icon: "ShieldCheck",
      description: {
        fr: "Couverture de tests automatisés, métriques SonarQube et conteneurisation.",
        en: "Automated test suites, SonarQube metrics, and containerization."
      },
      skills: [
        { name: "SonarQube & Clean Code", level: "Maîtrisé", usedIn: "86.8% de couverture validée à l'OCP" },
        { name: "JUnit 5 & Mockito", level: "Maîtrisé", usedIn: "164 tests unitaires industriels" },
        { name: "Selenium WebDriver", level: "Maîtrisé", usedIn: "58 tests E2E automatisés" },
        { name: "Docker & Conteneurisation", level: "Pratiqué", usedIn: "Déploiement MinIO & PostgreSQL" },
        { name: "Git, GitHub & CI/CD", level: "Maîtrisé", usedIn: "Gestion de versions & pipelines" }
      ]
    },
    {
      id: "ai-iot",
      title: {
        fr: "IA, Vision par Ordinateur & IoT",
        en: "AI, Computer Vision & IoT"
      },
      icon: "Cpu",
      description: {
        fr: "Vision artificielle, modèles prédictifs et systèmes embarqués connectés.",
        en: "Artificial vision, predictive models, and connected embedded devices."
      },
      skills: [
        { name: "Python (NumPy, Pandas, Scikit)", level: "Maîtrisé", usedIn: "Certifié IBM Data Science" },
        { name: "OpenCV & YOLOv8", level: "Maîtrisé", usedIn: "Smart Parking & absENS" },
        { name: "Raspberry Pi & Linux Embarqué", level: "Maîtrisé", usedIn: "Stage ENS (Camera station)" },
        { name: "ESP32 & ESP32-CAM", level: "Pratiqué", usedIn: "IoT Smart Parking & Green AI" },
        { name: "Machine Learning / Deep Learning", level: "Pratiqué", usedIn: "Certifié IBM ML & Deep Learning" }
      ]
    },
    {
      id: "databases",
      title: {
        fr: "Bases de Données & Modélisation",
        en: "Databases & Data Management"
      },
      icon: "Database",
      description: {
        fr: "Modélisation relationnelle rigoureuse, transactions ACID et SQL.",
        en: "Relational data modeling, transactions, and SQL query tuning."
      },
      skills: [
        { name: "PostgreSQL", level: "Maîtrisé", usedIn: "Plateforme OCP Safi" },
        { name: "MySQL / MariaDB", level: "Maîtrisé", usedIn: "SmartStock, absENS, E-Commerce" },
        { name: "Modélisation UML / Merise", level: "Maîtrisé", usedIn: "5 profils d'acteurs modélisés OCP" },
        { name: "MinIO (Object Storage)", level: "Pratiqué", usedIn: "Stockage de preuves d'incidents OCP" }
      ]
    }
  ],

  formation: [
    {
      id: "emsi-cycle",
      degree: {
        fr: "Cycle d'Ingénieur d'État en Informatique & Réseaux",
        en: "State Engineering Degree in Computer Science & Networks"
      },
      institution: "École Marocaine des Sciences de l'Ingénieur (EMSI Marrakech)",
      level: "Bac +5 • En cours",
      period: "2025 – 2027",
      status: {
        fr: "En cours • Disponible PFE dès le 25 Janvier 2027",
        en: "In progress • Available for PFE from Jan 25, 2027"
      },
      option: {
        fr: "Option : Développement Digital & Systèmes d'Information",
        en: "Option: Digital Development & Information Systems"
      },
      description: {
        fr: "Formation d'excellence axée sur l'architecture logicielle moderne, les microservices, les technologies Cloud, le DevOps, la sécurité et la conduite de projets agiles.",
        en: "Premier engineering curriculum emphasizing modern software architecture, microservices, cloud tech, DevOps, security, and agile project delivery."
      },
      badges: ["Spring Boot", "Angular", "Flutter", "DevOps", "Microservices", "Docker"]
    },
    {
      id: "fs-licence",
      degree: {
        fr: "Licence Fondamentale en Informatique",
        en: "Bachelor of Science in Computer Science"
      },
      institution: "Université Cadi Ayyad",
      level: "Bac +3 • Obtenue",
      period: "2022 – 2025",
      status: {
        fr: "Diplôme Obtenu avec Mention",
        en: "Graduated with Honors"
      },
      option: {
        fr: "Fondamentaux du Génie Logiciel & Théorie Informatique",
        en: "Core Software Engineering & Computer Theory"
      },
      description: {
        fr: "Solides bases en algorithmique complexe, structures de données avancées, programmation orientée objet (C++, Java), bases de données relationnelles et systèmes d'exploitation.",
        en: "Comprehensive foundation in advanced algorithms, data structures, object-oriented programming (C++, Java), relational databases, and operating systems."
      },
      badges: ["Algorithmique", "POO C++ / Java", "Bases de Données", "Génie Logiciel"]
    }
  ],

  certifications: [
    {
      id: "ibm-cloud",
      title: "IBM Cloud Computing",
      issuer: "IBM / Coursera",
      date: "2025",
      url: "https://www.coursera.org/account/accomplishments/verify/DDYTCNO277Z5",
      icon: "Cloud",
      category: "Cloud",
      description: {
        fr: "Modèles de déploiement Cloud (IaaS, PaaS, SaaS), conteneurisation, sécurité Cloud et architectures hybrides.",
        en: "Cloud delivery models (IaaS, PaaS, SaaS), containerization, cloud security, and hybrid enterprise architectures."
      }
    },
    {
      id: "ibm-python-ds",
      title: "IBM Python for Data Science",
      issuer: "IBM / Cognitive Class",
      date: "2025",
      url: "https://courses.cognitiveclass.ai/certificates/3ae309edca284d1b9675678083f0fed1",
      icon: "Code",
      category: "Data & IA",
      description: {
        fr: "Traitement de données avec Pandas et NumPy, calcul vectoriel, web scraping et analyse statistique.",
        en: "Data manipulation with Pandas & NumPy, vectorized calculation, web scraping, and exploratory analysis."
      }
    },
    {
      id: "ibm-ds-orientation",
      title: "IBM Data Science Orientation",
      issuer: "IBM / Credly",
      date: "2025",
      url: "https://www.credly.com/badges/e9e3adbe-ea3b-4769-af58-81ebf63769fa/linked_in_profile",
      icon: "BarChart3",
      category: "Data & IA",
      description: {
        fr: "Cycle de vie complet des données, méthodologie Data Science IBM et exploitation prédictive.",
        en: "Full data science lifecycle, IBM data methodologies, and predictive intelligence modeling."
      }
    },
    {
      id: "ibm-ml",
      title: "IBM Machine Learning with Python",
      issuer: "IBM / Cognitive Class",
      date: "2025",
      url: "https://courses.cognitiveclass.ai/certificates/0c168144a0914975bab82beedfc51d2f",
      icon: "Brain",
      category: "IA",
      description: {
        fr: "Algorithmes de régression, classification (SVM, Arbres), clustering (K-Means) et évaluation de modèles avec Scikit-learn.",
        en: "Regression, classification algorithms (SVM, Decision Trees), clustering (K-Means), and model evaluation with Scikit-learn."
      }
    },
    {
      id: "ibm-dl",
      title: "IBM Deep Learning Fundamentals",
      issuer: "IBM / Credly",
      date: "2025",
      url: "https://www.credly.com/badges/46b3a29c-f081-43cb-8850-b7775dc109e6/linked_in_profile",
      icon: "Network",
      category: "IA",
      description: {
        fr: "Réseaux neuronaux convolutifs (CNN), fonctions d'activation, rétropropagation et vision par ordinateur.",
        en: "Convolutional Neural Networks (CNNs), activation functions, backpropagation, and deep vision foundations."
      }
    }
  ],

  objectives: {
    immediate: {
      title: {
        fr: "Objectif Immédiat : Stage PFE 2027",
        en: "Immediate Objective: PFE Internship 2027"
      },
      subtitle: {
        fr: "Démarrage dès le 25 janvier 2027 • Durée de 4 à 6 mois",
        en: "Starting Jan 25, 2027 • 4 to 6 months duration"
      },
      description: {
        fr: "Intégrer une entreprise ambitieuse, un éditeur logiciel ou un pôle R&D de premier plan pour concevoir et déployer une solution technologique de bout en bout.",
        en: "Join an innovative enterprise, tech scale-up, or leading R&D division to architect and deliver an end-to-end mission-critical software solution."
      },
      points: [
        {
          fr: "Concevoir une architecture Full-Stack, Cloud ou Mobile résiliente (Spring Boot, Angular, React, Flutter, Microservices).",
          en: "Architect a resilient Full-Stack, Cloud, or Mobile platform (Spring Boot, Angular, React, Flutter, Microservices)."
        },
        {
          fr: "Appliquer les plus hauts standards d'ingénierie : TDD, couverture de tests (JUnit, Selenium), SonarQube, conteneurisation Docker et CI/CD.",
          en: "Apply top-tier engineering standards: TDD, high test coverage (JUnit, Selenium), SonarQube, Docker containerization, and CI/CD."
        },
        {
          fr: "Livrer une valeur d'usage quantifiable pour les utilisateurs finaux et les équipes opérationnelles.",
          en: "Deliver measurable business value for end users and operational teams."
        },
        {
          fr: "Opportunité de pré-embauche et intégration à long terme au sein des équipes d'ingénierie.",
          en: "Opportunity for post-internship hiring and long-term integration in core engineering teams."
        }
      ]
    },
    longTerm: {
      title: {
        fr: "Vision & Évolution de Carrière",
        en: "Long-Term Vision & Career Track"
      },
      subtitle: {
        fr: "Architecte Logiciel & Ingénieur Systèmes Distribués / IA",
        en: "Software Architect & Distributed Systems / AI Engineer"
      },
      description: {
        fr: "Évoluer vers des responsabilités d'architecte logiciel capable d'orchestrer des plateformes à haute échelle, combinant fiabilité backend, microservices, cloud et intelligence artificielle décisionnelle.",
        en: "Evolve into a software architect orchestrating high-scale platforms, merging backend resiliency, microservices, cloud technologies, and predictive machine intelligence."
      },
      points: [
        {
          fr: "Maîtrise approfondie des architectures Cloud Native (AWS, GCP, Kubernetes, Kafka, Serverless).",
          en: "Deep mastery of Cloud Native architectures (AWS, GCP, Kubernetes, Kafka, Serverless)."
        },
        {
          fr: "Renforcement continu en cybersécurité applicative, DevSecOps et sécurité des APIs (OWASP).",
          en: "Continuous focus on application cybersecurity, DevSecOps, and API security (OWASP)."
        },
        {
          fr: "Déploiement de pipelines MLOps pour intégrer l'IA et la vision par ordinateur directement en production.",
          en: "Deployment of MLOps pipelines to integrate AI and computer vision models into production."
        },
        {
          fr: "Contribution active aux communautés open-source, mentorat technique et transmission du savoir.",
          en: "Active open-source contributions, technical mentoring, and knowledge sharing."
        }
      ]
    }
  },

  uiText: {
    fr: {
      nav: {
        home: "Accueil",
        about: "À propos",
        formation: "Formation",
        certifications: "Certifications",
        experience: "Expérience",
        projects: "Projets",
        skills: "Compétences",
        objectives: "Objectifs",
        contact: "Contact",
        cvButton: "Télécharger CV",
        scheduleShort: "15 min"
      },
      recruiter: {
        welcomePrefix: "Bienvenue à l'équipe",
        welcomeSuffix: "Ravi de votre visite ! Je suis activement disponible pour un stage PFE dès le 25 janvier 2027.",
        bookCall: "Planifier un échange de 15 min"
      },
      hero: {
        greeting: "Ingénieur d'État en Informatique",
        ctaContact: "Me Contacter",
        ctaDownloadCv: "Télécharger mon CV (PDF)",
        ctaSchedule: "Planifier un échange (15 min)",
        badgePfe: "Stage PFE · 4 à 6 mois · Dès le 25 janvier 2027",
        scrollDown: "Découvrir mon profil",
        statusActive: "Disponible pour PFE"
      },
      home: {
        pfeStatusTitle: "Statut & Disponibilité PFE",
        pfeDetailsLabel: "Stage PFE :",
        pfeDetailsVal: "Dès le 25 janvier 2027 (4 à 6 mois)",
        dualDegreeLabel: "Formation :",
        dualDegreeVal: "Cycle Ingénieur d'État à l'EMSI Marrakech (Promo 2027)",
        mobilityLabel: "Mobilité :",
        mobilityVal: "Maroc (Casablanca, Rabat, etc.) & International",
        featuredTitle: "Projets Phares & Études de Cas",
        featuredSubtitle: "Mises en situation industrielle réelles avec code vérifiable",
        viewAllProjects: "Voir tous les projets (15+)",
        viewCaseStudy: "Consulter l'étude de cas",
        exploreSectionsTitle: "Explorez mon profil par rubrique",
        exploreSectionsSubtitle: "Chaque section dispose d'une page dédiée complète détaillant mes réalisations et compétences.",
        ctaBannerTitle: "Une opportunité de stage PFE dès Janvier 2027 ?",
        ctaBannerSubtitle: "Je suis activement à l'écoute des opportunités pour concevoir des architectures pérennes et innovantes."
      },
      about: {
        badge: "Profil & Vision",
        title: "L'exigence d'ingénierie logicielle au service de la performance",
        subtitle: "De l'industrie lourde (OCP Safi) aux systèmes intelligents et à la recherche appliquée",
        downloadCv: "Obtenir mon CV (PDF)",
        contactMe: "Démarrer une conversation",
        keyStrengthsTitle: "Pourquoi me recruter en PFE ?",
        strengths: [
          {
            title: "Culture Qualité & Tests Industriels",
            desc: "222 tests automatisés (JUnit 5, Mockito, Selenium) et 86.8% de couverture SonarQube sur un projet d'envergure OCP."
          },
          {
            title: "Double Compétence Software & IA/IoT",
            desc: "Capacité à concevoir à la fois une architecture logicielle robuste et d'y intégrer vision artificielle ou capteurs connectés."
          },
          {
            title: "Leadership Associatif & Agile",
            desc: "Président du club technologique E-TEAM ENS, coordination de projets, formation et transmission technique."
          },
          {
            title: "Disponibilité Immédiate PFE 2027",
            desc: "Disponible dès le 25 janvier 2027 pour un stage de fin d'études de 4 à 6 mois au Maroc ou à l'international."
          }
        ]
      },
      projects: {
        badge: "Réalisations Concrètes",
        title: "Projets & Études de Cas Techniques",
        subtitle: "Chaque projet répond à une problématique industrielle ou sociétale réelle avec code source vérifiable",
        filterAll: "Tous les projets",
        filterFullstack: "Web & Full-Stack",
        filterMobile: "Mobile",
        filterIot: "IA & IoT",
        filterDesktop: "Industriel & Systèmes",
        searchPlaceholder: "Rechercher une technologie, un mot-clé...",
        noResults: "Aucun projet ne correspond à votre recherche.",
        viewDetails: "Étude de cas complète",
        codeSource: "Code GitHub",
        demoVideo: "Démo Vidéo"
      },
      experience: {
        badge: "Parcours Professionnel",
        title: "Expériences & Responsabilités",
        subtitle: "Mises en situation industrielle réelles, encadrement technique et gouvernance",
        officialAttestation: "Attestation officielle délivrée"
      },
      skills: {
        badge: "Savoir-Faire Technique",
        title: "Compétences & Stack Technologique",
        subtitle: "Niveaux de compétence validés en milieu industriel et en projets d'ingénierie",
        levelMastered: "Maîtrisé (Production & Stage)",
        levelPracticed: "Pratiqué (Projets avancés)",
        levelLearning: "En approfondissement"
      },
      formation: {
        badge: "Cursus Académique",
        title: "Formation & Diplômes",
        subtitle: "Cursus d'excellence : Cycle Ingénieur d'État à l'EMSI et Licence en Informatique"
      },
      certifications: {
        badge: "Accréditations",
        title: "Certifications Officielles",
        subtitle: "Parcours d'expertise validés auprès d'IBM, Coursera et Credly",
        verifyCredential: "Vérifier l'accréditation"
      },
      objectives: {
        badge: "Vision d'Avenir",
        title: "Objectifs & Vision d'Ingénieur",
        subtitle: "Ambitions pour mon stage PFE 2027 et trajectoire d'ingénierie logicielle"
      },
      contact: {
        badge: "Prendre Contact",
        title: "Discutons de votre opportunité",
        subtitle: "Une proposition de stage PFE, un projet innovant ou un échange technique ? Je vous réponds sous 24h.",
        directEmail: "Email Direct",
        phoneWhatsapp: "WhatsApp & Téléphone",
        linkedin: "Profil LinkedIn",
        github: "Dépôts GitHub",
        formName: "Votre Nom complet",
        formEmail: "Votre Adresse Email",
        formSubject: "Sujet de votre message",
        formSubjectPlaceholder: "Proposition de stage PFE – [Entreprise]",
        formMessage: "Votre Message",
        formMessagePlaceholder: "Bonjour Rafik, nous avons découvert votre profil et souhaitons échanger...",
        formSubmit: "Envoyer le message",
        formSuccess: "Message préparé avec succès ! Votre client mail s'ouvre...",
        copyEmail: "Copier l'email",
        copied: "Copié dans le presse-papier !"
      },
      footer: {
        rights: "Tous droits réservés.",
        designedWith: "Conçu avec React, Vite & Design System d'Ingénierie.",
        backToTop: "Haut de page"
      }
    },
    en: {
      nav: {
        home: "Home",
        about: "About",
        formation: "Education",
        certifications: "Certifications",
        experience: "Experience",
        projects: "Projects",
        skills: "Skills",
        objectives: "Objectives",
        contact: "Contact",
        cvButton: "Download Resume",
        scheduleShort: "15 min"
      },
      recruiter: {
        welcomePrefix: "Welcome to the",
        welcomeSuffix: "team! Delighted to connect. I am available for a graduation internship starting Jan 25, 2027.",
        bookCall: "Schedule a 15-min Call"
      },
      hero: {
        greeting: "State Computer Science Engineer",
        ctaContact: "Get in Touch",
        ctaDownloadCv: "Download Resume (PDF)",
        ctaSchedule: "Book 15-min Call",
        badgePfe: "Graduation Internship · 4 to 6 months · From Jan 25, 2027",
        scrollDown: "Discover my profile",
        statusActive: "Available for PFE"
      },
      home: {
        pfeStatusTitle: "Status & PFE Availability",
        pfeDetailsLabel: "PFE Internship:",
        pfeDetailsVal: "Starting Jan 25, 2027 (4 to 6 months)",
        dualDegreeLabel: "Education:",
        dualDegreeVal: "State Engineering Degree at EMSI Marrakech (Class of 2027)",
        mobilityLabel: "Mobility:",
        mobilityVal: "Morocco (Casablanca, Rabat, etc.) & Worldwide",
        featuredTitle: "Featured Industrial Projects",
        featuredSubtitle: "Real-world industrial case studies with verifiable source code",
        viewAllProjects: "View all projects (15+)",
        viewCaseStudy: "View Case Study",
        exploreSectionsTitle: "Explore My Profile Sections",
        exploreSectionsSubtitle: "Each section has a dedicated in-depth page covering my achievements and capabilities.",
        ctaBannerTitle: "Looking for a 2027 Graduation Intern?",
        ctaBannerSubtitle: "I am actively exploring graduation internship opportunities to architect resilient and innovative platforms."
      },
      about: {
        badge: "Profile & Vision",
        title: "Software Engineering Discipline in Service of High Performance",
        subtitle: "From heavy industrial operations (OCP Safi) to smart systems and applied research",
        downloadCv: "Download Resume (PDF)",
        contactMe: "Start a Conversation",
        keyStrengthsTitle: "Why Hire Me for Your PFE Internship?",
        strengths: [
          {
            title: "Quality Culture & Industrial Testing",
            desc: "222 automated tests (JUnit 5, Mockito, Selenium) and 86.8% SonarQube coverage on an industrial OCP project."
          },
          {
            title: "Dual Core: Software & AI/IoT",
            desc: "Ability to design solid backend microservices architecture and connect computer vision models or embedded sensors."
          },
          {
            title: "Agile Leadership & Mentorship",
            desc: "President of E-TEAM ENS tech club, cross-functional project management, workshops and technical mentoring."
          },
          {
            title: "Immediate 2027 Availability",
            desc: "Available starting January 25, 2027 for a 4 to 6-month final graduation internship in Morocco or worldwide."
          }
        ]
      },
      projects: {
        badge: "Demonstrated Work",
        title: "Featured Projects & Case Studies",
        subtitle: "Engineered to solve real industrial and operational challenges with verifiable source code",
        filterAll: "All Projects",
        filterFullstack: "Web & Full-Stack",
        filterMobile: "Mobile",
        filterIot: "AI & IoT",
        filterDesktop: "Industrial & Systems",
        searchPlaceholder: "Search by technology, keyword...",
        noResults: "No projects match your search criteria.",
        viewDetails: "Full Case Study",
        codeSource: "GitHub Code",
        demoVideo: "Video Demo"
      },
      experience: {
        badge: "Career Track",
        title: "Professional Experience & Roles",
        subtitle: "Real industrial track record, technical mentoring, and leadership roles",
        officialAttestation: "Official Certificate Delivered"
      },
      skills: {
        badge: "Technical Arsenal",
        title: "Skills & Technology Stack",
        subtitle: "Skill levels validated through real industrial deployment and engineering coursework",
        levelMastered: "Mastered (Production & Internship)",
        levelPracticed: "Proficient (Advanced Projects)",
        levelLearning: "Deepening Knowledge"
      },
      formation: {
        badge: "Academic Degrees",
        title: "Education & Degrees",
        subtitle: "Premier academic degree track: EMSI State Engineering Degree & Computer Science Bachelor"
      },
      certifications: {
        badge: "Official Credentials",
        title: "Professional Certifications",
        subtitle: "Verified accreditations through IBM, Coursera and Credly",
        verifyCredential: "Verify Credential"
      },
      objectives: {
        badge: "Future Vision",
        title: "Engineering Objectives & Vision",
        subtitle: "Ambitions for my 2027 graduation internship and long-term software career"
      },
      contact: {
        badge: "Get in Touch",
        title: "Let's discuss opportunities",
        subtitle: "PFE internship proposal, technical project, or professional discussion? I reply within 24h.",
        directEmail: "Direct Email",
        phoneWhatsapp: "WhatsApp & Phone",
        linkedin: "LinkedIn Profile",
        github: "GitHub Repositories",
        formName: "Your Full Name",
        formEmail: "Your Email Address",
        formSubject: "Message Subject",
        formSubjectPlaceholder: "PFE Internship Proposal – [Company]",
        formMessage: "Your Message",
        formMessagePlaceholder: "Hello Rafik, we came across your profile and would like to discuss...",
        formSubmit: "Send Message",
        formSuccess: "Message ready! Opening your email client...",
        copyEmail: "Copy email",
        copied: "Copied to clipboard!"
      },
      footer: {
        rights: "All rights reserved.",
        designedWith: "Crafted with React, Vite & Engineering Design System.",
        backToTop: "Back to top"
      }
    }
  }
};
