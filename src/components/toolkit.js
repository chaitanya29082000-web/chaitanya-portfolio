import { site } from '../data/site.js';
import { icon } from './icons.js';
import { escapeHtml, sectionHead } from './utils.js';

export function toolkit() {
  const groups = site.skillGroups
    .map(
      (group, index) => `
        <article class="skill-group reveal">
          <header class="skill-group__head">
            <span class="skill-group__index">${String(index + 1).padStart(2, '0')}</span>
            <h3>${escapeHtml(group.label)}</h3>
            <p>${escapeHtml(group.note)}</p>
          </header>
          <ul class="chip-list chip-list--stack" aria-label="${escapeHtml(group.label)}">
            ${group.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
          </ul>
        </article>`,
    )
    .join('');

  return `
  <section class="section toolkit" id="toolkit" aria-labelledby="toolkit-title">
    <div class="container">
      ${sectionHead({
        index: '04',
        label: 'Toolkit',
        title: 'Tools, not <em>trophies.</em>',
        lede: 'A clear view of what I build with, what I contribute in, and what I’m still learning. No percentage bars, no invented proficiency levels.',
        id: 'toolkit',
      })}

      <div class="toolkit-grid">
        ${groups}
      </div>

      <div class="toolkit-lower">
        <div class="terminal-card reveal" role="group" aria-label="Public pull request snapshot">
          <div class="terminal-card__bar">
            <span class="terminal-dots" aria-hidden="true"><i></i><i></i><i></i></span>
            <span class="terminal-card__title">public-prs.log</span>
            <span class="terminal-card__tag">${escapeHtml(site.snapshot)}</span>
          </div>
          <pre class="terminal-card__body"><code><span class="term-prompt">$</span> <span class="term-command">gh pr list --author @me</span>
<span class="term-muted">REPO                          STATUS   TITLE</span>
holoviz/lumen                 <span class="term-open">open</span>     cite document sources
holoviz/lumen                 <span class="term-open">open</span>     add OrcaRouter provider
scikit-matter                 <span class="term-open">open</span>     treat warnings as errors
first-contributions           <span class="term-merged">merged</span>   add contributor entry</code></pre>
          <p class="terminal-card__foot">${icon('gitPullRequest', 'inline-icon')} Real public pull requests, abbreviated. Open the ledger above for links.</p>
        </div>

        <div class="toolkit-note reveal">
          <span class="toolkit-note__mark" aria-hidden="true">↳</span>
          <p>
            <strong>Evidence, not a score.</strong> TypeScript, React, Next.js, Vite,
            and Tailwind CSS appear in my public project repositories. Python and
            pytest appear in my public Lumen and scikit-matter pull requests.
            Everything else is labelled as exploration.
          </p>
          <a class="text-link" href="#open-source">Open the contribution ledger ${icon('arrowUpRight', 'inline-icon')}</a>
        </div>
      </div>
    </div>
  </section>`;
}
