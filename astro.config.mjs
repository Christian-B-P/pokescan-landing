import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://Christian-B-P.github.io/pokescan-landing/',
  base: '/pokescan-landing/',
  integrations: [sitemap()]
});
