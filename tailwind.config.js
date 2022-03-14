module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing : {
        18: '4.5rem',
      },
    },
    screens : {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'sl': '960px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    dropShadow: {
      'lg': [
        '0 10px 8px rgb(0 0 0 / 0.04)',
        '0 4px 3px rgb(0 0 0 / 0.25)'
      ]
    }
  },
  plugins: [],
}
