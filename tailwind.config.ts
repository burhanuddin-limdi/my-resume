import type { Config } from "tailwindcss";
const { colors } = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        "dark-bg-color": "#04364A",
        "light-bg-color": "#DAFFFB",
      },
    },
  },
  plugins: [],
};
export default config;
