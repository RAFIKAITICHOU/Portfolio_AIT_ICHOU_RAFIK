export const portfolioData = {
  personal: {
    name: "Rafik AIT ICHOU",
    shortName: "Rafik AIT ICHOU",
    brandText: "ICHOU.IT",
    title: {
      fr: "Ingénieur Logiciel & Systèmes d'Information",
      en: "Software Engineer & Information Systems"
    },
    subTitleSchool: {
      fr: "Élève-Ingénieur en Informatique et Réseaux — EMSI Marrakech",
      en: "Engineering Student in Computer Science & Networks — EMSI Marrakech"
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
      value: "12+",
      label: {
        fr: "Certifications",
        en: "Certifications"
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
      driveFolder: "https://drive.google.com/drive/folders/1kznI-PHwd0wVVJ7UhIhVUS4BJYekIKI3?usp=sharing",
      demoVideo: "https://drive.google.com/drive/folders/1kznI-PHwd0wVVJ7UhIhVUS4BJYekIKI3?usp=sharing",
      demoVideos: [
        {
          version: "Drive",
          label: {
            fr: "Dossier Drive",
            en: "Drive Folder"
          },
          title: {
            fr: "Dossier Projet & Livrables Smart HSE OCP (Google Drive)",
            en: "Smart HSE OCP Deliverables & Project Folder (Google Drive)"
          },
          url: "https://drive.google.com/drive/folders/1kznI-PHwd0wVVJ7UhIhVUS4BJYekIKI3?usp=sharing",
          platform: "drive"
        }
      ],
      logo: "/assets/logo-application-HSE.png",
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
      driveFolder: "https://drive.google.com/drive/folders/1omjmNUCkTl-uDf6JYT8t_iAA7VpXX-0r",
      demoVideo: "https://drive.google.com/drive/folders/1omjmNUCkTl-uDf6JYT8t_iAA7VpXX-0r",
      demoVideos: [
        {
          version: "Drive",
          label: {
            fr: "Dossier Drive",
            en: "Drive Folder"
          },
          title: {
            fr: "Dossier Projet Gestion des Parkings 2026 (Google Drive)",
            en: "Smart Parking 2026 Project Folder (Google Drive)"
          },
          url: "https://drive.google.com/drive/folders/1omjmNUCkTl-uDf6JYT8t_iAA7VpXX-0r",
          platform: "drive"
        }
      ],
      logo: "/assets/logo-application-Smart-Parking.png",
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
      demoVideos: [
        {
          version: "V1",
          label: {
            fr: "Démo V1",
            en: "Demo V1"
          },
          title: {
            fr: "Démo V1 (1ère version de l'app)",
            en: "Demo V1 (1st version of the app)"
          },
          url: "https://drive.google.com/file/d/19eoYorQPimVH6lmmgELYJKr7TIFKw5rC/view?usp=sharing",
          platform: "drive"
        },
        {
          version: "V2",
          label: {
            fr: "Démo V2",
            en: "Demo V2"
          },
          title: {
            fr: "Démo V2 (2ème version de l'app - YouTube)",
            en: "Demo V2 (2nd version of the app - YouTube)"
          },
          url: "https://www.youtube.com/watch?v=AU7alNtM8Ls",
          embedUrl: "https://www.youtube.com/embed/AU7alNtM8Ls",
          platform: "youtube"
        }
      ],
      logo: "/assets/logo-application-absens.svg",
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
      demoVideo: "https://youtube.com/shorts/ZQd7P4ZGUhM?feature=share",
      demoVideos: [
        {
          version: "Démo",
          label: {
            fr: "Démo Vidéo (Shorts)",
            en: "Demo Video (Shorts)"
          },
          title: {
            fr: "Démonstration Tactile Ring Sizer (YouTube Shorts)",
            en: "Ring Sizer Tactile Demo (YouTube Shorts)"
          },
          url: "https://youtube.com/shorts/ZQd7P4ZGUhM?feature=share",
          embedUrl: "https://www.youtube.com/embed/ZQd7P4ZGUhM",
          platform: "youtube"
        }
      ],
      logo: "/assets/logo-application-ring-sizer.svg",
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
      logo: "/assets/logo-application-smartstock.svg",
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
      logo: "/assets/logo-application-ecommerce.svg",
      badgeColor: "rose"
    },
    {
      id: "masarat-gestion-marchandises",
      title: "Ma'sarat al-Rahma – Gestion de Marchandises",
      subtitle: {
        fr: "Plateforme Sécurisée de Ventes, Stock, Facturation & Règlements",
        en: "Secure Sales, Inventory, Invoicing & Payments Platform"
      },
      category: "fullstack",
      categoryLabel: {
        fr: "Web Full-Stack • Gestion Commerciale",
        en: "Full-Stack Web • Business Management"
      },
      featured: true,
      tagline: {
        fr: "Gestion commerciale et logistique complète, bilingue FR/AR (RTL), avec contrôle d'accès fin et traçabilité d'audit.",
        en: "Complete bilingual FR/AR (RTL) commercial and logistics management with fine-grained access control and full audit trail."
      },
      problem: {
        fr: "Une huilerie (ma'sara) gérait ventes, stocks, créances clients et avances salariés sur des supports dispersés, avec des risques d'erreurs de tarification, de dépassement de crédit client et de perte de traçabilité.",
        en: "An olive-oil mill managed sales, stock, customer receivables and employee advances across scattered tools, with risks of pricing errors, credit overruns and lost traceability."
      },
      solution: {
        fr: "Application Laravel 11 / Livewire 3 conteneurisée avec Docker : circuit de vente à double étage (vendeur → validation direction), tarification contrôlée, plafonds de crédit, validation des règlements avec reçus PDF, avances salariés, approvisionnements, 2FA TOTP, notifications temps réel (Laravel Reverb), factures A4/A5/ticket 80 mm et sauvegardes Google Drive.",
        en: "Dockerized Laravel 11 / Livewire 3 app: two-step sales workflow (seller → management validation), controlled pricing, credit limits, payment validation with PDF receipts, employee advances, purchasing, TOTP 2FA, real-time notifications (Laravel Reverb), A4/A5/80 mm invoices and Google Drive backups."
      },
      result: {
        fr: "153 tests automatisés (699 assertions) sans échec, séparation stricte des rôles (RBAC/ABAC), numérotation fiscale séquentielle sans trou (verrous pessimistes) et bilinguisme FR/AR natif.",
        en: "153 automated tests (699 assertions) all passing, strict role separation (RBAC/ABAC), gap-free sequential invoice numbering (pessimistic locks) and native FR/AR bilingual support."
      },
      technologies: ["Laravel 11", "Livewire 3", "Tailwind CSS", "MySQL", "Redis", "Docker", "Laravel Reverb", "Spatie Permission", "mPDF / DomPDF", "Chart.js"],
      metrics: [
        { label: "Tests Automatisés", value: "153 Tests" },
        { label: "Assertions", value: "699" },
        { label: "Sécurité", value: "RBAC + ABAC + 2FA" },
        { label: "Langues", value: "FR / AR (RTL)" }
      ],
      github: "https://github.com/masaratalrahma/gestion-marchandises",
      logo: "/assets/logo-application-masarat.svg",
      badgeColor: "green"
    },
    {
      id: "mes-cheques",
      title: "MesChèques (شيكاتي)",
      subtitle: {
        fr: "Gestion & Traçabilité des Chèques Bancaires — Mobile Offline-First",
        en: "Bank Cheque Management & Traceability — Offline-First Mobile App"
      },
      category: "mobile",
      categoryLabel: {
        fr: "Mobile Flutter • Android & iOS",
        en: "Mobile Flutter • Android & iOS"
      },
      featured: false,
      tagline: {
        fr: "Suivi du cycle de vie des chèques émis, reçus et endossés, en français et en arabe (RTL).",
        en: "Lifecycle tracking of issued, received and endorsed cheques, in French and Arabic (RTL)."
      },
      problem: {
        fr: "Les commerçants suivent leurs chèques (échéances, endossements, impayés) sur papier ou tableurs, avec des risques d'oubli, de perte de justificatifs et de confusion entre donneur, titulaire et bénéficiaire.",
        en: "Merchants track cheques (due dates, endorsements, bounced items) on paper or spreadsheets, risking missed deadlines, lost proofs and confusion between giver, holder and payee."
      },
      solution: {
        fr: "Application Flutter offline-first (SQLite) : photos recto/verso, tableau de bord, recherche normalisée FR/AR, corbeille 15 jours, verrouillage PIN + biométrie, stockage chiffré, sauvegarde Google Drive avec fusion sans perte (tombstones, drop protection) et exports PDF.",
        en: "Offline-first Flutter app (SQLite): front/back photos, dashboard, normalized FR/AR search, 15-day trash, PIN + biometric lock, encrypted storage, Google Drive backup with lossless merge (tombstones, drop protection) and PDF exports."
      },
      result: {
        fr: "63 tests automatisés, interface bilingue RTL/LTR, synchronisation cloud sans perte de données et fiches chèques imprimables.",
        en: "63 automated tests, bilingual RTL/LTR UI, lossless cloud sync and printable cheque sheets."
      },
      technologies: ["Flutter", "Dart", "SQLite (sqflite)", "Provider", "Google Drive API", "Workmanager", "flutter_secure_storage", "local_auth", "pdf / printing"],
      metrics: [
        { label: "Tests Automatisés", value: "63 Tests" },
        { label: "Sécurité", value: "PIN + Biométrie" },
        { label: "Langues", value: "FR / AR (RTL)" },
        { label: "Mode", value: "Offline-First" }
      ],
      github: "https://github.com/RAFIKAITICHOU/MesCheques",
      logo: "/assets/logo-application-mescheques.svg",
      badgeColor: "amber"
    },
    {
      id: "guidely",
      title: "Guidely",
      subtitle: {
        fr: "Assistant Mobile des Visiteurs — Maroc 2030 (Architecture Microservices)",
        en: "Visitor Assistant Mobile App — Morocco 2030 (Microservices Architecture)"
      },
      category: "mobile",
      categoryLabel: {
        fr: "Mobile & Microservices • En conception",
        en: "Mobile & Microservices • In design"
      },
      featured: false,
      tagline: {
        fr: "Traduction de photos, phrases en darija, packs hors ligne, estimation de taxi et partage de position entre amis.",
        en: "Photo translation, Darija phrases, offline packs, indicative taxi estimates and friend location sharing."
      },
      problem: {
        fr: "Pendant la Coupe du monde 2030, les visiteurs font face à des panneaux en arabe, à une langue du quotidien en darija, à des informations dispersées et à une connexion instable autour des stades et fan zones.",
        en: "During the 2030 World Cup, visitors face Arabic signage, Darija-speaking daily life, scattered information and unreliable connectivity around stadiums and fan zones."
      },
      solution: {
        fr: "Application mobile (Flutter) adossée à une passerelle API et 5 microservices (authentification, contenu local, traduction, taxi, groupes) conteneurisés avec Docker Compose. Packs de contenu téléchargeables pour le mode avion, OCR + traduction avec correction du texte reconnu, estimation de taxi uniquement à partir de références vérifiées, et partage de position avec consentement et expiration automatique.",
        en: "Mobile app (Flutter) backed by an API gateway and 5 microservices (auth, local content, translation, taxi, groups) containerized with Docker Compose. Downloadable offline packs, OCR + translation with user correction of recognized text, taxi estimates only from verified references, and consent-based location sharing with automatic expiry."
      },
      result: {
        fr: "Cahier des charges complet réalisé en équipe de 5 sur un cadre Scrum de 8 semaines : exigences MoSCoW, architecture microservices, stratégie de tests et de sécurité (OWASP), registre de 14 risques et planning en 4 sprints.",
        en: "Complete specification delivered by a team of 5 within an 8-week Scrum framework: MoSCoW requirements, microservices architecture, testing and security strategy (OWASP), 14-risk register and 4-sprint plan."
      },
      technologies: ["Flutter", "Microservices", "FastAPI / Node.js", "PostgreSQL", "Redis", "SQLite", "Docker Compose", "OpenAPI", "Scrum"],
      metrics: [
        { label: "Équipe", value: "5 étudiants" },
        { label: "Durée", value: "8 semaines" },
        { label: "Architecture", value: "5 services + passerelle" },
        { label: "Statut", value: "Cahier des charges validé" }
      ],
      logo: "/assets/logo-application-guidely.svg",
      animatedLoader: "/assets/guidely-loader-animated-blanc.html",
      badgeColor: "red"
    },
    {
      id: "olive-disease-audit",
      title: "Diagnostic des Maladies de l'Olivier",
      subtitle: {
        fr: "Audit de Datasets & Préparation d'un Classifieur YOLOv8",
        en: "Dataset Audit & YOLOv8 Classifier Preparation"
      },
      category: "iot",
      categoryLabel: {
        fr: "IA & Deep Learning • Data Quality",
        en: "AI & Deep Learning • Data Quality"
      },
      featured: false,
      tagline: {
        fr: "Audit rigoureux de 4 354 images et de données hyperspectrales avant tout entraînement.",
        en: "Rigorous audit of 4,354 images and hyperspectral data before any training."
      },
      problem: {
        fr: "Entraîner un modèle de diagnostic phytosanitaire sur des données non contrôlées expose à des doublons partagés entre train et test, à des labels ambigus et à des résultats artificiellement optimistes.",
        en: "Training a plant-disease model on unchecked data exposes it to duplicates shared across train and test, ambiguous labels and artificially optimistic results."
      },
      solution: {
        fr: "Chaîne d'audit reproductible en Python (Pillow, NumPy, openpyxl) : empreintes SHA-256 et pixels, hash perceptuel DCT, contrôle de cohérence du classeur hyperspectral (138 bandes), dépistage visuel sur 69 planches-contact et protocole de nettoyage et de partitionnement par groupes. YOLOv8-cls retenu pour la phase de modélisation.",
        en: "Reproducible Python audit pipeline (Pillow, NumPy, openpyxl): SHA-256 and pixel fingerprints, DCT perceptual hashing, hyperspectral workbook consistency checks (138 bands), visual screening on 69 contact sheets, and a grouped cleaning and splitting protocol. YOLOv8-cls selected for the modeling phase."
      },
      result: {
        fr: "55 groupes de doublons détectés entre le train et le test du dataset CNN (fuite de données), 3 275 contenus RGB distincts sur 3 400 fichiers, et plan de nettoyage documenté. Phase d'entraînement à venir.",
        en: "55 duplicate groups found across the CNN dataset's train and test splits (data leakage), 3,275 distinct RGB contents out of 3,400 files, and a documented cleaning plan. Training phase upcoming."
      },
      technologies: ["Python", "Pillow", "NumPy", "openpyxl", "YOLOv8 (Ultralytics)", "Hyperspectral data", "LaTeX"],
      metrics: [
        { label: "Images Auditées", value: "4 354" },
        { label: "Doublons Train/Test", value: "55 groupes" },
        { label: "Variables Spectrales", value: "1 518" },
        { label: "Statut", value: "Audit terminé" }
      ],
      logo: "/assets/logo-application-olive-audit.svg",
      badgeColor: "green"
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
        fr: "Licence en Informatique",
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
    // IBM
    {
      id: "ibm-cloud",
      title: "IBM – Cloud Computing",
      issuer: "IBM / Coursera",
      org: "ibm",
      date: "2025",
      url: "https://www.coursera.org/account/accomplishments/verify/DDYTCNO277Z5",
      icon: "cloud",
      category: "Cloud",
      description: {
        fr: "Modèles de déploiement Cloud (IaaS, PaaS, SaaS), conteneurisation, sécurité Cloud et architectures hybrides d'entreprise.",
        en: "Cloud delivery models (IaaS, PaaS, SaaS), containerization, cloud security, and enterprise hybrid architectures."
      }
    },
    {
      id: "ibm-python",
      title: "IBM – Python",
      issuer: "IBM / Cognitive Class",
      org: "ibm",
      date: "2025",
      url: "https://courses.cognitiveclass.ai/certificates/3ae309edca284d1b9675678083f0fed1",
      icon: "python",
      category: "Data & IA",
      description: {
        fr: "Programmation Python pour la Data Science, manipulation avancée avec Pandas et NumPy, calcul vectoriel et structures algorithmiques.",
        en: "Python programming for data science, advanced manipulation with Pandas and NumPy, vectorized computing, and algorithmic structures."
      }
    },
    {
      id: "ibm-data-science",
      title: "IBM – Data Science",
      issuer: "IBM / Credly",
      org: "ibm",
      date: "2025",
      url: "https://www.credly.com/badges/e9e3adbe-ea3b-4769-af58-81ebf63769fa/linked_in_profile",
      icon: "barchart3",
      category: "Data & IA",
      description: {
        fr: "Méthodologie officielle IBM en science des données, cycle de vie complet des données, analyse statistique exploratoire et modélisation prédictive.",
        en: "Official IBM data science methodology, complete data lifecycle, exploratory statistical analysis, and predictive modeling."
      }
    },
    {
      id: "ibm-machine-learning",
      title: "IBM – Machine Learning",
      issuer: "IBM / Cognitive Class",
      org: "ibm",
      date: "2025",
      url: "https://courses.cognitiveclass.ai/certificates/0c168144a0914975bab82beedfc51d2f",
      icon: "brain",
      category: "IA",
      description: {
        fr: "Algorithmes de régression, classification supervisée (SVM, arbres de décision), clustering non-supervisé (K-Means) et métriques d'évaluation Scikit-learn.",
        en: "Regression algorithms, supervised classification (SVM, decision trees), unsupervised clustering (K-Means), and Scikit-learn model evaluation."
      }
    },
    {
      id: "ibm-deep-learning",
      title: "IBM – Deep Learning",
      issuer: "IBM / Credly",
      org: "ibm",
      date: "2025",
      url: "https://www.credly.com/badges/46b3a29c-f081-43cb-8850-b7775dc109e6/linked_in_profile",
      icon: "network",
      category: "IA",
      description: {
        fr: "Réseaux neuronaux profonds (CNN, feedforward), fonctions d'activation, rétropropagation du gradient et applications en vision par ordinateur.",
        en: "Deep neural networks (CNN, feedforward), activation functions, gradient backpropagation, and computer vision applications."
      }
    },
    {
      id: "ibm-nosql",
      title: "IBM – NoSQL",
      issuer: "IBM / Coursera",
      org: "ibm",
      date: "2025",
      url: "https://www.coursera.org/account/accomplishments/verify/I48YAKN2P6CT",
      icon: "database",
      category: "Bases de Données",
      description: {
        fr: "Conception et requêtage de bases NoSQL (MongoDB, Cloudant, Cassandra), modélisation orientée documents, scalabilité horizontale et agrégations JSON.",
        en: "Design and querying of NoSQL databases (MongoDB, Cloudant, Cassandra), document-oriented modeling, horizontal scaling, and JSON aggregations."
      }
    },

    // Cognitive Class
    {
      id: "cognitive-data-science",
      title: "Data Science",
      issuer: "Cognitive Class",
      org: "cognitive",
      date: "2025",
      url: "https://courses.cognitiveclass.ai/certificates/1c5ead0a86554885b0c11688e80e0e9a",
      icon: "barchart3",
      category: "Data & IA",
      description: {
        fr: "Fondements de la science des données, structuration de jeux de données volumineux, data cleaning et analyse visuelle exploratoire.",
        en: "Core data science principles, large dataset structuring, data cleaning workflows, and exploratory visual analytics."
      }
    },
    {
      id: "cognitive-sql-databases",
      title: "SQL & Databases",
      issuer: "Cognitive Class",
      org: "cognitive",
      date: "2025",
      url: "https://courses.cognitiveclass.ai/certificates/c9ba59bf7eb349bda046377e0ca115aa",
      icon: "database",
      category: "Bases de Données",
      description: {
        fr: "Requêtes relationnelles SQL avancées, jointures complexes, intégrité référentielle, transactions ACID et administration des tables.",
        en: "Advanced relational SQL queries, complex joins, referential integrity, ACID transactions, and table administration."
      }
    },
    {
      id: "cognitive-docker-essentials",
      title: "Docker Essentials",
      issuer: "Cognitive Class",
      org: "cognitive",
      date: "2025",
      url: "https://courses.cognitiveclass.ai/certificates/8788a507bd16408e88de5b1a6c2e2e6c",
      icon: "docker",
      category: "DevOps",
      description: {
        fr: "Conteneurisation d'applications logicielles, écriture de Dockerfiles optimisés, gestion des images, conteneurs, volumes persistants et réseaux.",
        en: "Software application containerization, optimized Dockerfile authoring, managing images, containers, persistent volumes, and networking."
      }
    },

    // Coursera (Google & UC San Diego)
    {
      id: "google-agile-pm",
      title: "Google – Agile Project Management",
      issuer: "Google / Coursera",
      org: "coursera",
      date: "2025",
      url: "https://coursera.org/verify/QV774LQ8XTAP",
      icon: "google",
      category: "Gestion de Projet",
      description: {
        fr: "Frameworks Agiles (Scrum, Kanban), organisation des sprints, cérémonies d'équipe, gestion de backlog et livraison incrémentale de valeur logicielle.",
        en: "Agile frameworks (Scrum, Kanban), sprint organization, team ceremonies, backlog prioritization, and iterative software delivery."
      }
    },
    {
      id: "ucsd-big-data",
      title: "UC San Diego – Introduction to Big Data",
      issuer: "UC San Diego / Coursera",
      org: "coursera",
      date: "2025",
      url: "https://coursera.org/verify/Z247RW5CNM72",
      icon: "server",
      category: "Big Data",
      description: {
        fr: "Architectures distribuées pour données massives (paradigme des 5V), écosystème Hadoop, MapReduce et principes du calcul distribué.",
        en: "Distributed architectures for big data (5Vs paradigm), Hadoop ecosystem, MapReduce programming, and distributed computing foundations."
      }
    },

    // Autres
    {
      id: "dubai-future-foundation",
      title: "One Million Experts – Dubai Future Foundation",
      issuer: "Dubai Future Foundation",
      org: "other",
      date: "2025",
      url: "https://omp.dub.ai/certificate/dgZp6jCbIFqX",
      icon: "globe",
      category: "Innovation & IA",
      description: {
        fr: "Programme d'excellence technologique de la Dubai Future Foundation axé sur l'intelligence artificielle, l'innovation de rupture et les compétences d'avenir.",
        en: "Global tech leadership initiative by Dubai Future Foundation focusing on artificial intelligence, breakthrough innovation, and future engineering skills."
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
        subtitle: "12 certifications vérifiées auprès d'IBM, Google, Cognitive Class, UC San Diego et Dubai Future Foundation",
        verifyCredential: "Vérifier l'accréditation",
        filterAll: "Toutes (12)",
        filterIbm: "IBM (6)",
        filterCognitive: "Cognitive Class (3)",
        filterCoursera: "Google & Coursera (2)",
        filterOther: "Autres & Innovation (1)",
        searchPlaceholder: "Rechercher une certification (Docker, Python, Cloud, Big Data...)...",
        noResults: "Aucune certification trouvée pour cette recherche."
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
        subtitle: "12 verified credentials through IBM, Google, Cognitive Class, UC San Diego, and Dubai Future Foundation",
        verifyCredential: "Verify Credential",
        filterAll: "All (12)",
        filterIbm: "IBM (6)",
        filterCognitive: "Cognitive Class (3)",
        filterCoursera: "Google & Coursera (2)",
        filterOther: "Other & Innovation (1)",
        searchPlaceholder: "Search certification (Docker, Python, Cloud, Big Data...)...",
        noResults: "No certifications found matching your search."
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
