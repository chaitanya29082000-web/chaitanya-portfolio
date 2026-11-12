import { site } from '../data/site.js';

export function asset(path) {
  const clean = path.replace(/^\/+/, '');
  const base = site.basePath.endsWith('/') ? site.basePath : `${site.basePath}/`;
  return `${base}${clean}`;
}

export function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export function externalAttrs(external = false) {
  return external ? ' target="_blank" rel="noopener noreferrer"' : '';
}

export function sectionHead({ index, label, title, lede = '', id = '' }) {
  return `
    <header class="section-head${id ? ` section-head--${id}` : ''}">
      <div class="section-kicker">
        <span class="section-index">${escapeHtml(index)}</span>
        <span class="section-rule" aria-hidden="true"></span>
        <span class="eyebrow">${escapeHtml(label)}</span>
      </div>
      <div class="section-head__body">
        <h2 class="section-title"${id ? ` id="${id}-title"` : ''}>${title}</h2>
        ${lede ? `<p class="section-lede">${lede}</p>` : ''}
      </div>
    </header>`;
}
