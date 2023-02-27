/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi-Regular', 'sans-serif'],
        bold: ['Satoshi-Bold'],
      },
      colors: {
        EEI: '#D40078',
        STC: '#087E86',
        UWI: '#5002D7',
        dark: '#0E172F',
      },
      fontSize: {
        body: ['16px', '20px'],
        bodylg: ['24px', '27px'],
        xl: ['24px', '29.5px'],
        '2xl': ['44px', '44px'],
      },
    },
  },
}
