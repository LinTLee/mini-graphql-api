'use strict'

const resolvers = {
  Query: {
    animal: (year) => {
      return [{
        name: 'test'
      }]
    }
  }
}

module.exports = resolvers
