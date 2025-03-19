// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-bakery.pages.dev', // Sostituisci con l'URL del tuo sito su Cloudflare Pages
  vite: {
    plugins: [tailwindcss()]
  }
});