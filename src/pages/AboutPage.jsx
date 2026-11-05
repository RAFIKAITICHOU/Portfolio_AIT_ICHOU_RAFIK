import React from "react";
import { PageLayout } from "../components/PageLayout";
import { About } from "../components/About";
import { Seo } from "../components/Seo";

export function AboutPage({ lang, uiText, personal, onOpenCv }) {
  const isFr = lang === "fr";

  return (
    <PageLayout
      lang={lang}
      uiText={uiText}
      current={uiText.nav.about}
      prev={{ label: uiText.nav.home, path: "/" }}
      next={{ label: uiText.nav.formation, path: "/formation" }}
    >
      <Seo
        title={
          isFr
            ? "À propos | Rafik Ait Ichou, Ingénieur Logiciel & SI"
            : "About | Rafik Ait Ichou, Software Engineer & IS"
        }
        description={
          isFr
            ? "Élève-ingénieur EMSI. Architectures résilientes, qualité logicielle (JUnit, Selenium, SonarQube, CI/CD). PFE de 4 à 6 mois dès le 25/01/2027."
            : "EMSI engineering student. Resilient architectures, software quality (JUnit, Selenium, SonarQube, CI/CD). PFE from Jan 25, 2027."
        }
        path="/about"
        lang={lang}
      />
      <About
        lang={lang}
        uiText={uiText}
        personal={personal}
        onOpenCv={onOpenCv}
      />
    </PageLayout>
  );
}
