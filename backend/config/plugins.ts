export default ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        baseUrl: env('R2_PUBLIC_URL'),
        rootPath: 'fylo-files',
        s3Options: {
          credentials: {
            accessKeyId: env('R2_ACCESS_KEY_ID'),
            secretAccessKey: env('R2_SECRET_ACCESS_KEY'),
          },
          endpoint: env('R2_ENDPOINT'),
          region: env('R2_REGION'),
          forcePathStyle: true,
          params: {
            ACL: env('R2_ACL', 'public-read'),
            Bucket: env('R2_BUCKET_NAME'),
            signedUrlExpires: env('R2_SIGNED_URL_EXPIRES', 15 * 60)
          }
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      }
    }
  }
})
