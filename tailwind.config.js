/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainWhite: "#FCFCFE",
        purpel: "#703BF7",
      },
      container: {
        margin: "auto",
        center: true,
      },
      screens:{
            'sm':{"max":'767px'}
      },
      fontFamily: {
        Urbanist: "Urbanist",
      },
    },
  },
  plugins: [],
};
