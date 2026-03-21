'use client'

import { useState } from 'react'

const trips = [
  'Forbidden Tour',
  'Steep Camp',
  'AIARE Level 1 Course',
  'AIARE Level 2 Course',
  'Chamonix — French Alps',
  'Alaska Range Ski Mo Camp',
  'Morning Star Peak',
  'Dorado Needle',
  'Forbidden Peak East Ridge',
  "Women's Program",
  'Custom / Private Trip',
  'Not Sure Yet',
]

const faqs = [
  {
    q: 'How far in advance should I book?',
    a: 'For popular trips like the Forbidden Tour, we recommend booking 3–6 months ahead. International trips like Chamonix often fill 6–12 months out. Avalanche courses and single-day climbs can sometimes be booked 2–4 weeks ahead.',
  },
  {
    q: 'What experience level do I need?',
    a: 'It varies by trip. Our avalanche courses and some ski tours are open to beginners. Technical alpine and expedition trips require solid prior experience. When you contact us, be honest about your background and we will match you to the right program.',
  },
  {
    q: 'Do you offer private / custom trips?',
    a: 'Absolutely. Many of our best trips are custom programs built around your specific goals, dates, and group size. Call us or send a message and we can design something from scratch.',
  },
  {
    q: 'What is your cancellation policy?',
    a: '90–31 days from departure: 50% of trip cost. 30 days or less: 100% of trip cost. We strongly recommend trip cancellation insurance, which we require on all international programs.',
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', trip: '', level: '', dates: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1400))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <div style={{ background: '#080c10', minHeight: '100vh', fontFamily: "'DM Sans', sans-serif", overflowX: 'hidden' }}>

      {/* ─── NAVBAR ─── */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: '#080c10', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none' }}>
            <div style={{ width: 34, height: 34, background: '#c8370a', display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(0 0, 100% 0, 100% 72%, 72% 100%, 0 100%)' }}>
              <span style={{ fontFamily: "'Bebas Neue',sans-serif", color: '#fff', fontSize: 13, letterSpacing: 1 }}>BC</span>
            </div>
            <div>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", color: '#fff', fontSize: 15, letterSpacing: '0.15em', lineHeight: 1 }}>ADVENTURE GUIDES</div>
              <div style={{ fontFamily: 'monospace', color: 'rgba(255,255,255,0.28)', fontSize: 7.5, letterSpacing: '0.22em', textTransform: 'uppercase' }}>IFMGA · AMGA Certified</div>
            </div>
          </a>
          <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            {[['Ski & Board', '/trips'], ['Alpine', '/trips'], ['Rock', '/trips'], ['Avalanche', '/trips'], ['About', '/about']].map(([label, href]) => (
              <a key={label} href={href} style={{ color: 'rgba(255,255,255,0.45)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
              >{label}</a>
            ))}
            <a href="/contact" style={{ background: '#c8370a', color: '#fff', padding: '8px 22px', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600 }}>Contact</a>
          </nav>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section style={{ position: 'relative', paddingTop: 72, minHeight: 420, display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        {/* Background */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <img
            src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920&q=85"
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 60%', filter: 'brightness(0.3) saturate(0.5)' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(8,12,16,0.6) 0%, rgba(8,12,16,0.4) 40%, rgba(8,12,16,1) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(8,12,16,0.8) 0%, transparent 60%)' }} />
          {/* Grain */}
          <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat', backgroundSize: '128px' }} />
        </div>

        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '0 48px 80px', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
            <div style={{ width: 32, height: 1, background: '#c8370a' }} />
            <span style={{ fontFamily: 'monospace', color: '#c8370a', fontSize: 9.5, letterSpacing: '0.25em', textTransform: 'uppercase' }}>Get in Touch</span>
          </div>
          <h1 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(64px, 8vw, 120px)', color: '#fff', letterSpacing: '0.02em', lineHeight: 0.88, margin: '0 0 20px' }}>
            LET'S PLAN<br />
            <span style={{ color: '#c8370a' }}>YOUR TRIP.</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15.5, lineHeight: 1.75, maxWidth: 460, margin: 0 }}>
            Ian and Matt personally respond to every message. Tell us what you're dreaming of — we'll help you get there.
          </p>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─── */}
      <section style={{ background: '#080c10', padding: '80px 0 120px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px', display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80 }}>

          {/* ── LEFT: Info panel ── */}
          <div>
            {/* Contact details */}
            <div style={{ marginBottom: 48 }}>
              <div style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c8370a', marginBottom: 24 }}>Direct Contact</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {[
                  { icon: '☎', label: 'Phone', val: '(206) 799-4092', href: 'tel:2067994092' },
                  { icon: '✉', label: 'Email', val: 'info@bcadventureguides.com', href: 'mailto:info@bcadventureguides.com' },
                  { icon: '◎', label: 'Based in', val: 'Seattle, WA', href: null },
                  { icon: '◷', label: 'Response', val: 'Within 24 hours', href: null },
                ].map(item => (
                  <div key={item.label} style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 16, transition: 'border-color 0.25s' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(200,55,10,0.35)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
                  >
                    <div style={{ width: 36, height: 36, background: 'rgba(200,55,10,0.1)', border: '1px solid rgba(200,55,10,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 14, color: '#c8370a' }}>{item.icon}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 3 }}>{item.label}</div>
                      {item.href
                        ? <a href={item.href} style={{ color: '#fff', fontSize: 13.5, fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                            onMouseEnter={e => e.target.style.color = '#c8370a'}
                            onMouseLeave={e => e.target.style.color = '#fff'}
                          >{item.val}</a>
                        : <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13.5 }}>{item.val}</div>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Guide note */}
            <div style={{ background: 'rgba(200,55,10,0.07)', border: '1px solid rgba(200,55,10,0.2)', padding: '28px 24px', marginBottom: 48 }}>
              <div style={{ fontFamily: 'monospace', fontSize: 8.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c8370a', marginBottom: 12 }}>A Note from the Guides</div>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.8, fontStyle: 'italic', margin: '0 0 14px' }}>
                "We love talking about trips. Whether you're ready to book or just starting to dream — reach out. There's no sales pitch, just a conversation about the mountains."
              </p>
              <div style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#c8370a' }}>— Ian & Matt, IFMGA Guides</div>
            </div>

            {/* FAQ */}
            <div>
              <div style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c8370a', marginBottom: 20 }}>Common Questions</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {faqs.map((faq, i) => (
                  <div key={i} style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden', transition: 'border-color 0.25s' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{ width: '100%', background: 'none', border: 'none', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, cursor: 'pointer', textAlign: 'left' }}
                    >
                      <span style={{ color: '#fff', fontSize: 13, fontWeight: 500, lineHeight: 1.4 }}>{faq.q}</span>
                      <span style={{ color: '#c8370a', fontSize: 18, lineHeight: 1, flexShrink: 0, transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.25s' }}>+</span>
                    </button>
                    {openFaq === i && (
                      <div style={{ padding: '0 20px 18px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, lineHeight: 1.75, margin: '14px 0 0' }}>{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div>
            {submitted ? (
              <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(200,55,10,0.3)', padding: '80px 48px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                {/* Checkmark */}
                <div style={{ width: 64, height: 64, border: '2px solid #c8370a', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 28, fontSize: 28, color: '#c8370a' }}>✓</div>
                <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 48, color: '#fff', letterSpacing: '0.03em', margin: '0 0 14px' }}>MESSAGE SENT!</h3>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 15, lineHeight: 1.75, maxWidth: 360, margin: '0 0 32px' }}>
                  Ian or Matt will personally reply within 24 hours. In the meantime, browse our current trips.
                </p>
                <a href="/trips" style={{ background: '#c8370a', color: '#fff', padding: '13px 32px', fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none', transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#e04010'}
                  onMouseLeave={e => e.currentTarget.style.background = '#c8370a'}
                >Browse Trips</a>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', padding: '48px 44px' }}>
                  <div style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 32 }}>Send a Message</div>

                  {/* Name + Email */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    {[
                      { name: 'name', label: 'Full Name', placeholder: 'Jane Smith', type: 'text', required: true },
                      { name: 'email', label: 'Email Address', placeholder: 'jane@email.com', type: 'email', required: true },
                    ].map(f => (
                      <div key={f.name}>
                        <label style={{ display: 'block', fontFamily: 'monospace', fontSize: 8.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 8 }}>
                          {f.label} {f.required && <span style={{ color: '#c8370a' }}>*</span>}
                        </label>
                        <input
                          type={f.type} name={f.name} required={f.required}
                          value={form[f.name]} onChange={handleChange}
                          placeholder={f.placeholder}
                          style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 14px', color: '#fff', fontSize: 13.5, outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box', fontFamily: "'DM Sans', sans-serif" }}
                          onFocus={e => e.target.style.borderColor = '#c8370a'}
                          onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Phone + Trip */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'monospace', fontSize: 8.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 8 }}>Phone</label>
                      <input
                        type="tel" name="phone"
                        value={form.phone} onChange={handleChange}
                        placeholder="(206) 555-0100"
                        style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 14px', color: '#fff', fontSize: 13.5, outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box', fontFamily: "'DM Sans', sans-serif" }}
                        onFocus={e => e.target.style.borderColor = '#c8370a'}
                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'monospace', fontSize: 8.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 8 }}>Interested Trip</label>
                      <select
                        name="trip" value={form.trip} onChange={handleChange}
                        style={{ width: '100%', background: '#0d1117', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 14px', color: form.trip ? '#fff' : 'rgba(255,255,255,0.3)', fontSize: 13.5, outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box', fontFamily: "'DM Sans', sans-serif", cursor: 'pointer', appearance: 'none' }}
                        onFocus={e => e.target.style.borderColor = '#c8370a'}
                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                      >
                        <option value="" disabled>Select a trip...</option>
                        {trips.map(t => <option key={t} value={t} style={{ background: '#0d1117', color: '#fff' }}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Experience level */}
                  <div style={{ marginBottom: 16 }}>
                    <label style={{ display: 'block', fontFamily: 'monospace', fontSize: 8.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 12 }}>Your Experience Level</label>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {['Beginner', 'Intermediate', 'Advanced', 'Expert'].map(level => (
                        <button
                          key={level} type="button"
                          onClick={() => setForm({ ...form, level })}
                          style={{ background: form.level === level ? '#c8370a' : 'rgba(255,255,255,0.04)', border: `1px solid ${form.level === level ? '#c8370a' : 'rgba(255,255,255,0.1)'}`, color: form.level === level ? '#fff' : 'rgba(255,255,255,0.45)', padding: '9px 18px', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer', fontWeight: 600, transition: 'all 0.2s', fontFamily: "'DM Sans', sans-serif" }}
                        >{level}</button>
                      ))}
                    </div>
                  </div>

                  {/* Preferred dates */}
                  <div style={{ marginBottom: 16 }}>
                    <label style={{ display: 'block', fontFamily: 'monospace', fontSize: 8.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 8 }}>Preferred Dates</label>
                    <input
                      type="text" name="dates"
                      value={form.dates} onChange={handleChange}
                      placeholder="e.g. April 2026, summer 2026, flexible..."
                      style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 14px', color: '#fff', fontSize: 13.5, outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box', fontFamily: "'DM Sans', sans-serif" }}
                      onFocus={e => e.target.style.borderColor = '#c8370a'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    />
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: 28 }}>
                    <label style={{ display: 'block', fontFamily: 'monospace', fontSize: 8.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 8 }}>
                      Your Message <span style={{ color: '#c8370a' }}>*</span>
                    </label>
                    <textarea
                      name="message" required
                      value={form.message} onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your experience, goals, who's coming, any questions..."
                      style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 14px', color: '#fff', fontSize: 13.5, outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box', fontFamily: "'DM Sans', sans-serif", resize: 'vertical', lineHeight: 1.7 }}
                      onFocus={e => e.target.style.borderColor = '#c8370a'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit" disabled={loading}
                    style={{ width: '100%', background: loading ? 'rgba(200,55,10,0.6)' : '#c8370a', color: '#fff', padding: '16px', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', transition: 'background 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, fontFamily: "'DM Sans', sans-serif" }}
                    onMouseEnter={e => { if (!loading) e.currentTarget.style.background = '#e04010' }}
                    onMouseLeave={e => { if (!loading) e.currentTarget.style.background = '#c8370a' }}
                  >
                    {loading ? (
                      <>
                        <span style={{ display: 'inline-block', width: 14, height: 14, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="16" height="10" viewBox="0 0 16 10" fill="none"><path d="M1 5h14M10 1.5l4.5 3.5L10 8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </>
                    )}
                  </button>

                  <p style={{ fontFamily: 'monospace', fontSize: 9.5, color: 'rgba(255,255,255,0.2)', textAlign: 'center', marginTop: 16, letterSpacing: '0.06em' }}>
                    Urgent? Call us directly at (206) 799-4092
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <section style={{ background: '#c8370a', padding: '16px 0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', animation: 'marquee 22s linear infinite', whiteSpace: 'nowrap', width: 'max-content' }}>
          {[...Array(4)].map((_, r) =>
            ['North Cascades', 'Alaska Range', 'French Alps', 'Swiss Alps', 'Patagonia', 'Ecuador', 'Japan', 'Rogers Pass'].map(d => (
              <span key={`${d}-${r}`} style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 18, color: 'rgba(255,255,255,0.88)', letterSpacing: '0.15em', marginRight: 44 }}>
                {d} <span style={{ color: 'rgba(255,255,255,0.35)', marginRight: 44 }}>·</span>
              </span>
            ))
          )}
        </div>
        <style>{`
          @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-25%) } }
          @keyframes spin { to { transform: rotate(360deg) } }
          input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.2); }
          select option { background: #0d1117; color: #fff; }
        `}</style>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ background: '#0d1117', borderTop: '1px solid rgba(255,255,255,0.04)', padding: '56px 48px 36px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 72, alignItems: 'start', marginBottom: 44 }}>
            <div>
              <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, textDecoration: 'none' }}>
                <div style={{ width: 30, height: 30, background: '#c8370a', display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(0 0, 100% 0, 100% 72%, 72% 100%, 0 100%)' }}>
                  <span style={{ fontFamily: "'Bebas Neue',sans-serif", color: '#fff', fontSize: 11 }}>BC</span>
                </div>
                <span style={{ fontFamily: "'Bebas Neue',sans-serif", color: '#fff', fontSize: 13, letterSpacing: '0.15em' }}>ADVENTURE GUIDES</span>
              </a>
              <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: 11, lineHeight: 1.75, maxWidth: 220 }}>IFMGA/AMGA Mountain Guides. Seattle, WA.</p>
              <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 7 }}>
                <a href="tel:2067994092" style={{ color: 'rgba(255,255,255,0.28)', fontSize: 11, fontFamily: 'monospace', textDecoration: 'none', letterSpacing: '0.06em' }}>(206) 799-4092</a>
                <a href="mailto:info@bcadventureguides.com" style={{ color: 'rgba(255,255,255,0.28)', fontSize: 11, fontFamily: 'monospace', textDecoration: 'none', letterSpacing: '0.05em' }}>info@bcadventureguides.com</a>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
              {[
                { title: 'Trips', links: ['Ski & Splitboard', 'Alpine Climbing', 'Rock Climbing', 'Avalanche Courses', "Women's Programs"] },
                { title: 'Company', links: ['About BCAG', 'Our Guides', 'Testimonials', 'Partners', 'Contact'] },
                { title: 'Resources', links: ['Trip Policy', 'Gear Lists', 'Rentals', 'Calendar', 'Blog'] },
              ].map(col => (
                <div key={col.title}>
                  <div style={{ fontFamily: 'monospace', fontSize: 8.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: 14 }}>{col.title}</div>
                  {col.links.map(link => (
                    <a key={link} href="/trips" style={{ display: 'block', color: 'rgba(255,255,255,0.35)', fontSize: 12.5, textDecoration: 'none', marginBottom: 9, transition: 'color 0.2s' }}
                      onMouseEnter={e => e.target.style.color = '#fff'}
                      onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.35)'}
                    >{link}</a>
                  ))}
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontFamily: 'monospace', fontSize: 8.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: 12 }}>Certified</div>
              {['IFMGA', 'AMGA', 'USFS'].map(b => (
                <div key={b} style={{ border: '1px solid rgba(255,255,255,0.09)', padding: '7px 14px', marginBottom: 6, display: 'block', width: 'fit-content' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: 8.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 20, display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: 'monospace', fontSize: 10, color: 'rgba(255,255,255,0.14)', letterSpacing: '0.1em' }}>© {new Date().getFullYear()} BC Adventure Guides</span>
            <span style={{ fontFamily: 'monospace', fontSize: 10, color: 'rgba(255,255,255,0.14)', letterSpacing: '0.1em' }}>Images © Pablo Puruncajas</span>
          </div>
        </div>
      </footer>

    </div>
  )
}