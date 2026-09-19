import CodeVisual from './CodeVisual'

const techStack = [
  { name: 'React', icon: 'R', color: 'text-cyan bg-cyan/8 border-cyan/15 dark:bg-cyan/10 dark:border-cyan/20' },
  { name: 'TypeScript', icon: 'TS', color: 'text-blue-600 bg-blue-600/8 border-blue-600/15 dark:text-blue-400 dark:bg-blue-500/10 dark:border-blue-500/20' },
  { name: 'Python', icon: 'P', color: 'text-amber-500 bg-amber-500/8 border-amber-500/15 dark:bg-amber-500/10 dark:border-amber-500/20' },
  { name: 'C++', icon: 'C+', color: 'text-blue-500 bg-blue-500/8 border-blue-500/15 dark:bg-blue-500/10 dark:border-blue-500/20' },
  { name: 'DSA', icon: 'D', color: 'text-violet bg-violet/8 border-violet/15 dark:bg-violet/10 dark:border-violet/20' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden pt-24 pb-8"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-bg-primary to-bg-secondary/50 dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg" />
        {/* Layered ambient glows */}
        <div className="absolute top-[5%] right-[10%] w-[800px] h-[600px] bg-accent/[0.04] dark:bg-accent/[0.06] rounded-full blur-[160px]" />
        <div className="absolute bottom-[20%] left-[5%] w-[600px] h-[500px] bg-violet/[0.04] dark:bg-violet/[0.06] rounded-full blur-[140px]" />
        <div className="absolute top-[50%] left-[30%] w-[500px] h-[400px] bg-cyan/[0.03] dark:bg-cyan/[0.05] rounded-full blur-[120px]" />
        {/* Decorative dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[18%] left-[6%] w-2 h-2 bg-accent/20 dark:bg-accent/30 rounded-full" />
          <div className="absolute top-[12%] right-[15%] w-1.5 h-1.5 bg-violet/20 dark:bg-violet/30 rounded-full" />
          <div className="absolute bottom-[30%] left-[12%] w-1.5 h-1.5 bg-cyan/15 dark:bg-cyan/25 rounded-full" />
          <div className="absolute bottom-[35%] right-[8%] w-2 h-2 bg-accent/15 dark:bg-accent/25 rounded-full" />
          <div className="absolute top-[50%] left-[3%] w-1 h-1 bg-violet/15 dark:bg-violet/25 rounded-full" />
          <div className="absolute top-[65%] right-[5%] w-2.5 h-2.5 bg-accent/[0.07] dark:bg-accent/[0.12] rounded-full" />
          <div className="absolute top-[40%] left-[25%] w-1 h-1 bg-violet/10 dark:bg-violet/20 rounded-full" />
          <div className="absolute top-[25%] left-[40%] w-1.5 h-1.5 bg-cyan/10 dark:bg-cyan/20 rounded-full" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <div className="max-w-xl">
              {/* Hello pill */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-border/60 dark:border-slate-700/60 rounded-full mb-6 card-shadow animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0">
                <span className="text-base">👋</span>
                <span className="text-sm font-medium text-text-secondary">Hello, I'm</span>
              </div>

              {/* Name */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6 animate-[fadeInUp_0.6s_ease-out_0.1s_forwards] opacity-0">
                <span className="text-gradient-blue">Chaitanya</span>
              </h1>

              {/* Statement */}
              <p className="text-xl sm:text-2xl text-text-secondary leading-relaxed mb-6 animate-[fadeInUp_0.6s_ease-out_0.2s_forwards] opacity-0">
                Computer Science student building{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-violet font-semibold">
                  practical software and AI projects.
                </span>
              </p>

              {/* Supporting text */}
              <p className="text-text-muted text-base leading-relaxed mb-10 max-w-md animate-[fadeInUp_0.6s_ease-out_0.3s_forwards] opacity-0">
                I practice DSA in C++, learn Python, and build with React and
                TypeScript. Currently exploring AI/ML and preparing for
                software engineering internships.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-start gap-4 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards] opacity-0">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-blue text-white font-medium rounded-full transition-all duration-300 hover:bg-gradient-blue-hover hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5"
                >
                  View My Work
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white dark:bg-slate-800 border border-border dark:border-slate-700 text-text-secondary font-medium rounded-full transition-all duration-300 hover:border-accent/40 hover:text-accent hover:shadow-md hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>

            {/* Right: Code Visual */}
            <div className="hidden lg:flex justify-center animate-[fadeIn_0.8s_ease-out_0.3s_forwards] opacity-0">
              <CodeVisual />
            </div>
          </div>
        </div>
      </div>

      {/* Technology strip - normal flow, always at bottom */}
      <div className="relative z-10 mt-auto">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 hover:scale-105 ${tech.color}`}
              >
                <span className="w-6 h-6 flex items-center justify-center text-[10px] font-bold bg-white/80 dark:bg-slate-700/80 rounded-md border border-current/10">
                  {tech.icon}
                </span>
                <span className="text-xs font-semibold">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
