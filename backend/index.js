require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());  // Exercice 2 : Autoriser JSON

// Route de test
app.get("/", (req, res) => {
    res.send("Bienvenue sur l'API de gestion des tâches !");
});

// Lancer le serveur
app.listen(PORT, () => {
    console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ Connexion à MongoDB (Docker) réussie"))
.catch(err => console.error("❌ Erreur de connexion :", err));

const taskRoutes = require('./routes/taskRoutes');
app.use('/tasks', taskRoutes);

