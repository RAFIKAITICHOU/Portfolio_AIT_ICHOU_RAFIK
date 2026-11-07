---
name: migrate-to-skills
description: "Migrates legacy prompts, slash commands, rules, and monolithic system prompts into modern, modular SKILL.md packages."
---

# Migrate to Skills — Modern Skills Migrator

Use this skill to convert legacy developer instructions, Cursor `.cursorrules`, or custom workflows into structured, reusable Agent Skills.

## Migration Process

1. Parse legacy instructions into discrete functional domains.
2. Extract procedural steps into individual `SKILL.md` packages.
3. Replace hardcoded prompts with on-demand skill triggers.
4. Verify directory layout and YAML frontmatter conformity.
