import { Target, Users, TrendingUp } from 'lucide-react'

const pillars = [
  { icon: Target, title: 'Evidence-Based Training', desc: 'Programs built on science, real-world experience, and proven methodology.' },
  { icon: Users, title: 'Individualized Coaching', desc: 'Every plan is tailored to your physical condition, lifestyle, and goals.' },
  { icon: TrendingUp, title: 'Long-Term Results', desc: 'Sustainable progress over shortcuts. Results that last a lifetime.' },
]

export function Introduction() {
  return (
    <section id="about" className="py-24 md:py-32 lg:py-40 grain-overlay">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20">
        <div className="max-w-[720px] mx-auto text-center">
          <p data-animate="fade-up" className="section-label justify-center">
            Welcome to BN Coaching & Health
          </p>

          <h2
            data-animate="fade-up"
            className="text-[clamp(32px,5vw,56px)] font-bold tracking-[-0.025em] leading-[1.1] text-[#4A4A4A] mb-6"
          >
            Training Is More Than Transformation
          </h2>

          <div data-animate="fade-up" className="space-y-5 mb-8">
            <p className="text-[clamp(16px,1.3vw,19px)] leading-[1.7] text-[#7A7470]">
              At BN Coaching & Health, training is a structured, disciplined, and sustainable process — built on expertise, real-world experience, and a clear purpose.
            </p>
            <p className="text-[clamp(16px,1.3vw,19px)] leading-[1.7] text-[#7A7470]">
              Founded by professional athlete and coach Branka Njegovec, BN Coaching & Health is a performance-driven coaching concept designed to support individuals in achieving lasting physical development, long-term health, and mental resilience. At the same time, BN Coaching & Health provides elite-level coaching for competitive bodybuilding athletes who aim to reach peak contest condition.
            </p>
            <p className="text-[clamp(16px,1.3vw,19px)] leading-[1.7] text-[#7A7470]">
              Whether your goal is to gain strength, improve health, manage stress, or compete at the highest level, BN Coaching & Health offers evidence-based training systems, individualized coaching, and a professional mindset that prioritizes longevity over shortcuts.
            </p>
          </div>

          <p data-animate="fade-up" className="text-[clamp(20px,2.5vw,28px)] font-bold tracking-[-0.02em] text-[#6E6259] italic mb-16">
            Progress is not rushed. Progress is built.
          </p>
        </div>

        <div
          data-animate="stagger"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="text-center group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#9A9F7A]/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#9A9F7A]/20 transition-colors duration-300">
                <pillar.icon size={24} className="text-[#9A9F7A]" strokeWidth={1.5} />
              </div>
              <h3 className="text-[18px] font-semibold text-[#4A4A4A] mb-3 tracking-[-0.01em]">
                {pillar.title}
              </h3>
              <p className="text-[15px] leading-[1.7] text-[#7A7470] max-w-[300px] mx-auto">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
