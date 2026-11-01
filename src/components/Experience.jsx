import React from "react";
import { Icon } from "./Icons";

export function Experience({ lang, uiText, experiences }) {
  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Icon name="briefcase" size={14} />
            <span>{uiText.experience.badge}</span>
          </div>
          <h2 className="section-title">{uiText.experience.title}</h2>
          <p className="section-subtitle">{uiText.experience.subtitle}</p>
        </div>

        {/* Experience Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="glass-card"
              style={{
                padding: "2.5rem",
                borderLeft: exp.featured ? "4px solid #ef4444" : "4px solid var(--accent-primary)",
                position: "relative"
              }}
            >
              {/* Header Info */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                  marginBottom: "1rem"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", flexWrap: "wrap" }}>
                  <span
                    style={{
                      padding: "0.35rem 0.9rem",
                      borderRadius: "var(--radius-full)",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      background: exp.featured ? "rgba(215, 38, 61, 0.12)" : "rgba(81, 96, 122, 0.16)",
                      color: exp.featured ? "var(--accent-primary)" : "var(--accent-secondary)",
                      border: `1px solid ${exp.featured ? "rgba(215, 38, 61, 0.3)" : "rgba(81, 96, 122, 0.3)"}`
                    }}
                  >
                    {exp.badge}
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                    {exp.type[lang]}
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--text-muted)", fontSize: "0.875rem" }}>
                  <Icon name="calendar" size={14} />
                  <span>{exp.period[lang]}</span>
                </div>
              </div>

              {/* Title & Company */}
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, marginBottom: "0.35rem" }}>
                {exp.role[lang]}
              </h3>
              <h4 style={{ fontSize: "1rem", color: "var(--text-secondary)", fontWeight: 600, marginBottom: "1.2rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <Icon name="briefcase" size={15} style={{ color: "var(--accent-primary)" }} />
                <span>{exp.company}</span>
              </h4>

              {/* Description */}
              <p style={{ color: "var(--text-primary)", fontSize: "0.975rem", marginBottom: "1.2rem", lineHeight: 1.6 }}>
                <strong>{exp.projectTitle} : </strong>
                {exp.description[lang]}
              </p>

              {/* Bullet highlights */}
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.5rem" }}>
                {exp.highlights.map((hl, hIdx) => (
                  <li key={hIdx} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "0.925rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                    <Icon name="chevron-right" size={15} style={{ color: "var(--accent-primary)", marginTop: "3px" }} />
                    <span>{hl[lang]}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Badges wrap */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
                {exp.skills.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Official Result Banner */}
              {exp.result && (
                <div
                  style={{
                    background: "rgba(16, 185, 129, 0.08)",
                    border: "1px solid rgba(16, 185, 129, 0.25)",
                    borderRadius: "var(--radius-sm)",
                    padding: "0.85rem 1.2rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    fontSize: "0.875rem",
                    color: "var(--text-primary)"
                  }}
                >
                  <Icon name="award" size={18} style={{ color: "var(--success)" }} />
                  <div>
                    <strong style={{ color: "var(--success)" }}>{uiText.experience.officialAttestation} : </strong>
                    <span>{exp.result[lang]}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

