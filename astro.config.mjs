// @ts-check
import { defineConfig } from 'astro/config';
import db from '@astrojs/db';
import auth from 'auth-astro';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    db({
      // Use local database file for builds
      dbUrl: process.env.ASTRO_DATABASE_FILE ? `file:${process.env.ASTRO_DATABASE_FILE}` : undefined
    }),
    auth()
  ],
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  vite: {
    plugins: [tailwindcss()]
  }
});