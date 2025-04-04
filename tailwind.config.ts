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
          deep: "#0e5a5f", // Deep Teal
          light: "#7ac8cd", // Light Teal
          pale: "#e6f5f6", // Pale Teal
        },
        secondary: {
          DEFAULT: "#EE4C23", // Accent Coral
          foreground: "hsl(var(--secondary-foreground))",
          light: "#f7a18c", // Coral Light
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
        // 功能色
        success: "#2ecc71", // Success green
        warning: "#f1c40f", // Warning yellow
        error: "#e74c3c", // Error red
        info: "#3498db", // Info blue
        // 新增更多背景色选项
        beige: {
          DEFAULT: "#fef6e9", // Warm Beige
          light: "#fffdf9",
          dark: "#f9ebd6",
        },
        charcoal: "#2c3e50", // Charcoal
        slate: "#7f8c8d", // Slate Grey
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1rem",
        "2xl": "1.5rem",
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
        "rotate-slow": {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        "bounce-subtle": {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
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
        "rotate-slow": "rotate-slow 20s linear infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
      },
      boxShadow: {
        'glow': '0 0 15px rgba(22, 125, 131, 0.5)',
        'coral-glow': '0 0 15px rgba(238, 76, 35, 0.5)',
        'card': '0 4px 12px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'button': '0 2px 6px rgba(22, 125, 131, 0.25)',
        'button-hover': '0 4px 12px rgba(22, 125, 131, 0.4)',
      },
      gridTemplateColumns: {
        'auto-fill-250': 'repeat(auto-fill, minmax(250px, 1fr))',
        'auto-fill-300': 'repeat(auto-fill, minmax(300px, 1fr))',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

