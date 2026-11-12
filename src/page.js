import { site } from './data/site.js';
import { layout } from './layout.js';
import { hero } from './components/hero.js';
import { work } from './components/work.js';
import { openSource } from './components/openSource.js';
import { about } from './components/about.js';
import { toolkit } from './components/toolkit.js';
import { journey } from './components/journey.js';
import { contact } from './components/contact.js';
import { asset, escapeHtml } from './components/utils.js';
import { icon } from './components/icons.js';

export function renderHome() {
  return layout({
    title: 'Chaitanya Bhambere — Open-Source Developer & GSoC Aspirant',
    description: site.description,
    body: [hero(), work(), openSource(), about(), toolkit(), journey(), contact()].join('\n'),
  });
}

export function render404() {
  const body = `
    <section class="not-found" aria-labelledby="not-found-title">
      <div class="not-found__glow" aria-hidden="true"></div>
      <div class="container not-found__inner">
        <p class="eyebrow">404 / Off the map</p>
        <h1 id="not-found-title">This page drifted<br><em>out of the graph.</em></h1>
        <p class="not-found__copy">
          The link may be old, or the page may have moved. The work is still one
          click away.
        </p>
        <div class="not-found__actions">
          <a class="button button--primary" href="${asset('')}">
            ${icon('arrowRight', 'button__icon button__icon--back')}
            <span>Back to the portfolio</span>
          </a>
          <a class="button button--ghost" href="${site.githubUrl}" target="_blank" rel="noopener noreferrer">
            ${icon('github', 'button__icon')}
            <span>GitHub profile</span>
            ${icon('arrowUpRight', 'button__icon button__icon--end')}
          </a>
        </div>
        <p class="not-found__meta">${escapeHtml(site.name)} · ${escapeHtml(site.location)}</p>
      </div>
    </section>`;

  return layout({
    title: 'Page not found — Chaitanya Bhambere',
    description: 'That page does not exist. Return to Chaitanya Bhambere’s portfolio.',
    body,
    canonical: `${site.siteUrl.replace(/\/$/, '')}/404.html`,
    noindex: true,
  });
}
