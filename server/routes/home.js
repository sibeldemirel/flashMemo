// routes/userRoutes.js
const express = require('express');
const router = express.Router();

// Route de test pour les utilisateurs
router.get('/', (req, res) => {
  res.json({ message: 'Bienvenue sur l\'accueil !' });
});

// Autres routes pour l'inscription, la connexion, etc. peuvent être ajoutées ici.

module.exports = router;
