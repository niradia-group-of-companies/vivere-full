/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["main", "sans-serif"],
        sub: ["sub", "sans-serif"],
        quote: ["quote", "sans-serif"],
        pluto: ["pluto", "sans-serif"],
      },
      colors: {
        th_green: "#4E6548",
        th_gray: "#6E6259",
        th_ivory: "#ebe3d8",
        th_brown: "#9E5330",
        th_lightbrown: "#D9BFA9",
        th_darkgray: "#212121",
      },
      backgroundImage: {
        solterra: "url('/logos/footer_bg.svg')",
        vivere: "url('/logos/FooterVivereLogo.png')",
      },
    },
  },
  plugins: [],
};
