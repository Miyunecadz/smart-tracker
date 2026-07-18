# Graph Report - smart-tracker  (2026-07-18)

## Corpus Check
- 99 files · ~19,666 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 537 nodes · 500 edges · 74 communities (42 shown, 32 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `154e2080`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- GraphQL Contract — the cross-repo spine
- dependencies
- repo-map.md
- User
- compilerOptions
- devDependencies
- scripts
- compilerOptions
- devDependencies
- dependencies
- devDependencies
- components.json
- The Lodestar Catalog
- package.json
- compilerOptions
- gen-agents.md
- onboard-repo.md
- guardrails.md
- lodestar-init.md
- lodestar-guardrails.py
- Smart Tracker
- nest-cli.json
- <repo> — Conventions
- layout.tsx
- page.tsx
- <WORKSPACE_NAME> — Workspace Router
- MCP Templates
- .prettierrc.json
- next.config.ts
- next-env.d.ts
- SKILL.md
- SKILL.md
- codegen.ts
- glossary.md
- accessibility-reviewer.md
- docs-writer.md
- drf-endpoint-writer.md
- feature-orchestrator.md
- feature-planner.md
- implementer.md
- migration-writer.md
- migration-writer-django.md
- release-runner.md
- resolver-writer.md
- reviewer.md
- security-auditor.md
- test-writer.md
- test-writer-python.md
- ui-designer.md
- SKILL.md
- SKILL.md
- SKILL.md
- SKILL.md
- SKILL.md
- SKILL.md
- SKILL.md
- SKILL.md
- glossary.md

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 11 edges
2. `User` - 10 edges
3. `compilerOptions` - 10 edges
4. `compilerOptions` - 10 edges
5. `GraphQL Contract — the cross-repo spine` - 9 edges
6. `UsersService` - 8 edges
7. `REST API Contract — the cross-repo spine` - 8 edges
8. `scripts` - 7 edges
9. `The Lodestar Catalog` - 7 edges
10. `Smart Tracker` - 7 edges

## Surprising Connections (you probably didn't know these)
- `bootstrap()` --indirect_call--> `AppModule`  [INFERRED]
  apps/api/src/main.ts → apps/api/src/app.module.ts

## Import Cycles
- None detected.

## Communities (74 total, 32 thin omitted)

### Community 0 - "GraphQL Contract — the cross-repo spine"
Cohesion: 0.05
Nodes (42): API Contract — the cross-repo spine, Overview, Payload shapes, Permission model, Surface overview, Versioning & evolution rules, Auth Model, Multi-factor authentication (optional) (+34 more)

### Community 1 - "dependencies"
Cohesion: 0.05
Nodes (37): @apollo/server, dependencies, @apollo/server, class-transformer, class-validator, dotenv, graphql, @mikro-orm/core (+29 more)

### Community 2 - "repo-map.md"
Cohesion: 0.06
Nodes (30): Enforcement, Loading policy (do not remove — this keeps the router thin), Onboarding a new repo, Repositories, smart-tracker — Workspace Router, Diagram, How they connect, Repo Map (+22 more)

### Community 3 - "User"
Cohesion: 0.12
Nodes (15): AppModule, Module, bootstrap(), UserEntity, User, Module, UsersModule, UsersResolver (+7 more)

### Community 4 - "compilerOptions"
Cohesion: 0.08
Nodes (25): compilerOptions, allowJs, incremental, jsx, lib, module, moduleResolution, noEmit (+17 more)

### Community 5 - "devDependencies"
Cohesion: 0.08
Nodes (24): concurrently, @graphql-codegen/cli, @graphql-codegen/typescript, @graphql-codegen/typescript-operations, @graphql-codegen/typescript-react-apollo, devDependencies, concurrently, graphql (+16 more)

### Community 6 - "scripts"
Cohesion: 0.09
Nodes (21): devDependencies, @nestjs/cli, @nestjs/schematics, ts-node, @types/node, typescript, @types/node, typescript (+13 more)

### Community 7 - "compilerOptions"
Cohesion: 0.09
Nodes (21): compilerOptions, emitDecoratorMetadata, experimentalDecorators, lib, module, moduleResolution, outDir, paths (+13 more)

### Community 8 - "devDependencies"
Cohesion: 0.09
Nodes (21): devDependencies, tailwindcss, @tailwindcss/postcss, @types/node, @types/react, @types/react-dom, typescript, @types/node (+13 more)

### Community 9 - "dependencies"
Cohesion: 0.10
Nodes (21): @apollo/client-integration-nextjs, dependencies, @apollo/client, @apollo/client-integration-nextjs, clsx, graphql, next, react (+13 more)

### Community 10 - "devDependencies"
Cohesion: 0.10
Nodes (19): eslint, eslint-config-prettier, @eslint/js, devDependencies, eslint, eslint-config-prettier, @eslint/js, prettier (+11 more)

### Community 11 - "components.json"
Cohesion: 0.12
Nodes (15): aliases, components, hooks, lib, ui, utils, rsc, $schema (+7 more)

### Community 12 - "The Lodestar Catalog"
Cohesion: 0.13
Nodes (13): Catalog Index — Universal Core & Stack Packs, Doc & MCP templates (not stack-filtered), ⬡ Node · GraphQL · React · React Native pack, 🐍 Python · Django pack, 🌐 Universal core — `stacks: [all]` (works on any stack), Adding your own entries, Agent entry format (`catalog/agents/<id>.md`), Guardrail entry format (`catalog/guardrails/<id>.md`) (+5 more)

### Community 13 - "package.json"
Cohesion: 0.15
Nodes (12): dependencies, @apollo/client, graphql, rxjs, exports, @apollo/client, graphql, rxjs (+4 more)

### Community 14 - "compilerOptions"
Cohesion: 0.18
Nodes (10): compilerOptions, declaration, declarationMap, esModuleInterop, forceConsistentCasingInFileNames, resolveJsonModule, skipLibCheck, sourceMap (+2 more)

### Community 15 - "gen-agents.md"
Cohesion: 0.22
Nodes (8): 1. Load context, 2. Build the candidate list, 2b. Adaptive recommendation pass, 3. Present the picker, 4. Resolve repo targeting, 5. Write the agents, 5b. Resolve each agent's `loads` dependencies, 6. Update the manifest & report

### Community 16 - "onboard-repo.md"
Cohesion: 0.22
Nodes (8): 1. Locate and identify the repo, 2. Detect stacks, 3. Map the architecture (Graphify if installed, else Markdown), 4. File repo docs, 5. Install matching skills, 5b. Enrich the API-contract spine (only if a matching stack is detected), 6. Update the map and manifest, 7. Report

### Community 17 - "guardrails.md"
Cohesion: 0.25
Nodes (7): 1. Load context, 2. Build the candidate list, 2b. Adaptive recommendation pass, 3. Present the picker, 4. Install the guardrail engine (once), 5. Write the selected rules — into the `.claude/guardrails/` folder, 6. Update the manifest & report

### Community 18 - "lodestar-init.md"
Cohesion: 0.25
Nodes (7): 1. Sanity-check the workspace, 2. Confirm placement (once per workspace), 3. Create the thin root CLAUDE.md, 4. Scaffold shared docs, 5. Install workspace-wide skills, 6. Write the manifest, 7. Report and suggest next steps

### Community 19 - "lodestar-guardrails.py"
Cohesion: 0.39
Nodes (7): field_for(), load_rules(), main(), parse_frontmatter(), Minimal scalar YAML frontmatter parser. Returns (dict, body)., The string a rule tests against., rules_dir()

### Community 20 - "Smart Tracker"
Cohesion: 0.25
Nodes (7): Code generation note, Daily development, First-time setup, Prerequisites, Production Docker builds, Smart Tracker, Useful commands

### Community 21 - "nest-cli.json"
Cohesion: 0.29
Nodes (6): collection, compilerOptions, deleteOutDir, plugins, $schema, sourceRoot

### Community 22 - "<repo> — Conventions"
Cohesion: 0.29
Nodes (6): Build & run, Gotchas, Lint & format, Notable patterns, <repo> — Conventions, Tests

### Community 25 - "<WORKSPACE_NAME> — Workspace Router"
Cohesion: 0.33
Nodes (5): Enforcement, Loading policy (do not remove — this keeps the router thin), Onboarding a new repo, Repositories, <WORKSPACE_NAME> — Workspace Router

### Community 26 - "MCP Templates"
Cohesion: 0.33
Nodes (5): How to use, MCP Templates, Templates here, Verify current endpoints, What's in the file — and what isn't

### Community 27 - ".prettierrc.json"
Cohesion: 0.33
Nodes (5): printWidth, semi, singleQuote, tabWidth, trailingComma

## Knowledge Gaps
- **305 isolated node(s):** `$schema`, `collection`, `sourceRoot`, `deleteOutDir`, `plugins` (+300 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **32 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `scripts`?**
  _High betweenness centrality (0.010) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `devDependencies`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **What connects `$schema`, `collection`, `sourceRoot` to the rest of the system?**
  _305 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `GraphQL Contract — the cross-repo spine` be split into smaller, more focused modules?**
  _Cohesion score 0.045068027210884355 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.05405405405405406 - nodes in this community are weakly interconnected._
- **Should `repo-map.md` be split into smaller, more focused modules?**
  _Cohesion score 0.06031746031746032 - nodes in this community are weakly interconnected._
- **Should `User` be split into smaller, more focused modules?**
  _Cohesion score 0.12315270935960591 - nodes in this community are weakly interconnected._