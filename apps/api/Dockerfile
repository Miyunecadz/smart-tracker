FROM node:22-alpine AS base
RUN corepack enable && corepack prepare pnpm@latest --activate

FROM base AS deps
WORKDIR /app
COPY pnpm-workspace.yaml package.json pnpm-lock.yaml .npmrc ./
COPY packages/config/package.json ./packages/config/
COPY packages/graphql-types/package.json ./packages/graphql-types/
COPY apps/api/package.json ./apps/api/
RUN pnpm install --frozen-lockfile --filter @smart-tracker/api...

FROM deps AS build
COPY . .
RUN pnpm --filter @smart-tracker/api build

FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/apps/api/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/apps/api/node_modules ./apps/api/node_modules
EXPOSE 4000
CMD ["node", "dist/main"]
