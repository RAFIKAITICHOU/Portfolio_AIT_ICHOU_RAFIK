import React from "react";
import { PageLayout } from "../components/PageLayout";
import { Skills } from "../components/Skills";

export function SkillsPage({ lang, uiText, skillCategories }) {
  return (
    <PageLayout
      lang={lang}
      uiText={uiText}
      current={uiText.nav.skills}
      prev={{ label: uiText.nav.projects, path: "/projects" }}
      next={{ label: uiText.nav.objectives, path: "/objectives" }}
    >
      <Skills
        lang={lang}
        uiText={uiText}
        skillCategories={skillCategories}
      />
    </PageLayout>
  );
}
