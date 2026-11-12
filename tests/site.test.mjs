import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { site } from '../src/data/site.js';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = join(root, 'dist');
const read = (file) => readFileSync(join(dist, file), 'utf8');
const html = read('index.html');
const notFound = read('404.html');
const css = read('styles/main.css');
const js = read('scripts/main.js');

const anchors = [...html.matchAll(/<a\b[^>]*>/g)].map((match) => match[0]);
const hrefOf = (tag) => tag.match(/href="([^"]+)"/)?.[1];

test('home page has complete SEO metadata', () => {
  assert.match(html, /<html lang="en">/);
  assert.match(
    html,
    /<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">/,
  );
  assert.match(
    html,
    /<title>Chaitanya Bhambere — Open-Source Developer &amp; GSoC Aspirant<\/title>/,
  );
  assert.match(html, /<meta name="description" content="[^"]{80,220}">/);
  assert.match(
    html,
    new RegExp(
      `<link rel="canonical" href="${site.siteUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/">`,
    ),
  );
  assert.match(html, /<meta property="og:title"/);
  assert.match(html, /<meta property="og:description"/);
  assert.match(
    html,
    new RegExp(
      `<meta property="og:image" content="${site.siteUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/og\\.png">`,
    ),
  );
  assert.match(html, /<meta property="og:image:type" content="image\/png">/);
  assert.ok(
    html.includes(
      `<link rel="apple-touch-icon" href="${site.basePath.endsWith('/') ? site.basePath : `${site.basePath}/`}apple-touch-icon.png">`,
    ),
  );
  assert.match(html, /<meta name="twitter:card" content="summary_large_image">/);
  assert.match(html, /<meta name="robots" content="index, follow, max-image-preview:large">/);
  assert.ok(!html.includes('fonts.googleapis.com'));
  assert.ok(!html.includes('fonts.gstatic.com'));
});

test('structured data is valid and contains only public identity data', () => {
  const match = html.match(/<script type="application\/ld\+json">([\s\S]+?)<\/script>/);
  assert.ok(match, 'JSON-LD script is missing');
  const data = JSON.parse(match[1]);
  assert.equal(data['@context'], 'https://schema.org');

  const person = data['@graph'].find((node) => node['@type'] === 'Person');
  assert.ok(person);
  assert.equal(person.name, site.name);
  assert.equal(person.jobTitle, 'Aspiring open-source contributor and software developer');
  assert.ok(person.sameAs.includes(site.githubUrl));
  assert.equal(person.email, undefined);
  assert.equal(person.telephone, undefined);

  const website = data['@graph'].find((node) => node['@type'] === 'WebSite');
  assert.ok(website);
  assert.equal(website.url, `${site.siteUrl}/`);
});

test('all section anchors resolve and IDs are unique', () => {
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  assert.deepEqual(duplicates, [], `Duplicate IDs: ${duplicates.join(', ')}`);

  for (const tag of anchors) {
    const href = hrefOf(tag);
    if (!href?.startsWith('#')) continue;
    const id = href.slice(1);
    assert.ok(id.length > 0, 'Empty anchor href');
    assert.ok(ids.includes(id), `Missing anchor target: ${href}`);
  }

  for (const id of ['work', 'open-source', 'about', 'toolkit', 'focus', 'contact']) {
    assert.ok(ids.includes(id), `Missing section: ${id}`);
    assert.ok(html.includes(`aria-labelledby="${id}-title"`), `Missing label for ${id}`);
  }
});

test('external links are secure and open safely', () => {
  for (const tag of anchors) {
    const href = hrefOf(tag);
    if (!href?.startsWith('https://')) {
      assert.ok(!href?.startsWith('http://'), `Insecure link: ${href}`);
      continue;
    }
    assert.match(tag, /target="_blank"/, `Missing target on ${href}`);
    assert.match(tag, /rel="noopener noreferrer"/, `Missing rel on ${href}`);
  }
});

test('every button has an explicit type', () => {
  const buttons = [...html.matchAll(/<button\b[^>]*>/g)].map((match) => match[0]);
  assert.ok(buttons.length >= 3);
  for (const button of buttons) {
    assert.match(button, /type="button"/);
  }
});

test('verified project and pull request links are present', () => {
  for (const project of site.projects) {
    assert.ok(html.includes(project.name), `Missing project: ${project.name}`);
    for (const link of project.links) {
      assert.ok(html.includes(link.href), `Missing project link: ${link.href}`);
    }
  }

  for (const contribution of site.contributions) {
    assert.ok(html.includes(contribution.url), `Missing PR link: ${contribution.url}`);
    assert.ok(html.includes(contribution.status), `Missing PR status: ${contribution.status}`);
  }

  assert.equal(site.contributions.length, 4);
  assert.equal(site.contributions.filter((item) => item.status === 'Merged').length, 1);
});

test('content contains no placeholders, secrets, or unverified claims', () => {
  const forbiddenContent = [
    'lorem ipsum',
    'example.com',
    'John Doe',
    'your@email',
    'TODO',
    'TBD',
    'href="#"',
    'placeholder',
    'undefined',
    'MLH',
    'UPAI',
    'Swags',
    'winner',
    'award',
    'certified',
    'Computer Science student',
    'B.Tech',
    'university',
    'internship',
    'resume.pdf',
  ];

  for (const value of forbiddenContent) {
    assert.ok(!html.toLowerCase().includes(value.toLowerCase()), `Unexpected content: ${value}`);
  }

  const secretPatterns = [
    /ghp_[A-Za-z0-9]{20,}/,
    /github_pat_[A-Za-z0-9_]{20,}/,
    /sk-[A-Za-z0-9]{20,}/,
    /AKIA[0-9A-Z]{16}/,
    /BEGIN (RSA |EC |OPENSSH )?PRIVATE KEY/,
    /OPENROUTER_API_KEY\s*=\s*[^\s<]+/,
  ];

  for (const pattern of secretPatterns) {
    assert.ok(!pattern.test(html), `Potential secret detected: ${pattern}`);
  }
});

test('contact details are limited to verified public links', () => {
  assert.ok(html.includes(`mailto:${site.email}`));
  assert.ok(html.includes(`href="${site.githubUrl}"`));
  assert.ok(!html.includes('tel:'));
  assert.ok(!html.includes('linkedin.com'));
  assert.ok(!html.includes('instagram.com'));
  assert.ok(!html.includes('twitter.com'));
});

test('404 page exists, is noindex, and links home', () => {
  assert.match(notFound, /<meta name="robots" content="noindex, nofollow">/);
  assert.match(notFound, /This page drifted/);
  assert.ok(notFound.includes(`href="${site.basePath || '/'}"`));
  assert.match(notFound, /Page not found/);
});

test('robots.txt and sitemap.xml use the canonical origin', () => {
  const robots = read('robots.txt');
  const sitemap = read('sitemap.xml');
  assert.match(robots, /User-agent: \*/);
  assert.ok(robots.includes(`Sitemap: ${site.siteUrl}/sitemap.xml`));
  assert.ok(sitemap.includes(`<loc>${site.siteUrl}/</loc>`));
  assert.match(sitemap, /<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/);
});

test('assets exist and stay within a performance budget', () => {
  const assets = [
    'favicon.svg',
    'og.svg',
    'og.png',
    'apple-touch-icon.svg',
    'apple-touch-icon.png',
    'site.webmanifest',
    'styles/main.css',
    'scripts/main.js',
    'fonts/inter-var.woff2',
    'fonts/instrument-serif.woff2',
    'fonts/instrument-serif-italic.woff2',
    'fonts/ibm-plex-mono-400.woff2',
    'fonts/ibm-plex-mono-500.woff2',
  ];

  for (const asset of assets) {
    const path = join(dist, asset);
    assert.ok(existsSync(path), `Missing asset: ${asset}`);
    assert.ok(statSync(path).size > 100, `Suspiciously small asset: ${asset}`);
  }

  assert.ok(statSync(join(dist, 'index.html')).size < 90 * 1024, 'HTML is too large');
  assert.ok(statSync(join(dist, 'styles/main.css')).size < 70 * 1024, 'CSS is too large');
  assert.ok(statSync(join(dist, 'scripts/main.js')).size < 25 * 1024, 'JS is too large');
});

test('accessibility and motion safeguards are present', () => {
  assert.ok(html.includes('class="skip-link" href="#main"'));
  assert.ok(html.includes('aria-label="Primary"'));
  assert.ok(html.includes('aria-expanded="false"'));
  assert.ok(html.includes('aria-controls="mobile-menu"'));
  assert.ok(css.includes(':focus-visible'));
  assert.ok(css.includes('@media (prefers-reduced-motion: reduce)'));
  assert.ok(css.includes('@media (max-width: 720px)'));
  assert.ok(js.includes('prefers-reduced-motion'));
  assert.ok(js.includes('IntersectionObserver'));
  assert.ok(js.includes('navigator.clipboard'));
  assert.ok(!js.includes('eval('));
});

test('open graph image is a valid SVG with social dimensions', () => {
  const og = read('og.svg');
  assert.match(og, /<svg[^>]+width="1200"[^>]+height="630"/);
  assert.ok(og.includes('Chaitanya'));
  assert.ok(og.includes('builds in public'));
});

test('social and touch icons are valid PNGs at the expected sizes', () => {
  const pngSize = (file) => {
    const buffer = readFileSync(join(dist, file));
    const signature = buffer.subarray(0, 8).toString('hex');
    assert.equal(signature, '89504e470d0a1a0a', `${file} is not a PNG`);
    return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
  };

  assert.deepEqual(pngSize('og.png'), { width: 1200, height: 630 });
  assert.deepEqual(pngSize('apple-touch-icon.png'), { width: 180, height: 180 });
  assert.ok(statSync(join(dist, 'og.png')).size < 400 * 1024, 'Social image is too large');
});
