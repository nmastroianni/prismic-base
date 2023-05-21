/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': `rgb(33, 150, 243)`,
        'brand-secondary': `rgb(136, 136, 136)`,
        'brand-accent': `rgb(255, 152, 0)`,
      },
    },
  },
  plugins: [],
}
