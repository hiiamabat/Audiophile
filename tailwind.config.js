/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/css/styles.css',
  ],
  theme: {
    extend: {
      screens: {
        xxs: '320px',
        xs: '400px',
      },
      borderRadius: {
        default: '8px',
      },
      colors: {
        primary: {
          DEFAULT: '#D87D4A', // default shade of primary
          light: '#fbaf85', // lighter shade of primary
        },
        secondary: {
          DEFAULT: '#101010', // default shade of secondary
          light: '#FAFAFA',
          medium: '#4C4C4C', // lighter shade of secondary
          darker: '#F1F1F1', // darker shade of secondary
          darkest: '#626262',
          black: '#000000',
        },
      },
      letterSpacing: {
        '1em': '1em',
      },
      backgroundImage: {
        'hero-bg-mobile':
          "url('../assets/images/home/mobile/image-header.jpg')",
        'speaker-bg-mobile': "url('../assets/images/home/mobile/bg.png')",
        'speaker-pic-mobile':
          "url('../assets/images/home/mobile/image-speaker-zx7.jpg')",
        'earphone-mobile':
          "url('../assets/images/home/mobile/image-earphones-yx1.jpg')",
        'audio-gear-mobile':
          "url('../assets/images/shared/mobile/image-best-gear.jpg')",
        'speaker-pic-tablet':
          "url('../assets/images/home/tablet/image-speaker-zx7.jpg')",
        'hero-bg-tablet':
          "url('../assets/images/home/tablet/image-header.jpg')",
        'speaker-bg-tablet':
          "url('../assets/images/home/tablet/speaker-bg.jpg')",
        'earphone-tablet':
          "url('../assets/images/home/tablet/image-earphones-yx1.jpg')",
        'hero-bg-desktop':
          "url('../assets/images/home/desktop/image-hero.jpg')",
        'speaker-bg-desktop':
          "url('../assets/images/home/desktop/speaker-bg-desktop.jpg')",
        'speaker-pic-desktop':
          "url('../assets/images/home/desktop/image-speaker-zx7.jpg')",
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [],
};
