'use strict'

const resolvers = {
  Query: {
    root: () => {
      return 'Hello world!'
    }
  },
  Mutation: {
    root: (whoami) => {
      return `hello, ${whoami}!`
    } 
  }
}

module.exports = resolvers
