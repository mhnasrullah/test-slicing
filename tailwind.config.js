/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      dark: "#33343e",
      primary: "#354efe",
      white: "#fffefe",
      "l-gray": "#b7b8c6",
      gray: "#7f8188",
    },
  },
};
