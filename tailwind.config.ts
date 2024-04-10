import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        content: "1200px",
      },
      colors: {
        primary: "#402255",
        secondary: colors.yellow["200"],
      },
      padding: {
        content: "16px",
      },
      boxShadow: {
        "project-card": "inset 0px -230px 60px -51px rgba(0,0,0,0.84)",
      },
    },
  },
  plugins: [],
};
export default config;
