---
name: babysit
description: "Autonomously monitor and shepherd ongoing tasks, PRs, test suites, and CI pipelines until completion, resolving blockers and reporting status."
---

# Babysit — Autonomous Task & PR Shepherd

Use this skill when you need to oversee a long-running job, monitor pull requests, fix failing CI runs, or ensure a series of tasks run to completion without constant user intervention.

## Core Directives

1. **Safety First**: Never run destructive git commands (such as `git reset --hard` without a backup snapshot).
2. **Deterministic Checks**: Before declaring success, verify that:
   - All tests pass (`npm test`, `pytest`, etc.).
   - The build compiles with 0 errors.
   - Linting and format checks pass.
3. **Loop & Triage**:
   - Inspect build/CI logs on failure.
   - Formulate targeted, minimal patches.
   - Re-test and verify until green.
4. **Status Reporting**: Emit concise progress milestones to keep the operator informed of state transitions.
