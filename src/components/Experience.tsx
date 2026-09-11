export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 px-6 bg-bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-text-muted text-sm font-mono">05.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Experience
          </h2>
          <div className="flex-1 h-px bg-border ml-4" />
        </div>

        {/* Currently exploring card */}
        <div className="bg-white border border-border rounded-2xl p-8 md:p-12">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 text-accent">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Currently Exploring
              </h3>
              <p className="text-text-secondary text-base leading-relaxed mb-6">
                Focused on building AI/ML projects and modern web applications.
                Continuously learning new technologies and improving my skills through
                hands-on project work and real-world problem solving.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 text-xs font-medium text-accent bg-accent/10 rounded-full">
                  AI / ML
                </span>
                <span className="px-3 py-1.5 text-xs font-medium text-accent bg-accent/10 rounded-full">
                  Full-Stack Development
                </span>
                <span className="px-3 py-1.5 text-xs font-medium text-accent bg-accent/10 rounded-full">
                  Open Source
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
