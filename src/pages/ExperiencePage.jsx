import React from "react";
import { PageLayout } from "../components/PageLayout";
import { Experience } from "../components/Experience";
import { Seo } from "../components/Seo";

export function ExperiencePage({ lang, uiText, experiences }) {
  const isFr = lang === "fr";

  return (
    <PageLayout
      lang={lang}
      uiText={uiText}
      current={uiText.nav.experience}
      prev={{ label: uiText.nav.certifications, path: "/certifications" }}
      next={{ label: uiText.nav.projects, path: "/projects" }}
    >
      <Seo
        title={
          isFr
            ? "Expérience Professionnelle | Rafik Ait Ichou"
            : "Professional Experience | Rafik Ait Ichou"
        }
        description={
          isFr
            ? "Parcours professionnel : Projet industriel Smart HSE 360 à la DSI OCP Safi, stage 6 mois absENS à l'ENS Marrakech et présidence du Club E-TEAM."
            : "Work experience: Smart HSE 360 industrial platform at OCP Safi IT Dept, 6-month absENS internship at ENS Marrakech, and E-TEAM club leadership."
        }
        path="/experience"
        lang={lang}
      />
      <Experience
        lang={lang}
        uiText={uiText}
        experiences={experiences}
      />
    </PageLayout>
  );
}
