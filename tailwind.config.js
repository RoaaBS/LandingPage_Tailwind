/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        '2md':'960px'
      },
      colors:{
        primary:'#7E3AF2',
        primary_text:'#111928',
        secondery_text:'#6B7280',
        secondery:'#F9FAFB',
      },
      fontFamily:{
        Inter:['Inter','sans-serif'],
      },
    },
  },
  plugins: [],
}