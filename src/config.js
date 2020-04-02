export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "YOUR_S3_UPLOADS_BUCKET_REGION",
      BUCKET: "YOUR_S3_UPLOADS_BUCKET_NAME"
    },
    apiGateway: {
      REGION: "YOUR_API_GATEWAY_REGION",
      URL: "YOUR_API_GATEWAY_URL"
    },
    cognito: {
      REGION: "ap-northeast-2",
      USER_POOL_ID: "ap-northeast-2_oyUxBADP0",
      APP_CLIENT_ID: "3qmuv94gs54bo90uq2beock4af",
      IDENTITY_POOL_ID: "ap-northeast-2:ca8c27c9-f584-4158-9712-c81ed5449408"
    }
  };