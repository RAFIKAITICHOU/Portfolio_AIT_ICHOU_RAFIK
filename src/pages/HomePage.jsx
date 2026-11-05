import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { Stats } from "../components/Stats";
import { Icon } from "../components/Icons";
import { ProjectCardBanner } from "../components/ProjectCardBanner";
import { ProjectModal } from "../components/ProjectModal";
import { Seo } from "../components/Seo";

export function HomePage({
  lang,
  uiText,
  personal,
  stats,
  projects,
  skillCategories = [],
  certifications = [],
  onOpenCv
}) {
  const isFr = lang === "fr";
  const [selectedProject, setSelectedProject] = useState(null);

  // 1. Flagship Project: Smart HSE 360 (OCP Safi)
  const hseProject = projects.find((p) => p.id === "smart-hse-360") || projects[0];

  // 2. Other Standout Projects (3 à 4 cartes demandées : MesChèques, Ma'sarat, Guidely, Smart Parking)
  const otherFeaturedIds = [
    "masarat-gestion-marchandises",
    "mes-cheques",
    "guidely",
    "smart-parking"
  ];
  const otherProjects = projects.filter((p) => otherFeaturedIds.includes(p.id));

  // 3. Top Certifications (IBM, Google, Data Science)
  const topCerts = certifications.slice(0, 3);

  return (
    <div>
      <Seo
        title={
          isFr
            ? "Rafik Ait Ichou | Ingénieur Logiciel & Systèmes d'Information"
            : "Rafik Ait Ichou | Software Engineer & Information Systems"
        }
        description={
          isFr
            ? "Élève-ingénieur en informatique et réseaux (EMSI Marrakech). Full Stack, DevOps et systèmes industriels : Smart HSE 360 chez OCP Safi. PFE dès janvier 2027."
            : "Engineering student in computer science & networks (EMSI Marrakech). Full Stack, DevOps, and industrial systems: Smart HSE 360 at OCP Safi. Available for graduation internship from Jan 2027."
        }
        path="/"
        lang={lang}
      />

      {/* 1. BANDEAU D'ACCROCHE (Hero + Stats KPI) */}
      <Hero
        lang={lang}
        uiText={uiText}
        personal={personal}
        onOpenCv={onOpenCv}
      />

      <Stats lang={lang} stats={stats} />

      <section className="section" style={{ paddingTop: "1.5rem" }}>
        <div className="container">
          {/* 2. ÉTUDE DE CAS SMART HSE 360 (Projet n°1 le plus fort, OCP Safi) */}
          {hseProject && (
            <div style={{ marginBottom: "5rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "1rem",
                  marginBottom: "1.8rem"
                }}
              >
                <div>
                  <div className="section-badge" style={{ marginBottom: "0.4rem" }}>
                    <Icon name="award" size={14} />
                    <span>{isFr ? "Projet Phare Industriel — DSI OCP Safi" : "Flagship Industrial Project — OCP Safi IT Dept"}</span>
                  </div>
                  <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 900 }}>
                    {isFr ? "Étude de Cas : Smart HSE 360" : "Case Study: Smart HSE 360"}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedProject(hseProject)}
                  className="btn btn-outline btn-sm"
                >
                  <span>{isFr ? "Fiche Technique Complète" : "Complete Technical Sheet"}</span>
                  <Icon name="chevron-right" size={14} />
                </button>
              </div>

              {/* Grand Showcase Card Smart HSE 360 */}
              <div
                className="glass-card"
                style={{
                  padding: "2.8rem",
                  borderTop: "4px solid var(--accent-primary)",
                  boxShadow: "0 12px 35px rgba(0,0,0,0.18)"
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1.35fr",
                    gap: "2.8rem",
                    alignItems: "center"
                  }}
                  className="hse-showcase-grid"
                >
                  {/* Left Column: Visual & Metrics */}
                  <div>
                    <div
                      style={{
                        borderRadius: "var(--radius-md)",
                        overflow: "hidden",
                        border: "1px solid var(--border-subtle)",
                        background: "var(--bg-elevated)",
                        height: "210px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "1.2rem",
                        marginBottom: "1.5rem",
                        cursor: "pointer"
                      }}
                      onClick={() => setSelectedProject(hseProject)}
                    >
                      <img
                        src={hseProject.logo}
                        alt="Smart HSE 360 logo"
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                      />
                    </div>

                    {/* Metrics 4 Grids */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: "0.75rem"
                      }}
                    >
                      {hseProject.metrics &&
                        hseProject.metrics.map((m, idx) => (
                          <div
                            key={idx}
                            style={{
                              background: "var(--bg-elevated)",
                              border: "1px solid var(--border-subtle)",
                              borderRadius: "var(--radius-sm)",
                              padding: "0.85rem",
                              textAlign: "center"
                            }}
                          >
                            <div
                              style={{
                                fontFamily: "var(--font-mono)",
                                fontSize: "1.25rem",
                                fontWeight: 800,
                                color: "var(--accent-primary)"
                              }}
                            >
                              {m.value}
                            </div>
                            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                              {m.label}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Right Column: Problème, Solution, Résultat */}
                  <div>
                    <div style={{ marginBottom: "1rem" }}>
                      <span
                        style={{
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          color: "var(--accent-primary)"
                        }}
                      >
                        {hseProject.categoryLabel[lang]}
                      </span>
                      <h3 style={{ fontSize: "1.75rem", fontWeight: 800, marginTop: "0.2rem", marginBottom: "0.4rem" }}>
                        {hseProject.title}
                      </h3>
                      <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                        {hseProject.subtitle[lang]}
                      </p>
                    </div>

                    {/* Problème */}
                    <div style={{ marginBottom: "1.1rem" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.45rem",
                          fontSize: "0.85rem",
                          fontWeight: 800,
                          color: "var(--danger)",
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                          marginBottom: "0.25rem"
                        }}
                      >
                        <span style={{ fontSize: "0.9rem" }}>🔴</span>
                        <span>{isFr ? "Le Problème Industriel" : "The Industrial Problem"}</span>
                      </div>
                      <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>
                        {hseProject.problem[lang]}
                      </p>
                    </div>

                    {/* Solution */}
                    <div style={{ marginBottom: "1.1rem" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.45rem",
                          fontSize: "0.85rem",
                          fontWeight: 800,
                          color: "var(--warning)",
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                          marginBottom: "0.25rem"
                        }}
                      >
                        <span style={{ fontSize: "0.9rem" }}>🟡</span>
                        <span>{isFr ? "La Solution d'Ingénierie" : "The Engineering Solution"}</span>
                      </div>
                      <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>
                        {hseProject.solution[lang]}
                      </p>
                    </div>

                    {/* Résultat */}
                    <div style={{ marginBottom: "1.4rem" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.45rem",
                          fontSize: "0.85rem",
                          fontWeight: 800,
                          color: "var(--success)",
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                          marginBottom: "0.25rem"
                        }}
                      >
                        <span style={{ fontSize: "0.9rem" }}>🟢</span>
                        <span>{isFr ? "Le Résultat Mesurable" : "Measurable Result"}</span>
                      </div>
                      <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                        {hseProject.result[lang]}
                      </p>
                    </div>

                    {/* Tech chips */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
                      {hseProject.technologies.slice(0, 6).map((t) => (
                        <span key={t} className="tech-tag">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", alignItems: "center" }}>
                      <button
                        onClick={() => setSelectedProject(hseProject)}
                        className="btn btn-primary btn-sm"
                      >
                        <span>{isFr ? "Voir l'étude de cas" : "View Case Study"}</span>
                        <Icon name="chevron-right" size={14} />
                      </button>
                      {hseProject.driveFolder && (
                        <a
                          href={hseProject.driveFolder}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary btn-sm"
                          style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}
                        >
                          <Icon name="folder" size={15} />
                          <span>Drive</span>
                        </a>
                      )}
                      {hseProject.github && (
                        <a
                          href={hseProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary btn-sm"
                          title="Code GitHub"
                        >
                          <Icon name="github" size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. COMPÉTENCES PAR CATÉGORIE (Backend, Frontend, Mobile, DevOps, Qualité) */}
          <div style={{ marginBottom: "5rem" }}>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <div className="section-badge" style={{ marginBottom: "0.4rem" }}>
                <Icon name="cpu" size={14} />
                <span>{isFr ? "Savoir-faire Technique" : "Technical Expertise"}</span>
              </div>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.3rem)", fontWeight: 900, marginBottom: "0.5rem" }}>
                {isFr ? "Compétences Regroupées par Domaine" : "Skills Grouped by Domain"}
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", maxWidth: "600px", margin: "0 auto" }}>
                {isFr
                  ? "Structurées par spécialité d'ingénierie pour une vision immédiate de ma maîtrise opérationnelle."
                  : "Organized by engineering field for an instant view of operational mastery."}
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
                gap: "1.5rem"
              }}
            >
              {skillCategories.slice(0, 5).map((cat) => (
                <div
                  key={cat.id}
                  className="glass-card"
                  style={{
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    borderTop: "3px solid var(--accent-primary)"
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.8rem",
                        marginBottom: "1rem"
                      }}
                    >
                      <div
                        style={{
                          width: "42px",
                          height: "42px",
                          borderRadius: "var(--radius-sm)",
                          background: "rgba(225, 29, 72, 0.12)",
                          color: "var(--accent-primary)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}
                      >
                        <Icon name={cat.icon || "code"} size={20} />
                      </div>
                      <div>
                        <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--text-primary)" }}>
                          {cat.title[lang]}
                        </h3>
                        <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                          {cat.skills ? `${cat.skills.length} ${isFr ? "technologies" : "skills"}` : ""}
                        </div>
                      </div>
                    </div>

                    <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "1.2rem", lineHeight: 1.5 }}>
                      {cat.description[lang]}
                    </p>

                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                      {cat.skills &&
                        cat.skills.slice(0, 4).map((s, idx) => (
                          <li
                            key={idx}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              fontSize: "0.875rem",
                              padding: "0.35rem 0",
                              borderBottom: "1px solid var(--border-subtle)"
                            }}
                          >
                            <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>
                              {s.name}
                            </span>
                            <span
                              style={{
                                fontSize: "0.72rem",
                                fontWeight: 700,
                                padding: "0.15rem 0.5rem",
                                borderRadius: "var(--radius-full)",
                                background: s.level === "Maîtrisé" || s.level === "Mastered"
                                  ? "rgba(16, 185, 129, 0.12)"
                                  : "rgba(59, 130, 246, 0.12)",
                                color: s.level === "Maîtrisé" || s.level === "Mastered"
                                  ? "var(--success)"
                                  : "#3b82f6"
                              }}
                            >
                              {s.level}
                            </span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  <Link
                    to="/skills"
                    style={{
                      marginTop: "1.4rem",
                      fontSize: "0.825rem",
                      color: "var(--accent-primary)",
                      fontWeight: 700,
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem"
                    }}
                  >
                    <span>{isFr ? "Détails & projets associés" : "Details & associated projects"}</span>
                    <Icon name="chevron-right" size={13} />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* 4. AUTRES PROJETS PHARES (MesChèques, Ma'sarat, Guidely, Smart Parking) */}
          <div style={{ marginBottom: "5rem" }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-end",
                justifyContent: "space-between",
                gap: "1rem",
                marginBottom: "2.2rem"
              }}
            >
              <div>
                <div className="section-badge" style={{ marginBottom: "0.4rem" }}>
                  <Icon name="code" size={14} />
                  <span>{isFr ? "Réalisations Majeures" : "Major Implementations"}</span>
                </div>
                <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.3rem)", fontWeight: 900 }}>
                  {isFr ? "Autres Projets d'Ingénierie" : "Other Engineering Projects"}
                </h2>
              </div>
              <Link to="/projects" className="btn btn-outline btn-sm">
                <span>{isFr ? "Explorer tous les projets" : "View all projects"}</span>
                <Icon name="chevron-right" size={14} />
              </Link>
            </div>

            <div
              className="home-featured-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
                gap: "2rem"
              }}
            >
              {otherProjects.map((p) => (
                <div
                  key={p.id}
                  className="glass-card"
                  style={{
                    padding: "2.2rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    borderTop: p.featured ? "4px solid var(--accent-primary)" : "1px solid var(--border-subtle)"
                  }}
                >
                  <div>
                    {/* Top Visual Banner / Logo */}
                    <ProjectCardBanner
                      project={p}
                      onClick={() => setSelectedProject(p)}
                    />

                    {/* Top tags */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem" }}>
                      <span style={{ fontSize: "0.78rem", color: "var(--accent-primary)", fontWeight: 700, textTransform: "uppercase" }}>
                        {p.categoryLabel[lang]}
                      </span>
                      {p.featured && (
                        <span style={{ color: "var(--warning)", fontSize: "0.75rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.2rem" }}>
                          <Icon name="star" size={12} /> Featured
                        </span>
                      )}
                    </div>

                    {/* Title & Subtitle */}
                    <div style={{ marginBottom: "0.8rem" }}>
                      <h3
                        onClick={() => setSelectedProject(p)}
                        style={{ fontSize: "1.35rem", fontWeight: 800, marginBottom: "0.2rem", cursor: "pointer" }}
                      >
                        {p.title}
                      </h3>
                      <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                        {p.subtitle[lang]}
                      </p>
                    </div>

                    <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "1.2rem", fontStyle: "italic", borderLeft: "2px solid var(--border-strong)", paddingLeft: "0.8rem" }}>
                      "{p.tagline[lang]}"
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
                      {p.technologies.slice(0, 5).map((t) => (
                        <span key={t} className="tech-tag">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "0.8rem", paddingTop: "1rem", borderTop: "1px solid var(--border-subtle)", flexWrap: "wrap", alignItems: "center" }}>
                    <button
                      onClick={() => setSelectedProject(p)}
                      className="btn btn-primary btn-sm"
                      style={{ flex: 1 }}
                    >
                      <span>{uiText.home.viewCaseStudy}</span>
                      <Icon name="chevron-right" size={14} />
                    </button>
                    {p.driveFolder && (
                      <a
                        href={p.driveFolder}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                        title={lang === "fr" ? "Dossier Google Drive" : "Google Drive Folder"}
                        style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}
                      >
                        <Icon name="folder" size={15} />
                        <span>Drive</span>
                      </a>
                    )}
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" title="Code GitHub">
                        <Icon name="github" size={16} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. CERTIFICATIONS CLÉS & CONTACT FINAL */}
          <div style={{ marginBottom: "3rem" }}>
            <div
              style={{
                background: "linear-gradient(135deg, rgba(225, 29, 72, 0.12) 0%, rgba(15, 23, 42, 0.8) 100%)",
                border: "1px solid rgba(225, 29, 72, 0.3)",
                borderRadius: "var(--radius-lg)",
                padding: "3rem 2.2rem"
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.1fr 0.9fr",
                  gap: "2.5rem",
                  alignItems: "center"
                }}
                className="home-footer-cta-grid"
              >
                <div>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      background: "var(--accent-primary)",
                      color: "#FFFFFF",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "var(--radius-full)",
                      fontSize: "0.78rem",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: "1rem"
                    }}
                  >
                    <Icon name="rocket" size={13} />
                    <span>{isFr ? "Disponibilité Immédiate PFE 2027" : "PFE Availability 2027"}</span>
                  </span>

                  <h3 style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.2rem)", fontWeight: 900, marginBottom: "0.8rem", lineHeight: 1.25 }}>
                    {isFr ? "Prêt à échanger sur votre prochain défi d'ingénierie" : "Ready to discuss your next engineering milestone"}
                  </h3>

                  <p style={{ color: "var(--text-secondary)", fontSize: "0.975rem", lineHeight: 1.7, marginBottom: "1.6rem" }}>
                    {isFr
                      ? "À la recherche d'un stage PFE de 4 à 6 mois dès le 25 janvier 2027. Joignable directement pour tout échange technique ou proposition de collaboration."
                      : "Looking for a 4 to 6-month graduation internship (PFE) starting Jan 25, 2027. Reach out directly for technical discussions or collaboration opportunities."}
                  </p>

                  <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", alignItems: "center" }}>
                    <Link to="/contact" className="btn btn-primary">
                      <Icon name="mail" size={17} />
                      <span>{uiText.hero.ctaContact}</span>
                    </Link>
                    <button onClick={onOpenCv} className="btn btn-secondary">
                      <Icon name="download" size={17} />
                      <span>{uiText.hero.ctaDownloadCv}</span>
                    </button>
                    <a
                      href={personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                      title="LinkedIn"
                    >
                      <Icon name="linkedin" size={17} />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href={personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                      title="GitHub"
                    >
                      <Icon name="github" size={17} />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>

                {/* Right: Direct Contact Cards */}
                <div
                  style={{
                    background: "var(--bg-elevated)",
                    borderRadius: "var(--radius-md)",
                    padding: "1.8rem",
                    border: "1px solid var(--border-subtle)"
                  }}
                >
                  <h4 style={{ fontSize: "0.95rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--accent-primary)", marginBottom: "1.2rem" }}>
                    {isFr ? "Coordonnées Directes" : "Direct Channels"}
                  </h4>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                    <a
                      href={`mailto:${personal.email}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        color: "var(--text-primary)",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        padding: "0.55rem 0.75rem",
                        borderRadius: "var(--radius-sm)",
                        background: "var(--bg-body)",
                        border: "1px solid var(--border-subtle)"
                      }}
                      className="hover-border-accent"
                    >
                      <Icon name="email" size={16} style={{ color: "var(--accent-primary)" }} />
                      <span style={{ fontFamily: "var(--font-mono)" }}>{personal.email}</span>
                    </a>

                    <a
                      href={personal.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        color: "var(--text-primary)",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        padding: "0.55rem 0.75rem",
                        borderRadius: "var(--radius-sm)",
                        background: "var(--bg-body)",
                        border: "1px solid var(--border-subtle)"
                      }}
                      className="hover-border-accent"
                    >
                      <Icon name="whatsapp" size={16} style={{ color: "var(--success)" }} />
                      <span style={{ fontFamily: "var(--font-mono)" }}>{personal.phoneDisplay} (WhatsApp)</span>
                    </a>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        color: "var(--text-muted)",
                        fontSize: "0.85rem",
                        padding: "0.55rem 0.75rem"
                      }}
                    >
                      <Icon name="map-pin" size={16} style={{ color: "var(--accent-secondary)" }} />
                      <span>{personal.location[lang]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Détails Projet */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          lang={lang}
          uiText={uiText}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <style>{`
        @media (max-width: 900px) {
          .hse-showcase-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .home-footer-cta-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 640px) {
          .home-featured-grid {
            grid-template-columns: 1fr !important;
            gap: 1.4rem !important;
          }
        }
      `}</style>
    </div>
  );
}
