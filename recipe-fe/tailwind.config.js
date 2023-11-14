/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      opacity: {
        "65": ".65"
      },
      width: {
        "navmenu": "33.333333vw"
      }
    },
  },
  plugins: [],
}

