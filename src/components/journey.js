import { site } from '../data/site.js';
import { icon } from './icons.js';
import { escapeHtml, sectionHead } from './utils.js';

export function journey() {
  const cards = site.focusCards
    .map(
      (card, index) => `
        <article class="focus-card reveal" style="--focus-order:${index}">
          <div class="focus-card__head">
            <span class="focus-card__label">${escapeHtml(card.label)}</span>
            <span class="focus-card__index">0${index + 1}</span>
          </div>
          <h3>${escapeHtml(card.title)}</h3>
          <p>${escapeHtml(card.body)}</p>
        </article>`,
    )
    .join('');

  return `
  <section class="section journey" id="focus" aria-labelledby="focus-title">
    <div class="container">
      ${sectionHead({
        index: '05',
        label: 'Current focus',
        title: 'A direction,<br><em>not a forecast.</em>',
        lede: 'What I’m working on now, what comes next, and the standard I want to hold while I learn.',
        id: 'focus',
      })}

      <div class="focus-grid">
        ${cards}
      </div>

      <div class="journey-foot reveal">
        <div class="journey-note">
          ${icon('gitPullRequest', 'journey-note__icon')}
          <div>
            <h3>GSoC status: preparing.</h3>
            <p>
              I am researching projects and contribution workflows. I have not been
              selected, accepted, or funded by GSoC, and this site does not claim that.
            </p>
          </div>
        </div>
        <a class="text-link" href="https://summerofcode.withgoogle.com/" target="_blank" rel="noopener noreferrer">
          Learn about GSoC ${icon('arrowUpRight', 'inline-icon')}
        </a>
      </div>
    </div>
  </section>`;
}
