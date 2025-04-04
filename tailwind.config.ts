import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#167d83", // Primary Teal
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#EE4C23", // Accent Coral
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom brand colors
        teal: {
          DEFAULT: "#167d83", // Primary Teal
          deep: "#0e5a5f", // Deep Teal
          light: "#7ac8cd", // Light Teal
          pale: "#e6f5f6", // Pale Teal
        },
        coral: {
          DEFAULT: "#EE4C23", // Accent Coral
          light: "#f7a18c", // Coral Light
        },
        beige: {
          DEFAULT: "#fef6e9", // Warm Beige
        },
        charcoal: "#2c3e50", // Charcoal
        slate: "#7f8c8d", // Slate Grey
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-10px) translateX(10px)' },
          '50%': { transform: 'translateY(-20px) translateX(0)' },
          '75%': { transform: 'translateY(-10px) translateX(-10px)' },
        },
        "float-delay": {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(10px) translateX(-10px)' },
          '50%': { transform: 'translateY(20px) translateX(0)' },
          '75%': { transform: 'translateY(10px) translateX(10px)' },
        },
        "pulse-opacity": {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        "scale-up-down": {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        "slide-up": {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        "slide-in-right": {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        "zoom-in": {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 8s ease-in-out infinite",
        "float-delay": "float-delay 8s ease-in-out infinite",
        "pulse-opacity": "pulse-opacity 3s ease-in-out infinite",
        "scale-up-down": "scale-up-down 5s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
        "zoom-in": "zoom-in 0.5s ease-out",
      },
      boxShadow: {
        'glow': '0 0 15px rgba(22, 125, 131, 0.5)',
        'coral-glow': '0 0 15px rgba(238, 76, 35, 0.5)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

