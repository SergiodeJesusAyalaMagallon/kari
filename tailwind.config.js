
const colors = require('tailwindcss/colors')

module.exports = {
    //purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    purge: ['./src/**/*.js', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          primary: '#3A36A8',
          secondary: '#F8972E',
          onBackground: '#8D8D8D',
          onPrimary: '#FFFFFF',
          background: '#E9E8F5',
          surface: '#D1CFE5',
          seconday900: '#6E4314',
          secondary800: '#A5641E',
          secondary700: '#C07523',
          secondary600: '#DC8628',
          secondary500: '#F8972E',
          secondary400: '#F8A245',
          secondary300: '#FAB973',
          secondary200: '#FBD0A2',
          secondary100: '#FEF3E7',
          primary900: '#19184A',
          primary800: '#262470',
          primary700: '#2D2A82',
          primary600: '#333095',
          primary500: '#3A36A8',
          primary400: '#4F4CB1',
          primary300: '#7B79C5',
          primary200: '#AFAEE0',
          primary100: '#D3D2EB',
          'light-blue': colors.lightBlue,
          cyan: colors.cyan,
        },
        fontFamily: {
            Roboto: ['Roboto'],
            Sans: ['Open Sans']
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }