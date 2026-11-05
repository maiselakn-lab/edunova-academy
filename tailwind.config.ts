import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#142D4E",       // Main brand colour
          royal: "#2463A6",      // Buttons and highlights
          sky: "#5CA9E6",        // Learning elements
          grey: "#F4F6F9",       // Dashboard backgrounds
          charcoal: "#263445",   // Main text
          teal: "#20A58A",       // Success and progress
          gold: "#E5B45B",       // Premium highlights
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;