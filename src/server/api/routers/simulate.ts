/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { z } from 'zod'
import _ from 'lodash'

import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'
import { instantiateEVM } from '~/simulator/evm'
import { getBotFromCode, sourceCodeToBytesCode } from '~/simulator/getBotFromChain'
import { type Islander } from '~/simulator/islander'
import { Simulator } from '~/simulator/simulator'

import JsonBIG from 'json-bigint'
import { TRPCError } from '@trpc/server'

const PLAYERS = 8

export const simulatorRouter = createTRPCRouter({
  simulate: publicProcedure.mutation(async ({ ctx }) => {
    try {
      const bots = await ctx.prisma.bot.findMany()
      if (bots.length < PLAYERS) return
      const indexes = _.shuffle([...Array(bots.length).keys()]).slice(0, PLAYERS)

      const vm = await instantiateEVM()
      const islanders: Islander[] = []
      for (const i of indexes) {
        const islander = sourceCodeToBytesCode(bots[i]!.yourcode)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        const bot = await getBotFromCode(vm, islander!)
        islanders.push(bot)
      }

      const simulation = new Simulator(islanders, BigInt(Math.floor(Math.random() * 100_000_000)))
      const [days, scores] = await simulation.stepUntilEnd()

      const round = await ctx.prisma.round.create({
        data: {
          days: JsonBIG.stringify(days),
          islanderIds: indexes.map((i) => bots[i]!.id),
        },
      })

      for (let i = 0; i < indexes.length; i++) {
        await ctx.prisma.bot.update({
          where: { id: bots[indexes[i]!]!.id },
          data: {
            gamePlayed: {
              increment: 1,
            },
            totalPoint: scores[i],
            roundIds: {
              push: round.id,
            },
          },
        })
      }
    } catch (e) {
      console.log(e)
      throw e
    }
  }),

  check: publicProcedure.input(z.string()).mutation(({ input }) => {
    try {
      if (!sourceCodeToBytesCode(input)) throw new Error()
    } catch {
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Unable to compile source code',
      })
    }
  }),

  //getAll: publicProcedure.query(({ ctx }) => {
  //return ctx.prisma.example.findMany()
  //}),

  //getSecretMessage: protectedProcedure.query(() => {
  //return 'you can now see this secret message!'
  //}),
})
