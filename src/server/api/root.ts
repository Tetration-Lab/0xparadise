import { createTRPCRouter } from '~/server/api/trpc'
import { exampleRouter } from '~/server/api/routers/example'
import { syncUserRouter } from './routers/syncUser'
import { botRouter } from './routers/bot'
import { simulatorRouter } from './routers/simulate'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  syncUser: syncUserRouter,
  bot: botRouter,
  simulate: simulatorRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
