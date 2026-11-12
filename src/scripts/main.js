const root = document.documentElement;
const themeToggle = document.querySelector('[data-theme-toggle]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const mobileMenu = document.querySelector('#mobile-menu');
const header = document.querySelector('[data-header]');
const copyButton = document.querySelector('[data-copy-email]');
const copyLabel = document.querySelector('[data-copy-label]');
const copyStatus = document.querySelector('[data-copy-status]');
const yearTarget = document.querySelector('[data-year]');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const storage = {
  get(key) {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      // Storage can be unavailable in private modes; the theme still works for this view.
    }
  },
};

function currentTheme() {
  return root.dataset.theme === 'light' ? 'light' : 'dark';
}

function syncThemeToggle() {
  if (!themeToggle) return;
  const theme = currentTheme();
  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  themeToggle.setAttribute('aria-label', `Switch to ${nextTheme} theme`);
  themeToggle.setAttribute('aria-pressed', String(theme === 'light'));
  themeToggle.title = `Switch to ${nextTheme} theme`;
}

function setTheme(theme, persist = true) {
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
  if (persist) storage.set('theme', theme);
  syncThemeToggle();
}

if (themeToggle) {
  syncThemeToggle();
  themeToggle.addEventListener('click', () => {
    setTheme(currentTheme() === 'dark' ? 'light' : 'dark');
  });
}

const systemTheme = window.matchMedia('(prefers-color-scheme: light)');
systemTheme.addEventListener?.('change', (event) => {
  if (!storage.get('theme')) {
    setTheme(event.matches ? 'light' : 'dark', false);
  }
});

/* Mobile navigation */
const focusableSelector =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

function setMenu(open) {
  if (!menuToggle || !mobileMenu) return;
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  mobileMenu.hidden = !open;
  document.body.classList.toggle('menu-open', open);

  if (open) {
    const firstLink = mobileMenu.querySelector(focusableSelector);
    firstLink?.focus();
  }
}

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
  });

  mobileMenu.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      menuToggle.focus();
    }

    if (event.key !== 'Tab' || menuToggle.getAttribute('aria-expanded') !== 'true') return;

    const focusable = [...mobileMenu.querySelectorAll(focusableSelector)].filter(
      (element) => element.offsetParent !== null,
    );
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 960 && menuToggle.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
    }
  });
}

/* Header state */
function syncHeader() {
  if (!header) return;
  header.classList.toggle('is-scrolled', window.scrollY > 8);
}

syncHeader();
window.addEventListener('scroll', syncHeader, { passive: true });

/* Reveal on scroll */
const revealElements = [...document.querySelectorAll('.reveal')];

if (prefersReducedMotion.matches || !('IntersectionObserver' in window)) {
  revealElements.forEach((element) => element.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );

  revealElements.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index * 35, 210)}ms`;
    revealObserver.observe(element);
  });
}

/* Active section in navigation */
const navLinks = [...document.querySelectorAll('.nav-link')];
const sections = navLinks
  .map((link) => {
    const id = link.getAttribute('href')?.slice(1);
    return id ? document.getElementById(id) : null;
  })
  .filter(Boolean);

if ('IntersectionObserver' in window && sections.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          const active = link.getAttribute('href') === `#${entry.target.id}`;
          if (active) {
            link.setAttribute('aria-current', 'location');
          } else {
            link.removeAttribute('aria-current');
          }
        });
      });
    },
    { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

/* Copy email without pretending a form was submitted */
async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand('copy');
  textarea.remove();
  if (!copied) throw new Error('Copy command was rejected');
}

if (copyButton && copyLabel) {
  copyButton.addEventListener('click', async () => {
    const email = copyButton.getAttribute('data-copy-email');
    if (!email) return;

    try {
      await copyText(email);
      copyLabel.textContent = 'Copied';
      if (copyStatus) copyStatus.textContent = 'Email address copied to clipboard.';
      copyButton.classList.add('is-copied');
      window.setTimeout(() => {
        copyLabel.textContent = 'Copy address';
        copyButton.classList.remove('is-copied');
        if (copyStatus) copyStatus.textContent = '';
      }, 2400);
    } catch {
      copyLabel.textContent = 'Copy failed';
      if (copyStatus) copyStatus.textContent = `Copy failed. The address is ${email}.`;
      window.setTimeout(() => {
        copyLabel.textContent = 'Copy address';
      }, 2400);
    }
  });
}

if (yearTarget) {
  yearTarget.textContent = String(new Date().getFullYear());
}
