import { site } from '../data/site.js';
import { icon } from './icons.js';
import { escapeHtml, sectionHead } from './utils.js';

export function contact() {
  return `
  <section class="section contact" id="contact" aria-labelledby="contact-title">
    <div class="container">
      ${sectionHead({
        index: '06',
        label: 'Contact',
        title: 'Let’s make something <em>useful.</em>',
        lede: 'I’m open to open-source collaboration, GSoC project discussions, and conversations about Python tooling or developer experience.',
        id: 'contact',
      })}

      <div class="contact-grid">
        <div class="contact-main reveal">
          <p class="contact-lede">
            Email is the most reliable way to reach me. Tell me what you’re
            building, which project you maintain, or where you think I can help.
          </p>

          <div class="contact-actions">
            <a class="button button--primary button--large" href="mailto:${site.email}">
              ${icon('mail', 'button__icon')}
              <span>Email Chaitanya</span>
              ${icon('arrowUpRight', 'button__icon button__icon--end')}
            </a>
            <button class="button button--ghost button--large" type="button" data-copy-email="${site.email}">
              ${icon('copy', 'button__icon')}
              <span data-copy-label>Copy address</span>
            </button>
          </div>

          <p class="contact-address">
            <span class="contact-address__label">Direct</span>
            <a href="mailto:${site.email}">${escapeHtml(site.email)}</a>
          </p>
          <p class="visually-hidden" role="status" aria-live="polite" data-copy-status></p>
          <p class="contact-hint">Email opens your mail app. No form, no tracking, no backend.</p>
        </div>

        <aside class="contact-card reveal" aria-labelledby="contact-card-title">
          <p class="eyebrow">Open to</p>
          <h3 id="contact-card-title">Good work,<br>clearly scoped.</h3>
          <ul class="contact-list">
            <li>Open-source collaboration</li>
            <li>GSoC project discussions</li>
            <li>Python tooling &amp; developer experience</li>
            <li>Web projects with a real use case</li>
          </ul>
          <div class="contact-card__links">
            <a class="text-link" href="${site.githubUrl}" target="_blank" rel="noopener noreferrer">
              ${icon('github', 'inline-icon')} GitHub ${icon('arrowUpRight', 'inline-icon')}
            </a>
            <a class="text-link" href="${site.repoUrl}" target="_blank" rel="noopener noreferrer">
              ${icon('code', 'inline-icon')} Site source ${icon('arrowUpRight', 'inline-icon')}
            </a>
          </div>
          <p class="contact-card__note">${icon('shield', 'inline-icon')} Public links only. No phone number or private documents are published here.</p>
        </aside>
      </div>
    </div>
  </section>`;
}
