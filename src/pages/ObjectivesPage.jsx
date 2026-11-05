import React from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "../components/PageLayout";
import { Icon } from "../components/Icons";
import { Seo } from "../components/Seo";

export function ObjectivesPage({ lang, uiText, objectives, onOpenCv }) {
  const isFr = lang === "fr";
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
      <Seo
        title={
          isFr
            ? "Objectifs Professionnels & PFE 2027 | Rafik Ait Ichou"
            : "Career Goals & Graduation Internship | Rafik Ait Ichou"
        }
        description={
          isFr
            ? "Objectif prioritaire : Stage PFE de 4 à 6 mois dès le 25 janvier 2027 en ingénierie logicielle, architectures réactives et plateformes cloud."
            : "Primary goal: 4 to 6-month graduation internship (PFE) starting Jan 25, 2027 in software engineering, reactive architectures, and cloud systems."
        }
        path="/objectives"
        lang={lang}
      />
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
            className="objectives-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
              gap: "2.5rem"
            }}
          >
            {/* Card 1: Immediate PFE Objective */}
            <div
              className="glass-card objective-card"
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
              className="glass-card objective-card"
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

        <style>{`
          @media (max-width: 768px) {
            .objectives-grid {
              grid-template-columns: 1fr !important;
              gap: 1.8rem !important;
            }
          }
          @media (max-width: 640px) {
            .objective-card {
              padding: 1.4rem 1.15rem !important;
            }
          }
        `}</style>
      </section>
    </PageLayout>
  );
}
