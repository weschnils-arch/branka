import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'
import logoWebp from '../assets/images/logo-bn.webp'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Branka', href: '#branka' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-[#FBFAF8]/95 backdrop-blur-sm shadow-[0_1px_0_rgba(216,207,196,0.5)]'
            : 'bg-transparent'
        )}
      >
        <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20 flex items-center justify-between h-[60px] md:h-[72px]">
          <a href="#" className="flex-shrink-0" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            <img
              src={logoWebp}
              alt="BN Coaching & Health"
              className={clsx('h-14 md:h-16 w-auto transition-all duration-300', !scrolled && 'brightness-[2] contrast-[0.8]')}
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={clsx(
                  'text-[15px] font-medium tracking-[0.02em] transition-colors duration-300 relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:transition-all after:duration-300 hover:after:w-full',
                  scrolled
                    ? 'text-[#4A4A4A] hover:text-[#6E6259] after:bg-[#6E6259]'
                    : 'text-[#D8CFC4] hover:text-[#FBFAF8] after:bg-[#FBFAF8]'
                )}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={(e) => handleNavClick(e, '#booking')}
              className={clsx('!py-3 !px-6 !text-[13px]', scrolled ? 'btn-primary' : 'btn-primary !bg-[#FBFAF8]/15 !border !border-[#FBFAF8]/30 hover:!bg-[#FBFAF8]/25')}
            >
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={clsx('md:hidden w-11 h-11 flex items-center justify-center transition-colors duration-300', scrolled ? 'text-[#4A4A4A]' : 'text-[#D8CFC4]')}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={clsx(
          'fixed inset-0 z-40 bg-[#FBFAF8] transition-all duration-500 md:hidden flex flex-col items-center justify-center gap-8',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="text-[28px] font-semibold text-[#4A4A4A] tracking-[-0.02em] transition-transform duration-300"
            style={{ transitionDelay: mobileOpen ? `${i * 60}ms` : '0ms', transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)' }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#booking"
          onClick={(e) => handleNavClick(e, '#booking')}
          className="btn-primary mt-4"
        >
          Book Now
        </a>
      </div>
    </>
  )
}
