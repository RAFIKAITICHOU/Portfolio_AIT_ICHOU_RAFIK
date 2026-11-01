import React from "react";
import { PageLayout } from "../components/PageLayout";
import { Projects } from "../components/Projects";

export function ProjectsPage({ lang, uiText, projects }) {
  return (
    <PageLayout
      lang={lang}
      uiText={uiText}
      current={uiText.nav.projects}
      prev={{ label: uiText.nav.experience, path: "/experience" }}
      next={{ label: uiText.nav.skills, path: "/skills" }}
    >
      <Projects
        lang={lang}
        uiText={uiText}
        projects={projects}
      />
    </PageLayout>
  );
}
