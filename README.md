Voici un exemple de fichier `README.md` pour votre application **FlashMemo**. Ce fichier fournit une description de l'application, les étapes d'installation, de démarrage et d'arrêt, et des informations pour les développeurs.

---

# FlashMemo

**FlashMemo** est une application de flashcards interactive qui aide les utilisateurs à mémoriser et réviser des informations grâce aux techniques de répétition espacée. Conçue comme une Progressive Web App (PWA), FlashMemo est accessible sur tous les appareils, en ligne et hors ligne. Les utilisateurs peuvent créer des dossiers, y ajouter des jeux de cartes et suivre leur progression via des statistiques et rapports détaillés.

## Fonctionnalités

- **Création de dossiers et de jeux de flashcards** pour organiser les sujets d’étude.
- **Mode révision** : Répondez aux cartes pour renforcer votre apprentissage.
- **Mode examen** : Testez vos connaissances sur des sujets spécifiques.
- **Suivi de la progression** : Obtenez des statistiques et rapports de progression.
- **Gestion de profil utilisateur** avec inscription, connexion et récupération de mot de passe.

---

## Prérequis

Pour exécuter FlashMemo en local, assurez-vous d’avoir installé :

- **Docker** et **Docker Compose**
- **Node.js** (pour le développement)

---

## Installation et Configuration

1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/ton-utilisateur/flashmemo.git
   cd flashmemo
   ```

2. **Configurer les fichiers `.env`** :
   - Créez les fichiers `.env` dans les dossiers `/client` et `/server`.
   - Renseignez les variables comme indiqué dans les sections correspondantes du fichier `.env.example` ou en suivant les instructions ci-dessous :

   Exemple de configuration `.env` :

   Pour le backend (`server/.env`) :
   ```plaintext
   JWT_SECRET=e1f77b6fb8b818b87eb92eead40a6be9e49b3e33abc20db5ce884f46770e75dc
   MONGO_URI=mongodb://mongo:27017/flashmemo
   PG_CONNECTION_STRING=postgres://user:password@pg_db:5432/flashmemo
   PORT=5000
   ```

   Pour le frontend (`client/.env`) :
   ```plaintext
   REACT_APP_API_URL=http://localhost:5000
   ```

3. **Construire et lancer les services Docker** :
   - À la racine du projet, exécutez :
     ```bash
     docker-compose up --build
     ```

4. **Accéder à l'application** :
   - **Frontend** : Rendez-vous sur [http://localhost:3000](http://localhost:3000) pour accéder à l’interface utilisateur.
   - **Backend API** : Disponible à [http://localhost:5000](http://localhost:5000) pour les requêtes API.
   - **MongoDB** : À [mongodb://localhost:27017/](mongodb://localhost:27017/).
   - **PostgreSQL** : À [localhost:5432](localhost:5432) avec les identifiants spécifiés dans le fichier `.env`.

---

## Démarrer et Arrêter l'application

### Démarrer l'application

Pour démarrer l'application, exécutez simplement :

```bash
docker-compose up
```

Cela lancera les services frontend, backend, MongoDB et PostgreSQL. L'application sera accessible localement sur les ports définis ci-dessus.

### Arrêter l'application

Pour arrêter tous les services, utilisez :

```bash
docker-compose down
```

Cela arrêtera et supprimera les conteneurs Docker sans affecter les données dans MongoDB et PostgreSQL. Pour supprimer également les volumes de données, exécutez :

```bash
docker-compose down -v
```

---

## Tests et Développement

1. **Tests Backend** : Utilisez `jest` pour exécuter les tests du backend.
   ```bash
   cd server
   npm test
   ```

2. **Tests Frontend** : Utilisez `jest` ou `react-testing-library` pour exécuter les tests du frontend.
   ```bash
   cd client
   npm test
   ```

3. **Intégration Continue (CI)** : Une CI Git est configurée pour exécuter automatiquement les tests de chaque nouvelle modification. Veillez à ce que tous les tests passent avant de pousser du code sur le dépôt distant.

---

## Contribution

Les contributions à FlashMemo sont les bienvenues ! Veuillez consulter les [issues](https://github.com/ton-utilisateur/flashmemo/issues) pour voir les tâches en cours et soumettre des pull requests pour vos modifications.

---

## Licence

Ce projet est sous licence MIT.