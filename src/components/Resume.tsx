export default function Resume() {
  return (
    <section id="resume" className="py-24 sm:py-32 px-6 bg-bg-secondary">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Resume
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            View or download my resume.
          </p>
        </div>

        {/* Resume CTA card */}
        <div className="bg-bg-card border border-border rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-md mx-auto">
            {/* Icon */}
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-accent/10 mx-auto mb-6">
              <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>

            {/* Description */}
            <p className="text-text-secondary text-sm leading-relaxed mb-8">
              A summary of my skills, projects, and experience.
            </p>

            {/* Download button */}
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2.5 px-8 py-3.5 text-sm font-medium text-white bg-accent hover:bg-accent-light rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/20 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-card"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
