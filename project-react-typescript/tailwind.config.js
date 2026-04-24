export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        background: 'var(--color-background)',
        title: 'var(--color-title)',
        body: 'var(--color-body)',
        stroke: 'var(--color-stroke)',
      },
      fontSize: {
        h1: ['50px', { lineHeight: '75px', fontWeight: '600' }],
        h2: ['44px', { lineHeight: '66px', fontWeight: '600' }],
        h3: ['44px', { lineHeight: '66px', fontWeight: '600' }],
        h4: ['32px', { lineHeight: '48px', fontWeight: '600' }],
        h5: ['24px', { lineHeight: '36px', fontWeight: '600' }],
        h6: ['16px', { lineHeight: '29px', fontWeight: '600' }],
        body: ['16px', { lineHeight: '29px', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
};
