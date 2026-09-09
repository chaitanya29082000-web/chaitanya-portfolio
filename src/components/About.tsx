const highlights = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5m-4.75-11.396c.251.023.501.05.75.082M12 21a8.966 8.966 0 005.982-2.275M12 21a8.966 8.966 0 01-5.982-2.275M15.75 3.186a24.284 24.284 0 012.028.292M6.25 3.186a24.284 24.284 0 00-2.028.292M12 3.186c.682 0 1.35.06 2 .174M12 3.186c-.682 0-1.35.06-2 .174M5.25 14.5l-.625 3.75h14.75L18.75 14.5" />
      </svg>
    ),
    label: 'AI / ML',
    description: 'Building intelligent systems with modern ML frameworks',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1H21M3 3v18" />
      </svg>
    ),
    label: 'Problem Solving',
    description: 'Approaching challenges with analytical thinking',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    label: 'Project Building',
    description: 'Turning ideas into working software',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-accent/40 rounded-full mx-auto" />
        </div>

        {/* Main content card */}
        <div className="relative bg-bg-card border border-border rounded-2xl overflow-hidden">
          {/* Subtle decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="relative p-8 md:p-12 lg:p-16">
            {/* Introduction */}
            <div className="max-w-3xl">
              <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
                I am Chaitanya — an AI/ML developer with a deep interest in building intelligent
                systems that solve real problems. I believe in learning by building, and every
                project I take on is an opportunity to turn an idea into something useful.
              </p>
              <p className="text-text-secondary text-lg md:text-xl leading-relaxed mt-6">
                My focus is on practical applications of artificial intelligence and machine
                learning. I enjoy the process of taking a concept from understanding the
                problem to delivering a working solution.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-bg-primary/50 border border-border hover:border-accent/30 transition-all duration-300 focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 focus-within:ring-offset-bg-card"
                  tabIndex={0}
                >
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent/15 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary mb-1">
                      {item.label}
                    </h3>
                    <p className="text-text-muted text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
