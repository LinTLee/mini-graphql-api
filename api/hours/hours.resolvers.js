'use strict'
const Hours = require('./hours.model')

const resolvers = {
  Animal: {
    hoursOfDay: (obj, args, context, info) => {
      const matches = Hours.get(obj.name)
      if (matches == null || matches.length === 0) {
        return null
      }

      const hours = matches[0]
      return {
        start: hours.start,
        end: hours.end,
        name: hours.name,
        chinese: hours.chinese,
        description: hours.description
      }
    }
  }
}

module.exports = resolvers
