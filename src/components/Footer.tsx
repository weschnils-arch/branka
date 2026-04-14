import logoLight from '../assets/images/logo-bn-light.webp'
import insta1 from '../assets/images/branka-front-pose.webp'
import insta2 from '../assets/images/branka-competition-1.webp'
import insta3 from '../assets/images/branka-olympia-qualifier.webp'
import insta4 from '../assets/images/branka-evolution-pro.webp'
import insta5 from '../assets/images/branka-olympia-purple.webp'
import insta6 from '../assets/images/branka-flex-magazine.webp'

const instaImages = [insta1, insta2, insta3, insta4, insta5, insta6]

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-[#2A2622] pt-20 pb-10 md:pt-24 md:pb-12">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20">
        {/* Top row — logo + nav */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16">
          <a href="#" onClick={(e) => handleNavClick(e, '#')} className="flex-shrink-0">
            <img
              src={logoLight}
              alt="BN Coaching & Health"
              className="h-12 md:h-14 w-auto"
              style={{ filter: 'brightness(0) invert(1) sepia(0.15) saturate(1.5) hue-rotate(340deg) opacity(0.9)' }}
            />
          </a>

          <div className="flex flex-wrap gap-6 md:gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[14px] font-medium text-[#FBFAF8]/60 hover:text-[#FBFAF8] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Instagram feed */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[12px] font-semibold tracking-[0.08em] uppercase text-[#9A9F7A]">
              Follow on Instagram
            </span>
            <div className="flex-1 h-[1px] bg-[#FBFAF8]/8 max-w-[100px]" />
            <a
              href="https://instagram.com/branka_ifbbpro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-medium text-[#FBFAF8]/40 hover:text-[#9A9F7A] transition-colors duration-300"
            >
              @branka_ifbbpro
            </a>
          </div>

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
                  alt={`@branka_ifbbpro competition photo ${i + 1}`}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  style={{ filter: 'saturate(0.85) brightness(0.85) contrast(1.1)' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2622]/60 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-400" />
                <div className="absolute inset-0 bg-[#9A9F7A]/0 group-hover:bg-[#9A9F7A]/25 transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#FBFAF8]/10 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[13px] text-[#FBFAF8]/35">
            &copy; {new Date().getFullYear()} B.P.P. d.o.o. — The Body Progress Principle
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-[13px] text-[#FBFAF8]/35 hover:text-[#FBFAF8]/70 transition-colors duration-200">
              Legal Notice
            </a>
            <a href="#" className="text-[13px] text-[#FBFAF8]/35 hover:text-[#FBFAF8]/70 transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-[13px] text-[#FBFAF8]/15 mt-6 italic">
          BN Coaching & Health — Built on discipline. Driven by progress.
        </p>
      </div>
    </footer>
  )
}
