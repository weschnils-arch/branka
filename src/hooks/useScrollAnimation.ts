import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimation() {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Fade-up animations
      gsap.utils.toArray<HTMLElement>('[data-animate="fade-up"]').forEach((el) => {
        gsap.fromTo(el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              once: true,
            },
          }
        )
      })

      // Stagger children
      gsap.utils.toArray<HTMLElement>('[data-animate="stagger"]').forEach((el) => {
        const children = el.children
        gsap.fromTo(children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              once: true,
            },
          }
        )
      })

      // Scale-in animations
      gsap.utils.toArray<HTMLElement>('[data-animate="scale-in"]').forEach((el) => {
        gsap.fromTo(el,
          { scale: 0.95, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              once: true,
            },
          }
        )
      })

      // Line draw
      gsap.utils.toArray<HTMLElement>('[data-animate="line-draw"]').forEach((el) => {
        gsap.fromTo(el,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.8,
            ease: 'power2.inOut',
            transformOrigin: 'left center',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              once: true,
            },
          }
        )
      })

      // Count-up numbers
      gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
        const target = el.getAttribute('data-count')
        if (!target) return

        const isNumber = !isNaN(Number(target))
        if (isNumber) {
          const num = Number(target)
          gsap.fromTo(el,
            { textContent: '0' },
            {
              textContent: num,
              duration: 1.5,
              ease: 'power2.out',
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                once: true,
              },
            }
          )
        }
      })

      // Clip reveal
      gsap.utils.toArray<HTMLElement>('[data-animate="clip-reveal"]').forEach((el) => {
        gsap.fromTo(el,
          { clipPath: 'inset(0 100% 0 0)' },
          {
            clipPath: 'inset(0 0% 0 0)',
            duration: 1,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              once: true,
            },
          }
        )
      })
    })

    return () => ctx.revert()
  }, [])
}
