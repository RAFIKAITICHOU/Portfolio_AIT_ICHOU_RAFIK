import React from "react";
import { PageLayout } from "../components/PageLayout";
import { Skills } from "../components/Skills";
import { Seo } from "../components/Seo";

export function SkillsPage({ lang, uiText, skillCategories }) {
  const isFr = lang === "fr";

  return (
    <PageLayout
      lang={lang}
      uiText={uiText}
      current={uiText.nav.skills}
      prev={{ label: uiText.nav.projects, path: "/projects" }}
      next={{ label: uiText.nav.objectives, path: "/objectives" }}
    >
      <Seo
        title={
          isFr
            ? "Compétences Techniques & Stack | Rafik Ait Ichou"
            : "Technical Skills & Stack | Rafik Ait Ichou"
        }
        description={
          isFr
            ? "Stack technique maîtrisée : Backend (Spring Boot, Microservices), Frontend (React, Angular), Mobile (Flutter), DevOps (Docker, CI/CD) et Qualité (SonarQube, JUnit)."
            : "Mastered tech stack: Backend (Spring Boot, Microservices), Frontend (React, Angular), Mobile (Flutter), DevOps (Docker, CI/CD), QA (SonarQube, JUnit)."
        }
        path="/skills"
        lang={lang}
      />
      <Skills
        lang={lang}
        uiText={uiText}
        skillCategories={skillCategories}
      />
    </PageLayout>
  );
}
