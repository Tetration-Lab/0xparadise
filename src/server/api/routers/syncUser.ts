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
          throw new TRPCError({
            code: 'BAD_REQUEST',
            message: 'User already exists',
          })
        }
        const user = await ctx.prisma.syncUser.create({
          data: {
            userID: input.user.clerkUserID,
            profileImageUrl: input.user.profileImageUrl,
            wallets: input.user.wallets,
          },
        })
        return user
      } catch (e) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'An unexpected error occurred, please try again later.',
          // optional: pass the original error to retain stack trace
        })
      }
    }),
})
