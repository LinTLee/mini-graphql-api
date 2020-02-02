'use strict'
const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const Api = require('./api')
const port = 3000

// defines up a GraphQL schema
Api.getSchema().then((schema) => {
  // create an apollo server
  const server = new ApolloServer({ 
    typeDefs: schema.typeDefs, 
    resolvers: schema.resolvers 
  })
 
  // create an express server
  const app = express()
  // attach apollo server to express
  server.applyMiddleware({ app })
  
  // start up a server
  app.listen({ port: port }, () =>
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
  )
})
