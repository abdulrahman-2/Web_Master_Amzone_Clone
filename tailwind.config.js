/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        amazonClone:{
          background : "#EAEDED",
          light_blue: "#232F3A",
          light_blue_2: "#485769",
          yellow: "#FEBD69",
          DEFAULT: "#131921"
        }
      }
    },
  },
  plugins: [],
};
