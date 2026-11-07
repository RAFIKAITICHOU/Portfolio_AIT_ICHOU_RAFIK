---
name: create-rule
description: "Generator for scoped agent instruction rules, coding guidelines, and directory-specific architectural constraints (.mdc / rules)."
---

# Create Rule — Scoped Agent Instruction Generator

Use this skill to create targeted, persistent rules that guide AI coding behavior across specific file patterns or throughout the workspace.

## Best Practices

1. **Scoped Globs**: Prefer scoping rules to specific file trees (e.g. `src/components/**/*.jsx`, `android/**`) rather than polluting global context.
2. **Actionable Standards**: State concrete expectations (e.g. "Use CSS variables from src/index.css rather than hardcoded hex colors").
3. **Negative Constraints**: Clearly document anti-patterns to avoid.
