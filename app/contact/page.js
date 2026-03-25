'use client'

import { useState } from 'react'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const trips = ['Forbidden Tour','Steep Camp','AIARE Level 1 Course','AIARE Level 2 Course','Chamonix — French Alps','Alaska Range Ski Mo Camp','Morning Star Peak','Dorado Needle','Forbidden Peak East Ridge',"Women's Program",'Custom / Private Trip','Not Sure Yet']
const faqs = [
  { q: 'How far in advance should I book?', a: 'For popular trips like the Forbidden Tour, book 3–6 months ahead. International trips often fill 6–12 months out. Avalanche courses can sometimes be booked 2–4 weeks ahead.' },
  { q: 'What experience level do I need?', a: 'It varies by trip. Avalanche courses and some ski tours are open to beginners. Technical alpine and expedition trips require solid prior experience. Be honest about your background and we will match you to the right program.' },
  { q: 'Do you offer private / custom trips?', a: 'Absolutely. Many of our best trips are custom programs built around your specific goals, dates, and group size. Send a message and we can design something from scratch.' },
  { q: 'What is your cancellation policy?', a: '90–31 days from departure: 50% of trip cost. 30 days or less: 100% of trip cost. We strongly recommend trip cancellation insurance, required on all international programs.' },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', trip: '', level: '', dates: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const isMobile = useMediaQuery('(max-width: 768px)')

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1400))
    setSubmitted(true)
    setLoading(false)
  }

  const px = isMobile ? '20px' : '48px'
  const inputStyle = { width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 14px', color: '#fff', fontSize: 14, outline: 'none', boxSizing: 'border-box', fontFamily: "'DM Sans', sans-serif", transition: 'border-color 0.2s' }

  return (
    <div style={{ background: '#080c10', minHeight: '100vh', fontFamily: "'DM Sans', sans-serif", overflowX: 'hidden' }}>
      {/* HERO */}
      <section style={{ position: 'relative', paddingTop: 64, minHeight: isMobile ? 300 : 420, display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920&q=85" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 60%', filter: 'brightness(0.3) saturate(0.5)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(8,12,16,0.5) 0%, rgba(8,12,16,0.4) 40%, rgba(8,12,16,1) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(8,12,16,0.8) 0%, transparent 60%)' }} />
        </div>
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: `0 ${px} ${isMobile ? '48px' : '72px'}`, width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 28, height: 1, background: '#c8370a' }} />
            <span style={{ fontFamily: 'monospace', color: '#c8370a', fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase' }}>Get in Touch</span>
          </div>
          <h1 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: isMobile ? 'clamp(48px,12vw,72px)' : 'clamp(64px,8vw,120px)', color: '#fff', letterSpacing: '0.02em', lineHeight: 0.88, margin: '0 0 16px' }}>
            LET'S PLAN<br /><span style={{ color: '#c8370a' }}>YOUR TRIP.</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: isMobile ? 14 : 15, lineHeight: 1.75, maxWidth: 420, margin: 0 }}>Ian and Matt personally respond to every message. Tell us what you're dreaming of.</p>
        </div>
      </section>

      {/* MAIN */}
      <section style={{ background: '#080c10', padding: `${isMobile ? '56px' : '80px'} 0 ${isMobile ? '72px' : '120px'}` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: `0 ${px}`, display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.6fr', gap: isMobile ? 48 : 80 }}>

          {/* Left info */}
          <div>
            <div style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c8370a', marginBottom: 20 }}>Direct Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 36 }}>
              {[
                { icon: '☎', label: 'Phone', val: '(206) 799-4092', href: 'tel:2067994092' },
                { icon: '✉', label: 'Email', val: 'info@bcadventureguides.com', href: 'mailto:info@bcadventureguides.com' },
                { icon: '◎', label: 'Based in', val: 'Seattle, WA', href: null },
                { icon: '◷', label: 'Response', val: 'Within 24 hours', href: null },
              ].map(item => (
                <div key={item.label} style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 34, height: 34, background: 'rgba(200,55,10,0.1)', border: '1px solid rgba(200,55,10,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 14, color: '#c8370a' }}>{item.icon}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: 'monospace', fontSize: 7.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 2 }}>{item.label}</div>
                    {item.href
                      ? <a href={item.href} style={{ color: '#fff', fontSize: 13, fontWeight: 500, textDecoration: 'none', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.val}</a>
                      : <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13 }}>{item.val}</div>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: 'rgba(200,55,10,0.07)', border: '1px solid rgba(200,55,10,0.2)', padding: '24px 20px', marginBottom: 32 }}>
              <div style={{ fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c8370a', marginBottom: 10 }}>A Note from the Guides</div>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13.5, lineHeight: 1.8, fontStyle: 'italic', margin: '0 0 12px' }}>"We love talking about trips. Whether you're ready to book or just starting to dream — reach out. No sales pitch, just a conversation."</p>
              <div style={{ fontFamily: 'monospace', fontSize: 8.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#c8370a' }}>— Ian & Matt, IFMGA Guides</div>
            </div>

            <div style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c8370a', marginBottom: 16 }}>Common Questions</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', background: 'none', border: 'none', padding: '14px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, cursor: 'pointer', textAlign: 'left' }}>
                    <span style={{ color: '#fff', fontSize: 13, fontWeight: 500, lineHeight: 1.4 }}>{faq.q}</span>
                    <span style={{ color: '#c8370a', fontSize: 18, lineHeight: 1, flexShrink: 0, transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.25s' }}>+</span>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 18px 16px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                      <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, lineHeight: 1.75, margin: '12px 0 0' }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div>
            {submitted ? (
              <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(200,55,10,0.3)', padding: '60px 32px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 400 }}>
                <div style={{ width: 56, height: 56, border: '2px solid #c8370a', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, fontSize: 24, color: '#c8370a' }}>✓</div>
                <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 42, color: '#fff', letterSpacing: '0.03em', margin: '0 0 12px' }}>MESSAGE SENT!</h3>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, lineHeight: 1.75, maxWidth: 320, margin: '0 0 28px' }}>Ian or Matt will personally reply within 24 hours.</p>
                <a href="/trips" style={{ background: '#c8370a', color: '#fff', padding: '12px 28px', fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none' }}>Browse Trips</a>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', padding: isMobile ? '28px 20px' : '44px 40px' }}>
                  <div style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 28 }}>Send a Message</div>

                  <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 14, marginBottom: 14 }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 7 }}>Full Name <span style={{ color: '#c8370a' }}>*</span></label>
                      <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Jane Smith" style={inputStyle} onFocus={e => e.target.style.borderColor = '#c8370a'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 7 }}>Email <span style={{ color: '#c8370a' }}>*</span></label>
                      <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="jane@email.com" style={inputStyle} onFocus={e => e.target.style.borderColor = '#c8370a'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 14, marginBottom: 14 }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 7 }}>Phone</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="(206) 555-0100" style={inputStyle} onFocus={e => e.target.style.borderColor = '#c8370a'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 7 }}>Interested Trip</label>
                      <select name="trip" value={form.trip} onChange={handleChange} style={{ ...inputStyle, background: '#0d1117', cursor: 'pointer', appearance: 'none' }} onFocus={e => e.target.style.borderColor = '#c8370a'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}>
                        <option value="">Select a trip...</option>
                        {trips.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div style={{ marginBottom: 14 }}>
                    <label style={{ display: 'block', fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 10 }}>Experience Level</label>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {['Beginner', 'Intermediate', 'Advanced', 'Expert'].map(level => (
                        <button key={level} type="button" onClick={() => setForm({ ...form, level })}
                          style={{ background: form.level === level ? '#c8370a' : 'rgba(255,255,255,0.04)', border: `1px solid ${form.level === level ? '#c8370a' : 'rgba(255,255,255,0.1)'}`, color: form.level === level ? '#fff' : 'rgba(255,255,255,0.45)', padding: '8px 16px', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', fontWeight: 600, transition: 'all 0.2s', fontFamily: "'DM Sans', sans-serif" }}
                        >{level}</button>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginBottom: 14 }}>
                    <label style={{ display: 'block', fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 7 }}>Preferred Dates</label>
                    <input type="text" name="dates" value={form.dates} onChange={handleChange} placeholder="e.g. April 2026, flexible..." style={inputStyle} onFocus={e => e.target.style.borderColor = '#c8370a'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                  </div>

                  <div style={{ marginBottom: 24 }}>
                    <label style={{ display: 'block', fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 7 }}>Message <span style={{ color: '#c8370a' }}>*</span></label>
                    <textarea name="message" required value={form.message} onChange={handleChange} rows={5} placeholder="Tell us about your experience, goals, and any questions..." style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.7 }} onFocus={e => e.target.style.borderColor = '#c8370a'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                  </div>

                  <button type="submit" disabled={loading} style={{ width: '100%', background: loading ? 'rgba(200,55,10,0.6)' : '#c8370a', color: '#fff', padding: '15px', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', transition: 'background 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, fontFamily: "'DM Sans', sans-serif" }}>
                    {loading ? 'Sending...' : 'Send Message →'}
                  </button>
                  <p style={{ fontFamily: 'monospace', fontSize: 9.5, color: 'rgba(255,255,255,0.2)', textAlign: 'center', marginTop: 14, letterSpacing: '0.06em' }}>Urgent? Call (206) 799-4092</p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`@keyframes spin { to { transform: rotate(360deg) } } input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.2) !important; } select option { background: #0d1117; }`}</style>
    </div>
  )
}