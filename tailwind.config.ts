import type {Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff545a",
        red: {"500": "#fd4043", "600": "#f43032"},
        gray: {
          "200": "#fcfcfc",
          "300": "#8f949d",
          "400": "#7b8088",
          "500": "#777f85",
          "700": "#dde0e4",
          "800": "#343a3f",
        },
        slate: {
          "300": "#a5adb3",
          "400": "#767f86",
          "500": "#505866",
          "600": "#859098",
          "700": "#a09e9c",
        },
        green: {"500": "#00c437"},
      },
    },
    fontSize: {
      xs: ["12px", {lineHeight: "1.8rem"}],
      sm: ["14px", {lineHeight: "20px"}],
      md: ["16px", {lineHeight: "1.8rem"}],
      base: ["18px", {lineHeight: "20px"}],
      lg: ["20px", {lineHeight: "20px"}],
      xl: ["24px", {lineHeight: "20px", letterSpacing: "1.3px"}],
      "2xl": ["30px", {lineHeight: "20px"}],
      "3xl": ["40px", {lineHeight: "1.4rem", letterSpacing: "2.4px"}],
      "4xl": ["48px", {lineHeight: "1.4rem", letterSpacing: "2.4px"}],
      "5xl": ["60px", {lineHeight: "1.4rem"}],
    },
    boxShadow: {
      sm: "-7 0px 5px rgba(71,71,71,.2)",
      md: "0 0px 5px rgba(71,71,71,.2)",
      lg: "0 0px 10px rgba(71,71,71,.2)",
      xl: "0 0px 10px rgba(21,19,19,.1)",
      "2xl": "0 5px 20px rgba(21,19,19,.4)",
    },
    backgroundImage: {},
    fontFamily: {
      Poppins: ["Poppins", ...fontFamily.sans],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
  },
  plugins: [],
};
export default config;
