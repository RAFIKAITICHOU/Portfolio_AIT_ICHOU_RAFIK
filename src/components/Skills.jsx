import React, { useState } from "react";
import { Icon } from "./Icons";

export function Skills({ lang, uiText, skillCategories }) {
  const [selectedCatId, setSelectedCatId] = useState(skillCategories[0]?.id || "backend");

  const currentCategory = skillCategories.find((c) => c.id === selectedCatId) || skillCategories[0];

  const getLevelBadge = (level) => {
    switch (level) {
      case "Maîtrisé":
        return {
          bg: "rgba(16, 185, 129, 0.12)",
          color: "var(--success)",
          border: "1px solid rgba(16, 185, 129, 0.3)",
          label: lang === "fr" ? "Maîtrisé (Production & Stage)" : "Mastered (Production & Stage)"
        };
      case "Pratiqué":
        return {
          bg: "rgba(81, 96, 122, 0.16)",
          color: "var(--text-primary)",
          border: "1px solid var(--border-strong)",
          label: lang === "fr" ? "Pratiqué (Projets d'ingénierie)" : "Proficient (Engineering Projects)"
        };
      default:
        return {
          bg: "rgba(245, 158, 11, 0.12)",
          color: "var(--warning)",
          border: "1px solid rgba(245, 158, 11, 0.3)",
          label: lang === "fr" ? "En approfondissement" : "Deepening Knowledge"
        };
    }
  };

  return (
    <section id="skills" className="section" style={{ background: "transparent" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Icon name="cpu" size={14} />
            <span>{uiText.skills.badge}</span>
          </div>
          <h2 className="section-title">{uiText.skills.title}</h2>
          <p className="section-subtitle">{uiText.skills.subtitle}</p>
        </div>

        {/* Level Legend Box */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "1.2rem",
            marginBottom: "2.5rem",
            fontSize: "0.825rem",
            color: "var(--text-secondary)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
            <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "var(--success)" }} />
            <span><strong>Maîtrisé :</strong> Expérience en production industrielle ou stage validé</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
            <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "var(--accent-secondary)" }} />
            <span><strong>Pratiqué :</strong> Projets d'ingénierie académiques & personnels complets</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
            <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "var(--warning)" }} />
            <span><strong>En veille :</strong> Approfondissement et R&D active</span>
          </div>
        </div>

        {/* Category Pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.6rem",
            marginBottom: "3rem"
          }}
        >
          {skillCategories.map((cat) => {
            const isSelected = cat.id === selectedCatId;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCatId(cat.id)}
                className="btn btn-secondary"
                style={{
                  background: isSelected ? "var(--accent-primary)" : "var(--bg-card)",
                  color: isSelected ? "#FFFFFF" : "var(--text-secondary)",
                  borderColor: isSelected ? "var(--accent-primary)" : "var(--border-strong)",
                  boxShadow: isSelected ? "0 4px 16px rgba(215, 38, 61, 0.35)" : "none",
                  fontWeight: 600,
                  padding: "0.6rem 1.25rem",
                  fontSize: "0.875rem"
                }}
              >
                <Icon name={cat.icon} size={16} />
                <span>{cat.title[lang]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <div
          className="glass-card"
          style={{
            padding: "2.8rem",
            maxWidth: "980px",
            margin: "0 auto",
            borderTop: "4px solid var(--accent-primary)"
          }}
        >
          <div style={{ marginBottom: "2rem", textAlign: "center" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.4rem" }}>
              {currentCategory.title[lang]}
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
              {currentCategory.description[lang]}
            </p>
          </div>

          {/* Skill items with concrete project references and clear levels */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
              gap: "1.2rem"
            }}
            className="skills-grid"
          >
            {currentCategory.skills.map((skill, idx) => {
              const badge = getLevelBadge(skill.level);
              return (
                <div
                  key={idx}
                  style={{
                    background: "var(--bg-elevated)",
                    padding: "1.2rem 1.4rem",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--border-subtle)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "0.6rem"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem" }}>
                    <span style={{ fontWeight: 700, fontSize: "0.975rem", color: "var(--text-primary)" }}>
                      {skill.name}
                    </span>
                    <span
                      style={{
                        fontSize: "0.725rem",
                        fontWeight: 700,
                        padding: "0.2rem 0.55rem",
                        borderRadius: "var(--radius-full)",
                        background: badge.bg,
                        color: badge.color,
                        border: badge.border
                      }}
                    >
                      {badge.label}
                    </span>
                  </div>

                  {skill.usedIn && (
                    <div style={{ fontSize: "0.825rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                      <Icon name="check-circle" size={13} style={{ color: "var(--accent-primary)", flexShrink: 0 }} />
                      <span>{lang === "fr" ? "Mis en œuvre dans :" : "Applied in:"} <strong style={{ color: "var(--text-secondary)" }}>{skill.usedIn}</strong></span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
