/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFD814",
        secondary: "#2A8FD7",
        bgLight: "#232F3E",
      },
    },
  },
  plugins: [],
};
