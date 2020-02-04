'use strict'
const Animal = require('./animal.model')

const resolvers = {
  Query: {
    animal: (obj, { year, name }, context, info) => {
      return Animal.get({ year: year, name: name })
    }
  }
}

module.exports = resolvers
