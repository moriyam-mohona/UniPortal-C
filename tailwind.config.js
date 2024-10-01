/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      mobileM: "375px",
      mobileL: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {},
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: ["Helvetica, Arial, sans-serif"],
      },
      boxShadow: {
        "btn-shadow":
          "5px 5px 10px rgba(170, 170, 204, 0.5), -5px -5px 10px #FFFFFF;",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
