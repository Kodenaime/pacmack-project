# ---- Build stage ----
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci --include=dev

COPY tsconfig.json ./
COPY src/ ./src/
RUN npm run build

# ---- Runtime stage ----
FROM node:22-alpine

WORKDIR /app

RUN addgroup --system app && adduser --system --ingroup app app

COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist

USER app

EXPOSE 5000

CMD ["node", "dist/src/server.js"]
