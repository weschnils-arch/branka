import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import bookImg from '../assets/images/stock/book-session.webp'

const whatYouCanBook = [
  'Initial Consultation (Goal & Strategy Call)',
  'Coaching Check-In / Progress Review',
  'Digital Group Training (online)',
  'Digital One-on-One Training (online)',
  'Personal Training Session (in-person, if available)',
  'Competition Prep Consultation (athlete-focused)',
]

export function BookSessionTeaser() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-[#F5F0EB] grain-overlay">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1" data-animate="fade-up">
            <p className="section-label">Book Your Session</p>
            <h2 className="text-[clamp(32px,5vw,56px)] font-bold tracking-[-0.025em] leading-[1.1] text-[#4A4A4A] mb-6">
              Ready to start with structure — not guesswork?
            </h2>
            <p className="text-[clamp(16px,1.3vw,18px)] leading-[1.7] text-[#7A7470] mb-8 max-w-[560px]">
              Schedule a call or session with Branka Njegovec and take the next step with clarity. In this first appointment we align your goal, current level, timeline, and the most effective path forward — whether you're building long-term strength, improving health, or preparing for competition.
            </p>

            <p className="text-[14px] font-semibold text-[#4A4A4A] uppercase tracking-[0.06em] mb-4">
              What you can book
            </p>
            <ul className="space-y-2 mb-8">
              {whatYouCanBook.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] leading-[1.6] text-[#4A4A4A]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9A9F7A] mt-[10px] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-[15px] leading-[1.7] text-[#7A7470] mb-8 max-w-[560px]">
              Choose a time that fits your schedule and secure your slot instantly.
            </p>

            <Link to="/contact#book" className="btn-primary">
              Book Now <ArrowRight size={16} />
            </Link>

            <p className="text-[13px] text-[#9E9590] italic mt-6">
              After booking, you'll receive a confirmation and any next-step details by email.
            </p>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2" data-animate="fade-up">
            <div className="overflow-hidden rounded-2xl shadow-[0_12px_40px_rgba(110,98,89,0.12)]">
              <img
                src={bookImg}
                alt="Book your training session at BN Coaching & Health"
                className="w-full h-[420px] md:h-[560px] object-cover"
                style={{ filter: 'saturate(0.82) contrast(1.06) brightness(0.96) sepia(0.08)' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
