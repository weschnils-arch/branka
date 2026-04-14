import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowDown } from 'lucide-react'
import heroImage from '../assets/images/hero-branka-pose.webp'

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Entrance timeline
      const tl = gsap.timeline({ delay: 0.1 })

      // Image zooms out from 1.15 → 1
      tl.fromTo('[data-hero="image"]',
        { scale: 1.2 },
        { scale: 1, duration: 2.2, ease: 'power2.out' },
        0
      )
      // Vignette fades in
      .fromTo('[data-hero="vignette"]',
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: 'power2.out' },
        0.2
      )
      // Title slams in from below with weight
      .fromTo('[data-hero="title-1"]',
        { y: 120, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
        0.5
      )
      .fromTo('[data-hero="title-2"]',
        { y: 120, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
        0.65
      )
      // Subtext + CTAs
      .fromTo('[data-hero="sub"]',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
        1.0
      )
      .fromTo('[data-hero="cta"]',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
        1.1
      )
      // Trust bar slides in
      .fromTo('[data-hero="trust-bar"]',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
        1.2
      )
      // Scroll indicator
      .fromTo('[data-hero="scroll"]',
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: 'power2.out' },
        1.4
      )

      // Scroll parallax — image moves slower
      gsap.fromTo('[data-hero="image"]',
        { y: 0 },
        {
          y: -80,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        }
      )

      // Text moves faster on scroll (opposite direction feel)
      gsap.fromTo('[data-hero="content"]',
        { y: 0 },
        {
          y: 60,
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '60% top',
            scrub: true,
          },
        }
      )

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[700px] overflow-hidden bg-[#2A2622]"
    >
      {/* Full-bleed background image with parallax */}
      <div data-hero="image" className="absolute inset-[-40px] will-change-transform">
        <img
          src={heroImage}
          alt="Branka Njegovec performing a dramatic wide pose at a professional bodybuilding competition"
          className="w-full h-full object-cover object-[center_60%]"
          style={{ filter: 'saturate(0.9) contrast(1.1) brightness(0.85)' }}
        />
      </div>

      {/* Vignette overlay — edges only, not a wash */}
      <div data-hero="vignette" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(42,38,34,0.5) 100%)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-[35%]" style={{ background: 'linear-gradient(to top, rgba(42,38,34,0.7) 0%, transparent 100%)' }} />
        <div className="absolute top-0 left-0 right-0 h-[60%] md:h-[15%]" style={{ background: 'linear-gradient(to bottom, rgba(42,38,34,0.85) 0%, rgba(42,38,34,0.4) 40%, transparent 100%)' }} />
      </div>

      {/* Grain texture */}
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      {/* Main content — centered, magazine cover style */}
      <div data-hero="content" className="relative z-10 h-full flex flex-col justify-start pt-20 md:justify-end md:pt-0 pb-16 md:pb-20 will-change-transform">
        <div className="mx-auto max-w-[1280px] w-full px-5 md:px-10 lg:px-20">

          {/* Giant title — magazine cover style */}
          <div className="mb-5">
            <div className="overflow-hidden">
              <p
                data-hero="title-1"
                className="text-[clamp(42px,10vw,150px)] font-black leading-[0.85] tracking-[-0.05em] text-[#FBFAF8] mix-blend-normal"
                style={{ textShadow: '0 4px 40px rgba(0,0,0,0.3)' }}
              >
                BUILT BY
              </p>
            </div>
            <div className="overflow-hidden">
              <p
                data-hero="title-2"
                className="text-[clamp(42px,10vw,150px)] font-black leading-[0.85] tracking-[-0.05em] text-[#9A9F7A]"
                style={{ textShadow: '0 4px 40px rgba(0,0,0,0.3)' }}
              >
                CONSISTENCY
              </p>
            </div>
          </div>

          {/* Subline + CTAs */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p data-hero="sub" className="text-[clamp(14px,1.2vw,17px)] leading-[1.6] text-[#D8CFC4] max-w-[420px] mb-4">
                Professional coaching for lasting physical development, long-term health, and mental resilience. Founded by IFBB Pro athlete Branka Njegovec.
              </p>

              <div className="flex flex-wrap gap-3">
                <a href="#booking" data-hero="cta" className="btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' }) }}>
                  Book a Session
                </a>
                <a href="#services" data-hero="cta" className="btn-secondary !border-[#FBFAF8]/30 !text-[#FBFAF8] hover:!bg-[#FBFAF8]/10" onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }) }}>
                  Explore Services
                </a>
              </div>
            </div>

            {/* Trust bar — right aligned on desktop, hidden on mobile (shown below) */}
            <div data-hero="trust-bar" className="hidden md:flex items-center gap-6">
              {[
                { val: 'IFBB', label: 'Pro' },
                { val: '5th', label: 'Olympia' },
                { val: '4x', label: 'EU Champ' },
                { val: '20+', label: 'Years' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <p className="text-[clamp(18px,2vw,26px)] font-extrabold text-[#FBFAF8] leading-none">{item.val}</p>
                  <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#9A9F7A] mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trust bar — pinned to bottom on mobile */}
      <div data-hero="trust-bar" className="md:hidden absolute bottom-14 left-0 right-0 z-20">
        <div className="mx-auto max-w-[1280px] px-5 flex items-center justify-center gap-6">
          {[
            { val: 'IFBB', label: 'Pro' },
            { val: '5th', label: 'Olympia' },
            { val: '4x', label: 'EU Champ' },
            { val: '20+', label: 'Years' },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <p className="text-[20px] font-extrabold text-[#FBFAF8] leading-none">{item.val}</p>
              <p className="text-[9px] font-semibold tracking-[0.1em] uppercase text-[#9A9F7A] mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        data-hero="scroll"
        onClick={scrollToAbout}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-[#D8CFC4]/60 hover:text-[#FBFAF8] transition-colors"
        aria-label="Scroll to content"
      >
        <span className="text-[10px] tracking-[0.12em] uppercase font-medium">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </button>
    </section>
  )
}
