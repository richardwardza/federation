import { gql } from 'apollo-server'

export const productTypeDefs = gql`
  scalar Date


# check https://www.velotio.com/engineering-blog/implementing-federated-graphql-microservices-using-apollo-federation
# by "The following code goes as a part of the tweet service:"


  type Policy @key(fields: "id") @key(fields: "quoteId") {
    id:           Int!
    createdAt:    Date!
    updatedAt:    Date!
    version:      Int!
    name:         String!
    quoteId:      Int!
  }

  extend type Query {
    policy(id: Int!): Policy
  }

  input CreatePolicyInput {
    name: String!
    quoteId: Int
  }
  extend type Mutation {
    createPolicy(input: CreatePolicyInput): Policy
  }

`
