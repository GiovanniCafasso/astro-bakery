/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '90rem',
      },
      colors: {
        'pink': {
          50: '#FFF5F7',
          100: '#FCEEF3',
          200: '#FAD1E8',
          300: '#F8B4DD',
          400: '#F47AC8',
          500: '#EC4899',
          600: '#D4337D',
          700: '#8D2354',
          800: '#691A3F',
          900: '#45112A',
        },
        'amber': {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
      },
    },
  },
  plugins: [],
}
