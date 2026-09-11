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
      <div className="relative w-full h-full bg-gradient-to-br from-accent/8 via-white to-indigo-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-accent/8 rounded-full blur-3xl" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 400 300">
            <path d="M120 120 C200 80 280 80 320 120" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="4 4" className="text-accent" />
            <path d="M120 180 C200 220 280 220 320 180" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="4 4" className="text-accent" />
            <circle cx="120" cy="120" r="4" className="text-accent" fill="currentColor" opacity="0.3" />
            <circle cx="320" cy="120" r="4" className="text-accent" fill="currentColor" opacity="0.3" />
            <circle cx="120" cy="180" r="4" className="text-accent" fill="currentColor" opacity="0.3" />
            <circle cx="320" cy="180" r="4" className="text-accent" fill="currentColor" opacity="0.3" />
          </svg>
          <div className="absolute bottom-[28%] left-[25%] flex items-center gap-3">
            <div className="w-32 h-2 bg-accent/10 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-accent/25 rounded-full" />
            </div>
            <span className="text-accent/30 text-xs font-mono">87%</span>
          </div>
          <div className="absolute top-[20%] left-[22%] text-accent/15">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <path d="M14 2v6h6" />
              <line x1="9" y1="13" x2="15" y2="13" />
              <line x1="9" y1="17" x2="13" y2="17" />
            </svg>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-accent/20 rounded-full border border-accent/15" />
        </div>
      </div>
    )
  }

  if (type === 'jaldrishti') {
    return (
      <div className="relative w-full h-full bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-400/8 rounded-full blur-3xl" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 400 300">
            <line x1="200" y1="150" x2="80" y2="60" stroke="currentColor" strokeWidth="1" className="text-blue-500" />
            <line x1="200" y1="150" x2="320" y2="50" stroke="currentColor" strokeWidth="1" className="text-blue-500" />
            <line x1="200" y1="150" x2="350" y2="200" stroke="currentColor" strokeWidth="1" className="text-blue-500" />
            <line x1="200" y1="150" x2="60" y2="230" stroke="currentColor" strokeWidth="1" className="text-blue-500" />
            <line x1="200" y1="150" x2="200" y2="30" stroke="currentColor" strokeWidth="1" className="text-blue-500" />
            <line x1="200" y1="150" x2="300" y2="280" stroke="currentColor" strokeWidth="1" className="text-blue-500" />
          </svg>
          <div className="absolute top-[20%] left-[20%] w-2.5 h-2.5 bg-blue-400/30 rounded-full" />
          <div className="absolute top-[17%] right-[20%] w-2 h-2 bg-blue-300/25 rounded-full" />
          <div className="absolute bottom-[30%] right-[12%] w-2.5 h-2.5 bg-blue-400/20 rounded-full" />
          <div className="absolute bottom-[23%] left-[15%] w-2 h-2 bg-blue-400/25 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-blue-400/25 rounded-full border border-blue-400/20" />
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-violet-50 via-white to-indigo-50 overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(139,92,246,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.4) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-[25%] left-[15%] space-y-2.5">
          <div className="w-28 h-1.5 bg-violet-400/10 rounded-full" />
          <div className="w-18 h-1.5 bg-violet-400/6 rounded-full" />
          <div className="w-22 h-1.5 bg-violet-400/8 rounded-full" />
        </div>
        <div className="absolute bottom-[30%] left-1/2 -translate-x-1/2 w-48 h-32 bg-violet-400/5 rounded-xl blur-xl" />
        <div className="absolute bottom-[25%] right-[20%] text-violet-400/10 text-4xl font-mono select-none">
          {'{ }'}
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group relative bg-white border border-border rounded-2xl overflow-hidden hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 hover:-translate-y-1">
      {/* Visual area */}
      <div className="relative h-52 sm:h-56 overflow-hidden">
        <div className="transition-transform duration-500 group-hover:scale-105">
          <ProjectVisual type={project.visual} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
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
                className="px-2.5 py-1 text-xs font-medium text-text-muted bg-bg-secondary border border-border rounded-md"
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
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white bg-accent hover:bg-accent-light px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-md hover:shadow-accent/20"
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
      <div className="absolute top-4 left-5 text-xs font-mono text-text-muted/40">
        {String(index + 1).padStart(2, '0')}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 px-6 bg-bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-4">
            <span className="text-text-muted text-sm font-mono">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              Featured Projects
            </h2>
          </div>
          <a
            href="https://github.com/chaitanya29082000-web"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-accent transition-colors duration-200"
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
