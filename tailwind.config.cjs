/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "index-font": ['"Open Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
