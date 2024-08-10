/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }                    
    },
    // screens: {
    //   md1200: { max: "1200px" },
    //   md1000: { max: "1000px" },
    //   min800: { max: "800px" },
    //   min620: { max: "620px" },
    //   min540: { max: "540px" },
    //   min450: { max: "450px" },
    //   min375: { max: "375px" },
    // },
  },
  plugins: [],
};
