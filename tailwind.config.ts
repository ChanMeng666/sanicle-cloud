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
          DEFAULT: "#167D83", // 品牌青绿色
          foreground: "hsl(var(--primary-foreground))",
          deep: "#0A6066", // 深青绿色
          light: "#5AACB0", // 浅青绿色
          pale: "#E0F2F3", // 淡青绿色
        },
        secondary: {
          DEFAULT: "#EE4C23", // 珊瑚红
          foreground: "hsl(var(--secondary-foreground))",
          light: "#F39180", // 浅珊瑚红
        },
        tertiary: {
          DEFAULT: "#F9ECE8", // 浅珊瑚色/米色
          deep: "#F0D9D1", // 深一点的米色
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
        success: "#2ECC71", // 成功绿
        warning: "#F39C12", // 警告黄
        error: "#E74C3C", // 错误红
        info: "#3498DB", // 信息蓝
        // 次要色
        neutral: {
          50: "#FAFAFA", // 近白色
          100: "#F5F5F5", // 非常浅灰
          200: "#E5E5E5", // 浅灰
          300: "#D4D4D4", // 中浅灰
          400: "#A3A3A3", // 中灰
          500: "#737373", // 中深灰
          600: "#525252", // 深灰
          700: "#404040", // 非常深灰
          800: "#262626", // 近黑灰
          900: "#171717", // 近黑色
        },
        teal: {
          50: "#EFFAFA", // 最浅青
          100: "#DEF5F5", // 非常浅青
          200: "#BDEAEB", // 浅青
          300: "#88D9DB", // 中浅青
          400: "#5AACB0", // 中青
          500: "#167D83", // 品牌青
          600: "#0A6066", // 深青
          700: "#074F54", // 非常深青
          800: "#053B3F", // 极深青
          900: "#032A2D", // 近黑青
        },
        coral: {
          50: "#FDF5F3", // 最浅珊瑚
          100: "#F9ECE8", // 非常浅珊瑚
          200: "#F7D9D0", // 浅珊瑚
          300: "#F5C5B7", // 中浅珊瑚
          400: "#F39180", // 中珊瑚
          500: "#EE4C23", // 珊瑚红
          600: "#D83A14", // 深珊瑚
          700: "#B22F10", // 非常深珊瑚
          800: "#8C250D", // 极深珊瑚
          900: "#661B09", // 近黑珊瑚
        },
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

