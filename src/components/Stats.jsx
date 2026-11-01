import React from "react";

export function Stats({ lang, stats }) {
  return (
    <section style={{ padding: "1.5rem 0 4rem 0", position: "relative" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.2rem"
          }}
        >
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: "1.8rem 1.5rem",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden"
              }}
            >
              <div
                style={{
                  fontSize: "clamp(2.2rem, 4vw, 3rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  background: "var(--accent-gradient)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: 1.1,
                  marginBottom: "0.5rem"
                }}
              >
                {item.value}
              </div>
              <div
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "0.25rem"
                }}
              >
                {item.label[lang]}
              </div>
              <div
                style={{
                  fontSize: "0.825rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.4
                }}
              >
                {item.sub[lang]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

