/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkCyan: "hsl(185, 75%, 39%)",
        veryDarkDesaturatedBlue: "hsl(229, 23%, 23%)",
        darkGrayishBlue: "hsl(227, 10%, 46%)",
        darkGray: "hsl(0, 0%, 59%)",
      },

      fontFamily: {
        theme: "Kumbh Sans, san-serif",
      },

      backgroundImage: {
        bgTop: "./bg-pattern-top.svg",
        bgBottom: "./bg-pattern-bottom.svg",
      },
    },
  },
  plugins: [],
};
