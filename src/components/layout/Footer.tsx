import { Link } from 'react-router-dom'

const SERVICES = [
  { label: 'Beverage Destruction', to: '/services#beverages' },
  { label: 'Food Products', to: '/services#food' },
  { label: 'Nutritional Supplements', to: '/services#supplements' },
  { label: 'Apparel & Fabrics', to: '/services#apparel' },
  { label: 'Home Goods & Appliances', to: '/services#home-goods' },
  { label: 'Custom Solutions', to: '/services#custom' },
]

const COMPANY = [
  { label: 'About APD', to: '/about' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Proof of Destruction', to: '/proof-of-destruction' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-apd-forest text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="inline-flex items-center gap-3 mb-5 rounded outline-none focus-visible:ring-2 focus-visible:ring-apd-clay"
              aria-label="Arizona Product Destruction — Home"
            >
              <div className="bg-apd-clay text-white font-black text-base px-3 py-1.5 tracking-[0.15em] leading-none">
                APD
              </div>
              <div className="leading-tight">
                <span className="block text-white font-semibold text-sm tracking-wide">
                  Arizona Product
                </span>
                <span className="block text-white/50 text-xs uppercase tracking-[0.18em]">
                  Destruction
                </span>
              </div>
            </Link>
            <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-xs">
              Phoenix, Arizona's direct product destruction specialists. Two warehouses, zero brokers, complete proof of destruction.
            </p>
            <div className="text-sm">
              <p className="text-white/75 font-medium mb-1">Regional Coverage</p>
              <p className="text-white/50">Arizona · California · Utah</p>
              <p className="text-white/40 text-xs mt-1">Also serving TX and the Southwest</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">
              Services
            </h2>
            <ul className="space-y-2.5" role="list">
              {SERVICES.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-white/65 hover:text-white transition-colors outline-none focus-visible:text-apd-clay"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">
              Company
            </h2>
            <ul className="space-y-2.5" role="list">
              {COMPANY.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-white/65 hover:text-white transition-colors outline-none focus-visible:text-apd-clay"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">
              Contact
            </h2>
            <address className="not-italic text-sm text-white/65 space-y-3.5">
              <div>
                <p className="text-white/85 font-medium">Phoenix, Arizona</p>
                <p className="text-white/50 text-xs mt-0.5">Two warehouse locations</p>
              </div>
              <div>
                <a
                  href="tel:+10000000000"
                  className="hover:text-white transition-colors outline-none focus-visible:text-apd-clay"
                >
                  (000) 000-0000
                </a>
              </div>
              <div>
                <a
                  href="mailto:info@azproductdestruction.com"
                  className="hover:text-white transition-colors break-all outline-none focus-visible:text-apd-clay"
                >
                  info@azproductdestruction.com
                </a>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} Arizona Product Destruction LLC. All rights reserved.
          </p>
          <nav aria-label="Legal">
            <Link
              to="/privacy"
              className="text-xs text-white/35 hover:text-white/65 transition-colors outline-none focus-visible:text-apd-clay"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
