import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import keystatic from '@keystatic/astro';

// https://astro.build/config
export default defineConfig(({ command }) => {
  const isDev = command === 'dev';

  return {
    site: 'https://kemicza.com',
    output: 'static',
    integrations: [
      react(),
      // Keystatic is only needed for the CMS interface during local development.
      // For static GitHub Pages builds, we exclude it to avoid SSR requirements.
      ...(isDev ? [keystatic()] : [])
    ],
    vite: {
      plugins: [tailwindcss()]
    },
    prefetch: true
  };
});
