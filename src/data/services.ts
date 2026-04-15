import trainingImg from '../assets/images/stock/training-services.webp'
import coachingImg from '../assets/images/stock/coaching.webp'
import personalImg from '../assets/images/stock/personal-training.webp'
import bookImg from '../assets/images/stock/book-session.webp'

export type ServiceDetail = {
  slug: string
  title: string
  image: string
  isPlaceholder?: boolean
  text: string
  bulletLabel?: string
  bullets: string[]
  outro: string
  ctaLabel: string
  ctaHref: string
  bookingKey: string
  durationMin: number
}

export const servicesData: ServiceDetail[] = [
  {
    slug: 'training',
    title: 'Training Services',
    image: trainingImg,
    text: 'Training at BN Coaching & Health follows a clear principle: structure, precision, and sustainability. Each program is individually designed to match your current physical condition, lifestyle demands, and long-term goals. The focus lies on building a strong physical foundation that supports performance, health, and resilience in everyday life.',
    bulletLabel: 'Training services emphasize:',
    bullets: [
      'Correct movement patterns and technique',
      'Progressive strength development',
      'Injury prevention and joint health',
      'Mental discipline and consistency',
    ],
    outro: 'This approach ensures measurable progress while reducing the risk of burnout, injury, and short-term setbacks.',
    ctaLabel: 'Book Now',
    ctaHref: '/contact#book',
    bookingKey: 'personal-training',
    durationMin: 60,
  },
  {
    slug: 'coaching',
    title: 'Coaching',
    image: coachingImg,
    text: 'Coaching at BN Coaching & Health goes beyond workouts. Branka Njegovec provides holistic coaching that integrates training structure, recovery management, mindset development, and lifestyle alignment. Clients are guided through a clear and realistic process that supports sustainable results rather than temporary changes.',
    bulletLabel: 'Coaching is ideal for:',
    bullets: [
      'Individuals seeking long-term physical and mental balance',
      'Professionals managing high stress levels',
      'Athletes pursuing performance-oriented goals',
      'Clients who value guidance, accountability, and clarity',
    ],
    outro: 'The coaching philosophy is based on patience, discipline, and continuous development — because real progress requires time and commitment.',
    ctaLabel: 'Book Now',
    ctaHref: '/contact#book',
    bookingKey: 'coaching-check-in',
    durationMin: 30,
  },
  {
    slug: 'personal-training',
    title: 'Personal Training',
    image: personalImg,
    text: 'One-on-one personal training offers the highest level of individual attention and precision. Sessions are tailored to your physical needs, technical level, and performance objectives. Branka Njegovec works closely with each client to ensure optimal execution, proper load management, and continuous progression.',
    bulletLabel: 'Personal training focuses on:',
    bullets: [
      'Individualized strength and physique development',
      'Technical mastery and movement efficiency',
      'Safe progression and long-term adaptability',
      'Motivation through structured guidance',
    ],
    outro: 'This service is ideal for clients who value direct feedback, hands-on coaching, and a highly professional training environment.',
    ctaLabel: 'Book Now',
    ctaHref: '/contact#book',
    bookingKey: 'personal-training',
    durationMin: 60,
  },
  {
    slug: 'online-training',
    title: 'Online Training',
    image: coachingImg,
    isPlaceholder: true,
    text: 'BN Coaching & Health offers professional online coaching services that extend beyond the local market. Online training is structured, personalized, and performance-driven — not generic programs. Clients receive individualized training plans, nutrition guidance, regular progress evaluations, and continuous communication.',
    bulletLabel: 'Online training is suitable for:',
    bullets: [
      'Clients seeking professional guidance regardless of location',
      'Athletes preparing for competition',
      'Individuals with demanding schedules',
      'Clients who value structure, accountability, and expert supervision',
    ],
    outro: 'Distance does not limit quality when systems, experience, and commitment are aligned.',
    ctaLabel: 'Book Now',
    ctaHref: '/contact#book',
    bookingKey: 'digital-one-on-one',
    durationMin: 60,
  },
  {
    slug: 'corporate-health',
    title: 'Corporate Health & Safety Services',
    image: trainingImg,
    isPlaceholder: true,
    text: 'BN Coaching & Health provides professional health- and safety-oriented services for companies that invest in the long-term health, physical resilience, and work capacity of their employees. These services are designed for organizations facing physical, repetitive, or stress-related workplace demands and aim to reduce injury risks, improve physical awareness, and support sustainable employee well-being.',
    bulletLabel: 'May include:',
    bullets: [
      'Workplace-related physical assessments and movement analysis',
      'Preventive strength, mobility, and resilience programs',
      'Education on posture, ergonomics, and efficient movement patterns',
      'Risk reduction strategies for strain- and workload-related injuries',
      'Health-focused training aligned with occupational health and safety frameworks',
    ],
    outro: 'All corporate solutions are developed individually and adapted to the specific requirements, environments, and safety standards of each organization. Corporate Health & Safety Services are offered on a project or consultation basis.',
    ctaLabel: 'Contact us for Corporate Health & Safety Services',
    ctaHref: '/contact',
    bookingKey: 'corporate',
    durationMin: 60,
  },
  {
    slug: 'collaborative',
    title: 'Collaborative Training & Coaching',
    image: bookImg,
    isPlaceholder: true,
    text: 'For selected clients, training and coaching at BN Coaching & Health can be expanded through collaboration with a highly experienced professional from the bodybuilding and performance training scene. This collaborative approach allows for an even deeper level of specialization, particularly in performance-oriented training, advanced physique development, and competition preparation. Depending on individual goals, clients may benefit from combined expertise, different technical perspectives, and complementary coaching strengths. Collaborative training is not a standard program. It is offered selectively, based on training level, objectives, and commitment.',
    bulletLabel: 'This option may include:',
    bullets: [
      'Advanced training methodologies and specialization',
      'Performance-focused physique development',
      'Competition preparation and refinement',
      'High-level feedback from multiple professional perspectives',
    ],
    outro: 'All collaborative setups are coordinated directly by Branka Njegovec to ensure consistency, structure, and alignment with the BN Coaching & Health training philosophy. If you are interested in collaborative training or would like to learn whether this option is suitable for your goals, please get in touch to discuss availability and details.',
    ctaLabel: 'Contact us for collaborative training options',
    ctaHref: '/contact',
    bookingKey: 'collaborative',
    durationMin: 90,
  },
]

export const bookableServices = [
  { key: 'initial-consultation', name: 'Initial Consultation (Goal & Strategy Call)', durationMin: 60 },
  { key: 'coaching-check-in', name: 'Coaching Check-In / Progress Review', durationMin: 30 },
  { key: 'personal-training', name: 'Personal Training Session (in-person)', durationMin: 60 },
  { key: 'digital-one-on-one', name: 'Digital One-on-One Training (online)', durationMin: 60 },
  { key: 'digital-group', name: 'Digital Group Training (online)', durationMin: 90 },
  { key: 'competition-prep', name: 'Competition Prep Consultation', durationMin: 90 },
]

export const inquiryOptions = [
  'Initial Consultation (Goal & Strategy Call)',
  'Coaching Check-In / Progress Review',
  'Personal Training Session (in-person)',
  'Digital One-on-One Training (online)',
  'Digital Group Training (online)',
  'Competition Prep Consultation',
  'Corporate Health & Safety Inquiry',
  'General Inquiry',
]
