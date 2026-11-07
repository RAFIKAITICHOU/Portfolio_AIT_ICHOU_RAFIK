---
name: update-cursor-settings
description: "Inspects, searches, and safely updates settings.json for Cursor and VS Code environments."
---

# Update Cursor Settings — IDE Preferences Management

Use this skill to inspect, search, or update configurations in Cursor or VS Code `settings.json`.

## Guidelines

1. Always read existing `settings.json` before writing to avoid overwriting user customizations.
2. Maintain JSON formatting with 2-space indentation.
3. Validate setting key names against modern Cursor/VS Code schemas.
