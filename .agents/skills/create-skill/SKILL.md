---
name: create-skill
description: "Scaffolding tool for new Agent Skills, creating standardized SKILL.md files with YAML frontmatter, references, and scripts."
---

# Create Skill — Modular Agent Skill Scaffolder

Use this skill to create self-contained Agent Skills adhering to the open `SKILL.md` specification.

## Directory Structure

```
skill-name/
├── SKILL.md          # Primary entry point with name & description
├── scripts/          # Optional helper scripts (Node, Python, Bash)
├── references/       # In-depth documentation loaded on-demand
└── assets/           # Templates, icons, or static resources
```

## SKILL.md Structure

Must include valid YAML frontmatter with `name` and `description` (explaining triggers and operational scope), followed by actionable procedural markdown.
