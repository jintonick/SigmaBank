/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      graydef: '#B1B5C3',
      prymeblue: '#213A8B',
    },
    extend: {},
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      }
  },
  plugins: [],
}

