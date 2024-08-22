/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkblue: "#090749",
        midblue: "#0C175F",
        midpurple: "#8C89E7",
        lightpurple: "#E7E9F5",
        lightbeige: "#D1D1D1",
        babypink: "#D46792",
        skintone: "#FAF0E6",
        darkskin: "#EADACA"
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
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'black' },
        },
      },
      animation: {
        typing: 'typing 4s steps(40, end) 1s 1 normal both, blink 500ms steps(40, end) infinite',
      }
    },
  },
  plugins: [],
}

