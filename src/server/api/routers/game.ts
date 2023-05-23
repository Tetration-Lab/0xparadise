import { z } from 'zod'

import { createTRPCRouter, publicProcedure, protectedProcedure } from '~/server/api/trpc'

export const gameRouter = createTRPCRouter({
  get: publicProcedure.input(z.object({ gameId: z.string() })).query(async ({ ctx, input }) => {
    const resp = await ctx.prisma.round.findFirst({
      where: {
        id: input.gameId,
      },
    })
    return {
      gameData: resp,
    }
  }),
})
