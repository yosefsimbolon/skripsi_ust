/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      //	@media (min-width: 768px) { ... }
      lg: "1024px",
      //@media (min-width: 1024px) { ... }
      xl: "1280px",
      //@media (min-width: 1280px) { ... }
      "2xl": "1536px",
      //	@media (min-width: 1536px) { ... }
    },
  },

  theme: {
    extend: {
      fontFamily: {
        quicksand: "'Quicksand', sans-serif",
        Montserrat: "'Montserrat', sans-serif",
      },
    },
  },
  plugins: [],
};
