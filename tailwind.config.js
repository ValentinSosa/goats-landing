/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/acceternity-ui/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        goatText: 'var(--goat-text)',
        rainbowBg: 'var(--goat-rainbow-bg)',
      },
    },
  },
  plugins: [],
}