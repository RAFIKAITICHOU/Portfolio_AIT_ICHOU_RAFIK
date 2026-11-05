import React from "react";
import { PageLayout } from "../components/PageLayout";
import { Contact } from "../components/Contact";
import { Seo } from "../components/Seo";

export function ContactPage({ lang, uiText, personal, onShowToast }) {
  const isFr = lang === "fr";

  return (
    <PageLayout
      lang={lang}
      uiText={uiText}
      current={uiText.nav.contact}
      prev={{ label: uiText.nav.objectives, path: "/objectives" }}
      next={{ label: uiText.nav.home, path: "/" }}
    >
      <Seo
        title={
          isFr
            ? "Contact & Échange Professionnel | Rafik Ait Ichou"
            : "Contact & Connect | Rafik Ait Ichou"
        }
        description={
          isFr
            ? "Prenez contact avec Rafik Ait Ichou, élève-ingénieur logiciel. Disponible par e-mail (rafikaitichou@gmail.com), téléphone, WhatsApp et LinkedIn pour PFE 2027."
            : "Get in touch with Rafik Ait Ichou, software engineer student. Reachable via email, phone, WhatsApp, and LinkedIn for 2027 internship opportunities."
        }
        path="/contact"
        lang={lang}
      />
      <Contact
        lang={lang}
        uiText={uiText}
        personal={personal}
        onShowToast={onShowToast}
      />
    </PageLayout>
  );
}
