import { useState } from 'react'
import { Mail, MapPin, Send } from 'lucide-react'

function InstagramIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to the backend
    const mailtoLink = `mailto:mail@bncoachinghealth.com?subject=${encodeURIComponent(
      formState.subject === 'general' ? 'Website Inquiry' :
      formState.subject === 'training' ? 'Training Inquiry' :
      formState.subject === 'corporate' ? 'Corporate Health Inquiry' :
      'Competition Prep Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    )}`
    window.location.href = mailtoLink
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-24 md:py-32 lg:py-40 bg-[#F5F0EB] grain-overlay">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — Info */}
          <div>
            <p data-animate="fade-up" className="section-label">
              Contact
            </p>

            <h2
              data-animate="fade-up"
              className="text-[clamp(32px,5vw,56px)] font-bold tracking-[-0.025em] leading-[1.1] text-[#4A4A4A] mb-6"
            >
              Get in Touch
            </h2>

            <p data-animate="fade-up" className="text-[clamp(16px,1.3vw,18px)] leading-[1.7] text-[#7A7470] max-w-[440px] mb-10">
              Whether you are looking to improve your health, build strength, or prepare for competition — get in touch to schedule a consultation or learn more about training and coaching options.
            </p>

            <div data-animate="stagger" className="space-y-3">
              <a
                href="mailto:mail@bncoachinghealth.com"
                className="expand-fill flex items-center gap-4 rounded-xl py-3 px-4 -mx-4"
              >
                <div className="w-10 h-10 rounded-lg bg-[#9A9F7A]/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="expand-fill-text text-[#9A9F7A]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="expand-fill-muted text-[12px] font-medium text-[#9E9590] uppercase tracking-[0.04em]">Email</p>
                  <p className="expand-fill-text text-[15px] font-medium text-[#4A4A4A]">
                    mail@bncoachinghealth.com
                  </p>
                </div>
              </a>

              <a
                href="https://instagram.com/branka_ifbbpro"
                target="_blank"
                rel="noopener noreferrer"
                className="expand-fill flex items-center gap-4 rounded-xl py-3 px-4 -mx-4"
              >
                <div className="w-10 h-10 rounded-lg bg-[#9A9F7A]/10 flex items-center justify-center flex-shrink-0">
                  <InstagramIcon size={18} className="expand-fill-text text-[#9A9F7A]" />
                </div>
                <div>
                  <p className="expand-fill-muted text-[12px] font-medium text-[#9E9590] uppercase tracking-[0.04em]">Instagram</p>
                  <p className="expand-fill-text text-[15px] font-medium text-[#4A4A4A]">
                    @branka_ifbbpro
                  </p>
                </div>
              </a>

              <div className="expand-fill flex items-center gap-4 rounded-xl py-3 px-4 -mx-4">
                <div className="w-10 h-10 rounded-lg bg-[#9A9F7A]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="expand-fill-text text-[#9A9F7A]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="expand-fill-muted text-[12px] font-medium text-[#9E9590] uppercase tracking-[0.04em]">Location</p>
                  <p className="expand-fill-text text-[15px] font-medium text-[#4A4A4A]">
                    Croatia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div data-animate="fade-up">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl p-8 md:p-10 shadow-[0_2px_8px_rgba(110,98,89,0.06)]"
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-[14px] font-medium text-[#7A7470] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full h-12 px-4 rounded-lg border border-[#D8CFC4] bg-[#FBFAF8] text-[#4A4A4A] text-[15px] outline-none focus:border-[#9A9F7A] focus:shadow-[0_0_0_3px_rgba(154,159,122,0.1)] transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[14px] font-medium text-[#7A7470] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full h-12 px-4 rounded-lg border border-[#D8CFC4] bg-[#FBFAF8] text-[#4A4A4A] text-[15px] outline-none focus:border-[#9A9F7A] focus:shadow-[0_0_0_3px_rgba(154,159,122,0.1)] transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[14px] font-medium text-[#7A7470] mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full h-12 px-4 rounded-lg border border-[#D8CFC4] bg-[#FBFAF8] text-[#4A4A4A] text-[15px] outline-none focus:border-[#9A9F7A] focus:shadow-[0_0_0_3px_rgba(154,159,122,0.1)] transition-all duration-200 appearance-none"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="training">Training & Coaching</option>
                    <option value="corporate">Corporate Health & Safety</option>
                    <option value="competition">Competition Prep</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[14px] font-medium text-[#7A7470] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[#D8CFC4] bg-[#FBFAF8] text-[#4A4A4A] text-[15px] outline-none focus:border-[#9A9F7A] focus:shadow-[0_0_0_3px_rgba(154,159,122,0.1)] transition-all duration-200 resize-none"
                    placeholder="Tell us about your goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                  disabled={submitted}
                >
                  {submitted ? (
                    'Message Sent!'
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
