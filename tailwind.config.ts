import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@shadcn/ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config;
