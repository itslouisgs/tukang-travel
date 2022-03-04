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
  },
  plugins: [],
}
