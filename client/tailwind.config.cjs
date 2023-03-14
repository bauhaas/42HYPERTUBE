/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        whitney: ['whitneymedium', 'cursive'],
        bebas: ['Bebas', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#12B38F',
          hover: '#0D946E',
          focus: '#0B7A5B',
        },
        dark: {
          DEFAULT: '#2B3834',
          hover: '#25302C',
          focus: '#1D2420',
        },
        mid: {
          DEFAULT: '#8FA8A3',
          hover: '#7C948F',
          focus: '#6A7F7A',
        },
        light: {
          DEFAULT: '#FFFFFF',
          hover: '#F2F2F2',
          focus: '#E5E5E5',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [require('daisyui')],
};
