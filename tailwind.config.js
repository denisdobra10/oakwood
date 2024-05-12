/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#F1F2F8",
        "header": "#040D16",
        "paragraph": "#5A5E65"
      }
    },
  },
  plugins: [],
}