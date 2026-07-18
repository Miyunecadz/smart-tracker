---
name: verifier-before-commit
enabled: true
event: bash
pattern: 'git commit'
severity: warn
---
Before committing a non-trivial change, dispatch the `reviewer` agent on the staged diff (`git diff --cached`) to catch issues a regex can't — logic errors, missing cases, leaked debug code. This is advisory: it reminds you, it does not block the commit.
