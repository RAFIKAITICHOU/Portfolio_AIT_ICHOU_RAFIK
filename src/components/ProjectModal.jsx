import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { Icon } from "./Icons";

export function ProjectModal({ project, lang, uiText, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    // Lock body scroll to prevent background scrolling behind the modal
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  if (!project) return null;

  return createPortal(
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

        {/* Header with Project Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.2rem", marginBottom: "1.5rem" }}>
          {project.logo && (
            <div
              style={{
                width: "68px",
                height: "68px",
                minWidth: "68px",
                borderRadius: "var(--radius-md)",
                background: "var(--bg-elevated)",
                border: "1px solid var(--border-subtle)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px",
                overflow: "hidden",
                boxShadow: "0 6px 18px rgba(0,0,0,0.18)"
              }}
            >
              <img
                src={project.logo}
                alt={`${project.title} logo`}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          )}
          <div style={{ flex: 1 }}>
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "var(--accent-primary)",
                marginBottom: "0.3rem",
                display: "block"
              }}
            >
              {project.categoryLabel[lang]}
            </span>
            <h3 style={{ fontSize: "1.8rem", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.3rem" }}>
              {project.title}
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
              {project.subtitle[lang]}
            </p>
          </div>
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
        <div style={{ marginBottom: "1.8rem" }}>
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

        {/* Demo Videos Section (V1 and V2) */}
        {project.demoVideos && project.demoVideos.length > 0 && (
          <div
            style={{
              background: "var(--bg-elevated)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-md)",
              padding: "1.2rem",
              marginBottom: "1.8rem"
            }}
          >
            <h4
              style={{
                fontSize: "0.95rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "0.8rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
              }}
            >
              <Icon name="folder" size={16} />
              <span>{lang === "fr" ? "Démonstrations & Livrables (Vidéos & Drive)" : "Demo Videos & Drive Deliverables"}</span>
            </h4>

            {/* Embedded YouTube player if available */}
            {project.demoVideos.find((v) => v.embedUrl) && (
              <div style={{ marginBottom: "1rem", borderRadius: "var(--radius-sm)", overflow: "hidden", border: "1px solid var(--border-subtle)" }}>
                <iframe
                  src={project.demoVideos.find((v) => v.embedUrl).embedUrl}
                  title="Video Demo"
                  style={{ width: "100%", height: "260px", border: "none", display: "block" }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {project.demoVideos.map((video, idx) => (
                <a
                  key={idx}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.65rem 0.9rem",
                    background: "var(--bg-body)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-sm)",
                    color: "var(--text-primary)",
                    textDecoration: "none",
                    transition: "all 0.2s ease"
                  }}
                  className="hover-border-accent"
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                    <div
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        background: video.platform === "youtube" ? "rgba(239, 68, 68, 0.15)" : (video.platform === "drive" ? "rgba(56, 189, 248, 0.15)" : "rgba(215, 38, 61, 0.12)"),
                        color: video.platform === "youtube" ? "#ef4444" : (video.platform === "drive" ? "#38bdf8" : "var(--accent-primary)"),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <Icon name={video.platform === "youtube" ? "youtube" : (video.platform === "drive" ? "folder" : "play")} size={14} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.88rem", fontWeight: 700 }}>
                        {video.title[lang] || video.title}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                        {video.platform === "youtube" ? "YouTube (Lecteur HD)" : "Google Drive (Dossier & Fichiers)"}
                      </div>
                    </div>
                  </div>
                  <Icon name="external-link" size={14} style={{ color: "var(--text-muted)" }} />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
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
          {project.demoVideos && project.demoVideos.length > 0 ? (
            project.demoVideos.map((video, idx) => (
              <a
                key={idx}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Icon name={video.platform === "youtube" ? "youtube" : (video.platform === "drive" ? "folder" : "play")} size={16} />
                <span>{video.label ? (video.label[lang] || video.label) : (video.title[lang] || video.title)}</span>
              </a>
            ))
          ) : project.demoVideo && (
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
    </div>,
    document.body
  );
}

