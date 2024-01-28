/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify the files where Tailwind CSS will look for classes to generate styles
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  
  // Enable Just-In-Time (JIT) mode for faster development builds
  mode: "jit",

  // Define custom theme settings
  theme: {
    extend: {
      // Extend the default color palette with custom colors
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },

      // Extend the default font family with the 'Poppins' font
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },

    // Define custom screen breakpoints for responsive design
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },

  // Specify additional plugins if needed
  plugins: [],
};
