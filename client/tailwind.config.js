module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{html,scss,ts}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        84: "21rem",
        88: "22rem",
        92: "23rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
