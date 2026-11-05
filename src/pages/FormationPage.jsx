import React from "react";
import { PageLayout } from "../components/PageLayout";
import { Formation } from "../components/Formation";
import { Seo } from "../components/Seo";

export function FormationPage({ lang, uiText, formation }) {
  const isFr = lang === "fr";

  return (
    <PageLayout
      lang={lang}
      uiText={uiText}
      current={uiText.nav.formation}
      prev={{ label: uiText.nav.about, path: "/about" }}
      next={{ label: uiText.nav.certifications, path: "/certifications" }}
    >
      <Seo
        title={
          isFr
            ? "Formation Académique | Rafik Ait Ichou"
            : "Academic Background | Rafik Ait Ichou"
        }
        description={
          isFr
            ? "Formation d'excellence : Cycle Ingénieur d'État Informatique et Réseaux (EMSI Marrakech) et Licence Sciences Mathématiques & Informatique (SMI)."
            : "Academic education: State Engineering Degree in Computer Science & Networks (EMSI Marrakech) and Bachelor in Mathematics & Computer Science."
        }
        path="/formation"
        lang={lang}
      />
      <Formation
        lang={lang}
        uiText={uiText}
        formation={formation}
      />
    </PageLayout>
  );
}
