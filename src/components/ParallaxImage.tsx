import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ParallaxImageProps {
  src: string
  alt: string
  height?: string
  speed?: number
  overlay?: boolean
  overlayColor?: string
  children?: React.ReactNode
}

export function ParallaxImage({
  src,
  alt,
  height = '60vh',
  speed = 0.3,
  overlay = true,
  overlayColor = 'rgba(42,38,34,0.3)',
  children,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !imageRef.current || !containerRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(imageRef.current,
        { y: -50 * speed },
        {
          y: 50 * speed,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    })

    return () => ctx.revert()
  }, [speed])

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden grain-overlay"
      style={{ height }}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="absolute inset-[-15%] w-[130%] h-[130%] object-cover will-change-transform"
        style={{ filter: 'saturate(0.85) contrast(1.05)' }}
        loading="lazy"
      />
      {overlay && (
        <div className="absolute inset-0" style={{ backgroundColor: overlayColor }} />
      )}
      {children && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          {children}
        </div>
      )}
    </div>
  )
}
