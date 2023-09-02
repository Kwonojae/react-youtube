/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
      brand:'#FF0000'
    },
      lineClamp:{
        7:'7'
      }
  },
  },
  plugins: [],
}

