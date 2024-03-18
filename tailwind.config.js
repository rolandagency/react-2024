import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
      bebas: ["Bebas Neue", "sans-serif"],
    },
  },
  extend: {},
  daisyui: {
    themes: [
      {
        defaultTheme: {
          primary: "#5f93a0",
          secondary: "#37323E",
          accent: "#BD632F",
          neutral: "#37323E",
          "base-100": "#2E2D33",
          info: "#00bbfc",
          success: "#9bee00",
          warning: "#ee5a00",
          error: "#fc4258",
        },
      },
    ],
    darkTheme: "default", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
  plugins: [daisyui],
};
