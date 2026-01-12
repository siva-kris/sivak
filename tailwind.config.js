import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        blueacid: {
          primary: "#1e3a8a", // dark blue
          secondary: "#22d3ee", // cyan
          accent: "#d946ef", // purple
          neutral: "#d1d5db",
          "base-100": "#f3f4f6",
          info: "#0c4a6e", // deep blue
          success: "#00ff00",
          warning: "#fbbf24",
          error: "#ff0000",
        },
      },
    ],
  },
};
