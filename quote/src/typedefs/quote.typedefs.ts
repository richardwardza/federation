import { gql } from 'apollo-server'

export const quoteTypeDefs = gql`
  scalar Date

  enum AssetMediaType {
    IMAGE
  }

  # Extend the Policy type and add the Quote to it via the quoteId field
  extend type Policy @key(fields: "quoteId") {
    quoteId: Int! @external
    quote: Quote
  }

  type Quote @key(fields: "id") {
    id: Int!
    name: String
    asset: [Asset]
  }


  type Asset @key(fields: "id") {
    id:          ID!
    createdAt:   Date!
    updatedAt:   Date!
    version:     Int!
    userId:      String!
    quote:       Quote
    description: String!
    amount:      Float!
    assetType:   AssetType!
    assetMedia:  [AssetMedia]
  }

  type AssetType  @key(fields: "id") {
    id:          Int
    createdAt:   Date!
    updatedAt:   Date!
    version:     Int!
    title:       String
    description: String
    asset:       [Asset]
  }

  type AssetMedia  @key(fields: "id") {
    id:          Int!
    createdAt:   Date!
    updatedAt:   Date!
    version:     Int!
    type:        AssetMediaType!
    location:    String!
    contentType: String!
    filename:    String!
    key:         String!
    asset:       Asset
  }

  extend type Query {
    quote(id: Int!): Quote
    quotes: [Quote]
  }

  input CreateAssetInput {
    quoteId:     Int
    policyId:    Int
    description: String!
    amount:      Float!
  }

  input CreateQuoteInput {
    name:      String!
  }

  extend type Mutation {
    createQuote(input: CreateQuoteInput): Quote
    createAsset(input: CreateAssetInput): Asset
  }
`
