# https://turbo.build/repo/docs/guides/tools/docker

# Base image
FROM node:18-alpine AS base
RUN apk update
RUN apk add --no-cache libc6-compat
RUN yarn global add pnpm@9.12.3 turbo@2.3.0

# Building Stage
FROM base AS build
WORKDIR /app
COPY . .
RUN pnpm install --no-frozen-lockfile
RUN turbo run build --filter=docs
EXPOSE 3000
CMD ["pnpm", "run", "build"]

# Production
FROM base AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing

COPY --from=build --chown=nextjs:nodejs /app/apps/docs/ /app/apps/docs/
# COPY --from=build --chown=nextjs:nodejs /app/apps/docs/.next/standalone ./
# COPY --from=build --chown=nextjs:nodejs /app/apps/docs/.next/static ./apps/docs/.next/static
# COPY --from=build --chown=nextjs:nodejs /app/apps/docs/public ./apps/docs/public

EXPOSE 3000
CMD ["pnpm", "run", "start"]



