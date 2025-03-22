# Build stage
FROM node:18-alpine AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers nécessaires pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers pour le build
COPY . .

# Construire l'application
RUN npm run build

# Runtime stage
FROM nginx:alpine

# Copier le build dans le répertoire Nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Commande par défaut pour démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
