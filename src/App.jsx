import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { portfolioData } from "./data/portfolioData";
import { Navbar } from "./components/Navbar";
import { RecruiterBanner } from "./components/RecruiterBanner";
import { Footer } from "./components/Footer";
import { CvModal } from "./components/CvModal";
import { Toast } from "./components/Toast";
import { ScrollToTop } from "./components/ScrollToTop";
import { FloatingActions } from "./components/FloatingActions";

// Dedicated Pages
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { FormationPage } from "./pages/FormationPage";
import { CertificationsPage } from "./pages/CertificationsPage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { SkillsPage } from "./pages/SkillsPage";
import { ObjectivesPage } from "./pages/ObjectivesPage";
import { ContactPage } from "./pages/ContactPage";

export default function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("portfolio_lang") || "fr";
  });

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio_theme");
    if (savedTheme) return savedTheme;
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "light";
    }
    return "dark";
  });

  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [toast, setToast] = useState({ message: "", visible: false });

  // Update document theme attribute
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio_theme", theme);
  }, [theme]);

  // Update language in localStorage
  useEffect(() => {
    localStorage.setItem("portfolio_lang", lang);
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const showToast = (message) => {
    setToast({ message, visible: true });
    setTimeout(() => {
      setToast({ message: "", visible: false });
    }, 3200);
  };

  const currentUi = portfolioData.uiText[lang];

  return (
    <Router>
      <ScrollToTop />
      <div style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        {/* Background technical grid and subtle glows */}
        <div className="bg-mesh">
          <div className="bg-mesh-glow-1" />
          <div className="bg-mesh-glow-2" />
          <div className="bg-mesh-grid" />
        </div>

        {/* Global Navigation Bar */}
        <Navbar
          lang={lang}
          setLang={setLang}
          theme={theme}
          toggleTheme={toggleTheme}
          onOpenCv={() => setCvModalOpen(true)}
          uiText={currentUi}
          personal={portfolioData.personal}
        />

        {/* Dynamic Recruiter Welcome Banner (?ref=ocp, etc.) */}
        <RecruiterBanner
          lang={lang}
          uiText={currentUi}
          personal={portfolioData.personal}
        />

        {/* Multi-Page Routes with Clean URLs */}
        <div style={{ flex: 1, position: "relative", zIndex: 1 }}>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  lang={lang}
                  uiText={currentUi}
                  personal={portfolioData.personal}
                  stats={portfolioData.stats}
                  projects={portfolioData.projects}
                  onOpenCv={() => setCvModalOpen(true)}
                />
              }
            />

            <Route
              path="/about"
              element={
                <AboutPage
                  lang={lang}
                  uiText={currentUi}
                  personal={portfolioData.personal}
                  onOpenCv={() => setCvModalOpen(true)}
                />
              }
            />

            <Route
              path="/formation"
              element={
                <FormationPage
                  lang={lang}
                  uiText={currentUi}
                  formation={portfolioData.formation}
                />
              }
            />

            <Route
              path="/certifications"
              element={
                <CertificationsPage
                  lang={lang}
                  uiText={currentUi}
                  certifications={portfolioData.certifications}
                />
              }
            />

            <Route
              path="/experience"
              element={
                <ExperiencePage
                  lang={lang}
                  uiText={currentUi}
                  experiences={portfolioData.experiences}
                />
              }
            />

            <Route
              path="/projects"
              element={
                <ProjectsPage
                  lang={lang}
                  uiText={currentUi}
                  projects={portfolioData.projects}
                />
              }
            />

            <Route
              path="/skills"
              element={
                <SkillsPage
                  lang={lang}
                  uiText={currentUi}
                  skillCategories={portfolioData.skillCategories}
                />
              }
            />

            <Route
              path="/objectives"
              element={
                <ObjectivesPage
                  lang={lang}
                  uiText={currentUi}
                  objectives={portfolioData.objectives}
                  onOpenCv={() => setCvModalOpen(true)}
                />
              }
            />

            <Route
              path="/contact"
              element={
                <ContactPage
                  lang={lang}
                  uiText={currentUi}
                  personal={portfolioData.personal}
                  onShowToast={showToast}
                />
              }
            />

            {/* Catch-all: redirect any unknown URL back to / */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        {/* Global Footer */}
        <Footer
          lang={lang}
          uiText={currentUi}
          personal={portfolioData.personal}
        />

        {/* CV Selection Modal */}
        <CvModal
          isOpen={cvModalOpen}
          onClose={() => setCvModalOpen(false)}
          lang={lang}
          personal={portfolioData.personal}
        />

        {/* Toast Feedback */}
        <Toast message={toast.message} visible={toast.visible} />

        {/* Floating Circular Action Buttons (Scroll to Top & Dark Mode) */}
        <FloatingActions theme={theme} toggleTheme={toggleTheme} lang={lang} />
      </div>
    </Router>
  );
}
