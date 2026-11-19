import { readFile, writeFile } from 'node:fs/promises';
import { renderWorkshop } from '../.local-tools/prerender/entry-server.js';

const index = new URL('../dist/index.html', import.meta.url);
const html = await readFile(index, 'utf8');
const root = '<div id="root"></div>';

if (!html.includes(root)) throw new Error('The production HTML is missing the workshop root.');

await writeFile(index, html.replace(root, () => '<div id="root">' + renderWorkshop() + '</div>'));
console.log('Pre-rendered the workshop into dist/index.html.');
