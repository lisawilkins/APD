# APD Website — Status & Open Items

*Last updated: 2026-08-05. Review at the end of each work session — update, delete, or graduate items into AGENTS.md if they become permanent conventions rather than pending work.*

## Pages

- `/` — Home (built)
- `/services` — Services index (built)
- `/services/:slug` — Service detail, 10 categories (built)
- `/how-it-works` — Process walkthrough (not started)
- `/proof-of-destruction` — Certificate of Destruction / documentation options (built)
- `/faq` — General question set; canonical owner of the `FAQPage` schema (built)
- `/about` — Company, team, partner companies (built; copy ready for client review)
- `/contact` — Lead gen form, Cloudflare Turnstile (not started)
- `/sustainability` — Environmental commitment (not built)
- `/giving-back` — Community work (not built)
- `/privacy` — Privacy policy (not started)

### Links currently repointed because the target page doesn't exist

These are workarounds, not final destinations. When the pages get built, point them back:

| Link | Currently goes to | Should go to |
|---|---|---|
| Nav + hero "Get a quote" | `#cta-band` (form at foot of page) | `/contact` |
| Footer "Sustainability" | `/#sustainability` | `/sustainability` |
| Footer "Giving Back" | `/about#giving-back` | `/giving-back` |
| Homepage sustainability link | `/services` | `/sustainability` |

## Copy awaiting APD sign-off

**See `COPY-REVIEW.md`.** 107 passages on the site were written by Claude, extrapolated from
APD's original short copy rather than supplied by them — service body paragraphs, all "at a
glance" fact rows, every FAQ answer, and the broker-vs-direct comparison table. They read
plausibly but are unverified.

Send that file to APD to mark Keep / Edit / Cut. Nothing in it is structural, so any item can be
cut without side effects. Regenerate it after copy changes with:

```
python3 scripts/generate-copy-review.py
```

Highest risk items, in order: the broker comparison table (characterises competitors), the
"Materials accepted" rows (assert what APD does and doesn't take), and the cost FAQ answer.

## Blocked on client data

### Statistics pulled from the site pending verification

**All statistics on the site are now client-verified.** The `(placeholder)` designation has been removed everywhere; nothing is being withheld.

Annual diversion totals — confirmed by APD, and the only figures that go stale:

- `26,000` tons of OCC recycled in 2025 — homepage sustainability band, OCC/cardboard and packaging service pages
- `800+` tons of metals diverted in 2025 — homepage sustainability band, e-waste and aluminum service pages
- `+180` loads diverted to approved waste-to-energy facilities — homepage stats bar, liquidation-pallets page

These also appear in `KEY_FACTS` (`src/data/site.ts`), two FAQ answers (`src/data/faqs.ts`), and `public/llms.txt`. **Update the year label with the number** when the 2026 totals come in — grep for `in 2025` to find every instance.

Zero-tolerance / zero-waste commitments, confirmed as intentional positioning:

- `0%` product to the public sewer — beverages, aluminum & metals, homepage sustainability band
- `0%` branded product re-entering resale channels — textiles & apparel
- `0%` data-bearing product left unaccounted for — electronic waste
- `0%` separate shipments needed for mixed product + packaging loads — OCC / cardboard

Other verified figures in use: 724K gallons/year, 80% of Arizona's beverage market, 72%+ downstream second use, 100% loads closed with a Certificate of Destruction, 23+ years, 40+ employees, 2 warehouses, 52% of team at 5+ years, 10 categories.

### Other data still needed

- **Street address** — deliberately withheld from the site. `LocalBusiness` schema carries city/region only, which forfeits Google's LocalBusiness rich result (it requires a full postal address). Revisit if the client changes their mind.
- **Business hours** — needed for `openingHours` in schema.
- **Social profile URLs** (LinkedIn, Google Business Profile) — needed for `sameAs`, which is how search and answer engines confirm APD is a distinct real-world entity.
- **GA4 Measurement ID** — no analytics of any kind is installed.
- **Google Search Console verification** — not set up. Without it there is no way to see whether any of the SEO work landed.
- Customer/manufacturer list.
- **`public/og-image.jpg`** — referenced by every page's Open Graph and Twitter tags but **not yet created**. Needs to be 1200×630. Until it exists, social shares render without a preview image.

## Pending Design/Dev Decisions

- **Dark-mode button variants** — being added to the design system; update `Button.tsx` once the DS export refreshes.
- **Legacy color aliases** (`apd-olive`, `apd-forest`, `apd-steel`, `apd-clay`, `apd-sage`, `apd-mist`) still exist in `index.css` for old code — migrate references to current token names, then remove the aliases.
- **Sitewide focus-visible pass** — nav Services submenu, FAQ disclosures, and footer contact links have it; buttons and form fields still need the same treatment.
- **Homepage hero h1** — now carries an uppercase keyword line ("Product destruction in Phoenix, Arizona") above the tagline, inside the same `<h1>`. Worth a design review to confirm the treatment reads the way the client wants.

## Performance

- Source photography compressed 46.2 MB → 13.9 MB (−70%) via `node scripts/optimize-assets.ts`. Re-run after adding new photography.
- **`APD-bundled-02.mp4` is still 1.67 MB** and autoplays on the homepage. It now uses `preload="none"` so it doesn't compete with the hero image, but a smaller re-encode plus a WebM source would be better.
- Remaining large images are ~1 MB each. Next step for real gains is build-time WebP/AVIF with responsive `srcSet` (`vite-imagetools`) rather than shipping single full-size JPEGs.
- `public/palette-sample/` ships ~11 MB of images for the internal design page only. No effect on public page loads, but it inflates every deploy.

## Documentation Backlog

- [ ] **AGENTS.md phase 2 trim** — collapse homepage section appendix into pointers to `HomePage.tsx` / `index.css`; trim core color hex table to "see `src/index.css`" (keep dual-token rule and palette-sample constraint).
