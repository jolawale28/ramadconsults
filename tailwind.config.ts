// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        primaryColor: "var(--primaryColor)",
      },
    },
  },
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
};

export default config;
