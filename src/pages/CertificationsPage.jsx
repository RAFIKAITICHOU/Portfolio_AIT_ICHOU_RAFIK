import React from "react";
import { PageLayout } from "../components/PageLayout";
import { Certifications } from "../components/Certifications";
import { Seo } from "../components/Seo";

export function CertificationsPage({ lang, uiText, certifications }) {
  const isFr = lang === "fr";

  return (
    <PageLayout
      lang={lang}
      uiText={uiText}
      current={uiText.nav.certifications}
      prev={{ label: uiText.nav.formation, path: "/formation" }}
      next={{ label: uiText.nav.experience, path: "/experience" }}
    >
      <Seo
        title={
          isFr
            ? "Certifications Internationales | Rafik Ait Ichou"
            : "Professional Certifications | Rafik Ait Ichou"
        }
        description={
          isFr
            ? "Certifications vérifiées : IBM Cloud, Google Agile Project Management, Data Science & Machine Learning, Cognitive Class, UC San Diego."
            : "Verified certifications: IBM Cloud, Google Agile Project Management, Data Science & Machine Learning, Cognitive Class, UC San Diego."
        }
        path="/certifications"
        lang={lang}
      />
      <Certifications
        lang={lang}
        uiText={uiText}
        certifications={certifications}
      />
    </PageLayout>
  );
}
