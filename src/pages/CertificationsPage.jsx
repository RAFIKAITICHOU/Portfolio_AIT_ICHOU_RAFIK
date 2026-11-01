import React from "react";
import { PageLayout } from "../components/PageLayout";
import { Certifications } from "../components/Certifications";

export function CertificationsPage({ lang, uiText, certifications }) {
  return (
    <PageLayout
      lang={lang}
      uiText={uiText}
      current={uiText.nav.certifications}
      prev={{ label: uiText.nav.formation, path: "/formation" }}
      next={{ label: uiText.nav.experience, path: "/experience" }}
    >
      <Certifications
        lang={lang}
        uiText={uiText}
        certifications={certifications}
      />
    </PageLayout>
  );
}
