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
    Search animals. Returns an array of objects of Animal type.
    """
    animal (input: AnimalInput): [Animal]
  }

  """
  Search input for animals by specific year and name. Returns Animal type.
  """
  input AnimalInput {
    """
    Chinese calendar year associated with the animal
    """
    year: Int

    """
    Name of the animal
    """
    name: String
  }
`

module.exports = animal
