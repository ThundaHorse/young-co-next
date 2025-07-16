# Use official Node.js LTS image as the base
FROM node:24.3-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies based on the preferred lockfile, if present
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./

# If you use pnpm
RUN if [ -f pnpm-lock.yaml ]; then \
  npm install -g pnpm && pnpm install --frozen-lockfile; \
  elif [ -f yarn.lock ]; then \
  yarn install --frozen-lockfile; \
  elif [ -f package-lock.json ]; then \
  npm ci; \
  else \
  npm install; \
  fi

# Copy the rest of the app source code
COPY . .

# Build the Next.js app
RUN npm run build

# ---- Release image ----
FROM node:24.3-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy built files and only production dependencies
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json* ./
COPY --from=builder /app/pnpm-lock.yaml* ./
COPY --from=builder /app/yarn.lock* ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js* ./
COPY --from=builder /app/.env* ./

# Install only production dependencies
RUN \
  if [ -f pnpm-lock.yaml ]; then \
  npm install -g pnpm && pnpm install --prod --frozen-lockfile; \
  elif [ -f yarn.lock ]; then \
  yarn install --production --frozen-lockfile; \
  elif [ -f package-lock.json ]; then \
  npm ci --only=production; \
  else \
  npm install --production; \
  fi

EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]