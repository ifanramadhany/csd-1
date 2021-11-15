module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderWidth: {
      '14': '14px'
    },
    extend: {
      width: {
        '100': '35.3rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
