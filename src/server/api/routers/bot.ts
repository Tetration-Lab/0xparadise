import { z } from 'zod'

import { createTRPCRouter, publicProcedure, protectedProcedure } from '~/server/api/trpc'

export const botRouter = createTRPCRouter({
  create: protectedProcedure.input(z.object({ botImageUrl: z.string() })).mutation(async ({ ctx, input }) => {
    // create bot
    return await ctx.prisma.bot.create({
      data: {
        profileImageUrl: input.botImageUrl,
        userID: ctx.auth.userId,
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
