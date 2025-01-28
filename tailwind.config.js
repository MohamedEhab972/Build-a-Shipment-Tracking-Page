const flowbite = require("flowbite/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        maincolor: "#E30613",
        alternativecolor: "#0098A5",
      },
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
      },
      fontSize: {
        "xl-screen": ["30px", { lineHeight: "56px" }],
      },
      letterSpacing: {
        negative: "-0.02em",
      },
    },
  },
  plugins: [flowbite],
};
