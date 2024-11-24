/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "dark-green": "#003E37",
                "medium-soft-green": "#406E69",
                "medium-soft-green-transparency": "rgba(64, 110, 105, 0.43)",
                "separator-color": "rgba(0, 62, 55, 0.25)",
                "soft-gray": "#F0F6F4",
                "text-color-general": "#292D32",
                "text-color-soft": "#B5B7C0",
                "alarm": "#FF4541",
                "alarm-circle": "rgba(255, 69, 65, 0.40)",
                "risk": "#E38B26",
                "risk-circle": "rgba(255, 162, 56, 0.40)",
                "in-range": "#003E37",
                "in-range-circle": "rgba(64, 110, 105, 0.30)"
            },
            dropShadow: {
                "primary-shadow": "0px 23px 28.6px 0px rgba(0, 0, 0, 0.03)",
            },
            fontFamily: {
                sans: ['"Hanken Grotesk"', 'sans-serif'],
                hanken: ['"Hanken Grotesk"', 'sans-serif'],
            },
            scrollbarWidth: {
                thin: 'thin',
            },
            borderRadius: {
                'scrollbar': '8px',
            },
        },
    },
    plugins: [
        require('tailwind-scrollbar'),
    ],
}

