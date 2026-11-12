import { site } from '../data/site.js';
import { icon } from './icons.js';
import { escapeHtml, sectionHead } from './utils.js';

function projectCard(project, index) {
  const stack = project.stack.map((item) => `<li>${escapeHtml(item)}</li>`).join('');

  const links = project.links
    .map(
      (link) => `
        <a class="project-link${link.primary ? ' project-link--primary' : ''}" href="${link.href}"${link.external ? ' target="_blank" rel="noopener noreferrer"' : ''}>
          <span>${escapeHtml(link.label)}</span>
          ${icon(link.external ? 'arrowUpRight' : 'arrowRight', 'project-link__icon')}
        </a>`,
    )
    .join('');

  const initial = project.name.charAt(0).toUpperCase();

  return `
    <article class="project-card${project.featured ? ' project-card--featured' : ''} reveal" data-accent="${project.accent}" style="--project-order:${index}">
      <div class="project-card__top">
        <span class="project-index">${escapeHtml(project.index)}</span>
        <span class="status-pill status-pill--${project.statusTone}">
          <span class="status-pill__dot" aria-hidden="true"></span>
          ${escapeHtml(project.status)}
        </span>
      </div>

      <div class="project-art" aria-hidden="true">
        <span class="project-art__grid"></span>
        <span class="project-art__ring"></span>
        <span class="project-art__ring project-art__ring--two"></span>
        <span class="project-art__initial">${escapeHtml(initial)}</span>
        <span class="project-art__meta">${escapeHtml(project.kicker.split(' · ')[0])}</span>
        <span class="project-art__arrow">↗</span>
      </div>

      <div class="project-card__body">
        <p class="project-kicker">${escapeHtml(project.kicker)}</p>
        <h3 class="project-title">${escapeHtml(project.name)}</h3>
        <p class="project-summary">${escapeHtml(project.summary)}</p>
        <p class="project-description">${escapeHtml(project.description)}</p>
      </div>

      <ul class="project-stack" aria-label="Technologies">
        ${stack}
      </ul>

      <div class="project-card__links">
        ${links}
      </div>
    </article>`;
}

export function work() {
  const cards = site.projects.map(projectCard).join('');

  return `
  <section class="section work" id="work" aria-labelledby="work-title">
    <div class="container">
      ${sectionHead({
        index: '01',
        label: 'Selected work',
        title: 'A small body of work,<br><em>built to be used.</em>',
        lede: 'Projects I have designed and shipped, with source and live links where they exist. Descriptions come from the repositories and public demos — not from a pitch deck.',
        id: 'work',
      })}

      <div class="work-grid">
        ${cards}
      </div>

      <p class="work-note">
        <span class="work-note__mark" aria-hidden="true">*</span>
        <span>Project details are based on each repository’s README and public code. No usage, revenue, or star-count claims are implied.</span>
      </p>
    </div>
  </section>`;
}
