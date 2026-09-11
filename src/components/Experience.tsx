export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary/20 to-bg-primary pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-accent/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-accent text-sm font-mono font-semibold">05.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Currently Exploring
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border via-accent/20 to-border ml-4" />
        </div>

        {/* Card */}
        <div className="bg-white border border-border/60 rounded-2xl p-8 md:p-12 card-shadow-lg">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-accent/10 to-violet/10 border border-accent/15 text-accent">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
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
                <span className="px-4 py-1.5 text-xs font-medium text-accent bg-accent/8 border border-accent/15 rounded-full">
                  AI / ML
                </span>
                <span className="px-4 py-1.5 text-xs font-medium text-violet bg-violet/8 border border-violet/15 rounded-full">
                  Full-Stack Development
                </span>
                <span className="px-4 py-1.5 text-xs font-medium text-cyan bg-cyan/8 border border-cyan/15 rounded-full">
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
