/** @type {import('tailwindcss').Config} */
module.exports = {
  // File(s) to access
  content: [
    "./src/*.html"
  ],
  // For Dark Mode - Enabled in Windows
  // Media - for Windows Settings
  // Class - used in html 
  darkMode: "media", //class, media

  theme: {
    // Change the default color of gray-800 to #99ab1b
    // This breaks tailwindcss intellisense
    // Commenting out for now
    // colors: {
    //   gray: {
    //     800: "#991b1b",
    //   },
    // },

    // if gray is put here, it does NOT break intellisense
    extend: {
      colors: {
        gray: {
          800: "#991b1b",
        },
      },
    },
  },
  plugins: [],
}
