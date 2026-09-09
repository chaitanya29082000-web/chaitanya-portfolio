interface Project {
  name: string
  category: string
  description: string
  technologies: string[]
  status: string
  github: string | null
  demo: string | null
  visual: 'jaldrishti' | 'apforge'
}

const projects: Project[] = [
  {
    name: 'Jaldrishti AI',
    category: 'AI / Machine Learning',
    description:
      'AI-powered project — detailed project information coming soon.',
    technologies: [],
    status: 'In Development',
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
    status: 'In Development',
    github: null,
    demo: null,
    visual: 'apforge',
  },
]

function ProjectVisual({ type }: { type: 'jaldrishti' | 'apforge' }) {
  if (type === 'jaldrishti') {
    return (
      <div className="relative w-full h-full bg-gradient-to-br from-accent/8 via-bg-card to-indigo-900/10 overflow-hidden">
        <div className="absolute inset-0">
          {/* Central glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />

          {/* Radiating network lines */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.08]" viewBox="0 0 400 300">
            <line x1="200" y1="150" x2="80" y2="60" stroke="currentColor" strokeWidth="1" className="text-accent" />
            <line x1="200" y1="150" x2="320" y2="50" stroke="currentColor" strokeWidth="1" className="text-accent" />
            <line x1="200" y1="150" x2="350" y2="200" stroke="currentColor" strokeWidth="1" className="text-accent" />
            <line x1="200" y1="150" x2="60" y2="230" stroke="currentColor" strokeWidth="1" className="text-accent" />
            <line x1="200" y1="150" x2="200" y2="30" stroke="currentColor" strokeWidth="1" className="text-accent" />
            <line x1="200" y1="150" x2="300" y2="280" stroke="currentColor" strokeWidth="1" className="text-accent" />
          </svg>

          {/* Network nodes */}
          <div className="absolute top-[20%] left-[20%] w-2.5 h-2.5 bg-accent/30 rounded-full" />
          <div className="absolute top-[17%] right-[20%] w-2 h-2 bg-accent-light/25 rounded-full" />
          <div className="absolute bottom-[30%] right-[12%] w-2.5 h-2.5 bg-accent/20 rounded-full" />
          <div className="absolute bottom-[23%] left-[15%] w-2 h-2 bg-accent/25 rounded-full" />
          <div className="absolute top-[10%] left-[50%] w-1.5 h-1.5 bg-accent-light/20 rounded-full" />
          <div className="absolute bottom-[10%] right-[25%] w-1.5 h-1.5 bg-accent/20 rounded-full" />

          {/* Center node */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-accent/25 rounded-full border border-accent/20" />
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-indigo-900/10 via-bg-card to-accent/5 overflow-hidden">
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.4) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Abstract code blocks */}
        <div className="absolute top-[25%] left-[15%] space-y-2.5">
          <div className="w-28 h-1.5 bg-accent/10 rounded-full" />
          <div className="w-18 h-1.5 bg-accent/6 rounded-full" />
          <div className="w-22 h-1.5 bg-accent/8 rounded-full" />
        </div>

        <div className="absolute top-[25%] right-[15%] space-y-2.5">
          <div className="w-20 h-1.5 bg-accent-light/8 rounded-full" />
          <div className="w-14 h-1.5 bg-accent/5 rounded-full" />
        </div>

        {/* Accent glow */}
        <div className="absolute bottom-[30%] left-1/2 -translate-x-1/2 w-48 h-32 bg-accent/5 rounded-xl blur-xl" />

        {/* Terminal bracket */}
        <div className="absolute bottom-[25%] right-[20%] text-accent/10 text-4xl font-mono select-none">
          {'{ }'}
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative bg-bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/8 hover:-translate-y-1.5">
      {/* Visual area */}
      <div className="relative h-56 sm:h-64">
        <ProjectVisual type={project.visual} />

        {/* Status badge */}
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-bg-primary/80 backdrop-blur-sm border border-border text-text-secondary rounded-full">
            <span className="w-1.5 h-1.5 bg-amber-400/70 rounded-full" />
            {project.status}
          </span>
        </div>

        {/* Gradient overlay at bottom of visual */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-bg-card to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 -mt-4 relative z-10">
        {/* Category */}
        <p className="text-accent text-xs font-semibold tracking-wider uppercase mb-3">
          {project.category}
        </p>

        {/* Name */}
        <h3 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Technology badges */}
        {project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium text-text-muted bg-bg-card-hover border border-border rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 pt-2">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-text-primary bg-bg-card-hover border border-border rounded-lg hover:border-accent/40 hover:text-accent transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-card"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-text-muted bg-bg-card-hover/50 border border-border/50 rounded-lg cursor-not-allowed">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub — Coming Soon
            </span>
          )}

          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-accent hover:bg-accent-light rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/20 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-card"
            >
              Live Demo
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-text-muted bg-bg-card-hover/50 border border-border/50 rounded-lg cursor-not-allowed">
              Demo — Coming Soon
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto leading-relaxed">
            Selected projects built by Chaitanya, focused on practical AI and machine learning applications.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
