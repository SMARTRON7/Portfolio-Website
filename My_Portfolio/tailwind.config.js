/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: "#090749",
        midblue: "#182788",
        midpurple: "#8C89E7",
        lightpurple: "#E7E9F5",
        lightbeige: "#D1D1D1"
      },
      fontFamily: {
        'spartan': ['"League Spartan"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

