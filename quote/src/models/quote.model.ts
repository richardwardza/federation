import { Context } from '../context'

export const QuoteModel = {
  findQuotes: async (where, context: Context) =>
    await context.prisma.quote.findMany({
      where,
      include: {
        answers: true,
      },
    }),
  findQuoteById: async (id: string, context: Context) =>
    await context.prisma.quote.findUnique({
      where: { id },
      include: {
        answers: true,
      },
    }),

  createAsset: async (asset: any, context: Context) => {
    const newAsset = await context.prisma.asset.create({
      data: {
        ...asset,
      },
    })
    return newAsset
  },
}
