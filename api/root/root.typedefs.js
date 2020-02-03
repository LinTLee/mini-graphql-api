'use strict'
const { gql } = require('apollo-server-express')

const root = gql`

  """
  A root of query type schema
  """
  type Query {
    """
    Returns a print of "Hello World"
    """
    root: String
  }

  """
  A root of mutation type schema
  """
  type Mutation {
    """
    Returns a print of "whoami" argument with "hello world"
    """
    root (whoami: String!): String
  }
`

module.exports = root
