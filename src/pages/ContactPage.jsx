import React from "react";
import { PageLayout } from "../components/PageLayout";
import { Contact } from "../components/Contact";

export function ContactPage({ lang, uiText, personal, onShowToast }) {
  return (
    <PageLayout
      lang={lang}
      uiText={uiText}
      current={uiText.nav.contact}
      prev={{ label: uiText.nav.objectives, path: "/objectives" }}
      next={{ label: uiText.nav.home, path: "/" }}
    >
      <Contact
        lang={lang}
        uiText={uiText}
        personal={personal}
        onShowToast={onShowToast}
      />
    </PageLayout>
  );
}
