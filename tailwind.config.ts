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
        "forsythia":   "#FFC801",
        "nocturnal":   "#114C5A",
        "arctic":      "#F1F6F4",
        "mystic":      "#D9E8E2",
        "saffron":     "#FF9932",
        "oceanic":     "#172B36",
      },
      fontFamily: {
        mono:  ["JetBrains Mono", "monospace"],
        sans:  ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
