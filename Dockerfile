# Utilise une image Node optimisée
FROM node:20-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /src

# Installe pnpm globalement
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copie les fichiers de projet
COPY . .

# Installe les dépendances
RUN pnpm install

# Build de l'application
RUN pnpm build

# Expose le port
EXPOSE 4050

# Commande de démarrage
CMD ["pnpm", "run", "dev"]
