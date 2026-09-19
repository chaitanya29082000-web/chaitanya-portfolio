const journeyItems = [
  {
    icon: '💻',
    title: 'DSA Practice',
    description: 'Solving data structures and algorithms problems in C++ daily to strengthen problem-solving fundamentals.',
    tag: 'Current Focus',
    tagColor: 'bg-accent/15 text-accent border-accent/25',
    current: true,
  },
  {
    icon: '🛠️',
    title: 'Project Building',
    description: 'Building real projects with React, TypeScript, and modern web tools to apply what I learn in class.',
    tag: 'Active',
    tagColor: 'bg-green-500/15 text-green-600 dark:text-green-400 border-green-500/20',
    current: false,
  },
  {
    icon: '🤖',
    title: 'AI/ML Exploration',
    description: 'Learning machine learning concepts and experimenting with AI tools and APIs in personal projects.',
    tag: 'Learning',
    tagColor: 'bg-violet-500/15 text-violet-600 dark:text-violet-400 border-violet-500/20',
    current: false,
  },
  {
    icon: '🏆',
    title: 'Hackathons',
    description: 'Participating in hackathons to build under pressure, collaborate, and ship functional projects fast.',
    tag: 'Events',
    tagColor: 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/20',
    current: false,
  },
  {
    icon: '🎯',
    title: 'Internship Preparation',
    description: 'Preparing for software engineering internships through DSA, system design basics, and project work.',
    tag: 'Planning',
    tagColor: 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
    current: false,
  },
]

export default function LearningJourney() {
  return (
    <section id="journey" className="relative py-24 sm:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-violet/[0.015] to-bg-primary dark:from-dark-bg dark:via-violet/[0.025] dark:to-dark-bg pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-violet/[0.025] dark:bg-violet/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center gap-4 mb-4 justify-center">
            <span className="text-accent text-sm font-mono font-semibold">05.</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary">
              My <span className="text-gradient-blue">Learning Journey</span>
            </h2>
            <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-border via-accent/20 to-border ml-4 max-w-[200px]" />
          </div>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Where I am right now and what I am actively working on as a CS student.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div
            className="absolute left-[26px] sm:left-[30px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-accent/40 via-accent/15 to-accent/40 rounded-full"
            aria-hidden="true"
          />

          <ol className="space-y-5">
            {journeyItems.map((item, index) => (
              <li
                key={item.title}
                className="relative flex items-start gap-5 sm:gap-7"
              >
                {/* Step node */}
                <div className="relative z-10 shrink-0">
                  <div
                    className={`group flex items-center justify-center w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] rounded-full border font-mono text-sm sm:text-base font-semibold transition-all duration-300 ${
                      item.current
                        ? 'bg-accent/10 text-accent border-accent/40 shadow-lg shadow-accent/20'
                        : 'bg-white dark:bg-dark-card text-text-secondary border-border dark:border-dark-border shadow-sm group-hover:border-accent/30 group-hover:text-accent'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Card content */}
                <div
                  className={`flex-1 min-w-0 rounded-2xl p-6 sm:p-7 transition-all duration-300 ${
                    item.current
                      ? 'bg-accent/[0.04] dark:bg-accent/[0.05] border border-accent/25 dark:border-accent/20 card-shadow'
                      : 'bg-white dark:bg-dark-card border border-border/60 dark:border-dark-border hover:border-accent/20 hover:-translate-y-0.5 hover:card-shadow-hover'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <h3 className="font-display text-lg font-semibold text-text-primary">
                      {item.title}
                    </h3>
                    <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${item.tagColor}`}>
                      {item.tag}
                    </span>
                    {item.current && (
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-white dark:bg-slate-800 border border-border text-text-muted">
                        Step {index + 1} of {journeyItems.length}
                      </span>
                    )}
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
