import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";
//import tailwindcss from '@tailwindcss/vite';

/*
  vite: {
    plugins: [tailwindcss()],
  },
*/

export default defineConfig({
  site: 'https://digitalnorthstar.github.io',
  base: '/',
  output: 'static',
  integrations: [mdx(), tailwind()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});