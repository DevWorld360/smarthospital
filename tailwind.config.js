/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Urbanist: ["Urbanist", "sans-serif"],
        Assistant: ["Assistant", "sans-serif"],
      },

      colors: {
        "primary-color": "#014F86",
        "secondary-color": "#012A4A",
      },
    },
  },
  plugins: [],
};
