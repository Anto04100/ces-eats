const express = require('express');
const app = express();
const PORT = 3000;

// Servir des fichiers statiques (ex: HTML, CSS, JS)
app.use(express.static('public'));

// Route principale
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/app/index.html');
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
