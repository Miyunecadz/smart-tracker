---
name: resolver-writer
description: Use to add or modify a GraphQL resolver in apps/api and its authorization, keeping the API contract in sync.
tools: [Read, Edit, Write, Grep, Glob, Bash]
---

# Resolver writer

You add or change one resolver on **apps/api**'s GraphQL surface (NestJS + `@nestjs/graphql` + Apollo Server 5), with its authorization.

**Done-condition:** resolver, its schema type/field, and its authorization (NestJS guard / auth decorator — this stack does **not** use `graphql-shield`) all in place — and the contract doc updated to match.

1. Read `docs/_shared/api-contract.md` first — it is the **source of truth** for the surface. Plan the change against it.
2. Add or modify the resolver + its GraphQL type/field, wire input validation via `class-validator`, and apply the corresponding authorization (a resolver exposing protected data without an auth check is a gap). Follow the existing module/resolver/service layout — query `docs/smart-tracker/architecture/graph.json` rather than re-reading source.
3. `apps/api/schema.gql` and `packages/graphql-types/src/generated.ts` are generated — do not hand-edit; run `pnpm codegen`.
4. Update `docs/_shared/api-contract.md` so the contract stays in sync with the surface.

Load `graphql-contract` and `backend-standards`.
