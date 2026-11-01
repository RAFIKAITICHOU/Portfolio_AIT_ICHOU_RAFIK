import React from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "../components/PageLayout";
import { Icon } from "../components/Icons";

export function ObjectivesPage({ lang, uiText, objectives, onOpenCv }) {
  const imm = objectives.immediate;
  const lt = objectives.longTerm;

  return (
    <PageLayout
      lang={lang}
      uiText={uiText}
      current={uiText.nav.objectives}
      prev={{ label: uiText.nav.skills, path: "/skills" }}
      next={{ label: uiText.nav.contact, path: "/contact" }}
    >
      <section className="section" style={{ paddingTop: "1.5rem" }}>
        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <div className="section-badge">
              <Icon name="rocket" size={14} />
              <span>{uiText.objectives.badge}</span>
            </div>
            <h2 className="section-title">{uiText.objectives.title}</h2>
            <p className="section-subtitle">{uiText.objectives.subtitle}</p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
              gap: "2.5rem"
            }}
          >
            {/* Card 1: Immediate PFE Objective */}
            <div
              className="glass-card"
              style={{
                padding: "2.8rem",
                borderTop: "4px solid var(--accent-primary)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <div>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "var(--radius-sm)",
                    background: "rgba(215, 38, 61, 0.12)",
                    color: "var(--accent-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.2rem"
                  }}
                >
                  <Icon name="target" size={24} />
                </div>

                <div
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--accent-primary)",
                    marginBottom: "0.4rem"
                  }}
                >
                  {imm.subtitle[lang]}
                </div>

                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem" }}>
                  {imm.title[lang]}
                </h3>

                <p style={{ color: "var(--text-secondary)", fontSize: "0.975rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  {imm.description[lang]}
                </p>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", marginBottom: "2rem" }}>
                  {imm.points.map((pt, idx) => (
                    <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "0.925rem", color: "var(--text-primary)", lineHeight: 1.55 }}>
                      <Icon name="check-circle" size={17} style={{ color: "var(--accent-primary)", flexShrink: 0, marginTop: "3px" }} />
                      <span>{pt[lang]}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", paddingTop: "1.5rem", borderTop: "1px solid var(--border-subtle)" }}>
                <Link to="/contact" className="btn btn-primary btn-sm" style={{ flex: 1 }}>
                  <Icon name="mail" size={14} />
                  <span>{lang === "fr" ? "Proposer un sujet PFE" : "Propose a PFE Topic"}</span>
                </Link>
                <button onClick={onOpenCv} className="btn btn-secondary btn-sm">
                  <Icon name="download" size={14} />
                  <span>CV PFE</span>
                </button>
              </div>
            </div>

            {/* Card 2: Long-Term Vision */}
            <div
              className="glass-card"
              style={{
                padding: "2.8rem",
                borderTop: "4px solid var(--accent-secondary)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <div>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "var(--radius-sm)",
                    background: "rgba(81, 96, 122, 0.16)",
                    color: "var(--accent-secondary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.2rem"
                  }}
                >
                  <Icon name="rocket" size={24} />
                </div>

                <div
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--accent-secondary)",
                    marginBottom: "0.4rem"
                  }}
                >
                  {lt.subtitle[lang]}
                </div>

                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem" }}>
                  {lt.title[lang]}
                </h3>

                <p style={{ color: "var(--text-secondary)", fontSize: "0.975rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  {lt.description[lang]}
                </p>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", marginBottom: "2rem" }}>
                  {lt.points.map((pt, idx) => (
                    <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "0.925rem", color: "var(--text-primary)", lineHeight: 1.55 }}>
                      <Icon name="check-circle" size={17} style={{ color: "var(--accent-secondary)", flexShrink: 0, marginTop: "3px" }} />
                      <span>{pt[lang]}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", paddingTop: "1.5rem", borderTop: "1px solid var(--border-subtle)" }}>
                <Link to="/skills" className="btn btn-secondary btn-sm" style={{ flex: 1 }}>
                  <Icon name="cpu" size={14} />
                  <span>{lang === "fr" ? "Consulter mes compétences" : "Explore Technical Stack"}</span>
                </Link>
                <Link to="/projects" className="btn btn-outline btn-sm">
                  <Icon name="code" size={14} />
                  <span>{lang === "fr" ? "Projets" : "Projects"}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
