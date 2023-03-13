/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        whitney: ['whitneymedium', 'cursive'],
        bebas: ['Bebas', 'sans-serif'],
      },
      // accentColor: {
      //   cblue:'#3b82f6',
      //   cred:'#ef4444',
      // }
    },
  },
  darkMode: 'class',
  plugins: [require('daisyui')],
};
