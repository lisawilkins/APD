import { Link } from 'react-router-dom'

const STATS = [
  { value: '80%', label: 'of Arizona Beverages Processed' },
  { value: '2', label: 'Phoenix Warehouse Locations' },
  { value: '$0', label: 'Broker Fees — Ever' },
  { value: '100%', label: 'Destruction Verified' },
]

const VALUE_PROPS = [
  {
    title: 'Lower Cost',
    body: 'No broker markup. You work directly with the company doing the work — and the price reflects it.',
  },
  {
    title: 'Direct Communication',
    body: 'Talk to the team handling your product — not a sales intermediary. Faster answers, fewer surprises.',
  },
  {
    title: 'Verified Proof',
    body: 'Video documentation, photo records, or in-person warehouse viewing — your choice, every job.',
  },
  {
    title: 'Confidential & Compliant',
    body: 'Zero-tolerance policy for mishandling. Your product and brand information are treated with full discretion.',
  },
]

const PRODUCT_TILES = [
  { label: 'Beverages', sub: 'Recalled, expired, or discontinued' },
  { label: 'Food Products', sub: 'Perishable and packaged goods' },
  { label: 'Nutritional Supplements', sub: 'Vitamins, proteins, formulas' },
  { label: 'Apparel & Fabrics', sub: 'Textiles of all types' },
  { label: 'Home Goods', sub: 'Consumer household products' },
  { label: 'Appliances', sub: 'Small and large appliances' },
  { label: 'Cosmetics', sub: 'Beauty and hygiene products' },
  { label: 'Industrial', sub: 'Equipment, tools, materials' },
]

const PROOF_OPTIONS = [
  {
    num: '01',
    title: 'Video Documentation',
    body: 'Recorded footage of the full destruction process, delivered to you as verifiable proof of completion.',
  },
  {
    num: '02',
    title: 'Photo Records',
    body: 'Timestamped photos at each stage — before, during, and after destruction — for your records.',
  },
  {
    num: '03',
    title: 'Live Warehouse Viewing',
    body: 'Manufacturers are welcome to witness the destruction in person at our Phoenix facility.',
  },
]

const INTEGRITY_POINTS = [
  'Strict confidentiality protocols for every client and every job',
  'Environmentally responsible — we recycle and find downstream uses where possible',
  'Serving manufacturers shipping from Texas and across the Southwest',
  'Sister companies in California and Utah for regional manufacturer coverage',
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero: full-viewport, video/image background ready ──────────────────
          To activate: add a <video> or <img> as the first child of the
          absolute-positioned media container below, with className="absolute
          inset-0 w-full h-full object-cover". The gradient overlay will
          composite on top automatically.
      ── */}
      <section
        className="relative min-h-screen flex items-end overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Media slot */}
        <div className="img-texture-dark absolute inset-0" aria-hidden="true" />
        {/* Gradient overlay — keeps text legible over any photo or video */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-32 pb-24 lg:pb-40">
          <p className="text-apd-sage text-xs font-semibold uppercase tracking-[0.2em] mb-6">
            Phoenix, Arizona
          </p>
          <h1
            id="hero-heading"
            className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-[0.88] tracking-tight mb-8 max-w-5xl">
            Welcome to<br />
            <span className="text-apd-clay">Arizona Product Destruction</span>
          </h1>
          <p className="text-white/65 text-lg lg:text-xl max-w-xl leading-relaxed mb-10">
            The southwest's leading and most trusted product destruction company.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="bg-apd-olive hover:bg-apd-olive-dark text-white font-bold text-base px-8 py-4 rounded transition-colors text-center outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Request Service
            </Link>
            <Link
              to="/how-it-works"
              className="border border-white/30 text-white font-semibold text-base px-8 py-4 rounded hover:bg-white/10 transition-colors text-center outline-none focus-visible:ring-2 focus-visible:ring-apd-clay"
            >
              How It Works →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats belt ── */}
      <section className="bg-apd-steel" aria-label="Key statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/25">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center lg:px-8">
                <p className="text-white font-black text-4xl lg:text-5xl tracking-tight">
                  {stat.value}
                </p>
                <p className="text-white/75 text-sm mt-2 font-medium leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Direct: 50/50 image-left + content-right split ─────────────────
          Image slot: warehouse operations / forklift / destruction equipment
      ── */}
      <section className="lg:grid lg:grid-cols-2 min-h-[80vh]" aria-labelledby="why-heading">
        {/* Media slot */}
        <div
          className="relative min-h-[50vw] lg:min-h-0 overflow-hidden"
          aria-hidden="true"
        >
          <div className="img-texture-dark absolute inset-0" />
        </div>

        <div className="bg-white flex items-center">
          <div className="px-10 py-16 lg:px-16 lg:py-24 max-w-lg">
            <p className="text-apd-sage font-semibold text-xs uppercase tracking-[0.2em] mb-4">
              The APD Difference
            </p>
            <h2
              id="why-heading"
              className="text-4xl lg:text-5xl font-black text-apd-forest leading-tight tracking-tight mb-6"
            >
              Not a Broker.<br />
              A Destruction Partner.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              When you contact APD, you're speaking with the people who handle your product —
              from the first call to the final proof. No subcontracting. No mystery. No middleman
              taking a cut.
            </p>
            <div className="space-y-7">
              {VALUE_PROPS.map((prop) => (
                <div key={prop.title} className="flex gap-5">
                  <div className="w-0.5 shrink-0 bg-apd-olive rounded-full self-stretch" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-apd-forest text-sm mb-1">{prop.title}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{prop.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Process: full-bleed image tile grid ─────────────────────────
          Each tile: swap the placeholder <div> for an <img> or <picture>
          with className="absolute inset-0 w-full h-full object-cover"
      ── */}
      <section aria-labelledby="products-heading">
        <div className="bg-[#748292] px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <p className="text-white/65 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
            What We Handle
          </p>
          <h2
            id="products-heading"
            className="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight"
          >
            Products We Process
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4">
          {PRODUCT_TILES.map((product) => (
            <div key={product.label} className="relative aspect-square overflow-hidden group">
              {/* Media slot */}
              <div className="img-texture-steel absolute inset-0" />
              <div className="absolute inset-0 bg-[#748292]/50 group-hover:bg-[#748292]/30 transition-colors duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white font-bold text-base leading-tight">{product.label}</p>
                <p className="text-white/60 text-xs mt-1">{product.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Proof of Destruction: full-bleed image with content overlay ──────────
          Image slot: dramatic processing / shredding / baling equipment photo
      ── */}
      <section
        className="relative min-h-[85vh] flex items-center overflow-hidden"
        aria-labelledby="proof-heading"
      >
        {/* Media slot */}
        <div className="img-texture-dark absolute inset-0" aria-hidden="true" />
        <div className="absolute inset-0 bg-apd-forest/80" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl mb-14">
            <p className="text-apd-sage font-semibold text-xs uppercase tracking-[0.2em] mb-4">
              Full Documentation
            </p>
            <h2
              id="proof-heading"
              className="text-5xl lg:text-6xl font-black text-white leading-[0.92] tracking-tight"
            >
              Complete Proof.<br />
              Total Peace of Mind.
            </h2>
            <p className="text-white/60 text-lg mt-6 leading-relaxed">
              Every job includes your choice of documentation. We provide verified proof so
              manufacturers can satisfy recall requirements, audits, and brand protection needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {PROOF_OPTIONS.map((option) => (
              <div
                key={option.title}
                className="bg-apd-forest/50 backdrop-blur-sm p-8 lg:p-10"
              >
                <div className="text-apd-clay font-black text-3xl tracking-tight mb-5 leading-none">
                  {option.num}
                </div>
                <h3 className="font-bold text-white text-lg mb-3">{option.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{option.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/proof-of-destruction"
              className="inline-block border border-white/30 text-white font-semibold text-sm px-7 py-3.5 rounded hover:bg-white/10 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-apd-clay"
            >
              Learn About Our Proof Process →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Integrity: content-left + 50/50 image-right split ───────────────────
          Image slot: team at work / compliance documentation / facility exterior
      ── */}
      <section className="lg:grid lg:grid-cols-2 min-h-[75vh]" aria-labelledby="integrity-heading">
        <div className="bg-white flex items-center">
          <div className="px-10 py-16 lg:px-16 lg:py-24 max-w-lg">
            <p className="text-apd-sage font-semibold text-xs uppercase tracking-[0.2em] mb-4">
              Our Standard
            </p>
            <h2
              id="integrity-heading"
              className="text-4xl lg:text-5xl font-black text-apd-forest leading-tight tracking-tight mb-6"
            >
              Zero Tolerance.<br />
              Complete Integrity.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              APD employees operate with integrity, confidentiality, and efficiency — full stop.
              Manufacturer product is handled exactly as required, with zero tolerance for
              shenanigans.
            </p>
            <ul className="space-y-4 mb-10" role="list">
              {INTEGRITY_POINTS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-apd-olive mt-0.5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="inline-block bg-apd-olive hover:bg-apd-olive-dark text-white font-bold text-sm px-7 py-3.5 rounded transition-colors outline-none focus-visible:ring-2 focus-visible:ring-apd-olive"
            >
              About APD →
            </Link>
          </div>
        </div>

        {/* Media slot */}
        <div
          className="relative min-h-[50vw] lg:min-h-0 overflow-hidden"
          aria-hidden="true"
        >
          <div className="img-texture-dark absolute inset-0" />
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-[#F8F8EF] py-28 lg:py-36" aria-labelledby="cta-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="cta-heading"
            className="text-5xl lg:text-7xl font-black text-apd-forest leading-[0.92] tracking-tight mb-6"
          >
            Ready to Get Started?
          </h2>
          <p className="text-apd-mist text-xl max-w-xl mx-auto mb-12 leading-relaxed">
            Tell us about your product and we'll respond with a direct quote. No brokers,
            no runaround — just straight answers and fast service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-apd-olive hover:bg-apd-olive-dark text-white font-bold text-base px-10 py-5 rounded transition-colors text-center outline-none focus-visible:ring-2 focus-visible:ring-apd-olive focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F8EF]"
            >
              Request Service
            </Link>
            <a
              href="tel:+10000000000"
              className="border border-apd-forest/25 text-apd-forest font-semibold text-base px-10 py-5 rounded hover:bg-apd-forest/6 transition-colors text-center outline-none focus-visible:ring-2 focus-visible:ring-apd-forest"
            >
              Call Us Directly
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
