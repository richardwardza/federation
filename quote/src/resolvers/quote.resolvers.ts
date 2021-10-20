import { Context } from '../context'
import { QuoteModel } from '../models/quote.model'

export const quoteResolvers = {
  Quote: {
    __resolveReference: async (ref, context: Context) => {
      console.log("resolving Refeerence: ", ref.id, context);
      return await QuoteModel.findQuoteById(ref.id, context)
    },
  },
  Policy: {
     quote: async (quote, abc, context) => {
      console.log("Getting associated Quote Info: ", quote.quoteId)
      return await QuoteModel.findQuoteById(quote.quoteId, context)
    }
  },

  Query: {
    quote: async (parent, { id }, context: Context) => {
      console.log("Getting quote info: ", id);
      return await QuoteModel.findQuoteById(id, context)
    },
    quotes: async (parent, { }, context: Context) => await QuoteModel.findQuotes({}, context),
  },
  Mutation: {
    createQuote: async (parent, { input }, context: Context) => await QuoteModel.createQuote(input, context),
    createAsset: async (parent, { input }, context: Context) => await QuoteModel.createAsset(input, context),
  },
} as any
