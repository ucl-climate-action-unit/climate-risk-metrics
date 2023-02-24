/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      sans: ['Satoshi-Regular', 'sans-serif'],
    },
    colors: {
      accentEEI: '#D40078',
      accentSTC: '#087E86',
      accentUWI: '#5002D7',
    },
    fontSize: {
      body: ['16px', '20px'],
      bodylg: ['24px', '27px'],
      xl: ['24px', '29.5px'],
      '2xl': ['44px', '44px'],
    },
  },
}
