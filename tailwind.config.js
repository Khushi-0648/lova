/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            950: '#070d1e',
            900: '#0c1833',
            800: '#14244b',
            700: '#1c3468',
            600: '#27478a',
            100: '#e8edf7',
            50: '#f4f6fb',
          },
          red: {
            700: '#9b1c1c',
            600: '#c81e1e',
            500: '#e02424',
            400: '#f05252',
            50: '#fdf2f2',
          },
          gold: {
            700: '#b45309',
            600: '#d97706',
            500: '#f59e0b',
            400: '#fbbf24',
            100: '#fef3c7',
            50: '#fffbeb',
          },
          slate: {
            850: '#172033',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Outfit', 'Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(217, 119, 6, 0.3)',
        'glow-red': '0 0 25px -5px rgba(200, 30, 30, 0.4)',
        'subtle': '0 4px 20px -2px rgba(12, 24, 51, 0.08)',
      }
    },
  },
  plugins: [],
}
