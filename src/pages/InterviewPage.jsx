import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "../components/Icons";
import { Seo } from "../components/Seo";

export function InterviewPage({ lang = "fr" }) {
  const isFr = lang === "fr";
  const pdfUrl = "/presentations/presentation_capgemini_testing.pdf";

  return (
    <div style={{ padding: "1.5rem 0 3rem 0", flex: 1, display: "flex", flexDirection: "column" }}>
      <Seo
        title={
          isFr
            ? "Présentation Entretien QA & Testing — Capgemini | Rafik Ait Ichou"
            : "QA & Testing Presentation — Capgemini | Rafik Ait Ichou"
        }
        description={
          isFr
            ? "Présentation technique officielle pour l'entretien d'ingénieur QA / Testing chez Capgemini. Rafik Ait Ichou — Stage PFE 2027."
            : "Official technical presentation for QA / Testing interview at Capgemini. Rafik Ait Ichou — PFE Internship 2027."
        }
        path="/entretien"
      />

      <div className="container" style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Top Control Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "1rem",
            padding: "0.8rem 1.2rem",
            background: "var(--bg-card)",
            borderRadius: "12px",
            border: "1px solid var(--border-subtle)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
            <Link
              to="/"
              className="btn btn-secondary btn-sm"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", padding: "0.4rem 0.75rem" }}
              title={isFr ? "Retour à l'accueil" : "Back to home"}
            >
              <Icon name="arrow-left" size={14} />
              <span>{isFr ? "Accueil" : "Home"}</span>
            </Link>

            <div>
              <h1
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 800,
                  margin: 0,
                  lineHeight: 1.2,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem"
                }}
              >
                <span>Présentation QA, Test Logiciel &amp; Scrum — Capgemini</span>
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    padding: "0.15rem 0.5rem",
                    borderRadius: "4px",
                    background: "rgba(0, 112, 173, 0.12)",
                    color: "#0070AD"
                  }}
                >
                  7 Diapos (PDF)
                </span>
              </h1>
              <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)", marginTop: "2px" }}>
                Rafik AIT ICHOU • Stage PFE 2027 (EMSI Marrakech)
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <a
              href={pdfUrl}
              download="Presentation_Rafik_AIT_ICHOU_QA_Capgemini.pdf"
              className="btn btn-primary btn-sm"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
            >
              <Icon name="download" size={14} />
              <span>{isFr ? "Télécharger le PDF" : "Download PDF"}</span>
            </a>

            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
              title={isFr ? "Ouvrir en plein écran dans un nouvel onglet" : "Open full screen in a new tab"}
            >
              <Icon name="external-link" size={14} />
              <span>{isFr ? "Plein écran" : "Full Screen"}</span>
            </a>
          </div>
        </div>

        {/* Full-Page PDF Viewer */}
        <div
          style={{
            flex: 1,
            minHeight: "78vh",
            height: "calc(100vh - 190px)",
            borderRadius: "14px",
            overflow: "hidden",
            border: "1px solid var(--border-subtle)",
            boxShadow: "0 12px 36px rgba(0,0,0,0.18)",
            background: "#0B192C",
            position: "relative"
          }}
        >
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0&view=FitH`}
            title="Présentation Technique QA & Testing — Rafik AIT ICHOU"
            width="100%"
            height="100%"
            style={{
              border: "none",
              display: "block",
              width: "100%",
              height: "100%"
            }}
          />

          {/* Fallback overlay in case iframe isn't supported on some mobile browsers */}
          <noscript>
            <div style={{ padding: "3rem", textAlign: "center", color: "#FFFFFF" }}>
              <p style={{ marginBottom: "1rem" }}>
                {isFr
                  ? "Votre navigateur ne charge pas les PDF directement."
                  : "Your browser does not load PDFs directly."}
              </p>
              <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                {isFr ? "Ouvrir le PDF" : "Open PDF"}
              </a>
            </div>
          </noscript>
        </div>
      </div>
    </div>
  );
}
