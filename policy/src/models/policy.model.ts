import { Context } from '../context'

export const PolicyModel = {
  findPolicyByQuoteId: async (id, context: Context) => {
    return await context.prisma.policy.findFirst({
      where: { quoteId: id },
    })
  },
  findPolicyById: async (id, context: Context) => {
    return await context.prisma.policy.findUnique({
      where: { id },
    })
  },
  createPolicy: async (policy, context: Context) => {
    const created = await context.prisma.policy.create({
      data: {
        name: policy.name,
        quoteId: policy.quoteId
      }
    });

    return created;
  }

}
