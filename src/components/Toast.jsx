import React from "react";
import { Icon } from "./Icons";

export function Toast({ message, visible }) {
  if (!visible || !message) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        zIndex: 1100,
        background: "var(--bg-elevated)",
        color: "var(--text-primary)",
        border: "1px solid var(--accent-primary)",
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.4)",
        borderRadius: "var(--radius-md)",
        padding: "0.85rem 1.4rem",
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        fontSize: "0.9rem",
        fontWeight: 600,
        animation: "slideUp 0.25s ease"
      }}
    >
      <Icon name="check-circle" size={18} style={{ color: "var(--success)" }} />
      <span>{message}</span>
    </div>
  );
}

