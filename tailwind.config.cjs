/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mb: "280px",
      sm: "520px",
      md: "768px",
      lg: "1024px",
      xl: "1280",
    },
    extend: {
      backgroundColor: {
        skin: {
          gray: "#eeeeee",
          white: "#faf9f9",
          blue: "#3c91e6",
          yellow: "#ffce25",
          orange: "#fe7237",
        },
      },
      borderColor: {
        skin: {
          gray: "#eeeeee",
          white: "#faf9f9",
        },
      },
    },
  },
  plugins: [],
};
