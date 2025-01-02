import { colors } from "./src/theme/index";
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
        background: "var(--background)",
        foreground: "var(--foreground)",
        grey: {
          default: colors.grey.dark.default,
          "50": colors.grey.dark["50"],
          "100": colors.grey.dark["100"],
          "200": colors.grey.dark["200"],
          "300": colors.grey.dark["300"],
          "400": colors.grey.dark["400"],
          "500": colors.grey.dark["500"],
          "600": colors.grey.dark["600"],
          "700": colors.grey.dark["700"],
          "800": colors.grey.dark["800"],
          "900": colors.grey.dark["900"],
          "950": colors.grey.dark["950"],
        },
        emerald: {
          "500": colors.emerald["500"],
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
