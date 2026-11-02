import React, { useState, useEffect } from "react";

export function FloatingActions({ theme, toggleTheme, lang, setLang }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="floating-actions-bar">
      {/* 1. Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="floating-circle-btn"
        style={{
          pointerEvents: "auto",
          opacity: showScrollTop ? 1 : 0,
          transform: showScrollTop ? "scale(1)" : "scale(0.85)",
          visibility: showScrollTop ? "visible" : "hidden",
          transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)"
        }}
        aria-label={lang === "fr" ? "Haut de page" : "Back to top"}
        title={lang === "fr" ? "Haut de page" : "Back to top"}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      </button>

      {/* 2. Dark / Light Mode Toggle Button */}
      <button
        onClick={toggleTheme}
        className="floating-circle-btn"
        style={{
          pointerEvents: "auto",
          transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)"
        }}
        aria-label={
          theme === "dark"
            ? lang === "fr" ? "Activer le mode clair" : "Switch to light mode"
            : lang === "fr" ? "Activer le mode sombre" : "Switch to dark mode"
        }
        title={
          theme === "dark"
            ? lang === "fr" ? "Mode Clair" : "Light Mode"
            : lang === "fr" ? "Mode Sombre" : "Dark Mode"
        }
      >
        {theme === "dark" ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </button>

      {/* 3. Language Toggle Button (à côté du bouton Dark Mode) */}
      <button
        onClick={() => setLang(lang === "fr" ? "en" : "fr")}
        className="floating-circle-btn"
        style={{
          pointerEvents: "auto",
          transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)"
        }}
        aria-label={lang === "fr" ? "Passer en anglais" : "Switch to French"}
        title={lang === "fr" ? "Passer en English" : "Passer en Français"}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", lineHeight: 1 }}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginBottom: "2px" }}
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          <span style={{ fontSize: "0.68rem", fontWeight: 800 }}>{lang.toUpperCase()}</span>
        </div>
      </button>
    </div>
  );
}
