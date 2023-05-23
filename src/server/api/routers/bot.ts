import { z } from 'zod'

import { createTRPCRouter, publicProcedure, protectedProcedure } from '~/server/api/trpc'

export const botRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ botImageUrl: z.string(), botName: z.string() }))
    .mutation(async ({ ctx, input }) => {
      // create bot
      return await ctx.prisma.bot.create({
        data: {
          profileImageUrl: input.botImageUrl,
          userID: ctx.auth.userId,
          name: input.botName,
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
