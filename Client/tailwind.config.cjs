const { purple } = require('@mui/material/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-hot': "url('/images/the local.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily:{
        'playfair':['Playfair Display', 'sans-serif'],
        'roboto':['Roboto','sans-serif'],
        'satisfy':['Satisfy', 'cursive'],
        'ubuntu-c':['Ubuntu Condensed', 'sans-serif'],
      },
      keyframes:{
        'blink':{
          '0%': {
            opacity:0
          },
        }
      },
      animation:{
        'blink':'blink 1s steps(2) infinite'
      },
      backgroundColor:{ 
        'primary-purple': purple[800],
        'primary-purple-lighter': purple[700]
      },
      color:{
        'primary-purple': purple[600],
        'primary-purple-lighter': purple[500]
      }
    },
  },
  plugins: [],
}