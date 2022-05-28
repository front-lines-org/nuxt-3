const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography')
  ],
  prefix: 'tw-',
  content: ['content/**/*.{md,yml,json,json5,csv}'],
  theme: {
    extend: {
      colors: {
        // Customize the feeling of your site
        gray: colors.stone
      }
    }
  }
}
