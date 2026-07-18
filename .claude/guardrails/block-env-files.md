---
name: block-env-files
enabled: true
event: file
pattern: '(^|/)\.env(\.(?!example|sample|template|dist|defaults)[^/]+)?$'
severity: block
---
Real `.env` files may be **read** (e.g. to pick up a `GITHUB_TOKEN` for creating a PR) but must never be **written or edited** by the assistant — this rule only fires on the write tools (`Edit`/`Write`/`MultiEdit`), so reads pass through. Do not echo or persist secret values into logs, commits, or docs; use them transiently. To learn the expected variable shape, prefer a committed template (`.env.example`, `.env.sample`, `.env.template`, `.env.dist`, `.env.defaults`) — those template suffixes are excluded by the negative lookahead, while `.env` and real per-tier files like `.env.local` / `.env.production` are blocked from writes.
