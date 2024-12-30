import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#191919",
        boxBackground: "#363636",
        textColor: "#CCC",
        linkColor: "#A7A7A7",
        chipBg: "#61249278",
        chipText: "#fcfcfc",
      },
      boxShadow: {
        custom: "2px 2px 100px 0px rgba(0, 0, 0, 0.20)",
      },
    },
  },
  plugins: [],
} satisfies Config;
