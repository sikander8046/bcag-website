/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1c3550',
          light: '#24446a',
          dark: '#0f1f30',
        },
        ember: {
          DEFAULT: '#d4420a',
          light: '#e85520',
          dark: '#a83208',
        },
        parchment: '#f5f2ec',
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Bebas Neue', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
