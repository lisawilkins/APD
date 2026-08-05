# Arizona Product Destruction (APD) — Website

Marketing and lead-generation site for **Arizona Product Destruction**, a light-industrial product destruction company in Phoenix, AZ.

## Business Context

- Direct product destruction company — **not a broker** (this is the core differentiator)
- Two warehouse locations in Phoenix, AZ
- Processes recalled, expired, damaged, faulty, discontinued, or unsellable products
- Products: beverages, food, nutritional supplements, apparel/fabrics, home goods, appliances, cosmetics, industrial
- Processes ~80% of Arizona's beverages
- Partner processing companies in California and Utah; also serves Texas and Southwest manufacturers. Say "partner companies" / "we partner with" — never "sister companies"
- Proof of destruction: video, photos, or live on-site viewing
- Zero tolerance for mishandling; confidentiality is paramount

## Tech Stack

- **Framework:** React 19 + Vite (TSX, TypeScript)
- **Routing:** React Router v7 **framework mode** (`@react-router/dev`) with `ssr: false` + `prerender` — every route is rendered to static HTML at build time
- **Styling:** Tailwind CSS v4 (CSS-first, `@tailwindcss/vite` plugin)
- **Icons:** [@phosphor-icons/react](https://phosphoricons.com) — do not use Lucide. Import named icons (e.g. `CheckIcon`, `QuotesIcon`). Use the `weight` prop (`"regular"`, `"bold"`, `"fill"`, etc.) instead of Lucide's `strokeWidth`.
- **Hosting:** Netlify. Publish directory is **`build/client`**, not `dist` (set in `netlify.toml`).
- **Domain:** azproductdestruction.com

### Rendering & prerendering

The site is prerendered, not a client-side SPA. This is load-bearing for SEO and especially for AEO/GEO: GPTBot, ClaudeBot and PerplexityBot do not execute JavaScript, so a client-rendered page is invisible to them.

| File | Role |
|---|---|
| `react-router.config.ts` | `appDirectory: 'src'`, `ssr: false`, `prerender` list |
| `src/routes.ts` | Route config (`@react-router/dev/routes`) |
| `src/root.tsx` | Document shell — replaces the old `index.html`. Font `<link>`s, sitewide `LocalBusiness` schema, `ErrorBoundary` |
| `src/entry.client.tsx` | Hydration entry — replaces `src/main.tsx` |
| `src/components/layout/SiteLayout.tsx` | Nav + `<Outlet/>` + Footer wrapper |

**Rules:**

- **`src/data/routes.ts` is the single source of truth for URLs.** It drives both the prerender list and `scripts/generate-sitemap.ts`. It must stay import-free — it is loaded in a plain Node context that cannot resolve image or icon imports. `Service['slug']` is typed as `ServiceSlug` from this file, so adding a service without adding its slug here is a compile error.
- **No browser APIs during render.** `window`, `document` and `matchMedia` are fine inside `useEffect` and event handlers, but touching them at module scope or in a render body crashes the prerender.
- **Adding a route** means: add the page to `src/routes.ts`, add the URL to `src/data/routes.ts`, and export a `meta` from the page.
- **Netlify Forms** detects forms by crawling deployed HTML. Since there is no static `index.html` any more, the hidden mirror form lives in `public/__forms.html` — keep its fields in sync with `ContactForm.tsx`.
- **`public/_redirects` has no SPA rewrite.** Unmatched paths serve the prerendered `/404` page with a real 404 status. Do not reintroduce `/* /index.html 200` — it makes every bad URL a soft 404.

### SEO / AEO / GEO

- **`src/data/site.ts`** — `SITE` (NAP, canonical URL, OG defaults), `SERVICE_AREA` (metros, counties, states), `KEY_FACTS`. Everything else derives from these; never hardcode a phone number, city list, or the canonical origin.
- **`src/lib/meta.ts`** — `buildMeta()` returns the complete descriptor list (title, description, canonical, OG, Twitter). React Router *replaces* parent meta rather than merging, so **every route exports its own `meta`** built with this helper.
- **`src/lib/schema.ts`** — JSON-LD builders. Rendered via `SchemaScript`. `LocalBusiness` is sitewide (in `root.tsx`); pages add `Service`, `BreadcrumbList`, `WebSite`, `FAQPage`.
- **`src/data/faqs.ts`** — `GENERAL_FAQS` plus `SERVICE_FAQS` keyed by slug. The same objects render the `<details>` blocks and generate `FAQPage` schema, so visible text and structured data cannot diverge. Answers open with a direct response and run ~40–60 words.
- **Crawl files:** `public/robots.txt`, `public/llms.txt`, `public/_headers`; `sitemap.xml` is generated at build time into `build/client/`.
- **Titles:** `[Page Topic] | Arizona Product Destruction`. Canonical host is the **apex** domain (no `www`).
- **Images:** every `<img>` needs `width`, `height` and either `loading="lazy"` (below the fold) or `fetchPriority="high"` (LCP). Run `node scripts/optimize-assets.ts` after adding photography — source files routinely arrive at 3–8 MB.

## Brand Tokens

Defined in `src/index.css`. Palette: **Industrial Earth** — sourced from the Claude Design System export ("APD Design System.zip"). The main site always uses this palette; do not introduce palette-switching logic outside `/palette-sample`.

### Dual token system

Colors and fonts exist in **two parallel forms** in `src/index.css`:

| Form | Example | Use when |
|---|---|---|
| Tailwind `@theme` utilities | `bg-apd-steel-blue`, `text-apd-eyebrow` | Tailwind class-based styling |
| `:root` CSS custom properties | `var(--apd-steel-blue)`, `var(--font-prose)` | Inline styles, shared components |

When adding or changing a token, update **both** the `@theme` block and the `:root` block. Prefer shared components and CSS classes over one-off inline token values.

### Typography

| Role | Family | CSS var |
|---|---|---|
| Display headings | Archivo | `--font-display` |
| Body | Archivo | `--font-body` |
| UI labels, eyebrows, nav | Inter | `--font-ui` / `--font-heading` |
| Prose / intro paragraphs | Merriweather | `--font-prose` |

Loaded from Google Fonts in `src/index.css`. Eyebrows: Inter, uppercase, `letter-spacing: 1.3px`, color `apd-eyebrow`.

### Core colors

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

Legacy aliases (`apd-olive`, `apd-forest`, `apd-steel`, `apd-clay`, `apd-sage`, `apd-mist`) still exist in `src/index.css` for code written before the rename — prefer the names above for new work. *(Cleanup of these aliases is tracked in STATUS.md.)*

### Palette sample page (`/palette-sample`)

`PaletteSamplePage.tsx` is the **only** place alternate palettes (Soft Eco, Sonoran Desert, etc.) may be previewed. It sits outside the `SiteLayout` wrapper in `src/routes.ts` and uses its own inline CSS-var overrides. Never wire palette-switching into the production site. It is `noindex`, disallowed in `robots.txt`, and excluded from the sitemap via `NOINDEX_ROUTES`.

## Project Conventions

- TypeScript + TSX throughout — no plain JS files
- Tailwind v4 utility-first inline classes — no CSS modules or styled-components
- Theme colors and fonts live in `src/index.css` — see **Dual token system** under Brand Tokens
- Page copy is co-located in each page file, except structured/repeated data (e.g. the 10 service entries, testimonials), which lives in `src/data/` as typed arrays
- One file per route in `src/pages/`
- Shared layout in `src/components/layout/` (Nav, Footer, CtaBand — full page sections with their own background/Container)
- Shared UI primitives go in `src/components/ui/` (Button, Eyebrow, Badge, StatsRow, ContactForm, PageHero, ServiceCard, TestimonialsCarousel, Container, SectionHead, TextLink, FaqSection, QuickFacts, SchemaScript)
- `Button` accepts an `as` prop — use `as={Link} to="…"` or `as="a" href="…"` for anything that navigates, so it renders a real anchor rather than a `<button>` with an onClick
- Internal secondary pages use `PageHero` (solid-color eyebrow/title/intro block) rather than the homepage's full-bleed photo hero. Service detail pages pass an optional `image`/`imageAlt` into `PageHero` for a right-side photo (`service.heroImage`).
- Every top-level `<section>` on a page gets a unique kebab-case `id` (e.g. `id="hero"`, `id="why-apd"`) so sections can be targeted directly when making edits
- **Reusable templates:** When a layout appears in more than one place (e.g. `StatsRow`, `PageHero`, `ServiceCard`), edit the shared component or its CSS class — not a single page instance. To request a sitewide change, say "update the `StatsRow` template" (or whichever component) so the change applies to all instances.

## Project Structure

High-level map only — check the actual file system for current contents rather than treating this as a manifest.

```
react-router.config.ts  — appDirectory, ssr:false, prerender list
netlify.toml            — publish dir (build/client), www → apex redirect
scripts/
├── generate-sitemap.ts — postbuild, reads src/data/routes.ts
└── optimize-assets.ts  — one-off image compression (sips)
public/                 — robots.txt, llms.txt, _headers, _redirects, __forms.html, favicon
src/
├── components/
│   ├── layout/   — full-page section components (Nav, Footer, CtaBand, SiteLayout)
│   └── ui/       — shared UI primitives (Button, PageHero, StatsRow, ServiceCard, FaqSection, QuickFacts, SchemaScript, etc.)
├── data/         — typed content (services.ts, testimonials.ts, faqs.ts, site.ts, routes.ts)
├── lib/          — meta.ts (buildMeta), schema.ts (JSON-LD builders)
├── pages/        — one file per route, each exporting `meta`
├── root.tsx      — document shell (replaces index.html)
├── routes.ts     — route config
├── entry.client.tsx — hydration entry (replaces main.tsx)
└── index.css     — Tailwind import + brand tokens
```

## UI Patterns & Reusable Components

### Button (`src/components/ui/Button.tsx`)

Shared action button for marketing surfaces. Edit this component — not individual page instances — for sitewide button changes.

- **Radius:** `0px` on marketing surfaces (sharp-edged per DS). Form inputs keep `4px` (`--radius-sm`).
- **Variants:** `primary` = steel blue, `secondary` = olive green, `accent` / `destructive` = clay red, `outline` / `ghost` = transparent with steel-blue border/text.
- **Outline/ghost hover:** uses `rgba(59,90,133,0.10)` — **not** `var(--apd-blue-subtle)`. The subtle blue tint is nearly white and breaks white-text overrides on dark backgrounds (e.g. the hero). The rgba tint works on both light and dark sections.

### StatsRow (`src/components/ui/StatsRow.tsx`)

Shared animated stat grid used on the homepage stats bar (dark), sustainability section (light), and every service detail page (light). Keeps typography, spacing, and divider treatment consistent — only the color theme changes.

- **`variant`:** `'dark'` (white numbers, for `apd-blue-deep` bands) or `'light'` (olive numbers, for light backgrounds)
- **Horizontal inset:** controlled by the `--stats-row-inset-x` token in `src/index.css` via `StatsRow`'s default `paddingX`. Override per instance with the `paddingX` prop only when needed — don't hand-tune padding elsewhere.
- **Layout CSS:** `.stats-grid` in `src/index.css` — 2×2 on mobile, 4 columns at `min-width: 1024px`
- **Data shape:** `Stat[]` with `{ v, l }` — defined in `StatsRow.tsx`, reused by `services.ts`
- **Service detail pages (`#service-stats`):** `variant="light"` on a light background, with `border-top: 1px solid var(--apd-border)` separating stats from the description above — same visual treatment as `#sustainability`

### Stats bar + certification row (`#stats-bar`)

Homepage stats band pairs `StatsRow` with a certification strip below (SBA Woman-Owned, Coca-Cola Certified, etc.).

- **Alignment:** `.certs-row` in `src/index.css` uses the same `--stats-row-inset-x` token as `StatsRow` — if the inset changes, update the token once, not both rows.
- **Layout:** `.certs-row` — flex row with wrap on desktop, stacks on mobile (`max-width: 599px`). Lives inside a `Container` below a `border-top` divider within `#stats-bar`.
- **When adding cert copy elsewhere:** reuse `.certs-row` inside the same `Container` + inset pattern so cert lines stay aligned with stats above.

### PageHero (`src/components/ui/PageHero.tsx`)

Default: eyebrow + title + intro on a solid `apd-steel-blue` background. Service detail pages also pass `image={service.heroImage}` and `imageAlt={service.title}` for a right-side photo (copy left, image right; stacks on mobile). Other internal pages (`/services` index, 404) omit the image.

### Service data & images (`src/data/services.ts`)

Each `Service` has two image fields:

| Field | Used on | Notes |
|---|---|---|
| `image` | `/services` index `ServiceCard` thumbnails | Small square crop, copy-left / image-right card layout |
| `heroImage` | `/services/:slug` `PageHero` | Larger hero photo on the right; can differ from `image` |

Service titles, slugs, icons, teasers, and homepage material tags all derive from `SERVICES` — do not duplicate service names in page files.

### Services index (`/services`)

- Grid: `.services-index-grid` — 2 cards per row, stacks to 1 column below `700px`
- **No borders** between cards (background/gap only)
- `ServiceCard`: icon + title + teaser + "Learn more" link on the left; `service.image` thumbnail on the right

### Homepage services teaser (`#services-teaser`)

Material tags are `Link` components (not plain spans), mapped from `SERVICES` via `ALL_SERVICES`. Each links to `/services/:slug`. Hover: light steel-blue tint, `apd-steel-blue` border and text.

### Navigation (`src/components/layout/Nav.tsx`)

**Logo placement (responsive split):**

- **Desktop (`lg+`):** no logo in the nav bar — nav links are centered (`lg:justify-center`). Logo appears in the homepage hero only.
- **Mobile (`< lg`):** logo in the nav bar (left), hamburger (right) via `justify-between`. Hero logo is hidden.
- **Tailwind caveat:** do not set `display` via inline styles on elements that use `lg:hidden` — inline styles override Tailwind. Use classes like `flex items-center lg:hidden` on the mobile nav logo link instead.

**Services dropdown:**

"Services" in the nav has a dropdown of all service pages, derived from `SERVICES`.

- **Desktop:** state-driven (`desktopServicesOpen`) — opens on hover/focus, closes on link click, `Escape`, or click outside. Do not rely on pure CSS `:hover` alone (focus persists after navigation).
- **Mobile:** accordion under the Services nav item (`mobileServicesOpen`); collapses when the mobile menu closes

**Accessibility (desktop dropdown):**

Uses the **disclosure pattern** — plain `NavLink`s in normal Tab order, not an ARIA `menu` widget (no arrow-key navigation, no `role="menu"` / `role="menuitem"`).

- **ARIA on trigger:** `aria-haspopup="true"`, `aria-expanded`, `aria-controls` pointing at the panel `id`
- **Hover (WCAG 1.4.13):** no dead zone between trigger and panel — panel sits flush below trigger. Debounced close (~200ms) on mouse leave, cancelled on re-enter. Panel must remain hoverable while open.
- **Keyboard:** Tab through trigger → each submenu link. `Escape` closes the panel and returns focus to the trigger.
- **Touch:** first tap opens without navigating; second tap on trigger navigates to `/services`.
- **Focus styling:** `:focus-visible` on `.nav-link` and `.nav-dropdown-link` in `src/index.css`. Do not set `outline: none` on nav links without a replacement.
- **Semantics:** submenu links wrapped in `<ul>` / `<li>` for screen reader list announcement.

### Homepage hero (`#hero`)

- Full-bleed photo hero with scrim — not `PageHero` (internal pages only).
- **No grid texture** behind the hero photo — intentional. The photo shows through cleanly; the scrim alone handles legibility. Don't reintroduce a texture overlay here.
- **Photo:** `hero-building.jpg` — focal point is tuned to keep the building's pinnacle in frame (upper-right). If the photo changes, re-check the crop rather than assuming the old position still works.
- **Scrim:** dark gradient, denser over the text side and lighter toward the right edge. Current exact gradient values live in the hero component — adjust there, not here.
- **No "Not a broker" badge** in the hero — that positioning lives in copy elsewhere; the badge is reserved for `/palette-sample` only.
- **Headline:** "Protecting your brand through sustainability." — sized responsively to fit below the logo; check the component's current `clamp()` values before changing breakpoint behavior.
- **Intro paragraph:** Merriweather prose, scales down on small breakpoints — see component for exact sizes.
- **Logo:** `logo-apd.svg`, desktop-only, above the headline (mobile nav logo takes over instead — see Navigation above).
- CTAs: "Get a quote" (primary) + "Explore services" (outline).

### Why APD split panel (`#why-apd`)

50/50 grid: steel-blue copy panel left, media right.

- **Right panel:** looping video `src/assets/APD-bundled-02.mp4` — `autoPlay muted loop playsInline`, `object-fit: cover` (crops left/right to fill the panel).
- **Poster:** `baled-cardboard-real.jpg` shows while the video buffers.
- Replaces the static baled-cardboard image from the original DS mockup.

### Proof-of-destruction grid (`#certificate-of-destruction`)

`.proof-grid` in `src/index.css` uses the same hairline border-grid technique as `.sustainability-grid` (container gets `border-top` + `border-left`, each tile gets `border-right` + `border-bottom`).

- On the dark `apd-ink` background, the border color is intentionally overridden to a light semi-transparent white rather than the standard `var(--apd-border)` token, so hairlines stay visible against dark. The exact value lives in `index.css` — don't reintroduce the light-mode border token here.
- Layout: 3 columns at `min-width: 600px`, 1 column below.

### Homepage photo mosaic (`#photo-mosaic`)

- First tile: `baled-cardboard.jpg` ("Baled cardboard ready for processing").
- Remaining tiles: forklift, facility exterior (see `HomePage.tsx` mosaic array).

### Homepage sustainability section (`#sustainability`)

- Centered `TextLink` to `/sustainability` — **"About our environmental commitment"** — sits between the section intro and the stats grid (same pattern as the Certificate of Destruction link).
- Stats use shared `StatsRow` with `variant="light"`.
- **Removed:** the small footnote paragraph below the stats (shrink wrap / waste-to-energy / animal-feed copy) — don't re-add without a reason; it was a deliberate cut.

### CTA band & contact form (`src/components/layout/CtaBand.tsx`)

Reusable olive-green closing section on the homepage and every service detail page. Two-column layout via `.cta-form-grid` in `src/index.css`:

- **Left:** heading, intro, bullet checklist, contact line.
- **Right:** `ContactForm` (replaces the old standalone "Get a quote" button).
- Stacks to a single column below `767px`.

**`ContactForm` (`src/components/ui/ContactForm.tsx`):**

- Fields: Name (required), Company, Email (required), Phone, Message (required).
- **Netlify Forms:** `name="contact"`, `data-netlify="true"`, honeypot (`bot-field`). A hidden static mirror form in `index.html` is required for Netlify's build-time form detection.
- **SPA submit:** `fetch('/')` with `Content-Type: application/x-www-form-urlencoded` (not a plain HTML post — required for React SPAs on Netlify).
- **Cloudflare Turnstile:** loaded in explicit render mode; submit is disabled until a valid token is received. Site key from `VITE_TURNSTILE_SITE_KEY` in `.env`; falls back to test key `1x00000000000000000000AA` for local dev (always passes).
- Inline success/error states — no redirect.

### Homepage testimonials (`#testimonial`)

Client quotes on the homepage — data in `src/data/testimonials.ts`, rendered by `TestimonialsCarousel` (`src/components/ui/TestimonialsCarousel.tsx`). Edit the data file to add or change quotes; edit the carousel component (or its CSS in `src/index.css`) for sitewide layout/behavior changes — not `HomePage.tsx` instances.

**Data (`Testimonial` in `testimonials.ts`):**

- **`quote`** — only required field
- Optional: `firstName`, `lastName`, `jobTitle`, `company` (omit or leave blank when unknown)
- **`TESTIMONIALS`** array — hard cap of 9 entries (enforced in the carousel)
- Attribution formatting lives in `formatTestimonialName` / `formatTestimonialMeta` in the same file — meta line order is Name, Title · Company; missing parts and stray punctuation are omitted; quote-only entries hide the footer entirely

**Carousel behavior (`TestimonialsCarousel`):**

- Accepts optional `testimonials` prop; defaults to `TESTIMONIALS`
- Page size is responsive: 3 cards at `min-width: 1024px`, 2 at `min-width: 600px`, 1 below
- **No auto-advance.** Paging is entirely user-driven via the prev/next controls — do not reintroduce a timer. `prefers-reduced-motion: reduce` still suppresses the slide transition.
- Prev/next controls below the track; hidden when all items fit on one page
- Layout/styling: `.testimonials-*` and `.testimonial-*` classes in `src/index.css`; quote mark uses `QuotesIcon` (`weight="fill"`) with `className="testimonial-quote-icon"`

## Key Messaging (copy direction)

- **Homepage hero headline:** "Protecting your brand through sustainability."
- "We Don't Broker It. We Destroy It." — alternate headline / brand line (not currently in the hero; the "Not a broker" badge was removed from the hero)
- Direct service = lower cost + faster communication + verified proof
- Confidentiality, integrity, zero tolerance for shenanigans
- Proof options: video / photos / live viewing

## Security Review Cadence

Run the `security-review` skill (or an equivalent manual pass) in these situations:

- Before any production deploy.
- After a commit or batch of commits introduces a new dynamic/user-input surface — a new form, a new route with params, a new third-party script, or any backend/API code.
- After several smaller commits accumulate without a review in between (a batch of copy/layout commits doesn't need one; a batch that touches routing, forms, or scripts does).

Routine content, copy, and styling-only commits don't need a review.

## Accessibility (WCAG)

Ongoing effort — nav Services submenu was the first pass. When adding or changing interactive surfaces, verify keyboard operability, visible focus, and screen reader semantics.

**Check on new/changed interactive UI:**

- Forms, nav menus, modals, and custom controls need keyboard access and a visible `:focus-visible` indicator
- Hover-revealed content must stay open while the pointer moves to it (WCAG 1.4.13) — no gaps between trigger and panel
- Prefer disclosure patterns (expand/collapse with plain links) over ARIA menu widgets unless app-like menu behavior is explicitly required

Routine copy and static layout commits don't need an accessibility review unless they introduce new interactive elements.

*(Known gaps and outstanding accessibility work are tracked in STATUS.md, not here.)*

---

**See also:** `STATUS.md` for planned pages, outstanding data/assets, and pending design decisions — that file changes often and is reviewed each session; this file should stay stable between reviews.
