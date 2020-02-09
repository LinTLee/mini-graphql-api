'use strict'
const { gql } = require('apollo-server-express')

const range = gql`
  """
  Enforce range input
  """
  directive @range(min: Int, max: Int) on FIELD_DEFINITION | INPUT_FIELD_DEFINITION
`

module.exports = range
