import React from "react";
import { Icon } from "./Icons";

export function Formation({ lang, uiText, formation }) {
  return (
    <section id="formation" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Icon name="graduation-cap" size={14} />
            <span>{uiText.formation.badge}</span>
          </div>
          <h2 className="section-title">{uiText.formation.title}</h2>
          <p className="section-subtitle">{uiText.formation.subtitle}</p>
        </div>

        {/* Formation Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {formation.map((item) => (
            <div
              key={item.id}
              className="glass-card formation-card"
              style={{
                padding: "2.5rem",
                borderLeft: item.id === "emsi-cycle" ? "4px solid #ef4444" : "4px solid var(--accent-primary)"
              }}
            >
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
                      background: item.id === "emsi-cycle" ? "rgba(215, 38, 61, 0.12)" : "rgba(81, 96, 122, 0.16)",
                      color: item.id === "emsi-cycle" ? "var(--accent-primary)" : "var(--accent-secondary)",
                      border: `1px solid ${item.id === "emsi-cycle" ? "rgba(215, 38, 61, 0.3)" : "rgba(81, 96, 122, 0.3)"}`
                    }}
                  >
                    {item.level}
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                    {item.status[lang]}
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--text-muted)", fontSize: "0.875rem" }}>
                  <Icon name="calendar" size={14} />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Title & Institution */}
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, marginBottom: "0.35rem" }}>
                {item.degree[lang]}
              </h3>
              <h4 style={{ fontSize: "1rem", color: "var(--text-secondary)", fontWeight: 600, marginBottom: "1rem" }}>
                {item.institution}
              </h4>

              <div
                style={{
                  color: "var(--accent-primary)",
                  fontWeight: 600,
                  fontSize: "0.925rem",
                  marginBottom: "1rem"
                }}
              >
                {item.option[lang]}
              </div>

              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.4rem" }}>
                {item.description[lang]}
              </p>

              {/* Badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {item.badges.map((b) => (
                  <span key={b} className="tech-tag">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .formation-card {
            padding: 1.4rem 1.15rem !important;
          }
        }
      `}</style>
    </section>
  );
}

