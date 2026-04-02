import logoWebp from '../assets/images/logo-bn.webp'
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
    <footer className="bg-[#4A4A4A] py-16 md:py-20">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <a href="#" onClick={(e) => handleNavClick(e, '#')} className="flex-shrink-0">
            <img
              src={logoWebp}
              alt="BN Coaching & Health"
              className="h-10 w-auto brightness-[2] contrast-[0.8] opacity-80"
            />
          </a>

          <div className="flex flex-wrap gap-6 md:gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[14px] font-medium text-[#D8CFC4] hover:text-[#FBFAF8] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Instagram feed with real photos */}
        <div className="mb-12">
          <p className="text-[12px] font-medium tracking-[0.06em] uppercase text-[#8A7D74] mb-4">
            Follow on Instagram
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
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
                  style={{ filter: 'saturate(0.7) brightness(0.7)' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#6E6259]/40 group-hover:bg-[#9A9F7A]/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="text-[11px] text-white font-semibold tracking-[0.04em]">@branka_ifbbpro</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#5A5048] mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[13px] text-[#8A7D74]">
            &copy; {new Date().getFullYear()} B.P.P. d.o.o. — The Body Progress Principle
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-[13px] text-[#8A7D74] hover:text-[#D8CFC4] transition-colors duration-200">
              Legal Notice
            </a>
            <a href="#" className="text-[13px] text-[#8A7D74] hover:text-[#D8CFC4] transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-[13px] text-[#5A5048] mt-6 italic">
          BN Coaching & Health — Built on discipline. Driven by progress.
        </p>
      </div>
    </footer>
  )
}
