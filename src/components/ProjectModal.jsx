import React, { useEffect } from "react";
import { Icon } from "./Icons";

export function ProjectModal({ project, lang, uiText, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1.2rem",
            right: "1.2rem",
            background: "var(--bg-elevated)",
            border: "1px solid var(--border-subtle)",
            color: "var(--text-secondary)",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s ease"
          }}
          aria-label="Fermer"
        >
          <Icon name="close" size={18} />
        </button>

        {/* Header */}
        <div style={{ marginBottom: "1.5rem" }}>
          <span
            style={{
              fontSize: "0.8rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "var(--accent-primary)",
              marginBottom: "0.4rem",
              display: "block"
            }}
          >
            {project.categoryLabel[lang]}
          </span>
          <h3 style={{ fontSize: "1.8rem", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.4rem" }}>
            {project.title}
          </h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
            {project.subtitle[lang]}
          </p>
        </div>

        {/* Metrics Grid */}
        {project.metrics && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
              gap: "0.8rem",
              marginBottom: "1.8rem"
            }}
          >
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                style={{
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-sm)",
                  padding: "0.75rem",
                  textAlign: "center"
                }}
              >
                <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--accent-primary)" }}>
                  {m.value}
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Problem & Solution */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem", marginBottom: "1.8rem" }}>
          <div
            style={{
              background: "rgba(239, 68, 68, 0.06)",
              border: "1px solid rgba(239, 68, 68, 0.2)",
              borderRadius: "var(--radius-md)",
              padding: "1.2rem"
            }}
          >
            <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ef4444", marginBottom: "0.4rem" }}>
              {lang === "fr" ? "Problématique Industrielle / Métier" : "Problem Statement"}
            </h4>
            <p style={{ fontSize: "0.925rem", color: "var(--text-primary)", lineHeight: 1.6 }}>
              {project.problem[lang]}
            </p>
          </div>

          <div
            style={{
              background: "rgba(16, 185, 129, 0.06)",
              border: "1px solid rgba(16, 185, 129, 0.2)",
              borderRadius: "var(--radius-md)",
              padding: "1.2rem"
            }}
          >
            <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#10b981", marginBottom: "0.4rem" }}>
              {lang === "fr" ? "Solution d'Ingénierie & Architecture" : "Engineering Solution & Architecture"}
            </h4>
            <p style={{ fontSize: "0.925rem", color: "var(--text-primary)", lineHeight: 1.6 }}>
              {project.solution[lang]}
            </p>
          </div>
        </div>

        {/* Results Banner */}
        <div
          style={{
            background: "var(--bg-elevated)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-md)",
            padding: "1.2rem",
            marginBottom: "1.8rem"
          }}
        >
          <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--accent-primary)", marginBottom: "0.4rem" }}>
            {lang === "fr" ? "Résultats Mesurables & Impact" : "Measurable Results & Impact"}
          </h4>
          <p style={{ fontSize: "0.925rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
            {project.result[lang]}
          </p>
        </div>

        {/* Tech Badges */}
        <div style={{ marginBottom: "2rem" }}>
          <h4 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-muted)", marginBottom: "0.6rem" }}>
            {lang === "fr" ? "Technologies Déployées" : "Technologies Used"}
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {project.technologies.map((t) => (
              <span key={t} className="tech-tag">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Icon name="github" size={16} />
              <span>{uiText.projects.codeSource}</span>
            </a>
          )}
          {project.demoVideo && (
            <a
              href={project.demoVideo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <Icon name="play" size={16} />
              <span>{uiText.projects.demoVideo}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

