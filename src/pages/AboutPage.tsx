import aboutMain from '../assets/images/about-branka-olympia.webp'
import aboutSecondary from '../assets/images/about-branka-trophy.webp'
import { TestimonialCarousel } from '../components/TestimonialCarousel'

const achievements = [
  "IFBB Pro Athlete – Women's Physique & Bodybuilding",
  'Multiple-time Croatian National Champion',
  'Four-time European Champion',
  'Arnold Classic Amateur Overall Winner (PRO Card)',
  'Multiple professional competition appearances including Olympia',
  '5th Place – Olympia, Las Vegas',
]

export function AboutPage() {
  return (
    <div className="pt-[120px] md:pt-[160px] bg-[#FBFAF8]">
      {/* Who Am I */}
      <section id="who" className="py-16 md:py-24 grain-overlay scroll-mt-24">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="overflow-hidden rounded-[16px] rounded-tl-none">
                  <img
                    src={aboutMain}
                    alt="Branka Njegovec on the Olympia stage"
                    className="w-full h-[500px] md:h-[600px] object-cover object-top"
                    style={{ filter: 'saturate(0.85) contrast(1.05)' }}
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-8 -right-4 md:-right-8 w-[45%] max-w-[200px]">
                  <div className="overflow-hidden rounded-xl shadow-[0_8px_24px_rgba(42,38,34,0.15)] border-4 border-[#FBFAF8]">
                    <img
                      src={aboutSecondary}
                      alt="Branka Njegovec at Mr. Big Evolution Pro"
                      className="w-full h-auto object-cover"
                      style={{ filter: 'saturate(0.85) contrast(1.05)' }}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 lg:pl-4">
              <p className="section-label">About Me</p>
              <h1 className="text-[clamp(36px,6vw,72px)] font-bold tracking-[-0.025em] leading-[1.05] text-[#4A4A4A] mb-8">
                Who Am I
              </h1>
              <div className="space-y-5 max-w-[640px]">
                <p className="text-[clamp(16px,1.3vw,18px)] leading-[1.75] text-[#4A4A4A]">
                  My name is Branka Njegovec, professional athlete, coach, and the driving force behind BN Coaching & Health and B.P.P. d.o.o. – The Body Progress Principle.
                </p>
                <p className="text-[clamp(16px,1.3vw,18px)] leading-[1.75] text-[#7A7470]">
                  With over two decades of experience in the fitness and bodybuilding industry, I have dedicated my career to understanding the human body, performance development, and sustainable training methodologies. My work is guided by discipline, patience, and the belief that long-term success is built on correct foundations — not shortcuts.
                </p>
                <p className="text-[clamp(16px,1.3vw,18px)] leading-[1.75] text-[#7A7470]">
                  I work with clients who value professionalism, commitment, and personal responsibility for their progress.
                </p>
              </div>

              <div className="relative bg-[#F5F0EB] rounded-xl p-8 md:p-10 max-w-[640px] mt-12">
                <span className="absolute top-4 left-6 text-[72px] leading-none font-bold text-[#D8CFC4] select-none" aria-hidden="true">
                  &ldquo;
                </span>
                <blockquote className="relative z-10 pt-8">
                  <p className="text-[clamp(17px,1.4vw,20px)] leading-[1.7] text-[#4A4A4A] font-light italic">
                    At 50, I'm still stepping on stage — a reminder that consistent training and patience truly pay off at any age. Whether you want to lose a few kilos, build strength, or grow into your own athletic journey, I'd be happy to support you.
                  </p>
                  <footer className="mt-5">
                    <p className="text-[15px] font-semibold text-[#4A4A4A]">Branka Njegovec</p>
                    <p className="text-[13px] text-[#9A9F7A] font-medium">IFBB Pro Athlete & Coach</p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-24 md:py-32 bg-[#F5F0EB] grain-overlay scroll-mt-24">
        <div className="mx-auto max-w-[960px] px-5 md:px-10 lg:px-20">
          <p className="section-label">Expertise</p>
          <h2 className="text-[clamp(32px,5vw,56px)] font-bold tracking-[-0.025em] leading-[1.1] text-[#4A4A4A] mb-8">
            Expertise
          </h2>
          <p className="text-[clamp(16px,1.3vw,19px)] leading-[1.8] text-[#4A4A4A] max-w-[760px]">
            My professional background combines elite-level competitive experience with academic education and extensive coaching practice. I am an IFBB Pro athlete in Women's Physique and Bodybuilding with an international competition career that includes multiple national and European titles and appearances at the world's most prestigious events. This experience is complemented by academic training in kinesiology and continuous professional education in training science, nutrition, and body care. This combination allows me to coach both general clients and competitive athletes with a high level of precision, credibility, and responsibility.
          </p>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-24 md:py-32 grain-overlay scroll-mt-24 bg-[#FBFAF8]">
        <div className="mx-auto max-w-[960px] px-5 md:px-10 lg:px-20">
          <p className="section-label">Selected Competitive Achievements</p>
          <h2 className="text-[clamp(32px,5vw,56px)] font-bold tracking-[-0.025em] leading-[1.1] text-[#4A4A4A] mb-10">
            Selected Competitive Achievements
          </h2>
          <ul className="space-y-4 mb-10 max-w-[760px]">
            {achievements.map((a) => (
              <li key={a} className="flex items-start gap-4 text-[clamp(16px,1.3vw,18px)] leading-[1.6] text-[#4A4A4A] border-b border-[#E8E2DA] pb-4">
                <span className="w-2 h-2 rounded-full bg-[#9A9F7A] mt-[10px] flex-shrink-0" />
                {a}
              </li>
            ))}
          </ul>
          <p className="text-[clamp(15px,1.2vw,17px)] leading-[1.7] text-[#7A7470] italic max-w-[760px]">
            This expertise forms the foundation of the coaching philosophy at BN Coaching & Health.
          </p>
        </div>
      </section>

      {/* Corporate Health Experience */}
      <section id="corporate" className="py-24 md:py-32 bg-[#F5F0EB] grain-overlay scroll-mt-24">
        <div className="mx-auto max-w-[960px] px-5 md:px-10 lg:px-20">
          <p className="section-label">Corporate Health Experience</p>
          <h2 className="text-[clamp(32px,5vw,56px)] font-bold tracking-[-0.025em] leading-[1.1] text-[#4A4A4A] mb-8">
            Corporate Health Experience
          </h2>
          <p className="text-[clamp(16px,1.3vw,19px)] leading-[1.8] text-[#4A4A4A] max-w-[760px]">
            Branka Njegovec also works with companies to support employee health, physical resilience, and preventive workplace safety measures. The focus lies on sustainable physical development, injury prevention, and education-based training concepts aligned with occupational health and safety frameworks. Corporate solutions are tailored to the specific demands of each organization.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 md:py-32 grain-overlay scroll-mt-24 bg-[#FBFAF8]">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20">
          <div className="text-center mb-12">
            <p className="section-label justify-center">Testimonials</p>
            <h2 className="text-[clamp(32px,5vw,56px)] font-bold tracking-[-0.025em] leading-[1.1] text-[#4A4A4A]">
              Client Voices
            </h2>
          </div>
          <TestimonialCarousel />
        </div>
      </section>
    </div>
  )
}
