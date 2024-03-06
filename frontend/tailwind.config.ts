import type { Config } from 'tailwindcss'

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'natori-accent-pink': "#ffa9bd",
        'natori-accent-pink-light':"#fff6f8"
      },
    },
  },
  plugins: [],
} satisfies Config
