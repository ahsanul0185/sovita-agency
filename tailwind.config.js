/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // if using Next.js App Router
  ],
  safelist: [
    "bg-main-yellow",
    "bg-main-orange",
    "bg-main-purple",
    "bg-main-green",
    "text-main-yellow",
    "text-main-purple",
    "text-main-green",
    "text-main-orange",
    "text-main-white",
    "border-main-green",
    "border-main-orange",
    "border-main-yellow",
    "border-main-purple",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
