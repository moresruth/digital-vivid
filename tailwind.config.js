/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#150725",
        secondary: "#FFF",
        lightpurple:"#B96CFD",
        blue: "#08DDFA",       
      },
      fontFamily:{
        grifterbold:["Grifterbold", "sans-serif"],
        poppins:["Poppins", "san-serif"],
      },
    },

    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },

  },
  plugins: [],
}

