import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://devotionroom.github.io',
  base: '/sunday-school',
  integrations: [mdx()],
});
