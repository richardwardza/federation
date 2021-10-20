import { Context } from '../context'

export const PolicyModel = {
  findPolicyById: async (id, context: Context) => {
    return await context.prisma.policy.findUnique({
      where: { id },
    })
  },
}
