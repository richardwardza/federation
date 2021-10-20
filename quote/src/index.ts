import { ApolloServer } from 'apollo-server'
import { buildFederatedSchema } from '@apollo/federation'
import { quoteResolvers as resolvers } from './resolvers/quote.resolvers'
import { quoteTypeDefs as typeDefs } from './typedefs/quote.typedefs'
import { context } from './context'

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
  context,
})

const port = 4010
server
  .listen({ port })
  .then(({ url }) => {
    console.log(`Quotes service is ready at ${url}`)
  })
