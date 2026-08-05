import { Outlet } from 'react-router'
import Nav from './Nav'
import Footer from './Footer'

/**
 * Site chrome shared by every public page.
 *
 * `/palette-sample` sits outside this layout on purpose — it is an internal
 * design tool and renders without Nav or Footer.
 *
 * Scroll behaviour is handled by React Router's `<ScrollRestoration />` in
 * `root.tsx`: it resets to the top on new navigations, restores position on
 * back/forward, and honours `#hash` targets.
 */
export default function SiteLayout() {
  return (
    <>
      <Nav />
      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
