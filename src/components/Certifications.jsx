import React from "react";
import { Icon } from "./Icons";

export function Certifications({ lang, uiText, certifications }) {
  return (
    <section id="certifications" className="section" style={{ background: "transparent" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Icon name="award" size={14} />
            <span>{uiText.certifications.badge}</span>
          </div>
          <h2 className="section-title">{uiText.certifications.title}</h2>
          <p className="section-subtitle">{uiText.certifications.subtitle}</p>
        </div>

        {/* Certifications Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.8rem"
          }}
        >
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "2rem"
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1.2rem"
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "var(--radius-sm)",
                      background: "rgba(215, 38, 61, 0.12)",
                      color: "var(--accent-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Icon name={cert.icon} size={22} />
                  </div>
                  <span
                    style={{
                      fontSize: "0.775rem",
                      fontWeight: 700,
                      padding: "0.25rem 0.65rem",
                      background: "var(--bg-elevated)",
                      borderRadius: "var(--radius-full)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-muted)"
                    }}
                  >
                    {cert.category} • {cert.date}
                  </span>
                </div>

                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "0.3rem" }}>
                  {cert.title}
                </h3>
                <h4 style={{ fontSize: "0.875rem", color: "var(--accent-primary)", fontWeight: 600, marginBottom: "1rem" }}>
                  {cert.issuer}
                </h4>

                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                  {cert.description[lang]}
                </p>
              </div>

              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <span>{uiText.certifications.verifyCredential}</span>
                <Icon name="external-link" size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

