/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-green": "#f4faef",
        "dark-green": "#d0dec6",
      },
    },
  },
  plugins: [],
}
