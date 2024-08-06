/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-pink': '#DA7297',
      },
      backgroundImage: {
        'custom-gradient': '  linear-gradient(to left, #536976, #292e49); ',
        'custom2' : 'linear-gradient(to left, #0f0c29, #302b63, #24243e)',
      },
      fontFamily: {
        'libre-baskerville': ['"Libre Baskerville"', 'serif'],
        'urbanist': ['"Urbanist"', 'sans-serif'],
        'outfit': ['"Outfit"', 'sans-serif'],
        'oswald': ['"Oswald"', 'sans-serif'],
        'roboto': ['"Roboto Condensed"', 'sans-serif'],
        'spacemono': ['"Space Mono"', ' monospace'],
        'k2d': ['"K2D"', ' sans-serif'],









        
      

      },
    },
  },
  plugins: [],
}

