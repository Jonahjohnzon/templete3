/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {   
    screens: {
      'sm': '655px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1025px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      // => @media (min-width: 1536px) { ... }
      '3xl' : '1700px'
    },
    fontFamily:{
      'oxygen':['Oxygen', 'sans-serif']
    },
    colors: {
    transparent: 'transparent',
    current: 'currentColor',
    'white': '#ffffff',
    'purple': '#3f3cbb',
    'midnight': '#121063',
    'metal': '#565584',
    'tahiti': '#3ab7bf',
    'silver': '#F2F6F7',
    'bubble-gum': '#ff77e9',
    'bermuda': '#78dcca',
    "blue":"#191A3E",
    "yellow":"#FFA700"
  },
    extend: {},
  },
  plugins: [],
}