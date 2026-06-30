import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import PaletteSamplePage from './pages/PaletteSamplePage'

function Layout() {
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

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
    ],
  },
  {
    path: '/palette-sample',
    element: <PaletteSamplePage />,
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
