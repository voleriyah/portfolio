import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8E9",
        "dark-brown": "#342927",
        "primary-red": "#F62F20",
        "dark-bg": "#1E1E1E",
      },
      fontFamily: {
        alegreya: ["var(--font-alegreya)", "sans-serif"],
        erica: ["var(--font-erica)", "cursive"],
      },
      fontSize: {
        hero: "108px",
        mega: "316px",
        motto: "128px",
      },
      letterSpacing: {
        'tighter-sm': '-0.24px',
        'tighter-lg': '-0.36px',
        'vertical-sm': '-0.18px',
        'vertical-lg': '-0.32px',
      },
    },
  },
  plugins: [],
};
export default config;
