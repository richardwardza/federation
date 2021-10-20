import { Context } from '../context'
import { PolicyModel } from '../models/policy.model'

export const productResolvers = {
  Quote: {
    policy: async (quote, abc, context) => {
     console.log("Getting associated Policy Info: ", quote)
     return await PolicyModel.findPolicyByQuoteId(quote.id, context)
   }
 },
  Query: {
    policy: async (parent, { id }, context: Context) => {
      console.log("Query policy")
      return await PolicyModel.findPolicyById(id, context)
    }
  },
  Mutation: {
    createPolicy: async (parent, { input }, context: Context) => {

      console.log("Int he resolver:", input)
      const result = await PolicyModel.createPolicy(input, context)
      return result

    }
  },

} as any
