'use strict'
const { gql } = require('apollo-server-express')

const animal = gql`
  """
  Chinese Zodiac Animal
  """
  type Animal {
    """
    Name of animal
    """
    name: String!

    """
    Zodiac years associated with the animal
    """
    years: [Int!]

  }

  extend type Query {
    """
    Search animal by specific year. Returns Animal type.
    """
    animal (year: Int): [Animal]
  }
`

module.exports = animal
