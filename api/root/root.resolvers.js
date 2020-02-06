'use strict'
const { GraphQLDate, GraphQLDateTime, GraphQLTime } = require('graphql-iso-date')

const resolvers = {

  Date: GraphQLDate,
  Time: GraphQLTime,
  DateTime: GraphQLDateTime,

  Query: {
    root: () => {
      return 'Hello world!'
    }
  },
  Mutation: {
    root: (obj, args, context, info) => {
      return `hello, ${args.whoami}!`
    } 
  }
}

module.exports = resolvers
