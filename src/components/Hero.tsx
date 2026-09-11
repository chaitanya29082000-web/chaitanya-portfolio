import CodeVisual from './CodeVisual'

const techStack = [
  { name: 'React', icon: 'R' },
  { name: 'Next.js', icon: 'N' },
  { name: 'Python', icon: 'P' },
  { name: 'Node.js', icon: 'Node' },
  { name: 'Git', icon: 'G' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden pt-16"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-bg-secondary" />

        {/* Subtle radial glow */}
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-lavender/5 rounded-full blur-[100px]" />

        {/* Decorative dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] left-[8%] w-1.5 h-1.5 bg-accent/20 rounded-full" />
          <div className="absolute top-[15%] right-[12%] w-1 h-1 bg-lavender/25 rounded-full" />
          <div className="absolute bottom-[25%] left-[15%] w-1 h-1 bg-accent/15 rounded-full" />
          <div className="absolute bottom-[30%] right-[10%] w-1.5 h-1.5 bg-accent/20 rounded-full" />
          <div className="absolute top-[45%] left-[5%] w-1 h-1 bg-lavender/20 rounded-full" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <div className="max-w-xl">
              {/* Greeting */}
              <p className="text-text-secondary text-base font-medium mb-3 animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0">
                Hi, I'm
              </p>

              {/* Name */}
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6 animate-[fadeInUp_0.6s_ease-out_0.1s_forwards] opacity-0">
                <span className="text-text-primary">Chaitanya</span>
              </h1>

              {/* Statement */}
              <p className="text-xl sm:text-2xl text-text-secondary leading-relaxed mb-8 animate-[fadeInUp_0.6s_ease-out_0.2s_forwards] opacity-0">
                A Developer who turns ideas into{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-lavender font-semibold">
                  impactful products.
                </span>
              </p>

              {/* Supporting text */}
              <p className="text-text-muted text-base leading-relaxed mb-10 max-w-md animate-[fadeInUp_0.6s_ease-out_0.3s_forwards] opacity-0">
                I build modern web applications, explore AI, and work on meaningful
                real-world solutions. Currently focused on creating technology that
                makes a difference.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-start gap-4 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards] opacity-0">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-text-primary text-white font-medium rounded-full transition-all duration-300 hover:bg-accent hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-0.5"
                >
                  View My Work
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-border text-text-secondary font-medium rounded-full transition-all duration-300 hover:border-text-primary hover:text-text-primary hover:-translate-y-0.5"
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
      <div className="relative z-10 border-t border-border bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center gap-8 sm:gap-12 flex-wrap">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 text-text-muted hover:text-text-secondary transition-colors duration-200"
              >
                <span className="w-6 h-6 flex items-center justify-center text-[10px] font-bold bg-bg-secondary border border-border rounded-md">
                  {tech.icon}
                </span>
                <span className="text-xs font-medium tracking-wide uppercase">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
