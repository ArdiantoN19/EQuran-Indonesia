/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: colors.slate[800],
        secondary: colors.slate[600],
        light: colors.white,
      },
      fontFamily: {
        quicksand: "Quicksand",
      },
    },
  },
  plugins: [],
};
