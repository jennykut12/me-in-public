/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '350px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'yellow': '#F5BF3D',
      'black':'#0D062D',
      'red': '#FF1F7D',
      'blue': '#54C5EB',
      'purple': '#6160DC',
      'green': '#00AC56',
      'sidebar': '#F7F8FA',
      'sidebar-border': '#EBECF2',
      'grey': '#898989',
      'gray-50': '#FAFAFA',
      'gray-100': '#F5F5F5',
      'gray-200': '#E5E5E5',
      'gray-300': '#B2ABAB',
      'gray-400': '#A3A3A3',
      'gray-500': '#737373',
      'gray-600': '#525252',
      'gray-700': '#404040',
      'gray-800': '#262626',
      'gray-900': '#171717',
      'white': '#ffff',
      'Neutral-White': '#DADDDD',
    },
    extend: {
      fontFamily: {
        'sans': ['Plus Jakarta Sans', 'sans-serif'],
      },
      fontWeight: {
        'normal': 400,
        'medium': 500,
        'semibold': 600,
      },
      fontSize: {
        'xs': '10px',   // Extra small
        'sm': '12px',  // Small
        'base': '14px',    // Base
        'lg': '16px',  // Large
        'xl': '18px',   // Extra large
        '2xl': '20px',   // 2 times extra large
        '3xl': '24px', // 3 times extra large
        '4xl': '32px',  // 4 times extra large
        '5xl': '48px',     // 5 times extra large
        '6xl': '64px',     // 6 times extra large
      },
    },
    theme: {
      'H_1': {
        fontSize: '64px',
        fontWeight: 'semibold',
        textColor: '#171717',
        fontFamily: 'sans',
      },
      'H_2': {
        fontSize: '48px',
        fontWeight: 'semibold',
        textColor: '#171717',
        fontFamily: 'sans',
      },
      'H_3': {
        fontSize: '32px',
        fontWeight: 'semibold',
        textColor: '#171717',
        fontFamily: 'sans',
      },
      'H_4': {
        fontSize: '24px',
        fontWeight: 'semibold',
        textColor: '#171717',
        fontFamily: 'sans',
      },
      'H_5': {
        fontSize: '20px',
        fontWeight: 'semibold',
        textColor: '#171717',
        fontFamily: 'sans',
      },
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [false], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}

