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
      },
      backgroundImage: {
        "our-vision":
          "url('https://media.blueapron.com/assets/mission/v2/betterstandards_1.5.png?format=jpg&quality=75')",
        "sign-up":
          "url('https://media.blueapron.com/assets/signup/landing/background-landing-signup.jpg?quality=80&width=1440')",
      },
      colors: {
        blue10: "var(--blue10)",
        blue20: "var(--blue20)",
        blue50: "var(--blue50)",
        gray10: "var(--gray10)",
        gray20: "var(--gray20)",

        primary: {
          DEFAULT: "var(--default)",
          black: "var(--black)",
          "toggle-text": "var(--toggle-text)",
          info: "var(--info)",
          hover: "var(--blue20)",
        },
        footer: {
          primary: "#a1bce6",
          hover: "#b7c1d1",
        },
        header: {
          primary: "#696d75",
          "login-link": "#f26c29",
          "login-link-hover": "#ff8142",
          "login-link-active": "#e65710",
        },
      },
    },
  },
  plugins: [],
};
