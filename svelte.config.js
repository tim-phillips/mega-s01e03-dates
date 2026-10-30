import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { fileURLToPath } from 'node:url';

export default {
  extensions: ['.svelte', '.svx'],
  preprocess: [
    vitePreprocess(),
    mdsvex({ layout: { runbook: fileURLToPath(new URL('./src/lib/layouts/runbook.svelte', import.meta.url)) } }),
  ],
  kit: {
    // The rendered pages are committed to rendered/: one self-contained HTML file each.
    adapter: adapter({ pages: 'rendered', assets: 'rendered', strict: true }),
    alias: { '#lib': 'src/lib' },
    inlineStyleThreshold: Infinity,
  },
};
