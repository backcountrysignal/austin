import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import rehypeHighlight from 'rehype-highlight';

export default defineConfig({
  site: 'https://grahamcountymesh.org',
  trailingSlash: '/',
  build: { format: 'directory' },
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [rehypeHighlight],
  },
  integrations: [mdx(), sitemap({ filter: (page) => !page.includes('/search/') })],
});
