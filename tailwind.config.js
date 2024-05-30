const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      work: ["'Work Sans', 'sans-serif'"],
      pop: ["'Poppins', 'sans-serif'"]
    }
  },
  plugins: [],
});