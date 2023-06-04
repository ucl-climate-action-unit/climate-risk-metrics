/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ttf}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi-Regular', ...defaultTheme.fontFamily.sans],
        bold: ['Satoshi-Bold', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        EEI: '#CC1476',
        STC: '#087E86',
        UWI: '#5002D7',
        dark: '#0E172F',
        light: '#F1F5FF',
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
