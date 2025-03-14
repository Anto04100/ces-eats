const express = require('express');
const app = express();
const PORT = 3000;

// Définir le répertoire de travail comme "app"
const BASE_DIR = __dirname;

// Servir les fichiers statiques (HTML, CSS, JS)
app.use(express.static(BASE_DIR));

// Route principale pour charger `index.html`
app.get('/', (req, res) => {
  res.sendFile(path.join(BASE_DIR, 'index.html'));
});
// Middleware pour parser les requêtes JSON
app.use(express.json());

// Base de données simulée (tableau en mémoire)
let plats = [
  { id: 1, nom: "Pizza Margherita", prix: 12 },
  { id: 2, nom: "Burger", prix: 10 },
  { id: 3, nom: "Sushi", prix: 15 }
];

// 🎯 1. Route pour récupérer tous les plats
app.get('/plats', (req, res) => {
  res.json(plats);
});

// 🎯 2. Route pour récupérer un plat spécifique par ID
app.get('/plats/:id', (req, res) => {
  const plat = plats.find(p => p.id === parseInt(req.params.id));
  if (!plat) return res.status(404).json({ message: "Plat non trouvé" });
  res.json(plat);
});

// 🎯 3. Route pour ajouter un plat (POST)
app.post('/plats', (req, res) => {
  const nouveauPlat = {
    id: plats.length + 1,
    nom: req.body.nom,
    prix: req.body.prix
  };
  plats.push(nouveauPlat);
  res.status(201).json(nouveauPlat);
});

// 🎯 4. Route pour modifier un plat (PUT)
app.put('/plats/:id', (req, res) => {
  const plat = plats.find(p => p.id === parseInt(req.params.id));
  if (!plat) return res.status(404).json({ message: "Plat non trouvé" });

  plat.nom = req.body.nom;
  plat.prix = req.body.prix;
  res.json(plat);
});

// 🎯 5. Route pour supprimer un plat (DELETE)
app.delete('/plats/:id', (req, res) => {
  plats = plats.filter(p => p.id !== parseInt(req.params.id));
  res.json({ message: "Plat supprimé" });
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`API REST lancée sur http://localhost:${PORT}`);
});
