# smart-tracker — Conventions

<!-- Hand-written, repo-specific. Sits alongside the GENERATED `architecture/` (Graphify).
     Keep human judgment here; leave the structural map to the generated graph. -->

Repo-specific conventions for the **smart-tracker** pnpm monorepo
(`apps/api`, `apps/web`, `packages/config`, `packages/graphql-types`).
For the cross-repo picture see [`../_shared/`](../_shared/) and [`../repo-map.md`](../repo-map.md).

## Build & run

| Task | Command | Notes |
|---|---|---|
| Install | `pnpm install` | pnpm workspace; Node + pnpm required |
| Dev (all) | `pnpm dev` | `concurrently` runs api + web (`predev` runs codegen) |
| Dev (api only) | `pnpm --filter @smart-tracker/api dev` | `nest start --watch` |
| Dev (web only) | `pnpm --filter @smart-tracker/web dev` | `next dev --turbopack` |
| Build (all) | `pnpm build` | builds api then web |
| Codegen | `pnpm codegen` | `graphql-codegen --config codegen.ts` → `packages/graphql-types` |
| DB migration (create) | `pnpm --filter @smart-tracker/api migration:create` | MikroORM; **new** migration only |
| DB migration (apply) | `pnpm --filter @smart-tracker/api migration:up` | |
| DB seed (roles) | `pnpm --filter @smart-tracker/api seed:roles` | Idempotent; inserts default `user` role |
| Local infra | `docker-compose up` | Postgres (see `docker-compose.yml`) |

## Lint & format

- Lint (all): `pnpm lint` (per-package). api: `eslint src --ext .ts`; web: `next lint`.
- Format: prettier (config in repo). <!-- TODO: confirm format script / prettier config path -->
- Pre-commit: none detected (no husky). <!-- TODO: confirm -->

## Tests

<!-- TODO: no test runner detected in package.json scripts. Confirm test setup (jest? vitest?)
     and fill run-all / run-one / location once tests exist. -->

- Run all: <!-- TODO -->
- Run one: <!-- TODO -->
- Location / naming: <!-- TODO -->

## Notable patterns

- **Monorepo:** pnpm workspace, packages under `apps/*` and `packages/*`. Shared code imported as `@smart-tracker/*` (`workspace:*`).
- **GraphQL codegen:** types generated into `packages/graphql-types/src/generated.ts` (gitignored) from the API schema. `apps/api/schema.gql` is generated too — do not hand-edit either; run `pnpm codegen`.
- **Backend:** NestJS modules/resolvers/services; MikroORM (postgres) entities + migrations; `class-validator` inputs.
- **Frontend:** Next.js (App Router, turbopack) + `@apollo/client` via `@apollo/client-integration-nextjs`.

## Gotchas

- **Generated files, never edit by hand:** `apps/api/schema.gql`, `packages/graphql-types/src/generated.ts` (both gitignored). Regenerate with `pnpm codegen`.
- **Applied migrations are immutable** — always create a new one.
- **`predev` runs codegen** — schema must be valid before `pnpm dev` starts.
- Env: copy `.env.example` → `.env`. <!-- TODO: document required vars; see docs/_shared/env-matrix.md -->
