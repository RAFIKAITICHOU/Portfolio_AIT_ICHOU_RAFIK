import React from "react";
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { Stats } from "../components/Stats";
import { Icon } from "../components/Icons";

export function HomePage({ lang, uiText, personal, stats, projects, onOpenCv }) {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 2);

  return (
    <div>
      {/* Hero Header */}
      <Hero
        lang={lang}
        uiText={uiText}
        personal={personal}
        onOpenCv={onOpenCv}
      />

      {/* KPI Stats with Exact Context */}
      <Stats lang={lang} stats={stats} />

      {/* Quick Overview Section */}
      <section className="section" style={{ paddingTop: "1.5rem" }}>
        <div className="container">
          {/* Engineering Approach Box */}
          <div
            className="glass-card"
            style={{
              padding: "2.8rem",
              marginBottom: "4rem",
              borderLeft: "4px solid var(--accent-primary)"
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 0.8fr",
                gap: "2.5rem",
                alignItems: "center"
              }}
              className="home-teaser-grid"
            >
              <div>
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--accent-primary)",
                    marginBottom: "0.5rem",
                    display: "block"
                  }}
                >
                  {lang === "fr" ? "L'Exigence d'Ingénierie" : "Engineering Rigor"}
                </span>
                <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "1rem" }}>
                  {lang === "fr"
                    ? "Concevoir des architectures fiables, testées et scalables"
                    : "Architecting reliable, end-to-end tested systems"}
                </h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  {personal.bioShort[lang]}
                </p>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <Link to="/about" className="btn btn-primary btn-sm">
                    <span>{lang === "fr" ? "En savoir plus sur mon profil" : "Learn more about me"}</span>
                    <Icon name="chevron-right" size={14} />
                  </Link>
                  <Link to="/objectives" className="btn btn-secondary btn-sm">
                    <Icon name="rocket" size={14} />
                    <span>{lang === "fr" ? "Objectifs PFE 2027" : "PFE 2027 Goals"}</span>
                  </Link>
                </div>
              </div>

              {/* Dynamic Status Box (No hardcoded strings) */}
              <div
                style={{
                  background: "var(--bg-elevated)",
                  borderRadius: "var(--radius-md)",
                  padding: "1.8rem",
                  border: "1px solid var(--border-subtle)"
                }}
              >
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: "1.2rem", color: "var(--accent-primary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {uiText.home.pfeStatusTitle}
                </h3>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem", fontSize: "0.9rem" }}>
                  <li style={{ display: "flex", gap: "0.6rem" }}>
                    <Icon name="check-circle" size={17} style={{ color: "var(--success)", flexShrink: 0, marginTop: "2px" }} />
                    <div>
                      <strong style={{ color: "var(--text-primary)" }}>{uiText.home.pfeDetailsLabel}</strong>
                      <div style={{ color: "var(--text-secondary)" }}>{uiText.home.pfeDetailsVal}</div>
                    </div>
                  </li>
                  <li style={{ display: "flex", gap: "0.6rem" }}>
                    <Icon name="check-circle" size={17} style={{ color: "var(--success)", flexShrink: 0, marginTop: "2px" }} />
                    <div>
                      <strong style={{ color: "var(--text-primary)" }}>{uiText.home.dualDegreeLabel}</strong>
                      <div style={{ color: "var(--text-secondary)" }}>{uiText.home.dualDegreeVal}</div>
                    </div>
                  </li>
                  <li style={{ display: "flex", gap: "0.6rem" }}>
                    <Icon name="check-circle" size={17} style={{ color: "var(--success)", flexShrink: 0, marginTop: "2px" }} />
                    <div>
                      <strong style={{ color: "var(--text-primary)" }}>{uiText.home.mobilityLabel}</strong>
                      <div style={{ color: "var(--text-secondary)" }}>{uiText.home.mobilityVal}</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Featured Industrial Projects Highlight */}
          <div style={{ marginBottom: "4rem" }}>
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
                  <Icon name="star" size={14} />
                  <span>{uiText.home.featuredTitle}</span>
                </div>
                <h2 style={{ fontSize: "1.9rem", fontWeight: 800 }}>
                  {uiText.home.featuredSubtitle}
                </h2>
              </div>
              <Link to="/projects" className="btn btn-outline btn-sm">
                <span>{uiText.home.viewAllProjects}</span>
                <Icon name="chevron-right" size={14} />
              </Link>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
                gap: "2rem"
              }}
            >
              {featuredProjects.map((p) => (
                <div
                  key={p.id}
                  className="glass-card"
                  style={{
                    padding: "2.2rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    borderTop: "4px solid var(--accent-primary)"
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.8rem" }}>
                      <span style={{ fontSize: "0.78rem", color: "var(--accent-primary)", fontWeight: 700, textTransform: "uppercase" }}>
                        {p.categoryLabel[lang]}
                      </span>
                      <span style={{ color: "var(--warning)", fontSize: "0.78rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.2rem" }}>
                        <Icon name="star" size={13} /> Projet Phare
                      </span>
                    </div>

                    <h3 style={{ fontSize: "1.35rem", fontWeight: 800, marginBottom: "0.35rem" }}>
                      {p.title}
                    </h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.925rem", marginBottom: "0.8rem" }}>
                      {p.subtitle[lang]}
                    </p>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "1.2rem", fontStyle: "italic", borderLeft: "2px solid var(--border-strong)", paddingLeft: "0.8rem" }}>
                      "{p.tagline[lang]}"
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
                      {p.technologies.slice(0, 5).map((t) => (
                        <span key={t} className="tech-tag">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "0.8rem", paddingTop: "1rem", borderTop: "1px solid var(--border-subtle)" }}>
                    <Link to="/projects" className="btn btn-primary btn-sm" style={{ flex: 1 }}>
                      <span>{uiText.home.viewCaseStudy}</span>
                      <Icon name="chevron-right" size={14} />
                    </Link>
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

          {/* Quick Nav Cards Grid */}
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h3 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: "0.5rem" }}>
              {uiText.home.exploreSectionsTitle}
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.975rem", maxWidth: "600px", margin: "0 auto 2rem auto" }}>
              {uiText.home.exploreSectionsSubtitle}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1.2rem"
              }}
            >
              {[
                { to: "/about", label: uiText.nav.about, icon: "sparkles", desc: lang === "fr" ? "Vision, méthode & atouts" : "Philosophy & strengths" },
                { to: "/formation", label: uiText.nav.formation, icon: "graduation-cap", desc: lang === "fr" ? "EMSI & Licence" : "EMSI & Bachelor" },
                { to: "/certifications", label: uiText.nav.certifications, icon: "award", desc: lang === "fr" ? "IBM, Cloud & IA" : "IBM, Cloud & AI" },
                { to: "/experience", label: uiText.nav.experience, icon: "briefcase", desc: lang === "fr" ? "OCP Safi, E-TEAM ENS" : "OCP Safi, Leadership" },
                { to: "/projects", label: uiText.nav.projects, icon: "code", desc: lang === "fr" ? "Études de cas & démos" : "Case studies & demos" },
                { to: "/skills", label: uiText.nav.skills, icon: "cpu", desc: lang === "fr" ? "Stack & niveaux de maîtrise" : "Tech stack & mastery" },
                { to: "/objectives", label: uiText.nav.objectives, icon: "rocket", desc: lang === "fr" ? "PFE 2027 & carrière" : "PFE 2027 & roadmap" },
                { to: "/contact", label: uiText.nav.contact, icon: "mail", desc: lang === "fr" ? "Échange & proposition" : "Get in touch directly" }
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="glass-card"
                  style={{
                    padding: "1.5rem",
                    textAlign: "center",
                    textDecoration: "none",
                    color: "inherit",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                  }}
                >
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      background: "rgba(215, 38, 61, 0.1)",
                      color: "var(--accent-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.8rem"
                    }}
                  >
                    <Icon name={item.icon} size={20} />
                  </div>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.25rem", color: "var(--text-primary)" }}>
                    {item.label}
                  </h4>
                  <p style={{ fontSize: "0.825rem", color: "var(--text-muted)", marginBottom: "0.8rem" }}>
                    {item.desc}
                  </p>
                  <span style={{ fontSize: "0.8rem", color: "var(--accent-primary)", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.2rem" }}>
                    <span>{lang === "fr" ? "Consulter" : "View"}</span>
                    <Icon name="chevron-right" size={13} />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Recruiter Action Banner */}
          <div
            className="glass-card"
            style={{
              padding: "3rem 2rem",
              textAlign: "center",
              borderTop: "4px solid var(--accent-primary)"
            }}
          >
            <h3 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: "0.8rem" }}>
              {uiText.home.ctaBannerTitle}
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", maxWidth: "600px", margin: "0 auto 1.8rem auto" }}>
              {uiText.home.ctaBannerSubtitle}
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/contact" className="btn btn-primary">
                <Icon name="mail" size={18} />
                <span>{uiText.hero.ctaContact}</span>
              </Link>
              <button onClick={onOpenCv} className="btn btn-secondary">
                <Icon name="download" size={18} />
                <span>{uiText.hero.ctaDownloadCv}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .home-teaser-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
