import { z } from 'zod'

import { createTRPCRouter, publicProcedure, protectedProcedure } from '~/server/api/trpc'

export const botRouter = createTRPCRouter({
  list: publicProcedure.query(async ({ ctx }) => {
    const list = await ctx.prisma.bot.findMany()
    return {
      list: list,
    }
  }),
  create: protectedProcedure
    .input(z.object({ botImageUrl: z.string(), botName: z.string(), yourcode: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const userTarget = await ctx.prisma.syncUser.findFirst({
        where: {
          userID: ctx.auth.userId,
        },
      })
      // create bot
      const address = userTarget && userTarget?.wallets.length > 0 ? userTarget?.wallets[0] : ''
      return await ctx.prisma.bot.create({
        data: {
          profileImageUrl: input.botImageUrl,
          userID: ctx.auth.userId,
          name: input.botName,
          yourcode: input.yourcode,
          userAddress: address || '',
          gamePlayed: 0,
          roundIds: [],
        },
      })
    }),
  listSelfBot: protectedProcedure.query(async ({ ctx }) => {
    const list = await ctx.prisma.bot.findMany({
      where: {
        userID: ctx.auth.userId,
      },
    })
    return {
      list: list,
    }
  }),
})
