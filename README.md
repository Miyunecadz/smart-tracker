# Smart Tracker

Full-stack monorepo: Next.js (App Router) + NestJS + GraphQL + MikroORM + PostgreSQL.

## Prerequisites

- [pnpm](https://pnpm.io/installation) ≥ 9
- [Docker](https://docs.docker.com/get-docker/) (for PostgreSQL)
- Node.js ≥ 22

## First-time setup

```bash
# 1. Install all dependencies
pnpm install

# 2. Copy environment files
cp .env.example .env
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env

# 3. Start PostgreSQL
docker compose up -d postgres

# 4. Start the API once to generate schema.gql, then Ctrl+C
pnpm --filter @smart-tracker/api dev

# 5. Run the initial DB migration
cd apps/api && pnpm migration:create --initial && pnpm migration:up && cd ../..

# 6. Run GraphQL code generation
pnpm codegen
```

## Daily development

```bash
# Start everything (API + Web)
pnpm dev
```

| Service    | URL                          |
|------------|------------------------------|
| Web (Next) | http://localhost:3000        |
| API (GraphQL) | http://localhost:4000/graphql |
| Adminer (DB UI) | http://localhost:8080   |

## Useful commands

```bash
pnpm codegen                        # Regenerate GraphQL types after schema changes
pnpm --filter @smart-tracker/api migration:create  # Create a new migration
pnpm --filter @smart-tracker/api migration:up      # Run pending migrations
pnpm build                          # Build both apps
pnpm lint                           # Lint all packages
```

## Code generation note

`packages/graphql-types/src/generated.ts` is auto-generated and git-ignored. It is regenerated:
- Manually via `pnpm codegen`
- Automatically before `pnpm dev` (via the `predev` script)

If you add a new entity or resolver to `apps/api`, restart the API (to regenerate `schema.gql`), then run `pnpm codegen`.

## Production Docker builds

```bash
# API
docker build -f apps/api/Dockerfile -t smart-tracker-api .

# Web
docker build -f apps/web/Dockerfile -t smart-tracker-web .
```

Both Dockerfiles use multi-stage builds and must be run from the **monorepo root** (context = `.`).
