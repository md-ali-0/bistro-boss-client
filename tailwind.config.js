/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Cinzel': ['Cinzel', 'serif']
      },
      colors:{
        'primary': '#D1A054B2'
      }
    },
  },
  plugins: [require("daisyui")],
}