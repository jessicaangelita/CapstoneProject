/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#CEE9F4',
        customdarkerBlue: "#87a4b0",
        custombluegray: "#4f636b",
        primary: {
          lightblue: '#00a6df',
          mediumblue: '#134579',
          darkblue: '#090d35',
          grey: '#393e5c',
          darkgrey: '#222537'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'landing-page-1': "url('/public/assets/background/landing-page-1.png')",
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'josefin': ['Josefin Sans', 'sans-serif'],
        'noto': ['Noto Sans', 'sans-serif']
      },
      dropShadow: {
        'white-3xl': '0 100px 100px rgba(255, 255, 255, 1)',
        '4xl': [
            '0 35px 35px rgba(255, 255, 255, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [],
}
