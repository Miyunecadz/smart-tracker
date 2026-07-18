---
name: backend-standards
description: Use when editing the backend (apps/api) — NestJS resolvers/modules, MikroORM entities & migrations, or the GraphQL schema.
stacks: [graphql-apollo-server]
---

# Backend standards (apps/api)

Conventions live in the docs, not here. Read **`docs/smart-tracker/conventions.md`** and **`docs/smart-tracker/architecture/`** before editing.

**Key reminders:**

- **Migrations (MikroORM):** create a **NEW** migration with `pnpm --filter @smart-tracker/api migration:create` — never edit one that has already been applied. Apply with `migration:up`. Config: `apps/api/mikro-orm.config.ts`.
- **Resolvers/modules:** NestJS + `@nestjs/graphql` + `@nestjs/apollo` (Apollo Server 5). Follow the existing module/resolver/service layout — query `docs/smart-tracker/architecture/graph.json` rather than re-reading source.
- **Validation:** DTO/input validation via `class-validator`.
- **Contract:** any change to the GraphQL surface also updates the contract — load `graphql-contract` and keep `docs/_shared/api-contract.md` in sync.

Details, patterns, and the actual code layout are in `docs/smart-tracker/` — go there.
