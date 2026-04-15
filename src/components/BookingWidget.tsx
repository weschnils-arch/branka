import { useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, Calendar, CheckCircle2, Clock } from 'lucide-react'
import { bookableServices } from '../data/services'

type Step = 1 | 2 | 3 | 4 | 5

const COLOR_AVAILABLE = '#e8dcc8'
const COLOR_BOOKED = '#424242'
const COLOR_TODAY = '#7a8a3a'

function firstOfMonth(d: Date) { return new Date(d.getFullYear(), d.getMonth(), 1) }
function daysInMonth(d: Date) { return new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate() }
function sameDay(a: Date, b: Date) { return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate() }
function fmtTime(h: number, m: number) { return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}` }

function generateSlotsForDay(date: Date, durationMin: number): { start: string; end: string; booked: boolean }[] {
  const day = date.getDay()
  if (day === 0) return []
  const startHour = 9
  const endHour = day === 6 ? 14 : 18
  const slots: { start: string; end: string; booked: boolean }[] = []
  for (let h = startHour; h < endHour; ) {
    const totalStart = h * 60
    const totalEnd = totalStart + durationMin
    if (totalEnd > endHour * 60) break
    const sH = Math.floor(totalStart / 60)
    const sM = totalStart % 60
    const eH = Math.floor(totalEnd / 60)
    const eM = totalEnd % 60
    const booked = (date.getDate() + h) % 5 === 0
    slots.push({ start: fmtTime(sH, sM), end: fmtTime(eH, eM), booked })
    h += Math.ceil(durationMin / 60)
  }
  return slots
}

export function BookingWidget() {
  const [step, setStep] = useState<Step>(1)
  const [serviceKey, setServiceKey] = useState<string>('')
  const [viewDate, setViewDate] = useState(firstOfMonth(new Date()))
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [slot, setSlot] = useState<{ start: string; end: string } | null>(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '', notes: '', gdpr: false })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const service = useMemo(() => bookableServices.find((s) => s.key === serviceKey), [serviceKey])
  const today = new Date()

  const gridDays = useMemo(() => {
    const first = firstOfMonth(viewDate)
    const total = daysInMonth(viewDate)
    const startOffset = (first.getDay() + 6) % 7
    const cells: (Date | null)[] = []
    for (let i = 0; i < startOffset; i++) cells.push(null)
    for (let d = 1; d <= total; d++) cells.push(new Date(viewDate.getFullYear(), viewDate.getMonth(), d))
    while (cells.length % 7 !== 0) cells.push(null)
    return cells
  }, [viewDate])

  const monthLabel = viewDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

  const daySlots = useMemo(() => {
    if (!selectedDate || !service) return []
    return generateSlotsForDay(selectedDate, service.durationMin)
  }, [selectedDate, service])

  const onConfirm = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    if (!form.name.trim() || !form.email.trim() || !form.gdpr) {
      setError('Please fill name, email, and accept the privacy policy.')
      return
    }
    setSubmitting(true)
    try {
      const payload = {
        service: service?.name,
        date: selectedDate?.toISOString().slice(0, 10),
        start: slot?.start,
        end: slot?.end,
        ...form,
      }
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok && res.status !== 404) throw new Error()
      setStep(5)
    } catch {
      setError('Booking service is not yet connected. For now, please email mail@bncoachinghealth.com to confirm your slot.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-[#E8E2DA]/60 shadow-[0_2px_8px_rgba(110,98,89,0.06)] overflow-hidden">
      {/* Step indicator */}
      <div className="bg-[#F5F0EB] px-6 py-4 flex items-center gap-2 flex-wrap">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="flex items-center gap-2">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold ${step >= n ? 'bg-[#9A9F7A] text-white' : 'bg-white text-[#9E9590] border border-[#D8CFC4]'}`}>
              {n}
            </div>
            {n < 4 && <div className={`w-6 h-[2px] ${step > n ? 'bg-[#9A9F7A]' : 'bg-[#D8CFC4]'}`} />}
          </div>
        ))}
        <span className="ml-3 text-[13px] font-medium text-[#7A7470]">
          {step === 1 && 'Select service'}
          {step === 2 && 'Pick a date'}
          {step === 3 && 'Choose a time'}
          {step === 4 && 'Your details'}
          {step === 5 && 'Confirmed'}
        </span>
      </div>

      <div className="p-6 md:p-8">
        {/* STEP 1 */}
        {step === 1 && (
          <div>
            <h3 className="text-[20px] font-semibold text-[#4A4A4A] mb-2">Which service would you like to book?</h3>
            <p className="text-[14px] text-[#7A7470] mb-6">Hours: Mon–Fri 09:00–18:00, Sat 10:00–14:00 (UTC+2)</p>
            <div className="grid gap-3">
              {bookableServices.map((s) => (
                <button
                  key={s.key}
                  onClick={() => { setServiceKey(s.key); setStep(2) }}
                  className="w-full text-left flex items-center gap-4 rounded-xl py-4 px-5 border border-[#E8E2DA] hover:border-[#9A9F7A] hover:bg-[#9A9F7A]/5 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#F5F0EB] flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-[#9A9F7A]" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[15px] font-medium text-[#4A4A4A]">{s.name}</p>
                    <p className="text-[13px] text-[#9E9590]">{s.durationMin} min</p>
                  </div>
                  <ArrowRight size={16} className="text-[#9A9F7A]" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && service && (
          <div>
            <button onClick={() => setStep(1)} className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#9A9F7A] hover:text-[#6E6259] uppercase tracking-[0.06em] mb-5">
              <ArrowLeft size={14} /> Back
            </button>
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-[18px] font-semibold text-[#4A4A4A]">{service.name}</h3>
              <div className="flex items-center gap-2">
                <button onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1))} className="w-9 h-9 rounded-lg border border-[#E8E2DA] hover:bg-[#F5F0EB] text-[#6E6259]"><ArrowLeft size={14} className="mx-auto" /></button>
                <span className="text-[15px] font-semibold text-[#4A4A4A] min-w-[140px] text-center">{monthLabel}</span>
                <button onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1))} className="w-9 h-9 rounded-lg border border-[#E8E2DA] hover:bg-[#F5F0EB] text-[#6E6259]"><ArrowRight size={14} className="mx-auto" /></button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1.5 mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.06em] text-[#9E9590]">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => <div key={d}>{d}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-1.5">
              {gridDays.map((d, i) => {
                if (!d) return <div key={i} />
                const isPast = d < new Date(today.getFullYear(), today.getMonth(), today.getDate())
                const isSunday = d.getDay() === 0
                const isToday = sameDay(d, today)
                const disabled = isPast || isSunday
                const bg = disabled ? '#F5F0EB' : isToday ? COLOR_TODAY : COLOR_AVAILABLE
                const color = isToday ? '#FFFFFF' : disabled ? '#9E9590' : '#4A4A4A'
                return (
                  <button
                    key={i}
                    disabled={disabled}
                    onClick={() => { setSelectedDate(d); setStep(3) }}
                    className="aspect-square rounded-lg text-[14px] font-medium disabled:cursor-not-allowed hover:ring-2 hover:ring-[#9A9F7A] transition-all"
                    style={{ backgroundColor: bg, color }}
                  >
                    {d.getDate()}
                  </button>
                )
              })}
            </div>

            <div className="mt-5 flex items-center gap-5 text-[12px] text-[#7A7470]">
              <span className="inline-flex items-center gap-2"><span className="w-3 h-3 rounded" style={{ backgroundColor: COLOR_AVAILABLE }} /> Available</span>
              <span className="inline-flex items-center gap-2"><span className="w-3 h-3 rounded" style={{ backgroundColor: COLOR_TODAY }} /> Today</span>
              <span className="inline-flex items-center gap-2"><span className="w-3 h-3 rounded" style={{ backgroundColor: COLOR_BOOKED }} /> Booked</span>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && service && selectedDate && (
          <div>
            <button onClick={() => setStep(2)} className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#9A9F7A] hover:text-[#6E6259] uppercase tracking-[0.06em] mb-5">
              <ArrowLeft size={14} /> Back
            </button>
            <h3 className="text-[18px] font-semibold text-[#4A4A4A] mb-1">
              {selectedDate.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
            </h3>
            <p className="text-[13px] text-[#9E9590] mb-6">{service.name} · {service.durationMin} min</p>

            {daySlots.length === 0 ? (
              <p className="text-[14px] text-[#7A7470]">No available slots on this day. Please choose another date.</p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {daySlots.map((s, i) => (
                  <button
                    key={i}
                    disabled={s.booked}
                    onClick={() => { setSlot({ start: s.start, end: s.end }); setStep(4) }}
                    className="py-3 px-4 rounded-lg text-[14px] font-medium transition-all disabled:cursor-not-allowed"
                    style={{
                      backgroundColor: s.booked ? COLOR_BOOKED : COLOR_AVAILABLE,
                      color: s.booked ? '#D8CFC4' : '#4A4A4A',
                      opacity: s.booked ? 0.55 : 1,
                    }}
                  >
                    {s.start} – {s.end} ({service.durationMin} Min)
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && service && selectedDate && slot && (
          <form onSubmit={onConfirm}>
            <button type="button" onClick={() => setStep(3)} className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#9A9F7A] hover:text-[#6E6259] uppercase tracking-[0.06em] mb-5">
              <ArrowLeft size={14} /> Back
            </button>
            <div className="bg-[#F5F0EB] rounded-xl p-4 mb-6">
              <p className="text-[13px] text-[#7A7470]">You're booking</p>
              <p className="text-[15px] font-semibold text-[#4A4A4A]">{service.name}</p>
              <p className="text-[13px] text-[#6E6259]">
                {selectedDate.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })} · {slot.start}–{slot.end} (UTC+2)
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-[14px] font-medium text-[#7A7470] mb-2">Name *</label>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full h-12 px-4 rounded-lg border border-[#D8CFC4] bg-[#FBFAF8] outline-none focus:border-[#9A9F7A]" />
              </div>
              <div>
                <label className="block text-[14px] font-medium text-[#7A7470] mb-2">Email *</label>
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full h-12 px-4 rounded-lg border border-[#D8CFC4] bg-[#FBFAF8] outline-none focus:border-[#9A9F7A]" />
              </div>
              <div>
                <label className="block text-[14px] font-medium text-[#7A7470] mb-2">Phone (optional)</label>
                <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full h-12 px-4 rounded-lg border border-[#D8CFC4] bg-[#FBFAF8] outline-none focus:border-[#9A9F7A]" />
              </div>
              <div>
                <label className="block text-[14px] font-medium text-[#7A7470] mb-2">Notes (optional)</label>
                <textarea rows={3} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-[#D8CFC4] bg-[#FBFAF8] outline-none focus:border-[#9A9F7A]" />
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" checked={form.gdpr} onChange={(e) => setForm({ ...form, gdpr: e.target.checked })} className="mt-1 w-4 h-4 accent-[#9A9F7A]" />
                <span className="text-[13px] leading-[1.55] text-[#7A7470]">
                  I accept the <a href="/datenschutz" className="underline text-[#6E6259] hover:text-[#9A9F7A]">privacy policy</a> and agree to be contacted about my booking. *
                </span>
              </label>
              {error && <p className="text-[14px] text-[#B94A48]">{error}</p>}
              <button type="submit" disabled={submitting} className="btn-primary w-full justify-center disabled:opacity-60">
                {submitting ? 'Booking...' : 'Termin Bestätigen'}
              </button>
            </div>
          </form>
        )}

        {/* STEP 5 */}
        {step === 5 && (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-[#9A9F7A]/15 flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 size={32} className="text-[#9A9F7A]" strokeWidth={1.5} />
            </div>
            <h3 className="text-[22px] font-semibold text-[#4A4A4A] mb-3">✅ Termin gebucht!</h3>
            <p className="text-[15px] text-[#7A7470] leading-[1.7] mb-2">
              Bestätigung wurde an {form.email || 'your email'} gesendet.
            </p>
            <p className="text-[13px] text-[#9E9590] italic mb-6">
              After booking, you'll receive a confirmation and any next-step details by email.
            </p>
            <button
              onClick={() => { setStep(1); setServiceKey(''); setSelectedDate(null); setSlot(null); setForm({ name: '', email: '', phone: '', notes: '', gdpr: false }) }}
              className="text-[13px] font-semibold text-[#9A9F7A] hover:text-[#6E6259] uppercase tracking-[0.06em]"
            >
              <Calendar size={14} className="inline mr-1" /> Book another session
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
