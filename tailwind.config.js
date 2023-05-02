/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce']
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

