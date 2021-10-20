import { Context } from '../context'
import { PolicyModel } from '../models/policy.model'

export const productResolvers = {

  Policy: {
    __resolveReference: async ({ id }, context: Context) => await PolicyModel.findPolicyById(id, context),
    quotes (policy) {
      return { __typename: 'Quote', id: policy.quoteId }
    },
  },
  Query: {
    policy: async (parent, { id }, context: Context) => await PolicyModel.findPolicyById(id, context),
  },
} as any
