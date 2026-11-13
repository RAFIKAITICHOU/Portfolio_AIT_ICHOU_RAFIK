import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Icon } from "./Icons";

export function RecruiterBanner({ lang, uiText, personal }) {
  const location = useLocation();

  const companyName = useMemo(() => {
    const params = new URLSearchParams(location.search);
    const ref = params.get("ref") || params.get("company") || params.get("source");
    if (!ref) return null;

    // Clean and capitalize company name
    const cleaned = ref.trim().toUpperCase();
    return cleaned;
  }, [location.search]);

  if (!companyName) return null;

  return (
    <div
      style={{
        background: "linear-gradient(90deg, rgba(215, 38, 61, 0.15) 0%, rgba(81, 96, 122, 0.15) 100%)",
        borderBottom: "1px solid rgba(215, 38, 61, 0.35)",
        padding: "0.75rem 1rem",
        position: "relative",
        zIndex: 90,
        marginTop: "var(--nav-height)"
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.8rem",
          fontSize: "0.9rem"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <span
            style={{
              padding: "0.2rem 0.55rem",
              borderRadius: "var(--radius-sm)",
              background: "var(--accent-primary)",
              color: "#FFFFFF",
              fontWeight: 800,
              fontSize: "0.75rem"
            }}
          >
            {companyName}
          </span>
          <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>
            {lang === "fr"
              ? `${uiText.recruiter.welcomePrefix} ${companyName} ! ${uiText.recruiter.welcomeSuffix}`
              : `${uiText.recruiter.welcomePrefix} ${companyName} ${uiText.recruiter.welcomeSuffix}`}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <a
            href="/presentations/presentation_capgemini_testing.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
            style={{ padding: "0.3rem 0.8rem", fontSize: "0.78rem" }}
          >
            <Icon name="document" size={13} />
            <span>{lang === "fr" ? "Présentation QA (PDF)" : "QA Slides (PDF)"}</span>
          </a>
          {personal.calendarBookingLink && (
            <a
              href={personal.calendarBookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              style={{ padding: "0.3rem 0.8rem", fontSize: "0.78rem" }}
            >
              <Icon name="calendar" size={13} />
              <span>{uiText.recruiter.bookCall}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

