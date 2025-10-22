// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },

  env: {
    schema: {
      STRAPI_API_TOKEN: envField.string({ context: 'server', access: 'secret' }),
      STRAPI_API_URL: envField.string({ context: 'server', access: 'public' })
    }
  },

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: node({
    mode: 'standalone'
  }),

  output: 'server'
});