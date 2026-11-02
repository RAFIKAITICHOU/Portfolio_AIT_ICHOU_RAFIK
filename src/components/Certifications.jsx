import React, { useState, useMemo } from "react";
import { Icon } from "./Icons";

export function Certifications({ lang, uiText, certifications }) {
  const [activeOrg, setActiveOrg] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const orgFilters = [
    { id: "all", label: uiText.certifications.filterAll || (lang === "fr" ? "Toutes (12)" : "All (12)") },
    { id: "ibm", label: uiText.certifications.filterIbm || "IBM (6)" },
    { id: "cognitive", label: uiText.certifications.filterCognitive || "Cognitive Class (3)" },
    { id: "coursera", label: uiText.certifications.filterCoursera || "Google & Coursera (2)" },
    { id: "other", label: uiText.certifications.filterOther || (lang === "fr" ? "Autres (1)" : "Other (1)") }
  ];

  const filteredCerts = useMemo(() => {
    return certifications.filter((cert) => {
      // Org filter
      const matchesOrg = activeOrg === "all" || cert.org === activeOrg;

      // Search query
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesOrg;

      const titleMatch = cert.title.toLowerCase().includes(query);
      const issuerMatch = cert.issuer.toLowerCase().includes(query);
      const categoryMatch = cert.category.toLowerCase().includes(query);
      const descMatch = cert.description[lang]?.toLowerCase().includes(query);

      return matchesOrg && (titleMatch || issuerMatch || categoryMatch || descMatch);
    });
  }, [certifications, activeOrg, searchQuery, lang]);

  return (
    <section id="certifications" className="section" style={{ background: "transparent" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Icon name="award" size={14} />
            <span>{uiText.certifications.badge}</span>
          </div>
          <h2 className="section-title">{uiText.certifications.title}</h2>
          <p className="section-subtitle">{uiText.certifications.subtitle}</p>
        </div>

        {/* Filters and Search Bar */}
        <div
          className="cert-filter-bar"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.2rem",
            marginBottom: "2.5rem"
          }}
        >
          {/* Org Filter Tabs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              background: "var(--bg-elevated)",
              padding: "0.35rem",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border-subtle)"
            }}
          >
            {orgFilters.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveOrg(tab.id)}
                className="btn btn-sm"
                style={{
                  background: activeOrg === tab.id ? "var(--accent-primary)" : "transparent",
                  color: activeOrg === tab.id ? "#ffffff" : "var(--text-secondary)",
                  boxShadow: activeOrg === tab.id ? "0 2px 10px rgba(215, 38, 61, 0.35)" : "none",
                  fontWeight: 600,
                  transition: "all 0.2s ease"
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div
            className="cert-search-box"
            style={{
              position: "relative",
              minWidth: "260px",
              maxWidth: "360px",
              flex: "1"
            }}
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={uiText.certifications.searchPlaceholder || "Rechercher une certification..."}
              style={{
                width: "100%",
                padding: "0.6rem 1rem 0.6rem 2.5rem",
                borderRadius: "var(--radius-md)",
                background: "var(--bg-elevated)",
                border: "1px solid var(--border-subtle)",
                color: "var(--text-primary)",
                fontFamily: "var(--font-sans)",
                fontSize: "0.9rem",
                outline: "none",
                transition: "border-color 0.2s"
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "0.85rem",
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--text-muted)",
                pointerEvents: "none",
                display: "flex"
              }}
            >
              <Icon name="search" size={16} />
            </div>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                style={{
                  position: "absolute",
                  right: "0.75rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "transparent",
                  border: "none",
                  color: "var(--text-muted)",
                  cursor: "pointer",
                  display: "flex",
                  padding: "0.2rem"
                }}
                aria-label="Effacer la recherche"
              >
                <Icon name="close" size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Certifications Grid */}
        {filteredCerts.length > 0 ? (
          <div
            className="certifications-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
              gap: "1.8rem"
            }}
          >
            {filteredCerts.map((cert) => (
              <div
                key={cert.id}
                className="glass-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "2rem",
                  transition: "transform 0.25s ease, border-color 0.25s ease"
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "1.2rem"
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "var(--radius-sm)",
                        background: "rgba(215, 38, 61, 0.12)",
                        color: "var(--accent-primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <Icon name={cert.icon} size={22} />
                    </div>
                    <span
                      style={{
                        fontSize: "0.775rem",
                        fontWeight: 700,
                        padding: "0.25rem 0.65rem",
                        background: "var(--bg-elevated)",
                        borderRadius: "var(--radius-full)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-muted)"
                      }}
                    >
                      {cert.category} • {cert.date}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "0.3rem" }}>
                    {cert.title}
                  </h3>
                  <h4 style={{ fontSize: "0.875rem", color: "var(--accent-primary)", fontWeight: 600, marginBottom: "1rem" }}>
                    {cert.issuer}
                  </h4>

                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                    {cert.description[lang]}
                  </p>
                </div>

                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <span>{uiText.certifications.verifyCredential}</span>
                  <Icon name="external-link" size={14} />
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="glass-card text-center"
            style={{
              padding: "3.5rem 2rem",
              maxWidth: "500px",
              margin: "0 auto"
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "var(--bg-elevated)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-muted)",
                marginBottom: "1rem"
              }}
            >
              <Icon name="search" size={24} />
            </div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>
              {uiText.certifications.noResults || "Aucun résultat trouvé"}
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
              {lang === "fr"
                ? "Essayez d'autres mots-clés ou réinitialisez les filtres."
                : "Try different keywords or reset your filters."}
            </p>
            <button
              onClick={() => {
                setActiveOrg("all");
                setSearchQuery("");
              }}
              className="btn btn-outline btn-sm"
            >
              {lang === "fr" ? "Réinitialiser les filtres" : "Reset Filters"}
            </button>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .certifications-grid {
            grid-template-columns: 1fr !important;
            gap: 1.2rem !important;
          }
          .cert-filter-bar {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 0.9rem !important;
          }
          .cert-search-box {
            min-width: 100% !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
