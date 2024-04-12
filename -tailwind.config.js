/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "tablet": "992px",
      },
      colors: {
        "primary": "#ff6363",
        "secondary": {
          100: "#1d5dec",
          200: "#05266e",
        },
      },
      /* Solamente para propiedad width */
      width: {
        "128": "32rem" /* 512px */,
        "256": "64rem" /* 1024px */,
      },
      /* Para cualquier propiedad relacionada con medidas: widht, height, padding, margin, etc*/
      spacing: {
        "15": "3.75rem" /* 60px */,
        "62": "15.5rem" /* 248px */,
        "100": "25rem" /* 400px */,
        "12/25": "48%" /* 48% */,  
      },      
    },
  },
  plugins: [],
  safelist: [
    'bg-red-700',
  ],
  darkMode: 'class', // or 'media' or 'class'
}

