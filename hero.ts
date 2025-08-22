import { heroui } from "@heroui/react";

// HeroUI plugin configuration for Tailwind CSS v4
export default heroui({
  themes: {
    light: {
      colors: {
        background: "hsl(0 0% 100%)",
        foreground: "hsl(240 10% 3.9%)",
        primary: {
          DEFAULT: "hsl(240 5.9% 10%)",
          foreground: "hsl(0 0% 98%)",
        },
        secondary: {
          DEFAULT: "hsl(240 4.8% 95.9%)",
          foreground: "hsl(240 5.9% 10%)",
        },
      },
    },
    dark: {
      colors: {
        background: "hsl(217 32% 12%)",
        foreground: "hsl(0 0% 98%)",
        primary: {
          DEFAULT: "hsl(0 0% 98%)",
          foreground: "hsl(240 5.9% 10%)",
        },
        secondary: {
          DEFAULT: "hsl(217 32% 35%)",
          foreground: "hsl(0 0% 98%)",
        },
      },
    },
  },
});
