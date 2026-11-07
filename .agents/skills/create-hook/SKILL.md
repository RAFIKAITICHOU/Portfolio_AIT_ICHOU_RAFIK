---
name: create-hook
description: "Generator and configurator for agent lifecycle hooks (PreToolUse, PostToolUse, Stop, SessionStart) and deterministic automation rules."
---

# Create Hook — Agent Lifecycle Automation

Use this skill to configure or generate lifecycle hooks that trigger automatically outside the model's context window.

## Supported Hooks

- `PreToolUse`: Execute checks or validation scripts before a tool runs (e.g. blocking unsafe shell commands).
- `PostToolUse`: Run automated formatters or linters immediately after file edits.
- `Stop`: Run a verification gate or test suite before allowing an agent to conclude work.
- `SessionStart`: Initialize environment variables or project context upon agent launch.

## Output Format

Generates or updates `hooks.json` or `.codex/hooks.json` with structured matcher rules and command runners.
