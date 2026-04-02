import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import achievementsBg from '../assets/images/branka-arnold-classic.webp'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: 20, suffix: '+', label: 'Years of Experience' },
  { value: 5, suffix: 'th', label: 'Place at Olympia' },
  { value: 4, suffix: 'x', label: 'European Champion' },
  { value: null, display: 'PRO', label: 'IFBB Pro Athlete' },
]

const titles = [
  'Arnold Classic Amateur Overall Winner',
  'Multiple-time Croatian National Champion',
  'Mr. Big Evolution Pro 1st Place',
  'Ms. Olympia Competitor',
]

export function Achievements() {
  const sectionRef = useRef<HTMLElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || hasAnimated.current) return

    const ctx = gsap.context(() => {
      // Animate stat numbers
      document.querySelectorAll('[data-stat-value]').forEach((el) => {
        const target = Number(el.getAttribute('data-stat-value'))
        if (isNaN(target)) return

        const obj = { val: 0 }
        gsap.fromTo(obj,
          { val: 0 },
          {
            val: target,
            duration: 1.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              once: true,
            },
            onUpdate: () => {
              el.textContent = Math.round(obj.val).toString()
            },
            onComplete: () => {
              hasAnimated.current = true
            },
          }
        )
      })

      // Fade in the entire section
      gsap.fromTo(sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      )

      // Stagger stat items
      gsap.fromTo('[data-stat-item]',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      )

      // Titles line draw and fade
      gsap.fromTo('[data-achievement-divider]',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.8,
          ease: 'power2.inOut',
          transformOrigin: 'left center',
          scrollTrigger: {
            trigger: '[data-achievement-divider]',
            start: 'top 85%',
            once: true,
          },
        }
      )

      gsap.fromTo('[data-achievement-titles]',
        { y: 15, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '[data-achievement-titles]',
            start: 'top 90%',
            once: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 lg:py-40 relative overflow-hidden"
    >
      {/* Background image with brown overlay */}
      <div className="absolute inset-0">
        <img
          src={achievementsBg}
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: 'saturate(0.6) contrast(1.1)' }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#6E6259]/85" />
        <div className="absolute inset-0 grain-overlay" />
      </div>

      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20 relative z-10">
        <p data-animate="fade-up" className="section-label !text-[#D8CFC4] mb-12 justify-center after:!bg-[#8A7D74]">
          Achievements
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          {stats.map((stat, i) => (
            <div key={i} data-stat-item className="text-center">
              <div className="text-[clamp(48px,8vw,88px)] font-extrabold text-[#FBFAF8] leading-none tracking-[-0.03em] mb-3">
                {stat.value !== null ? (
                  <>
                    <span data-stat-value={stat.value}>0</span>
                    <span className="text-[0.5em] text-[#D8CFC4] font-bold">{stat.suffix}</span>
                  </>
                ) : (
                  <span className="text-[#FBFAF8]">{stat.display}</span>
                )}
              </div>
              <p className="text-[13px] md:text-[14px] font-medium tracking-[0.04em] uppercase text-[#D8CFC4]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div data-achievement-divider className="w-full h-[1px] bg-[#8A7D74] mb-8" />

        <p data-achievement-titles className="text-center text-[clamp(13px,1.1vw,15px)] text-[#D8CFC4] font-medium tracking-[0.02em] leading-[2]">
          {titles.map((title, i) => (
            <span key={i}>
              {title}
              {i < titles.length - 1 && <span className="mx-3 text-[#8A7D74]">&middot;</span>}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
