/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a', // Slate 900
        secondary: '#f8fafc', // Slate 50
        accent: '#0ea5e9', // Sky 500
        dark: '#1e293b', // Slate 800
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
