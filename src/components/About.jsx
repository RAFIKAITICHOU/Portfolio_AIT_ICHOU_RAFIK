import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "./Icons";

export function About({ lang, uiText, personal, onOpenCv }) {
  return (
    <section id="about" className="section" style={{ background: "transparent" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Icon name="sparkles" size={14} />
            <span>{uiText.about.badge}</span>
          </div>
          <h2 className="section-title">{uiText.about.title}</h2>
          <p className="section-subtitle">{uiText.about.subtitle}</p>
        </div>

        {/* Narrative Box */}
        <div
          className="glass-card about-overview-card"
          style={{
            padding: "2.8rem",
            marginBottom: "3rem",
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
            className="about-overview-grid"
          >
            <div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem" }}>
                {lang === "fr" ? "L'Exigence de la Qualité et de l'Impact Métier" : "Engineering Rigor & Business Impact"}
              </h3>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.8,
                  marginBottom: "1.2rem"
                }}
              >
                {personal.bioLong[lang]}
              </p>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.7
                }}
              >
                {lang === "fr"
                  ? "Mon approche repose sur des principes d'architecture solides (Clean Architecture, DDD, tests automatisés en continu) pour garantir que chaque ligne de code produite soit maintenable, scalable et directement créatrice de valeur industrielle."
                  : "My approach relies on rock-solid architectural fundamentals (Clean Architecture, DDD, continuous automated testing) ensuring every line of delivered code is maintainable, scalable, and creates real industrial value."}
              </p>

              <div style={{ display: "flex", gap: "1rem", marginTop: "1.8rem", flexWrap: "wrap" }}>
                <button onClick={onOpenCv} className="btn btn-primary btn-sm">
                  <Icon name="download" size={16} />
                  <span>{uiText.about.downloadCv}</span>
                </button>
                <Link to="/contact" className="btn btn-secondary btn-sm">
                  <Icon name="send" size={16} />
                  <span>{uiText.about.contactMe}</span>
                </Link>
              </div>
            </div>

            {/* Quick Fast Facts Card */}
            <div
              style={{
                background: "var(--bg-elevated)",
                padding: "2rem",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-subtle)"
              }}
            >
              <h4 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "1.2rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--accent-primary)" }}>
                {lang === "fr" ? "Points Clés du Profil" : "Key Highlights"}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.925rem" }}>
                  <Icon name="check-circle" size={18} style={{ color: "var(--success)", marginTop: "2px" }} />
                  <div>
                    <strong>{lang === "fr" ? "Disponibilité PFE :" : "PFE Availability:"}</strong>
                    <div style={{ color: "var(--text-secondary)" }}>25 Janvier 2027 (4 à 6 mois)</div>
                  </div>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.925rem" }}>
                  <Icon name="check-circle" size={18} style={{ color: "var(--success)", marginTop: "2px" }} />
                  <div>
                    <strong>{lang === "fr" ? "Formation :" : "Education:"}</strong>
                    <div style={{ color: "var(--text-secondary)" }}>EMSI Marrakech (Cycle d'Ingénieur)</div>
                  </div>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.925rem" }}>
                  <Icon name="check-circle" size={18} style={{ color: "var(--success)", marginTop: "2px" }} />
                  <div>
                    <strong>{lang === "fr" ? "Expérience Industrielle :" : "Industrial Track Record:"}</strong>
                    <div style={{ color: "var(--text-secondary)" }}>DSI OCP Safi (Plateforme Smart HSE 360)</div>
                  </div>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.925rem" }}>
                  <Icon name="check-circle" size={18} style={{ color: "var(--success)", marginTop: "2px" }} />
                  <div>
                    <strong>{lang === "fr" ? "Mobilité :" : "Mobility:"}</strong>
                    <div style={{ color: "var(--text-secondary)" }}>Maroc (Casablanca, Rabat, etc.) & International</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4 Value Pillars */}
        <h3
          style={{
            fontSize: "1.4rem",
            fontWeight: 800,
            textAlign: "center",
            marginBottom: "2rem"
          }}
        >
          {uiText.about.keyStrengthsTitle}
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
            gap: "1.5rem"
          }}
        >
          {uiText.about.strengths.map((item, index) => (
            <div
              key={index}
              className="glass-card"
              style={{
                padding: "2rem 1.8rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.8rem"
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
                  justifyContent: "center",
                  marginBottom: "0.4rem"
                }}
              >
                <Icon
                  name={index === 0 ? "shield-check" : index === 1 ? "cpu" : index === 2 ? "award" : "calendar"}
                  size={22}
                />
              </div>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)" }}>
                {item.title}
              </h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-overview-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 640px) {
          .about-overview-card {
            padding: 1.4rem 1.15rem !important;
          }
        }
      `}</style>
    </section>
  );
}

