/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      graydef: '#B1B5C3',
      prymeblue: '#213A8B',
      graycol: '#5c637d',
      prymred: '#F7304D',
      lightred: '#FFE5E8',
      lightblue: '#E4EAFF',
      authgray: '#777E90',
      modalgray: 'rgba(255,255,255,0.77)'
    },
    extend: {},
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      }
  },
  plugins: [],
}

