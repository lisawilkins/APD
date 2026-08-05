import { Link } from 'react-router-dom'
import {
  BeerBottleIcon, PackageIcon, RecycleIcon, CheckIcon,
  SealCheckIcon,   ShieldCheckIcon, VideoIcon, CameraIcon, EyeIcon,
} from '@phosphor-icons/react'
import { Eyebrow } from '../components/ui/Eyebrow'
import { Button } from '../components/ui/Button'
import { StatsRow } from '../components/ui/StatsRow'
import { Container } from '../components/ui/Container'
import { SectionHead } from '../components/ui/SectionHead'
import { TextLink } from '../components/ui/TextLink'
import { FaqSection } from '../components/ui/FaqSection'
import SchemaScript from '../components/ui/SchemaScript'
import { CtaBand } from '../components/layout/CtaBand'
import { TestimonialsCarousel } from '../components/ui/TestimonialsCarousel'
import { SERVICES as ALL_SERVICES } from '../data/services'
import { FEATURED_FAQS } from '../data/faqs'
import { websiteSchema } from '../lib/schema'
import { buildMeta } from '../lib/meta'

export function meta() {
  return buildMeta({
    title: 'Product Destruction in Phoenix, AZ | Arizona Product Destruction',
    description:
      'Direct product destruction in Phoenix, AZ — not a broker. Recalled, expired and discontinued product destroyed in our own warehouses with a Certificate of Destruction on every load.',
    path: '/',
    exactTitle: true,
  })
}

import logoSvg from '../assets/logo-apd.svg'
import heroBuildingImg from '../assets/hero-building.jpg'
import bundledVideo from '../assets/APD-bundled-02.mp4'
import baledCardboardImg from '../assets/baled-cardboard-real.jpg'
import baledCardboardAltImg from '../assets/baled-cardboard.jpg'
import forkliftImg from '../assets/forklift-containers.jpg'
import glassBottlesImg from '../assets/glass-bottles.jpg'
import transportFleetImg from '../assets/transport-fleet.jpg'

// ── Data ──────────────────────────────────────────────────────────────────────

const SERVICES = [
  { icon: BeerBottleIcon, title: 'Beverage Destruction', desc: "Cans and bottles destroyed on proprietary equipment with a zero-sewer commitment — roughly 80% of Arizona's beverage market." },
  { icon: PackageIcon,    title: 'Liquidation Pallets',  desc: 'Retail returns, overstock and damaged goods, destroyed to spec and documented.' },
  { icon: RecycleIcon,    title: 'Psyllium', desc: 'Fiber-supplement product destroyed on machinery built specifically for it, then given a new life through proprietary repurposing.' },
]

const MATERIALS = ALL_SERVICES.map(({ title, slug }) => ({ label: title, slug }))

const STATS = [
  { v: '+80%', l: 'of materials are processed at our warehouses.' },
  { v: '+72%', l: 'of materials received have a downstream second use.' },
  { v: '+23',  l: 'years of service in product destruction.' },
  { v: '+180', l: 'loads diverted to approved waste-to-energy facilities.' },
]

/**
 * The core positioning claim, as a table.
 *
 * "Broker vs direct" is the comparison buyers actually search for, and it maps
 * straight onto APD's differentiator. Tables are also among the easiest
 * structures for answer engines to lift intact.
 */
const BROKER_COMPARISON = [
  {
    aspect: 'Who handles your product',
    broker: 'Sold on to a third-party facility you never see',
    apd: 'APD staff, in our own two Phoenix warehouses',
  },
  {
    aspect: 'Cost',
    broker: "The facility's price plus the broker's markup",
    apd: 'Direct pricing with no margin in the middle',
  },
  {
    aspect: 'Point of contact',
    broker: 'A salesperson relaying messages to the actual processor',
    apd: 'One contact who can answer for the work itself',
  },
  {
    aspect: 'Documentation',
    broker: 'Passed along second-hand from the processor',
    apd: 'Certificate of Destruction issued for work we performed',
  },
]

const CERTS = [
  { icon: SealCheckIcon, t: 'Small Business Administration Certified Woman-Owned Business' },
  { icon: ShieldCheckIcon, t: 'The only Coca-Cola Certified destruction company in Arizona' },
]

const PROOF_OPTS = [
  { icon: VideoIcon,  t: 'Video proof' },
  { icon: CameraIcon, t: 'Photo documentation' },
  { icon: EyeIcon,    t: 'Live in-person viewing' },
]

// Tonnage figures are calendar-year totals confirmed by APD. They need an
// annual refresh — update the year in the label at the same time as the number,
// here and in the OCC/cardboard, packaging, e-waste and aluminum service stats.
const SUSTAINABILITY_STATS = [
  { v: '72%+',   l: 'of materials received have a downstream second use' },
  { v: '0%',     l: 'product to the public sewer' },
  { v: '26,000', l: 'tons of OCC recycled in 2025' },
  { v: '800+',   l: 'tons of metals diverted in 2025' },
]

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* Hero ──────────────────────────────────────────────────────────────── */}
      <section id="hero" style={{ position: 'relative' }} aria-labelledby="hero-heading">
        <div style={{ height: 560, position: 'relative' }}>
          {/* Photo */}
          {/* The LCP element — loaded eagerly at high priority so it isn't
              queued behind the fonts and the video. */}
          <img
            src={heroBuildingImg}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            decoding="async"
            width={1600}
            height={560}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '72% 18%' }}
          />
          {/* Scrim */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(20,24,30,0.92) 0%, rgba(20,24,30,0.75) 48%, rgba(20,24,30,0.70) 100%)' }} />
          <div className="px-6 md:px-10 lg:px-12" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ maxWidth: 620 }}>
              <img src={logoSvg} alt="Arizona Product Destruction" className="hidden lg:block" width={220} height={56} style={{ height: 56, width: 'auto', marginBottom: 20 }} />
              {/* The tagline alone contains no service or geographic keyword,
                  which left the site's most important h1 saying nothing about
                  what APD does or where. The keyword line sits inside the same
                  h1 so the tagline keeps its visual dominance. */}
              <h1
                id="hero-heading"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(32px, 4.4vw, 50px)', lineHeight: 1.05, letterSpacing: '-0.75px', color: '#fff', margin: 0 }}
              >
                <span style={{ display: 'block', fontFamily: 'var(--font-ui)', fontSize: 'clamp(12px, 1.5vw, 15px)', fontWeight: 600, letterSpacing: '1.3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.78)', marginBottom: 12 }}>
                  Product destruction in Phoenix, Arizona
                </span>
                <span style={{ display: 'block' }}>
                  Protecting your brand<br />through sustainability.
                </span>
              </h1>
              <p style={{ fontFamily: 'var(--font-prose)', fontSize: 'clamp(15px, 2.5vw, 19px)', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', margin: '18px 0 0', maxWidth: 500 }}>
                We're a full service product destruction and waste management company based in Phoenix, AZ. Custom destruction solutions, direct contact, lower cost &amp; verifiable proof.
              </p>
              {/* Previously window.location.href — a full page reload, and
                  "Get a quote" pointed at /contact, which doesn't exist. It now
                  jumps to the contact form at the foot of this page. */}
              <div style={{ display: 'flex', gap: 12, marginTop: 26, flexWrap: 'wrap' }}>
                <Button variant="primary" size="lg" as="a" href="#cta-band">Get a quote</Button>
                <Button
                  variant="outline"
                  size="lg"
                  as={Link}
                  to="/services"
                  style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.6)' }}
                >
                  Explore services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statement ─────────────────────────────────────────────────────────── */}
      <section id="statement" style={{ padding: '84px var(--container-pad)', textAlign: 'center', background: 'var(--apd-surface)' }}>
        <p style={{ margin: '0 auto', maxWidth: 760, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(22px, 2.9vw, 32px)', lineHeight: 1.32, letterSpacing: '-0.4px', color: 'var(--apd-heading)' }}>
          From beverages to supplements to home goods — when product must be destroyed securely, APD is your destruction solution.
        </p>
      </section>

      {/* Stats bar ─────────────────────────────────────────────────────────── */}
      <section id="stats-bar" style={{ background: 'var(--apd-blue-deep)' }} aria-label="Key statistics">
        <Container style={{ padding: '40px var(--container-pad)' }}>
          <StatsRow stats={STATS} variant="dark" />
        </Container>
        <div style={{ borderTop: '1px solid #305B89' }}>
          <Container style={{ padding: '20px var(--container-pad)' }}>
            <div className="certs-row">
              {CERTS.map(({ icon: Icon, t }) => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12, flex: '1 0 0', minWidth: 240 }}>
                  <Icon size={32} color="var(--apd-green-mid)" />
                  <span style={{ fontFamily: 'var(--font-ui)', fontSize: 16, fontWeight: 400, color: 'rgba(255,255,255,0.86)' }}>{t}</span>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </section>

      {/* Why APD ────────────────────────────────────────────────────────────── */}
      <section id="why-apd" className="why-grid" aria-labelledby="why-heading">
        <div style={{ background: 'var(--apd-steel-blue)', color: '#fff', padding: '72px clamp(28px, 5vw, 72px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Eyebrow color="rgba(255,255,255,0.7)">Why APD</Eyebrow>
          <h2 id="why-heading" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px, 3.4vw, 36px)', lineHeight: 1.12, letterSpacing: '-0.5px', color: '#fff', margin: '12px 0 0' }}>
            We eliminate the middleman passing the savings on to you.
          </h2>
          <p style={{ fontFamily: 'var(--font-prose)', fontSize: 17, lineHeight: 1.65, color: 'rgba(255,255,255,0.88)', margin: '16px 0 0', maxWidth: 460 }}>
            Most destruction companies are brokers — they take your product and hand it to someone else, adding markup and removing visibility. We destroy it in our own Phoenix warehouses. Direct contact, lower cost, verifiable proof.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 24 }}>
            {['No middlemen — you work directly with APD', 'A single point of contact for all your waste needs', 'Integrity, confidentiality, efficiency'].map((t) => (
              <div key={t} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <CheckIcon size={20} color="var(--apd-green-mid)" weight="bold" style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontFamily: 'var(--font-prose)', fontSize: 16, lineHeight: 1.5, color: '#fff' }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ minHeight: 460, position: 'relative', overflow: 'hidden' }}>
          {/* preload="none" defers the download until the browser decides to
              autoplay, so the video doesn't compete with the hero image for
              bandwidth during the initial page load. The poster covers the gap. */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster={baledCardboardImg}
            aria-label="Baled material being processed at APD's Phoenix warehouse"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          >
            <source src={bundledVideo} type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Services teaser ────────────────────────────────────────────────────── */}
      <section id="services-teaser">
        <Container style={{ padding: '72px var(--container-pad) 36px' }}>
          <SectionHead
            align="center"
            eyebrow="Services"
            title="One processor for every kind of product"
            intro="We destroy and recover material across +10 categories — leading with destruction, backed by certified documentation."
          />
        </Container>
        <div className="services-grid">
          {[
            { ...SERVICES[0], bg: 'var(--apd-surface-panel)', fg: 'var(--apd-heading)', sub: 'var(--apd-text-muted)', link: 'var(--apd-steel-blue)' },
            { ...SERVICES[1], bg: 'var(--apd-ink)',           fg: '#fff',               sub: 'rgba(255,255,255,0.74)', link: '#fff' },
            { ...SERVICES[2], bg: 'var(--apd-steel-blue)',    fg: '#fff',               sub: 'rgba(255,255,255,0.82)', link: '#fff' },
          ].map((s) => {
            const Icon = s.icon
            return (
              <div key={s.title} style={{ background: s.bg, color: s.fg, padding: '48px clamp(24px, 3vw, 40px)', minHeight: 280, display: 'flex', flexDirection: 'column' }}>
                <Icon size={26} color={s.fg} />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 21, color: s.fg, margin: '18px 0 10px' }}>{s.title}</h3>
                <p style={{ fontFamily: 'var(--font-prose)', fontSize: 15, lineHeight: 1.6, color: s.sub, margin: 0, flex: 1 }}>{s.desc}</p>
                <div style={{ marginTop: 20 }}>
                  <TextLink to="/services" color={s.link}>Learn more</TextLink>
                </div>
              </div>
            )
          })}
        </div>
        <Container style={{ padding: '36px var(--container-pad) 48px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            {MATERIALS.map((m) => (
              <Link
                key={m.slug}
                to={`/services/${m.slug}`}
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 13.5,
                  fontWeight: 600,
                  color: 'var(--apd-body)',
                  border: '1px solid var(--apd-border-strong)',
                  padding: '8px 14px',
                  textDecoration: 'none',
                  transition: 'background 150ms ease-out, border-color 150ms ease-out, color 150ms ease-out',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = 'rgba(59,90,133,0.10)'
                  el.style.borderColor = 'var(--apd-steel-blue)'
                  el.style.color = 'var(--apd-steel-blue)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = 'transparent'
                  el.style.borderColor = 'var(--apd-border-strong)'
                  el.style.color = 'var(--apd-body)'
                }}
              >
                {m.label}
              </Link>
            ))}
          </div>
        </Container>
      </section>


      {/* Shipping & Logistics ───────────────────────────────────────────────── */}
      <section id="shipping-logistics" className="why-grid" aria-labelledby="shipping-heading">
        <div style={{ minHeight: 460, position: 'relative', overflow: 'hidden' }}>
          <img
            src={transportFleetImg}
            alt="APD's dedicated trucking fleet ready for pickup and delivery"
            loading="lazy"
            decoding="async"
            width={960}
            height={460}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div style={{ background: 'var(--apd-green-deep)', color: '#fff', padding: '72px clamp(28px, 5vw, 72px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Eyebrow color="var(--apd-green-mid)">Logistics</Eyebrow>
          <h2 id="shipping-heading" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px, 3.4vw, 36px)', lineHeight: 1.12, letterSpacing: '-0.5px', color: '#fff', margin: '12px 0 0' }}>
            Shipping &amp; Delivery
          </h2>
          <p style={{ fontFamily: 'var(--font-prose)', fontSize: 17, lineHeight: 1.65, color: 'rgba(255,255,255,0.88)', margin: '16px 0 0', maxWidth: 520 }}>
            Our services extend beyond on-site destruction to full logistics coordination. We handle pickup, shipping, and delivery, wherever your product originates in the lower 48. Within Arizona, transportation runs through our own dedicated trucking fleet. For interstate shipments, we coordinate with trusted, long-standing carrier partners, so you have one point of contact from pickup to destruction.
          </p>
        </div>
      </section>

      {/* Brand Protection ───────────────────────────────────────────────────── */}
      <section id="brand-protection" className="brand-grid" aria-labelledby="brand-protection-heading">
        <div className="brand-quote" style={{ background: 'var(--apd-surface)', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 28, paddingBottom: 28, paddingLeft: 'clamp(28px, 5vw, 72px)', paddingRight: 'clamp(28px, 5vw, 72px)', borderRight: '1px solid var(--apd-border-strong)' }}>
          <blockquote style={{ margin: 0, fontFamily: 'var(--font-prose)', fontWeight: 400, fontStyle: 'italic', fontSize: 'clamp(24px, 2.9vw, 32px)', lineHeight: 1.28, letterSpacing: '-0.4px', color: 'var(--apd-heading)' }}>
            <span aria-hidden="true" style={{ display: 'block', fontSize: '2.4em', lineHeight: 0.6, marginBottom: 8, color: 'var(--apd-clay-red)', opacity: 0.85 }}>&ldquo;</span>
            Arizona Product Destruction gives luxury and premium manufacturers full control over their product's life cycle.
          </blockquote>
        </div>
        <div className="brand-copy" style={{ background: 'var(--apd-surface)', color: 'var(--apd-body)', padding: '72px clamp(28px, 5vw, 72px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Eyebrow color="var(--apd-clay-red)">Premium Quality Assurance</Eyebrow>
          <h2 id="brand-protection-heading" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px, 3.4vw, 36px)', lineHeight: 1.12, letterSpacing: '-0.5px', color: 'var(--apd-heading)', margin: '12px 0 0' }}>
            Luxury Brand Protection
          </h2>
          <p style={{ fontFamily: 'var(--font-prose)', fontSize: 17, lineHeight: 1.65, color: 'var(--apd-text-muted)', margin: '16px 0 0', width: '100%', maxWidth: 650 }}>
          Don't let your brand's value be chipped away in a secondary market. Arizona Product Destruction gives premium manufacturers full control over their product's life cycle: not resold, not repurposed, not surfacing on a discount marketplace under your name. Because APD destroys product in-house rather than brokering it out, your inventory never changes hands beyond the people directly accountable to you. Every job is documented with video or photo proof, or witnessed live at our Phoenix facility. Your standards determine the outcome.
          </p>
        </div>
      </section>

      {/* Photo mosaic ──────────────────────────────────────────────────────── */}
      <section id="photo-mosaic" className="photo-mosaic-grid" style={{ marginTop: 36 }}>
        {[
          { src: baledCardboardAltImg, alt: 'Baled cardboard ready for processing at APD’s Phoenix warehouse' },
          { src: glassBottlesImg,      alt: 'Glass bottles staged for beverage destruction' },
          { src: forkliftImg,          alt: 'Forklift moving containers at the APD loading dock in Phoenix' },
        ].map(({ src, alt }) => (
          <div key={alt} style={{ position: 'relative', overflow: 'hidden' }}>
            <img
              src={src}
              alt={alt}
              loading="lazy"
              decoding="async"
              width={640}
              height={420}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        ))}
      </section>

      {/* Certificate of Destruction ─────────────────────────────────────────── */}
      <section id="certificate-of-destruction" style={{ background: 'var(--apd-ink)', color: '#fff' }} aria-labelledby="cert-heading">
        <Container style={{ padding: '64px var(--container-pad)' }}>
          <div className="cert-grid">
            <div>
              <Eyebrow color="var(--apd-green-mid)">Certificate of Destruction</Eyebrow>
              <h2 id="cert-heading" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px, 3.2vw, 34px)', color: '#fff', margin: '12px 0 0', lineHeight: 1.12 }}>
                Proof you can show your stakeholders
              </h2>
              <p style={{ fontFamily: 'var(--font-prose)', fontSize: 16, lineHeight: 1.65, color: 'rgba(255,255,255,0.8)', margin: '14px 0 0', maxWidth: 460 }}>
                Every job closes with a certified record that your product was destroyed — customizable with your SKU numbers, batch numbers and the fields your team requires.
              </p>
              <div style={{ marginTop: 22 }}>
                <TextLink to="/proof-of-destruction" color="#fff">About our Certificate of Destruction</TextLink>
              </div>
            </div>
            {/* Label + grid share a wrapper so the label tracks the grid's
                width at every breakpoint rather than the whole column. */}
            <div>
              <p className="proof-label">Available on request</p>
              <div className="proof-grid">
                {PROOF_OPTS.map(({ icon: Icon, t }) => (
                  <div key={t} style={{ background: 'var(--apd-ink)', padding: '28px 18px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <Icon size={48} color="var(--apd-green-mid)" />
                    <div style={{ fontFamily: 'var(--font-ui)', fontSize: 13.5, fontWeight: 600, color: '#fff', marginTop: 12, lineHeight: 1.35 }}>{t}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Sustainability ─────────────────────────────────────────────────────── */}
      <section id="sustainability" aria-labelledby="sustainability-heading">
        <Container style={{ padding: '72px var(--container-pad) 40px' }}>
          <SectionHead
            align="center"
            eyebrow="Sustainability"
            title="Destroyed, not just dumped"
            intro="Where we can, we recover materials and find downstream second-uses — keeping product out of landfill and giving you a cleaner story to tell."
          />
          {/* Was /sustainability, which has never been built (see STATUS.md).
              Points at the services index, where each page now documents how
              that material is recovered rather than landfilled. */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
            <TextLink to="/services">See how each material is recovered</TextLink>
          </div>
          <div style={{ marginTop: 40 }}>
            <StatsRow stats={SUSTAINABILITY_STATS} variant="light" />
          </div>
        </Container>
      </section>

      <TestimonialsCarousel />

      {/* Broker vs direct ──────────────────────────────────────────────────── */}
      <section id="broker-vs-direct" style={{ background: 'var(--apd-ink)' }} aria-labelledby="broker-vs-direct-heading">
        <Container style={{ padding: '72px var(--container-pad)' }}>
          <div id="broker-vs-direct-heading">
            <SectionHead
              align="center"
              variant="dark"
              eyebrow="Direct vs Broker"
              title="What changes when there's no middleman"
              intro="Most product destruction companies in Arizona are brokers. Here's what that difference actually means for your load, side by side."
            />
          </div>
          <div className="comparison-scroll">
            <table className="comparison-table is-dark">
              <caption className="sr-only">
                Comparison of working directly with Arizona Product Destruction versus using a product destruction broker
              </caption>
              {/* APD's column comes first: the table scrolls horizontally on
                  mobile, so whatever sits in column three is off-screen until
                  the reader swipes. Our answer should never be the hidden one. */}
              <thead>
                <tr>
                  <th scope="col">&nbsp;</th>
                  <th scope="col">Direct with APD</th>
                  <th scope="col">Using a broker</th>
                </tr>
              </thead>
              <tbody>
                {BROKER_COMPARISON.map((row) => (
                  <tr key={row.aspect}>
                    <th scope="row">{row.aspect}</th>
                    <td className="comparison-apd">{row.apd}</td>
                    <td>{row.broker}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Teaser set only — /faq holds the full list and owns the FAQPage
          schema, so these four don't emit duplicate structured data. */}
      <FaqSection
        id="faq"
        faqs={FEATURED_FAQS}
        eyebrow="FAQ"
        title="Product destruction questions, answered"
        intro="The questions manufacturers, distributors and compliance teams ask us most often."
        includeSchema={false}
        moreLink={{ to: '/faq', label: 'See all frequently asked questions' }}
      />

      <CtaBand />

      <SchemaScript schema={websiteSchema()} />
    </>
  )
}
