import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { servicesData } from '../data/services'

export function ServicesIndexPage() {
  return (
    <section className="pt-[120px] md:pt-[160px] pb-24 md:pb-32 lg:pb-40 bg-[#FBFAF8] grain-overlay">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20">
        <div className="mb-16 max-w-[720px]">
          <p className="section-label">Services</p>
          <h1 className="text-[clamp(36px,6vw,72px)] font-bold tracking-[-0.025em] leading-[1.05] text-[#4A4A4A] mb-6">
            What We Offer
          </h1>
          <p className="text-[clamp(16px,1.3vw,18px)] leading-[1.7] text-[#7A7470]">
            Every service is structured, individualized, and focused on results that last. Choose the path that matches your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {servicesData.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group relative rounded-2xl overflow-hidden bg-white border border-[#E8E2DA]/60 shadow-[0_2px_8px_rgba(110,98,89,0.04)] hover:shadow-[0_16px_40px_rgba(110,98,89,0.12)] transition-all duration-500"
            >
              <div className="aspect-[16/10] relative overflow-hidden bg-[#F5F0EB]">
                {s.image ? (
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{ filter: 'saturate(0.82) contrast(1.06) brightness(0.96) sepia(0.08)' }}
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#E8E2DA] via-[#D8CFC4] to-[#9A9F7A]/40 flex items-center justify-center">
                    <span className="text-[13px] tracking-[0.12em] uppercase text-[#6E6259]/70">{s.title}</span>
                  </div>
                )}
              </div>
              <div className="p-7 md:p-8">
                <h3 className="text-[20px] font-semibold text-[#4A4A4A] mb-3 tracking-[-0.01em]">{s.title}</h3>
                <p className="text-[14px] leading-[1.7] text-[#7A7470] line-clamp-3 mb-5">{s.text}</p>
                <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#6E6259] group-hover:text-[#9A9F7A] uppercase tracking-[0.06em] transition-colors">
                  Read More <ArrowRight size={13} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
