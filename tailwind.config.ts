import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: "#FDF5F6",
          100: "#F9E8EC",
          200: "#EFC5CD",
          300: "#DF92A3",
          400: "#C95D76",
          500: "#B13A58",
          600: "#A52840",
          700: "#8B1E35",
          800: "#6B1528",
          900: "#4A0E1B",
          950: "#2D0810",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          50: "#FBF8F3",
          100: "#F5EDE0",
          200: "#E8D5B5",
          300: "#DCC29A",
          400: "#D0AE7E",
          500: "#C5A572",
          600: "#B08C55",
          700: "#8F7040",
          800: "#6E5530",
          900: "#4D3B22",
          950: "#2E2314",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          50: "#F0F4FA",
          100: "#D9E2F0",
          200: "#B3C5E0",
          300: "#7A9BC7",
          400: "#4A73A8",
          500: "#2B5294",
          600: "#1E3A6E",
          700: "#162D57",
          800: "#0F1D3A",
          900: "#0A1428",
          950: "#050A16",
        },
        neutral: {
          0: "#FFFFFF",
          50: "#F8F9FA",
          100: "#F1F3F5",
          200: "#E9ECEF",
          300: "#DEE2E6",
          400: "#CED4DA",
          500: "#ADB5BD",
          600: "#6C757D",
          700: "#495057",
          800: "#343A40",
          900: "#212529",
          950: "#0A0A0F",
        },
        success: {
          500: "#2D6A4F",
          600: "#1B4332",
        },
        warning: {
          500: "#E9C46A",
          600: "#CA8A04",
        },
        danger: {
          500: "#BC4749",
          600: "#9B2226",
        },
        info: {
          500: "#457B9D",
          600: "#1D3557",
        },
        cambridge: {
          red: "#C8102E",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        arabic: ["var(--font-arabic)", "sans-serif"],
        "arabic-display": ["var(--font-arabic-display)", "serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        DEFAULT: "8px",
        xl: "16px",
        "2xl": "24px",
      },
      boxShadow: {
        elevation1: "0 1px 2px rgba(0,0,0,0.05)",
        elevation2: "0 4px 12px rgba(0,0,0,0.08)",
        elevation3: "0 8px 24px rgba(0,0,0,0.12)",
        elevation4: "0 16px 48px rgba(0,0,0,0.16)",
        glow: "0 0 20px rgba(139,30,53,0.15)",
      },
      maxWidth: {
        container: "1400px",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      transitionDuration: {
        fast: "150ms",
        normal: "250ms",
        slow: "400ms",
        slower: "600ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
        out: "cubic-bezier(0, 0, 0.2, 1)",
        in: "cubic-bezier(0.4, 0, 1, 1)",
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
        "gallery-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gallery-scroll": "gallery-scroll 45s linear infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
