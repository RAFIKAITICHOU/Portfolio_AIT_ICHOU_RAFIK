import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "./Icons";

export function PageLayout({ lang, uiText, current, prev, next, children }) {
  return (
    <div style={{ paddingTop: "calc(var(--nav-height) + 1.2rem)", minHeight: "82vh" }}>
      {/* Breadcrumb Header */}
      <div className="container" style={{ marginBottom: "0.5rem" }}>
        <nav aria-label="Fil d'Ariane" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          <Link
            to="/"
            style={{
              color: "var(--text-secondary)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.3rem"
            }}
          >
            <Icon name="chevron-right" size={13} style={{ transform: "rotate(180deg)" }} />
            <span>{uiText.nav.home}</span>
          </Link>
          <span style={{ opacity: 0.5 }}>/</span>
          <span style={{ color: "var(--accent-primary)", fontWeight: 600 }}>{current}</span>
        </nav>
      </div>

      {/* Main Page Content */}
      <main>
        {children}
      </main>

      {/* Unified Previous / Next Navigation Footer */}
      {(prev || next) && (
        <div className="container" style={{ paddingBottom: "4.5rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--border-subtle)"
            }}
          >
            {prev ? (
              <Link to={prev.path} className="btn btn-secondary btn-sm" style={{ flex: "1 1 140px", justifyContent: "flex-start" }}>
                <Icon name="arrow-up" size={14} style={{ transform: "rotate(-90deg)" }} />
                <span>
                  <small style={{ display: "block", color: "var(--text-muted)", fontSize: "0.725rem", textTransform: "uppercase" }}>
                    {lang === "fr" ? "Précédent" : "Previous"}
                  </small>
                  <strong>{prev.label}</strong>
                </span>
              </Link>
            ) : <div style={{ flex: "1 1 140px" }} />}

            {next ? (
              <Link to={next.path} className="btn btn-primary btn-sm" style={{ flex: "1 1 140px", justifyContent: "flex-end" }}>
                <span style={{ textAlign: "right" }}>
                  <small style={{ display: "block", color: "rgba(255,255,255,0.75)", fontSize: "0.725rem", textTransform: "uppercase" }}>
                    {lang === "fr" ? "Suivant" : "Next"}
                  </small>
                  <strong>{next.label}</strong>
                </span>
                <Icon name="chevron-right" size={14} />
              </Link>
            ) : <div style={{ flex: "1 1 140px" }} />}
          </div>
        </div>
      )}
    </div>
  );
}

