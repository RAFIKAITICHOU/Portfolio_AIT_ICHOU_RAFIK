---
name: split-to-prs
description: "Analyzes dirty working trees or large feature branches and safely divides them into small, cohesive, reviewable pull requests."
---

# Split to PRs — Safe Git Branch Decomposition

Use this skill to break down large, multi-feature working trees into isolated, stacked pull requests without losing any uncommitted work.

## Protocol

1. **Safety Snapshot**: Always create a git stash or backup branch before modifying git state:
   ```bash
   git stash create
   git branch backup/pre-split-$(date +%s)
   ```
2. **Analysis**: Group modified files into logical functional layers:
   - Types and schemas.
   - Core business logic / backend services.
   - UI components and styles.
   - Documentation and configuration.
3. **Plan Approval**: Propose the breakdown plan to the developer before branching.
4. **Isolated Branch Creation**: For each slice, branch from base, stage only related files by name, commit with conventional commit message, and test compilation.
