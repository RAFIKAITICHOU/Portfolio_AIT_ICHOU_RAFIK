import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "./Icons";

export function Footer({ lang, uiText, personal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    { to: "/", label: uiText.nav.home },
    { to: "/about", label: uiText.nav.about },
    { to: "/formation", label: uiText.nav.formation },
    { to: "/certifications", label: uiText.nav.certifications },
    { to: "/experience", label: uiText.nav.experience },
    { to: "/projects", label: uiText.nav.projects },
    { to: "/skills", label: uiText.nav.skills },
    { to: "/objectives", label: uiText.nav.objectives },
    { to: "/contact", label: uiText.nav.contact }
  ];

  return (
    <footer
      className="portfolio-footer"
      style={{
        borderTop: "1px solid var(--border-subtle)",
        background: "var(--bg-secondary)",
        padding: "4rem 0 2.5rem 0",
        position: "relative",
        zIndex: 1
      }}
    >
      <div className="container">
        {/* Top Footer Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1.8fr",
            gap: "3rem",
            marginBottom: "3rem"
          }}
          className="footer-top-grid"
        >
          {/* Brand info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 800, fontSize: "1.25rem", marginBottom: "0.8rem" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "32px",
                  height: "32px",
                  borderRadius: "var(--radius-sm)",
                  background: "var(--accent-gradient)",
                  color: "#ffffff",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  fontWeight: 700
                }}
              >
                &lt;/&gt;
              </span>
              <span>{personal.name}</span>
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.925rem", lineHeight: 1.6, marginBottom: "1.2rem", maxWidth: "420px" }}>
              {personal.title[lang]} • EMSI Marrakech.
              {lang === "fr"
                ? " Disponible pour un stage PFE à partir du 25 janvier 2027."
                : " Available for graduation internship starting January 25, 2027."}
            </p>

            {/* Social channels */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{ width: "38px", height: "38px", padding: 0 }} title="GitHub">
                <Icon name="github" size={17} />
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{ width: "38px", height: "38px", padding: 0 }} title="LinkedIn">
                <Icon name="linkedin" size={17} />
              </a>
              <a href={personal.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{ width: "38px", height: "38px", padding: 0 }} title="WhatsApp">
                <Icon name="whatsapp" size={17} />
              </a>
              <a href={`mailto:${personal.email}`} className="btn btn-secondary btn-sm" style={{ width: "38px", height: "38px", padding: 0 }} title="Email">
                <Icon name="mail" size={17} />
              </a>
            </div>
          </div>

          {/* Quick Page Links */}
          <div>
            <h4 style={{ fontSize: "0.95rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--accent-primary)", marginBottom: "1.2rem" }}>
              {lang === "fr" ? "Pages du Portfolio" : "Portfolio Pages"}
            </h4>
            <div
              className="footer-links-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: "0.75rem"
              }}
            >
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    transition: "color 0.2s ease"
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "var(--text-primary)")}
                  onMouseLeave={(e) => (e.target.style.color = "var(--text-secondary)")}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid var(--border-subtle)",
            paddingTop: "1.8rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            fontSize: "0.825rem",
            color: "var(--text-muted)"
          }}
        >
          <div>
            © {new Date().getFullYear()} {personal.name}. {uiText.footer.rights}
          </div>
          <div>
            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
              {personal.location[lang]}
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .portfolio-footer {
            padding: 3rem 0 calc(5.5rem + env(safe-area-inset-bottom, 0px)) 0 !important;
          }
          .footer-top-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .footer-links-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.65rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
