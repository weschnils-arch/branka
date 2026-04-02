import { useState } from 'react'
import { Dumbbell, Brain, User, Monitor, Building2, Users, ArrowRight, ChevronDown } from 'lucide-react'
import clsx from 'clsx'

const services = [
  {
    icon: Dumbbell,
    title: 'Training Services',
    intro: 'Training at BN Coaching & Health follows a clear principle: structure, precision, and sustainability.',
    desc: 'Each program is individually designed to match your current physical condition, lifestyle demands, and long-term goals. The focus lies on building a strong physical foundation that supports performance, health, and resilience in everyday life.',
    bullets: [
      'Correct movement patterns and technique',
      'Progressive strength development',
      'Injury prevention and joint health',
      'Mental discipline and consistency',
    ],
    outro: 'This approach ensures measurable progress while reducing the risk of burnout, injury, and short-term setbacks.',
  },
  {
    icon: Brain,
    title: 'Coaching',
    intro: 'Coaching at BN Coaching & Health goes beyond workouts.',
    desc: 'Branka Njegovec provides holistic coaching that integrates training structure, recovery management, mindset development, and lifestyle alignment. Clients are guided through a clear and realistic process that supports sustainable results rather than temporary changes.',
    bullets: [
      'Individuals seeking long-term physical and mental balance',
      'Professionals managing high stress levels',
      'Athletes pursuing performance-oriented goals',
      'Clients who value guidance, accountability, and clarity',
    ],
    bulletLabel: 'Coaching is ideal for:',
    outro: 'The coaching philosophy is based on patience, discipline, and continuous development — because real progress requires time and commitment.',
  },
  {
    icon: User,
    title: 'Personal Training',
    intro: 'One-on-one personal training offers the highest level of individual attention and precision.',
    desc: 'Sessions are tailored to your physical needs, technical level, and performance objectives. Branka Njegovec works closely with each client to ensure optimal execution, proper load management, and continuous progression.',
    bullets: [
      'Individualized strength and physique development',
      'Technical mastery and movement efficiency',
      'Safe progression and long-term adaptability',
      'Motivation through structured guidance',
    ],
    outro: 'This service is ideal for clients who value direct feedback, hands-on coaching, and a highly professional training environment.',
  },
  {
    icon: Monitor,
    title: 'Online Training',
    intro: 'BN Coaching & Health offers professional online coaching services that extend beyond the local market.',
    desc: 'Online training is structured, personalized, and performance-driven — not generic programs. Clients receive individualized training plans, nutrition guidance, regular progress evaluations, and continuous communication.',
    bullets: [
      'Clients seeking professional guidance regardless of location',
      'Athletes preparing for competition',
      'Individuals with demanding schedules',
      'Clients who value structure, accountability, and expert supervision',
    ],
    bulletLabel: 'Online training is suitable for:',
    outro: 'Distance does not limit quality when systems, experience, and commitment are aligned.',
  },
  {
    icon: Building2,
    title: 'Corporate Health & Safety',
    intro: 'Professional health- and safety-oriented services for companies that invest in the long-term health, physical resilience, and work capacity of their employees.',
    desc: 'These services are designed for organizations facing physical, repetitive, or stress-related workplace demands and aim to reduce injury risks, improve physical awareness, and support sustainable employee well-being.',
    bullets: [
      'Workplace-related physical assessments and movement analysis',
      'Preventive strength, mobility, and resilience programs',
      'Education on posture, ergonomics, and efficient movement patterns',
      'Risk reduction strategies for strain- and workload-related injuries',
      'Health-focused training aligned with occupational health and safety frameworks',
    ],
    bulletLabel: 'Corporate Health & Safety Services may include:',
    outro: 'All corporate solutions are developed individually and adapted to the specific requirements, environments, and safety standards of each organization. Offered on a project or consultation basis.',
    ctaLabel: 'Contact us for Corporate Health & Safety',
  },
  {
    icon: Users,
    title: 'Collaborative Training & Coaching',
    intro: 'For selected clients, training and coaching can be expanded through collaboration with highly experienced professionals from the bodybuilding and performance training scene.',
    desc: 'This collaborative approach allows for an even deeper level of specialization, particularly in performance-oriented training, advanced physique development, and competition preparation. Collaborative training is not a standard program — it is offered selectively, based on training level, objectives, and commitment.',
    bullets: [
      'Advanced training methodologies and specialization',
      'Performance-focused physique development',
      'Competition preparation and refinement',
      'High-level feedback from multiple professional perspectives',
    ],
    outro: 'All collaborative setups are coordinated directly by Branka Njegovec to ensure consistency, structure, and alignment with the BN Coaching & Health training philosophy.',
    ctaLabel: 'Contact us for collaborative training',
  },
]

function ServiceCard({ service }: { service: typeof services[0] }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className="group relative rounded-2xl border border-[#E8E2DA]/60 shadow-[0_2px_8px_rgba(110,98,89,0.04)] hover:shadow-[0_12px_32px_rgba(110,98,89,0.1)] transition-shadow duration-300 overflow-hidden"
    >
      {/* Expanding sage fill from vertical center — clip-path inset */}
      <div
        className="absolute inset-0 bg-[#9A9F7A] z-0 rounded-2xl"
        style={{
          clipPath: expanded ? 'inset(0)' : 'inset(50% 0)',
          transition: 'clip-path 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
        }}
      />

      {/* Card content */}
      <div className={clsx('relative z-10 transition-colors duration-500 h-full', expanded ? '' : 'bg-white rounded-2xl')}>
        <div className="p-7 md:p-8">
          <div className="flex items-start gap-5">
            <div className={clsx(
              'w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500',
              expanded ? 'bg-white/20 scale-110' : 'bg-[#9A9F7A]/10 group-hover:bg-[#9A9F7A]/20 group-hover:scale-110'
            )}>
              <service.icon size={22} className={clsx('transition-colors duration-500', expanded ? 'text-white' : 'text-[#9A9F7A]')} strokeWidth={1.5} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className={clsx('text-[17px] font-semibold mb-2 tracking-[-0.01em] transition-colors duration-500', expanded ? 'text-white' : 'text-[#4A4A4A]')}>
                {service.title}
              </h3>
              <p className={clsx('text-[14px] leading-[1.7] mb-4 transition-colors duration-500', expanded ? 'text-white/80' : 'text-[#7A7470]')}>
                {service.intro}
              </p>

              <button
                onClick={() => setExpanded(!expanded)}
                className={clsx(
                  'inline-flex items-center gap-2 text-[13px] font-semibold transition-colors duration-300 tracking-[0.02em] uppercase',
                  expanded ? 'text-white hover:text-white/80' : 'text-[#6E6259] hover:text-[#9A9F7A]'
                )}
              >
                {expanded ? 'Show Less' : 'Read More'}
                <ChevronDown size={14} className={clsx('transition-transform duration-300', expanded && 'rotate-180')} />
              </button>
            </div>
          </div>
        </div>

        {/* Expandable detail */}
        <div className={clsx(
          'transition-all duration-500 ease-in-out overflow-hidden',
          expanded ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'
        )}>
          <div className="px-7 md:px-8 pb-7 md:pb-8 pt-0">
            <div className="border-t border-white/20 pt-5">
              <p className="text-[14px] leading-[1.7] text-white/85 mb-4">
                {service.desc}
              </p>

              {service.bulletLabel && (
                <p className="text-[14px] font-medium text-white mb-2">{service.bulletLabel}</p>
              )}

              <ul className="space-y-2 mb-4">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-[14px] leading-[1.6] text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <p className="text-[14px] leading-[1.7] text-white/75 mb-4 italic">
                {service.outro}
              </p>

              <a
                href={service.ctaLabel ? '#contact' : '#booking'}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(service.ctaLabel ? '#contact' : '#booking')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-white hover:text-white/80 transition-colors duration-200 tracking-[0.02em] uppercase"
              >
                {service.ctaLabel || 'Book Now'}
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 lg:py-40 bg-[#F5F0EB] grain-overlay">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20">
        <div className="mb-16">
          <p data-animate="fade-up" className="section-label">
            Services
          </p>
          <h2
            data-animate="fade-up"
            className="text-[clamp(32px,5vw,56px)] font-bold tracking-[-0.025em] leading-[1.1] text-[#4A4A4A] mb-4"
          >
            What We Offer
          </h2>
          <p data-animate="fade-up" className="text-[clamp(15px,1.2vw,17px)] leading-[1.7] text-[#7A7470] max-w-[520px]">
            Every service is structured, individualized, and focused on results that last. Choose the path that matches your goals.
          </p>
        </div>

        <div data-animate="stagger" className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
