import { Context } from '../context'

export const QuoteModel = {
  findQuotes: async (where, context: Context) =>
    await context.prisma.quote.findMany({
      where,
    }),
  findQuoteById: async (id: number, context: Context) =>
    await context.prisma.quote.findUnique({
      where: { id },
    }),

  createAsset: async (asset: any, context: Context) => {
    const newAsset = await context.prisma.asset.create({
      data: {
        ...asset,
      },
    })
    return newAsset
  },
  createQuote: async (quote: any, context: Context) => {
    const newAsset = await context.prisma.quote.create({
      data: {
        name: quote.name
      },
    })
    return newAsset
  },

}
