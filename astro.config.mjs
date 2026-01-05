// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import keystatic from '@keystatic/astro';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://kemicza.com',
  output: 'static', // Back to static as hybrid is deprecated/same
  integrations: [
    react(),
    ...(process.env.SKIP_KEYSTATIC ? [] : [keystatic()])
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  adapter: node({
    mode: 'standalone'
  })
});
