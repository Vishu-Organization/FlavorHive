import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0f346c",
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
