import { Link } from 'react-router-dom'
import {
  BeerBottleIcon, PackageIcon, RecycleIcon, CheckIcon,
  SealCheckIcon, ShieldCheckIcon, VideoIcon, CameraIcon, EyeIcon, QuotesIcon,
} from '@phosphor-icons/react'
import { Eyebrow } from '../components/ui/Eyebrow'
import { Button } from '../components/ui/Button'
import { StatsRow } from '../components/ui/StatsRow'
import { Container } from '../components/ui/Container'
import { SectionHead } from '../components/ui/SectionHead'
import { TextLink } from '../components/ui/TextLink'
import { CtaBand } from '../components/layout/CtaBand'
import { SERVICES as ALL_SERVICES } from '../data/services'

import logoSvg from '../assets/logo-apd.svg'
import heroBuildingImg from '../assets/hero-building.jpg'
import bundledVideo from '../assets/APD-bundled-02.mp4'
import baledCardboardImg from '../assets/baled-cardboard-real.jpg'
import baledCardboardAltImg from '../assets/baled-cardboard.jpg'
import warehouseExteriorImg from '../assets/warehouse-exterior.jpg'
import forkliftImg from '../assets/forklift-real.png'

// ── Data ──────────────────────────────────────────────────────────────────────

const SERVICES = [
  { icon: BeerBottleIcon, title: 'Beverage Destruction', desc: "Cans and bottles destroyed on proprietary equipment with a zero-sewer commitment — roughly 80% of Arizona's beverage market." },
  { icon: PackageIcon,    title: 'Liquidation Pallets',  desc: 'Retail returns, overstock and damaged goods, destroyed to spec and documented.' },
  { icon: RecycleIcon,    title: 'OCC & Packaging',      desc: 'Baled or loose corrugated cardboard, shrink wrap, film and mixed packaging — recovered at scale.' },
]

const MATERIALS = ALL_SERVICES.map(({ title, slug }) => ({ label: title, slug }))

const STATS = [
  { v: '+80%', l: 'of materials are processed at our warehouses.' },
  { v: '+72%', l: 'of materials received have a downstream second use.' },
  { v: '+23',  l: 'years of service in product destruction.' },
  { v: '+180', l: 'loads diverted to approved waste-to-energy facilities.' },
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

const SUSTAINABILITY_STATS = [
  { v: '72%+',        l: 'downstream second use' },
  { v: '0%',          l: 'product to the public sewer' },
  { v: '26,000', l: 'tons ofOCC recycled in 2025' },
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
              <img src={logoSvg} alt="Arizona Product Destruction" className="hidden lg:block" style={{ height: 56, width: 'auto', marginBottom: 20 }} />
              <h1
                id="hero-heading"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(32px, 4.4vw, 50px)', lineHeight: 1.05, letterSpacing: '-0.75px', color: '#fff', margin: 0 }}
              >
                Protecting your brand<br />through sustainability.
              </h1>
              <p style={{ fontFamily: 'var(--font-prose)', fontSize: 'clamp(15px, 2.5vw, 19px)', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', margin: '18px 0 0', maxWidth: 500 }}>
                We're a full service product destruction and waste management company based in Phoenix, AZ. Custom destruction solutions, direct contact, lower cost &amp; verifiable proof.
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
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={baledCardboardImg}
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
        <Container style={{ padding: '36px var(--container-pad) 8px' }}>
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

      {/* Photo mosaic ──────────────────────────────────────────────────────── */}
      <section id="photo-mosaic" className="photo-mosaic-grid" style={{ marginTop: 36 }}>
        {[
          { src: baledCardboardAltImg, alt: 'Baled cardboard ready for processing' },
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
            <div className="proof-grid">
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
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
            <TextLink to="/sustainability">About our environmental commitment</TextLink>
          </div>
          <div style={{ marginTop: 40 }}>
            <StatsRow stats={SUSTAINABILITY_STATS} variant="light" />
          </div>
        </Container>
      </section>

      {/* Testimonial placeholder ────────────────────────────────────────────── */}
      <section id="testimonial" style={{ background: 'var(--apd-surface-panel)' }}>
        <Container style={{ padding: '72px var(--container-pad)', textAlign: 'center' }}>
          <QuotesIcon size={30} color="var(--apd-clay-red)" weight="fill" className="testimonial-quote-icon" />
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(22px, 2.8vw, 30px)', lineHeight: 1.34, letterSpacing: '-0.3px', color: 'var(--apd-heading)', margin: '20px auto 0', maxWidth: 760 }}>
            "Placeholder testimonial — a client pull-quote about working with APD directly will go here once final copy is approved."
          </p>
          <div style={{ fontFamily: 'var(--font-ui)', fontSize: 14, fontWeight: 600, color: 'var(--apd-text-muted)', marginTop: 20 }}>
            — Client name, Title · Company <span style={{ color: 'var(--apd-text-sage)', fontWeight: 500 }}>(placeholder)</span>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
