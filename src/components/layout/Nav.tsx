import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Services', to: '/services' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Proof of Destruction', to: '/proof-of-destruction' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [mobileOpen])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-apd-forest transition-shadow duration-200 ${
        scrolled ? 'shadow-xl shadow-black/30' : ''
      }`}
      role="banner"
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 bg-apd-clay text-white text-sm font-semibold px-4 py-2 rounded z-[100] outline-none ring-2 ring-white"
      >
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 rounded outline-none focus-visible:ring-2 focus-visible:ring-apd-clay"
            aria-label="Arizona Product Destruction — Home"
          >
            <div className="bg-apd-clay text-white font-black text-base px-3 py-1.5 tracking-[0.15em] leading-none select-none">
              APD
            </div>
            <div className="hidden sm:block leading-tight">
              <span className="block text-white font-semibold text-sm tracking-wide">
                Arizona Product
              </span>
              <span className="block text-white/50 text-xs uppercase tracking-[0.18em]">
                Destruction
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium rounded transition-colors outline-none focus-visible:ring-2 focus-visible:ring-apd-clay ${
                    isActive
                      ? 'text-apd-clay'
                      : 'text-white/75 hover:text-white hover:bg-white/8'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-apd-olive hover:bg-apd-olive-dark text-white font-semibold text-sm px-5 py-2.5 rounded transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-apd-forest"
            >
              Request Service
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden text-white p-2 rounded hover:bg-white/10 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-apd-clay"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-apd-forest border-t border-white/10"
        >
          <nav
            className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `block px-4 py-3 text-sm font-medium rounded transition-colors outline-none focus-visible:ring-2 focus-visible:ring-apd-clay ${
                    isActive
                      ? 'text-apd-clay bg-white/5'
                      : 'text-white/75 hover:text-white hover:bg-white/8'
                  }`
                }
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </NavLink>
            ))}
            <div className="pt-3 mt-2 border-t border-white/10">
              <Link
                to="/contact"
                className="block bg-apd-olive hover:bg-apd-olive-dark text-white font-semibold text-sm px-4 py-3 rounded text-center transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Request Service
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
