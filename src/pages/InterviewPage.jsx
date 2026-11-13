import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../components/Icons";
import { Seo } from "../components/Seo";

const SLIDES = [
  {
    id: 1,
    image: "/presentations/slide-01.png",
    title: "Candidature Stage PFE 2027 — Capgemini",
    subtitle: "Ingénierie QA, Automatisation des Tests & Pratiques Scrum",
    tag: "Positionnement",
    summary:
      "Positionnement en tant qu'élève-ingénieur en informatique & réseaux (EMSI Marrakech) orienté Qualité Logicielle, Automatisation et architectures fiables.",
    talkingPoints: [
      "Profil double compétence : Développement Full-Stack (Spring Boot, React, Laravel) combiné à une solide culture QA & Automatisation.",
      "Disponibilité : Stage de Fin d'Études (PFE) de 6 mois dès le 25 janvier 2027 (Casablanca, Rabat, International).",
      "Expérience démontrée sur des projets industriels critiques (OCP Safi, EMSI, ENS Marrakech) avec 380+ tests automatisés.",
      "Objectif chez Capgemini : Intégrer les équipes QA / DevOps pour concevoir et industrialiser des stratégies de test robustes."
    ]
  },
  {
    id: 2,
    image: "/presentations/slide-02.png",
    title: "Philosophie QA & Stratégie de Test",
    subtitle: "Le Shift-Left Testing : valider au plus tôt pour réduire les coûts",
    tag: "Stratégie & Méthode",
    summary:
      "Approche proactive de la qualité logicielle inspirée des standards ISTQB et du principe de Shift-Left Testing.",
    talkingPoints: [
      "Pyramide des Tests : Base unitaire large et rapide (JUnit 5, Mockito), couche intégration/API ciblée (Spring Boot Test, Postman), tests E2E scénarisés (Selenium WebDriver).",
      "Shift-Left Testing : Implication dès l'analyse des spécifications et du backlog pour détecter les défauts au plus tôt (coût de correction divisé par 10).",
      "Rétroaction Continue : Exécution systématique de suites de tests dans le pipeline CI/CD GitHub Actions à chaque pull request.",
      "Qualité Mesurable : Couverture de test cible ≥ 80% et zéro anomalie bloquante tolérée en livraison."
    ]
  },
  {
    id: 3,
    image: "/presentations/slide-03.png",
    title: "Étude de Cas : Smart HSE 360 (OCP Safi)",
    subtitle: "Automatisation rigoureuse sur un système industriel critique",
    tag: "Projet Phare OCP",
    summary:
      "Système de traçabilité HSE et gestion des incidents en milieu industriel hautement réglementé (Site OCP Safi).",
    talkingPoints: [
      "164 tests unitaires & isolation : Validation des règles de gestion critiques, calculs de criticité et workflows avec JUnit 5 & Mockito.",
      "42 tests d'intégration API : Tests de charge des contrôleurs REST, transactions et permissions RBAC avec Spring Boot Test & MockMvc.",
      "58 scénarios E2E automatisés : Automatisation du parcours complet de déclaration d'incident avec Selenium WebDriver.",
      "Résultat tangible : 86.8% de couverture globale validée par le Quality Gate SonarQube et zéro incident de régression en recette."
    ]
  },
  {
    id: 4,
    image: "/presentations/slide-04.png",
    title: "Systèmes Connectés & Stage ENS Marrakech",
    subtitle: "Fiabilité logicielle appliquée aux flux IoT & vision embarquée",
    tag: "IoT & Stage ENS",
    summary:
      "Validation de systèmes temps réel, protocoles de communication et flux de vision par ordinateur.",
    talkingPoints: [
      "Stage de 6 mois à l'ENS Marrakech (absENS) : Système de gestion de présence biométrique/QR avec Raspberry Pi et OpenCV anti-fraude (1 200+ étudiants).",
      "Tests d'intégrité & sécurité sur absENS : 30+ tests unitaires et d'intégration validant le chiffrement des flux et la cohérence des émargements.",
      "Smart Parking (IoT & Vision IA) : ESP32-CAM, détection YOLOv8 des places vacantes, notification WebSocket temps réel.",
      "Tests de charge & E2E : Validation de la tenue sous 100 req/s (latence < 150ms) et suite Selenium automatisant la réservation bout en bout."
    ]
  },
  {
    id: 5,
    image: "/presentations/slide-05.png",
    title: "Qualité Logicielle dans l'Écosystème Scrum",
    subtitle: "La QA comme moteur du sprint, pas comme goulot d'étranglement",
    tag: "Agilité & Scrum",
    summary:
      "Intégration fluide de la qualité dans les rituels Scrum et leadership d'équipe.",
    talkingPoints: [
      "Sprint Planning : Définition des critères d'acceptation (format Given/When/Then, BDD) en amont avec le Product Owner.",
      "In-Sprint Testing : Tests automatisés développés au fil de l'eau en synchronisation avec les fonctionnalités, pas en phase différée.",
      "Definition of Done (DoD) : Critères stricts de validation de User Story (tests passants, SonarQube vert, revue de code validée).",
      "Leadership & Facilitation : Expérience en tant que Président du Club E-TEAM (animation des réunions, conduite du changement et esprit d'équipe)."
    ]
  },
  {
    id: 6,
    image: "/presentations/slide-06.png",
    title: "Stack Technique QA & Outillage Maîtrisé",
    subtitle: "Synergie d'outils éprouvés pour une couverture de test complète",
    tag: "Stack & Outils",
    summary:
      "Ensemble d'outils industriels maîtrisés et intégrés dans des chaînes d'intégration continue.",
    talkingPoints: [
      "Automatisation E2E & API : Selenium WebDriver, Postman / Newman (API REST), Apache JMeter (tests de montée en charge et performance).",
      "Tests Unitaires & Mocks : JUnit 5, Mockito, AssertJ, Spring Boot Test, Pest (PHP/Laravel).",
      "Analyse Statique & Métriques : SonarQube (Quality Gates, règles de sécurité OWASP), JaCoCo (couverture de code), ESLint.",
      "Environnement & DevOps : Docker, Docker Compose (conteneurs de test éphémères), GitHub Actions CI/CD, Linux Ubuntu."
    ]
  },
  {
    id: 7,
    image: "/presentations/slide-07.png",
    title: "Conclusion & Pourquoi Rafik chez Capgemini",
    subtitle: "Un profil immédiatement opérationnel pour vos projets critiques",
    tag: "Conclusion & Valeur",
    summary:
      "Synthèse des atouts apportés pour le stage de fin d'études chez Capgemini.",
    talkingPoints: [
      "Rigueur industrielle : Habitude éprouvée des contextes exigeants (OCP, systèmes critiques) et sens aiguisé du détail.",
      "Autonomie & Polyvalence : Capacité à dialoguer aussi bien avec les architectes de code qu'avec les métiers et Product Owners.",
      "Culture de l'amélioration continue : En veille permanente sur l'automatisation avancée des tests et l'IA appliquée au testing.",
      "Motivation & Disponibilité : Prêt à s'investir à 100% sur un stage PFE de 6 mois dès le 25 janvier 2027 avec perspective de carrière pérenne."
    ]
  }
];

export function InterviewPage({ lang = "fr" }) {
  const isFr = lang === "fr";
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showNotes, setShowNotes] = useState(true);
  const [touchStartX, setTouchStartX] = useState(null);
  const playerRef = useRef(null);

  const pdfUrl = "/presentations/presentation_capgemini_testing.pdf";
  const slide = SLIDES[currentSlide];

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev < SLIDES.length - 1 ? prev + 1 : prev));
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const goToSlide = (index) => {
    if (index >= 0 && index < SLIDES.length) {
      setCurrentSlide(index);
    }
  };

  const toggleFullscreen = () => {
    if (!playerRef.current) return;
    if (!document.fullscreenElement) {
      playerRef.current.requestFullscreen?.().catch((err) => {
        console.warn("Fullscreen request error:", err);
      });
    } else {
      document.exitFullscreen?.().catch((err) => {
        console.warn("Exit fullscreen error:", err);
      });
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    const handleKeyDown = (e) => {
      // Ignore if user is in an input or textarea
      if (["INPUT", "TEXTAREA"].includes(e.target?.tagName)) return;

      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        goToNext();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        goToPrev();
      } else if (e.key === "Home") {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goToSlide(SLIDES.length - 1);
      } else if (e.key === "f" || e.key === "F") {
        if (!e.metaKey && !e.ctrlKey) {
          e.preventDefault();
          toggleFullscreen();
        }
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [goToNext, goToPrev]);

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    if (e.touches && e.touches.length > 0) {
      setTouchStartX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    if (e.changedTouches && e.changedTouches.length > 0) {
      const deltaX = e.changedTouches[0].clientX - touchStartX;
      if (deltaX < -50) {
        goToNext();
      } else if (deltaX > 50) {
        goToPrev();
      }
    }
    setTouchStartX(null);
  };

  return (
    <div
      style={{
        padding: "1.2rem 0 3.5rem 0",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        background: "var(--bg-primary)"
      }}
    >
      <Seo
        title={
          isFr
            ? "Présentation Entretien QA & Testing — Capgemini | Rafik Ait Ichou"
            : "QA & Testing Presentation — Capgemini | Rafik Ait Ichou"
        }
        description={
          isFr
            ? "Support officiel de présentation pour l'entretien d'ingénieur QA / Testing chez Capgemini. Rafik Ait Ichou — Stage PFE 2027 (7 diapos détaillées)."
            : "Official presentation deck for QA / Testing interview at Capgemini. Rafik Ait Ichou — PFE Internship 2027 (7 slides)."
        }
        path="/entretien"
      />

      <div className="container" style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 1rem" }}>
        {/* Top Header Card */}
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "1.25rem",
            padding: "0.9rem 1.25rem",
            background: "var(--bg-card)",
            borderRadius: "14px",
            border: "1px solid var(--border-subtle)",
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", flexWrap: "wrap" }}>
            <Link
              to="/"
              className="btn btn-secondary btn-sm"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.45rem 0.85rem",
                borderRadius: "8px",
                fontWeight: 600,
                fontSize: "0.85rem"
              }}
              title={isFr ? "Retour au portfolio" : "Back to portfolio"}
            >
              <Icon name="arrow-left" size={15} />
              <span>{isFr ? "Portfolio" : "Portfolio"}</span>
            </Link>

            <div style={{ borderLeft: "1px solid var(--border-subtle)", paddingLeft: "0.85rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "6px",
                    background: "rgba(0, 112, 173, 0.15)",
                    color: "#0070AD",
                    border: "1px solid rgba(0, 112, 173, 0.3)"
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#0070AD"
                    }}
                  />
                  Capgemini • PFE 2027
                </span>

                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: "var(--text-muted)"
                  }}
                >
                  Entretien Ingénieur QA &amp; Testing
                </span>
              </div>

              <h1
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  margin: "3px 0 0 0",
                  color: "var(--text-primary)",
                  letterSpacing: "-0.01em"
                }}
              >
                Ingénierie QA, Automatisation des Tests &amp; Pratiques Scrum
              </h1>
            </div>
          </div>

          {/* Action buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={toggleFullscreen}
              className="btn btn-secondary btn-sm"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.45rem 0.85rem",
                borderRadius: "8px",
                fontWeight: 600,
                fontSize: "0.85rem"
              }}
              title={isFr ? "Basculer en plein écran (Touche F)" : "Toggle Fullscreen (Key F)"}
              aria-label="Plein écran"
            >
              <Icon name={isFullscreen ? "minimize" : "maximize"} size={14} />
              <span className="hide-on-mobile">{isFullscreen ? (isFr ? "Quitter" : "Exit") : isFr ? "Plein écran" : "Fullscreen"}</span>
            </button>

            <a
              href={pdfUrl}
              download="Presentation_Rafik_AIT_ICHOU_QA_Capgemini.pdf"
              className="btn btn-primary btn-sm"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.45rem 0.95rem",
                borderRadius: "8px",
                fontWeight: 600,
                fontSize: "0.85rem",
                background: "#0070AD",
                borderColor: "#0070AD",
                color: "#FFFFFF"
              }}
              title={isFr ? "Télécharger le support PDF officiel (157 Ko)" : "Download official PDF deck (157 KB)"}
            >
              <Icon name="download" size={14} />
              <span>{isFr ? "Télécharger PDF" : "Download PDF"}</span>
            </a>

            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                padding: "0.45rem 0.75rem",
                borderRadius: "8px",
                fontWeight: 600,
                fontSize: "0.85rem"
              }}
              title={isFr ? "Ouvrir le fichier PDF brut dans un nouvel onglet" : "Open raw PDF in new tab"}
            >
              <Icon name="external-link" size={14} />
            </a>
          </div>
        </header>

        {/* 16:9 Presentation Player Card */}
        <section
          ref={playerRef}
          aria-label="Lecteur de présentation 16:9"
          style={{
            position: "relative",
            width: "100%",
            borderRadius: isFullscreen ? 0 : "16px",
            background: "#070E1A",
            border: isFullscreen ? "none" : "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow: isFullscreen ? "none" : "0 20px 50px -10px rgba(0, 0, 0, 0.55)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            userSelect: "none"
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* 16:9 Slide Display Canvas */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 9",
              maxHeight: isFullscreen ? "calc(100vh - 72px)" : "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#060C16"
            }}
          >
            <img
              key={slide.image}
              src={slide.image}
              alt={`${slide.title} — Diapositive ${currentSlide + 1} sur ${SLIDES.length}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
                transition: "opacity 160ms ease-in-out"
              }}
              loading="eager"
            />

            {/* Left Nav Arrow (On Slide Hover / Touch) */}
            <button
              type="button"
              onClick={goToPrev}
              disabled={currentSlide === 0}
              aria-label="Diapositive précédente"
              style={{
                position: "absolute",
                left: "1rem",
                top: "50%",
                transform: "translateY(-50%)",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                background: "rgba(15, 23, 42, 0.75)",
                backdropFilter: "blur(8px)",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: currentSlide === 0 ? "not-allowed" : "pointer",
                opacity: currentSlide === 0 ? 0.3 : 0.85,
                transition: "all 0.18s ease",
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
              }}
              onMouseEnter={(e) => {
                if (currentSlide !== 0) {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
                }
              }}
              onMouseLeave={(e) => {
                if (currentSlide !== 0) {
                  e.currentTarget.style.opacity = "0.85";
                  e.currentTarget.style.transform = "translateY(-50%) scale(1)";
                }
              }}
            >
              <Icon name="arrow-left" size={20} />
            </button>

            {/* Right Nav Arrow (On Slide Hover / Touch) */}
            <button
              type="button"
              onClick={goToNext}
              disabled={currentSlide === SLIDES.length - 1}
              aria-label="Diapositive suivante"
              style={{
                position: "absolute",
                right: "1rem",
                top: "50%",
                transform: "translateY(-50%)",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                background: "rgba(15, 23, 42, 0.75)",
                backdropFilter: "blur(8px)",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: currentSlide === SLIDES.length - 1 ? "not-allowed" : "pointer",
                opacity: currentSlide === SLIDES.length - 1 ? 0.3 : 0.85,
                transition: "all 0.18s ease",
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
              }}
              onMouseEnter={(e) => {
                if (currentSlide !== SLIDES.length - 1) {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
                }
              }}
              onMouseLeave={(e) => {
                if (currentSlide !== SLIDES.length - 1) {
                  e.currentTarget.style.opacity = "0.85";
                  e.currentTarget.style.transform = "translateY(-50%) scale(1)";
                }
              }}
            >
              <Icon name="arrow-right" size={20} />
            </button>

            {/* Top Right Floating Slide Counter Badge */}
            <div
              style={{
                position: "absolute",
                top: "0.85rem",
                right: "0.95rem",
                background: "rgba(11, 19, 32, 0.8)",
                backdropFilter: "blur(6px)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                borderRadius: "20px",
                padding: "0.25rem 0.75rem",
                fontSize: "0.78rem",
                fontWeight: 700,
                color: "#F8FAFC",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem"
              }}
            >
              <span>{currentSlide + 1}</span>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>/</span>
              <span style={{ color: "rgba(255,255,255,0.7)" }}>{SLIDES.length}</span>
            </div>
          </div>

          {/* Progress Bar under slide image */}
          <div
            style={{
              width: "100%",
              height: "3px",
              background: "rgba(255, 255, 255, 0.08)",
              position: "relative"
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${((currentSlide + 1) / SLIDES.length) * 100}%`,
                background: "linear-gradient(90deg, #0070AD 0%, #38BDF8 100%)",
                transition: "width 0.25s ease-out"
              }}
            />
          </div>

          {/* Player Bottom Dock Controls */}
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0.7rem 1.25rem",
              background: "rgba(10, 18, 30, 0.95)",
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              flexWrap: "wrap",
              gap: "0.75rem"
            }}
          >
            {/* Left: Slide tag & title preview */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  padding: "0.15rem 0.5rem",
                  borderRadius: "4px",
                  background: "rgba(56, 189, 248, 0.12)",
                  color: "#38BDF8",
                  border: "1px solid rgba(56, 189, 248, 0.25)"
                }}
              >
                {slide.tag}
              </span>
              <span
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#E2E8F0",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "340px"
                }}
              >
                {slide.title}
              </span>
            </div>

            {/* Center: Stepper Buttons */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <button
                type="button"
                onClick={goToPrev}
                disabled={currentSlide === 0}
                className="btn btn-secondary btn-sm"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  padding: "0.35rem 0.75rem",
                  borderRadius: "6px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  opacity: currentSlide === 0 ? 0.4 : 1
                }}
                aria-label="Précédent"
              >
                <Icon name="arrow-left" size={14} />
                <span>{isFr ? "Précédent" : "Prev"}</span>
              </button>

              <span
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: "#94A3B8",
                  padding: "0 0.4rem"
                }}
              >
                {currentSlide + 1} / {SLIDES.length}
              </span>

              <button
                type="button"
                onClick={goToNext}
                disabled={currentSlide === SLIDES.length - 1}
                className="btn btn-primary btn-sm"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  padding: "0.35rem 0.85rem",
                  borderRadius: "6px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  background: "#0070AD",
                  borderColor: "#0070AD",
                  opacity: currentSlide === SLIDES.length - 1 ? 0.4 : 1
                }}
                aria-label="Suivant"
              >
                <span>{isFr ? "Suivant" : "Next"}</span>
                <Icon name="arrow-right" size={14} />
              </button>
            </div>

            {/* Right: Quick shortcuts guide */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                fontSize: "0.75rem",
                color: "#64748B"
              }}
            >
              <span className="hide-on-mobile">
                Touches : <kbd style={{ background: "#1E293B", padding: "1px 5px", borderRadius: "3px", color: "#CBD5E1" }}>←</kbd> <kbd style={{ background: "#1E293B", padding: "1px 5px", borderRadius: "3px", color: "#CBD5E1" }}>→</kbd> <kbd style={{ background: "#1E293B", padding: "1px 5px", borderRadius: "3px", color: "#CBD5E1" }}>Espace</kbd> <kbd style={{ background: "#1E293B", padding: "1px 5px", borderRadius: "3px", color: "#CBD5E1" }}>F</kbd>
              </span>
            </div>
          </div>
        </section>

        {/* Interactive Slide Thumbnails Strip (Filmstrip) */}
        <section
          aria-label="Sélecteur rapide de diapositives"
          style={{
            marginTop: "1rem",
            marginBottom: "1.5rem",
            padding: "0.85rem 1rem",
            background: "var(--bg-card)",
            borderRadius: "14px",
            border: "1px solid var(--border-subtle)",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "0.65rem"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "var(--text-muted)"
                }}
              >
                {isFr ? "Sommaire des diapositives" : "Slide Overview"}
              </span>
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  color: "var(--text-secondary)",
                  background: "var(--bg-secondary)",
                  padding: "0.15rem 0.5rem",
                  borderRadius: "10px"
                }}
              >
                {SLIDES.length} {isFr ? "diapos" : "slides"}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setShowNotes(!showNotes)}
              className="btn btn-secondary btn-sm"
              style={{
                fontSize: "0.75rem",
                padding: "0.25rem 0.6rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem"
              }}
            >
              <Icon name="file-text" size={13} />
              <span>{showNotes ? (isFr ? "Masquer arguments clés" : "Hide talking points") : isFr ? "Afficher arguments clés" : "Show talking points"}</span>
            </button>
          </div>

          {/* Horizontal Grid of 7 Mini Slides */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
              gap: "0.65rem",
              overflowX: "auto",
              paddingBottom: "4px"
            }}
          >
            {SLIDES.map((item, idx) => {
              const isActive = idx === currentSlide;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  style={{
                    position: "relative",
                    background: isActive ? "rgba(0, 112, 173, 0.08)" : "var(--bg-secondary)",
                    border: isActive
                      ? "2px solid #0070AD"
                      : "1px solid var(--border-subtle)",
                    borderRadius: "8px",
                    padding: "0.35rem",
                    textAlign: "left",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.35rem",
                    transition: "all 0.18s ease",
                    transform: isActive ? "translateY(-2px)" : "none",
                    boxShadow: isActive ? "0 6px 14px rgba(0, 112, 173, 0.25)" : "none"
                  }}
                  aria-label={`Aller à la diapositive ${idx + 1} : ${item.title}`}
                >
                  {/* Mini Slide Preview with 16:9 ratio */}
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "16 / 9",
                      borderRadius: "5px",
                      overflow: "hidden",
                      background: "#080F1D",
                      position: "relative"
                    }}
                  >
                    <img
                      src={item.image}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block"
                      }}
                      loading="lazy"
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "2px",
                        left: "3px",
                        fontSize: "0.65rem",
                        fontWeight: 800,
                        background: isActive ? "#0070AD" : "rgba(0,0,0,0.7)",
                        color: "#FFFFFF",
                        padding: "0.05rem 0.35rem",
                        borderRadius: "3px"
                      }}
                    >
                      {idx + 1}
                    </div>
                  </div>

                  {/* Thumbnail Label */}
                  <div style={{ padding: "0 2px" }}>
                    <div
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: isActive ? 700 : 600,
                        color: isActive ? "#0070AD" : "var(--text-primary)",
                        lineHeight: 1.25,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                      }}
                    >
                      {item.tag}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Detailed Slide Talking Points & Recruiter Notes */}
        {showNotes && (
          <section
            aria-label="Arguments clés et déroulé pour l'entretien"
            style={{
              padding: "1.25rem 1.5rem",
              background: "var(--bg-card)",
              borderRadius: "14px",
              border: "1px solid var(--border-subtle)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
              marginBottom: "1.5rem"
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem",
                paddingBottom: "1rem",
                borderBottom: "1px solid var(--border-subtle)",
                marginBottom: "1rem"
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.3rem" }}>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      padding: "0.15rem 0.55rem",
                      borderRadius: "4px",
                      background: "rgba(0, 112, 173, 0.15)",
                      color: "#0070AD",
                      textTransform: "uppercase"
                    }}
                  >
                    Diapo {currentSlide + 1} / {SLIDES.length}
                  </span>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "var(--accent)",
                      textTransform: "uppercase"
                    }}
                  >
                    {slide.tag}
                  </span>
                </div>

                <h2
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 800,
                    margin: 0,
                    color: "var(--text-primary)",
                    letterSpacing: "-0.01em"
                  }}
                >
                  {slide.title}
                </h2>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)",
                    margin: "4px 0 0 0"
                  }}
                >
                  {slide.subtitle}
                </p>
              </div>

              {/* Quick Jump Stepper */}
              <div style={{ display: "flex", gap: "0.4rem" }}>
                <button
                  type="button"
                  onClick={goToPrev}
                  disabled={currentSlide === 0}
                  className="btn btn-secondary btn-sm"
                  style={{ padding: "0.35rem 0.6rem" }}
                  aria-label="Précédent"
                >
                  <Icon name="arrow-left" size={14} />
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  disabled={currentSlide === SLIDES.length - 1}
                  className="btn btn-secondary btn-sm"
                  style={{ padding: "0.35rem 0.6rem" }}
                  aria-label="Suivant"
                >
                  <Icon name="arrow-right" size={14} />
                </button>
              </div>
            </div>

            {/* Content summary */}
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--text-primary)",
                lineHeight: 1.5,
                marginBottom: "1rem",
                fontWeight: 500
              }}
            >
              {slide.summary}
            </p>

            {/* Bullet Points with Checkmarks */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "var(--text-muted)"
                }}
              >
                {isFr ? "Arguments & Faits Marquants pour l'Entretien :" : "Key Talking Points for Interview:"}
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "0.75rem"
                }}
              >
                {slide.talkingPoints.map((point, pIdx) => (
                  <div
                    key={pIdx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.65rem",
                      padding: "0.7rem 0.85rem",
                      borderRadius: "8px",
                      background: "var(--bg-secondary)",
                      border: "1px solid var(--border-subtle)"
                    }}
                  >
                    <span
                      style={{
                        color: "#0070AD",
                        marginTop: "2px",
                        flexShrink: 0
                      }}
                    >
                      <Icon name="check" size={15} />
                    </span>
                    <span
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--text-primary)",
                        lineHeight: 1.45
                      }}
                    >
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Bottom QA Engineering Summary Card */}
        <section
          style={{
            padding: "1.5rem",
            background: "linear-gradient(135deg, rgba(0, 112, 173, 0.08) 0%, rgba(15, 23, 42, 0.4) 100%)",
            borderRadius: "14px",
            border: "1px solid rgba(0, 112, 173, 0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.25rem"
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.35rem" }}>
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  color: "#0070AD",
                  letterSpacing: "0.05em"
                }}
              >
                {isFr ? "Prêt pour l'entretien" : "Interview Ready"}
              </span>
              <span style={{ color: "var(--text-muted)" }}>•</span>
              <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                Rafik AIT ICHOU (EMSI Marrakech)
              </span>
            </div>
            <h3
              style={{
                fontSize: "1.05rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                margin: 0
              }}
            >
              {isFr
                ? "Disponible dès le 25 Janvier 2027 pour un stage PFE de 6 mois"
                : "Available from January 25, 2027 for a 6-month PFE internship"}
            </h3>
            <p
              style={{
                fontSize: "0.82rem",
                color: "var(--text-secondary)",
                margin: "4px 0 0 0"
              }}
            >
              Mobilité : Casablanca, Rabat, Hybride, International. Contact : rafik.aitichou@gmail.com
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
            <a
              href="mailto:rafik.aitichou@gmail.com?subject=Entretien%20Capgemini%20QA%20-%20Rafik%20Ait%20Ichou"
              className="btn btn-secondary btn-sm"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.5rem 0.95rem",
                fontWeight: 600
              }}
            >
              <Icon name="mail" size={14} />
              <span>{isFr ? "Contacter par email" : "Email me"}</span>
            </a>

            <a
              href={pdfUrl}
              download="Presentation_Rafik_AIT_ICHOU_QA_Capgemini.pdf"
              className="btn btn-primary btn-sm"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.5rem 1rem",
                fontWeight: 700,
                background: "#0070AD",
                borderColor: "#0070AD",
                color: "#FFFFFF"
              }}
            >
              <Icon name="download" size={14} />
              <span>{isFr ? "Télécharger le PDF" : "Download PDF"}</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
