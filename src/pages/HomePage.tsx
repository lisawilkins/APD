import { Link } from 'react-router-dom'
import {
  CupSoda, PackageX, Recycle, Check,
  BadgeCheck, ShieldCheck, Video, Camera, Eye, Quote,
} from 'lucide-react'
import { Badge } from '../components/ui/Badge'
import { Eyebrow } from '../components/ui/Eyebrow'
import { Button } from '../components/ui/Button'

import heroBuildingImg from '../assets/hero-building.jpg'
import baledCardboardImg from '../assets/baled-cardboard-real.jpg'
import warehouseWideImg from '../assets/warehouse-wide-real.jpg'
import warehouseExteriorImg from '../assets/warehouse-exterior.jpg'
import forkliftImg from '../assets/forklift-real.png'

// ── Layout helpers ────────────────────────────────────────────────────────────

function Container({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-pad)', ...style }}>
      {children}
    </div>
  )
}

function SectionHead({ eyebrow, title, intro, align = 'left' }: {
  eyebrow?: string; title: string; intro?: string; align?: 'left' | 'center'
}) {
  return (
    <div style={{ textAlign: align, maxWidth: align === 'center' ? 720 : 'none', margin: align === 'center' ? '0 auto' : 0 }}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px, 3.6vw, 38px)', lineHeight: 1.1, letterSpacing: '-0.5px', color: 'var(--apd-heading)', margin: '12px 0 0' }}>
        {title}
      </h2>
      {intro && (
        <p style={{ fontFamily: 'var(--font-prose)', fontSize: 17, lineHeight: 1.65, color: 'var(--apd-text-muted)', margin: align === 'center' ? '16px auto 0' : '16px 0 0', maxWidth: 600 }}>
          {intro}
        </p>
      )}
    </div>
  )
}

function TextLink({ children, to, color = 'var(--apd-steel-blue)' }: { children: React.ReactNode; to: string; color?: string }) {
  return (
    <Link
      to={to}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        color,
        fontFamily: 'var(--font-ui)',
        fontSize: 14,
        fontWeight: 600,
        textDecoration: 'none',
        borderBottom: '1.5px solid transparent',
        paddingBottom: 2,
        transition: 'border-color 150ms ease-out',
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderBottomColor = color }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderBottomColor = 'transparent' }}
    >
      {children} →
    </Link>
  )
}

// ── Data ──────────────────────────────────────────────────────────────────────

const SERVICES = [
  { icon: CupSoda,  title: 'Beverage Destruction', desc: "Cans and bottles destroyed on proprietary equipment with a zero-sewer commitment — roughly 80% of Arizona's beverage market." },
  { icon: PackageX, title: 'Liquidation Pallets',  desc: 'Retail returns, overstock and damaged goods, destroyed to spec and documented.' },
  { icon: Recycle,  title: 'OCC & Packaging',      desc: 'Baled or loose corrugated cardboard, shrink wrap, film and mixed packaging — recovered at scale.' },
]

const MATERIALS = ['Beverages', 'OCC / Cardboard', 'Liquidation Pallets', 'Textiles & Apparel', 'Footwear & Accessories', 'Electronic Waste', 'Aluminum & Metals', 'General Consumer Goods', 'Packaging Materials', 'Psyllium']

const STATS = [
  { v: '+80%', l: 'of materials are processed at our warehouses.' },
  { v: '+72%', l: 'of materials received have a downstream second use.' },
  { v: '+23',  l: 'years of service in product destruction.' },
  { v: '+180', l: 'loads diverted to approved waste-to-energy facilities.' },
]

const CERTS = [
  { icon: BadgeCheck, t: 'Small Business Administration Certified Woman-Owned Business' },
  { icon: ShieldCheck, t: 'The only Coca-Cola Certified destruction company in Arizona' },
]

const PROOF_OPTS = [
  { icon: Video,  t: 'Video proof' },
  { icon: Camera, t: 'Photo documentation' },
  { icon: Eye,    t: 'Live in-person viewing' },
]

const SUSTAINABILITY_STATS = [
  { v: '72%+',        l: 'downstream second use' },
  { v: '0%',          l: 'product to the public sewer' },
  { v: '26,000 tons', l: 'OCC recycled in 2025' },
  { v: '800+ tons',   l: 'metals diverted in 2025' },
]

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* Hero ──────────────────────────────────────────────────────────────── */}
      <section id="hero" style={{ position: 'relative' }} aria-labelledby="hero-heading">
        <div style={{ height: 560, position: 'relative' }}>
          {/* Photo */}
          <img
            src={heroBuildingImg}
            alt=""
            aria-hidden="true"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '72% 18%' }}
          />
          {/* Scrim */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(20,24,30,0.92) 0%, rgba(20,24,30,0.75) 48%, rgba(20,24,30,0.70) 100%)' }} />
          <div className="px-6 md:px-10 lg:px-12" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ maxWidth: 620 }}>
              <Badge tone="red" solid>Not a broker</Badge>
              <h1
                id="hero-heading"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(38px, 5.4vw, 60px)', lineHeight: 1.02, letterSpacing: '-1px', color: '#fff', margin: '16px 0 0' }}
              >
                Protecting your brand<br />through sustainability.
              </h1>
              <p style={{ fontFamily: 'var(--font-prose)', fontSize: 19, lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', margin: '18px 0 0', maxWidth: 500 }}>
                We're a full service product destruction and waste management company based in Phoenix, AZ. Direct contact, lower cost &amp; verifiable proof.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 26, flexWrap: 'wrap' }}>
                <Button variant="primary" size="lg" onClick={() => window.location.href = '/contact'}>Get a quote</Button>
                <Button variant="outline" size="lg" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.6)' }} onClick={() => window.location.href = '/services'}>Explore services</Button>
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
          <div className="stats-grid">
            {STATS.map((s) => (
              <div key={s.l} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(38px, 5vw, 60px)', lineHeight: 1.05, color: '#fff' }}>{s.v}</div>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: 18, color: '#DDECFC', opacity: 0.75, marginTop: 8, lineHeight: 1.25, letterSpacing: '0.25px' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </Container>
        <div style={{ borderTop: '1px solid #305B89' }}>
          <Container style={{ padding: '20px var(--container-pad)' }}>
            <div className="certs-row">
              {CERTS.map(({ icon: Icon, t }) => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12, flex: '1 0 0', minWidth: 240 }}>
                  <Icon size={32} color="var(--apd-green-mid)" strokeWidth={1.75} />
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
                <Check size={20} color="var(--apd-green-mid)" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontFamily: 'var(--font-prose)', fontSize: 16, lineHeight: 1.5, color: '#fff' }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ minHeight: 460, position: 'relative', overflow: 'hidden' }}>
          <div className="img-texture-dark" style={{ position: 'absolute', inset: 0 }} />
          <img src={baledCardboardImg} alt="Baled product ready for processing" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </section>

      {/* Services teaser ────────────────────────────────────────────────────── */}
      <section id="services-teaser">
        <Container style={{ padding: '72px var(--container-pad) 36px' }}>
          <SectionHead
            align="center"
            eyebrow="Services"
            title="One processor for every kind of product"
            intro="We destroy and recover material across ten categories — leading with destruction, backed by certified documentation."
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
                <Icon size={26} color={s.fg} strokeWidth={1.75} />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 21, color: s.fg, margin: '18px 0 10px' }}>{s.title}</h3>
                <p style={{ fontFamily: 'var(--font-prose)', fontSize: 15, lineHeight: 1.6, color: s.sub, margin: 0, flex: 1 }}>{s.desc}</p>
                <div style={{ marginTop: 20 }}>
                  <TextLink to="/services" color={s.link}>Learn more</TextLink>
                </div>
              </div>
            )
          })}
        </div>
        <Container style={{ padding: '36px var(--container-pad) 8px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            {MATERIALS.map((m) => (
              <span key={m} style={{ fontFamily: 'var(--font-ui)', fontSize: 13.5, fontWeight: 600, color: 'var(--apd-body)', border: '1px solid var(--apd-border-strong)', padding: '8px 14px' }}>
                {m}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Photo mosaic ──────────────────────────────────────────────────────── */}
      <section id="photo-mosaic" className="photo-mosaic-grid" style={{ marginTop: 36 }}>
        {[
          { src: warehouseWideImg,  alt: 'Warehouse — intake and sorting' },
          { src: forkliftImg,       alt: 'Forklift at loading dock' },
          { src: warehouseExteriorImg, alt: 'Facility exterior' },
        ].map(({ src, alt }) => (
          <div key={alt} style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="img-texture-dark" style={{ position: 'absolute', inset: 0 }} />
            <img src={src} alt={alt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(20,24,30,0.3)' }} />
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
            <div className="proof-grid" style={{ background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.14)' }}>
              {PROOF_OPTS.map(({ icon: Icon, t }) => (
                <div key={t} style={{ background: 'var(--apd-ink)', padding: '28px 18px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <Icon size={48} color="var(--apd-green-mid)" />
                  <div style={{ fontFamily: 'var(--font-ui)', fontSize: 13.5, fontWeight: 600, color: '#fff', marginTop: 12, lineHeight: 1.35 }}>{t}</div>
                </div>
              ))}
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
          <div className="sustainability-grid">
            {SUSTAINABILITY_STATS.map((s) => (
              <div key={s.l} style={{ padding: '28px clamp(18px, 2.2vw, 28px)', background: '#fff' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 30, lineHeight: 1.05, color: 'var(--apd-olive-green)' }}>{s.v}</div>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: 13, color: 'var(--apd-text-muted)', marginTop: 8, lineHeight: 1.4 }}>{s.l}</div>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: 12.5, color: 'var(--apd-text-sage)', textAlign: 'center', marginTop: 16 }}>
            193 tons of shrink wrap recovered · 180+ loads to waste-to-energy · hundreds of tons of food-grade product to animal-feed programs.
          </p>
        </Container>
      </section>

      {/* Testimonial placeholder ────────────────────────────────────────────── */}
      <section id="testimonial" style={{ background: 'var(--apd-surface-panel)' }}>
        <Container style={{ padding: '72px var(--container-pad)', textAlign: 'center' }}>
          <Quote size={30} color="var(--apd-clay-red)" />
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(22px, 2.8vw, 30px)', lineHeight: 1.34, letterSpacing: '-0.3px', color: 'var(--apd-heading)', margin: '20px auto 0', maxWidth: 760 }}>
            "Placeholder testimonial — a client pull-quote about working with APD directly will go here once final copy is approved."
          </p>
          <div style={{ fontFamily: 'var(--font-ui)', fontSize: 14, fontWeight: 600, color: 'var(--apd-text-muted)', marginTop: 20 }}>
            — Client name, Title · Company <span style={{ color: 'var(--apd-text-sage)', fontWeight: 500 }}>(placeholder)</span>
          </div>
        </Container>
      </section>

      {/* CTA band ───────────────────────────────────────────────────────────── */}
      <section id="cta-band" style={{ background: 'var(--apd-olive-green)' }} aria-labelledby="cta-heading">
        <Container style={{ padding: '60px var(--container-pad)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
          <div>
            <h2 id="cta-heading" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px, 3.4vw, 36px)', color: '#fff', margin: 0, lineHeight: 1.1 }}>
              Ready to destroy it right?
            </h2>
            <p style={{ fontFamily: 'var(--font-prose)', fontSize: 18, color: 'rgba(255,255,255,0.9)', margin: '12px 0 0', maxWidth: 540 }}>
              Talk to APD directly. We contact every lead — and reply to new inquiries within 24 hours.
            </p>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: 14, color: 'rgba(255,255,255,0.82)', margin: '14px 0 0' }}>
              South Phoenix, AZ <span style={{ opacity: 0.6 }}>(address TBD)</span> · info@azproductdestruction.com <span style={{ opacity: 0.6 }}>(TBD)</span>
            </p>
          </div>
          <Button variant="accent" size="lg" onClick={() => window.location.href = '/contact'}>Get a quote</Button>
        </Container>
      </section>
    </>
  )
}
