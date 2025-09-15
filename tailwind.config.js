/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}" ],
  theme: {
    extend: {
      colors: {
        'header-background': '#151515',
        'dio-purple': '#7F28B5'
      }
    },
  },
  plugins: [],
}

