// @ts-nocheck
import { ApolloServer } from 'apollo-server-express'
import { ApolloGateway, RemoteGraphQLDataSource } from '@apollo/gateway'
import express from 'express'
import expressJwt from 'express-jwt'
import waitOn from 'wait-on'

const quoteServiceUrl = 'http://localhost:4010'
const policyServiceUrl = 'http://localhost:4011'
const app = express()

app.use(
  expressJwt({
    secret: 'f1BtnWgD3VKY',
    algorithms: ['HS256'],
    credentialsRequired: false,
  }),
)

const startServer = async () => {
  const gateway = new ApolloGateway({
    serviceList: [
      {
        name: 'quote',
        url: quoteServiceUrl,
      },
      {
        name: 'policy',
        url: policyServiceUrl,
      },
    ],
    buildService ({ name, url }) {
      // Middleware for authentication
      return new RemoteGraphQLDataSource({
        url,
        willSendRequest ({ request, context }) {
          request.http.headers.set(
            'user',
            context.user ? JSON.stringify(context.user) : JSON.stringify({ sub: 12345 }),
          )
        },
      })
    },
  })

  const server = new ApolloServer({
    gateway,
    subscriptions: false,
    context: ({ req }) => {
      const user = req.user || null
      return { user }
    },
  })
  await server.start()
  server.applyMiddleware({ app })
  app.listen({ port: 4020 }, () => {
    console.log('Gateway is ready at http://localhost:4020')
  })
}

const options = {
  resources: [
    `${quoteServiceUrl}/.well-known/apollo/server-health`,
    `${policyServiceUrl}/.well-known/apollo/server-health`,
  ],
}

waitOn(options)
  .then(() => {
    startServer()
  })
  .catch(e => {
    console.log('Could not start server yet.', e)
  })
