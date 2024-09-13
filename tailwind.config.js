import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        "our-vision": ["Chronicle Deck", "Times", "serif"],
        "our-vision-1": [
          "Cera Pro",
          "HelveticaNeue",
          "Helvetica Neue",
          "HelveticaNeueRoman",
          "HelveticaNeue-Roman",
          "Helvetica Neue Roman",
          "TeXGyreHerosRegular",
          "Helvetica",
          "Tahoma",
          "Geneva",
          "Arial",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "our-vision":
          "url('https://media.blueapron.com/assets/mission/v2/betterstandards_1.5.png?format=jpg&quality=75')",
      },
      colors: {
        primary: {
          DEFAULT: "#0f346c",
          black: "#404040",
        },
        footer: {
          primary: "#a1bce6",
          hover: "#b7c1d1",
        },
      },
    },
  },
  plugins: [],
};
