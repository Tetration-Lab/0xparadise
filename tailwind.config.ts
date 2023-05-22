import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-button': '#E1DACE',
        'hover-button': '#F0C142',
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config
