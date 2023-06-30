/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#F0F0F0',
        blue:'#3683F0',
        darkblue:'#0029FF'
      },
    },
  },
  plugins: [],
}

