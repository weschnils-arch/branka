import type { ComponentProps, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { Mail } from 'lucide-react'

function Instagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}
import logoLight from '../../assets/images/logo-bn-light.webp'
import insta1 from '../../assets/images/branka-front-pose.webp'
import insta2 from '../../assets/images/branka-competition-1.webp'
import insta3 from '../../assets/images/branka-olympia-qualifier.webp'
import insta4 from '../../assets/images/branka-evolution-pro.webp'
import insta5 from '../../assets/images/branka-olympia-purple.webp'
import insta6 from '../../assets/images/branka-flex-magazine.webp'

const instaImages = [insta1, insta2, insta3, insta4, insta5, insta6]

type LinkItem = { title: string; to?: string; href?: string; icon?: React.ComponentType<{ className?: string }> }
type Section = { label: string; links: LinkItem[] }

const sections: Section[] = [
  {
    label: 'Explore',
    links: [
      { title: 'Home', to: '/' },
      { title: 'Services', to: '/services' },
      { title: 'About Me', to: '/about' },
      { title: 'Pricing', to: '/pricing' },
      { title: 'Contact', to: '/contact' },
    ],
  },
  {
    label: 'Services',
    links: [
      { title: 'Training Services', to: '/services/training' },
      { title: 'Coaching', to: '/services/coaching' },
      { title: 'Personal Training', to: '/services/personal-training' },
      { title: 'Online Training', to: '/services/online-training' },
      { title: 'Corporate Health & Safety', to: '/services/corporate-health' },
    ],
  },
  {
    label: 'Legal',
    links: [
      { title: 'Legal Notice', to: '/impressum' },
      { title: 'Cookie Policy', to: '/datenschutz' },
    ],
  },
  {
    label: 'Connect',
    links: [
      { title: 'mail@bncoachinghealth.com', href: 'mailto:mail@bncoachinghealth.com', icon: Mail },
      { title: '@branka_ifbbpro', href: 'https://instagram.com/branka_ifbbpro', icon: Instagram },
    ],
  },
]

export function Footer() {
  return (
    <footer
      className="relative w-full overflow-hidden text-[#FBFAF8]
        rounded-t-[32px] md:rounded-t-[56px]
        border-t border-[#FBFAF8]/10
        bg-gradient-to-b from-[#2A2622] to-[#1F1C19]
        shadow-[inset_0_1px_0_rgba(251,250,248,0.08)]"
    >
      {/* Top hairline accent */}
      <div className="pointer-events-none absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9A9F7A]/50 blur-[1px]" />
      {/* Soft top radial glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[180px] bg-[radial-gradient(50%_180px_at_50%_0%,rgba(232,220,200,0.12),transparent)]" />
      {/* Inner top highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#FBFAF8]/[0.05] to-transparent" />
      {/* Grain for organic feel */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: '128px' }}
      />
      <div className="relative mx-auto max-w-[1280px] px-6 py-14 md:px-10 lg:px-20 lg:py-20">

        {/* Top grid: identity + link sections */}
        <div className="grid w-full gap-10 xl:grid-cols-3 xl:gap-8">
          <AnimatedContainer className="space-y-5">
            <Link to="/" className="inline-block" aria-label="BN Coaching & Health home">
              <img
                src={logoLight}
                alt="BN Coaching & Health"
                className="h-14 md:h-16 w-auto"
                style={{ filter: 'brightness(0) invert(1) sepia(0.15) saturate(1.5) hue-rotate(340deg) opacity(0.9)' }}
              />
            </Link>
            <p className="text-[14px] leading-[1.7] text-[#FBFAF8]/60 max-w-[320px] italic">
              BN Coaching & Health — Built on discipline. Driven by progress.
            </p>
            <p className="text-[13px] text-[#FBFAF8]/35">
              © {new Date().getFullYear()} B.P.P. d.o.o. — The Body Progress Principle
            </p>
          </AnimatedContainer>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2">
            {sections.map((section, i) => (
              <AnimatedContainer key={section.label} delay={0.1 + i * 0.1}>
                <div>
                  <h3 className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#9A9F7A] mb-4">
                    {section.label}
                  </h3>
                  <ul className="space-y-2.5 text-[14px] text-[#FBFAF8]/60">
                    {section.links.map((link) => {
                      const cls = 'inline-flex items-center gap-1.5 hover:text-[#FBFAF8] transition-colors duration-300'
                      const content = (
                        <>
                          {link.icon && <link.icon className="size-4" />}
                          {link.title}
                        </>
                      )
                      return (
                        <li key={link.title}>
                          {link.to ? (
                            <Link to={link.to} className={cls}>{content}</Link>
                          ) : (
                            <a href={link.href} target={link.href?.startsWith('http') ? '_blank' : undefined} rel={link.href?.startsWith('http') ? 'noopener noreferrer' : undefined} className={cls}>
                              {content}
                            </a>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>

        {/* Instafeed */}
        <AnimatedContainer delay={0.5} className="mt-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#9A9F7A]">
              Follow on Instagram
            </span>
            <div className="flex-1 h-[1px] bg-[#FBFAF8]/10 max-w-[120px]" />
            <a
              href="https://instagram.com/branka_ifbbpro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-medium text-[#FBFAF8]/40 hover:text-[#9A9F7A] transition-colors"
            >
              @branka_ifbbpro
            </a>
          </div>
          <p className="text-[10px] text-[#FBFAF8]/25 uppercase tracking-[0.12em] mb-4">
            Instafeed — placeholder for Instagram API integration
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2.5">
            {instaImages.map((src, i) => (
              <a
                key={i}
                href="https://instagram.com/branka_ifbbpro"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square rounded-lg overflow-hidden group relative"
              >
                <img
                  src={src}
                  alt={`@branka_ifbbpro placeholder ${i + 1}`}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  style={{ filter: 'saturate(0.85) brightness(0.85) contrast(1.1)' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2622]/60 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-400" />
                <div className="absolute inset-0 bg-[#9A9F7A]/0 group-hover:bg-[#9A9F7A]/25 transition-colors duration-300" />
              </a>
            ))}
          </div>
        </AnimatedContainer>
      </div>
    </footer>
  )
}

type ViewAnimationProps = {
  delay?: number
  className?: ComponentProps<typeof motion.div>['className']
  children: ReactNode
}

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion()
  if (shouldReduceMotion) return <div className={className}>{children}</div>

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay, duration: 0.8, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
