## Wrapping and setup

Most components (`Button`, `Badge`, `Eyebrow`, `PageHero`, `SectionHead`, `StatsRow`, `ContactForm`) are plain, self-contained function components with no context reads — load `styles.css` then `_ds_bundle.js` and render from `window.APDUI.*`.

**Exception: `TextLink` and `ServiceCard`** render a react-router `<Link>` internally and throw if mounted without a router. Wrap any composition using either of them in `window.APDUI.MemoryRouter`:

```jsx
const { MemoryRouter, TextLink } = window.APDUI;
<MemoryRouter><TextLink to="/services">Learn more</TextLink></MemoryRouter>
```

## Components added since last sync

`PageHero` (internal-page hero — eyebrow/title/intro on a solid brand-color background, optional right-side `image`), `SectionHead` (eyebrow/title/intro block for in-page section headers, `align="left"|"center"`), `ServiceCard` (icon/title/teaser/thumbnail card linking via `TextLink` — needs `MemoryRouter`, see above), `StatsRow` (animated count-up stat grid, `variant="dark"|"light"`), `TextLink` (arrow-suffixed link, needs `MemoryRouter`), `ContactForm` (lead-gen form — styled only for a dark/olive background, e.g. `var(--apd-olive-green)`; unreadable on light surfaces).

## Styling idiom

This DS does not use Tailwind utility classes on its own components — despite the host app using Tailwind v4 elsewhere, `Button`/`Badge`/`Eyebrow` are styled entirely with **inline styles referencing CSS custom properties**. Style via `var(--token-name)`, never a class. Real vocabulary (from `tokens/`):

| Token | Use |
|---|---|
| `--apd-steel-blue` | Primary actions, links, "trust" surfaces |
| `--apd-olive-green` | Secondary / sustainability accents, CTA band bg |
| `--apd-clay-red` | Accent / destructive, "Not a broker" badge |
| `--apd-ink` | Near-black dark-section background |
| `--apd-heading` / `--apd-body` / `--apd-text-muted` / `--apd-text-sage` | Text hierarchy |
| `--apd-surface` / `--apd-surface-panel` / `--apd-surface-app` | Background surfaces, lightest to warmest |
| `--apd-border` / `--apd-border-strong` | Hairlines |
| `--apd-warning-bg` / `--apd-warning-fg` / `--apd-error-bg` / `--apd-error-fg` / `--apd-success-bg` / `--apd-success-fg` / `--apd-info-bg` / `--apd-info-fg` | Semantic state pairs (bg + fg) |
| `--font-display` / `--font-heading` / `--font-body` / `--font-ui` / `--font-prose` | Archivo (display/body), Inter (heading/ui), Merriweather (prose) |

Components accept a `style` prop for one-off overrides (e.g. `Button`'s outline variant on a dark hero needs `style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.6)' }}` — the component's own outline color is tuned for light backgrounds).

## Where the truth lives

Read `styles.css` (imports `_ds_bundle.css`, which defines every `--apd-*` and `--font-*` custom property) before styling anything new. Each component's `components/<group>/<Name>/<Name>.prompt.md` has real usage examples ported from the production homepage.

## Idiomatic build snippet

```jsx
const { Badge, Button } = window.APDUI;

<div style={{ background: 'var(--apd-ink)', padding: 24 }}>
  <Badge tone="red" solid>Not a broker</Badge>
  <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
    <Button variant="primary" size="lg">Get a quote</Button>
    <Button variant="outline" size="lg" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.6)' }}>
      Explore services
    </Button>
  </div>
</div>
```
