module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //test backgound images
      backgroundImage: {
        'pattern': "url('/img/pattern.webp')",
        // 'hero-pattern': "url('/img/hero-pattern.svg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
        // 'form-pattern': "url('/img/hero-pattern.svg')",
      }

    },
  },
  plugins: [],
}