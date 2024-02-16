import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
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
    fontFamily: {
      sans: [
        '"Inter var", sans-serif',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32'
        },
      ],
    },
  },
  plugins: [require("daisyui")],
}
export default config
