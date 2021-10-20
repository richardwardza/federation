import { gql } from 'apollo-server'

export const productTypeDefs = gql`
  scalar Date

  enum PolicyStatus {
    PENDING
    ACTIVE
    INVALID
    ACCEPTED
    REJECTED
  }

# check https://www.velotio.com/engineering-blog/implementing-federated-graphql-microservices-using-apollo-federation
# by "The following code goes as a part of the tweet service:"


  extend type Asset @key(fields: "id") {
    id: ID! @external
    policy: Policy
  }

  type Policy@key(fields: "id") {
    id:           String!
    createdAt:    Date!
    updatedAt:    Date!
    version:      Int!
    quoteId:      String!
    startDate:    Date!
    policyNumber: String!
    status:       PolicyStatus!
    isDeleted:    Boolean!
    transactions: [PolicyTransaction!]!
    details:      [PolicyDetails!]!
  }

type PolicyTransaction@key(fields: "id") {
  id:        String!
  createdAt: Date! 
  updatedAt: Date! 
  version:   Int! 
  policyId:  String!
  name:      String 
}

type PolicyDetails@key(fields: "id") {
  id:        Int! 
  createdAt: Date! 
  updatedAt: Date! 
  version:   Int! 
  policyId:  String! 
  name:      String 
  asset:     [Asset]
}


  extend type Query {
    policy(id: String): Policy
  }
`
