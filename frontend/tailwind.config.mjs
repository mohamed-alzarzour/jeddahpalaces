/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#2E2D2B',
                secondary: '#C5B080',
                accent: '#8B775C',
                'extra-1': '#F8F5EE',
                'extra-2': '#6A5D4D',
            },
            fontFamily: {
                sans: ['Poppins', 'Noto Kufi Arabic', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
