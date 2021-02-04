const defaultTheme = require('tailwindcss/defaultTheme')
const bootstrap =  require('tailwind-bootstrap-grid')({
    containerMaxWidths: { sm: '540px', md: '720px', lg: '960px', xl: '1300px' },
})

module.exports = {
    theme: {
        extend: {
            fontFamily: {
                // sans: ['Varela Round', 'sans-serif']
            },
            colors: {
                dark: '#151a20',
                primary: '#d4d0c6',
                secondary: '#f87060'
            } 
        }
    },
    plugins: [
        bootstrap
    ],
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js',
            'nuxt.config.js',
        ]
      }
}