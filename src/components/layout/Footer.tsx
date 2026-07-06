import { Link } from 'react-router-dom'
import { Leaf } from 'lucide-react'
import logoSvg from '../../assets/logo-apd.svg'

const SERVICES = [
  { label: 'Beverages',            to: '/services#beverages' },
  { label: 'OCC / Cardboard',      to: '/services#occ' },
  { label: 'Liquidation Pallets',  to: '/services#pallets' },
  { label: 'Aluminum & Metals',    to: '/services#metals' },
  { label: 'Packaging Materials',  to: '/services#packaging' },
]

const COMPANY = [
  { label: 'About APD',                  to: '/about' },
  { label: 'Certificate of Destruction', to: '/proof-of-destruction' },
  { label: 'Sustainability',             to: '/sustainability' },
  { label: 'Giving Back',                to: '/giving-back' },
]

const CONTACT = [
  'South Phoenix, AZ (address TBD)',
  'Serving AZ · CA · UT · NV · NM · TX + lower-48',
  'info@azproductdestruction.com (TBD)',
]

function FooterCol({ title, items }: { title: string; items: { label: string; to: string }[] }) {
  return (
    <div>
      <div style={{
        fontFamily: 'var(--font-ui)',
        fontSize: 12,
        fontWeight: 700,
        textTransform: 'uppercase' as const,
        letterSpacing: '1.3px',
        color: 'var(--apd-green-mid)',
        marginBottom: 14,
      }}>
        {title}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: 14, fontFamily: 'var(--font-prose)', transition: 'color 150ms ease-out' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#fff' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.8)' }}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer style={{ background: 'var(--apd-blue-deep)', color: '#fff' }} role="contentinfo">

      {/* Tagline strip */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.14)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '22px var(--container-pad)', display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
          <Leaf size={20} color="var(--apd-green-mid)" />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: '#fff' }}>
            Protecting your brand through sustainability.
          </span>
        </div>
      </div>

      {/* Main footer grid */}
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '48px var(--container-pad) 28px' }}>
        <div className="footer-grid">

          {/* Brand column */}
          <div>
            <Link to="/" style={{ display: 'inline-block', background: '#fff', padding: '10px 12px', outline: 'none' }} aria-label="Arizona Product Destruction — Home">
              <img src={logoSvg} alt="Arizona Product Destruction" style={{ height: 38, width: 'auto', display: 'block' }} />
            </Link>
            <p style={{ fontFamily: 'var(--font-prose)', fontSize: 14, lineHeight: 1.65, color: 'rgba(255,255,255,0.78)', maxWidth: 280, marginTop: 18 }}>
              Light-industrial product destruction in Phoenix, AZ. We don't broker it out — we destroy your product ourselves, and prove it.
            </p>
          </div>

          <FooterCol title="Services" items={SERVICES} />
          <FooterCol title="Company" items={COMPANY} />

          {/* Contact column */}
          <div>
            <div style={{ fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.3px', color: 'var(--apd-green-mid)', marginBottom: 14 }}>
              Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {CONTACT.map((line) => (
                <span key={line} style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, fontFamily: 'var(--font-prose)' }}>
                  {line}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', marginTop: 40, paddingTop: 20, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontSize: 13, color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-ui)' }}>
          <span>© {new Date().getFullYear()} Arizona Product Destruction. All rights reserved.</span>
          <span>SBA-Certified Woman-Owned Business · 20+ years</span>
        </div>
      </div>
    </footer>
  )
}
