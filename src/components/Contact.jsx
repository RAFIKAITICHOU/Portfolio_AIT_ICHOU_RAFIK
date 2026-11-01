import React, { useState } from "react";
import { Icon } from "./Icons";

export function Contact({ lang, uiText, personal, onShowToast }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text, message) => {
    navigator.clipboard.writeText(text);
    onShowToast(message || uiText.contact.copied);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Compose mailto link
    const subjectFinal = formData.subject || `Proposition de stage PFE – ${formData.name}`;
    const subjectEncoded = encodeURIComponent(subjectFinal);
    const bodyEncoded = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    setSubmitted(true);
    onShowToast(uiText.contact.formSuccess);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Icon name="mail" size={14} />
            <span>{uiText.contact.badge}</span>
          </div>
          <h2 className="section-title">{uiText.contact.title}</h2>
          <p className="section-subtitle">{uiText.contact.subtitle}</p>
        </div>

        {/* 4 Direct Contact Channels */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3rem"
          }}
        >
          {/* Email */}
          <div className="glass-card" style={{ padding: "1.8rem", textAlign: "center" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "rgba(215, 38, 61, 0.12)",
                color: "var(--accent-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1rem auto"
              }}
            >
              <Icon name="mail" size={22} />
            </div>
            <h4 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.25rem" }}>
              {uiText.contact.directEmail}
            </h4>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem", wordBreak: "break-all" }}>
              {personal.email}
            </p>
            <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}>
              <a href={`mailto:${personal.email}`} className="btn btn-primary btn-sm">
                <Icon name="send" size={14} />
                <span>{lang === "fr" ? "Écrire" : "Email"}</span>
              </a>
              <button
                onClick={() => handleCopy(personal.email, "Email copié !")}
                className="btn btn-secondary btn-sm"
                title="Copier l'adresse email"
              >
                <Icon name="copy" size={14} />
              </button>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="glass-card" style={{ padding: "1.8rem", textAlign: "center" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "rgba(10, 102, 194, 0.12)",
                color: "#0a66c2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1rem auto"
              }}
            >
              <Icon name="linkedin" size={22} />
            </div>
            <h4 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.25rem" }}>
              {uiText.contact.linkedin}
            </h4>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
              in/rafik-ait-ichou
            </p>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <span>{lang === "fr" ? "Se Connecter" : "Connect"}</span>
              <Icon name="external-link" size={14} />
            </a>
          </div>

          {/* WhatsApp */}
          <div className="glass-card" style={{ padding: "1.8rem", textAlign: "center" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "rgba(37, 211, 102, 0.12)",
                color: "#25d366",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1rem auto"
              }}
            >
              <Icon name="whatsapp" size={22} />
            </div>
            <h4 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.25rem" }}>
              {uiText.contact.phoneWhatsapp}
            </h4>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
              {personal.phoneDisplay}
            </p>
            <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}>
              <a
                href={personal.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
                style={{ background: "#25d366", borderColor: "#25d366" }}
              >
                <Icon name="whatsapp" size={14} />
                <span>WhatsApp</span>
              </a>
              <button
                onClick={() => handleCopy(personal.phone, "Numéro copié !")}
                className="btn btn-secondary btn-sm"
                title="Copier le numéro"
              >
                <Icon name="copy" size={14} />
              </button>
            </div>
          </div>

          {/* GitHub */}
          <div className="glass-card" style={{ padding: "1.8rem", textAlign: "center" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.08)",
                color: "var(--text-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1rem auto"
              }}
            >
              <Icon name="github" size={22} />
            </div>
            <h4 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.25rem" }}>
              {uiText.contact.github}
            </h4>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
              github.com/RAFIKAITICHOU
            </p>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <span>{lang === "fr" ? "Explorer" : "Explore"}</span>
              <Icon name="external-link" size={14} />
            </a>
          </div>
        </div>

        {/* 15-Min Meeting Booking Card (Phase E) */}
        {personal.calendarBookingLink && (
          <div
            className="glass-card"
            style={{
              maxWidth: "760px",
              margin: "0 auto 2.5rem auto",
              padding: "1.8rem 2.2rem",
              background: "linear-gradient(135deg, rgba(215, 38, 61, 0.08) 0%, rgba(81, 96, 122, 0.08) 100%)",
              border: "1px solid rgba(215, 38, 61, 0.28)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1.2rem"
            }}
          >
            <div>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "0.3rem" }}>
                {lang === "fr" ? "Échange téléphonique ou visio de 15 minutes" : "Schedule a 15-Minute Intro Call"}
              </h4>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", margin: 0 }}>
                {lang === "fr"
                  ? "Choisissez directement un créneau qui vous convient sur mon agenda."
                  : "Pick a time slot that suits you best on my direct calendar."}
              </p>
            </div>
            <a
              href={personal.calendarBookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <Icon name="calendar" size={15} />
              <span>{lang === "fr" ? "Planifier un échange" : "Book a slot"}</span>
            </a>
          </div>
        )}

        {/* Contact Message Form */}
        <div
          className="glass-card"
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "2.8rem",
            borderTop: "4px solid var(--accent-primary)"
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "0.4rem" }}>
              {lang === "fr" ? "Envoyer un message direct" : "Send a Direct Message"}
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
              {lang === "fr"
                ? "Remplissez ce formulaire pour m'adresser votre demande directement."
                : "Fill out this form to send your message directly to my inbox."}
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.2rem"
              }}
              className="contact-inputs-row"
            >
              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.4rem", color: "var(--text-primary)" }}>
                  {uiText.contact.formName} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="ex: Sarah Benjelloun"
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-md)",
                    background: "var(--bg-elevated)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.925rem",
                    outline: "none"
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--accent-primary)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border-subtle)")}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.4rem", color: "var(--text-primary)" }}>
                  {uiText.contact.formEmail} *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="contact@entreprise.com"
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-md)",
                    background: "var(--bg-elevated)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.925rem",
                    outline: "none"
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--accent-primary)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border-subtle)")}
                />
              </div>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.4rem", color: "var(--text-primary)" }}>
                {uiText.contact.formSubject}
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder={uiText.contact.formSubjectPlaceholder}
                style={{
                  width: "100%",
                  padding: "0.75rem 1rem",
                  borderRadius: "var(--radius-md)",
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.925rem",
                  outline: "none"
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--accent-primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border-subtle)")}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.4rem", color: "var(--text-primary)" }}>
                {uiText.contact.formMessage} *
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={uiText.contact.formMessagePlaceholder}
                style={{
                  width: "100%",
                  padding: "0.75rem 1rem",
                  borderRadius: "var(--radius-md)",
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.925rem",
                  resize: "vertical",
                  outline: "none"
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--accent-primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border-subtle)")}
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ padding: "0.85rem", fontSize: "0.95rem" }}>
              <Icon name="send" size={17} />
              <span>{uiText.contact.formSubmit}</span>
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .contact-inputs-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
