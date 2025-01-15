/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgImage: "url('/DeWatermark.ai_1736923516374.png')",
      },
    },
  },
  plugins: [],
}