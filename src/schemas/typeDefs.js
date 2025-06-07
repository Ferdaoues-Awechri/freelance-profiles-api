const { gql } = require('apollo-server-express');

module.exports = gql`
  type Link {
    type: String!
    url: String!
  }

  type Skill {
    name: String!
    level: String
  }

  type User {
    id: ID!
    name: String!
    email: String!
    bio: String
    skills: [Skill]
    links: [Link]
  }

  input SkillInput {
    name: String!
    level: String
  }

  input LinkInput {
    type: String!
    url: String!
  }

  type Query {
    getUser(id: ID!): User
    listUsers: [User!]
    searchUsersBySkill(skillName: String!): [User!]
    getUserByName(name: String!): User
  }
    
   type Mutation {
    createUser(name: String!, email: String!, bio: String, skills: [SkillInput], links: [LinkInput]): User!
    updateUser(id: ID!, name: String, email: String, bio: String): User!
    deleteUser(id: ID!): Boolean!
    addSkill(userId: ID!, skill: SkillInput!): User!
    deleteSkill(userId: ID!, skillName: String!): User!
    addLink(userId: ID!, link: LinkInput!): User!
    deleteLink(userId: ID!, url: String!): User!
  }`;