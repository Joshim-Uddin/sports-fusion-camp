/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'logo': ['Righteous', 'cursive'],
        'Caprasimo':['Caprasimo', 'cursive'],
        'Oleo':['Oleo Script Swash Caps', 'cursive'],
        'script':['Style Script', 'cursive'],
        'Luckiest Guy': ['Luckiest Guy', 'cursive'],
      },
    },
  },
  plugins: [require('daisyui')],
}

