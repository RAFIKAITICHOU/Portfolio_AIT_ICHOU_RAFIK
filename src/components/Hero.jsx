import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "./Icons";

export function Hero({ lang, uiText, personal, onOpenCv }) {
  return (
    <section
      id="hero"
      style={{
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "calc(var(--nav-height) + 1.5rem)",
        paddingBottom: "3rem",
        position: "relative"
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "3.5rem",
            alignItems: "center"
          }}
          className="hero-grid"
        >
          {/* Left Column: Clear Identity & Objectives */}
          <div>
            {/* Availability Badge */}
            <div className="pulse-badge" style={{ marginBottom: "1.4rem" }}>
              <span className="pulse-dot"></span>
              <span>{personal.status[lang]}</span>
            </div>

            {/* Authoritative Single Title */}
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5.2vw, 3.8rem)",
                fontWeight: 900,
                letterSpacing: "-0.035em",
                lineHeight: 1.1,
                marginBottom: "1rem"
              }}
            >
              <span>{personal.name}</span>
            </h1>

            {/* Clear Role Line */}
            <h2
              style={{
                fontSize: "clamp(1.15rem, 2.2vw, 1.45rem)",
                fontWeight: 700,
                color: "var(--accent-secondary)",
                marginBottom: "1.2rem",
                lineHeight: 1.4
              }}
            >
              {personal.title[lang]}
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                marginBottom: "2rem",
                maxWidth: "58ch"
              }}
            >
              {personal.bioShort[lang]}
            </p>

            {/* Two Main Hero Buttons (Phase B) */}
            <div
              className="hero-cta-group"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                alignItems: "center"
              }}
            >
              <button onClick={onOpenCv} className="btn btn-primary">
                <Icon name="download" size={18} />
                <span>{uiText.hero.ctaDownloadCv}</span>
              </button>

              <Link to="/contact" className="btn btn-secondary">
                <Icon name="mail" size={18} />
                <span>{uiText.hero.ctaContact}</span>
              </Link>

              {personal.calendarBookingLink && (
                <a
                  href={personal.calendarBookingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <Icon name="calendar" size={16} />
                  <span>{uiText.hero.ctaSchedule}</span>
                </a>
              )}
            </div>

            {/* Technology Stack Tags */}
            <div
              style={{
                marginTop: "2.4rem",
                paddingTop: "1.6rem",
                borderTop: "1px solid var(--border-subtle)",
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "0.5rem"
              }}
            >
              <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginRight: "0.4rem" }}>
                Stack Majeure :
              </span>
              {["Spring Boot", "Angular", "React", "Flutter", "PostgreSQL", "Docker", "IA & OpenCV", "SonarQube"].map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Clean Profile Card (No duplicate name) */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              className="glass-card hero-profile-card"
              style={{
                width: "100%",
                maxWidth: "380px",
                padding: "2rem",
                boxShadow: "var(--shadow-lg)",
                textAlign: "center",
                borderTop: "4px solid var(--accent-primary)"
              }}
            >
              {/* Photo with clean ring */}
              <div
                style={{
                  width: "150px",
                  height: "150px",
                  margin: "0 auto 1.4rem auto",
                  borderRadius: "50%",
                  padding: "3px",
                  background: "var(--accent-gradient)",
                  boxShadow: "var(--shadow-glow)",
                  position: "relative"
                }}
              >
                <img
                  src={personal.photo}
                  alt={personal.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                    display: "block"
                  }}
                  loading="lazy"
                />
                <span
                  style={{
                    position: "absolute",
                    bottom: "6px",
                    right: "10px",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    backgroundColor: "var(--success)",
                    border: "3px solid var(--bg-card)"
                  }}
                  title={uiText.hero.statusActive}
                />
              </div>

              {/* School credentials */}
              <div style={{ color: "var(--accent-primary)", fontSize: "0.95rem", fontWeight: 700, marginBottom: "0.3rem" }}>
                EMSI Marrakech
              </div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.825rem", marginBottom: "1.2rem" }}>
                Cycle d'Ingénieur d'État • Promo 2027
              </div>

              {/* Verified Roles / Tags */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.55rem",
                  textAlign: "left",
                  background: "var(--bg-elevated)",
                  padding: "0.95rem 1.1rem",
                  borderRadius: "var(--radius-sm)",
                  marginBottom: "1.4rem",
                  fontSize: "0.825rem"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.55rem", color: "var(--text-secondary)" }}>
                  <Icon name="briefcase" size={15} style={{ color: "var(--accent-primary)", flexShrink: 0 }} />
                  <span>Ex-Ingénieur Stagiaire DSI • <strong>OCP Safi</strong></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.55rem", color: "var(--text-secondary)" }}>
                  <Icon name="award" size={15} style={{ color: "var(--accent-secondary)", flexShrink: 0 }} />
                  <span>Président • <strong>Club E-TEAM ENS</strong></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.55rem", color: "var(--text-secondary)" }}>
                  <Icon name="map-pin" size={15} style={{ color: "#EF4444", flexShrink: 0 }} />
                  <span>{personal.location[lang]}</span>
                </div>
              </div>

              {/* Social Channels */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.8rem"
                }}
              >
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ width: "38px", height: "38px", padding: 0 }}
                  title="GitHub"
                >
                  <Icon name="github" size={17} />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ width: "38px", height: "38px", padding: 0 }}
                  title="LinkedIn"
                >
                  <Icon name="linkedin" size={17} />
                </a>
                <a
                  href={personal.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ width: "38px", height: "38px", padding: 0 }}
                  title="WhatsApp"
                >
                  <Icon name="whatsapp" size={17} />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="btn btn-secondary btn-sm"
                  style={{ width: "38px", height: "38px", padding: 0 }}
                  title="Email"
                >
                  <Icon name="mail" size={17} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
            text-align: center;
          }
          .hero-grid p {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-cta-group {
            justify-content: center;
          }
          .hero-grid .btn {
            justify-content: center;
          }
          .hero-grid > div:first-child > div:last-child {
            justify-content: center;
          }
        }
        @media (max-width: 480px) {
          .hero-cta-group {
            flex-direction: column;
            width: 100%;
          }
          .hero-cta-group .btn {
            width: 100%;
          }
          .hero-profile-card {
            padding: 1.5rem 1.15rem !important;
          }
        }
      `}</style>
    </section>
  );
}
