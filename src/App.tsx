import { useEffect } from 'react'
import Lenis from 'lenis'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { Introduction } from './components/Introduction'
import { Services } from './components/Services'
import { AboutBranka } from './components/AboutBranka'
import { Achievements } from './components/Achievements'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { Booking } from './components/Booking'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useCustomCursor } from './hooks/useCustomCursor'
import { useScrollAnimation } from './hooks/useScrollAnimation'

function App() {
  useCustomCursor()
  useScrollAnimation()

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[#9A9F7A] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to content
      </a>
      <Navigation />
      <main>
        <Hero />
        <Introduction />
        <Services />
        <AboutBranka />
        <Achievements />
        <Testimonials />
        <Pricing />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
