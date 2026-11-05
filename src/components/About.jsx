import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "./Icons";

export function About({ lang, uiText, personal, onOpenCv }) {
  const isFr = lang === "fr";

  const pillars = [
    {
      icon: "shield-check",
      title: isFr ? "Architectures Résilientes" : "Resilient Architectures",
      desc: isFr
        ? "Conception de backends modulaires, scalables et découplés : Spring Boot 3, Clean Architecture, DDD, Microservices et passerelles API sécurisées."
        : "Designing modular, decoupled, and scalable backends: Spring Boot 3, Clean Architecture, Domain-Driven Design, microservices, and secure API gateways."
    },
    {
      icon: "cpu",
      title: isFr ? "Automatisation & Systèmes Intelligents" : "Automation & Intelligent Systems",
      desc: isFr
        ? "Déploiement conteneurisé Docker, pipelines CI/CD automatisés, intégration IoT et modèles d'IA / Computer Vision (YOLOv8, OpenCV)."
        : "Containerized Docker deployments, automated CI/CD pipelines, IoT integration, and Computer Vision / AI models (YOLOv8, OpenCV)."
    },
    {
      icon: "award",
      title: isFr ? "Qualité Logicielle Industrielle" : "Industrial Software Quality",
      desc: isFr
        ? "Assurance qualité rigoureuse : tests automatisés (JUnit 5, Selenium, Cypress), audit de couverture SonarQube (86,8% chez OCP Safi) et démarche TDD."
        : "Rigorous QA engineering: automated test suites (JUnit 5, Selenium, Cypress), SonarQube coverage audits (86.8% at OCP Safi), and TDD discipline."
    }
  ];

  const tools = [
    { name: "JUnit 5", category: "Testing" },
    { name: "Selenium", category: "Testing E2E" },
    { name: "SonarQube", category: "Code Quality" },
    { name: "Docker", category: "DevOps" },
    { name: "CI/CD Actions", category: "DevOps" },
    { name: "Spring Boot", category: "Backend" },
    { name: "React / Angular", category: "Frontend" },
    { name: "Flutter", category: "Mobile" },
    { name: "PostgreSQL / MySQL", category: "Database" },
    { name: "Linux / Git", category: "System" }
  ];

  const timeline = [
    {
      period: "2025 – 2027",
      title: isFr
        ? "Cycle Ingénieur d'État en Informatique & Réseaux"
        : "State Engineering Degree in Computer Science & Networks",
      org: "EMSI Marrakech (DDSI)",
      desc: isFr
        ? "Spécialisation en Développement Digital & Systèmes d'Information : architectures distribuées, cloud computing, sécurité logicielle et gestion agile."
        : "Specializing in Digital Development & Information Systems: distributed systems, cloud computing, software security, and agile governance.",
      badge: isFr ? "En cours · Promo 2027" : "In progress · Class of 2027"
    },
    {
      period: "Déc. 2024 – Juin. 2025",
      title: isFr
        ? "Stage Ingénieur Junior — Projet absENS (6 mois)"
        : "Junior Software Engineer Intern — absENS Project (6 months)",
      org: "École Normale Supérieure (ENS Marrakech)",
      desc: isFr
        ? "Conception et déploiement d'une application mobile Android et d'un backend Laravel pour l'émargement sécurisé par QR codes chiffrés dynamiques. Attestation de stage validée avec succès."
        : "Architected and delivered an Android mobile app and Laravel backend for attendance tracking with encrypted dynamic QR codes. 6-month internship certificate awarded.",
      badge: isFr ? "Stage validé 6 mois" : "6-month validated internship"
    },
    {
      period: "2024 – 2026",
      title: isFr
        ? "Président du Club Technologique E-TEAM ENS"
        : "President of E-TEAM ENS Technology Club",
      org: "Université Cadi Ayyad — ENS Marrakech",
      desc: isFr
        ? "Direction d'une équipe technique de 30+ étudiants, organisation d'ateliers robotique / IoT, animation de hackathons et gestion de projets transverses."
        : "Led a technical club of 30+ students, orchestrated robotics and IoT workshops, hosted hackathons, and managed multidisciplinary student teams.",
      badge: isFr ? "Leadership & Gestion" : "Leadership & Management"
    },
    {
      period: "2022 – 2025",
      title: isFr
        ? "Licence en Informatique"
        : "Bachelor of Science in Computer Science",
      org: "Université Cadi Ayyad",
      desc: isFr
        ? "Bases théoriques solides : algorithmique avancée, structures de données, POO (C++, Java), bases de données relationnelles et systèmes d'exploitation."
        : "Comprehensive theoretical foundation: advanced algorithms, data structures, OOP (C++, Java), relational databases, and OS fundamentals.",
      badge: isFr ? "Diplôme obtenu" : "Graduated"
    }
  ];

  return (
    <section id="about" className="section" style={{ background: "transparent", paddingTop: "1rem" }}>
      <div className="container">
        {/* BLOC 1 : En-tête (Photo, Titre, Sous-titre officiel, Badge PFE) */}
        <div
          className="glass-card"
          style={{
            padding: "2.5rem",
            marginBottom: "2.5rem",
            borderLeft: "4px solid var(--accent-primary)"
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "180px 1fr",
              gap: "2.5rem",
              alignItems: "center"
            }}
            className="about-header-grid"
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "160px",
                  height: "160px",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  border: "2px solid var(--border-subtle)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
                  margin: "0 auto",
                  background: "var(--bg-elevated)"
                }}
              >
                <img
                  src={personal.photo}
                  alt={personal.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>

            <div>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.6rem", marginBottom: "0.8rem" }}>
                <span className="pulse-badge">
                  <span className="pulse-dot"></span>
                  <span>{isFr ? "PFE dès le 25 janvier 2027 (4 à 6 mois)" : "PFE from Jan 25, 2027 (4-6 months)"}</span>
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: "var(--accent-primary)",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "var(--radius-full)",
                    background: "rgba(225, 29, 72, 0.12)"
                  }}
                >
                  EMSI Marrakech
                </span>
              </div>

              <h1
                style={{
                  fontSize: "clamp(2rem, 4vw, 2.8rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  marginBottom: "0.4rem",
                  lineHeight: 1.15
                }}
              >
                {personal.name}
              </h1>

              {/* Sous-titre levant l'ambiguïté (PAS de Master ENS) */}
              <h2
                style={{
                  fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                  fontWeight: 700,
                  color: "var(--text-secondary)",
                  marginBottom: "1.2rem",
                  lineHeight: 1.4
                }}
              >
                {isFr
                  ? "Élève-Ingénieur en Informatique & Réseaux — EMSI Marrakech"
                  : "Engineering Student in Computer Science & Networks — EMSI Marrakech"}
              </h2>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button onClick={onOpenCv} className="btn btn-primary btn-sm">
                  <Icon name="download" size={16} />
                  <span>{uiText.about.downloadCv}</span>
                </button>
                <Link to="/contact" className="btn btn-secondary btn-sm">
                  <Icon name="send" size={16} />
                  <span>{uiText.about.contactMe}</span>
                </Link>
                {personal.calendarBookingLink && (
                  <a
                    href={personal.calendarBookingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    <Icon name="calendar" size={16} />
                    <span>{isFr ? "Réserver un échange" : "Book a call"}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* BLOC 2 : Qui je suis (Paragraphe en typographie mise en valeur) */}
        <div
          className="glass-card"
          style={{
            padding: "2.5rem",
            marginBottom: "3rem"
          }}
        >
          <div className="section-badge" style={{ marginBottom: "0.8rem" }}>
            <Icon name="sparkles" size={14} />
            <span>{isFr ? "Profil & Vision de l'Ingénierie" : "Profile & Engineering Philosophy"}</span>
          </div>

          <p
            style={{
              fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)",
              fontWeight: 500,
              color: "var(--text-primary)",
              lineHeight: 1.8,
              marginBottom: "1.4rem"
            }}
          >
            {personal.bioLong[lang]}
          </p>

          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              borderLeft: "3px solid var(--accent-primary)",
              paddingLeft: "1.2rem",
              fontStyle: "italic"
            }}
          >
            {isFr
              ? "« Mon approche repose sur des architectures rigoureuses (Clean Architecture, DDD, tests automatisés en continu) pour garantir que chaque ligne de code livrée soit maintenable, scalable et directement créatrice de valeur industrielle mesurable. »"
              : "“My approach relies on rock-solid architectural fundamentals (Clean Architecture, DDD, continuous automated testing) ensuring every line of delivered code is maintainable, scalable, and creates real industrial value.”"}
          </p>
        </div>

        {/* BLOC 3 : Les Trois Piliers (en cartes) */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: "0.4rem" }}>
              {isFr ? "Les 3 Piliers de mon Approche" : "The 3 Engineering Pillars"}
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
              {isFr
                ? "Principes d'ingénierie appliqués sur chaque projet logiciel et industriel."
                : "Core engineering principles applied across software and industrial projects."}
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
              gap: "1.5rem"
            }}
          >
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: "2.2rem 1.8rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.8rem",
                  borderTop: "3px solid var(--accent-primary)"
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "var(--radius-sm)",
                    background: "rgba(225, 29, 72, 0.12)",
                    color: "var(--accent-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "0.4rem"
                  }}
                >
                  <Icon name={pillar.icon} size={24} />
                </div>
                <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--text-primary)" }}>
                  {pillar.title}
                </h4>
                <p style={{ fontSize: "0.925rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* BLOC 4 : Badges Outils & Standards */}
        <div
          className="glass-card"
          style={{
            padding: "2.2rem",
            marginBottom: "3.5rem",
            textAlign: "center"
          }}
        >
          <h4
            style={{
              fontSize: "0.95rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--accent-primary)",
              marginBottom: "1.2rem"
            }}
          >
            {isFr ? "Standards d'Ingénierie & Outils Pratiqués" : "Engineering Standards & Tools"}
          </h4>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.6rem",
              justifyContent: "center"
            }}
          >
            {tools.map((tool) => (
              <span
                key={tool.name}
                className="tech-tag"
                style={{
                  padding: "0.45rem 0.95rem",
                  fontSize: "0.85rem",
                  fontWeight: 600
                }}
              >
                <span style={{ color: "var(--accent-primary)", fontFamily: "var(--font-mono)" }}>✓</span>
                <span>{tool.name}</span>
                <span style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginLeft: "4px" }}>
                  ({tool.category})
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* BLOC 5 : Parcours Académique & Engagement (Frise chronologique) */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2.2rem" }}>
            <h3 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: "0.4rem" }}>
              {isFr ? "Parcours Académique & Expérience" : "Academic Background & Experience"}
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
              {isFr ? "Excellence académique et engagement associatif structuré." : "Academic excellence and structured leadership."}
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem"
            }}
          >
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className="glass-card about-timeline-card"
                style={{
                  padding: "1.8rem 2rem",
                  display: "grid",
                  gridTemplateColumns: "170px 1fr",
                  gap: "1.8rem",
                  alignItems: "start"
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      color: "var(--accent-primary)",
                      marginBottom: "0.4rem"
                    }}
                  >
                    {item.period}
                  </div>
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      padding: "0.15rem 0.55rem",
                      borderRadius: "var(--radius-sm)",
                      background: "rgba(255,255,255,0.06)",
                      color: "var(--text-secondary)"
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                <div>
                  <h4 style={{ fontSize: "1.15rem", fontWeight: 800, marginBottom: "0.25rem", color: "var(--text-primary)" }}>
                    {item.title}
                  </h4>
                  <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--accent-secondary)", marginBottom: "0.6rem" }}>
                    {item.org}
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BLOC 6 : Bandeau Final Rouge Accent (PFE 2027) */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(225, 29, 72, 0.18) 0%, rgba(190, 18, 60, 0.08) 100%)",
            border: "1px solid rgba(225, 29, 72, 0.35)",
            borderRadius: "var(--radius-lg)",
            padding: "3rem 2rem",
            textAlign: "center",
            boxShadow: "0 10px 30px rgba(225, 29, 72, 0.12)"
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "var(--accent-primary)",
              color: "#FFFFFF",
              padding: "0.3rem 0.85rem",
              borderRadius: "var(--radius-full)",
              fontSize: "0.8rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              marginBottom: "1.2rem"
            }}
          >
            <Icon name="rocket" size={14} />
            <span>{isFr ? "Opportunité PFE 2027" : "PFE Opportunity 2027"}</span>
          </div>

          <h3
            style={{
              fontSize: "clamp(1.5rem, 3.2vw, 2.1rem)",
              fontWeight: 900,
              marginBottom: "0.8rem",
              lineHeight: 1.25
            }}
          >
            {isFr
              ? "À la recherche d'un PFE de 4 à 6 mois, disponible dès le 25 janvier 2027"
              : "Looking for a 4 to 6-month graduation internship (PFE), starting Jan 25, 2027"}
          </h3>

          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1.05rem",
              maxWidth: "650px",
              margin: "0 auto 2rem auto",
              lineHeight: 1.6
            }}
          >
            {isFr
              ? "Prêt à m'investir sur vos architectures logicielles stratégiques, plateformes Full Stack ou systèmes critiques en environnement agile."
              : "Ready to contribute to your strategic software architectures, Full Stack platforms, or mission-critical engineering initiatives in an agile environment."}
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/contact" className="btn btn-primary">
              <Icon name="mail" size={18} />
              <span>{uiText.about.contactMe}</span>
            </Link>
            <button onClick={onOpenCv} className="btn btn-secondary">
              <Icon name="download" size={18} />
              <span>{uiText.about.downloadCv}</span>
            </button>
            <Link to="/projects" className="btn btn-outline">
              <Icon name="code" size={18} />
              <span>{isFr ? "Explorer mes projets" : "Explore projects"}</span>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-header-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 1.5rem !important;
          }
          .about-timeline-card {
            grid-template-columns: 1fr !important;
            gap: 0.8rem !important;
          }
        }
      `}</style>
    </section>
  );
}
