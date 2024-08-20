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
        midblue: "#0C175F",
        midpurple: "#8C89E7",
        lightpurple: "#E7E9F5",
        lightbeige: "#D1D1D1"
      },
      fontFamily: {
        'spartan': ['"League Spartan"', 'sans-serif'],
      },
      fontSize: {
        '8xl': '100px'
      },
      backgroundImage: {
        'hero-pattern': "url('/src/Image/Feedback.jpg')",
      },
    },
  },
  plugins: [],
}

