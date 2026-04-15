import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { inquiryOptions } from '../data/services'

type FormState = {
  name: string
  email: string
  service: string
  message: string
  gdpr: boolean
}

type FormErrors = Partial<Record<keyof FormState, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(s: FormState): FormErrors {
  const errs: FormErrors = {}
  if (s.name.trim().length < 2) errs.name = 'Name must be at least 2 characters.'
  else if (s.name.trim().length > 100) errs.name = 'Name must be at most 100 characters.'
  if (!EMAIL_RE.test(s.email.trim())) errs.email = 'Please enter a valid email address.'
  if (!s.service) errs.service = 'Please select a service or inquiry type.'
  const msgLen = s.message.trim().length
  if (msgLen < 20) errs.message = 'Message must be at least 20 characters.'
  else if (msgLen > 5000) errs.message = 'Message must be at most 5000 characters.'
  if (!s.gdpr) errs.gdpr = 'Please accept the privacy policy to continue.'
  return errs
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', service: '', message: '', gdpr: false })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setServerError(null)
    const errs = validate(form)
    setErrors(errs)
    if (Object.keys(errs).length) return

    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok && res.status !== 404) throw new Error('Submission failed.')
      setSubmitted(true)
      setForm({ name: '', email: '', service: '', message: '', gdpr: false })
    } catch {
      setServerError('Something went wrong. Please try again or email mail@bncoachinghealth.com directly.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-10 md:p-12 shadow-[0_2px_8px_rgba(110,98,89,0.06)] border border-[#E8E2DA]/60 text-center">
        <div className="w-16 h-16 rounded-full bg-[#9A9F7A]/15 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 size={32} className="text-[#9A9F7A]" strokeWidth={1.5} />
        </div>
        <h3 className="text-[22px] font-semibold text-[#4A4A4A] mb-3">✅ Vielen Dank! Wir melden uns in Kürze bei dir.</h3>
        <p className="text-[15px] text-[#7A7470] leading-[1.7]">
          Your message has been sent. We'll get back to you shortly at the email you provided.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-[13px] font-semibold text-[#9A9F7A] hover:text-[#6E6259] uppercase tracking-[0.06em]"
        >
          Send another message
        </button>
      </div>
    )
  }

  const inputCls = (hasErr?: string) =>
    `w-full h-12 px-4 rounded-lg border bg-[#FBFAF8] text-[#4A4A4A] text-[15px] outline-none transition-all duration-200 ${
      hasErr ? 'border-[#B94A48]' : 'border-[#D8CFC4] focus:border-[#9A9F7A] focus:shadow-[0_0_0_3px_rgba(154,159,122,0.12)]'
    }`

  return (
    <form onSubmit={onSubmit} noValidate className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_2px_8px_rgba(110,98,89,0.06)] border border-[#E8E2DA]/60">
      <div className="space-y-5">
        <div>
          <label htmlFor="cf-name" className="block text-[14px] font-medium text-[#7A7470] mb-2">Name *</label>
          <input
            id="cf-name" type="text" autoComplete="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputCls(errors.name)}
            placeholder="Your name"
          />
          {errors.name && <p className="text-[13px] text-[#B94A48] mt-1.5">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="cf-email" className="block text-[14px] font-medium text-[#7A7470] mb-2">Email *</label>
          <input
            id="cf-email" type="email" autoComplete="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputCls(errors.email)}
            placeholder="your@email.com"
          />
          {errors.email && <p className="text-[13px] text-[#B94A48] mt-1.5">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="cf-service" className="block text-[14px] font-medium text-[#7A7470] mb-2">Service / Inquiry *</label>
          <select
            id="cf-service"
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className={`${inputCls(errors.service)} appearance-none pr-10`}
          >
            <option value="" disabled>Select a service or inquiry</option>
            {inquiryOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
          {errors.service && <p className="text-[13px] text-[#B94A48] mt-1.5">{errors.service}</p>}
        </div>

        <div>
          <label htmlFor="cf-message" className="block text-[14px] font-medium text-[#7A7470] mb-2">Message * (20–5000 characters)</label>
          <textarea
            id="cf-message" rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={`${inputCls(errors.message)} !h-auto resize-y min-h-[120px] py-3`}
            placeholder="Tell us about your goals..."
          />
          {errors.message && <p className="text-[13px] text-[#B94A48] mt-1.5">{errors.message}</p>}
        </div>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={form.gdpr}
            onChange={(e) => setForm({ ...form, gdpr: e.target.checked })}
            className="mt-1 w-4 h-4 accent-[#9A9F7A] flex-shrink-0"
          />
          <span className="text-[13px] leading-[1.55] text-[#7A7470]">
            I accept the <a href="/datenschutz" className="text-[#6E6259] underline hover:text-[#9A9F7A]">privacy policy</a> and agree to be contacted. *
          </span>
        </label>
        {errors.gdpr && <p className="text-[13px] text-[#B94A48] -mt-3">{errors.gdpr}</p>}

        {serverError && <p className="text-[14px] text-[#B94A48]">{serverError}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? 'Sending...' : <><Send size={16} /> Send Message</>}
        </button>
      </div>
    </form>
  )
}
