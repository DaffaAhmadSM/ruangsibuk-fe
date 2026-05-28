FROM node:lts-slim AS base
WORKDIR /app
COPY package*.json ./

FROM base AS prod-deps
RUN mkdir -p /app/node_modules && npm ci --omit=dev --ignore-scripts

FROM base AS builder
COPY . .
RUN npm ci
RUN npm run build

FROM node:lts-slim AS runner
WORKDIR /app

COPY --from=prod-deps /app/node_modules ./node_modules

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./

EXPOSE 3000

CMD ["node", "dist/index.js"]
