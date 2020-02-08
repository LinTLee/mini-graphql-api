'use strict'
const Animal = require('./animal.model')

const resolvers = {
  Query: {
    animal: (obj, args, context, info) => {
      const year = (args.input != null && args.input.year != null) ? args.input.year : null
      const name = (args.input != null && args.input.name != null) ? args.input.name : null
      return Animal.get({ year: year, name: name })
    }
  }
}

module.exports = resolvers
