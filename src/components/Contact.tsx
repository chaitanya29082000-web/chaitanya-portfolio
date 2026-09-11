import { type ReactNode, useState } from 'react'

interface ContactOption {
  label: string
  href: string
  icon: ReactNode
  color: string
}

const contactOptions: ContactOption[] = [
  {
    label: 'Email',
    href: 'mailto:chaitanya29082000@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    color: 'bg-accent/8 text-accent border-accent/15 group-hover:bg-accent/12',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/chaitanya-bhambere-53a563386/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: 'bg-accent/8 text-accent border-accent/15 group-hover:bg-accent/12',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/chaitanya29082000-web',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    color: 'bg-violet/8 text-violet border-violet/15 group-hover:bg-violet/12',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Portfolio Contact from ${formData.name}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    window.open(`mailto:chaitanya29082000@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank')
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-6 overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-accent/[0.02] to-bg-secondary/30 dark:from-dark-bg dark:via-accent/[0.03] dark:to-dark-surface pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/[0.03] dark:bg-accent/[0.05] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-violet/[0.02] dark:bg-violet/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-accent text-sm font-mono font-semibold">06.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Get In Touch
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border via-accent/20 to-border ml-4" />
        </div>

        {/* Supporting text */}
        <p className="text-text-secondary text-lg max-w-2xl mb-12 leading-relaxed">
          Have a project idea, a question, or just want to say hi? I'd love to hear from you!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Social cards */}
          <div className="space-y-4">
            {contactOptions.map((option) => (
              <a
                key={option.label}
                href={option.href}
                target={option.href.startsWith('mailto') ? undefined : '_blank'}
                rel={option.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="group flex items-center gap-4 p-5 bg-white dark:bg-dark-card border border-border/60 dark:border-dark-border rounded-xl card-shadow hover:card-shadow-hover hover:border-accent/20 transition-all duration-300"
              >
                <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-110 ${option.color}`}>
                  {option.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-text-primary mb-0.5">
                    {option.label}
                  </h3>
                  <p className="text-text-muted text-xs">
                    {option.href.startsWith('mailto') ? option.href.replace('mailto:', '') : 'Connect'}
                  </p>
                </div>
                <svg className="w-4 h-4 text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            ))}
          </div>

          {/* Right: Contact form */}
          <div className="bg-white dark:bg-dark-card border border-border/60 dark:border-dark-border rounded-2xl p-6 sm:p-8 card-shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-bg-primary/50 dark:bg-slate-800/50 border border-border/60 dark:border-slate-600/60 rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-200"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-bg-primary/50 dark:bg-slate-800/50 border border-border/60 dark:border-slate-600/60 rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-200"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-bg-primary/50 dark:bg-slate-800/50 border border-border/60 dark:border-slate-600/60 rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or just say hi..."
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-blue text-white font-medium rounded-full transition-all duration-300 hover:bg-gradient-blue-hover hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5"
              >
                Send Message
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
