/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{ts,js}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./src/assets/img/hero.jpg')"
      }
    }
  },
  plugins: []
}
