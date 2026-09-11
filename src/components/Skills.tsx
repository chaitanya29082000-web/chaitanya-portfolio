interface Skill {
  name: string
  icon: React.ReactNode
}

const skills: Skill[] = [
  {
    name: 'React',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" opacity="0.1" />
        <text x="12" y="17" textAnchor="middle" fontSize="11" fontWeight="bold" fill="currentColor">TS</text>
      </svg>
    ),
  },
  {
    name: 'Python',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2c-1.65 0-3.15.67-4.24 1.76C6.67 4.85 6 6.35 6 8v1.5h6v1H6c-2.21 0-4 1.79-4 4v4c0 2.21 1.79 4 4 4h2v-3.5c0-1.38 1.12-2.5 2.5-2.5h5c1.38 0 2.5-1.12 2.5-2.5V8c0-1.65-.67-3.15-1.76-4.24C15.15 2.67 13.65 2 12 2zm-1.5 2.5a1 1 0 110 2 1 1 0 010-2z" opacity="0.8" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.13 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.62 7.15 14.47 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.38 16.85 9.53 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.62 13.15 9.47 12 7 12z" opacity="0.8" />
      </svg>
    ),
  },
  {
    name: 'Git',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21.62 11.11l-8.73-8.73a1.3 1.3 0 00-1.84 0L9.17 4.27l2.32 2.32a1.55 1.55 0 011.97 1.97l2.24 2.24a1.56 1.56 0 011.6.37 1.56 1.56 0 01-.37 2.54 1.56 1.56 0 01-1.6-.04l-2.12-2.12v5.49a1.57 1.57 0 01-.43 1.09 1.56 1.56 0 01-2.21 0 1.56 1.56 0 01-.43-1.09v-5.49a1.56 1.56 0 01-.46-1.11l-2.4-2.4a1.3 1.3 0 00-1.84 0l-3.62 3.62a1.3 1.3 0 000 1.84l8.73 8.73a1.3 1.3 0 001.84 0l8.75-8.75a1.3 1.3 0 000-1.84z" opacity="0.8" />
      </svg>
    ),
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-text-muted text-sm font-mono">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Skills & Technologies
          </h2>
          <div className="flex-1 h-px bg-border ml-4" />
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center gap-3 p-6 bg-white border border-border rounded-xl hover:border-accent/30 hover:shadow-md hover:shadow-accent/5 transition-all duration-300"
            >
              <div className="text-text-muted group-hover:text-accent transition-colors duration-300">
                {skill.icon}
              </div>
              <span className="text-sm font-medium text-text-primary">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
