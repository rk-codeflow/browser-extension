/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        neutrall: {
          0: "hsl(200, 60%, 99%)",
          100: "hsl(0, 0%, 93%)",
          800: "hsl(226, 25%, 17%)",
          800: "hsl(227, 75%, 14%)",
        },
        redd: {
          400: "hsl(3, 86%, 64%)",
          500: "hsl(3, 71%, 56%)",
          700: "hsl(3, 77%, 44%)",
        },
      },
      backgroundImage: {
        light: "linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)",
        dark: "linear-gradient(180deg, #040918 0%, #091540 100%)",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
