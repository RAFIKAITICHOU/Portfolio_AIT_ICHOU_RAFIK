import React, { useEffect } from "react";
import { Icon } from "./Icons";

export function CvModal({ isOpen, onClose, lang, personal }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "560px" }}>
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
            cursor: "pointer"
          }}
          aria-label="Fermer"
        >
          <Icon name="close" size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              background: "rgba(215, 38, 61, 0.12)",
              color: "var(--accent-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1rem auto"
            }}
          >
            <Icon name="download" size={24} />
          </div>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "0.3rem" }}>
            {lang === "fr" ? "Sélectionnez une version de CV" : "Select a Resume Version"}
          </h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
            {lang === "fr"
              ? "Téléchargez le format adapté à votre besoin de recrutement."
              : "Download the version tailored to your recruitment requirements."}
          </p>
        </div>

        {/* CV Versions List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {personal.cvList.map((cv) => (
            <div
              key={cv.id}
              style={{
                background: "var(--bg-elevated)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-md)",
                padding: "1.2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem"
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                  <h4 style={{ fontSize: "0.95rem", fontWeight: 700 }}>
                    {cv.title[lang]}
                  </h4>
                  {cv.badge && (
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        padding: "0.15rem 0.5rem",
                        borderRadius: "var(--radius-full)",
                        background: "rgba(215, 38, 61, 0.12)",
                        color: "var(--accent-primary)"
                      }}
                    >
                      {cv.badge}
                    </span>
                  )}
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  Format PDF • Mis à jour pour PFE 2027
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.5rem", flexShrink: 0 }}>
                <a
                  href={cv.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  title="Visualiser"
                >
                  <Icon name="external-link" size={14} />
                </a>
                <a
                  href={cv.path}
                  download
                  className="btn btn-primary btn-sm"
                  title="Télécharger directement"
                >
                  <Icon name="download" size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

