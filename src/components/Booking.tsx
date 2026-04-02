import { useState } from 'react'
import { Check, Calendar, ArrowRight, Clock, Video, User, Trophy } from 'lucide-react'

// ============================================================
// CALENDAR INTEGRATION
// ============================================================
// To activate online booking, set BOOKING_URL to your
// Calendly or Cal.com link, e.g.:
//   "https://calendly.com/bncoachinghealth"
//   "https://cal.com/bncoachinghealth"
// The component will automatically show an embedded calendar.
// Set to null to use the email fallback (current behavior).
// ============================================================
const BOOKING_URL: string | null = null

const bookableServices = [
  {
    name: 'Initial Consultation (Goal & Strategy Call)',
    icon: Calendar,
    duration: '60 min',
  },
  {
    name: 'Coaching Check-In / Progress Review',
    icon: Clock,
    duration: '45 min',
  },
  {
    name: 'Digital One-on-One Training (online)',
    icon: Video,
    duration: '60 min',
  },
  {
    name: 'Digital Group Training (online)',
    icon: Video,
    duration: '60 min',
  },
  {
    name: 'Personal Training Session (in-person, if available)',
    icon: User,
    duration: 'By arrangement',
  },
  {
    name: 'Competition Prep Consultation (athlete-focused)',
    icon: Trophy,
    duration: '60 min',
  },
]

function CalendarEmbed({ url }: { url: string }) {
  const isCalendly = url.includes('calendly.com')

  if (isCalendly) {
    return (
      <div className="rounded-xl overflow-hidden bg-white shadow-[0_2px_8px_rgba(110,98,89,0.06)]">
        <iframe
          src={url}
          className="w-full border-0"
          style={{ minHeight: '650px' }}
          title="Book an appointment with BN Coaching & Health"
          loading="lazy"
        />
      </div>
    )
  }

  // Cal.com or generic iframe embed
  return (
    <div className="rounded-xl overflow-hidden bg-white shadow-[0_2px_8px_rgba(110,98,89,0.06)]">
      <iframe
        src={url}
        className="w-full border-0"
        style={{ minHeight: '650px' }}
        title="Book an appointment with BN Coaching & Health"
        loading="lazy"
      />
    </div>
  )
}

export function Booking() {
  const [selectedService, setSelectedService] = useState<number | null>(null)

  return (
    <section id="booking" className="py-24 md:py-32 lg:py-40 grain-overlay">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20">
        <div className="mb-16">
          <p data-animate="fade-up" className="section-label">
            Book Your Session
          </p>

          <h2
            data-animate="fade-up"
            className="text-[clamp(32px,5vw,56px)] font-bold tracking-[-0.025em] leading-[1.1] text-[#4A4A4A] mb-6"
          >
            Ready to Start With Structure — Not Guesswork?
          </h2>

          <p data-animate="fade-up" className="text-[clamp(16px,1.3vw,18px)] leading-[1.7] text-[#7A7470] max-w-[600px]">
            Schedule a call or session with Branka Njegovec and take the next step with clarity. In this first appointment we align your goal, current level, timeline, and the most effective path forward — whether you're building long-term strength, improving health, or preparing for competition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Bookable services as selectable cards */}
          <div data-animate="stagger">
            <h3 className="text-[18px] font-semibold text-[#4A4A4A] mb-6 tracking-[-0.01em]">
              What you can book
            </h3>

            <div className="space-y-3">
              {bookableServices.map((service, i) => (
                <button
                  key={service.name}
                  onClick={() => setSelectedService(selectedService === i ? null : i)}
                  className={`w-full text-left flex items-center gap-4 rounded-xl py-4 px-5 border transition-all duration-300 ${
                    selectedService === i
                      ? 'border-[#9A9F7A] bg-[#9A9F7A]/5 shadow-[0_2px_8px_rgba(154,159,122,0.12)]'
                      : 'border-[#E8E2DA]/60 bg-white hover:border-[#D8CFC4] hover:shadow-[0_2px_8px_rgba(110,98,89,0.06)]'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                    selectedService === i ? 'bg-[#9A9F7A]/15' : 'bg-[#F5F0EB]'
                  }`}>
                    <service.icon size={18} className={`transition-colors duration-300 ${
                      selectedService === i ? 'text-[#9A9F7A]' : 'text-[#7A7470]'
                    }`} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-[15px] font-medium leading-[1.4] transition-colors duration-300 ${
                      selectedService === i ? 'text-[#4A4A4A]' : 'text-[#4A4A4A]'
                    }`}>
                      {service.name}
                    </p>
                    <p className="text-[13px] text-[#9E9590] mt-0.5">{service.duration}</p>
                  </div>
                  <Check size={18} className={`flex-shrink-0 transition-all duration-300 ${
                    selectedService === i ? 'text-[#9A9F7A] opacity-100' : 'text-[#D8CFC4] opacity-0'
                  }`} strokeWidth={2.5} />
                </button>
              ))}
            </div>
          </div>

          {/* Right — Calendar embed or CTA */}
          <div data-animate="fade-up">
            {BOOKING_URL ? (
              <CalendarEmbed url={BOOKING_URL} />
            ) : (
              <div className="bg-[#F5F0EB] rounded-xl p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#9A9F7A]/15 flex items-center justify-center">
                    <Calendar size={22} className="text-[#9A9F7A]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-semibold text-[#4A4A4A] tracking-[-0.01em]">
                      Book Your Appointment
                    </h3>
                    <p className="text-[13px] text-[#9E9590]">Choose your preferred service and get started</p>
                  </div>
                </div>

                <p className="text-[15px] leading-[1.7] text-[#7A7470] mb-6">
                  Choose a time that fits your schedule and secure your slot. Whether building long-term strength, improving health, or preparing for competition.
                </p>

                <div className="space-y-3 mb-8">
                  <a
                    href={`mailto:mail@bncoachinghealth.com?subject=${encodeURIComponent(
                      selectedService !== null
                        ? `Booking: ${bookableServices[selectedService].name}`
                        : 'Booking Inquiry'
                    )}`}
                    className="btn-primary w-full justify-center"
                  >
                    <Calendar size={18} />
                    {selectedService !== null
                      ? `Book ${bookableServices[selectedService].name.split('(')[0].trim()}`
                      : 'Book Now'
                    }
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                    className="btn-secondary w-full justify-center"
                  >
                    Contact First
                    <ArrowRight size={16} />
                  </a>
                </div>

                <p className="text-[14px] text-[#9E9590] italic text-center">
                  After booking, you'll receive a confirmation and any next-step details by email.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
