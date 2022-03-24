module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8CA06E',
        secondary: '#EEE6DE',
        warning: '#F68F35',
        black: '#000000',
        white: '#ffffff',
      },
      fontSize: {
        '12px': '.75rem',
        '14px': '.875rem',
        '16px': '1rem',
        '18px': '1.125rem',
        '20px': '1.25rem',
        '24px': '1.5rem',
        '32px': '2rem',
        '40px': '2.5rem',
        '48px': '3rem',
        '64px': '4rem',
        '80px': '5rem',
      },
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
      },
      zIndex: {
        '999': '999',
      }
    },
  },
  plugins: [],
}