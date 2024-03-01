/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [],
  theme: {
    extend: {
      colors: {
        darkBackground: '#1f2937', // Define a custom background color for dark mode
        darkText: '#f9fafb', // Define a custom text color for dark mode
        lightBackground: '#ffffff', // Define a custom background color for light mode
        lightText: '#333333', // Define a custom text color for light mode
      },
    },
  },
  darkMode: 'class', // Enable dark mode variant
  plugins: [require("daisyui")],
}

