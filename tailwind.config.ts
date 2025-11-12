import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ERWO Garage brand colors
        'erwo-red': '#E31E24',
        'erwo-black': '#1A1A1A',
        'erwo-dark': '#333333',
        'erwo-gray': '#F5F5F5',
        'erwo-blue': '#0066CC',
        'erwo-green': '#28A745',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'bebas': ['Bebas Neue', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
      },
      fontSize: {
        'base': '16px',
      },
    },
  },
  plugins: [],
}
export default config
