# Arizona Product Destruction (APD) — Website

Marketing and lead-generation site for **Arizona Product Destruction**, a light-industrial product destruction company in Phoenix, AZ.

## Business Context

- Direct product destruction company — **not a broker** (this is the core differentiator)
- Two warehouse locations in Phoenix, AZ
- Processes recalled, expired, damaged, faulty, discontinued, or unsellable products
- Products: beverages, food, nutritional supplements, apparel/fabrics, home goods, appliances, cosmetics, industrial
- Processes ~80% of Arizona's beverages
- Sister companies in California and Utah; also serves Texas and Southwest manufacturers
- Proof of destruction: video, photos, or live on-site viewing
- Zero tolerance for mishandling; confidentiality is paramount

## Tech Stack

- **Framework:** React 19 + Vite (TSX, TypeScript)
- **Routing:** React Router v7, `createBrowserRouter` pattern
- **Styling:** Tailwind CSS v4 (CSS-first, `@tailwindcss/vite` plugin)
- **Domain:** azproductdestruction.com

## Brand Tokens

Defined in `src/index.css` via Tailwind v4 `@theme`. Palette: **Industrial Earth**.

| Token | Value | Usage |
|---|---|---|
| `apd-steel-blue` | `#3B5A85` | Primary — trust, headers, primary actions |
| `apd-olive-green` | `#5A6C3A` | Secondary — sustainability, success, eco, CTA bands |
| `apd-clay-red` | `#B4402E` | Tertiary — industrial accent, destructive |
| `apd-ink` | `#0A0A0A` | Deep dark — dark section backgrounds |
| `apd-body` | `#2B2F24` | Primary body text |
| `apd-heading` | `#2E3822` | Heading text |
| `apd-text-muted` | `#4A5565` | Secondary/supporting body text |
| `apd-eyebrow` | `#7A8A5F` | Eyebrow/label uppercase text |
| `apd-surface-panel` | `#F7F8F5` | Light panel backgrounds |
| `apd-blue-deep` | `#2A3869` | Dark stat-band backgrounds |

Legacy aliases (`apd-olive`, `apd-forest`, `apd-steel`, `apd-clay`, `apd-sage`, `apd-mist`) still exist in `src/index.css` for any code written before the rename — prefer the names above for new work.

## Project Conventions

- TypeScript + TSX throughout — no plain JS files
- Tailwind v4 utility-first inline classes — no CSS modules or styled-components
- Theme colors live in `src/index.css` `@theme` block
- Page copy is co-located in each page file, except structured/repeated data (e.g. the 10 service entries), which lives in `src/data/` as typed arrays with a `getXBySlug` lookup
- One file per route in `src/pages/`
- Shared layout in `src/components/layout/` (Nav, Footer, CtaBand — full page sections with their own background/Container)
- Shared UI primitives go in `src/components/ui/` (Button, Eyebrow, Badge, StatsRow, ContactForm, PageHero, ServiceCard, Container, SectionHead, TextLink)
- Internal secondary pages use `PageHero` (solid-color eyebrow/title/intro block) rather than the homepage's full-bleed photo hero
- Every top-level `<section>` on a page gets a unique kebab-case `id` (e.g. `id="hero"`, `id="why-apd"`) so sections can be targeted directly when making edits

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Nav.tsx        — sticky nav, mobile hamburger, skip link
│   │   ├── Footer.tsx     — 4-col footer grid
│   │   └── CtaBand.tsx    — contact-form CTA section, reused on Home + all service pages
│   └── ui/
│       ├── Button.tsx, Eyebrow.tsx, Badge.tsx
│       ├── StatsRow.tsx   — animated count-up stat grid
│       ├── ContactForm.tsx
│       ├── PageHero.tsx   — solid-bg internal-page hero (eyebrow/title/intro)
│       ├── ServiceCard.tsx
│       └── Container.tsx, SectionHead.tsx, TextLink.tsx — shared page layout helpers
├── data/
│   └── services.ts        — Service interface + SERVICES array + getServiceBySlug
├── pages/
│   ├── HomePage.tsx
│   ├── ServicesPage.tsx       — /services index (10 ServiceCards)
│   ├── ServiceDetailPage.tsx  — /services/:slug (hero, description, stats, CtaBand)
│   ├── NotFoundPage.tsx       — router catch-all
│   └── PaletteSamplePage.tsx
├── App.tsx                — router config + Layout wrapper
├── main.tsx               — entry point
└── index.css              — Tailwind import + @theme brand tokens
```

## Planned Pages

- `/` — Home (built)
- `/services` — Services index (built)
- `/services/:slug` — Service detail, 10 categories (built; placeholder copy pending review)
- `/how-it-works` — Process walkthrough
- `/proof-of-destruction` — Documentation options
- `/about` — Company, team, sister companies
- `/contact` — Lead gen form (Cloudflare Turnstile)
- `/privacy` — Privacy policy

## Key Messaging (copy direction)

- "We Don't Broker It. We Destroy It." — hero headline
- Direct service = lower cost + faster communication + verified proof
- Confidentiality, integrity, zero tolerance for shenanigans
- Proof options: video / photos / live viewing

## Security Review Cadence

Run the `security-review` skill (or an equivalent manual pass) in these situations:

- Before any production deploy.
- After a commit or batch of commits introduces a new dynamic/user-input surface — a new form, a new route with params, a new third-party script, or any backend/API code.
- After several smaller commits accumulate without a review in between (a batch of copy/layout commits doesn't need one; a batch that touches routing, forms, or scripts does).

Routine content, copy, and styling-only commits don't need a review.

## Data Still Needed

- Actual phone number and address(es)
- Tonnage processed (stat placeholder)
- Customer/manufacturer list
- Real photos for hero and warehouse sections
- GA4 Measurement ID
- Cloudflare Turnstile site key (for contact form)
