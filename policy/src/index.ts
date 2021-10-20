import { ApolloServer } from 'apollo-server'
import { buildFederatedSchema } from '@apollo/federation'
import { productResolvers as resolvers } from './resolvers/policy.resolvers'
import { productTypeDefs as typeDefs } from './typedefs/policy.typedefs'
import { context } from './context'

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
  context,
})

const port = 4011
server
  .listen({ port })
  .then(({ url }) => {
    console.log(`Policy service is ready at ${url}`)
  })
