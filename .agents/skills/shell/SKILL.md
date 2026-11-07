---
name: shell
description: "Safe terminal execution, command validation, environment control, and process supervision for agent workflows."
---

# Shell — Safe Terminal Execution & Process Supervision

Use this skill when executing terminal commands, handling long-running background tasks, or debugging environment and build issues.

## Execution Guardrails

1. Attempt execution inside the secure sandbox first.
2. Elevate to unsandboxed mode only for genuine network or external host system dependencies.
3. Keep command strings simple, prefix-matchable, and avoid dangerous shell constructs.
4. Capture stdout, stderr, and exit codes accurately.
