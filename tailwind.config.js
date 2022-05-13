const palettes = require('./palettes');

module.exports = {
  content: ['./components/**/*.{vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './app.vue'],

  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['Source Sans Pro', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
    },
    fontSize: {
      'display-2xl': ['4.5rem', 1],
      'display-xl': ['3.75rem', 1],
      'display-lg': ['3rem', 1],
      'display-md': ['2.25rem', '2.5rem'],
      'display-sm': ['1.875rem', '2.25rem'],
      '2xl': ['1.5rem', '2rem'], // 24
      'xl': ['1.25rem', '1.875rem'], // 20
      'lg': ['1.125rem', '1.75rem'], // 18
      'md': ['1rem', '1.5rem'], // 16
      'sm': ['0.875rem', '1.25rem'], // 14
    },
    extend: {
      colors: {
        ...palettes,
      },
    },
  },

  plugins: [],
};
