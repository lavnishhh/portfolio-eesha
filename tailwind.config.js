/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#f0f9f1',
          '100': '#dbf0dc',
          '200': '#b9e1bd',
          '300': '#8acb94',
          '400': '#5eb06d',
          '500': '#38914c',
          '600': '#277439',
          '700': '#1f5d2f',
          '800': '#1b4a28',
          '900': '#173d22',
          '950': '#0c2213',
      }
      }
    },
  },
  plugins: [
]
}