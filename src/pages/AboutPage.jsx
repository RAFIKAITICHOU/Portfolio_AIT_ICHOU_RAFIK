import React from "react";
import { PageLayout } from "../components/PageLayout";
import { About } from "../components/About";

export function AboutPage({ lang, uiText, personal, onOpenCv }) {
  return (
    <PageLayout
      lang={lang}
      uiText={uiText}
      current={uiText.nav.about}
      prev={{ label: uiText.nav.home, path: "/" }}
      next={{ label: uiText.nav.formation, path: "/formation" }}
    >
      <About
        lang={lang}
        uiText={uiText}
        personal={personal}
        onOpenCv={onOpenCv}
      />
    </PageLayout>
  );
}
