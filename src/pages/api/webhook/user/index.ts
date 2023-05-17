import { type NextApiRequest, type NextApiResponse } from 'next'
import { createTRPCContext } from '../../../../server/api/trpc'
import { appRouter } from '../../../../server/api/root'
import { type UserWebHookReq } from '~/server/types/userWebHookReq'
import { TRPCError } from '@trpc/server'
import { getHTTPStatusCodeFromError } from '@trpc/server/http'

enum WebhookTypeEventType {
  USER_CREATED = 'user.created',
}
const handleUserWebhook = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      // console.log(req.headers)
      const body = req.body as UserWebHookReq
      // console.log(JSON.stringify(body))
      // Create context and caller
      if (body.type !== WebhookTypeEventType.USER_CREATED) {
        break
      }
      const ctx = await createTRPCContext({ req, res })
      const caller = appRouter.createCaller(ctx)
      try {
        const wallets = body.data.web3_wallets.map((wallet) => {
          return wallet.web3_wallet
        })
        const payload = {
          clerkUserID: body.data.id,
          profileImageUrl: body.data.profile_image_url,
          wallets: wallets,
        }
        await caller.syncUser.create({
          user: payload,
        })
        res.status(200).json({ message: 'ok' })
        return
      } catch (cause) {
        if (cause instanceof TRPCError) {
          // An error from tRPC occured
          const httpCode = getHTTPStatusCodeFromError(cause)
          return res.status(httpCode).json(cause)
        }
        // Another error occured
        console.error(cause)
        res.status(500).json({ message: 'Internal server error' })
        return
      }
  }
  res.status(405).json({ message: 'Method not allow' })
}

export default handleUserWebhook
