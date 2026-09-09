export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-primary to-bg-secondary" />

        {/* Radial glow behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-accent/6 rounded-full blur-[150px]" />

        {/* Secondary warm glow */}
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-indigo-500/4 rounded-full blur-[100px]" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating abstract nodes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Node 1 */}
          <div className="absolute top-[15%] left-[10%] w-1.5 h-1.5 bg-accent/30 rounded-full animate-[pulse_4s_ease-in-out_infinite]" />
          <div className="absolute top-[15%] left-[10%] w-20 h-px bg-gradient-to-r from-accent/20 to-transparent rotate-[30deg]" />

          {/* Node 2 */}
          <div className="absolute top-[25%] right-[15%] w-2 h-2 bg-accent-light/25 rounded-full animate-[pulse_5s_ease-in-out_infinite_1s]" />
          <div className="absolute top-[25%] right-[15%] w-24 h-px bg-gradient-to-l from-accent/15 to-transparent -rotate-[20deg]" />

          {/* Node 3 */}
          <div className="absolute bottom-[30%] left-[18%] w-1 h-1 bg-accent/20 rounded-full animate-[pulse_6s_ease-in-out_infinite_2s]" />

          {/* Node 4 */}
          <div className="absolute top-[40%] right-[8%] w-1 h-1 bg-accent-light/20 rounded-full animate-[pulse_4.5s_ease-in-out_infinite_0.5s]" />

          {/* Node 5 - larger cluster */}
          <div className="absolute bottom-[20%] right-[20%] w-2.5 h-2.5 bg-accent/20 rounded-full animate-[pulse_5.5s_ease-in-out_infinite_1.5s]" />
          <div className="absolute bottom-[20%] right-[20%] w-16 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent rotate-[45deg]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-8 animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0">
          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-[pulse_2s_ease-in-out_infinite]" />
          <span className="text-accent font-medium text-xs tracking-wider uppercase">
            AI/ML Developer
          </span>
        </div>

        {/* Name */}
        <h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 leading-[0.95] tracking-tighter animate-[fadeInUp_0.8s_ease-out_0.15s_forwards] opacity-0"
        >
          <span className="bg-gradient-to-b from-text-primary via-text-primary to-text-muted bg-clip-text text-transparent">
            Chaitanya Bhambere
          </span>
        </h1>

        {/* Introduction */}
        <p className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-12 animate-[fadeInUp_0.8s_ease-out_0.3s_forwards] opacity-0">
          I build practical AI and machine learning solutions that turn ideas into useful products.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fadeInUp_0.8s_ease-out_0.45s_forwards] opacity-0">
          <a
            href="#projects"
            className="group relative px-8 py-3.5 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
          >
            <span className="relative z-10">View My Projects</span>
          </a>
          <a
            href="https://github.com/chaitanya29082000-web"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border border-border-light hover:border-text-muted text-text-secondary hover:text-text-primary font-medium rounded-lg transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-secondary to-transparent" />
    </section>
  )
}
