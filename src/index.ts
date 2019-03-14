import { GraphQLServer } from 'graphql-yoga'
import { prisma } from './generated/prisma-client'

require('dotenv').config()


import { isLoggedIn } from './middleware/is-auth'

import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import Campaign from './resolvers/Campaign'
import Dislike from './resolvers/Dislike'
import Like from './resolvers/Like'
import Spark from './resolvers/Spark'
import User from './resolvers/User'

const port = parseInt(process.env.PORT, 10) || 8000
// const dev = process.env.NODE_ENV !== 'production'

const graphqlEndpoint = '/graphql'

const permissions = {
  Query: isLoggedIn
}

const resolvers = {
  Query,
  Mutation,
  Campaign,
  Dislike,
  Like,
  Spark,
  User
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma
    }
  },
  middlewares: [permissions]
})

server.use((req, _res, next) => {
  if (req.path.startsWith(graphqlEndpoint)) return next()

})

server
  .start(
    {
      endpoint: graphqlEndpoint,
      playground: graphqlEndpoint,
      subscriptions: graphqlEndpoint,
      port
    },
    () => console.log(`Server is running on ${port}`)
  )
  .catch(err => console.log('ERROR:', err))
