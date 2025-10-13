/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        neutral: {
          50: '#f5f5f5',
          900: '#1a1a1a',
          // Add additional neutral shades if needed
          100: '#e5e5e5',
          200: '#d4d4d4',
          300: '#a3a3a3',
          400: '#737373',
          500: '#525252',
          600: '#404040',
          700: '#262626',
          800: '#171717',
        },
        lime: {
          400: '#d4ff00',
          500: '#bfe600',
        },
      },
      fontWeight: {
        black: '900',
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        wide: '0.025em',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#404040',
            a: {
              color: '#d4ff00',
              '&:hover': {
                color: '#bfe600',
              },
            },
            strong: {
              color: '#1a1a1a',
              fontWeight: '900',
            },
            h1: {
              color: '#1a1a1a',
              fontWeight: '900',
            },
            h2: {
              color: '#1a1a1a',
              fontWeight: '900',
            },
            h3: {
              color: '#262626',
              fontWeight: '900',
            },
            blockquote: {
              borderLeftColor: '#d4ff00',
              color: '#525252',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
