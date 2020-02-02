'use strict'
const { gql } = require('apollo-server-express')

const root = gql`

  type Query {
    root: String
  }

  type Mutation {
    root (whoami: String!): String
  }
`

module.exports = root
