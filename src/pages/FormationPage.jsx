import React from "react";
import { PageLayout } from "../components/PageLayout";
import { Formation } from "../components/Formation";

export function FormationPage({ lang, uiText, formation }) {
  return (
    <PageLayout
      lang={lang}
      uiText={uiText}
      current={uiText.nav.formation}
      prev={{ label: uiText.nav.about, path: "/about" }}
      next={{ label: uiText.nav.certifications, path: "/certifications" }}
    >
      <Formation
        lang={lang}
        uiText={uiText}
        formation={formation}
      />
    </PageLayout>
  );
}
