FROM node:20-alpine

WORKDIR /src

RUN corepack enable && corepack prepare pnpm@8.6.6 --activate

# Tu ne copies rien ici (car monté dans docker-compose)
