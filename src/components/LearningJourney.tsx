const journeyItems = [
  {
    icon: '💻',
    title: 'DSA Practice',
    description: 'Solving data structures and algorithms problems in C++ to strengthen problem-solving fundamentals.',
    tag: 'Ongoing',
    tagColor: 'bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/20',
  },
  {
    icon: '🛠️',
    title: 'Project Building',
    description: 'Building real projects with React, TypeScript, and modern web tools to apply what I learn in class.',
    tag: 'Active',
    tagColor: 'bg-green-500/15 text-green-600 dark:text-green-400 border-green-500/20',
  },
  {
    icon: '🤖',
    title: 'AI/ML Exploration',
    description: 'Learning machine learning concepts and experimenting with AI tools and APIs in personal projects.',
    tag: 'Learning',
    tagColor: 'bg-violet-500/15 text-violet-600 dark:text-violet-400 border-violet-500/20',
  },
  {
    icon: '🏆',
    title: 'Hackathons',
    description: 'Participating in hackathons to build under pressure, collaborate, and ship functional projects fast.',
    tag: 'Events',
    tagColor: 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/20',
  },
  {
    icon: '🎯',
    title: 'Internship Preparation',
    description: 'Preparing for software engineering internships through DSA, system design basics, and project work.',
    tag: 'Planning',
    tagColor: 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {journeyItems.map((item) => (
            <div
              key={item.title}
              className="group relative flex items-start gap-4 p-6 bg-white dark:bg-dark-card border border-border/60 dark:border-dark-border rounded-2xl card-shadow hover:card-shadow-hover hover:border-accent/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl shrink-0" aria-hidden="true">{item.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h3 className="font-display text-lg font-semibold text-text-primary">{item.title}</h3>
                  <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${item.tagColor}`}>
                    {item.tag}
                  </span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-blue rounded-full group-hover:w-10 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}