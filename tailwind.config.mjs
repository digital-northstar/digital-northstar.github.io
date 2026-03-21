import typography from '@tailwindcss/typography';

export default {
  darkMode: 'media',
  content: ['./src/**/*.{astro,html,js,md,mdx}'],
  theme: {
    extend: {
      colors: {
        deepblue: '#0F1C30',
        northtext: '#7A8699',
        lightbg: '#F5F7FA',
        lighttext: '#1C2430',
        brightred: '#FF4C60',
        northtitle: '#0F1C30',
        northtitleinvert: '#FFFFFF',
      },
      
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            h1: {
              fontSize: '3.5rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: theme('colors.northtitle'),
              opacity: '0.9',
            },
            h2: {
              fontSize: '2rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: theme('colors.northtitle'),
              opacity: '0.8',
            },
            h3: {
              fontSize: '1.1rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: theme('colors.northtitle'),
              opacity: '0.7',
            },
            p: {
              fontSize: '1rem',
              lineHeight: '1.8',
              letterSpacing: '0.02em',
            },
          },
        },
        
        invert: {
          css: {
            color: theme('colors.northtext'),
      
            h1: {
              color: theme('colors.northtitleinvert'),
            },
      
            h2: {
              color: theme('colors.northtitleinvert'),
            },
      
            h3: {
              color: theme('colors.northtitleinvert'),
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
