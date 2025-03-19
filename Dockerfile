# Utilisation de l'image officielle Node.js
FROM node:18

# Définition du répertoire de travail
WORKDIR /app

# Copie des fichiers package.json et package-lock.json
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie des fichiers du projet
COPY backend ./backend

# Exposition du port (modifie selon ton application)
EXPOSE 3000

# Définir le répertoire de travail du backend
WORKDIR /app/backend

# Commande de lancement
CMD ["node", "index.js"]
