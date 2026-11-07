---
name: create-subagent
description: "Generator and configurator for isolated subagents with specialized roles, custom system prompts, and restricted toolsets."
---

# Create Subagent — Isolated Delegation Specialist

Use this skill to configure specialized subagents designed to execute deep, compartmentalized tasks without blowing out the primary context window.

## Guidelines

1. **Role Definition**: Define a 2-4 word job title (e.g. `Security Auditor`, `CSS Refactorer`).
2. **Constrained Tools**: Grant only the minimal necessary toolset (e.g. read-only tools for research agents).
3. **Structured Return Contract**: Mandate that the subagent returns a concise, structured markdown report summarizing its findings and file diffs.
