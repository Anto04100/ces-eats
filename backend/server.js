require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors());

// Route de test
app.get("/", (req, res) => {
    res.json({ message: "Bienvenue sur l'API Express !" });
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`🚀 Serveur Express en ligne sur http://localhost:${PORT}`);
});
