/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      main: '#007537',
      black: '#221F1F',
      white: '#FFFFFF',
      darkWhite: '#F6F6F6',
      gray: '#7D7B7B',
      lightGray: '#ABABAB',
      error: '#FF0000',
    },
    fontFamily: {
      l: ['robotoLight'],
      b: ['robotoBold'],
      m: ['robotoMedium'],
      r: ['robotoRegular']
    },
    fontSize: {
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '24px'
    },
    lineHeight: {
      md: '20px',
      lg: '34px'
    },
    padding: {
      sm: '15px',
      md: '24px',
      lg: '48px'
    },
    extend: {},
  },
  plugins: [],
}

