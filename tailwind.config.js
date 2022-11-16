/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'col-1': '#489DA7',
        'col-2': '#99E3CF',
        'col-3': '#DB782A',
        'col-4': '#E8BE93',
      },
      height: {
        '100': '32rem',
      },
      width: {
        '100': '50%',
      },
    },
  },
  plugins: [],
}
