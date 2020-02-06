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
    Chinese name of animal
    """
    chinese: String

    """
    Zodiac years associated with the animal
    """
    years: [Int!]

    """
    Characteristic
    """
    charateristic: String

    """
    Folklore
    """
    folklore: String
  }

  extend type Query {
    """
    Search an animal by specific year and name. Returns Animal type.
    """
    animal (year: Int, name: String): [Animal]
  }
`

module.exports = animal
