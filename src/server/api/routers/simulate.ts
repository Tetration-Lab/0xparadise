import { z } from 'zod'
import _ from 'lodash'

import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'
import { instantiateEVM } from '~/simulator/evm'
import { getBotFromCode, sourceCodeToBytesCode } from '~/simulator/getBotFromChain'
import { Islander } from '~/simulator/islander'
import { Simulator } from '~/simulator/simulator'

import JsonBIG from 'json-bigint'

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
        const bot = await getBotFromCode(vm, islander)
        islanders.push(bot)
      }

      const simulation = new Simulator(islanders, BigInt(Math.random() * 100_000_000))
      const [days, scores] = await simulation.stepUntilEnd()

      const round = await ctx.prisma.round.create({
        data: {
          days: JsonBIG.stringify(days),
          islanderIds: indexes.map((i) => bots[i]!.id),
        },
      })

      for (let i = 0; i < indexes.length; i++) {
        ctx.prisma.bot.update({
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
    } catch {}
  }),

  //getAll: publicProcedure.query(({ ctx }) => {
  //return ctx.prisma.example.findMany()
  //}),

  //getSecretMessage: protectedProcedure.query(() => {
  //return 'you can now see this secret message!'
  //}),
})
