<h1>🧑‍💼 Freelance Profiles API:</h1>
Une API GraphQL puissante pour la gestion des profils freelances, construite avec Express, Apollo Server et MongoDB.
Elle permet la création, la mise à jour, la suppression et la consultation de profils utilisateurs, incluant leurs compétences et liens professionnels.

<h2>📦 Stack technique:</h2>
Node.js (v20 LTS recommandé)

Express – Framework web

Apollo Server Express – Intégration GraphQL avec Express

MongoDB – Base de données NoSQL

Mongoose – ODM pour MongoDB

GraphQL – Langage de requêtes pour les API

dotenv – Gestion des variables d’environnement

nodemon (dev) – Redémarrage automatique du serveur en développement

<h2>🚀 Installation & Lancement:</h2>

1. Cloner le dépôt
git clone https://github.com/Ferdaoues-Awechri/freelance-profiles-api.git
cd freelance-profiles-api

2. Installer les dépendances
npm install express apollo-server-express graphql mongoose dotenv
npm install --save-dev nodemon

3. Configurer l’environnement
Créer un fichier .env à la racine du projet avec le contenu suivant :

MONGO_URI=mongodb://localhost:27017/freelance
PORT=4000

4. Lancer l’application
nodemon server.js

➡ Accéder à GraphQL Playground :
http://localhost:4000/graphql

<h2>📌 Exemples de Requêtes GraphQL:</h2>

✅ Créer un utilisateur:
mutation {
  createUser(name: "Jane Doe", email: "jane@example.com", bio: "Développeuse full-stack") {
    id
    name
    email
  }
}

✅ Ajouter une compétence:
mutation {
  addSkillToUser(
    userId: "<user-id>",
    skill: { name: "JavaScript", level: "Expert" }
  ) {
    id
    skills {
      name
      level
    }
  }
}
