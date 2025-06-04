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
  }`