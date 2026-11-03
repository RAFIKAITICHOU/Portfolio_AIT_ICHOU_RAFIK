import React from "react";
import { Icon } from "./Icons";

export function ProjectCardBanner({ project, onClick }) {
  if (project.logo) {
    return (
      <div
        className="project-card-banner has-logo"
        onClick={onClick}
        role={onClick ? "button" : undefined}
        tabIndex={onClick ? 0 : undefined}
        title={project.title}
      >
        <img
          src={project.logo}
          alt={`${project.title} logo`}
          className="project-banner-img"
          loading="lazy"
        />
      </div>
    );
  }

  // Fallback branded banner configuration for projects without a dedicated logo file
  const getBannerConfig = (id, badgeColor) => {
    switch (id) {
      case "masarat-gestion-marchandises":
        return {
          bg: "linear-gradient(135deg, rgba(5, 150, 105, 0.14) 0%, rgba(16, 185, 129, 0.04) 100%)",
          border: "rgba(16, 185, 129, 0.28)",
          color: "#10b981",
          icon: "shield-check",
          label: "Ma'sarat al-Rahma",
          sub: "Ventes, Stock & Facturation"
        };
      case "mes-cheques":
        return {
          bg: "linear-gradient(135deg, rgba(245, 158, 11, 0.14) 0%, rgba(217, 119, 6, 0.04) 100%)",
          border: "rgba(245, 158, 11, 0.28)",
          color: "#f59e0b",
          icon: "shield-check",
          label: "MesChèques (شيكاتي)",
          sub: "Mobile Offline-First"
        };
      case "olive-disease-audit":
        return {
          bg: "linear-gradient(135deg, rgba(16, 185, 129, 0.16) 0%, rgba(6, 78, 59, 0.06) 100%)",
          border: "rgba(16, 185, 129, 0.28)",
          color: "#34d399",
          icon: "brain",
          label: "Diagnostic IA de l'Olivier",
          sub: "Audit 4 354 Images & YOLOv8"
        };
      case "smartstock":
        return {
          bg: "linear-gradient(135deg, rgba(59, 130, 246, 0.14) 0%, rgba(37, 99, 235, 0.04) 100%)",
          border: "rgba(59, 130, 246, 0.28)",
          color: "#3b82f6",
          icon: "database",
          label: "SmartStock Logistics",
          sub: "Gestion d'Entrepôt & QR Code"
        };
      case "one-click-ecommerce":
        return {
          bg: "linear-gradient(135deg, rgba(244, 63, 94, 0.14) 0%, rgba(225, 29, 72, 0.04) 100%)",
          border: "rgba(244, 63, 94, 0.28)",
          color: "#f43f5e",
          icon: "rocket",
          label: "One-Click E-Commerce",
          sub: "Plateforme Laravel & RBAC"
        };
      default:
        return {
          bg: "linear-gradient(135deg, rgba(215, 38, 61, 0.12) 0%, rgba(215, 38, 61, 0.02) 100%)",
          border: "var(--border-subtle)",
          color: "var(--accent-primary)",
          icon: "code",
          label: project.title,
          sub: "Ingénierie Logicielle"
        };
    }
  };

  const config = getBannerConfig(project.id, project.badgeColor);

  return (
    <div
      className="project-card-banner fallback-banner"
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      style={{
        background: config.bg,
        borderColor: config.border
      }}
      title={project.title}
    >
      <div className="fallback-banner-watermark" />
      <div className="fallback-banner-content">
        <div
          className="fallback-banner-icon-circle"
          style={{
            color: config.color,
            borderColor: config.border,
            boxShadow: `0 4px 14px ${config.color}22`
          }}
        >
          <Icon name={config.icon} size={26} />
        </div>
        <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <div className="fallback-banner-label" style={{ color: config.color }}>
            {config.label}
          </div>
          <div className="fallback-banner-sub">
            {config.sub}
          </div>
        </div>
      </div>
    </div>
  );
}
