const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = process.env.NODE_ENV === 'test'
  ? require('./config/testDatabase')
  : require('./config/database');
const User = require('./models/User');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connecté à la base de données MongoDB'))
  .catch((err) => console.log('Erreur de connexion MongoDB:', err));

// PostgreSQL
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connecté à PostgreSQL avec Sequelize');

    // Synchro User
    await User.sync({ alter: true });
    console.log('Table User synchronisée avec la base de données PostgreSQL');

    // Ajout d'un utilisateur fictif pour tester la persistance
    const testUser = await User.findOne({ where: { email: 'testuser@example.com' } });
    if (!testUser) {
      await User.create({
        username: 'TestUser',
        email: 'testuser@example.com',
        password: 'TestPassword123', // Le hook hashera ce mot de passe
        role: 'user',
      });
      console.log('Utilisateur fictif créé avec succès');
    } else {
      console.log('Utilisateur fictif déjà existant');
    }
  } catch (err) {
    console.error('Erreur lors de la connexion ou synchronisation PostgreSQL:', err);
  }
})();

// Routes
app.get('/', (req, res) => {
  res.send('API FlashMemo');
});

// Exemple de route pour User (vous pouvez l'étendre ou l'adapter)
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
