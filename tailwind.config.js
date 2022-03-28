const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
        pink: colors.pink,
        fuchsia: colors.fuchsia,
        purple: colors.purple,
        violet: colors.violet,
        indigo: colors.indigo,
        blue: colors.blue,
        sky: colors.sky,
        cyan: colors.cyan,
        teal: colors.teal,
        emerald: colors.emerald,
        green: colors.green,
        lime: colors.lime,
        yellow: colors.yellow,
        amber: colors.amber,
        orange: colors.orange,
        red: colors.red,
        'warm-gray': colors.warmGray,
        'true-gray': colors.trueGray,
        gray: colors.gray,
        'cool-gray': colors.coolGray,
        'blue-gray': colors.blueGray,
        mechBlue: {
          100: '#50d8fc',
          200: '#1ecdfb',
          300: '#04B4E2',
          320: '#04a0c9',
          350: '#146490',
          400: '#18507C',
          450: '#12446D',
          500: '#16416D',
          600: '#0C345B',
          700: '#032648',
          900: '#001325',
        },
        mechPink: {
          100: '#ef70f2',
          200: '#ec59ef',
          300: '#ea41ed',
          400: '#e72aeb',
          500: '#e216e6',
          600: '#cb13cf',
          700: '#b411b7',
        },
        mechPurple: {
          100: 'rgba(127, 0, 148, 0.79)',
          150: 'rgba(127, 0, 148, 1)',
          200: '#B233C7',
        },
        mechYello: {
          400: '#FFD600',
        },
      },
      screens: {
        '3xl': '1920px',
      },
    },
  },
  variants: {
    extend: {},
  },
}
