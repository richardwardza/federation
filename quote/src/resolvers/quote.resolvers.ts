import { Context } from '../context'
import { QuoteModel } from '../models/quote.model'

export const quoteResolvers = {
  // Quote: {
  //   __resolveReference: async ({ id }, context: Context) => await QuoteModel.findQuoteById(id, context),
  //   product (quote) {
  //     return { __typename: 'Product', id: quote.productId }
  //   },
  // },
  // Answer: {
  //   question (answer) {
  //     return { __typename: 'Question', id: answer.questionId }
  //   },
  // },
  Query: {
    // Quote
    quote: async (parent, { id }, context: Context) => await QuoteModel.findQuoteById(id, context),
    quotes: async (parent, where, context: Context) => await QuoteModel.findQuotes(where, context),
  },
  Mutation: {
    createAsset: async (parent, { input }, context: Context) => await QuoteModel.createAsset(input, context),
  },
} as any
