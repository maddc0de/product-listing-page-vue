/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "plp-primary": "#090B1A",
        "plp-secondary": "#DDEBE8",
        "plp-grey": "#606569",
        "plp-link": "#3a7f71"
      }
    },
    screens: {  //breakpoints
      sm: "280px",
      md: "768px",
      lg: "912px"
    }
  },
  plugins: [],
}

