/** Config Tailwind — reproduit la config inline de boutique.html */
module.exports = {
  content: ['./boutique.html'],
  theme: {
    extend: {
      colors: {
        green: { DEFAULT: '#2D6A4F', dark: '#1B4332', light: '#52B788' },
        pink:  { DEFAULT: '#C85B8A', light: '#F4B8D1', dark: '#9B3070' },
        gold:  '#E09F3E',
        cream: '#FFF8F0',
        bg:    '#F9F5F0',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
};
