import { type RouteConfig, index, layout, route } from '@react-router/dev/routes'

export default [
  // Everything inside the site chrome (Nav + Footer).
  layout('components/layout/SiteLayout.tsx', [
    index('pages/HomePage.tsx'),
    route('about', 'pages/AboutPage.tsx'),
    route('services', 'pages/ServicesPage.tsx'),
    route('services/:slug', 'pages/ServiceDetailPage.tsx'),
    route('proof-of-destruction', 'pages/ProofOfDestructionPage.tsx'),
    route('faq', 'pages/FaqPage.tsx'),
    // Prerendered to build/client/404/index.html and served by Netlify with a
    // real 404 status (see public/_redirects).
    route('404', 'pages/NotFoundPage.tsx', { id: 'static-not-found' }),
    // Client-side catch-all for bad links followed after hydration.
    route('*', 'pages/NotFoundPage.tsx', { id: 'catch-all-not-found' }),
  ]),
  // Internal design tool — deliberately outside the layout, no Nav or Footer.
  route('palette-sample', 'pages/PaletteSamplePage.tsx'),
] satisfies RouteConfig
