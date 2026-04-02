const pricingItems = [
  { service: 'Initial Consultation (Goal & Strategy)', price: 'XXX', unit: '/ hour' },
  { service: 'Coaching Check-In / Progress Review', price: 'XXX', unit: '/ hour' },
  { service: 'Digital One-on-One Training (online)', price: 'XXX', unit: '/ hour' },
  { service: 'Digital Group Training (online)', price: 'XXX', unit: '/ hour' },
  { service: 'Personal Training Session (in person, if available)', price: 'XXX', unit: '/ hour', featured: true },
  { service: 'Competition Prep Consultation (athlete-focused)', price: 'XXX', unit: '/ hour' },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 lg:py-40 bg-[#F5F0EB] grain-overlay">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20">
        <div className="mb-16">
          <p data-animate="fade-up" className="section-label">
            Pricing
          </p>
          <h2
            data-animate="fade-up"
            className="text-[clamp(32px,5vw,56px)] font-bold tracking-[-0.025em] leading-[1.1] text-[#4A4A4A] mb-4"
          >
            Invest in Progress That Lasts
          </h2>
          <p data-animate="fade-up" className="text-[clamp(16px,1.3vw,18px)] leading-[1.7] text-[#7A7470] max-w-[520px]">
            All services are tailored to the client's goals, level, and requirements. Transparent structures ensure clarity, while customized solutions guarantee value.
          </p>
        </div>

        <div data-animate="stagger" className="max-w-[720px]">
          {/* Table header */}
          <div className="flex items-center justify-between py-4 border-b-2 border-[#D8CFC4] mb-2">
            <span className="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#9A9F7A]">Service</span>
            <span className="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#9A9F7A]">Price</span>
          </div>

          {/* Table rows with expanding fill from center */}
          {pricingItems.map((item, i) => (
            <div
              key={i}
              className="expand-fill flex items-center justify-between py-5 px-4 -mx-4 rounded-lg border-b border-[#E8E2DA]/50"
            >
              <span className="expand-fill-text text-[clamp(15px,1.2vw,17px)] text-[#4A4A4A] font-medium pr-4">
                {item.service}
              </span>
              <span className="expand-fill-text text-[clamp(16px,1.3vw,18px)] font-semibold text-[#6E6259] whitespace-nowrap flex items-baseline gap-1">
                {item.price}
                <span className="expand-fill-muted text-[13px] font-normal text-[#9E9590]"> &euro; {item.unit}</span>
              </span>
            </div>
          ))}

          <div className="mt-8 pt-6 border-t border-[#D8CFC4]">
            <p data-animate="fade-up" className="text-[14px] text-[#9E9590] mb-6">
              Detailed pricing information is available upon request or during an initial consultation.
            </p>
            <a
              href="#booking"
              onClick={(e) => { e.preventDefault(); document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' }) }}
              data-animate="fade-up"
              className="btn-primary"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
