// All claims in this file should be backed by a public link or by information
// Chaitanya supplied directly. Do not add unverified awards, employers,
// education, follower counts, or repository ownership claims.

export const site = {
  name: 'Chaitanya Bhambere',
  displayName: 'Chaitanya',
  role: 'Aspiring open-source contributor & software developer',
  location: 'Nanded, Maharashtra, India',
  shortLocation: 'Nanded, IN',
  email: 'chaitanya29082000@gmail.com',
  githubHandle: 'chaitanya29082000-web',
  githubUrl: 'https://github.com/chaitanya29082000-web',
  repoUrl: 'https://github.com/chaitanya29082000-web/chaitanya-portfolio',
  siteUrl: process.env.SITE_URL || 'https://chaitanya-portfolio-ecru.vercel.app',
  basePath: process.env.BASE_PATH || '',
  snapshot: 'Nov 2026',
  description:
    'Chaitanya Bhambere is an aspiring open-source contributor and software developer in Nanded, India, working in Python, TypeScript, and the web. Explore verified projects and public pull requests.',
  ogDescription:
    'Open-source contributor and software developer. Python, TypeScript, and the web. Every claim links to public evidence.',
  nav: [
    { label: 'Work', href: '#work' },
    { label: 'Open source', href: '#open-source' },
    { label: 'About', href: '#about' },
    { label: 'Toolkit', href: '#toolkit' },
    { label: 'Contact', href: '#contact' },
  ],
  footerNav: [
    { label: 'Work', href: '#work' },
    { label: 'Open source', href: '#open-source' },
    { label: 'About', href: '#about' },
    { label: 'Toolkit', href: '#toolkit' },
    { label: 'Current focus', href: '#focus' },
    { label: 'Contact', href: '#contact' },
  ],
  stats: {
    publicRepos: 10,
    publicPullRequests: 4,
    mergedPullRequests: 1,
    accountSince: 'Feb 2026',
  },
  focus: [
    { label: 'Now', value: 'Open PRs in HoloViz Lumen and scikit-matter' },
    { label: 'Focus', value: 'Python tooling & developer experience' },
    { label: 'Next', value: 'GSoC project research and preparation' },
    { label: 'Base', value: 'Nanded, Maharashtra, India' },
  ],
  projects: [
    {
      slug: 'careerpilot',
      index: '01',
      name: 'CareerPilot AI',
      kicker: 'AI product · Full-stack',
      summary:
        'A resume-to-job matching assistant that turns a PDF and a job description into a structured, useful analysis.',
      description:
        'Upload a resume and a target role; CareerPilot returns a match score, skill-gap breakdown, strengths, recommendations, and tailored interview questions. A graceful fallback keeps the demo usable when the AI provider is unavailable.',
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OpenRouter', 'PDF parsing'],
      status: 'Live demo',
      statusTone: 'live',
      featured: true,
      accent: 'lime',
      links: [
        {
          label: 'Live demo',
          href: 'https://careerpilot-ai-three-ecru.vercel.app',
          external: true,
          primary: true,
        },
        {
          label: 'Source',
          href: 'https://github.com/chaitanya29082000-web/careerpilot-ai',
          external: true,
        },
      ],
    },
    {
      slug: 'ai-tools-hub',
      index: '02',
      name: 'AI Tools Hub',
      kicker: 'Directory · React',
      summary:
        'A local-first directory for browsing, searching, and managing a curated set of AI tools.',
      description:
        'A React dashboard with 33 tools across 12 categories, instant search and filtering, and an admin panel for create, edit, and delete flows. Data persists in localStorage; authentication is intentionally mocked for the demo.',
      stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'React Router'],
      status: 'Source available',
      statusTone: 'source',
      accent: 'sky',
      links: [
        {
          label: 'Source',
          href: 'https://github.com/chaitanya29082000-web/ai-tools-hub',
          external: true,
          primary: true,
        },
      ],
    },
    {
      slug: 'trailspark',
      index: '03',
      name: 'TrailSpark',
      kicker: 'Hacktoberfest build · AI',
      summary:
        'A small-prompt adventure generator designed to give attention back, not take more of it.',
      description:
        'Choose your time, energy, company, and starting point; TrailSpark returns one practical micro-adventure with three steps and a reflection prompt. The AI layer sits behind a replaceable boundary with a curated fallback, so the experience never dead-ends.',
      stack: ['React 19', 'TypeScript', 'Express', 'tRPC', 'Tailwind CSS'],
      status: 'Hacktoberfest build',
      statusTone: 'build',
      accent: 'warm',
      links: [
        {
          label: 'Source',
          href: 'https://github.com/chaitanya29082000-web/trailspark',
          external: true,
          primary: true,
        },
      ],
    },
    {
      slug: 'portfolio',
      index: '04',
      name: 'This portfolio',
      kicker: 'Static site · Design system',
      summary:
        'A fast, accessible portfolio with a small build script, no runtime framework, and a bias for evidence over adjectives.',
      description:
        'Hand-written HTML, CSS, and JavaScript, generated by a zero-dependency Node script. Includes dark and light themes, keyboard-friendly navigation, reduced-motion support, structured data, and automated checks for links and content.',
      stack: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
      status: 'Open source',
      statusTone: 'source',
      accent: 'lime',
      links: [
        {
          label: 'Source',
          href: 'https://github.com/chaitanya29082000-web/chaitanya-portfolio',
          external: true,
          primary: true,
        },
      ],
    },
  ],
  contributions: [
    {
      repo: 'holoviz/lumen',
      number: '#2290',
      title: 'Cite document sources in ChatAgent answers',
      summary:
        'Appends a Sources section to document-grounded answers so readers can see which chunks supported the response.',
      status: 'Open',
      statusTone: 'open',
      date: 'Nov 2026',
      url: 'https://github.com/holoviz/lumen/pull/2290',
    },
    {
      repo: 'holoviz/lumen',
      number: '#2289',
      title: 'Add OrcaRouter as an OpenAI-compatible LLM provider',
      summary:
        'Adds an optional provider integration with environment-based API key support and model discovery.',
      status: 'Open',
      statusTone: 'open',
      date: 'Nov 2026',
      url: 'https://github.com/holoviz/lumen/pull/2289',
    },
    {
      repo: 'scikit-learn-contrib/scikit-matter',
      number: '#294',
      title: 'Treat pytest warnings as errors',
      summary:
        'Enables warnings-as-errors in the test suite and addresses the warnings surfaced by the stricter setting.',
      status: 'Open',
      statusTone: 'open',
      date: 'Sep 2026',
      url: 'https://github.com/scikit-learn-contrib/scikit-matter/pull/294',
    },
    {
      repo: 'firstcontributions/first-contributions',
      number: '#122256',
      title: 'Add Chaitanya-Bhambere to Contributors list',
      summary: 'First merged contribution to the beginner-friendly open-source workflow project.',
      status: 'Merged',
      statusTone: 'merged',
      date: 'Aug 2026',
      url: 'https://github.com/firstcontributions/first-contributions/pull/122256',
    },
  ],
  explorations: [
    'HoloViz / Lumen',
    'scikit-matter',
    'CERN-HSF',
    'OpenWISP',
    'HumanAI',
    'MCP tooling',
    'Open-source communities',
  ],
  skillGroups: [
    {
      label: 'Building with',
      note: 'Used in public project repositories',
      items: ['TypeScript', 'React', 'Next.js', 'Vite', 'Tailwind CSS', 'Node.js', 'HTML & CSS'],
    },
    {
      label: 'Contributing in',
      note: 'Python and developer tooling',
      items: [
        'Python',
        'pytest',
        'LLM provider integrations',
        'Technical documentation',
        'Git & GitHub',
      ],
    },
    {
      label: 'Exploring next',
      note: 'Interests, not contribution claims',
      items: ['HoloViz / Lumen', 'scikit-matter', 'MCP tooling', 'CERN-HSF', 'OpenWISP', 'HumanAI'],
    },
  ],
  principles: [
    {
      title: 'Read before writing',
      body: 'Start with the codebase, the contribution guide, and the issue history. Understand the shape of the project before proposing a change.',
    },
    {
      title: 'Keep the diff reviewable',
      body: 'Small, focused pull requests with a clear problem statement are easier to review and easier to maintain.',
    },
    {
      title: 'Document the why',
      body: 'Tests, reproduction steps, and a short rationale save maintainers time — and make the work useful after the merge.',
    },
  ],
  focusCards: [
    {
      label: 'Now',
      title: 'Public pull requests',
      body: 'Working through review feedback in HoloViz Lumen and scikit-matter, with a focus on useful, self-contained changes.',
    },
    {
      label: 'Next',
      title: 'GSoC preparation',
      body: 'Studying project roadmaps, issue trackers, and contribution guides before proposing work. No acceptance or selection is claimed.',
    },
    {
      label: 'Always',
      title: 'Open-source craft',
      body: 'Learning how maintainers think: clear communication, careful testing, and respect for the project’s existing conventions.',
    },
  ],
};
