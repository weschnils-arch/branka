import { ContactForm } from '../components/ContactForm'
import { BookingWidget } from '../components/BookingWidget'

export function ContactPage() {
  return (
    <section className="pt-[120px] md:pt-[160px] pb-24 md:pb-32 bg-[#FBFAF8] grain-overlay">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20">
        {/* Intro */}
        <div className="mb-16 max-w-[720px]">
          <p className="section-label">Contact & Booking</p>
          <h1 className="text-[clamp(36px,6vw,72px)] font-bold tracking-[-0.025em] leading-[1.05] text-[#4A4A4A] mb-6">
            Ready to take the next step?
          </h1>
          <p className="text-[clamp(16px,1.3vw,18px)] leading-[1.75] text-[#7A7470] mb-6">
            Whether you are looking to improve your health, build strength, or prepare for competition, BN Coaching & Health offers professional guidance grounded in experience, discipline, and integrity. Get in touch to schedule a consultation or to learn more about training and coaching options.
          </p>
          <p className="text-[clamp(16px,1.3vw,18px)] font-medium text-[#6E6259] italic">
            BN Coaching & Health – Built on discipline. Driven by progress.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left — Contact form */}
          <div id="message">
            <h2 className="text-[22px] md:text-[26px] font-semibold text-[#4A4A4A] mb-6 tracking-[-0.01em]">
              Send a Message
            </h2>
            <ContactForm />
          </div>

          {/* Right — Booking widget */}
          <div id="book" className="scroll-mt-24">
            <h2 className="text-[22px] md:text-[26px] font-semibold text-[#4A4A4A] mb-6 tracking-[-0.01em]">
              Book an Appointment
            </h2>
            <BookingWidget />
            <p className="text-[13px] text-[#9E9590] italic mt-5">
              After booking, you'll receive a confirmation and any next-step details by email.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
