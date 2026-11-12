import { site } from '../data/site.js';
import { icon } from './icons.js';
import { escapeHtml, sectionHead } from './utils.js';

function ledgerRow(item) {
  return `
    <li class="ledger-item reveal">
      <a class="ledger-row" href="${item.url}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(`${item.repo} ${item.number}: ${item.title} — ${item.status} (opens in a new tab)`)}">
        <span class="ledger-status ledger-status--${item.statusTone}">
          <span class="status-pill__dot" aria-hidden="true"></span>
          ${escapeHtml(item.status)}
        </span>
        <span class="ledger-repo">
          <span class="ledger-repo__name">${escapeHtml(item.repo)}</span>
          <span class="ledger-repo__number">${escapeHtml(item.number)}</span>
        </span>
        <span class="ledger-content">
          <span class="ledger-title">${escapeHtml(item.title)}</span>
          <span class="ledger-summary">${escapeHtml(item.summary)}</span>
        </span>
        <span class="ledger-date">${escapeHtml(item.date)}</span>
        <span class="ledger-arrow" aria-hidden="true">${icon('arrowUpRight')}</span>
      </a>
    </li>`;
}

export function openSource() {
  const rows = site.contributions.map(ledgerRow).join('');
  const explorations = site.explorations.map((item) => `<li>${escapeHtml(item)}</li>`).join('');

  return `
  <section class="section open-source" id="open-source" aria-labelledby="open-source-title">
    <div class="container">
      ${sectionHead({
        index: '02',
        label: 'Open source',
        title: 'The work is <em>public.</em>',
        lede: 'A current snapshot of pull requests I have opened. “Open” means under review; “Merged” means accepted upstream. Each row goes directly to GitHub.',
        id: 'open-source',
      })}

      <div class="os-stats reveal" role="group" aria-label="Public GitHub snapshot">
        <div class="os-stat">
          <span class="os-stat__value">${site.stats.publicPullRequests}</span>
          <span class="os-stat__label">public PRs tracked</span>
        </div>
        <div class="os-stat">
          <span class="os-stat__value">${site.stats.mergedPullRequests}</span>
          <span class="os-stat__label">merged upstream</span>
        </div>
        <div class="os-stat">
          <span class="os-stat__value">${site.stats.publicRepos}</span>
          <span class="os-stat__label">public repositories</span>
        </div>
        <p class="os-stats__note">Snapshot · ${escapeHtml(site.snapshot)} · <a href="${site.githubUrl}" target="_blank" rel="noopener noreferrer">GitHub profile ${icon('arrowUpRight', 'inline-icon')}</a></p>
      </div>

      <div class="ledger-wrap">
        <div class="ledger-head" aria-hidden="true">
          <span>Status</span>
          <span>Repository</span>
          <span>Contribution</span>
          <span>Opened</span>
          <span></span>
        </div>
        <ul class="ledger">
          ${rows}
        </ul>
      </div>

      <div class="os-lower">
        <aside class="explore-panel reveal" aria-labelledby="explore-title">
          <div class="explore-panel__head">
            <span class="eyebrow">On the radar</span>
            ${icon('spark', 'explore-panel__icon')}
          </div>
          <h3 class="explore-panel__title" id="explore-title">Projects I’m studying next.</h3>
          <p class="explore-panel__copy">
            These are interests and research areas — not claims of contribution,
            membership, or selection.
          </p>
          <ul class="chip-list" aria-label="Open-source interests">
            ${explorations}
          </ul>
        </aside>

        <aside class="github-card reveal" aria-labelledby="github-title">
          <div class="github-card__mark" aria-hidden="true">
            ${icon('github')}
          </div>
          <div class="github-card__body">
            <span class="eyebrow">Public profile</span>
            <h3 class="github-card__title" id="github-title">Read the source,<br>not the summary.</h3>
            <p class="github-card__handle">@${escapeHtml(site.githubHandle)}</p>
            <p class="github-card__copy">
              ${site.stats.publicRepos} public repositories. ${site.stats.publicPullRequests} public pull requests tracked,
              ${site.stats.mergedPullRequests} merged. Numbers are a snapshot; the links are the proof.
            </p>
            <div class="github-card__actions">
              <a class="button button--small button--primary" href="${site.githubUrl}" target="_blank" rel="noopener noreferrer">
                ${icon('github', 'button__icon')} View profile
              </a>
              <a class="text-link" href="https://github.com/search?q=is%3Apr+author%3A${site.githubHandle}&amp;type=pullrequests" target="_blank" rel="noopener noreferrer">
                Search my PRs ${icon('arrowUpRight', 'inline-icon')}
              </a>
            </div>
            <p class="github-card__verified">${icon('shield', 'inline-icon')} Public evidence only · no private repositories exposed</p>
          </div>
        </aside>
      </div>
    </div>
  </section>`;
}
