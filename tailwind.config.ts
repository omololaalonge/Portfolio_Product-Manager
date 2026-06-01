import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#172033",
        muted: "#5f6f86",
        line: "#d9e1ec",
        surface: "#ffffff",
        blue: {
          calm: "#2563eb",
          soft: "#dbeafe",
        },
        purple: {
          soft: "#ede9fe",
          accent: "#7c3aed",
        },
      },
      boxShadow: {
        soft: "0 18px 50px rgba(23, 32, 51, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
