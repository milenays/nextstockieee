// next.config.mjs
export default {
    reactStrictMode: true,
    env: {
      MONGODB_URI: process.env.MONGODB_URI,
    },
  };
  