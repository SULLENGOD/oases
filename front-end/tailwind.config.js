/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fade: 'fadeOut .75s ease-in-out',
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.purple.100') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),
    },
  },
  plugins: [],
}

