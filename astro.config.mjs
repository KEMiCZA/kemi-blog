// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import keystatic from '@keystatic/astro';
import node from '@astrojs/node';

const isStaticBuild = process.env.SKIP_KEYSTATIC === 'true';

// https://astro.build/config
export default defineConfig({
  site: 'https://kemicza.com',
  output: 'static',
  integrations: [
    react(),
    ...(isStaticBuild ? [] : [keystatic()])
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  adapter: isStaticBuild ? undefined : node({
    mode: 'standalone'
  })
});

