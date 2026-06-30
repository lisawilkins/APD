---
name: apd-website
description: >
  Load at the start of any APD website build session — adding a page, building a feature,
  writing copy, or wiring up infrastructure. Triggers include: "build APD page", "add a route",
  "APD website", "new APD page", "work on APD", or any task touching the Arizona Product
  Destruction site. Load alongside SKILL-website-requirements.md
  (/Users/lisawilkins/Documents/ElleDubDesign/claude/SKILL-website-requirements.md) for
  full cross-cutting standards (accessibility, SEO, schema, security, performance, pre-launch
  checklist). This file provides the APD-specific context; that file provides the craft standards.
---

# APD Website — Development Skill

## How to use this skill

- **Start of any session**: Load this file first. Load `SKILL-website-requirements.md` alongside it for standards that apply to all websites (WCAG, SEO, schema, performance, security, pre-launch).
- **During a session**: Reference the page spec for the page being built. Don't front-load every section.
- **Before launch**: Run the pre-launch checklist in `SKILL-website-requirements.md` and the Missing Data Tracker below.

---

## 1. Project Snapshot

| | |
|---|---|
| **Client** | Arizona Product Destruction (APD) |
| **Domain** | azproductdestruction.com |
| **Framework** | React 19 + Vite 8 |
| **Routing** | React Router v7 — `createBrowserRouter` pattern |
| **Styling** | Tailwind CSS v4 (`@tailwindcss/vite` plugin, CSS-first `@theme`) |
| **Language** | TypeScript + TSX throughout — no plain JS files |
| **Hosting** | TBD — Cloudflare Pages recommended for static Vite build |

### Stack deviations from SKILL-website-requirements.md defaults

The general skill defaults to Next.js 14+ App Router. APD uses React + Vite. Apply the same principles with these substitutions:

| General skill | APD equivalent |
|---|---|
| `next/font` | Preconnect + `<link>` tags in `index.html` |
| `<Image>` component | Standard `<img loading="lazy" width="..." height="...">` |
| `app/sitemap.ts` | `vite-plugin-sitemap` or a `scripts/generate-sitemap.ts` build script |
| `next.config.js` security headers | Cloudflare Pages `_headers` file |
| `app/layout.tsx` | `src/App.tsx` Layout wrapper + `index.html` |
| GTM via `@next/third-parties` | GTM script tag in `index.html` `<head>` |

### Schema / JSON-LD

Inject via a `SchemaScript` component using `dangerouslySetInnerHTML`:

```tsx
// src/components/ui/SchemaScript.tsx
interface Props { schema: Record<string, unknown> }
export function SchemaScript({ schema }: Props) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

Place `<SchemaScript>` inside the page's JSX, not in a `<head>` — React Router v7 does not yet support `<head>` injection from page components without a library like `react-helmet-async`.

---

## 2. Brand Tokens

Defined in `src/index.css` via Tailwind v4 `@theme`. Palette: **Industrial Earth**. Use these utility classes throughout — never hardcode hex values.

| Token | Hex | Tailwind class examples | Usage |
|---|---|---|---|
| `apd-olive` | `#5A6C3A` | `bg-apd-olive` `text-apd-olive` | Primary — buttons, H3, checkmark icons |
| `apd-olive-dark` | `#4A5830` | `hover:bg-apd-olive-dark` | Olive hover state |
| `apd-forest` | `#2E3822` | `bg-apd-forest` `text-apd-forest` | Deep dark — nav/footer bg, hero bg, H1/H2 text |
| `apd-steel` | `#3B5A85` | `bg-apd-steel` `text-apd-steel` | Secondary — stats bar bg, links |
| `apd-steel-dark` | `#2C4563` | `hover:text-apd-steel-dark` | Steel hover |
| `apd-clay` | `#B44C2E` | `bg-apd-clay` `text-apd-clay` | Accent — logo badge, hero accent span |
| `apd-clay-dark` | `#8A3922` | `hover:bg-apd-clay-dark` | Clay hover |
| `apd-ink` | `#2B2F24` | `text-apd-ink` | Primary body text |
| `apd-mist` | `#6B7864` | `text-apd-mist` | Secondary/supporting body text |
| `apd-sage` | `#7A8A5F` | `text-apd-sage` | Eyebrow/label uppercase text |

**Font:** Inter — loaded via preconnect + `<link>` in `index.html`. Applied via `var(--font-sans)` in `body`.

---

## 3. Project Conventions

- One file per route in `src/pages/`
- Page copy is co-located in each page file (data arrays, strings at top of file)
- Shared layout in `src/components/layout/` — `Nav.tsx`, `Footer.tsx`
- Shared UI primitives in `src/components/ui/` (e.g., `Button.tsx`, `SchemaScript.tsx`)
- No CSS modules or styled-components — Tailwind v4 utility classes only
- Responsive mobile-first: 375px minimum, 768px tablet, 1280px desktop

---

## 4. Site Map & Build Priority

| Priority | Route | Page | Status |
|---|---|---|---|
| 1 | `/` | Home | Done |
| 2 | `/services` | Services detail | **Build next** |
| 3 | `/how-it-works` | Process walkthrough | Pending |
| 4 | `/proof-of-destruction` | Documentation options | Pending |
| 5 | `/about` | Company, team, sister companies | Pending |
| 6 | `/contact` | Lead gen form + Turnstile | Pending — blocked on Turnstile key |
| 7 | `/privacy` | Privacy policy | Pending — blocked on GA4 ID |

---

## 5. Routing Pattern

`src/App.tsx` uses `createBrowserRouter`. Add each new page as a child of the Layout route:

```tsx
// Current — src/App.tsx
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      // Add new routes here:
      { path: '/services', element: <ServicesPage /> },
      { path: '/how-it-works', element: <HowItWorksPage /> },
      { path: '/proof-of-destruction', element: <ProofPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/privacy', element: <PrivacyPage /> },
    ],
  },
])
```

---

## 6. Page Specs

### 6.1 `/services` — Services

**`<title>`**: `Product Destruction Services | Arizona Product Destruction`  
**`<meta description>`**: Direct product destruction for recalled, expired, damaged, and discontinued products. Beverages, food, apparel, appliances, supplements, and more. Phoenix, AZ.  
**`<h1>`**: `Product Destruction Services`

**Sections:**

1. **Intro / differentiator** — We handle it ourselves. No brokers. Direct contact, lower cost, faster turnaround.
2. **Product categories** — Grid of cards, one per category. Each card: icon, category name, 1–2 sentence description of why that category needs destruction.
   - Beverages (80% of AZ beverages processed)
   - Food & perishables
   - Nutritional supplements
   - Apparel & fabrics
   - Home goods
   - Appliances
   - Cosmetics & personal care
   - Industrial products
3. **Custom solutions** — APD handles non-standard or complex products. Manufacturers can contact APD to discuss.
4. **Service area** — Phoenix, AZ (two warehouses); sister companies in CA and UT; ships from TX and Southwest.
5. **CTA** — "Request a Service Quote" → `/contact`

**Schema**: `Service` type is not standard; use `LocalBusiness` on this page with `serviceType` property.  
**Tone**: Direct, no fluff. List what we do. Don't over-explain.  
**Missing data**: None blocking. Use placeholder for tonnage stat if included.

---

### 6.2 `/how-it-works` — How It Works

**`<title>`**: `How Product Destruction Works | Arizona Product Destruction`  
**`<meta description>`**: APD's direct destruction process — intake, destruction, documentation, and reporting. No brokers, no middlemen. Phoenix, AZ.  
**`<h1>`**: `How It Works`

**Sections:**

1. **Process steps** — Numbered, clearly sequenced:
   1. **Contact & intake** — Manufacturer contacts APD directly. Product type, quantity, and destruction requirements discussed.
   2. **Logistics** — Product shipped to or picked up from APD's Phoenix warehouse(s). Sister companies handle CA and UT intake.
   3. **Destruction** — Product is destroyed on-site using appropriate methods for the product type.
   4. **Documentation** — Proof of destruction generated: video, photos, or live viewing.
   5. **Reporting** — Documentation delivered to manufacturer.
2. **Proof options callout** — Link to `/proof-of-destruction` for details.
3. **Timeline expectations** — Placeholder: typical turnaround ranges. (Data needed from APD.)
4. **CTA** — "Get Started" → `/contact`

**Schema**: `HowTo` type with `HowToStep` items.  
**Tone**: Clear, procedural. Manufacturers want to know exactly what happens to their product.  
**Missing data**: Typical turnaround time, any minimum quantities or product weight thresholds.

---

### 6.3 `/proof-of-destruction` — Proof of Destruction

**`<title>`**: `Proof of Destruction | Video, Photos & On-Site Viewing | APD`  
**`<meta description>`**: APD provides verified proof of destruction — video documentation, photo records, or live on-site viewing at our Phoenix warehouse. Confidential and thorough.  
**`<h1>`**: `Proof of Destruction`

**Sections:**

1. **Why proof matters** — Regulatory compliance, brand protection, liability. APD's proof is verifiable and documented.
2. **Three options** — Cards or columns, one per option:
   - **Video** — Full destruction event recorded. Delivered digitally.
   - **Photos** — Before/after documentation. Timestamped.
   - **Live on-site viewing** — Manufacturer or representative present at Phoenix warehouse during destruction.
3. **Confidentiality** — All documentation handled with zero-tolerance for mishandling. APD employees trusted for integrity.
4. **CTA** — "Request Proof of Destruction" → `/contact`

**Schema**: `FAQPage` is optional here if we add an FAQ block. Otherwise `WebPage`.  
**Tone**: Reassuring, precise. This is a trust page.  
**Missing data**: Sample documentation (redacted), certificate of destruction format if one exists.

---

### 6.4 `/about` — About

**`<title>`**: `About Arizona Product Destruction | Direct. Verified. Trusted.`  
**`<meta description>`**: Arizona Product Destruction is a direct product destruction company in Phoenix, AZ — not a broker. Two warehouses, sister companies in CA and UT, serving the Southwest.  
**`<h1>`**: `About Arizona Product Destruction`

**Sections:**

1. **Who we are** — Direct product destruction company. Not a broker. What that means for manufacturers.
2. **Our warehouses** — Two Phoenix locations. (Addresses needed.)
3. **Coverage & sister companies** — AZ primary. Sister companies in CA and UT handle regional intake. TX and Southwest manufacturers ship to us.
4. **What we process** — Brief list linking to `/services`.
5. **Our values** — Integrity, confidentiality, efficiency. Zero tolerance for shenanigans. Employees trusted to handle sensitive materials correctly.
6. **Customer list** — Placeholder section. (Data needed from APD.)
7. **CTA** — "Work With Us" → `/contact`

**Schema**: `Organization` with `LocalBusiness`, address, and `areaServed`.  
**Tone**: Grounded, earned confidence. Not boastful. Let the facts speak.  
**Missing data**: Warehouse addresses, team bios and photos, founding date/year, customer list, tonnage stats.

---

### 6.5 `/contact` — Contact

**`<title>`**: `Request Product Destruction Services | Arizona Product Destruction`  
**`<meta description>`**: Contact Arizona Product Destruction to request a service quote, ask about our process, or discuss a custom solution. Direct response, no broker.  
**`<h1>`**: `Get in Touch`

**Form fields:**

| Field | Type | Required |
|---|---|---|
| Name | text | Yes |
| Company | text | Yes |
| Email | email | Yes |
| Phone | tel | No |
| Product type | select or text | Yes |
| Message / details | textarea | No |
| `website` (honeypot) | text, `display:none` | — |

**Implementation requirements:**
- Cloudflare Turnstile widget (sitekey from env: `VITE_TURNSTILE_SITE_KEY`)
- Server-side Turnstile verification required before processing submission
- Rate limiting on submission endpoint: 5 requests / IP / 10 minutes
- Form submission endpoint: TBD — email relay (Resend, Postmark, or Cloudflare Email Workers) or serverless function
- All inputs validated server-side
- Confirmation message shown on success (no redirect to separate /thank-you page needed unless specified)

**Side content (alongside form):**
- Phone: placeholder `(000) 000-0000`
- Email: `info@azproductdestruction.com`
- Warehouse location(s): placeholder
- Hours: TBD

**Schema**: `ContactPage`  
**Missing data**: Turnstile site key + secret, form submission endpoint, phone, warehouse address(es), business hours.

---

### 6.6 `/privacy` — Privacy Policy

**`<title>`**: `Privacy Policy | Arizona Product Destruction`  
**`<h1>`**: `Privacy Policy`

**Covers:**
- What data is collected: contact form submissions (name, company, email, phone, message), analytics data via GA4
- How it's used: to respond to inquiries; aggregate analytics for site improvement
- Third-party services: Google Analytics 4 (GA4 Measurement ID: `[G-XXXXXXXXXX]`), Cloudflare Turnstile
- Data retention and deletion contact
- No data sold to third parties
- Last updated date (dynamic or manual)

**Tone**: Plain English. Not legalese. Cover the bases without burying users.  
**Missing data**: GA4 Measurement ID, Cloudflare Turnstile disclosure, business legal name and address for policy contact.

---

## 7. Key Messaging (canonical)

Use these consistently across all pages. Do not rewrite or soften.

| Message | Usage |
|---|---|
| "We Don't Broker It. We Destroy It." | Hero headline on Home. Can echo on Services and About. |
| Direct service = lower cost | Services, About, Home value props |
| Direct service = faster communication | Services, About, Home value props |
| Direct service = verified proof | Services, About, Proof of Destruction |
| Confidentiality and zero tolerance | Proof of Destruction, About, Contact |
| 80% of Arizona's beverages processed | Home stats bar, Services (beverages section) |
| Two Phoenix warehouse locations | About, Contact, Footer |
| Sister companies in CA and UT | About, Services (service area) |
| TX and Southwest manufacturers served | About, Services |
| Proof: video / photos / live viewing | Proof of Destruction, Home, How It Works |

---

## 8. Missing Data Tracker

Items blocking final production content. Follow up with APD to fill these before launch.

| Item | Needed For | Status |
|---|---|---|
| Phone number | Contact page, Footer, About, schema | Pending |
| Warehouse address(es) — both locations | Contact, About, schema, Footer | Pending |
| Total tonnage processed per year | Stats bar (Home), About | Pending |
| Recycling / secondary-use rate | Stats bar (Home), About | Pending |
| Business founding date / year | About, schema | Pending |
| Customer / manufacturer list | About | Pending |
| Real photography — hero image | Home hero | Pending |
| Real photography — warehouse interior | About, How It Works | Pending |
| Real photography — destruction process | How It Works, Proof of Destruction | Pending |
| GA4 Measurement ID (`G-XXXXXXXXXX`) | `index.html` GTM/GA4 install, Privacy policy | Pending |
| Cloudflare Turnstile site key | Contact form (`VITE_TURNSTILE_SITE_KEY`) | Pending |
| Cloudflare Turnstile secret key | Form submission endpoint (server-side, never in browser) | Pending |
| Form submission endpoint | Contact form server action | Pending |
| Complete Southwest states served | Services (service area), About | Pending |
| Business hours | Contact page | Pending |
| Business legal name (for Privacy Policy) | Privacy policy | Pending |

---

## 9. SEO Defaults (APD-specific)

Apply to every page. See `SKILL-website-requirements.md` §3 for full SEO standards.

**Title pattern**: `[Page Topic] | Arizona Product Destruction`  
**Description length**: 150–160 characters, unique per page  
**Canonical**: `https://azproductdestruction.com/[path]`

**Organization schema** (inject on every page via `SchemaScript`):

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Arizona Product Destruction",
  "url": "https://azproductdestruction.com",
  "logo": "https://azproductdestruction.com/favicon.svg",
  "telephone": "[PENDING]",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Phoenix",
    "addressRegion": "AZ",
    "addressCountry": "US"
  },
  "areaServed": ["AZ", "CA", "UT", "TX"],
  "description": "Direct product destruction company in Phoenix, AZ. Not a broker. Recalled, expired, damaged, and discontinued products destroyed with verified proof."
}
```

**BreadcrumbList**: Implement on all pages except `/`. Position 1 is always Home.

---

## 10. Pre-Launch Gate

Do not launch until all items in the Missing Data Tracker above are resolved AND the pre-launch checklist in `SKILL-website-requirements.md` §16 is complete.

Additional APD-specific launch gates:
- [ ] Contact form tested end-to-end with real Turnstile key (not test key `1x00000000000000000000AA`)
- [ ] GA4 DebugView confirms pageview events fire on all 7 routes
- [ ] All `(000) 000-0000` and `tel:+10000000000` placeholders replaced
- [ ] All `[PENDING]` schema fields populated
- [ ] `src/App.css` (unused Vite boilerplate) deleted
- [ ] Tonnage and recycling rate stats confirmed with APD before publishing
