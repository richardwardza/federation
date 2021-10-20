import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export interface Context {
  prisma: PrismaClient,
  user: (args: {req: any}) => any
}

export const context: Context = {
  prisma: prisma,
  user: ({ req }) => req.headers.user ? JSON.parse(req.headers.user) : null,
}
