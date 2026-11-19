import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { event, formatDate, workshopDate } from './src/data/workshop.js';

function workshopMetadata(siteUrl) {
  const title = event.name + ' ' + event.year + ' | ' + event.conference + ' Workshop';
  const description = event.title + '. ' + formatDate(workshopDate) + ' in ' + event.location + '.';

  return {
    name: 'workshop-metadata',
    transformIndexHtml() {
      return [
        { tag: 'title', children: title },
        { tag: 'meta', attrs: { name: 'description', content: description } },
        { tag: 'meta', attrs: { property: 'og:title', content: title } },
        { tag: 'meta', attrs: { property: 'og:description', content: description } },
        { tag: 'meta', attrs: { property: 'og:site_name', content: event.name + ' ' + event.year } },
        ...(siteUrl ? [
          { tag: 'link', attrs: { rel: 'canonical', href: siteUrl } },
          { tag: 'meta', attrs: { property: 'og:url', content: siteUrl } },
          { tag: 'meta', attrs: { property: 'og:image', content: new URL('workshop-social.jpg', siteUrl).href } },
          { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
          { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
          { tag: 'meta', attrs: { property: 'og:image:alt', content: event.name + ' workshop title beside an abstract XR wireframe' } },
          { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
        ] : []),
      ];
    },
  };
}

export default defineConfig(({ mode }) => {
  const { VITE_BASE_PATH = '/', VITE_SITE_URL = '' } = loadEnv(mode, process.cwd(), 'VITE_');
  const path = VITE_BASE_PATH.trim();
  const segment = path.replace(/^\/+|\/+$/g, '');
  const base = path === './' ? path : segment ? '/' + segment + '/' : '/';
  const configuredUrl = VITE_SITE_URL.trim();
  const siteUrl = configuredUrl ? new URL(configuredUrl.replace(/\/?$/, '/')).href : '';
  return {
    base,
    // Vite normalizes BASE_URL to "/" in the server build when the client uses "./".
    define: { 'import.meta.env.VITE_WORKSHOP_ASSET_BASE': JSON.stringify(base) },
    build: { license: { fileName: 'third-party-licenses.md' } },
    plugins: [react(), tailwindcss(), workshopMetadata(siteUrl)],
  };
});
