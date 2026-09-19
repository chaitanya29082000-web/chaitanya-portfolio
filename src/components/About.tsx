const features = [
  {
    title: 'CS Student',
    description: 'Studying computer science fundamentals and applying them in projects.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    color: 'bg-accent/8 text-accent border-accent/15',
  },
  {
    title: 'Project Builder',
    description: 'Building practical projects to learn and apply new technologies.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    color: 'bg-violet/8 text-violet border-violet/15',
  },
  {
    title: 'DSA Enthusiast',
    description: 'Practicing data structures and algorithms to strengthen problem-solving.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1H21M3 3v18" />
      </svg>
    ),
    color: 'bg-cyan/8 text-cyan border-cyan/15',
  },
  {
    title: 'AI Explorer',
    description: 'Curious about AI/ML and experimenting with intelligent systems.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    color: 'bg-amber-500/8 text-amber-500 border-amber-500/15',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary/20 to-bg-primary dark:from-dark-bg dark:via-dark-surface/30 dark:to-dark-bg pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-violet/[0.025] dark:bg-violet/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-accent text-sm font-mono font-semibold">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            About Me
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border via-accent/20 to-border ml-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-start">
          {/* Left: Text + Features */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-5 text-text-secondary text-lg leading-relaxed">
              <p>
                I am Chaitanya, a Computer Science student interested in software
                development and AI. I spend time practicing DSA in C++, learning
                Python, and building projects with React and TypeScript.
              </p>
              <p>
                I learn best by building things. Every project is a chance to pick
                up new tools and solve real problems. Right now, I am focused on
                strengthening my fundamentals and exploring AI/ML while preparing
                for software engineering internships.
              </p>
            </div>

            {/* Tagline */}
            <div className="inline-flex flex-col gap-1.5 px-5 py-4 bg-gradient-to-r from-accent/5 to-violet/5 dark:from-accent/10 dark:to-violet/10 border border-accent/10 dark:border-accent/20 rounded-2xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-violet text-sm italic font-semibold tracking-wide">Learning by Building</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet to-cyan text-sm italic font-semibold tracking-wide">One Project at a Time</span>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group p-5 bg-white dark:bg-dark-card border border-border/60 dark:border-dark-border rounded-xl card-shadow hover:card-shadow-hover hover:border-accent/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-110 ${feature.color}`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-text-primary mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Developer Visual */}
          <div className="lg:col-span-2 hidden lg:block">
            <div className="relative mt-2">
              {/* Glow */}
              <div className="absolute -inset-10 bg-gradient-to-br from-accent/10 via-violet/8 to-cyan/5 rounded-3xl blur-2xl" />

              {/* Dark code card */}
              <div className="relative bg-[#0F172A] border border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  <span className="ml-2 text-[10px] text-slate-500 font-mono">about.ts</span>
                </div>
                <div className="font-mono text-xs leading-[1.9] space-y-1">
                  <div><span className="text-[#C084FC]">const</span> <span className="text-slate-300">about</span> <span className="text-slate-500">=</span> <span className="text-slate-500">{'{'}</span></div>
                  <div className="pl-4"><span className="text-[#67E8F9]">role</span><span className="text-slate-500">:</span> <span className="text-[#86EFAC]">"CS Student"</span><span className="text-slate-500">,</span></div>
                  <div className="pl-4"><span className="text-[#67E8F9]">focus</span><span className="text-slate-500">:</span> <span className="text-[#86EFAC]">"DSA + Web + AI/ML"</span><span className="text-slate-500">,</span></div>
                  <div className="pl-4"><span className="text-[#67E8F9]">status</span><span className="text-slate-500">:</span> <span className="text-[#86EFAC]">"Internship Ready"</span><span className="text-slate-500">,</span></div>
                  <div className="pl-4"><span className="text-[#67E8F9]">tools</span><span className="text-slate-500">:</span> <span className="text-slate-500">[</span></div>
                  <div className="pl-8"><span className="text-[#86EFAC]">"C++"</span><span className="text-slate-500">,</span> <span className="text-[#86EFAC]">"Python"</span><span className="text-slate-500">,</span></div>
                  <div className="pl-8"><span className="text-[#86EFAC]">"React"</span><span className="text-slate-500">,</span> <span className="text-[#86EFAC]">"TypeScript"</span></div>
                  <div className="pl-4"><span className="text-slate-500">]</span></div>
                  <div><span className="text-slate-500">{'}'}</span></div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-3 -right-3 w-9 h-9 bg-gradient-to-br from-accent to-violet rounded-lg flex items-center justify-center shadow-lg shadow-accent/20">
                  <span className="text-white text-xs font-mono font-bold">&lt;/&gt;</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-accent/8 to-violet/8 rounded-2xl blur-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
