const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Variables d'environnement
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connexion bdd MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connecté à la base de données MongoDB'))
  .catch((err) => console.log('Erreur de connexion MongoDB:', err));


app.get('/', (req, res) => {
  res.send('API FlashMemo');
});

// Routes pour User, Deck, Flashcard...


// Démarrer le serveur sur le port défini dans .env ou sur 5000 par défaut
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});

app.use('/api/home', require('./routes/home'));
