# Chaitanya Bhambere — Portfolio

A fast, accessible personal portfolio for **Chaitanya Bhambere**, an aspiring
open-source contributor and software developer based in Nanded, Maharashtra,
India.

The site is deliberately small: hand-written HTML, CSS, and JavaScript, assembled
by a zero-dependency Node build script. No runtime framework, no database, no
analytics, no third-party font requests.

## Why this stack?

The portfolio was built and tested on Termux/Android. A zero-dependency static
build avoids native binary compatibility problems (Astro/Vite optional native
bindings can be unreliable on Android) while keeping the output fast and portable.
The generated `dist/` folder can be hosted anywhere that serves static files.

## Stack

- Semantic HTML5
- Modern CSS (custom properties, Grid, container sizing, `prefers-reduced-motion`)
- Vanilla JavaScript (theme, accessible mobile navigation, scroll reveal, copy email)
- Node.js build/serve/check scripts (Node 20+)
- Self-hosted WOFF2 fonts: Inter, Instrument Serif, IBM Plex Mono
- No runtime dependencies

## Verified content policy

Every claim on the site should be backed by a public link or by information
Chaitanya supplied directly. The project descriptions come from public READMEs
and demos. The open-source ledger links to real GitHub pull requests and shows
their real status:

- HoloViz Lumen PRs are **open**, not merged.
- The scikit-matter PR is **open**, not merged.
- The first-contributions PR is **merged**.
- GSoC is described as **preparation**, not selection or acceptance.
- No employer, education, award, certification, follower, or revenue claims are made.

Do not add testimonials, star counts, awards, or “maintainer” claims without
verifiable evidence.

## Structure

```
.
├── public/                 # Static assets copied verbatim
│   ├── favicon.svg
│   ├── apple-touch-icon.svg
│   ├── apple-touch-icon.png
│   ├── og.svg              # Editable social preview source
│   ├── og.png              # Rendered 1200×630 social preview
│   ├── site.webmanifest
│   └── fonts/
├── scripts/
│   ├── build.mjs           # Copies assets, renders pages, writes sitemap/robots
│   ├── make-og.mjs         # Renders og.png and apple-touch-icon.png from SVG
│   ├── check.mjs           # Syntax checks + build + tests
│   ├── check-links.mjs     # Optional external link check
│   └── serve.mjs           # Local static preview server
├── src/
│   ├── components/         # HTML string components
│   ├── data/
│   │   └── site.js         # All editable content and links
│   ├── scripts/main.js     # Browser behavior
│   ├── styles/main.css     # Design system and responsive layout
│   ├── layout.js           # <head>, SEO, JSON-LD, page shell
│   └── page.js             # Home and 404 page composition
├── tests/site.test.mjs     # Content, SEO, accessibility, link-safety tests
└── vercel.json
```

## Local development

Requirements: Node.js 20 or newer. The site itself has no runtime dependencies.
The full check suite (tests, HTML validation, formatting) and the optional
`build:og` script need the dev dependencies, so install them once:

```bash
npm ci
npm run dev
```

This builds the site and starts a preview at <http://localhost:4321>. To test from
an Android phone on the same network, open the printed LAN URL.

### Commands

| Command            | What it does                                  |
| ------------------ | --------------------------------------------- |
| `npm run build`    | Build `dist/`                                 |
| `npm run dev`      | Build + serve locally                         |
| `npm run preview`  | Serve the existing `dist/`                    |
| `npm test`         | Build + run the test suite                    |
| `npm run check`    | Syntax-check scripts, build, validate, test   |
| `npm run links`    | Check all external links in `dist/index.html` |
| `npm run build:og` | Re-render `og.png` and `apple-touch-icon.png` |

The build is deterministic except for the sitemap `lastmod` date and the footer
year.

## Updating content

Most edits happen in **`src/data/site.js`**:

- `site.name`, `role`, `location`, `email`, `githubUrl`
- `projects` — names, summaries, stacks, status, links
- `contributions` — real PR links, titles, dates, and status (`Open` / `Merged`)
- `skillGroups` — keep “Building with”, “Contributing in”, and “Exploring next” honest
- `focusCards` and `principles`

After editing:

```bash
npm run check
```

If you add a PR, use the real GitHub URL and the real status. If a PR is merged,
update the count in `site.stats` and the hero proof line will follow automatically.

### Changing the canonical URL

Set `SITE_URL` at build time, or edit the default in `src/data/site.js`:

```bash
SITE_URL="https://your-domain.example" npm run build
```

For a GitHub Pages project site, also set `BASE_PATH`:

```bash
SITE_URL="https://chaitanya29082000-web.github.io/chaitanya-portfolio" \
BASE_PATH="/chaitanya-portfolio/" \
npm run build
```

Publish the resulting `dist/` with any static host or GitHub Actions workflow.
Update `SITE_URL` and `BASE_PATH` if the repository is renamed or a custom domain
is added.

## Deployment

### Vercel (current project)

The repository is already connected to a Vercel project at
<https://chaitanya-portfolio-ecru.vercel.app>. Push to `main` and Vercel will run
`npm run build` and publish `dist/`. `vercel.json` defines the build command,
output directory, caching, and security headers.

If creating a new Vercel project: import the repository, set the framework preset
to **Other**, build command `npm run build`, output directory `dist`, and deploy.
No environment variables are required.

### GitHub Pages (optional)

Vercel is the canonical deployment. To use Pages instead, build with the
`SITE_URL` and `BASE_PATH` values above, publish `dist/` with a GitHub Actions
workflow, and set **Settings → Pages → Source** to **GitHub Actions**. Use only
one canonical host so the two deployments do not compete in search results.

### Netlify / Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- No SPA redirects are needed; this is a single page plus a real `404.html`.

### Custom domain

Add the domain at the host, set `SITE_URL` to the final HTTPS origin, rebuild, and
redeploy. If the site lives at a subpath, also set `BASE_PATH` with a trailing
slash. Update `public/site.webmanifest` if the scope changes.

## SEO and social previews

The build generates:

- Descriptive title and meta description
- Canonical URL
- Open Graph and Twitter card metadata
- `Person`, `WebSite`, and `ProfilePage` JSON-LD
- `sitemap.xml` and `robots.txt`
- A custom `404.html`
- A 1200×630 `og.png` social image and a 180×180 `apple-touch-icon.png`

Both PNGs are rendered from the SVG sources in `public/` by
`npm run build:og`, using `@resvg/resvg-js`. The first run downloads the matching
Open Font License TTFs into `.cache/og-fonts/`; later runs reuse them. After
editing `public/og.svg` or `public/apple-touch-icon.svg`, regenerate and commit
the PNGs:

```bash
npm run build:og
npm run check
```

## Accessibility

- Skip link to main content
- Semantic landmarks and labelled sections
- Keyboard-accessible mobile menu with Escape handling and focus management
- Visible `:focus-visible` styles
- Reduced-motion support
- Theme toggle with `aria-pressed` and an updated accessible label
- Contrast-checked dark and light palettes
- External links announce that they open in a new tab via `aria-label` where useful

## Security and privacy

- No analytics, cookies, trackers, contact form, or backend.
- Theme preference is stored in `localStorage`.
- No secrets or `.env` files are committed; `.gitignore` blocks them.
- External links use `rel="noopener noreferrer"`.
- The site intentionally omits phone number, resume, education, and private data.

## License

MIT — see [LICENSE](LICENSE).
