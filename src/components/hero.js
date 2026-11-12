import { site } from '../data/site.js';
import { icon } from './icons.js';
import { escapeHtml } from './utils.js';

export function hero() {
  const focusRows = site.focus
    .map(
      (row) => `
        <div class="focus-row">
          <dt>${escapeHtml(row.label)}</dt>
          <dd>${escapeHtml(row.value)}</dd>
        </div>`,
    )
    .join('');

  return `
  <section class="hero" id="top" aria-labelledby="hero-title">
    <div class="hero__glow" aria-hidden="true"></div>
    <div class="hero__grid container">
      <div class="hero__copy">
        <p class="hero__eyebrow reveal">
          <span class="status-dot" aria-hidden="true"></span>
          <span>Open source · Python · Web</span>
          <span class="hero__slash" aria-hidden="true">/</span>
          <span>${escapeHtml(site.shortLocation)}</span>
        </p>

        <h1 class="hero__title reveal" id="hero-title">
          <span class="hero__name">${escapeHtml(site.displayName)}</span>
          <span class="hero__tagline">builds in public<span class="hero__dot">.</span></span>
        </h1>

        <p class="hero__role reveal">${escapeHtml(site.role)}</p>

        <p class="hero__lede reveal">
          Based in Nanded, Maharashtra. I work in Python, TypeScript, and the web,
          and I’m currently opening focused pull requests in
          <a href="#open-source">HoloViz Lumen and scikit-matter</a> while preparing for GSoC.
        </p>

        <div class="hero__actions reveal">
          <a class="button button--primary" href="#work">
            <span>Explore selected work</span>
            ${icon('arrowDown', 'button__icon')}
          </a>
          <a class="button button--ghost" href="${site.githubUrl}" target="_blank" rel="noopener noreferrer">
            ${icon('github', 'button__icon')}
            <span>GitHub profile</span>
            ${icon('arrowUpRight', 'button__icon button__icon--end')}
          </a>
          <a class="hero__contact-link" href="#contact">Contact <span aria-hidden="true">→</span></a>
        </div>

        <p class="hero__proof reveal">
          <span class="proof-dot" aria-hidden="true"></span>
          <span><strong>${site.stats.publicPullRequests}</strong> public PRs tracked</span>
          <span class="hero__proof-sep" aria-hidden="true">·</span>
          <span><strong>${site.stats.mergedPullRequests}</strong> merged</span>
          <span class="hero__proof-sep" aria-hidden="true">·</span>
          <a href="#open-source">See the record</a>
        </p>
      </div>

      <aside class="hero__panel reveal" aria-label="Current focus">
        <div class="signal" aria-hidden="true">
          <svg viewBox="0 0 320 160" aria-hidden="true">
            <defs>
              <linearGradient id="signal-fade" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="currentColor" stop-opacity=".9"/>
                <stop offset="1" stop-color="currentColor" stop-opacity="0"/>
              </linearGradient>
            </defs>
            <g fill="none" stroke="currentColor" stroke-opacity=".18">
              <circle cx="80" cy="80" r="52"/>
              <circle cx="80" cy="80" r="34"/>
              <circle cx="80" cy="80" r="16"/>
              <path d="M8 80h144M80 8v144" stroke-dasharray="2 6"/>
            </g>
            <path d="M80 80 208 38" stroke="url(#signal-fade)" stroke-width="1.5"/>
            <circle cx="208" cy="38" r="5" fill="currentColor"/>
            <circle cx="208" cy="38" r="13" fill="none" stroke="currentColor" stroke-opacity=".4"/>
            <g fill="currentColor" font-family="monospace" font-size="8" letter-spacing="1.5">
              <text x="220" y="34">OPEN</text>
              <text x="220" y="48">SOURCE</text>
              <text x="18" y="150">19.15°N / 77.30°E</text>
            </g>
          </svg>
        </div>

        <div class="hero__panel-head">
          <p class="eyebrow">Current signal</p>
          <span class="live-pill"><span aria-hidden="true"></span>Active</span>
        </div>

        <dl class="focus-list">
          ${focusRows}
        </dl>

        <p class="hero__panel-foot">
          ${icon('shield', 'inline-icon')}
          <span>Every contribution claim links to the public record.</span>
        </p>
      </aside>
    </div>

    <div class="hero__foot container">
      <a class="scroll-cue" href="#work">
        <span>Scroll to explore</span>
        ${icon('arrowDown', 'scroll-cue__icon')}
      </a>
      <p class="hero__note">No fake metrics. No invented titles. Just work you can inspect.</p>
    </div>
  </section>`;
}
