import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        neonGreen: "#C4FF50",
        darkBg: "#0A0A0A",
        cardBg: "#151515",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      gridTemplateColumns: {
        'gallery': 'repeat(auto-fill, minmax(280px, 1fr))',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;