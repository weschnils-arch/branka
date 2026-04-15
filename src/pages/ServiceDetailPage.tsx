import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { servicesData } from '../data/services'

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const service = servicesData.find((s) => s.slug === slug)

  if (!service) return <Navigate to="/services" replace />

  const currentIdx = servicesData.findIndex((s) => s.slug === service.slug)
  const next = servicesData[(currentIdx + 1) % servicesData.length]

  return (
    <article className="pt-[120px] md:pt-[160px] pb-24 md:pb-32 bg-[#FBFAF8]">
      <div className="mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
        <Link to="/services" className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#9A9F7A] hover:text-[#6E6259] uppercase tracking-[0.06em] mb-8">
          <ArrowLeft size={14} /> All Services
        </Link>

        <h1 className="text-[clamp(36px,6vw,72px)] font-bold tracking-[-0.025em] leading-[1.05] text-[#4A4A4A] mb-10">
          {service.title}
        </h1>

        <div className="relative overflow-hidden rounded-2xl mb-12 shadow-[0_16px_40px_rgba(110,98,89,0.1)]">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-[360px] md:h-[520px] object-cover"
            style={{ filter: 'saturate(0.82) contrast(1.06) brightness(0.96) sepia(0.08)' }}
          />
          {service.isPlaceholder && (
            <span className="absolute top-5 right-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2A2622]/75 backdrop-blur-sm text-[11px] font-semibold tracking-[0.12em] uppercase text-[#FBFAF8] border border-[#FBFAF8]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8B94A]" />
              Placeholder
            </span>
          )}
        </div>

        <div className="max-w-[760px]">
          <p className="text-[clamp(16px,1.3vw,19px)] leading-[1.8] text-[#4A4A4A] mb-10">
            {service.text}
          </p>

          {service.bulletLabel && (
            <p className="text-[14px] font-semibold text-[#6E6259] uppercase tracking-[0.06em] mb-4">
              {service.bulletLabel}
            </p>
          )}
          <ul className="space-y-3 mb-10">
            {service.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-[clamp(15px,1.2vw,17px)] leading-[1.6] text-[#4A4A4A]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9A9F7A] mt-[11px] flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>

          <p className="text-[clamp(15px,1.2vw,17px)] leading-[1.8] text-[#7A7470] italic mb-12">
            {service.outro}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to={service.ctaHref} className="btn-primary">
              {service.ctaLabel} <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn-secondary">Contact</Link>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-[#E8E2DA]">
          <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#9E9590] mb-3">Next Service</p>
          <Link to={`/services/${next.slug}`} className="inline-flex items-center gap-3 text-[24px] md:text-[32px] font-bold text-[#4A4A4A] hover:text-[#9A9F7A] tracking-[-0.02em]">
            {next.title} <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </article>
  )
}
