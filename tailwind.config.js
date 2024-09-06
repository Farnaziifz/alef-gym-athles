module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx,vue}'],
  darkMode: true,
  theme: {
    extend: {},
    colors: {
      primary: '#0C3B2E',
      secondary: '#FFBA00',
      white: '#ffffff',
      transparent: 'transparent',
      secondaryGreen: '#6D9773'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
