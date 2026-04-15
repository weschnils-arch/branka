import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import clsx from 'clsx'
import logoWebp from '../assets/images/logo-bn.webp'
import { servicesData } from '../data/services'

const aboutAnchors = [
  { label: 'Who Am I', hash: 'who' },
  { label: 'Expertise', hash: 'expertise' },
  { label: 'Selected Competitive Achievements', hash: 'achievements' },
  { label: 'Corporate Health Experience', hash: 'corporate' },
  { label: 'Testimonials', hash: 'testimonials' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDesktop, setOpenDesktop] = useState<'services' | 'about' | null>(null)
  const [openMobile, setOpenMobile] = useState<'services' | 'about' | null>(null)
  const location = useLocation()
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDesktop(null)
    setOpenMobile(null)
  }, [location.pathname, location.hash])

  const forceDark = scrolled || location.pathname !== '/' || mobileOpen

  const openDd = (name: 'services' | 'about') => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenDesktop(name)
  }
  const closeDd = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpenDesktop(null), 120)
  }

  const linkBase = 'text-[15px] font-medium tracking-[0.02em] transition-colors duration-300 relative'
  const linkColor = forceDark
    ? 'text-[#4A4A4A] hover:text-[#6E6259]'
    : 'text-[#D8CFC4] hover:text-[#FBFAF8]'

  return (
    <>
      <nav
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          forceDark
            ? 'bg-[#FBFAF8]/95 backdrop-blur-sm shadow-[0_1px_0_rgba(216,207,196,0.5)]'
            : 'bg-transparent'
        )}
      >
        <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20 flex items-center justify-between h-[60px] md:h-[72px]">
          <Link to="/" className="flex-shrink-0" aria-label="BN Coaching & Health home">
            <img
              src={logoWebp}
              alt="BN Coaching & Health"
              className={clsx('h-14 md:h-16 w-auto transition-all duration-300', !forceDark && 'brightness-[2] contrast-[0.8]')}
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            <NavLink to="/" end className={({ isActive }) => clsx(linkBase, linkColor, isActive && 'after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[1px] after:bg-current')}>
              Home
            </NavLink>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => openDd('services')}
              onMouseLeave={closeDd}
            >
              <button
                className={clsx(linkBase, linkColor, 'inline-flex items-center gap-1')}
                onClick={() => setOpenDesktop(openDesktop === 'services' ? null : 'services')}
                aria-expanded={openDesktop === 'services'}
              >
                Services <ChevronDown size={14} className={clsx('transition-transform', openDesktop === 'services' && 'rotate-180')} />
              </button>
              {openDesktop === 'services' && (
                <div
                  className="absolute left-0 top-full pt-4 w-[280px]"
                  onMouseEnter={() => openDd('services')}
                  onMouseLeave={closeDd}
                >
                  <div className="bg-white rounded-xl shadow-[0_12px_40px_rgba(42,38,34,0.12)] border border-[#E8E2DA] py-2 overflow-hidden">
                    {servicesData.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        className="block px-5 py-2.5 text-[14px] text-[#4A4A4A] hover:bg-[#F5F0EB] hover:text-[#6E6259] transition-colors"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* About dropdown */}
            <div
              className="relative"
              onMouseEnter={() => openDd('about')}
              onMouseLeave={closeDd}
            >
              <button
                className={clsx(linkBase, linkColor, 'inline-flex items-center gap-1')}
                onClick={() => setOpenDesktop(openDesktop === 'about' ? null : 'about')}
                aria-expanded={openDesktop === 'about'}
              >
                About Me <ChevronDown size={14} className={clsx('transition-transform', openDesktop === 'about' && 'rotate-180')} />
              </button>
              {openDesktop === 'about' && (
                <div
                  className="absolute left-0 top-full pt-4 w-[300px]"
                  onMouseEnter={() => openDd('about')}
                  onMouseLeave={closeDd}
                >
                  <div className="bg-white rounded-xl shadow-[0_12px_40px_rgba(42,38,34,0.12)] border border-[#E8E2DA] py-2 overflow-hidden">
                    {aboutAnchors.map((a) => (
                      <Link
                        key={a.hash}
                        to={`/about#${a.hash}`}
                        className="block px-5 py-2.5 text-[14px] text-[#4A4A4A] hover:bg-[#F5F0EB] hover:text-[#6E6259] transition-colors"
                      >
                        {a.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/pricing" className={({ isActive }) => clsx(linkBase, linkColor, isActive && 'after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[1px] after:bg-current')}>
              Pricing
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => clsx(linkBase, linkColor, isActive && 'after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[1px] after:bg-current')}>
              Contact
            </NavLink>

            <Link
              to="/contact#book"
              className={clsx('!py-3 !px-6 !text-[13px]', forceDark ? 'btn-primary' : 'btn-primary !bg-[#FBFAF8]/15 !border !border-[#FBFAF8]/30 hover:!bg-[#FBFAF8]/25 !text-[#FBFAF8]')}
            >
              Book Your Session
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={clsx('md:hidden w-11 h-11 flex items-center justify-center transition-colors duration-300', forceDark ? 'text-[#4A4A4A]' : 'text-[#D8CFC4]')}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay — solid bg */}
      <div
        className={clsx(
          'fixed inset-0 z-40 bg-[#FBFAF8] transition-opacity duration-300 md:hidden overflow-y-auto',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="pt-24 px-6 pb-20 flex flex-col gap-2">
          <Link to="/" className="py-4 text-[22px] font-semibold text-[#4A4A4A] border-b border-[#E8E2DA]">Home</Link>

          <div className="border-b border-[#E8E2DA]">
            <button
              onClick={() => setOpenMobile(openMobile === 'services' ? null : 'services')}
              className="w-full py-4 flex items-center justify-between text-[22px] font-semibold text-[#4A4A4A]"
            >
              Services <ChevronDown size={20} className={clsx('transition-transform', openMobile === 'services' && 'rotate-180')} />
            </button>
            {openMobile === 'services' && (
              <div className="pb-3 pl-4 flex flex-col">
                {servicesData.map((s) => (
                  <Link key={s.slug} to={`/services/${s.slug}`} className="py-2 text-[16px] text-[#7A7470]">
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="border-b border-[#E8E2DA]">
            <button
              onClick={() => setOpenMobile(openMobile === 'about' ? null : 'about')}
              className="w-full py-4 flex items-center justify-between text-[22px] font-semibold text-[#4A4A4A]"
            >
              About Me <ChevronDown size={20} className={clsx('transition-transform', openMobile === 'about' && 'rotate-180')} />
            </button>
            {openMobile === 'about' && (
              <div className="pb-3 pl-4 flex flex-col">
                {aboutAnchors.map((a) => (
                  <Link key={a.hash} to={`/about#${a.hash}`} className="py-2 text-[16px] text-[#7A7470]">
                    {a.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/pricing" className="py-4 text-[22px] font-semibold text-[#4A4A4A] border-b border-[#E8E2DA]">Pricing</Link>
          <Link to="/contact" className="py-4 text-[22px] font-semibold text-[#4A4A4A] border-b border-[#E8E2DA]">Contact</Link>

          <Link to="/contact#book" className="btn-primary mt-6 justify-center">
            Book Your Session
          </Link>
        </div>
      </div>
    </>
  )
}
