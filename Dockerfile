# Utilisation de l'image officielle Node.js
FROM node:18

# Définition du répertoire de travail
WORKDIR /app

# Copie des fichiers package.json et package-lock.json
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie des fichiers du projet
COPY . .

# Exposition du port (modifie selon ton application)
EXPOSE 3000

# Commande de lancement
CMD ["node", "index.js"]
