import { type NextApiRequest, type NextApiResponse } from 'next'
import { createUploadthing, type FileRouter } from 'uploadthing/next-legacy'
const f = createUploadthing()
import { getAuth } from '@clerk/nextjs/server'

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f
    // Set permissions and file types for this FileRoute
    .fileTypes(['image'])
    .maxSize('32MB')
    .middleware((req) => {
      //   // This code runs on your server before upload
      const user = getAuth(req)
      //   // If you throw, the user will not be able to upload
      if (!user) throw new Error('Unauthorized')
      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      //   return { userId: user.id }
      return { userId: user.userId }
    })
    .onUploadComplete(({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log('Upload complete for userId:', metadata.userId)

      console.log('file url', file.url)
    }),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter
