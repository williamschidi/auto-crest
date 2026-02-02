/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#047857",
        secondary: "#111827",
        neutral: "#F9FAFB",
        accent: "#F59E0B",
        // accent: "#047857",
      },
      screens: {
        xs: "490px",
        mlg: "920px",
      },
    },
  },
  plugins: [],
};

// 047857
