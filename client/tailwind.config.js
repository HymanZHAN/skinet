module.exports = {
  mode: "jit",
  purge: ["./src/app/**/*.{html,scss,ts}","./src/style.scss"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        84: "21rem",
        88: "22rem",
        92: "23rem",
      },
      fontFamily: {
        'brand':'Reenie Beanie'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
