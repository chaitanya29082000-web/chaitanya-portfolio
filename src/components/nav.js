import { site } from '../data/site.js';
import { icon } from './icons.js';
import { escapeHtml } from './utils.js';

export function nav() {
  const links = site.nav
    .map((item) => `<li><a class="nav-link" href="${item.href}">${escapeHtml(item.label)}</a></li>`)
    .join('');

  const mobileLinks = site.nav
    .map(
      (item) =>
        `<li><a class="mobile-nav__link" href="${item.href}" data-menu-link>${escapeHtml(item.label)}<span aria-hidden="true">↗</span></a></li>`,
    )
    .join('');

  return `
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header" data-header>
    <nav class="nav container" aria-label="Primary">
      <a class="brand" href="#top" aria-label="${escapeHtml(site.name)} — home">
        <span class="brand__mark" aria-hidden="true">C<span>.</span></span>
        <span class="brand__text">${escapeHtml(site.displayName)}</span>
      </a>

      <ul class="nav-links">
        ${links}
      </ul>

      <div class="nav-actions">
        <a class="icon-button nav-github" href="${site.githubUrl}" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in a new tab)">
          ${icon('github')}
        </a>
        <button class="icon-button theme-toggle" type="button" data-theme-toggle aria-label="Switch to light theme" aria-pressed="false">
          ${icon('moon', 'theme-icon theme-icon--moon')}
          ${icon('sun', 'theme-icon theme-icon--sun')}
        </button>
        <button class="icon-button menu-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="mobile-menu" aria-label="Open navigation menu">
          ${icon('menu', 'menu-icon menu-icon--open')}
          ${icon('close', 'menu-icon menu-icon--close')}
        </button>
      </div>
    </nav>

    <div class="mobile-menu" id="mobile-menu" hidden>
      <div class="mobile-menu__inner container">
        <p class="eyebrow">Navigate</p>
        <ul class="mobile-nav">
          ${mobileLinks}
        </ul>
        <div class="mobile-menu__meta">
          <a class="mobile-menu__social" href="${site.githubUrl}" target="_blank" rel="noopener noreferrer">
            ${icon('github')} <span>GitHub</span>
          </a>
          <a class="mobile-menu__social" href="mailto:${site.email}">
            ${icon('mail')} <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  </header>`;
}
