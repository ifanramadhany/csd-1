module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
      14: "14px",
    },
    extend: {
      width: {
        100: "35.3rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
