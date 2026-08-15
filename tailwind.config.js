/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Cinzel", "serif"], // Para os títulos e nome principal
        sans: ["Montserrat", "sans-serif"], // Para os textos, botões e descrições
      },
      colors: {
        dark: {
          900: "#121212",
          950: "#0a0a0a",
        },
        gold: {
          400: "#D4AF37",
          500: "#C5A059",
          600: "#AA823E",
        },
      },
    },
  },
  plugins: [],
};
