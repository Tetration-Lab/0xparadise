import { TRPCError } from '@trpc/server'
import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'

export const syncUserRouter = createTRPCRouter({
  //TODO: make it not public
  create: publicProcedure
    .input(
      z.object({
        user: z.object({
          clerkUserID: z.string(),
          profileImageUrl: z.string(),
          wallets: z.string().array(),
        }),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      try {
        // check if user already exists
        const userExists = await ctx.prisma.syncUser.findFirst({
          where: {
            userID: input.user.clerkUserID,
          },
        })
        if (userExists) {
          await ctx.prisma.syncUser.update({
            where: {
              id: userExists.id,
            },
            data: {
              profileImageUrl: input.user.profileImageUrl,
              wallets: input.user.wallets,
            },
          })
          return
        }
        await ctx.prisma.syncUser.create({
          data: {
            userID: input.user.clerkUserID,
            profileImageUrl: input.user.profileImageUrl,
            wallets: input.user.wallets,
          },
        })
        return
      } catch (e) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'An unexpected error occurred, please try again later.',
          // optional: pass the original error to retain stack trace
        })
      }
    }),
})
