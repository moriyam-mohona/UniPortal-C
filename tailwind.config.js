/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      mobilem: "375px",
      mobilel: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1546px",
    },
    extend: {
      colors: {
        emerald: "#014F43", // used
        mintGreen: "#00A896", // Primary Mint Green
        seaGreen: "#2A9D8F", // Primary Sea Green
        lightMoss: "#B7E4C7", // used
        tealGreen: "#007F5F", // Secondary Teal Green
        limeGreen: "#A8DADC", // Accent Lime Green
        mutedYellow: "#F4A261", // Accent Muted Yellow
        softGray: "#E5E5E5", // Neutral Soft Gray
        darkGray: "#333333",
        white: "#FFFFFF", //used
        red: "#DC143C", //used
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
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
