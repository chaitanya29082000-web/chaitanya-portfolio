interface Project {
  name: string
  category: string
  description: string
  technologies: string[]
  github: string | null
  demo: string | null
  visual: 'careerpilot' | 'jaldrishti' | 'apforge'
}

const projects: Project[] = [
  {
    name: 'CareerPilot AI',
    category: 'AI / Career Assistant',
    description:
      'AI-powered resume-to-job matching and career guidance assistant. Upload a resume PDF, provide a job description, and receive a match score, skill gap analysis, personalized recommendations, and interview questions.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PDF Parsing', 'OpenRouter', 'Google Gemma 4'],
    github: 'https://github.com/chaitanya29082000-web/careerpilot-ai',
    demo: 'https://careerpilot-ai-three-ecru.vercel.app',
    visual: 'careerpilot',
  },
  {
    name: 'Jaldrishti AI',
    category: 'AI / Machine Learning',
    description:
      'AI-powered project — detailed project information coming soon.',
    technologies: [],
    github: null,
    demo: null,
    visual: 'jaldrishti',
  },
  {
    name: 'APforge',
    category: 'AI-Focused Tool',
    description:
      'AI-focused project — detailed project information coming soon.',
    technologies: [],
    github: null,
    demo: null,
    visual: 'apforge',
  },
]

function ProjectVisual({ type }: { type: 'careerpilot' | 'jaldrishti' | 'apforge' }) {
  if (type === 'careerpilot') {
    return (
      <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-violet/15 via-indigo-50/60 to-cyan/8">
        <div className="absolute inset-0">
          <div className="absolute top-[10%] left-[8%] w-72 h-72 bg-violet/12 rounded-full blur-3xl" />
          <div className="absolute bottom-[10%] right-[10%] w-56 h-56 bg-accent/10 rounded-full blur-3xl" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.15]" viewBox="0 0 400 300">
            <path d="M60 90 C120 50 200 50 260 80 C300 95 340 110 380 100" stroke="currentColor" strokeWidth="2.5" fill="none" strokeDasharray="8 5" className="text-violet" />
            <path d="M20 180 C80 140 160 140 220 170 C260 185 320 200 380 190" stroke="currentColor" strokeWidth="2.5" fill="none" strokeDasharray="8 5" className="text-accent" />
            <path d="M40 230 C100 210 180 210 240 230 C280 240 340 250 380 240" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-cyan" />
            <circle cx="60" cy="90" r="6" className="text-violet" fill="currentColor" opacity="0.4" />
            <circle cx="260" cy="80" r="6" className="text-violet" fill="currentColor" opacity="0.4" />
            <circle cx="380" cy="100" r="6" className="text-violet" fill="currentColor" opacity="0.3" />
            <circle cx="20" cy="180" r="5" className="text-accent" fill="currentColor" opacity="0.3" />
            <circle cx="220" cy="170" r="5" className="text-accent" fill="currentColor" opacity="0.3" />
            <circle cx="380" cy="190" r="5" className="text-accent" fill="currentColor" opacity="0.3" />
            <rect x="80" y="55" width="100" height="70" rx="8" stroke="currentColor" strokeWidth="1.5" className="text-violet" fill="none" opacity="0.2" />
            <rect x="85" y="62" width="40" height="6" rx="3" fill="currentColor" className="text-violet" opacity="0.12" />
            <rect x="85" y="74" width="70" height="4" rx="2" fill="currentColor" className="text-violet" opacity="0.08" />
            <rect x="85" y="84" width="55" height="4" rx="2" fill="currentColor" className="text-violet" opacity="0.08" />
            <rect x="85" y="94" width="85" height="4" rx="2" fill="currentColor" className="text-violet" opacity="0.08" />
            <rect x="240" y="155" width="110" height="75" rx="8" stroke="currentColor" strokeWidth="1.5" className="text-accent" fill="none" opacity="0.2" />
            <rect x="248" y="165" width="35" height="35" rx="6" fill="currentColor" className="text-accent" opacity="0.1" />
            <rect x="290" y="165" width="50" height="6" rx="3" fill="currentColor" className="text-accent" opacity="0.08" />
            <rect x="290" y="177" width="40" height="4" rx="2" fill="currentColor" className="text-accent" opacity="0.06" />
            <rect x="248" y="210" width="95" height="4" rx="2" fill="currentColor" className="text-accent" opacity="0.06" />
            <circle cx="200" cy="150" r="10" className="text-violet" fill="currentColor" opacity="0.08" />
          </svg>
          <div className="absolute top-[15%] left-[55%] flex items-center gap-3 px-4 py-2.5 bg-white/50 backdrop-blur-sm rounded-xl border border-violet/15 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet/30 to-accent/30 flex items-center justify-center">
              <svg className="w-4 h-4 text-violet/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div className="w-20 h-1.5 bg-violet/20 rounded-full" />
              <div className="w-14 h-1 bg-violet/10 rounded-full mt-1.5" />
            </div>
          </div>
          <div className="absolute bottom-[18%] left-[12%] flex items-center gap-3 px-4 py-2.5 bg-white/50 backdrop-blur-sm rounded-xl border border-accent/15 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent/30 to-cyan/30 flex items-center justify-center">
              <svg className="w-4 h-4 text-accent/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
              </svg>
            </div>
            <div className="w-28 h-3 bg-white/60 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-gradient-to-r from-accent/35 to-violet/35 rounded-full" />
            </div>
            <span className="text-accent/50 text-[10px] font-mono font-bold">87%</span>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'jaldrishti') {
    return (
      <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-cyan/12 via-blue-50/50 to-accent/8">
        <div className="absolute inset-0">
          <div className="absolute top-[10%] right-[10%] w-64 h-64 bg-cyan/12 rounded-full blur-3xl" />
          <div className="absolute bottom-[15%] left-[10%] w-52 h-52 bg-accent/8 rounded-full blur-3xl" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.14]" viewBox="0 0 400 300">
            <line x1="200" y1="150" x2="60" y2="45" stroke="currentColor" strokeWidth="2" className="text-cyan" />
            <line x1="200" y1="150" x2="340" y2="40" stroke="currentColor" strokeWidth="2" className="text-accent" />
            <line x1="200" y1="150" x2="360" y2="210" stroke="currentColor" strokeWidth="2" className="text-cyan" />
            <line x1="200" y1="150" x2="50" y2="240" stroke="currentColor" strokeWidth="2" className="text-accent" />
            <line x1="200" y1="150" x2="200" y2="25" stroke="currentColor" strokeWidth="2" className="text-violet" />
            <line x1="200" y1="150" x2="310" y2="270" stroke="currentColor" strokeWidth="1.5" className="text-cyan" />
            <line x1="200" y1="150" x2="100" y2="275" stroke="currentColor" strokeWidth="1.5" className="text-violet" />
            <circle cx="60" cy="45" r="7" className="text-cyan" fill="currentColor" opacity="0.25" />
            <circle cx="340" cy="40" r="7" className="text-accent" fill="currentColor" opacity="0.25" />
            <circle cx="200" cy="25" r="7" className="text-violet" fill="currentColor" opacity="0.25" />
            <circle cx="360" cy="210" r="5" className="text-cyan" fill="currentColor" opacity="0.2" />
            <circle cx="50" cy="240" r="5" className="text-accent" fill="currentColor" opacity="0.2" />
            <circle cx="310" cy="270" r="5" className="text-cyan" fill="currentColor" opacity="0.15" />
            <circle cx="100" cy="275" r="5" className="text-violet" fill="currentColor" opacity="0.15" />
            <circle cx="200" cy="150" r="12" className="text-cyan" fill="currentColor" opacity="0.1" />
            <circle cx="200" cy="150" r="20" stroke="currentColor" strokeWidth="1.5" className="text-cyan" fill="none" opacity="0.12" />
            <circle cx="200" cy="150" r="32" stroke="currentColor" strokeWidth="1" className="text-accent" fill="none" opacity="0.06" />
            <rect x="30" y="70" width="80" height="50" rx="6" stroke="currentColor" strokeWidth="1.5" className="text-cyan" fill="none" opacity="0.15" />
            <rect x="38" y="80" width="25" height="25" rx="4" fill="currentColor" className="text-cyan" opacity="0.08" />
            <rect x="68" y="80" width="35" height="5" rx="2.5" fill="currentColor" className="text-cyan" opacity="0.06" />
            <rect x="68" y="90" width="28" height="3" rx="1.5" fill="currentColor" className="text-cyan" opacity="0.05" />
            <rect x="290" y="195" width="80" height="50" rx="6" stroke="currentColor" strokeWidth="1.5" className="text-accent" fill="none" opacity="0.15" />
            <rect x="298" y="205" width="60" height="4" rx="2" fill="currentColor" className="text-accent" opacity="0.06" />
            <rect x="298" y="214" width="45" height="3" rx="1.5" fill="currentColor" className="text-accent" opacity="0.05" />
            <rect x="298" y="222" width="55" height="3" rx="1.5" fill="currentColor" className="text-accent" opacity="0.05" />
          </svg>
          <div className="absolute top-[12%] left-[10%] w-5 h-5 bg-cyan/30 rounded-full" />
          <div className="absolute top-[10%] right-[12%] w-4 h-4 bg-accent/25 rounded-full" />
          <div className="absolute bottom-[20%] right-[12%] w-5 h-5 bg-violet/20 rounded-full" />
          <div className="absolute bottom-[22%] left-[15%] w-3.5 h-3.5 bg-cyan/20 rounded-full" />
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-cyan/15 rounded-full border-2 border-cyan/15" />
          <div className="absolute top-[8%] left-[45%] flex items-center gap-2 px-3 py-2 bg-white/50 backdrop-blur-sm rounded-lg border border-cyan/15 shadow-sm">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-cyan/30 to-accent/30 flex items-center justify-center">
              <svg className="w-3 h-3 text-cyan/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <div className="w-16 h-1.5 bg-cyan/20 rounded-full" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-amber-50/80 via-orange-50/40 to-violet/5">
      <div className="absolute inset-0">
        <div className="absolute top-[10%] left-[15%] w-60 h-60 bg-amber-400/12 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[15%] w-48 h-48 bg-orange-400/8 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(rgba(245,158,11,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.5) 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute top-[15%] left-[10%] space-y-3">
          <div className="w-44 h-3 bg-amber-400/15 rounded-full" />
          <div className="w-32 h-2.5 bg-amber-400/10 rounded-full" />
          <div className="w-38 h-2.5 bg-amber-400/12 rounded-full" />
          <div className="w-24 h-2 bg-amber-400/8 rounded-full" />
        </div>
        <div className="absolute top-[12%] right-[10%] text-amber-500/20 text-6xl font-mono font-bold select-none leading-none">
          {'{ }'}
        </div>
        <div className="absolute bottom-[20%] left-[50%] -translate-x-1/2 w-56 h-36 bg-amber-400/6 rounded-2xl blur-xl" />
        <div className="absolute bottom-[15%] left-[10%] space-y-2">
          <div className="w-28 h-2 bg-amber-400/10 rounded-full" />
          <div className="w-36 h-2 bg-amber-400/8 rounded-full" />
          <div className="w-20 h-2 bg-amber-400/10 rounded-full" />
        </div>
        <div className="absolute bottom-[12%] right-[12%] flex items-center gap-3 px-4 py-2.5 bg-white/50 backdrop-blur-sm rounded-xl border border-amber-400/15 shadow-sm">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400/30 to-orange-400/30 flex items-center justify-center">
            <span className="text-amber-600/70 text-sm font-mono font-bold">{'/>'}</span>
          </div>
          <div className="space-y-1.5">
            <div className="w-20 h-1.5 bg-amber-400/20 rounded-full" />
            <div className="w-14 h-1 bg-amber-400/12 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group relative bg-white dark:bg-dark-card border border-border/60 dark:border-dark-border rounded-2xl overflow-hidden card-shadow-lg hover:card-shadow-hover hover:border-accent/20 transition-all duration-300 hover:-translate-y-1.5">
      {/* Visual area */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <div className="h-full transition-transform duration-500 group-hover:scale-105">
          <ProjectVisual type={project.visual} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-dark-card via-white/60 dark:via-dark-card/60 to-transparent" />
        {/* Arrow button */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-border/50 dark:border-slate-600/50 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-2">
          <svg className="w-4 h-4 text-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <p className="text-accent text-xs font-semibold tracking-wider uppercase mb-2">
          {project.category}
        </p>

        {/* Name */}
        <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-200">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>

        {/* Technology tags */}
        {project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium text-text-muted bg-bg-secondary/80 dark:bg-slate-700/60 border border-border/40 dark:border-slate-600/40 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="flex items-center gap-3">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-accent transition-colors duration-200"
              aria-label={`${project.name} GitHub repository`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Code
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-text-muted cursor-not-allowed">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Coming Soon
            </span>
          )}

          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white bg-gradient-blue px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-md hover:shadow-accent/20"
              aria-label={`${project.name} live demo`}
            >
              Live Demo
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          ) : null}
        </div>
      </div>

      {/* Index number */}
      <div className="absolute top-4 left-5 text-xs font-mono text-text-muted/25">
        {String(index + 1).padStart(2, '0')}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary/30 via-bg-primary to-bg-primary dark:from-dark-surface dark:via-dark-bg dark:to-dark-bg pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-accent/[0.02] dark:bg-accent/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet/[0.02] dark:bg-violet/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <span className="text-accent text-sm font-mono font-semibold">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              Featured Projects
            </h2>
          </div>
          <a
            href="https://github.com/chaitanya29082000-web"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors duration-200"
          >
            View All Projects
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Supporting text */}
        <p className="text-text-secondary text-lg max-w-2xl mb-12 leading-relaxed">
          A collection of projects that showcase my skills, curiosity and passion for
          building real-world solutions.
        </p>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
