'use strict'
const Animal = require('./animal.model')

const resolvers = {
  Query: {
    animal: (obj, args, context, info) => {
      return Animal.get({ year: args.year, name: args.name })
    }
  }
}

module.exports = resolvers
