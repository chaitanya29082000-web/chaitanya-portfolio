import { useState, useEffect } from 'react'

function getInitialDark(): boolean {
  if (typeof window === 'undefined') return false
  const saved = localStorage.getItem('portfolio-theme')
  if (saved) return saved === 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export default function ThemeToggle() {
  const [dark, setDark] = useState(getInitialDark)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light')
  }, [dark])

  const toggle = () => setDark((prev) => !prev)

  return (
    <button
      type="button"
      onClick={toggle}
      className="relative w-10 h-10 flex items-center justify-center rounded-xl border border-border/50 dark:border-slate-700/50 bg-white/80 dark:bg-slate-800/80 text-text-secondary hover:text-text-primary hover:border-accent/30 transition-all duration-200"
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Sun icon */}
      <svg
        className={`w-[18px] h-[18px] transition-all duration-300 ${dark ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0 absolute'}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
      {/* Moon icon */}
      <svg
        className={`w-[18px] h-[18px] transition-all duration-300 ${dark ? '-rotate-90 scale-0 opacity-0 absolute' : 'rotate-0 scale-100 opacity-100'}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>
    </button>
  )
}
