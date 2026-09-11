interface Skill {
  name: string
  icon: React.ReactNode
  color: string
  bg: string
  border: string
}

const skills: Skill[] = [
  {
    name: 'React',
    color: 'text-cyan',
    bg: 'bg-cyan/8',
    border: 'border-cyan/15',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    color: 'text-accent',
    bg: 'bg-accent/8',
    border: 'border-accent/15',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" opacity="0.1" />
        <text x="12" y="17" textAnchor="middle" fontSize="11" fontWeight="bold" fill="currentColor">TS</text>
      </svg>
    ),
  },
  {
    name: 'Python',
    color: 'text-amber-500',
    bg: 'bg-amber-500/8',
    border: 'border-amber-500/15',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2c-1.65 0-3.15.67-4.24 1.76C6.67 4.85 6 6.35 6 8v1.5h6v1H6c-2.21 0-4 1.79-4 4v4c0 2.21 1.79 4 4 4h2v-3.5c0-1.38 1.12-2.5 2.5-2.5h5c1.38 0 2.5-1.12 2.5-2.5V8c0-1.65-.67-3.15-1.76-4.24C15.15 2.67 13.65 2 12 2zm-1.5 2.5a1 1 0 110 2 1 1 0 010-2z" opacity="0.8" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    color: 'text-cyan',
    bg: 'bg-cyan/8',
    border: 'border-cyan/15',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.13 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.62 7.15 14.47 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.38 16.85 9.53 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.62 13.15 9.47 12 7 12z" opacity="0.8" />
      </svg>
    ),
  },
  {
    name: 'Git',
    color: 'text-orange-500',
    bg: 'bg-orange-500/8',
    border: 'border-orange-500/15',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21.62 11.11l-8.73-8.73a1.3 1.3 0 00-1.84 0L9.17 4.27l2.32 2.32a1.55 1.55 0 011.97 1.97l2.24 2.24a1.56 1.56 0 011.6.37 1.56 1.56 0 01-.37 2.54 1.56 1.56 0 01-1.6-.04l-2.12-2.12v5.49a1.57 1.57 0 01-.43 1.09 1.56 1.56 0 01-2.21 0 1.56 1.56 0 01-.43-1.09v-5.49a1.56 1.56 0 01-.46-1.11l-2.4-2.4a1.3 1.3 0 00-1.84 0l-3.62 3.62a1.3 1.3 0 000 1.84l8.73 8.73a1.3 1.3 0 001.84 0l8.75-8.75a1.3 1.3 0 000-1.84z" opacity="0.8" />
      </svg>
    ),
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-accent/[0.015] to-bg-primary pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-violet/[0.025] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-accent text-sm font-mono font-semibold">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Skills & Technologies
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border via-accent/20 to-border ml-4" />
        </div>

        {/* Supporting text */}
        <p className="text-text-secondary text-base max-w-xl mb-12 leading-relaxed">
          Technologies I use to build modern, performant web applications and intelligent systems.
        </p>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative flex flex-col items-center gap-3.5 p-6 bg-white border border-border/60 rounded-2xl card-shadow hover:card-shadow-hover hover:border-accent/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* Icon */}
              <div className={`w-14 h-14 flex items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-110 ${skill.bg} ${skill.border} ${skill.color}`}>
                {skill.icon}
              </div>
              <span className="text-sm font-semibold text-text-primary">
                {skill.name}
              </span>
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-blue rounded-full group-hover:w-10 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
