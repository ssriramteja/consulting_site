import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#0B1120", // Deepest Navy
                    light: "#1E293B", // Slate 800
                    dark: "#020617", // Slate 950
                    accent: "#334155", // Slate 700
                },
                secondary: {
                    DEFAULT: "#DC2626", // Red 600
                    light: "#EF4444", // Red 500
                    dark: "#B91C1C", // Red 700
                },
                accent: {
                    DEFAULT: "#F59E0B", // Amber 500
                    glow: "#FBBF24", // Amber 400
                },
                background: "#FFFFFF",
                surface: "#F8FAFC", // Slate 50
                "surface-dark": "#0F172A", // Slate 900
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
};
export default config;
