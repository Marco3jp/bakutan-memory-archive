import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: "https://marco3jp.github.io",
    base: "/bakutan-memory-archive/",
    build: {
        format: 'file'
    },
    integrations: [react(), tailwind()],
});