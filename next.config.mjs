import dotenv from 'dotenv';

dotenv.config();

export default {
  reactStrictMode: true,
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
  },
};
