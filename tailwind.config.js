/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
theme: {
  extend: {
    fontFamily: {
      geist: ['var(--font-geist-sans)'],
      mono: ['var(--font-geist-mono)'],
      poppins: ['Poppins', 'sans-serif'],
    },
    colors: {
      primary: 'var(--primary-color)',
      text: 'var(--text-color)',
      background: 'var(--background-color)',
    },
  },
},

  plugins: [],
}
