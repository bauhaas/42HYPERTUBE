/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        whitney: ['whitneymedium', 'cursive'],
        bebas: ['Bebas', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [require('daisyui')],
};
