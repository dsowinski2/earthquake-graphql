FROM node:20-alpine as builder

WORKDIR /app
COPY ./backend/ ./
RUN npm install -g pnpm
RUN pnpm install
RUN npm run build

FROM node:20-alpine

WORKDIR /app
RUN apk update && apk add bash
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/tsconfig.json ./
COPY --from=builder /app/tsconfig.build.json ./
COPY --from=builder /app/dist ./dist/