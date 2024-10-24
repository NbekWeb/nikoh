// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-100": "rgba(0, 0, 0, .5)",
        "black-400": "#1d1d1d",
        "blue-200":"#BEB4FF",
        "blue-700":"#354DDF",
        "blue-800":"#00169A",
        "blue-900":"#000E66",
      },
      fontSize: {
        min: "10px",
      },
    },
  },
  plugins: [],
};
