import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px", // Extra small screens
        sm: "640px", // Small screens (default)
        md: "768px", // Medium screens (default)
        lg: "1024px", // Large screens (default)
        xl: "1280px", // Extra large screens (default)
        "2xl": "1536px", // 2X extra large screens (default)
        "3xl": "1920px", // Custom 3X extra large
      },
      colors: {
        "rich-sea-color": "#121111",
        "rich-sea-green": "#A0E548",
        "rich-sea-yellow": "#FFC83C",
        "rich-sea-sky": "#65ABFF",
        "rich-sea-pink": "#FFC2C2",
        "rich-sea-gray": "#F1F1F1",
      },
      backgroundColor: {
        "rich-sea-color": "#121111",
        "rich-sea-green": "#A0E548",
        "rich-sea-yellow": "#FFC83C",
        "rich-sea-light-yellow": "#FFF6DF",
        "rich-sea-sky": "#65ABFF",
        "rich-sea-pink": "#FFC2C2",
        "rich-sea-gray": "#F1F1F1",
        "light-mode": "#fff",
        "dark-mode": "#000",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
