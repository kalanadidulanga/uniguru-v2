import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true, // Fixed to boolean instead of string
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "my-orange": "#F48C06",
        "my-blue": "#2F327D",
        "liter-orange": "#FFF2E1",
        "my-violet": "#3891A6",
        "my-gray": "#464646",
        "my-gray2": "#696984",
        "my-black": "#252641",
        "my-color01": "#525596",
        "my-color02": "#F67766",
        "my-color03": "#545AE8",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0px)" },
        },
        scroll: {
          to: {
            transform: "translate(-50%)",
          },
        },
        "scroll-reverse": {
          from: { transform: "translate(-50%)" },
          to: { transform: "translate(0)" },
        },
        "scroll-3": {
          to: { transform: "translate(-33.333%)" },
        },
        "scroll-reverse-3": {
          from: { transform: "translate(-33.333%)" },
          to: { transform: "translate(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        blob: "blob 7s infinite",
        float: "float 6s ease-in-out infinite",
        scroll: "scroll 40s linear infinite",
        "scroll-reverse": "scroll-reverse 40s linear infinite",
        "scroll-3": "scroll-3 40s linear infinite",
        "scroll-reverse-3": "scroll-reverse-3 40s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
