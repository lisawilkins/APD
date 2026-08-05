import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
} from 'react-router'
import type { Route } from './+types/root'
import SchemaScript from './components/ui/SchemaScript'
import { localBusinessSchema } from './lib/schema'
import stylesheet from './index.css?url'

export const links: Route.LinksFunction = () => [
  { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
  // Preconnect before the stylesheet request so the font fetch isn't waiting on
  // a cold DNS + TLS handshake. Replaces the render-blocking @import that used
  // to sit at the top of index.css.
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Inter:wght@400;500;600;700&family=Merriweather:ital,wght@0,400;0,700;1,400&family=Montserrat:ital,wght@1,500&display=swap',
  },
  { rel: 'stylesheet', href: stylesheet },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3B5A85" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function Root() {
  return (
    <>
      {/* Business identity, present in the static HTML of every page. */}
      <SchemaScript schema={localBusinessSchema()} />
      <Outlet />
    </>
  )
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const isNotFound = isRouteErrorResponse(error) && error.status === 404
  const heading = isNotFound ? 'Page not found' : 'Something went wrong'
  const message = isNotFound
    ? "The page you're looking for doesn't exist or may have moved."
    : 'An unexpected error occurred. Please try again, or call us and we’ll help directly.'

  return (
    <main
      id="main-content"
      style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        padding: '4rem 1.5rem',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--apd-heading)' }}>
        {heading}
      </h1>
      <p style={{ fontFamily: 'var(--font-prose)', color: 'var(--apd-text-muted)', maxWidth: '38rem' }}>
        {message}
      </p>
      <a href="/" style={{ color: 'var(--apd-steel-blue)', fontFamily: 'var(--font-ui)', fontWeight: 600 }}>
        Back to the homepage
      </a>
    </main>
  )
}
