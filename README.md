Freelance Profiles API
📘 Overview
A GraphQL-based API for managing freelancer profiles, built with Express, Apollo Server, and MongoDB.
It supports creating, updating, deleting, and querying user profiles with associated skills and professional links.

🧰 Git & Installation
📥 Clone the Repository
bash
Copier
Modifier
git clone https://github.com/Ferdaoues-Awechri/freelance-profiles-api.git
cd freelance-profiles-api
📦 Install Dependencies
bash
Copier
Modifier
npm install express apollo-server-express graphql mongoose dotenv
npm install --save-dev nodemon
⚙️ Environment Configuration
Create a .env file in the root directory and add the following:

env
Copier
Modifier
MONGO_URI=mongodb://localhost:27017/freelance
PORT=4000
🚀 Run the Application
bash
Copier
Modifier
nodemon server.js
Access the GraphQL Playground at:
http://localhost:4000/graphql

📌 Example Queries
✅ Create a User
graphql
Copier
Modifier
mutation {
  createUser(name: "Jane Doe", email: "jane@example.com", bio: "Developer") {
    id
    name
    email
  }
}
✅ Add a Skill
graphql
Copier
Modifier
mutation {
  addSkillToUser(userId: "<user-id>", skill: { name: "JavaScript", level: "Expert" }) {
    id
    skills {
      name
      level
    }
  }
}
📦 Dependencies
apollo-server-express – GraphQL server integration with Express

express – Web framework

mongoose – MongoDB ODM

dotenv – Environment variable manager

graphql – GraphQL implementation

nodemon – Auto-restarts the server during development (dev dependency)

📝 Notes
Make sure MongoDB is running and accessible.

Recommended: Use Node.js v20 LTS to avoid deprecation warnings (e.g., punycode).

For production, consider adding:

Authentication

Centralized error handling

Input validation

