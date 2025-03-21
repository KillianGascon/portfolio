/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Active le mode sombre basé sur la classe 'dark'
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          100: '#FEFCFE',
          200: '#FBF7FE',
          300: '#F7EDFE',
          400: '#F2E2FC',
          500: '#EAD5F9',
          600: '#E0C4F4',
          700: '#D1AFEC',
          800: '#BE93E4',
          900: '#8E4EC6',
          1000: '#8347B9',
          1100: '#8145B5',
          1200: '#402060',
        },
        dark: {
          purple: {
            100: '#18111B',
            200: '#1E1523',
            300: '#301C3B',
            400: '#3D224E',
            500: '#48295C',
            600: '#54346B',
            700: '#664282',
            800: '#8457AA',
            900: '#8E4EC6',
            1000: '#9A5CD0',
            1100: '#D19DFF',
            1200: '#ECD9FA',
          },
        },
      },
    },
  },
  plugins: [],
};
