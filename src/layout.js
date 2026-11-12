import { site } from './data/site.js';
import { asset, escapeHtml } from './components/utils.js';
import { nav } from './components/nav.js';
import { footer } from './components/footer.js';

function structuredData(canonical, title) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${canonical}#person`,
        name: site.name,
        url: canonical,
        jobTitle: 'Aspiring open-source contributor and software developer',
        description: site.description,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Nanded',
          addressRegion: 'Maharashtra',
          addressCountry: 'IN',
        },
        sameAs: [site.githubUrl],
        knowsAbout: [
          'Open-source software',
          'Python',
          'TypeScript',
          'Web development',
          'Developer tooling',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${canonical}#website`,
        url: canonical,
        name: `${site.name} — Portfolio`,
        description: site.description,
        inLanguage: 'en-IN',
        publisher: { '@id': `${canonical}#person` },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${canonical}#page`,
        url: canonical,
        name: title,
        isPartOf: { '@id': `${canonical}#website` },
        about: { '@id': `${canonical}#person` },
        mainEntity: { '@id': `${canonical}#person` },
      },
    ],
  };
}

export function layout({
  title,
  description = site.description,
  body,
  canonical = site.siteUrl,
  noindex = false,
}) {
  const canonicalUrl = `${canonical.replace(/\/$/, '')}/`;
  const ogImage = `${canonicalUrl}og.png`;
  const themeScript = `(function(){try{var d=document.documentElement;d.classList.add('js');var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}d.dataset.theme=t;d.style.colorScheme=t;}catch(e){document.documentElement.classList.add('js');document.documentElement.dataset.theme='dark';}})();`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <script>${themeScript}</script>

  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="author" content="${escapeHtml(site.name)}">
  <meta name="robots" content="${noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'}">
  <meta name="color-scheme" content="dark light">
  <meta name="theme-color" content="#08090a" media="(prefers-color-scheme: dark)">
  <meta name="theme-color" content="#f2f0e8" media="(prefers-color-scheme: light)">
  <link rel="canonical" href="${canonicalUrl}">
  <link rel="icon" href="${asset('favicon.svg')}" type="image/svg+xml">
  <link rel="apple-touch-icon" href="${asset('apple-touch-icon.png')}">
  <link rel="manifest" href="${asset('site.webmanifest')}">
  <link rel="sitemap" href="${asset('sitemap.xml')}" type="application/xml">

  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${escapeHtml(site.name)} — Portfolio">
  <meta property="og:locale" content="en_IN">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(site.ogDescription)}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:image" content="${ogImage}">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Chaitanya Bhambere — open-source contributor and software developer.">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(site.ogDescription)}">
  <meta name="twitter:image" content="${ogImage}">
  <meta name="twitter:image:alt" content="Chaitanya Bhambere — open-source contributor and software developer.">

  <link rel="preload" href="${asset('fonts/inter-var.woff2')}" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="${asset('fonts/instrument-serif.woff2')}" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="${asset('styles/main.css')}">

  <script type="application/ld+json">${JSON.stringify(structuredData(canonicalUrl, title))}</script>
</head>
<body>
  ${nav()}
  <main id="main">
    ${body}
  </main>
  ${footer()}
  <script type="module" src="${asset('scripts/main.js')}"></script>
</body>
</html>`;
}
