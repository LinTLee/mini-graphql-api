'use strict'
const { gql } = require('apollo-server-express')

const animal = gql`

  type Animal {
    
    name: String!

  }

  extend type Query {
    animals: [Animal]
  }
`

module.exports = animal
