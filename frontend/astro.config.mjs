import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    integrations: [
        react(),
        tailwind({
            applyBaseStyles: false,
        }),
        sitemap(),
    ],
    output: 'server',
    adapter: vercel(),
    site: 'https://jeddahpalaces.vercel.app',
    image: {
        domains: ['cdn.sanity.io'],
    },
});
