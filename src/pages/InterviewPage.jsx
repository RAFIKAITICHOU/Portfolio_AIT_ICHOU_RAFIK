import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../components/Icons";
import { Seo } from "../components/Seo";

export function InterviewPage({ lang = "fr", personal }) {
  const isFr = lang === "fr";
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("deck"); // "deck" | "pdf" | "pitch"

  const slides = [
    {
      num: 1,
      tag: isFr ? "Diapo 1 • Introduction & Positionnement" : "Slide 1 • Introduction & Positioning",
      title: isFr
        ? "Ingénierie QA, Automatisation des Tests & Pratiques Scrum"
        : "QA Engineering, Test Automation & Scrum Practices",
      subtitle: isFr
        ? "Présentation Technique — Candidature Stage PFE chez Capgemini (Promotion 2027)"
        : "Technical Presentation — PFE Internship Application at Capgemini (Class of 2027)",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          <div
            style={{
              padding: "1.2rem",
              borderRadius: "10px",
              background: "rgba(0, 112, 173, 0.08)",
              border: "1px solid rgba(0, 112, 173, 0.25)"
            }}
          >
            <h4 style={{ color: "#0070AD", fontSize: "1.1rem", fontWeight: 800, marginBottom: "0.4rem" }}>
              Rafik AIT ICHOU — Élève-Ingénieur en 5ème année à l'EMSI Marrakech
            </h4>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.6, margin: 0 }}>
              {isFr
                ? "Disponible pour un stage de fin d'études de 6 mois à partir du 25 Janvier 2027 (Mobilité : Casablanca, Rabat, International)."
                : "Available for a 6-month final graduation internship starting January 25, 2027 (Mobility: Casablanca, Rabat, International)."}
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "0.8rem"
            }}
          >
            <div className="metric-chip" style={{ padding: "0.8rem", flexDirection: "column", alignItems: "flex-start", gap: "0.2rem" }}>
              <span style={{ fontSize: "1.3rem", fontWeight: 900, color: "var(--accent-primary)" }}>380+</span>
              <span style={{ fontSize: "0.82rem", color: "var(--text-secondary)", fontWeight: 600 }}>Tests automatisés déployés</span>
            </div>
            <div className="metric-chip" style={{ padding: "0.8rem", flexDirection: "column", alignItems: "flex-start", gap: "0.2rem" }}>
              <span style={{ fontSize: "1.3rem", fontWeight: 900, color: "var(--success)" }}>86.8%</span>
              <span style={{ fontSize: "0.82rem", color: "var(--text-secondary)", fontWeight: 600 }}>Couverture SonarQube (OCP Safi)</span>
            </div>
            <div className="metric-chip" style={{ padding: "0.8rem", flexDirection: "column", alignItems: "flex-start", gap: "0.2rem" }}>
              <span style={{ fontSize: "1.3rem", fontWeight: 900, color: "#0070AD" }}>Scrum & ISTQB</span>
              <span style={{ fontSize: "0.82rem", color: "var(--text-secondary)", fontWeight: 600 }}>Mindset & Bonnes pratiques</span>
            </div>
          </div>
        </div>
      ),
      pitch: isFr
        ? "« Bonjour. Je suis Rafik Ait Ichou, élève-ingénieur en 5ème année à l'EMSI Marrakech. Ma vision de l'ingénierie logicielle repose sur une conviction : la qualité logicielle ne se vérifie pas à la fin, elle se conçoit dès le premier jour. C'est cette rigueur d'automatisation, validée chez OCP Safi et sur des projets distribués, que je souhaite apporter aux équipes testing de Capgemini. »"
        : "“Hello. I am Rafik Ait Ichou, 5th-year engineering student at EMSI Marrakech. Software quality must be built-in from day one through test automation and agile rigor. I bring verified experience on industrial platforms (OCP Safi) to Capgemini's testing teams.”"
    },
    {
      num: 2,
      tag: isFr ? "Diapo 2 • Philosophie QA & Pyramide" : "Slide 2 • QA Philosophy & Pyramid",
      title: isFr
        ? "Philosophie QA & Pyramide des Tests (Shift-Left)"
        : "QA Philosophy & Test Pyramid (Shift-Left)",
      subtitle: isFr
        ? "Tester tôt pour détecter les anomalies quand le coût de correction est minimal"
        : "Test early to catch bugs when the cost to fix is lowest",
      content: (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            <div
              style={{
                background: "#0B192C",
                color: "#FFFFFF",
                padding: "0.7rem",
                borderRadius: "8px",
                textAlign: "center",
                fontSize: "0.85rem",
                fontWeight: 700,
                border: "1px solid rgba(255,255,255,0.2)"
              }}
            >
              Tests E2E & Sécurité (Selenium, OWASP, JMeter)
              <div style={{ fontSize: "0.72rem", color: "#60A5FA", fontWeight: 500 }}>Parcours critiques & Non-régression</div>
            </div>
            <div
              style={{
                background: "#0070AD",
                color: "#FFFFFF",
                padding: "0.85rem",
                borderRadius: "8px",
                textAlign: "center",
                fontSize: "0.9rem",
                fontWeight: 700
              }}
            >
              Tests d'Intégration & API (Postman, Spring Boot Test, SQL)
              <div style={{ fontSize: "0.75rem", color: "#E0F2FE", fontWeight: 500 }}>Contrats d'API, Concurrence & Droits RBAC</div>
            </div>
            <div
              style={{
                background: "#10B981",
                color: "#FFFFFF",
                padding: "1rem",
                borderRadius: "8px",
                textAlign: "center",
                fontSize: "0.95rem",
                fontWeight: 800
              }}
            >
              Tests Unitaires & Mocking (JUnit 5, Mockito, AssertJ, Pest)
              <div style={{ fontSize: "0.78rem", color: "#ECFDF5", fontWeight: 500 }}>Haute vélocité • Exécution en secondes • 86.8% couverture</div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <div style={{ padding: "0.9rem", background: "var(--bg-elevated)", borderRadius: "8px", border: "1px solid var(--border-subtle)" }}>
              <div style={{ fontWeight: 800, color: "#0070AD", fontSize: "0.88rem", marginBottom: "0.3rem" }}>
                1. Approche Shift-Left
              </div>
              <p style={{ fontSize: "0.84rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.5 }}>
                Définir les cas de test dès l'analyse des User Stories. Réduction par 10 du coût de correction des bugs.
              </p>
            </div>
            <div style={{ padding: "0.9rem", background: "var(--bg-elevated)", borderRadius: "8px", border: "1px solid var(--border-subtle)" }}>
              <div style={{ fontWeight: 800, color: "#0070AD", fontSize: "0.88rem", marginBottom: "0.3rem" }}>
                2. Principes ISTQB appliqués
              </div>
              <p style={{ fontSize: "0.84rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.5 }}>
                Priorisation par les risques, automatisation continue de non-régression et respect strict des Quality Gates.
              </p>
            </div>
          </div>
        </div>
      ),
      pitch: isFr
        ? "« Dans mes projets, j'applique la pyramide des tests : une base large et ultra-rapide de tests unitaires (JUnit 5, Mockito) qui donne un feedback aux développeurs en quelques secondes, une couche d'intégration pour tester les contrats d'API et la concurrence SQL, et une couche E2E ciblée avec Selenium pour sécuriser les parcours critiques sans alourdir le pipeline CI/CD. »"
        : "“I strictly implement the test pyramid: a broad and fast unit test base (JUnit 5, Mockito) providing instant developer feedback, API/integration tests for contracts and database concurrency, and targeted Selenium E2E tests for critical user workflows.”"
    },
    {
      num: 3,
      tag: isFr ? "Diapo 3 • Projet Phare OCP Safi" : "Slide 3 • Flagship OCP Project",
      title: isFr
        ? "Smart HSE 360 (OCP Safi) : Rigueur Industrielle"
        : "Smart HSE 360 (OCP Safi): Industrial Rigor",
      subtitle: isFr
        ? "222 tests automatisés, SonarQube à 86.8% et attestation officielle de satisfaction OCP"
        : "222 automated tests, 86.8% SonarQube coverage and official OCP certificate of excellence",
      content: (
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "1.5rem" }}>
          <div>
            <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "#0070AD", marginBottom: "0.6rem" }}>
              Rôle et Responsabilités QA :
            </h4>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.88rem", color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: "0.45rem", margin: 0 }}>
              <li><strong>Plan de test multi-couches :</strong> API REST Spring Boot, web Angular et mobile Flutter.</li>
              <li><strong>164 Tests Unitaires (JUnit 5 & Mockito) :</strong> validation des calculs de criticité HSE et des règles de notification.</li>
              <li><strong>58 Scénarios E2E (Selenium WebDriver) :</strong> flux complet de la déclaration d'incident à la clôture.</li>
              <li><strong>Quality Gate SonarQube :</strong> couverture à <strong>86.8%</strong>, 0 bug bloquant, 0 faille de sécurité.</li>
            </ul>

            <div style={{ marginTop: "1rem", padding: "0.6rem 0.9rem", background: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.3)", borderRadius: "8px" }}>
              <span style={{ fontSize: "0.82rem", color: "var(--success)", fontWeight: 700 }}>
                ✓ Attestation officielle de satisfaction délivrée par la Direction OCP Safi
              </span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
            <div style={{ fontSize: "0.8rem", fontWeight: 800, color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "0.2rem" }}>
              Pipeline CI/CD Déployé
            </div>
            {[
              { step: "1. Git Push / PR", sub: "Branche de feature", color: "var(--bg-elevated)" },
              { step: "2. Build Maven & Lint", sub: "Compilation Checkstyle", color: "rgba(0, 112, 173, 0.08)" },
              { step: "3. Tests Unitaires", sub: "164 tests JUnit 5 / Mockito", color: "rgba(16, 185, 129, 0.12)" },
              { step: "4. Tests E2E Selenium", sub: "58 scénarios d'usage", color: "rgba(0, 163, 224, 0.12)" },
              { step: "5. Quality Gate SonarQube", sub: "Seuil couverture \u2265 85%", color: "rgba(245, 158, 11, 0.15)" },
              { step: "6. Docker Staging Déployé", sub: "Zéro anomalie en recette", color: "#0B192C", text: "#FFFFFF" }
            ].map((p, idx) => (
              <div
                key={idx}
                style={{
                  padding: "0.45rem 0.8rem",
                  borderRadius: "6px",
                  background: p.color,
                  color: p.text || "var(--text-primary)",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "0.78rem"
                }}
              >
                <span style={{ fontWeight: 700 }}>{p.step}</span>
                <span style={{ fontSize: "0.72rem", opacity: 0.85 }}>{p.sub}</span>
              </div>
            ))}
          </div>
        </div>
      ),
      pitch: isFr
        ? "« Dans l'industrie lourde à l'OCP Safi, une régression logicielle peut paralyser la traçabilité de la sécurité des agents. J'ai conçu une suite de 222 tests automatisés intégrée dans un pipeline où aucun commit ne peut être déployé si le Quality Gate SonarQube à 85% n'est pas franchi. Ce travail a été salué par une attestation officielle de satisfaction délivrée par la Direction OCP. »"
        : "“At OCP Safi chemical plant, a bug can disrupt industrial safety. I built a 222-test automated suite with an enforced 85% SonarQube Quality Gate in CI/CD, earning an official certificate of excellence from OCP Management.”"
    },
    {
      num: 4,
      tag: isFr ? "Diapo 4 • Systèmes Connectés, IoT & Stage ENS" : "Slide 4 • Connected Systems, IoT & ENS Internship",
      title: isFr
        ? "Tests IoT, Systèmes Connectés & Stage ENS"
        : "IoT Testing, Connected Systems & ENS Internship",
      subtitle: isFr
        ? "Validation matériel-logiciel : vision par ordinateur, capteurs et tests d'intégration"
        : "Hardware-software validation: computer vision, sensors, and integration testing",
      content: (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem" }}>
          <div style={{ padding: "1.1rem", background: "var(--bg-card)", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
            <h4 style={{ color: "#0070AD", fontSize: "0.95rem", fontWeight: 800, marginBottom: "0.5rem" }}>
              Smart Parking (IoT, Vision & Next.js)
            </h4>
            <ul style={{ paddingLeft: "1.1rem", fontSize: "0.85rem", color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: "0.35rem", margin: 0 }}>
              <li><strong>Électronique & Capteurs :</strong> caméras ESP32-CAM et Raspberry Pi exécutant des modèles OpenCV / YOLOv8.</li>
              <li><strong>Tests d'intégration IoT :</strong> validation des flux WebSockets et MQTT en temps réel (latence &lt; 500 ms).</li>
              <li><strong>Tests unitaires & E2E :</strong> logique de réservation sous JUnit 5 et parcours de paiement simulés avec Selenium.</li>
              <li><strong>Résilience réseau :</strong> tests de déconnexion temporaire des caméras sans perte d'état.</li>
            </ul>
            <div style={{ marginTop: "0.8rem" }}>
              <span className="project-pill project-pill-primary">IoT ESP32 • YOLOv8 • Tests Selenium</span>
            </div>
          </div>

          <div style={{ padding: "1.1rem", background: "var(--bg-card)", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
            <h4 style={{ color: "#0070AD", fontSize: "0.95rem", fontWeight: 800, marginBottom: "0.5rem" }}>
              absENS — Stage de 6 Mois (ENS Marrakech)
            </h4>
            <ul style={{ paddingLeft: "1.1rem", fontSize: "0.85rem", color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: "0.35rem", margin: 0 }}>
              <li><strong>Borne IoT & Vision :</strong> module Raspberry Pi avec caméra OpenCV scannant des QR codes rotatifs chiffrés.</li>
              <li><strong>Tests anti-fraude :</strong> validation de l'impossibilité d'émarger par photo d'écran (durée de validité QR &lt; 3 s).</li>
              <li><strong>Tests de charge amphi :</strong> émargement de 1 200+ étudiants sans saturation de l'API Laravel / MySQL.</li>
              <li><strong>Livrable validé :</strong> attestation officielle de stage de 6 mois délivrée par l'ENS Marrakech.</li>
            </ul>
            <div style={{ marginTop: "0.8rem" }}>
              <span className="project-pill project-pill-primary">Stage 6 mois validé • Scan &lt; 3s • 0% Fraude</span>
            </div>
          </div>
        </div>
      ),
      pitch: isFr
        ? "« Au-delà du logiciel pur, j'ai une vraie expérience du test sur des systèmes physiques et IoT. Sur Smart Parking, j'ai validé la chaîne complète : capteurs ESP32, vision YOLOv8, flux WebSockets et tests E2E Selenium. Et lors de mon stage de 6 mois à l'ENS Marrakech sur le projet absENS, j'ai conçu et testé une borne Raspberry Pi / OpenCV pour sécuriser l'émargement de plus de 1 200 étudiants sans aucune fraude. »"
        : "“Beyond pure software, I test physical and connected systems. On Smart Parking, I validated the entire loop: ESP32 sensors, YOLOv8 vision, WebSocket streaming, and Selenium E2E booking tests. During my 6-month internship at ENS Marrakech on absENS, I tested an anti-fraud Raspberry Pi/OpenCV station serving 1,200+ students.”"
    },
    {
      num: 5,
      tag: isFr ? "Diapo 5 • Agilité & Scrum" : "Slide 5 • Agile & Scrum",
      title: isFr
        ? "L'Assurance Qualité au Cœur de l'Agilité Scrum"
        : "Quality Assurance at the Core of Agile Scrum",
      subtitle: isFr
        ? "Rôle actif du QA Engineer dans chaque rituel agile • Expérience Scrum Master Club E-TEAM"
        : "Active role of the QA Engineer in every agile ritual • Scrum experience as E-TEAM Club President",
      content: (
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.8rem", marginBottom: "1rem" }}>
            <div style={{ padding: "0.9rem", background: "var(--bg-card)", borderRadius: "8px", border: "1px solid var(--border-subtle)" }}>
              <div style={{ fontWeight: 800, color: "#0070AD", fontSize: "0.85rem", marginBottom: "0.3rem" }}>
                1. Sprint Planning
              </div>
              <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", margin: 0 }}>
                Cadrage des critères d'acceptation (Given-When-Then), estimation de l'effort de test et vérification du DoR.
              </p>
            </div>
            <div style={{ padding: "0.9rem", background: "var(--bg-card)", borderRadius: "8px", border: "1px solid var(--border-subtle)" }}>
              <div style={{ fontWeight: 800, color: "#0070AD", fontSize: "0.85rem", marginBottom: "0.3rem" }}>
                2. En Cours de Sprint
              </div>
              <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", margin: 0 }}>
                Écriture des tests en parallèle du développement, validation d'API dès mise à disposition et Daily Scrum.
              </p>
            </div>
            <div style={{ padding: "0.9rem", background: "var(--bg-card)", borderRadius: "8px", border: "1px solid var(--border-subtle)" }}>
              <div style={{ fontWeight: 800, color: "var(--success)", fontSize: "0.85rem", marginBottom: "0.3rem" }}>
                3. Review & DoD
              </div>
              <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", margin: 0 }}>
                Respect strict de la Definition of Done : 100% tests passants, couverture &ge; 80%, zéro bug bloquant.
              </p>
            </div>
            <div style={{ padding: "0.9rem", background: "var(--bg-card)", borderRadius: "8px", border: "1px solid var(--border-subtle)" }}>
              <div style={{ fontWeight: 800, color: "var(--warning)", fontSize: "0.85rem", marginBottom: "0.3rem" }}>
                4. Rétrospective
              </div>
              <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", margin: 0 }}>
                Analyse causale des anomalies (Root Cause Analysis) et amélioration continue de la suite de non-régression.
              </p>
            </div>
          </div>

          <div style={{ padding: "0.8rem 1rem", background: "rgba(0, 112, 173, 0.08)", borderRadius: "8px", border: "1px solid rgba(0, 112, 173, 0.25)" }}>
            <span style={{ fontSize: "0.82rem", color: "#0070AD", fontWeight: 700 }}>
              ★ Leadership Agile (Ex-Président Club E-TEAM) : Coordination de squads, animation des cérémonies Scrum et culture du livrable testé.
            </span>
          </div>
        </div>
      ),
      pitch: isFr
        ? "« En tant qu'ancien Président du Club E-TEAM, j'ai coordonné des squads en Scrum. La clé d'un QA performant en agile, c'est de travailler avec les développeurs dès le sprint planning pour challenger les critères d'acceptation, et de faire de la Definition of Done (DoD) un rempart infranchissable pour garantir la valeur livrée. »"
        : "“As former President of E-TEAM Club, I led agile squads. The key for a QA engineer in Scrum is to co-author acceptance criteria during planning and enforce an uncompromised Definition of Done.”"
    },
    {
      num: 6,
      tag: isFr ? "Diapo 6 • Boîte à Outils QA" : "Slide 6 • QA Tooling Stack",
      title: isFr
        ? "Boîte à Outils QA & Stack Technologique"
        : "QA Tooling Stack & Operational Skills",
      subtitle: isFr
        ? "Maîtrise pratique des outils de test, d'analyse de code et d'intégration continue"
        : "Hands-on mastery of test automation, code quality and CI/CD tools",
      content: (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div style={{ padding: "1rem", background: "var(--bg-card)", borderRadius: "8px", border: "1px solid var(--border-subtle)" }}>
            <h5 style={{ color: "#0070AD", fontWeight: 800, marginBottom: "0.4rem", fontSize: "0.88rem" }}>
              ▸ Tests Fonctionnels & API
            </h5>
            <ul style={{ paddingLeft: "1.1rem", fontSize: "0.82rem", color: "var(--text-secondary)", margin: 0 }}>
              <li><strong>Selenium WebDriver :</strong> automatisation web (Page Object Model).</li>
              <li><strong>Postman & Newman :</strong> collections de tests API REST.</li>
              <li><strong>Apache JMeter :</strong> tests de performance sous charge.</li>
            </ul>
          </div>
          <div style={{ padding: "1rem", background: "var(--bg-card)", borderRadius: "8px", border: "1px solid var(--border-subtle)" }}>
            <h5 style={{ color: "#0070AD", fontWeight: 800, marginBottom: "0.4rem", fontSize: "0.88rem" }}>
              ▸ Tests Unitaires & Mocking
            </h5>
            <ul style={{ paddingLeft: "1.1rem", fontSize: "0.82rem", color: "var(--text-secondary)", margin: 0 }}>
              <li><strong>JUnit 5 & AssertJ :</strong> tests paramétrés et assertions claires.</li>
              <li><strong>Mockito :</strong> isolation des dépendances et stubs.</li>
              <li><strong>Pest & PHPUnit :</strong> tests de logique métier MVC.</li>
            </ul>
          </div>
          <div style={{ padding: "1rem", background: "var(--bg-card)", borderRadius: "8px", border: "1px solid var(--border-subtle)" }}>
            <h5 style={{ color: "#0070AD", fontWeight: 800, marginBottom: "0.4rem", fontSize: "0.88rem" }}>
              ▸ Qualité de Code & Métriques
            </h5>
            <ul style={{ paddingLeft: "1.1rem", fontSize: "0.82rem", color: "var(--text-secondary)", margin: 0 }}>
              <li><strong>SonarQube :</strong> détection des bugs, failles et code smells.</li>
              <li><strong>JaCoCo :</strong> mesure exacte du taux de couverture.</li>
              <li><strong>Clean Code :</strong> refactoring sécurisé par les tests.</li>
            </ul>
          </div>
          <div style={{ padding: "1rem", background: "var(--bg-card)", borderRadius: "8px", border: "1px solid var(--border-subtle)" }}>
            <h5 style={{ color: "#0070AD", fontWeight: 800, marginBottom: "0.4rem", fontSize: "0.88rem" }}>
              ▸ DevOps & Intégration Continue
            </h5>
            <ul style={{ paddingLeft: "1.1rem", fontSize: "0.82rem", color: "var(--text-secondary)", margin: 0 }}>
              <li><strong>GitHub Actions :</strong> pipelines automatisés de test et build.</li>
              <li><strong>Docker :</strong> conteneurisation des environnements de test.</li>
              <li><strong>Maven & Git :</strong> gestion propre des versions et dépendances.</li>
            </ul>
          </div>
        </div>
      ),
      pitch: isFr
        ? "« Ma boîte à outils couvre toute la chaîne : de l'écriture des tests unitaires JUnit 5/Mockito à l'analyse de code SonarQube, en passant par l'automatisation E2E Selenium et l'orchestration dans GitHub Actions avec Docker. »"
        : "“My toolkit spans the entire testing lifecycle: unit tests with JUnit 5/Mockito, static analysis with SonarQube, E2E automation with Selenium, and CI/CD pipelines with Docker and GitHub Actions.”"
    },
    {
      num: 7,
      tag: isFr ? "Diapo 7 • Pourquoi Capgemini & Conclusion" : "Slide 7 • Why Capgemini & Conclusion",
      title: isFr
        ? "Pourquoi Capgemini & Quelle Valeur Immédiate ?"
        : "Why Capgemini & What Immediate Value?",
      subtitle: isFr
        ? "Synergie avec le leader mondial du testing • Engagement et disponibilité pour le stage PFE"
        : "Synergy with the global testing leader • Commitment and availability for PFE internship",
      content: (
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "1.5rem", alignItems: "center" }}>
          <div>
            <h4 style={{ color: "#0070AD", fontSize: "1rem", fontWeight: 800, marginBottom: "0.6rem" }}>
              Ce que j'apporte à vos équipes :
            </h4>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.88rem", color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: "0.5rem", margin: 0 }}>
              <li><strong>Double compétence Dév & Test :</strong> capacité à lire et auditer le code source pour écrire des tests pertinents.</li>
              <li><strong>Rigueur industrielle éprouvée :</strong> expérience réussie sur site industriel (OCP Safi, 222 tests, SonarQube 86.8%).</li>
              <li><strong>Pratique agile naturelle :</strong> habitué aux rituels Scrum, à la communication claire et au travail d'équipe.</li>
              <li><strong>Volonté d'apprendre :</strong> motivation à intégrer les standards d'excellence de la Testing Factory de Capgemini.</li>
            </ul>
          </div>

          <div
            style={{
              padding: "1.2rem",
              borderRadius: "10px",
              background: "rgba(0, 112, 173, 0.08)",
              border: "1px solid rgba(0, 112, 173, 0.3)",
              textAlign: "center"
            }}
          >
            <div style={{ fontWeight: 800, color: "#0070AD", fontSize: "1.1rem", marginBottom: "0.3rem" }}>
              Stage PFE 2027
            </div>
            <div style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "0.8rem" }}>
              6 mois • À partir du <strong>25 Janvier 2027</strong>
            </div>
            <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
              Casablanca, Rabat, International
            </div>
            <a
              href="/presentations/presentation_capgemini_testing.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              style={{ width: "100%", display: "inline-flex", justifyContent: "center", alignItems: "center", gap: "0.4rem" }}
            >
              <Icon name="download" size={15} />
              <span>Télécharger le PDF</span>
            </a>
          </div>
        </div>
      ),
      pitch: isFr
        ? "« Capgemini est la référence mondiale de l'assurance qualité logicielle. En me recrutant, vous intégrez un élève-ingénieur qui allie une vraie compréhension du code à une rigueur méthodologique éprouvée sur le terrain, immédiatement opérationnel en squad agile dès le 25 janvier 2027. »"
        : "“Capgemini is the worldwide benchmark for software quality. By bringing me on board, you get an engineer who combines deep code comprehension with field-proven testing rigor, ready to contribute to your agile squads on January 25, 2027.”"
    }
  ];

  const currentSlide = slides[activeSlide];

  return (
    <div style={{ padding: "4rem 0 6rem 0" }}>
      <Seo
        title={
          isFr
            ? "Entretien QA & Testing — Capgemini | Rafik Ait Ichou"
            : "QA & Testing Interview — Capgemini | Rafik Ait Ichou"
        }
        description={
          isFr
            ? "Présentation technique en 7 diapositives pour l'entretien d'assurance qualité logicielle et agilité Scrum chez Capgemini. Stage PFE dès Janvier 2027."
            : "7-slide technical presentation for QA software testing and Scrum agility interview at Capgemini. PFE internship starting January 2027."
        }
        path="/entretien"
      />

      <div className="container">
        {/* Header Section */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 2.5rem auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.3rem 0.85rem",
              borderRadius: "9999px",
              background: "rgba(0, 112, 173, 0.12)",
              color: "#0070AD",
              border: "1px solid rgba(0, 112, 173, 0.28)",
              fontSize: "0.8rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "1rem"
            }}
          >
            <Icon name="shield-check" size={15} />
            <span>Spécial Entretien Technique • Capgemini</span>
          </div>

          <h1
            style={{
              fontSize: "clamp(1.9rem, 4vw, 2.7rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
              marginBottom: "0.8rem"
            }}
          >
            {isFr
              ? "Ingénierie QA, Automatisation des Tests & Pratiques Scrum"
              : "QA Engineering, Test Automation & Scrum Practices"}
          </h1>

          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              marginBottom: "1.8rem"
            }}
          >
            {isFr
              ? "Présentation technique en 7 diapositives synthétisant mes compétences en assurance qualité, mes réalisations industrielles (OCP Safi) et ma culture agile."
              : "7-slide technical presentation summarizing my QA testing expertise, industrial implementations (OCP Safi), and agile culture."}
          </p>

          {/* Quick Action Buttons */}
          <div style={{ display: "flex", justifyContent: "center", gap: "0.8rem", flexWrap: "wrap" }}>
            <a
              href="/presentations/presentation_capgemini_testing.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem" }}
            >
              <Icon name="download" size={16} />
              <span>{isFr ? "Télécharger la Présentation PDF (154 Ko)" : "Download Presentation PDF (154 KB)"}</span>
            </a>

            <a
              href="/Cv/CV_AIT_ICHOU_Rafik_PFE_Testing.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem" }}
            >
              <Icon name="document" size={16} />
              <span>{isFr ? "Télécharger mon CV QA & Test" : "Download QA & Testing Resume"}</span>
            </a>

            {personal?.calendarBookingLink && (
              <a
                href={personal.calendarBookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem" }}
              >
                <Icon name="calendar" size={16} />
                <span>{isFr ? "Réserver un échange" : "Book a call"}</span>
              </a>
            )}
          </div>
        </div>

        {/* Tab Selector: Interactive Slides Deck vs Native PDF Viewer */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
            marginBottom: "2rem"
          }}
        >
          <button
            onClick={() => setActiveTab("deck")}
            className="btn btn-sm"
            style={{
              background: activeTab === "deck" ? "#0070AD" : "var(--bg-elevated)",
              color: activeTab === "deck" ? "#FFFFFF" : "var(--text-secondary)",
              fontWeight: 700,
              border: "1px solid var(--border-subtle)"
            }}
          >
            <Icon name="code" size={14} />
            <span>{isFr ? "Diaporama Interactif (7 Diapos)" : "Interactive Slides (7 Slides)"}</span>
          </button>

          <button
            onClick={() => setActiveTab("pdf")}
            className="btn btn-sm"
            style={{
              background: activeTab === "pdf" ? "#0070AD" : "var(--bg-elevated)",
              color: activeTab === "pdf" ? "#FFFFFF" : "var(--text-secondary)",
              fontWeight: 700,
              border: "1px solid var(--border-subtle)"
            }}
          >
            <Icon name="document" size={14} />
            <span>{isFr ? "Visionneuse PDF Complète" : "Complete PDF Viewer"}</span>
          </button>
        </div>

        {/* TAB 1 : Interactive Slide Deck */}
        {activeTab === "deck" && (
          <div style={{ maxWidth: "920px", margin: "0 auto" }}>
            {/* Slide Navigation Bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1rem",
                flexWrap: "wrap",
                gap: "0.6rem"
              }}
            >
              <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
                {slides.map((s, idx) => (
                  <button
                    key={s.num}
                    onClick={() => setActiveSlide(idx)}
                    style={{
                      padding: "0.35rem 0.75rem",
                      borderRadius: "6px",
                      border: activeSlide === idx ? "1px solid #0070AD" : "1px solid var(--border-subtle)",
                      background: activeSlide === idx ? "#0070AD" : "var(--bg-elevated)",
                      color: activeSlide === idx ? "#FFFFFF" : "var(--text-secondary)",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      transition: "all 0.15s ease"
                    }}
                  >
                    Diapo {s.num}
                  </button>
                ))}
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <button
                  onClick={() => setActiveSlide((prev) => Math.max(0, prev - 1))}
                  disabled={activeSlide === 0}
                  className="btn btn-secondary btn-sm"
                  style={{ opacity: activeSlide === 0 ? 0.4 : 1, padding: "0.35rem 0.7rem" }}
                  aria-label="Diapositive précédente"
                >
                  <Icon name="chevron-left" size={14} />
                </button>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-muted)" }}>
                  {activeSlide + 1} / {slides.length}
                </span>
                <button
                  onClick={() => setActiveSlide((prev) => Math.min(slides.length - 1, prev + 1))}
                  disabled={activeSlide === slides.length - 1}
                  className="btn btn-secondary btn-sm"
                  style={{ opacity: activeSlide === slides.length - 1 ? 0.4 : 1, padding: "0.35rem 0.7rem" }}
                  aria-label="Diapositive suivante"
                >
                  <Icon name="chevron-right" size={14} />
                </button>
              </div>
            </div>

            {/* Slide Presentation Card */}
            <div
              className="glass-card"
              style={{
                padding: "2rem",
                borderRadius: "16px",
                border: "1px solid var(--border-subtle)",
                boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
                minHeight: "420px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.6rem" }}>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      color: "#0070AD"
                    }}
                  >
                    {currentSlide.tag}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600 }}>
                    Capgemini PFE 2027
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.45rem",
                    fontWeight: 900,
                    lineHeight: 1.25,
                    marginBottom: "0.3rem"
                  }}
                >
                  {currentSlide.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--text-secondary)",
                    marginBottom: "1.5rem"
                  }}
                >
                  {currentSlide.subtitle}
                </p>

                {/* Slide Body */}
                <div style={{ marginBottom: "1.5rem" }}>
                  {currentSlide.content}
                </div>
              </div>

              {/* Pitch Oral Helper */}
              <div
                style={{
                  padding: "0.9rem 1.1rem",
                  borderRadius: "10px",
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border-subtle)",
                  fontSize: "0.84rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.55
                }}
              >
                <div style={{ fontWeight: 800, color: "var(--text-primary)", fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: "0.25rem" }}>
                  💬 Ce qu'il faut dire à l'oral (Pitch de soutenance) :
                </div>
                <div style={{ fontStyle: "italic" }}>{currentSlide.pitch}</div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2 : Native PDF Viewer */}
        {activeTab === "pdf" && (
          <div style={{ maxWidth: "980px", margin: "0 auto" }}>
            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid var(--border-subtle)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                background: "#0F172A"
              }}
            >
              <object
                data="/presentations/presentation_capgemini_testing.pdf#toolbar=1"
                type="application/pdf"
                width="100%"
                height="620px"
              >
                <div style={{ padding: "3rem", textAlign: "center", color: "#FFFFFF" }}>
                  <p style={{ marginBottom: "1rem" }}>
                    Votre navigateur ne permet pas d'afficher directement le PDF.
                  </p>
                  <a
                    href="/presentations/presentation_capgemini_testing.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Ouvrir le PDF dans un nouvel onglet
                  </a>
                </div>
              </object>
            </div>
          </div>
        )}

        {/* Section FAQ & Questions Pièges de l'entretien */}
        <div style={{ maxWidth: "920px", margin: "4rem auto 0 auto" }}>
          <div className="section-badge" style={{ marginBottom: "0.5rem" }}>
            <Icon name="sparkles" size={14} />
            <span>{isFr ? "Guide Pratique pour l'Entretien" : "Interview Practical Guide"}</span>
          </div>

          <h2 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: "1.5rem" }}>
            {isFr ? "Questions Fréquentes chez Capgemini & Réponses Recommandées" : "Classic Capgemini QA Questions & Key Answers"}
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              {
                q: isFr ? "« Quelle est votre Definition of Done (DoD) type ? »" : "“What is your standard Definition of Done (DoD)?”",
                r: isFr
                  ? "Une tâche ou User Story n'est terminée que si : 1) Tous les critères d'acceptation sont validés, 2) Les tests unitaires et d'intégration sont passants à 100%, 3) La couverture de code respecte le seuil convenu (\u2265 80%), 4) Le Quality Gate SonarQube est au vert (0 anomalie critique), 5) La revue de code est approuvée, et 6) Le livrable est testé sur l'environnement de staging."
                  : "A story is only Done when: 1) Acceptance criteria are verified, 2) Unit & integration tests pass at 100%, 3) Code coverage meets the threshold (\u2265 80%), 4) SonarQube Quality Gate passes, 5) Peer review is approved, and 6) Staging deployment succeeds."
              },
              {
                q: isFr ? "« Comment gérez-vous un désaccord avec un développeur sur une anomalie ? »" : "“How do you resolve a bug dispute with a developer?”",
                r: isFr
                  ? "Je dépersonnalise le débat en me basant sur les faits : je fournis un rapport de bug clair, concis et reproductible (étapes détaillées, données de test, résultat attendu vs obtenu, logs et capture d'écran). Si le désaccord persiste, nous nous référons ensemble aux critères d'acceptation définis avec le Product Owner lors du Sprint Planning."
                  : "I depersonalize the discussion by sticking to facts: reproducible steps, test data, expected vs actual result, logs, and video captures. We refer back to the user story's acceptance criteria agreed upon with the PO."
              },
              {
                q: isFr ? "« Pourquoi choisir l'Assurance Qualité (QA) plutôt que le développement pur ? »" : "“Why choose QA over pure feature development?”",
                r: isFr
                  ? "Parce que la valeur d'une application ne se mesure pas au nombre de lignes de code écrites, mais à sa fiabilité, sa sécurité et sa résilience. Le rôle de Software Engineer in Test (SDET) chez Capgemini est un rôle d'ingénierie complet : il exige de comprendre l'architecture logicielle, de maîtriser l'automatisation avancée et de garantir la confiance du client final."
                  : "Because software value lies in reliability, security, and resilience. A QA / SDET engineer at Capgemini is a full-fledged engineer requiring deep architectural understanding and advanced test automation."
              }
            ].map((faq, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{ padding: "1.2rem 1.4rem", borderRadius: "10px" }}
              >
                <div style={{ fontWeight: 800, color: "#0070AD", fontSize: "0.95rem", marginBottom: "0.4rem" }}>
                  {faq.q}
                </div>
                <div style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {faq.r}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
