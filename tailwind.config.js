/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16',

    },
    extend: {
      colors:
      {
        primary: '#a78bfa',
        dark_purple: '#3b0764',
        medium_purple: '#6d28d9',
        medium_gray: '#475569',
        dark: '#212121',
        drkmode: '#3d3d3d'
      },
      screens: {
        '2xl': '1320px',
      },
      backgroundImage: {
        'hero-pattern': "url('/dist/img/background_import.jpg')",
      },
    },
  },
  plugins: [],
}

