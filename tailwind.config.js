/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#007bff", // Define custom blue color
        customGreen: "#28a745", // Define custom green color
        customRed: "#dc3545", // Define custom red color
        bgGray: "#c0c6cc",
        bgDark: "#413F3F",
        // Add more custom colors as needed
      },
    },
  },

  plugins: [],
};
