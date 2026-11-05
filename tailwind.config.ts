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
          navy: "#0B132B",       // Deep Navy
          navyLight: "#1C2541",  
          royal: "#2463A6",      // Royal Blue
          sky: "#5CA9E6",        // Sky Blue
          grey: "#F4F6F9",       // Light Grey
          charcoal: "#263445",   // Main text
          teal: "#20A58A",       // Success
          gold: "#C6A87C",       // Premium Gold
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;