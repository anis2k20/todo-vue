/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors:{
        'dark':'#222831',
        'tuna':'#31363F',
        'moonstone-blue':'#76ABAE',
        'soft-peach':'#EEEEEE'
      },
      fontFamily : {
        'poppins':['Poppins']
      },
      fontSize: {
        'h1': '48px',
        'h2': '36px',
        'h3': '30px',
        'h4': '24px',
        'h5': '20px',
        'h6': '16px',
      },
    },
  },
  plugins: [],
}

