import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href))
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )
    for (const s of sections) {
      if (s) observer.observe(s)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3'
          : 'py-4'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={`max-w-6xl mx-auto px-6 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-lg shadow-black/[0.03]'
          : ''
      }`}>
        <div className="h-14 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold text-text-primary tracking-tight hover:text-accent transition-colors duration-200"
            aria-label="Chaitanya - Home"
          >
            C<span className="text-gradient-blue">.</span>
          </a>

          {/* Desktop Nav - centered */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full ${
                    activeSection === link.href.slice(1)
                      ? 'text-accent bg-accent/8'
                      : 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary'
                  }`}
                  aria-current={activeSection === link.href.slice(1) ? 'page' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gradient-blue rounded-full transition-all duration-300 hover:bg-gradient-blue-hover hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5"
            >
              Let's Talk
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className="md:hidden flex flex-col gap-1.5 p-2 rounded-xl hover:bg-bg-secondary transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <span
                className={`w-5 h-0.5 bg-text-primary transition-all duration-300 origin-center rounded-full ${
                  isOpen ? 'rotate-45 translate-y-[4px]' : ''
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-text-primary transition-all duration-300 rounded-full ${
                  isOpen ? 'opacity-0 scale-0' : ''
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-text-primary transition-all duration-300 origin-center rounded-full ${
                  isOpen ? '-rotate-45 -translate-y-[4px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-6 mt-2 bg-white/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-lg px-4 py-3">
          <ul className="flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block py-2.5 text-sm font-medium transition-colors rounded-xl px-4 ${
                    activeSection === link.href.slice(1)
                      ? 'text-accent bg-accent/8'
                      : 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary'
                  }`}
                  onClick={() => setIsOpen(false)}
                  aria-current={activeSection === link.href.slice(1) ? 'page' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-2 mb-1 flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gradient-blue rounded-xl transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Let's Talk
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  )
}
