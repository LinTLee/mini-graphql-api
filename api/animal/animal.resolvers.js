'use strict'

const resolvers = {
  Query: {
    animals: () => {
      return [{
        name: 'test'
      }]
    }
  }
}

module.exports = resolvers
