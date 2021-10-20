import { gql } from 'apollo-server'

export const quoteTypeDefs = gql`
  scalar Date

  enum QuoteType {
    CONTENTSFLEX
  }

  enum QuoteStatus {
    PENDING
    ACTIVE
    ACCEPTED
    INVALID
  }

  enum AssetMediaType {
    IMAGE
  }


  type Quote @key(fields: "id") {
    id: ID!
    type: QuoteType
    status: QuoteStatus
    validFrom: Date
    validUntil: Date
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
    id:          ID!
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
    quote(id: ID!): Quote
    quotes(type: QuoteType): [Quote]
  }

  input CreateAssetInput {
    quoteId:     String
    policyId:    String
    description: String!
    amount:      Float!
  }

  extend type Mutation {
    createAsset(input: CreateAssetInput): Asset
  }
`
