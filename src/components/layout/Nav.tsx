import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CaretDownIcon } from '@phosphor-icons/react'
import logoSvg from '../../assets/logo-apd.svg'
import { SERVICES } from '../../data/services'

const NAV_LINKS = [
  { label: 'Home',                 to: '/' },
  { label: 'About',                to: '/about' },
  { label: 'Services',             to: '/services' },
  { label: 'Cert of Destruction',  to: '/proof-of-destruction' },
  { label: 'Sustainability',       to: '/sustainability' },
  { label: 'Giving Back',          to: '/giving-back' },
]

const SERVICE_LINKS = SERVICES.map(({ slug, title }) => ({ label: title, to: `/services/${slug}` }))

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const desktopServicesWrapperRef = useRef<HTMLDivElement>(null)
  const desktopServicesTriggerRef = useRef<HTMLAnchorElement>(null)
  const desktopServicesCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  // Captures whether the menu was closed at the moment a touch gesture began,
  // before the browser's synthetic mouseenter/click sequence can flip it open —
  // lets the very first tap open the menu without also firing its navigation.
  const desktopServicesTouchOpenedRef = useRef(false)

  const clearDesktopServicesCloseTimeout = () => {
    if (desktopServicesCloseTimeoutRef.current) {
      clearTimeout(desktopServicesCloseTimeoutRef.current)
      desktopServicesCloseTimeoutRef.current = null
    }
  }

  const openDesktopServices = () => {
    clearDesktopServicesCloseTimeout()
    setDesktopServicesOpen(true)
  }

  const scheduleDesktopServicesClose = () => {
    clearDesktopServicesCloseTimeout()
    desktopServicesCloseTimeoutRef.current = setTimeout(() => setDesktopServicesOpen(false), 200)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => () => clearDesktopServicesCloseTimeout(), [])

  useEffect(() => {
    if (!desktopServicesOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        clearDesktopServicesCloseTimeout()
        setDesktopServicesOpen(false)
        desktopServicesTriggerRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [desktopServicesOpen])

  useEffect(() => {
    if (!desktopServicesOpen) return
    const onPointerDown = (e: PointerEvent) => {
      if (
        desktopServicesWrapperRef.current &&
        !desktopServicesWrapperRef.current.contains(e.target as Node)
      ) {
        clearDesktopServicesCloseTimeout()
        setDesktopServicesOpen(false)
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [desktopServicesOpen])

  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMobileOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [mobileOpen])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    if (!mobileOpen) setMobileServicesOpen(false)
  }, [mobileOpen])

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: '#fff',
        borderBottom: `1px solid ${scrolled ? 'var(--apd-border)' : 'var(--apd-border)'}`,
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
        transition: 'box-shadow 200ms ease-out',
      }}
      role="banner"
    >
      <a
        href="#main-content"
        style={{
          position: 'absolute',
          left: -9999,
          top: 'auto',
          width: 1,
          height: 1,
          overflow: 'hidden',
        }}
        onFocus={(e) => {
          const el = e.currentTarget
          el.style.position = 'absolute'
          el.style.left = '16px'
          el.style.top = '12px'
          el.style.width = 'auto'
          el.style.height = 'auto'
          el.style.overflow = 'visible'
        }}
        onBlur={(e) => {
          const el = e.currentTarget
          el.style.position = 'absolute'
          el.style.left = '-9999px'
        }}
      >
        Skip to main content
      </a>

      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-pad)' }}>
        <div className="justify-between lg:justify-center" style={{ display: 'flex', alignItems: 'center', height: 68 }}>

          {/* Logo — mobile only */}
          <Link
            to="/"
            className="flex items-center lg:hidden"
            style={{ textDecoration: 'none', outline: 'none' }}
            aria-label="Arizona Product Destruction — Home"
          >
            <img src={logoSvg} alt="APD" style={{ height: 36, width: 'auto', display: 'block' }} />
          </Link>

          {/* Desktop nav */}
          <nav
            style={{ alignItems: 'center', gap: 2 }}
            aria-label="Main navigation"
            className="hidden lg:flex"
          >
            {NAV_LINKS.map(({ label, to }) => (
              label === 'Services' ? (
                <div
                  key={to}
                  ref={desktopServicesWrapperRef}
                  style={{ position: 'relative' }}
                  onMouseEnter={openDesktopServices}
                  onMouseLeave={scheduleDesktopServicesClose}
                  onFocus={openDesktopServices}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                      clearDesktopServicesCloseTimeout()
                      setDesktopServicesOpen(false)
                    }
                  }}
                >
                  <NavLink
                    to={to}
                    ref={desktopServicesTriggerRef}
                    className="nav-link"
                    aria-haspopup="true"
                    aria-expanded={desktopServicesOpen}
                    aria-controls="desktop-services-menu"
                    onTouchStart={() => {
                      desktopServicesTouchOpenedRef.current = !desktopServicesOpen
                    }}
                    onClick={(e) => {
                      // If this tap gesture started while the menu was closed, let it
                      // open the menu without navigating — the browser's synthetic
                      // mouseenter (fired between touchstart and click) would otherwise
                      // have already flipped desktopServicesOpen to true by now, so we
                      // rely on the ref captured at touchstart instead of that state.
                      if (desktopServicesTouchOpenedRef.current) {
                        desktopServicesTouchOpenedRef.current = false
                        e.preventDefault()
                        openDesktopServices()
                        return
                      }
                      clearDesktopServicesCloseTimeout()
                      setDesktopServicesOpen(false)
                    }}
                    style={({ isActive }) => ({
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 4,
                      fontFamily: 'var(--font-ui)',
                      fontSize: 13.5,
                      fontWeight: 600,
                      textDecoration: 'none',
                      padding: '8px 9px',
                      whiteSpace: 'nowrap',
                      color: isActive ? 'var(--apd-steel-blue)' : 'var(--apd-body)',
                      borderBottom: isActive ? '2px solid var(--apd-steel-blue)' : '2px solid transparent',
                      transition: 'color 150ms ease-out, border-color 150ms ease-out',
                    })}
                  >
                    {label}
                    <CaretDownIcon
                      size={12}
                      weight="bold"
                      style={{ transform: desktopServicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 150ms ease-out' }}
                    />
                  </NavLink>
                  <div
                    id="desktop-services-menu"
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      marginTop: 0,
                      minWidth: 240,
                      background: '#fff',
                      border: '1px solid var(--apd-border)',
                      boxShadow: 'var(--shadow-md)',
                      padding: '10px 6px 6px',
                      zIndex: 60,
                      opacity: desktopServicesOpen ? 1 : 0,
                      visibility: desktopServicesOpen ? 'visible' : 'hidden',
                      transition: 'opacity 150ms ease-out',
                    }}
                    onMouseEnter={openDesktopServices}
                    onMouseLeave={scheduleDesktopServicesClose}
                  >
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                      {SERVICE_LINKS.map(({ label: sLabel, to: sTo }) => (
                        <li key={sTo}>
                          <NavLink
                            to={sTo}
                            className="nav-dropdown-link"
                            onClick={() => {
                              clearDesktopServicesCloseTimeout()
                              setDesktopServicesOpen(false)
                            }}
                            style={({ isActive }) => ({
                              display: 'block',
                              padding: '9px 12px',
                              fontFamily: 'var(--font-ui)',
                              fontSize: 13.5,
                              fontWeight: 500,
                              textDecoration: 'none',
                              whiteSpace: 'nowrap',
                              color: isActive ? 'var(--apd-steel-blue)' : 'var(--apd-body)',
                              background: isActive ? 'var(--apd-blue-subtle)' : undefined,
                            })}
                          >
                            {sLabel}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className="nav-link"
                  style={({ isActive }) => ({
                    fontFamily: 'var(--font-ui)',
                    fontSize: 13.5,
                    fontWeight: 600,
                    textDecoration: 'none',
                    padding: '8px 9px',
                    whiteSpace: 'nowrap',
                    color: isActive ? 'var(--apd-steel-blue)' : 'var(--apd-body)',
                    borderBottom: isActive ? '2px solid var(--apd-steel-blue)' : '2px solid transparent',
                    transition: 'color 150ms ease-out, border-color 150ms ease-out',
                  })}
                >
                  {label}
                </NavLink>
              )
            ))}
            <div style={{ marginLeft: 14 }}>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: 14,
                  padding: '8px 16px',
                  background: 'var(--apd-steel-blue)',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: 0,
                  transition: 'background 150ms ease-out',
                  outline: 'none',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--color-primary-hover)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--apd-steel-blue)' }}
              >
                Request a quote
              </Link>
            </div>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden"
            style={{
              background: 'none',
              border: 'none',
              padding: 8,
              cursor: 'pointer',
              color: 'var(--apd-body)',
              outline: 'none',
            }}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          style={{ borderTop: '1px solid var(--apd-border)', background: '#fff' }}
        >
          <nav
            style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '12px var(--container-pad)', display: 'flex', flexDirection: 'column', gap: 2 }}
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map(({ label, to }) => (
              label === 'Services' ? (
                <div key={to}>
                  <div style={{ display: 'flex', alignItems: 'stretch' }}>
                    <NavLink
                      to={to}
                      style={({ isActive }) => ({
                        flex: 1,
                        display: 'block',
                        padding: '10px 12px',
                        fontFamily: 'var(--font-ui)',
                        fontSize: 14,
                        fontWeight: 600,
                        textDecoration: 'none',
                        color: isActive ? 'var(--apd-steel-blue)' : 'var(--apd-body)',
                        background: isActive ? 'var(--apd-blue-subtle)' : 'transparent',
                        outline: 'none',
                      })}
                      onClick={() => setMobileOpen(false)}
                    >
                      {label}
                    </NavLink>
                    <button
                      type="button"
                      aria-label={mobileServicesOpen ? 'Collapse services list' : 'Expand services list'}
                      aria-expanded={mobileServicesOpen}
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: '10px 12px',
                        cursor: 'pointer',
                        color: 'var(--apd-body)',
                        outline: 'none',
                      }}
                    >
                      <CaretDownIcon size={16} weight="bold" style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 150ms ease-out' }} />
                    </button>
                  </div>
                  {mobileServicesOpen && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 1, paddingLeft: 12 }}>
                      {SERVICE_LINKS.map(({ label: sLabel, to: sTo }) => (
                        <NavLink
                          key={sTo}
                          to={sTo}
                          style={({ isActive }) => ({
                            display: 'block',
                            padding: '9px 12px',
                            fontFamily: 'var(--font-ui)',
                            fontSize: 13.5,
                            fontWeight: 500,
                            textDecoration: 'none',
                            color: isActive ? 'var(--apd-steel-blue)' : 'var(--apd-text-muted)',
                            background: isActive ? 'var(--apd-blue-subtle)' : 'transparent',
                            outline: 'none',
                          })}
                          onClick={() => setMobileOpen(false)}
                        >
                          {sLabel}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  style={({ isActive }) => ({
                    display: 'block',
                    padding: '10px 12px',
                    fontFamily: 'var(--font-ui)',
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: 'none',
                    color: isActive ? 'var(--apd-steel-blue)' : 'var(--apd-body)',
                    background: isActive ? 'var(--apd-blue-subtle)' : 'transparent',
                    outline: 'none',
                  })}
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </NavLink>
              )
            ))}
            <div style={{ paddingTop: 10, marginTop: 8, borderTop: '1px solid var(--apd-border)' }}>
              <Link
                to="/contact"
                style={{
                  display: 'block',
                  padding: '12px 16px',
                  background: 'var(--apd-steel-blue)',
                  color: '#fff',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: 15,
                  textDecoration: 'none',
                  textAlign: 'center',
                  outline: 'none',
                }}
                onClick={() => setMobileOpen(false)}
              >
                Request a quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
