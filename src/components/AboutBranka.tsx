import aboutMain from '../assets/images/about-branka-olympia.webp'
import aboutSecondary from '../assets/images/about-branka-trophy.webp'

export function AboutBranka() {
  return (
    <section id="branka" className="py-24 md:py-32 lg:py-40 grain-overlay overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Image side + Expertise below */}
          <div className="lg:col-span-5" data-animate="fade-up">
            <div className="relative mb-16">
              <div data-animate="clip-reveal" className="overflow-hidden rounded-[16px] rounded-tl-none">
                <img
                  src={aboutMain}
                  alt="Branka Njegovec performing at Ms. Olympia competition, striking a confident pose on stage"
                  className="w-full h-[500px] md:h-[600px] object-cover object-top"
                  style={{ filter: 'saturate(0.85) contrast(1.05)' }}
                  loading="lazy"
                />
              </div>

              {/* Secondary image overlapping */}
              <div className="absolute -bottom-8 -right-4 md:-right-8 w-[45%] max-w-[200px]" data-animate="scale-in">
                <div className="overflow-hidden rounded-xl shadow-[0_8px_24px_rgba(42,38,34,0.15)] border-4 border-[#FBFAF8]">
                  <img
                    src={aboutSecondary}
                    alt="Branka Njegovec celebrating 1st place victory at Mr. Big Evolution Pro"
                    className="w-full h-auto object-cover"
                    style={{ filter: 'saturate(0.85) contrast(1.05)' }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Expertise — below images */}
            <div data-animate="fade-up">
              <h3 className="text-[20px] font-bold text-[#4A4A4A] mb-4 tracking-[-0.01em]">
                Expertise
              </h3>
              <div className="space-y-4">
                <p className="text-[15px] leading-[1.7] text-[#7A7470]">
                  My professional background combines elite-level competitive experience with academic education and extensive coaching practice.
                </p>
                <p className="text-[15px] leading-[1.7] text-[#7A7470]">
                  I am an IFBB Pro athlete in Women's Physique and Bodybuilding with an international competition career that includes multiple national and European titles and appearances at the world's most prestigious events. This experience is complemented by academic training in kinesiology and continuous professional education in training science, nutrition, and body care.
                </p>
                <p className="text-[15px] leading-[1.7] text-[#7A7470]">
                  This combination allows me to coach both general clients and competitive athletes with a high level of precision, credibility, and responsibility.
                </p>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="lg:col-span-7 lg:pl-4">
            <p data-animate="fade-up" className="section-label">
              About Me
            </p>

            <h2
              data-animate="fade-up"
              className="text-[clamp(32px,5vw,56px)] font-bold tracking-[-0.025em] leading-[1.1] text-[#4A4A4A] mb-6"
            >
              Who Am I
            </h2>

            <div data-animate="fade-up" className="space-y-5 mb-10 max-w-[560px]">
              <p className="text-[clamp(16px,1.3vw,18px)] leading-[1.7] text-[#7A7470]">
                My name is Branka Njegovec, professional athlete, coach, and the driving force behind BN Coaching & Health and B.P.P. d.o.o. — The Body Progress Principle.
              </p>
              <p className="text-[clamp(16px,1.3vw,18px)] leading-[1.7] text-[#7A7470]">
                With over two decades of experience in the fitness and bodybuilding industry, I have dedicated my career to understanding the human body, performance development, and sustainable training methodologies. My work is guided by discipline, patience, and the belief that long-term success is built on correct foundations — not shortcuts.
              </p>
              <p className="text-[clamp(16px,1.3vw,18px)] leading-[1.7] text-[#7A7470]">
                I work with clients who value professionalism, commitment, and personal responsibility for their progress.
              </p>
            </div>

            {/* Quote */}
            <div data-animate="fade-up" className="relative bg-[#F5F0EB] rounded-xl p-8 md:p-10 max-w-[560px] mb-12">
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

            {/* Corporate Health Experience */}
            <div data-animate="fade-up">
              <h3 className="text-[20px] font-bold text-[#4A4A4A] mb-4 tracking-[-0.01em]">
                Corporate Health Experience
              </h3>
              <p className="text-[15px] leading-[1.7] text-[#7A7470] max-w-[560px]">
                Branka Njegovec also works with companies to support employee health, physical resilience, and preventive workplace safety measures. The focus lies on sustainable physical development, injury prevention, and education-based training concepts aligned with occupational health and safety standards. Corporate solutions are tailored to the specific demands of each organization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
