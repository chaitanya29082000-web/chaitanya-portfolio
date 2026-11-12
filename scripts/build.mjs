import { cpSync, mkdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderHome, render404 } from '../src/page.js';
import { site } from '../src/data/site.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const publicDir = join(root, 'public');

function write(relativePath, contents) {
  const target = join(dist, relativePath);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, contents, 'utf8');
}

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

cpSync(publicDir, dist, { recursive: true });
mkdirSync(join(dist, 'styles'), { recursive: true });
mkdirSync(join(dist, 'scripts'), { recursive: true });
cpSync(join(root, 'src', 'styles', 'main.css'), join(dist, 'styles', 'main.css'));
cpSync(join(root, 'src', 'scripts', 'main.js'), join(dist, 'scripts', 'main.js'));

write('index.html', renderHome());
write('404.html', render404());

const siteUrl = site.siteUrl.replace(/\/$/, '');
const lastmod = new Date().toISOString().slice(0, 10);

write(
  'sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`,
);

write(
  'robots.txt',
  `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`,
);

const files = [
  'index.html',
  '404.html',
  'styles/main.css',
  'scripts/main.js',
  'sitemap.xml',
  'robots.txt',
  'favicon.svg',
  'og.svg',
  'site.webmanifest',
];

const sizes = files.map((file) => {
  const bytes = statSync(join(dist, file)).size;
  return `${file.padEnd(22)} ${(bytes / 1024).toFixed(1).padStart(7)} KB`;
});

const html = readFileSync(join(dist, 'index.html'), 'utf8');
console.log('Built dist/');
console.log(sizes.join('\n'));
console.log(
  `\nHTML ${(html.length / 1024).toFixed(1)} KB · ${site.projects.length} projects · ${site.contributions.length} public PRs`,
);
