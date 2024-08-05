/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jacquard: ['Jacquard 12', 'serif'],
        nabla: ['Nabla', 'serif'],
        sankofa: ['Sankofa Display', 'serif'],
        sedgwick: ['Sedgwick Ave Display', 'cursive'],
      },
    },
  },
  plugins: [],
}