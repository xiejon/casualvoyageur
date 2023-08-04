/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'off-white': '#f5f1e6',
      'mid-green': '#68902b',
      'dark-green': '#49681d',
      'yellow': '#fada5e',
      'light-brown': '#a67c52',
      'blue': '#79a8a9',
      'red-brown': '#d46a4d'
    }
  },
  plugins: [],
}
