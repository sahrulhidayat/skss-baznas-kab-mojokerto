import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", "ui-sans-serif", "system-ui"],
        serif: ["Merriweather", "serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }: any) {
      const utilities = {
        ".bg-hero": {
          backgroundImage: "url('/hero.png')",
        },
      };

      addUtilities(utilities);
    }),
  ],
} satisfies Config;
