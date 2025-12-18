const express = require('express');
const app = express();

// Import du contrôleur
const userController = require('./controllers/userController');

// Route simple pour tester le backend
app.get('/api/status', userController.status);

// Lancement du serveur
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Serveur backend lancé sur le port ${PORT}`);
});
