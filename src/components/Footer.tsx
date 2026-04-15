import { Link } from 'react-router-dom'
import logoLight from '../assets/images/logo-bn-light.webp'
import insta1 from '../assets/images/branka-front-pose.webp'
import insta2 from '../assets/images/branka-competition-1.webp'
import insta3 from '../assets/images/branka-olympia-qualifier.webp'
import insta4 from '../assets/images/branka-evolution-pro.webp'
import insta5 from '../assets/images/branka-olympia-purple.webp'
import insta6 from '../assets/images/branka-flex-magazine.webp'

const instaImages = [insta1, insta2, insta3, insta4, insta5, insta6]

export function Footer() {
  return (
    <footer className="bg-[#2A2622] pt-20 pb-10 md:pt-24 md:pb-12">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          <Link to="/" className="flex-shrink-0" aria-label="BN Coaching & Health home">
            <img
              src={logoLight}
              alt="BN Coaching & Health"
              className="h-16 md:h-20 w-auto"
              style={{ filter: 'brightness(0) invert(1) sepia(0.15) saturate(1.5) hue-rotate(340deg) opacity(0.9)' }}
            />
          </Link>

          <div className="flex flex-wrap gap-6 md:gap-8">
            <Link to="/" className="text-[14px] font-medium text-[#FBFAF8]/60 hover:text-[#FBFAF8] transition-colors duration-300">Home</Link>
            <Link to="/services" className="text-[14px] font-medium text-[#FBFAF8]/60 hover:text-[#FBFAF8] transition-colors duration-300">Services</Link>
            <Link to="/about" className="text-[14px] font-medium text-[#FBFAF8]/60 hover:text-[#FBFAF8] transition-colors duration-300">About Me</Link>
            <Link to="/pricing" className="text-[14px] font-medium text-[#FBFAF8]/60 hover:text-[#FBFAF8] transition-colors duration-300">Pricing</Link>
            <Link to="/contact" className="text-[14px] font-medium text-[#FBFAF8]/60 hover:text-[#FBFAF8] transition-colors duration-300">Contact</Link>
          </div>
        </div>

        <div className="mb-10">
          <p className="text-[14px] font-medium text-[#FBFAF8]/80 mb-1">
            Contact: <a href="mailto:mail@bncoachinghealth.com" className="text-[#9A9F7A] hover:text-[#D8CFC4]">mail@bncoachinghealth.com</a>
          </p>
          <p className="text-[13px] text-[#FBFAF8]/40 italic">
            BN Coaching & Health — Built on discipline. Driven by progress.
          </p>
        </div>

        {/* Instafeed — placeholder for live Instagram integration */}
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
          <p className="text-[11px] text-[#FBFAF8]/25 uppercase tracking-[0.08em] mb-4">Instafeed — placeholder for Instagram API integration</p>
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
        </div>

        <div className="w-full h-[1px] bg-[#FBFAF8]/10 mb-8" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[13px] text-[#FBFAF8]/35">
            &copy; {new Date().getFullYear()} B.P.P. d.o.o. — The Body Progress Principle
          </p>
          <div className="flex gap-6">
            <Link to="/impressum" className="text-[13px] text-[#FBFAF8]/35 hover:text-[#FBFAF8]/70 transition-colors duration-200">
              Legal Notice
            </Link>
            <Link to="/datenschutz" className="text-[13px] text-[#FBFAF8]/35 hover:text-[#FBFAF8]/70 transition-colors duration-200">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
