import { site } from '../data/site.js';
import { icon } from './icons.js';
import { escapeHtml, sectionHead } from './utils.js';

export function about() {
  const principles = site.principles
    .map(
      (item, index) => `
        <li class="principle">
          <span class="principle__index">${String(index + 1).padStart(2, '0')}</span>
          <div>
            <h4>${escapeHtml(item.title)}</h4>
            <p>${escapeHtml(item.body)}</p>
          </div>
        </li>`,
    )
    .join('');

  return `
  <section class="section about" id="about" aria-labelledby="about-title">
    <div class="container">
      ${sectionHead({
        index: '03',
        label: 'About',
        title: 'Curious by default.<br><em>Careful by practice.</em>',
        lede: 'A short introduction, without the performance.',
        id: 'about',
      })}

      <div class="about-grid">
        <aside class="about-card reveal" aria-label="Profile summary">
          <div class="monogram" aria-hidden="true">
            <span class="monogram__ring"></span>
            <span class="monogram__ring monogram__ring--two"></span>
            <span class="monogram__letters">CB</span>
            <span class="monogram__label">IN / MH</span>
          </div>
          <div class="about-card__meta">
            <div class="about-card__row">
              ${icon('pin', 'inline-icon')}
              <span>${escapeHtml(site.location)}</span>
            </div>
            <div class="about-card__row">
              ${icon('terminal', 'inline-icon')}
              <span>Python · TypeScript · the web</span>
            </div>
            <div class="about-card__row">
              ${icon('gitPullRequest', 'inline-icon')}
              <span>Open-source contributor in progress</span>
            </div>
          </div>
          <div class="about-card__foot">
            <span class="status-dot" aria-hidden="true"></span>
            <span>Open to collaboration</span>
          </div>
        </aside>

        <div class="about-copy reveal">
          <p class="about-lede">
            I’m Chaitanya, a developer based in Nanded, Maharashtra. I’m building
            toward a career in open-source software, with a focus on
            <strong>Python tooling, developer experience, and the web.</strong>
          </p>
          <p>
            My current public work is in <a href="https://github.com/holoviz/lumen" target="_blank" rel="noopener noreferrer">HoloViz Lumen</a>,
            where I’ve opened pull requests for an LLM provider integration and
            document source citations, and in
            <a href="https://github.com/scikit-learn-contrib/scikit-matter" target="_blank" rel="noopener noreferrer">scikit-matter</a>,
            where I’m tightening the test suite. I’m also preparing for GSoC by
            studying project codebases, roadmaps, and contribution workflows.
          </p>
          <p>
            I learn by reading source, opening small PRs, and listening to review
            feedback. I’m not claiming maintainer status or work I haven’t shipped
            — every contribution link on this page goes to the public record.
          </p>

          <blockquote class="about-quote">
            <p>“I want my contributions to be small enough to review, useful enough to keep, and clear enough to maintain.”</p>
          </blockquote>
        </div>
      </div>

      <div class="principles-wrap">
        <div class="principles-head">
          <span class="eyebrow">Working principles</span>
          <span class="principles-head__line" aria-hidden="true"></span>
        </div>
        <ol class="principles">
          ${principles}
        </ol>
      </div>
    </div>
  </section>`;
}
