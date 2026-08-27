import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Doctors from './pages/Doctors'
import Gallery from './pages/Gallery'
import Appointment from './pages/Appointment'
import Contact from './pages/Contact'
import Feedback from './pages/Feedback'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function LoadingScreen() {
  return (
    <div className="site-loader" role="status" aria-label="Loading Ratna Hospital">
      <div className="site-loader__mark" aria-hidden="true">
        <span className="site-loader__arc site-loader__arc--top" />
        <span className="site-loader__arc site-loader__arc--bottom" />
        <svg className="site-loader__pulse" viewBox="0 0 68 32" fill="none">
          <path
            d="M2 16H14L18 16L22 7L28 25L34 16H66"
            pathLength="1"
          />
        </svg>
      </div>
    </div>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1200)
    return () => window.clearTimeout(timer)
  }, [])

  if (loading) return <LoadingScreen />

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
