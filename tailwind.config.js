/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      colors:{
        mainColor: '#191B1F',
      }
    },
  },
  plugins: [],
  variants: {
    extend: {
      placeholderColor: ['responsive', 'dark', 'focus', 'focus-visible'],
    },
  },
}
