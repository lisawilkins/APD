import { SealCheckIcon, ShieldCheckIcon } from '@phosphor-icons/react'
import { PageHero } from '../components/ui/PageHero'
import { Container } from '../components/ui/Container'
import { SectionHead } from '../components/ui/SectionHead'
import { StatsRow } from '../components/ui/StatsRow'
import { CtaBand } from '../components/layout/CtaBand'
import type { Stat } from '../components/ui/StatsRow'

const ORIGIN_STORY = [
  "Arizona Product Destruction has been dismantling and processing product in the Valley for over two decades. APD started life under a company called Recycle One (also known as Arizona Pacific Paper). Beth Williamson spent almost two decades working at Recycle One, learning the recycling and destruction industry inside and out. Back then, the company’s product destruction was a narrow, standard operation focused almost entirely on paper. In 2021, the owner of Recycle One sold off three divisions separately, one of which became Arizona Product Destruction, purchased by Williamson. It was only once she took the reins that APD expanded operations seeing the growth it enjoys today.",
  "For the first two and a half to three years under Williamson's ownership, beverage and psyllium destruction made up roughly 90% of the business, most of which had previously been headed straight to the landfill. From there, growth came by Williamson's reputation for integrity in the industry, consistent outreach to manufacturers and distributors, and creative solutions for APD customers. Today, that same referral-driven growth has carried APD from a single-category paper operation into a full-service destruction company handling beverages, supplements, apparel, home goods, and more. That growth has been built on people who stayed. Several members of APD's warehouse leadership worked alongside Williamson for years before APD was even part of the picture, working relationships now decades deep. That same hands-on, relationship-first approach shaped APD's certifications: it's the only Coca-Cola Certified product destruction company in Arizona, and an SBA certified Woman-Owned Small Business.",
  "Williamson grew up in agriculture, and she's built AG community outreach into how APD operates. The company sponsors Title One school students to attend summer camp each year (chosen through an essay or interview process), supports young competitors in Arizona's junior rodeo circuit (including sponsorship of events like the Queen Creek Junior Rodeo) and supports agricultural programs in local schools. In addition APD donates to radio station K-LOVE, provides local schools with needed supplies, and has sponsored the Circular Economy Symposium since 2023.",
]

const TEAM_STATS: Stat[] = [
  { v: '+40', l: 'employees across two Phoenix warehouses.' },
  { v: '52%', l: 'of our team has been with APD for 5+ years.' },
  { v: '+23', l: 'years of product destruction experience.' },
  { v: '10+', l: 'product categories, and counting.' },
]

const CERTIFICATIONS = [
  { icon: SealCheckIcon, t: 'SBA-Certified Woman-Owned Small Business' },
  { icon: ShieldCheckIcon, t: 'The only Coca-Cola Certified destruction company in Arizona' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About APD"
        title="Direct destruction, run by people who know the industry"
        intro="Arizona Product Destruction is a woman-owned, direct destruction company based in Phoenix focused on sustainability and brand protection."
      />

      {/* Origin story ──────────────────────────────────────────────────────── */}
      <section id="origin-story">
        <Container style={{ padding: '64px var(--container-pad) 40px' }}>
          {ORIGIN_STORY.map((paragraph, i) => (
            <p
              key={i}
              style={{
                fontFamily: 'var(--font-prose)',
                fontSize: 17,
                lineHeight: 1.7,
                color: 'var(--apd-body)',
                maxWidth: 760,
                margin: i === 0 ? 0 : '16px 0 0',
              }}
            >
              {paragraph}
            </p>
          ))}
        </Container>
      </section>

      {/* By the numbers ────────────────────────────────────────────────────── */}
      <section id="about-stats" style={{ borderTop: '1px solid var(--apd-border)' }} aria-label="APD by the numbers">
        <Container style={{ padding: '48px var(--container-pad)' }}>
          <StatsRow stats={TEAM_STATS} variant="light" />
        </Container>
      </section>

      {/* Certifications ────────────────────────────────────────────────────── */}
      <section id="certifications" style={{ background: 'var(--apd-surface-panel)' }}>
        <Container style={{ padding: '64px var(--container-pad)' }}>
          <SectionHead
            eyebrow="Certifications"
            title="Recognized for how we do business"
            align="center"
          />
          <div className="certs-row" style={{ marginTop: 40, justifyContent: 'center' }}>
            {CERTIFICATIONS.map(({ icon: Icon, t }) => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12, flex: '1 0 0', minWidth: 260, maxWidth: 340 }}>
                <Icon size={32} color="var(--apd-olive-green)" />
                <span style={{ fontFamily: 'var(--font-ui)', fontSize: 16, color: 'var(--apd-body)' }}>{t}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Beyond Arizona ────────────────────────────────────────────────────── */}
      <section id="beyond-arizona">
        <Container style={{ padding: '64px var(--container-pad)' }}>
          <SectionHead
            eyebrow="Beyond Arizona"
            title="Regional reach, local hands-on service"
            intro="APD operates two warehouses in Phoenix and works alongside sister companies throughout the South and Western U.S. Its dedicated local fleet plus interstate trucking options extend service across the entire country."
          />
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
