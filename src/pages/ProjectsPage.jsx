import React from "react";
import { PageLayout } from "../components/PageLayout";
import { Projects } from "../components/Projects";
import { Seo } from "../components/Seo";

export function ProjectsPage({ lang, uiText, projects }) {
  const isFr = lang === "fr";

  return (
    <PageLayout
      lang={lang}
      uiText={uiText}
      current={uiText.nav.projects}
      prev={{ label: uiText.nav.experience, path: "/experience" }}
      next={{ label: uiText.nav.skills, path: "/skills" }}
    >
      <Seo
        title={
          isFr
            ? "Projets & Réalisations | Rafik Ait Ichou"
            : "Projects & Engineering Portfolio | Rafik Ait Ichou"
        }
        description={
          isFr
            ? "Découvrez mes réalisations : Smart HSE 360 chez OCP Safi, Smart Parking, Guidely, MesChèques, Ma'sarat al-Rahma et audit IA de l'olivier."
            : "Explore projects by Rafik Ait Ichou: Smart HSE 360 at OCP Safi, Smart Parking, Guidely, MesCheques, and olive disease AI classifier."
        }
        path="/projects"
        lang={lang}
      />
      <Projects
        lang={lang}
        uiText={uiText}
        projects={projects}
      />
    </PageLayout>
  );
}
