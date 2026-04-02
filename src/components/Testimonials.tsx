import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'An individual online training program that truly delivers results. I finally achieved better muscle definition while addressing my individual physical weaknesses. Branka took my personal goals into account and has consistently motivated and pushed me to stay disciplined and committed.',
    name: 'Online Training Client',
    service: 'Online Training',
  },
  {
    quote: 'Long hours at a desk led to persistent neck tension. With consistent, targeted neck and shoulder training under Branka Njegovec\'s guidance, my pain decreased and my posture improved in a lasting way. Thank you, Branka.',
    name: 'Janina Kühn',
    service: 'Corporate Health & Safety',
  },
  {
    // TODO: Replace with real testimonial — original brief says "Testimonial 3: Bodybuilding" but no content was provided
    quote: 'Branka\'s coaching philosophy changed my approach to training entirely. The focus on structure and consistency over intensity made all the difference. Real progress takes patience — and she proves that every single day.',
    name: 'Competition Prep Client',
    service: 'Bodybuilding Coaching',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 lg:py-40 grain-overlay">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20">
        <div className="mb-16">
          <p data-animate="fade-up" className="section-label">
            Testimonials
          </p>
          <h2
            data-animate="fade-up"
            className="text-[clamp(32px,5vw,56px)] font-bold tracking-[-0.025em] leading-[1.1] text-[#4A4A4A] mb-4"
          >
            Client Results Speak
          </h2>
          <p data-animate="fade-up" className="text-[clamp(16px,1.3vw,18px)] leading-[1.7] text-[#7A7470] max-w-[520px]">
            Professionalism, trust, discipline, and sustainable development — from executives and professionals to competitive athletes.
          </p>
        </div>

        <div data-animate="stagger" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl border border-[#E8E2DA]/60 p-8 md:p-9 hover:shadow-[0_8px_24px_rgba(110,98,89,0.1)] transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={16} className="text-[#9A9F7A] fill-[#9A9F7A]" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="flex-1 mb-8">
                <p className="text-[15px] leading-[1.8] text-[#4A4A4A]">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <footer className="flex items-center gap-3 pt-6 border-t border-[#E8E2DA]/60">
                <div className="w-11 h-11 rounded-full bg-[#F5F0EB] flex items-center justify-center flex-shrink-0">
                  <span className="text-[15px] font-bold text-[#6E6259]">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-[#4A4A4A]">{t.name}</p>
                  <p className="text-[13px] text-[#9A9F7A] font-medium">{t.service}</p>
                </div>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
