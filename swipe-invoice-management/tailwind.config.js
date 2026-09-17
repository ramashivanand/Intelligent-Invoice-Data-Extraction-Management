/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        active: "#FF5151",          // Active text color
        customlightgrey: "#686868",    // Inactive text color
        cardbg:"#FAFAFA",
        customdarkblue:'#161E54',
        customblue:'#1B204A',
      },
    },
  },
  plugins: [],
};

