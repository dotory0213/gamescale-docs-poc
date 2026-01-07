/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#3182F6', // Vivid Blue (Toss Blue)
                    dark: '#1B64DA',
                    light: '#E8F3FF'
                },
                dark: {
                    DEFAULT: '#191F28', // Grey 900
                    secondary: '#333D4B', // Grey 800
                    accent: '#4E5968', // Grey 700
                },
                grey: {
                    50: '#F9FAFB', // Background
                    100: '#F2F4F6', // Card Bg
                    200: '#E5E8EB',
                    300: '#D1D6DB',
                    400: '#B0B8C1',
                    500: '#8B95A1', // Subtext
                    600: '#6B7684',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
            },
            boxShadow: {
                'toss': '0 4px 20px rgba(0, 0, 0, 0.08)',
                'toss-hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
            }
        },
    },
    plugins: [],
}
