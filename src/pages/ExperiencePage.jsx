import React from "react";
import { PageLayout } from "../components/PageLayout";
import { Experience } from "../components/Experience";

export function ExperiencePage({ lang, uiText, experiences }) {
  return (
    <PageLayout
      lang={lang}
      uiText={uiText}
      current={uiText.nav.experience}
      prev={{ label: uiText.nav.certifications, path: "/certifications" }}
      next={{ label: uiText.nav.projects, path: "/projects" }}
    >
      <Experience
        lang={lang}
        uiText={uiText}
        experiences={experiences}
      />
    </PageLayout>
  );
}
