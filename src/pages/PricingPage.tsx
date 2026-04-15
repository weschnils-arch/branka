import { Link } from 'react-router-dom'

const pricingItems = [
  { service: 'Initial Consultation (Goal & Strategy)', price: 'XXX', unit: '/ per hour' },
  { service: 'Coaching Check-In / Progress Review', price: 'XXX', unit: '/ per hour' },
  { service: 'Digital One-on-One Training (online)', price: 'XXX', unit: '/ per hour' },
  { service: 'Digital Group Training (online)', price: 'XXX', unit: '/ per hour' },
  { service: 'Personal Training Session (in person, if available)', price: 'XXX', unit: '/ per hour' },
  { service: 'Competition Prep Consultation (athlete-focused)', price: 'XXX', unit: '/ per hour' },
]

export function PricingPage() {
  return (
    <section className="pt-[120px] md:pt-[160px] pb-24 md:pb-32 lg:pb-40 bg-[#F5F0EB] grain-overlay">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20">
        <div className="mb-16 max-w-[720px]">
          <p className="section-label">Pricing</p>
          <h1 className="text-[clamp(36px,6vw,72px)] font-bold tracking-[-0.025em] leading-[1.05] text-[#4A4A4A] mb-6">
            Invest in progress that lasts.
          </h1>
          <p className="text-[clamp(16px,1.3vw,18px)] leading-[1.75] text-[#7A7470]">
            At BN Coaching & Health, pricing reflects quality, experience, and individualized attention. All services are tailored to the client's goals, level, and requirements. Transparent structures ensure clarity, while customized solutions guarantee value. Detailed pricing information is available upon request or during an initial consultation.
          </p>
        </div>

        <div className="max-w-[820px]">
          <div className="flex items-center justify-between py-4 border-b-2 border-[#D8CFC4] mb-2">
            <span className="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#9A9F7A]">Service</span>
            <span className="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#9A9F7A]">Price</span>
          </div>

          {pricingItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-6 py-5 px-4 -mx-4 rounded-lg border-b border-[#E8E2DA]/60 hover:bg-white/60 transition-colors"
            >
              <span className="text-[clamp(15px,1.2vw,17px)] text-[#4A4A4A] font-medium">
                {item.service}
              </span>
              <span className="text-[clamp(16px,1.3vw,18px)] font-semibold text-[#6E6259] whitespace-nowrap flex items-baseline gap-1">
                {item.price}
                <span className="text-[13px] font-normal text-[#9E9590]"> € {item.unit}</span>
              </span>
            </div>
          ))}

          <div className="mt-12 pt-8 border-t border-[#D8CFC4]">
            <p className="text-[14px] text-[#9E9590] mb-6">
              Detailed pricing information is available upon request or during an initial consultation.
            </p>
            <Link to="/contact" className="btn-primary">
              Request Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
