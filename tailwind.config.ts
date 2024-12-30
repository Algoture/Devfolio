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
        accent: "#F8F32B",
        darkaccent: "#5928e5",
      },
      boxShadow: {
        sh2: "0 3px 10px rgb(0,0,0,0.2)",
        nxt: "0 8px 30px rgb(0,0,0,0.12);",
        sh: "0px 2px 3px -1px rgba(0, 0, 0, .1), 0px 1px 0px 0px rgba(25, 28, 33, .02), 0px 0px 0px 1px rgba(25, 28, 33, .08)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
} satisfies Config;
