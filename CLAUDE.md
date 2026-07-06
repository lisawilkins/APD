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
| `apd-olive` | `#5A6C3A` | Primary — buttons, H3, checkmark icons |
| `apd-olive-dark` | `#4A5830` | Olive hover state |
| `apd-forest` | `#2E3822` | Deep dark — nav/footer bg, hero bg, H1/H2 text |
| `apd-steel` | `#3B5A85` | Secondary — stats bar bg, links |
| `apd-steel-dark` | `#2C4563` | Steel hover |
| `apd-clay` | `#B42E2E` | Accent — logo badge, hero accent span |
| `apd-clay-dark` | `#8A2222` | Clay hover |
| `apd-ink` | `#2B2F24` | Primary body text |
| `apd-mist` | `#6B7864` | Secondary/supporting body text |
| `apd-sage` | `#7A8A5F` | Eyebrow/label uppercase text |

## Project Conventions

- TypeScript + TSX throughout — no plain JS files
- Tailwind v4 utility-first inline classes — no CSS modules or styled-components
- Theme colors live in `src/index.css` `@theme` block
- Page copy is co-located in each page file (no separate content.ts yet — add when pages scale)
- One file per route in `src/pages/`
- Shared layout in `src/components/layout/` (Nav, Footer)
- Shared UI primitives go in `src/components/ui/`
- Every top-level `<section>` on a page gets a unique kebab-case `id` (e.g. `id="hero"`, `id="why-apd"`) so sections can be targeted directly when making edits

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Nav.tsx        — sticky nav, mobile hamburger, skip link
│   │   └── Footer.tsx     — 4-col footer grid
│   └── ui/                — shared primitives (Button etc., TBD)
├── pages/
│   └── HomePage.tsx       — 7-section home page
├── App.tsx                — router config + Layout wrapper
├── main.tsx               — entry point
└── index.css              — Tailwind import + @theme brand tokens
```

## Planned Pages

- `/` — Home (built)
- `/services` — Services detail
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

## Data Still Needed

- Actual phone number and address(es)
- Tonnage processed (stat placeholder)
- Customer/manufacturer list
- Real photos for hero and warehouse sections
- GA4 Measurement ID
- Cloudflare Turnstile site key (for contact form)
