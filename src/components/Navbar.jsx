import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Icon } from "./Icons";

export function Navbar({ lang, setLang, theme, toggleTheme, onOpenCv, uiText, personal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
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

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "var(--nav-height)",
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          transition: "background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
          backgroundColor: scrolled ? "var(--nav-bg-scrolled)" : "var(--nav-bg)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--border-subtle)",
          boxShadow: scrolled ? "var(--shadow-sm)" : "none"
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem"
          }}
        >
          {/* Brand Logo with flexShrink: 0 and clear right margin */}
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              textDecoration: "none",
              color: "var(--text-primary)",
              fontWeight: 800,
              fontSize: "1.15rem",
              letterSpacing: "-0.02em",
              flexShrink: 0,
              marginRight: "1.5rem"
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "34px",
                height: "34px",
                borderRadius: "var(--radius-sm)",
                background: "var(--accent-gradient)",
                color: "#FFFFFF",
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                fontWeight: 700,
                boxShadow: "0 2px 10px rgba(215, 38, 61, 0.35)"
              }}
            >
              &lt;/&gt;
            </span>
            <span>
              {personal.brandText}
              <span style={{ color: "var(--accent-primary)" }}>.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.2rem",
              flexShrink: 1
            }}
            className="desktop-nav"
          >
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.35rem",
                listStyle: "none"
              }}
            >
              {navLinks.map((link) => (
                <li key={link.to} style={{ flexShrink: 0 }}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) => `nav-link-item ${isActive ? "active" : ""}`}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Language & Theme & CV Controls */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginLeft: "0.5rem",
                flexShrink: 0
              }}
            >
              {/* Language Switcher */}
              <button
                onClick={() => setLang(lang === "fr" ? "en" : "fr")}
                className="btn btn-secondary btn-sm"
                title="Changer de langue / Switch language"
                style={{ padding: "0.35rem 0.65rem", fontSize: "0.78rem", fontWeight: 700 }}
              >
                <Icon name="globe" size={13} />
                <span>{lang.toUpperCase()}</span>
              </button>

              {/* Theme Switcher */}
              <button
                onClick={toggleTheme}
                className="btn btn-secondary btn-sm"
                title={theme === "dark" ? "Mode Clair" : "Mode Sombre"}
                style={{ padding: "0.4rem", width: "34px", height: "34px" }}
              >
                <Icon name={theme === "dark" ? "sun" : "moon"} size={15} />
              </button>

              {/* CV Button */}
              <button
                onClick={onOpenCv}
                className="btn btn-primary btn-sm"
                style={{ padding: "0.38rem 0.85rem", fontSize: "0.825rem", whiteSpace: "nowrap" }}
              >
                <Icon name="download" size={13} />
                <span>CV</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="mobile-toggle" style={{ display: "none" }}>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="btn btn-secondary btn-sm"
              style={{ padding: "0.5rem" }}
              aria-label="Toggle menu"
            >
              <Icon name={mobileMenuOpen ? "close" : "menu"} size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            background: "var(--bg-overlay)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            display: "flex",
            flexDirection: "column",
            padding: "5.2rem 1.8rem 2rem 1.8rem",
            gap: "1.2rem",
            overflowY: "auto",
            animation: "fadeIn 0.2s ease"
          }}
        >
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  onClick={handleLinkClick}
                  style={({ isActive }) => ({
                    textDecoration: "none",
                    color: isActive ? "var(--accent-primary)" : "var(--text-primary)",
                    fontSize: "1.15rem",
                    fontWeight: isActive ? 700 : 500,
                    display: "block",
                    padding: "0.5rem 0",
                    borderBottom: "1px solid var(--border-subtle)"
                  })}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "0.8rem", paddingTop: "1rem" }}>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <button
                onClick={() => {
                  setLang(lang === "fr" ? "en" : "fr");
                  setMobileMenuOpen(false);
                }}
                className="btn btn-secondary"
                style={{ flex: 1, fontSize: "0.85rem" }}
              >
                <Icon name="globe" size={15} />
                <span>{lang === "fr" ? "Passer en English" : "Passer en Français"}</span>
              </button>
              <button
                onClick={toggleTheme}
                className="btn btn-secondary"
                style={{ width: "46px", padding: 0 }}
              >
                <Icon name={theme === "dark" ? "sun" : "moon"} size={17} />
              </button>
            </div>

            <button
              onClick={() => {
                onOpenCv();
                setMobileMenuOpen(false);
              }}
              className="btn btn-primary"
              style={{ width: "100%" }}
            >
              <Icon name="download" size={16} />
              <span>{uiText.nav.cvButton}</span>
            </button>
          </div>
        </div>
      )}

      {/* Breakpoint Switch at 1150px to guarantee no text wrapping or overflow */}
      <style>{`
        @media (max-width: 1150px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}
