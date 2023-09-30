/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "plp-primary": "#090B1A",
        "plp-secondary": "#DDEbE8"
      }
    },
    container: {
      padding: "2rem",
      center: true
    },
    screens: {  //breakpoints
      sm: "380px", //280?
      md: "768px"
    }
  },
  plugins: [],
}

