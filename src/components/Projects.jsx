import React, { useState, useMemo } from "react";
import { Icon } from "./Icons";
import { ProjectModal } from "./ProjectModal";

export function Projects({ lang, uiText, projects }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: "all", label: uiText.projects.filterAll },
    { id: "fullstack", label: uiText.projects.filterFullstack },
    { id: "mobile", label: uiText.projects.filterMobile },
    { id: "iot", label: uiText.projects.filterIot },
    { id: "desktop", label: uiText.projects.filterDesktop }
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category filter
      const matchesCategory =
        activeCategory === "all" ||
        project.category === activeCategory ||
        (activeCategory === "iot" && (project.category === "iot" || project.technologies.some(t => t.includes("OpenCV") || t.includes("YOLO"))));

      // Search filter
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const titleMatch = project.title.toLowerCase().includes(query);
      const subtitleMatch = project.subtitle[lang].toLowerCase().includes(query);
      const techMatch = project.technologies.some((t) => t.toLowerCase().includes(query));
      const problemMatch = project.problem[lang].toLowerCase().includes(query);

      return matchesCategory && (titleMatch || subtitleMatch || techMatch || problemMatch);
    });
  }, [projects, activeCategory, searchQuery, lang]);

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Icon name="code" size={14} />
            <span>{uiText.projects.badge}</span>
          </div>
          <h2 className="section-title">{uiText.projects.title}</h2>
          <p className="section-subtitle">{uiText.projects.subtitle}</p>
        </div>

        {/* Filter Bar & Search Input */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.2rem",
            marginBottom: "2.5rem"
          }}
        >
          {/* Category Tabs */}
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
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="btn btn-sm"
                style={{
                  background: activeCategory === cat.id ? "var(--accent-primary)" : "transparent",
                  color: activeCategory === cat.id ? "#ffffff" : "var(--text-secondary)",
                  boxShadow: activeCategory === cat.id ? "0 2px 10px rgba(215, 38, 61, 0.35)" : "none",
                  fontWeight: 600,
                  transition: "all 0.2s ease"
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div
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
              placeholder={uiText.projects.searchPlaceholder}
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
                transition: "border-color 0.2s ease"
              }}
              onFocus={(e) => (e.target.style.borderColor = "var(--accent-primary)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--border-subtle)")}
            />
            <div
              style={{
                position: "absolute",
                left: "0.85rem",
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--text-muted)",
                pointerEvents: "none",
                display: "flex",
                alignItems: "center"
              }}
            >
              <Icon name="search" size={16} />
            </div>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                style={{
                  position: "absolute",
                  right: "0.8rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  color: "var(--text-muted)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <Icon name="close" size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div
            className="glass-card"
            style={{
              textAlign: "center",
              padding: "4rem 2rem",
              color: "var(--text-muted)"
            }}
          >
            <Icon name="search" size={36} style={{ marginBottom: "1rem", opacity: 0.5 }} />
            <p style={{ fontSize: "1.1rem" }}>{uiText.projects.noResults}</p>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
              gap: "2rem"
            }}
            className="projects-grid"
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "2.2rem",
                  borderTop: project.featured ? "4px solid var(--accent-primary)" : "1px solid var(--border-subtle)"
                }}
              >
                <div>
                  {/* Top tags */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                      marginBottom: "1rem"
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.775rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: "var(--accent-primary)"
                      }}
                    >
                      {project.categoryLabel[lang]}
                    </span>
                    {project.featured && (
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.3rem",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          padding: "0.2rem 0.6rem",
                          borderRadius: "var(--radius-full)",
                          background: "rgba(245, 158, 11, 0.15)",
                          color: "#f59e0b",
                          border: "1px solid rgba(245, 158, 11, 0.3)"
                        }}
                      >
                        <Icon name="star" size={12} />
                        <span>Featured</span>
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle with Project Logo */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "0.8rem" }}>
                    {project.logo && (
                      <div
                        style={{
                          width: "52px",
                          height: "52px",
                          minWidth: "52px",
                          borderRadius: "var(--radius-md)",
                          background: "var(--bg-elevated)",
                          border: "1px solid var(--border-subtle)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "6px",
                          overflow: "hidden",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                          marginTop: "2px"
                        }}
                      >
                        <img
                          src={project.logo}
                          alt={`${project.title} logo`}
                          style={{ width: "100%", height: "100%", objectFit: "contain" }}
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: "1.35rem", fontWeight: 800, marginBottom: "0.25rem", lineHeight: 1.25 }}>
                        {project.title}
                      </h3>
                      <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                        {project.subtitle[lang]}
                      </p>
                    </div>
                  </div>

                  {/* Hook / Tagline */}
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.6,
                      marginBottom: "1.4rem",
                      borderLeft: "2px solid var(--border-strong)",
                      paddingLeft: "0.8rem",
                      fontStyle: "italic"
                    }}
                  >
                    "{project.tagline[lang]}"
                  </p>

                  {/* Metrics Badges */}
                  {project.metrics && (
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                        marginBottom: "1.4rem"
                      }}
                    >
                      {project.metrics.slice(0, 3).map((m, idx) => (
                        <span
                          key={idx}
                          style={{
                            fontSize: "0.775rem",
                            padding: "0.25rem 0.6rem",
                            background: "var(--bg-elevated)",
                            borderRadius: "var(--radius-sm)",
                            border: "1px solid var(--border-subtle)",
                            color: "var(--text-primary)"
                          }}
                        >
                          <strong>{m.value}</strong> <span style={{ color: "var(--text-muted)" }}>• {m.label}</span>
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Tech stack */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.8rem" }}>
                    {project.technologies.slice(0, 6).map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 6 && (
                      <span className="tech-tag" style={{ opacity: 0.7 }}>
                        +{project.technologies.length - 6}
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions bottom */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.8rem",
                    paddingTop: "1.2rem",
                    borderTop: "1px solid var(--border-subtle)",
                    flexWrap: "wrap"
                  }}
                >
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn btn-primary btn-sm"
                    style={{ flex: 1 }}
                  >
                    <Icon name="search" size={14} />
                    <span>{uiText.projects.viewDetails}</span>
                  </button>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      title={uiText.projects.codeSource}
                    >
                      <Icon name="github" size={16} />
                    </a>
                  )}

                  {project.driveFolder && (
                    <a
                      href={project.driveFolder}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      title={lang === "fr" ? "Dossier Google Drive" : "Google Drive Folder"}
                      style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}
                    >
                      <Icon name="folder" size={15} />
                      <span style={{ fontSize: "0.78rem", fontWeight: 700 }}>Drive</span>
                    </a>
                  )}

                  {project.demoVideos && project.demoVideos.length > 0 ? (
                    project.demoVideos
                      .filter((vid) => vid.url !== project.driveFolder)
                      .map((vid, vIdx) => (
                        <a
                          key={vIdx}
                          href={vid.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary btn-sm"
                          title={`${uiText.projects.demoVideo} - ${vid.title[lang] || vid.title}`}
                          style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", padding: "0.35rem 0.55rem" }}
                        >
                          <Icon name={vid.platform === "youtube" ? "youtube" : "play"} size={14} />
                          <span style={{ fontSize: "0.72rem", fontWeight: 700 }}>
                            {vid.version || `V${vIdx + 1}`}
                          </span>
                        </a>
                      ))
                  ) : project.demoVideo && project.demoVideo !== project.driveFolder ? (
                    <a
                      href={project.demoVideo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      title={uiText.projects.demoVideo}
                    >
                      <Icon name="play" size={16} />
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          lang={lang}
          uiText={uiText}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <style>{`
        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

