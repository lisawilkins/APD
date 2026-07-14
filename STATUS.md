# APD Website — Status & Open Items

*Last updated: 2026-07-14. Review at the end of each work session — update, delete, or graduate items into AGENTS.md if they become permanent conventions rather than pending work.*

## Pages

- `/` — Home (built)
- `/services` — Services index (built)
- `/services/:slug` — Service detail, 10 categories (built; placeholder copy pending review)
- `/how-it-works` — Process walkthrough (not started)
- `/proof-of-destruction` — Documentation options (not started)
- `/about` — Company, team, sister companies (not started)
- `/contact` — Lead gen form, Cloudflare Turnstile (not started)
- `/sustainability` — Environmental commitment, linked from homepage (not built)
- `/privacy` — Privacy policy (not started)

## Pending Design/Dev Decisions

- **Dark-mode button variants** — being added to the design system; update `Button.tsx` once the DS export refreshes.
- **Legacy color aliases** (`apd-olive`, `apd-forest`, `apd-steel`, `apd-clay`, `apd-sage`, `apd-mist`) still exist in `index.css` for old code — migrate references to current token names, then remove the aliases.
- **Sitewide focus-visible pass** — nav Services submenu has it; buttons, form fields, and footer links still need the same treatment.

## Data Still Needed

- Actual phone number and address(es)
- Tonnage processed (stat placeholder)
- Customer/manufacturer list
- Real photos for homepage hero and warehouse sections — service card thumbnails and service detail hero images are in place; many other assets are large/unoptimized; compress before production. Key homepage assets from the DS export: `hero-building.jpg`, `baled-cardboard-real.jpg`, `warehouse-wide-real.jpg`, `APD-bundled-02.mp4` (~9 MB)
- GA4 Measurement ID
- Cloudflare Turnstile site key — set as `VITE_TURNSTILE_SITE_KEY` in `.env` for production (local dev uses the always-pass test key)

## Documentation Backlog

- [ ] **AGENTS.md phase 2 trim** — collapse homepage section appendix into pointers to `HomePage.tsx` / `index.css`; trim core color hex table to "see `src/index.css`" (keep dual-token rule and palette-sample constraint).
