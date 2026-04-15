import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

export type Testimonial = {
  quote: string
  name: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    quote: 'An individual online training program that truly delivers results. I finally achieved better muscle definition while addressing my individual physical weaknesses. Branka took my personal goals into account and has consistently motivated and pushed me to stay disciplined and committed.',
    name: 'XXX',
    role: 'Online Training Client',
  },
  {
    quote: "Long hours at a desk led to persistent neck tension. With consistent, targeted neck and shoulder training under Branka Njegovec's guidance, my pain decreased and my posture improved in a lasting way. Thank you, Branka.",
    name: 'Janina Kühn',
    role: 'Corporate Health & Safety Client',
  },
  {
    quote: 'Placeholder for Bodybuilding testimonial. Copy to follow.',
    name: 'XXX',
    role: 'Bodybuilding Client',
  },
]

export function TestimonialCarousel() {
  const [idx, setIdx] = useState(0)
  const t = testimonials[idx]

  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIdx((i) => (i + 1) % testimonials.length)

  return (
    <div className="max-w-[920px] mx-auto">
      <p className="text-[clamp(15px,1.2vw,17px)] leading-[1.7] text-[#7A7470] text-center mb-12 max-w-[680px] mx-auto">
        Client results and long-term progress speak louder than promises. Testimonials reflect the values that define BN Coaching & Health: professionalism, trust, discipline, and sustainable development. Clients range from executives and working professionals to competitive athletes — all united by the desire for structured, serious, and goal-oriented coaching.
      </p>

      <div className="relative bg-white rounded-2xl border border-[#E8E2DA] shadow-[0_8px_32px_rgba(110,98,89,0.08)] p-10 md:p-14">
        <div className="flex gap-1 mb-6 justify-center">
          {[...Array(5)].map((_, s) => (
            <Star key={s} size={18} className="text-[#9A9F7A] fill-[#9A9F7A]" />
          ))}
        </div>

        <blockquote className="text-center mb-10">
          <p className="text-[clamp(17px,1.5vw,22px)] leading-[1.7] text-[#4A4A4A] font-light italic">
            &ldquo;{t.quote}&rdquo;
          </p>
        </blockquote>

        <div className="flex items-center justify-center gap-4">
          <div className="w-14 h-14 rounded-full bg-[#F5F0EB] flex items-center justify-center flex-shrink-0 border border-[#E8E2DA]">
            <span className="text-[18px] font-bold text-[#6E6259]">
              {t.name === 'XXX' ? '•' : t.name.charAt(0)}
            </span>
          </div>
          <div className="text-left">
            <p className="text-[16px] font-semibold text-[#4A4A4A]">{t.name}</p>
            <p className="text-[13px] text-[#9A9F7A] font-medium">{t.role}</p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-10">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full border border-[#E8E2DA] hover:bg-[#F5F0EB] text-[#6E6259] flex items-center justify-center transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-[6px] rounded-full transition-all ${i === idx ? 'w-8 bg-[#9A9F7A]' : 'w-2 bg-[#D8CFC4]'}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-11 h-11 rounded-full border border-[#E8E2DA] hover:bg-[#F5F0EB] text-[#6E6259] flex items-center justify-center transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
