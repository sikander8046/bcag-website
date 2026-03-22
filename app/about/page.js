'use client'

import { useState, useEffect } from 'react'
import MobileNav from '@/components/MobileNav'

const guides = [
  {
    name: 'Ian Nicholson',
    title: 'IFMGA / AMGA Mountain Guide',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=85',
    years: 20,
    bio: 'Ian has spent over two decades guiding in the Cascades, Alps, Andes, and ranges across the globe. He holds the highest international guiding certification (IFMGA) and has authored guidebooks to the region. He trains new guides through the AMGA and has pioneered first ascents throughout the North Cascades.',
    certs: ['IFMGA', 'AMGA Rock', 'AMGA Alpine', 'AMGA Ski', 'WFR'],
    highlights: ['First ascents in the North Cascades', 'AMGA Guide Trainer & Examiner', 'Published guidebook author', 'IFMGA Board representative'],
  },
  {
    name: 'Matt Schonwald',
    title: 'IFMGA / AMGA Mountain Guide',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=85',
    years: 18,
    bio: 'Matt brings 18 years of high-altitude experience across four continents. A passionate educator, he trains guides through the AMGA and has led expeditions from Patagonia to the Himalayas. His deep knowledge of avalanche terrain makes him one of the most sought-after guides in the Pacific Northwest.',
    certs: ['IFMGA', 'AMGA Ski', 'AMGA Alpine', 'AIARE Pro', 'WFR'],
    highlights: ['Himalayan expedition leader', 'AMGA Ski Examiner', 'Avalanche curriculum developer', 'Cascade Range specialist'],
  },
]

const testimonials = [
  { name: 'Sarah K.', loc: 'Seattle, WA', trip: 'Forbidden Tour', quote: "The single best week of my life. Ian made an incredibly demanding route feel achievable. The views from Eldorado's summit brought me to tears." },
  { name: 'Marcus T.', loc: 'Portland, OR', trip: 'AIARE Level 1', quote: "Matt is an exceptional educator. This course changed how I think about backcountry travel entirely. Worth every penny." },
  { name: 'Julia R.', loc: 'Denver, CO', trip: 'Chamonix Alps', quote: "Summiting in the French Alps with BCAG was a bucket list moment. Their expertise made it both safe and deeply memorable." },
  { name: 'David L.', loc: 'San Francisco, CA', trip: 'Steep Camp', quote: "I've skied with many guides. BCAG operates at a completely different level — technically, educationally, in every way." },
]

export default function AboutPage() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const px = isMobile ? '20px' : '48px'
  const py = isMobile ? '72px' : '120px'

  return (
    <div style={{ background: '#080c10', minHeight: '100vh', fontFamily: "'DM Sans', sans-serif", overflowX: 'hidden' }}>
      <MobileNav activePage="About" />

      {/* HERO */}
      <section style={{ position: 'relative', height: isMobile ? '50vh' : '65vh', minHeight: isMobile ? 360 : 500, overflow: 'hidden', paddingTop: 64 }}>
        <img src="https://images.unsplash.com/photo-1516592673884-4a382d1124c2?w=1920&q=90" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%', position: 'absolute', inset: 0 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(8,12,16,0.5) 0%, rgba(8,12,16,0.2) 40%, rgba(8,12,16,0.85) 85%, rgba(8,12,16,1) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(8,12,16,0.7) 0%, transparent 60%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: `0 ${px} ${isMobile ? '40px' : '72px'}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
            <div style={{ width: 28, height: 1, background: '#c8370a' }} />
            <span style={{ fontFamily: 'monospace', color: '#c8370a', fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase' }}>Who We Are</span>
          </div>
          <h1 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: isMobile ? 'clamp(48px,12vw,72px)' : 'clamp(64px,8vw,120px)', color: '#fff', letterSpacing: '0.02em', lineHeight: 0.88, margin: 0 }}>
            ABOUT<br />
            <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.25)', color: 'transparent' }}>BC ADVENTURE</span><br />
            <span style={{ color: '#c8370a' }}>GUIDES.</span>
          </h1>
        </div>
      </section>

      {/* MISSION */}
      <section style={{ background: '#080c10', padding: `${py} 0` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: `0 ${px}`, display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 48 : 96, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <div style={{ width: 28, height: 1, background: '#c8370a' }} />
              <span style={{ fontFamily: 'monospace', color: '#c8370a', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase' }}>Our Mission</span>
            </div>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: isMobile ? 48 : 68, color: '#fff', letterSpacing: '0.02em', lineHeight: 0.9, margin: '0 0 22px' }}>
              FORGING<br />CONNECTIONS<br /><span style={{ color: '#c8370a' }}>IN THE MOUNTAINS.</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>BC Adventure Guides offers the experience of a lifetime to those who want to broaden their horizons through new challenges, cultures, and exotic places.</p>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 14, lineHeight: 1.8, marginBottom: 36 }}>Ski Ecuador's tropical glaciers or climb the Matterhorn in the Swiss Alps. Our guides are here to help you check those bucket list items sooner than you thought possible.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
              {[['20+','Years'],['IFMGA','Certified'],['500+','Clients'],['4','Continents']].map(([val,label]) => (
                <div key={label} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', padding: '18px 16px', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 34, color: '#fff', letterSpacing: '0.05em', lineHeight: 1 }}>{val}</div>
                  <div style={{ fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginTop: 5 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative', height: isMobile ? 280 : 520 }}>
            <img src="https://images.unsplash.com/photo-1502126324834-38f8e02d7160?w=800&q=85" alt="" style={{ position: 'absolute', top: 0, left: 0, width: isMobile ? '100%' : '80%', height: isMobile ? '100%' : '70%', objectFit: 'cover' }} />
            {!isMobile && <img src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&q=85" alt="" style={{ position: 'absolute', bottom: 0, right: 0, width: '65%', height: '55%', objectFit: 'cover', border: '4px solid #080c10' }} />}
            {!isMobile && (
              <div style={{ position: 'absolute', bottom: '55%', left: '78%', transform: 'translate(-50%, 50%)', background: '#c8370a', padding: '14px 18px', zIndex: 10 }}>
                <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 24, color: '#fff', letterSpacing: '0.08em', lineHeight: 1 }}>IFMGA</div>
                <div style={{ fontFamily: 'monospace', fontSize: 7.5, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: 3 }}>Certified</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ background: '#0d1117', padding: `${py} 0` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: `0 ${px}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            <div style={{ width: 28, height: 1, background: '#c8370a' }} />
            <span style={{ fontFamily: 'monospace', color: '#c8370a', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase' }}>What Drives Us</span>
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: isMobile ? 48 : 68, color: '#fff', letterSpacing: '0.02em', lineHeight: 0.9, margin: '0 0 48px' }}>OUR <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)', color: 'transparent' }}>VALUES.</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: 2 }}>
            {[
              { num: '01', title: 'Authenticity', body: 'Your adventure is something you help create. We make you an integral part of the experience.' },
              { num: '02', title: 'Safety', body: 'Conservative decision-making and WFR certified guides on every single trip, no exceptions.' },
              { num: '03', title: 'Environment', body: 'Small groups minimize impact. Leave No Trace principles guide every expedition we lead.' },
              { num: '04', title: 'Excellence', body: 'IFMGA certification — the highest guiding standard. We never stop learning or improving.' },
            ].map(v => (
              <div key={v.num} style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', padding: isMobile ? '24px 18px' : '36px 28px' }}>
                <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: isMobile ? 36 : 52, color: 'rgba(200,55,10,0.2)', lineHeight: 1, marginBottom: 14 }}>{v.num}</div>
                <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: isMobile ? 22 : 28, color: '#fff', letterSpacing: '0.05em', margin: '0 0 10px' }}>{v.title.toUpperCase()}</h3>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: isMobile ? 12 : 13, lineHeight: 1.7, margin: 0 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUIDES */}
      <section id="guides" style={{ background: '#080c10', padding: `${py} 0` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: `0 ${px}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            <div style={{ width: 28, height: 1, background: '#c8370a' }} />
            <span style={{ fontFamily: 'monospace', color: '#c8370a', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase' }}>The Team</span>
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: isMobile ? 48 : 68, color: '#fff', letterSpacing: '0.02em', lineHeight: 0.9, margin: `0 0 ${isMobile ? '40px' : '64px'}` }}>MEET YOUR <span style={{ color: '#c8370a' }}>GUIDES.</span></h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {guides.map((guide, i) => (
              <div key={guide.name} style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', minHeight: isMobile ? 'auto' : 520 }}>
                <div style={{ position: 'relative', overflow: 'hidden', height: isMobile ? 280 : 'auto', order: isMobile ? 1 : (i % 2 === 0 ? 1 : 2) }}>
                  <img src={guide.image} alt={guide.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', filter: 'grayscale(15%) contrast(1.05)' }} />
                  <div style={{ position: 'absolute', inset: 0, background: isMobile ? 'linear-gradient(180deg, transparent 50%, rgba(8,12,16,0.9) 100%)' : (i % 2 === 0 ? 'linear-gradient(90deg, transparent 60%, rgba(13,17,23,1) 100%)' : 'linear-gradient(270deg, transparent 60%, rgba(13,17,23,1) 100%)') }} />
                  <div style={{ position: 'absolute', top: 20, left: i % 2 === 0 ? 20 : 'auto', right: i % 2 !== 0 ? 20 : 'auto', background: 'rgba(8,12,16,0.85)', border: '1px solid rgba(255,255,255,0.1)', padding: '10px 14px', backdropFilter: 'blur(8px)' }}>
                    <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 26, color: '#c8370a', lineHeight: 1 }}>{guide.years}+</div>
                    <div style={{ fontFamily: 'monospace', fontSize: 7, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Years</div>
                  </div>
                </div>
                <div style={{ background: '#0d1117', padding: isMobile ? '28px 20px' : '48px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center', order: isMobile ? 2 : (i % 2 === 0 ? 2 : 1) }}>
                  <div style={{ fontFamily: 'monospace', fontSize: 8.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c8370a', marginBottom: 10 }}>{guide.title}</div>
                  <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: isMobile ? 40 : 52, color: '#fff', letterSpacing: '0.03em', lineHeight: 0.9, margin: '0 0 18px' }}>{guide.name.toUpperCase()}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.8, marginBottom: 24, maxWidth: 400 }}>{guide.bio}</p>
                  <div style={{ marginBottom: 20 }}>
                    <div style={{ fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', marginBottom: 10 }}>Certifications</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {guide.certs.map(c => <span key={c} style={{ fontFamily: 'monospace', fontSize: 8.5, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '4px 10px', border: '1px solid rgba(200,55,10,0.4)', color: 'rgba(200,55,10,0.85)' }}>{c}</span>)}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', marginBottom: 10 }}>Highlights</div>
                    {guide.highlights.map(h => (
                      <div key={h} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 7 }}>
                        <div style={{ width: 4, height: 4, background: '#c8370a', flexShrink: 0, borderRadius: '50%' }} />
                        <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" style={{ background: '#0d1117', padding: `${py} 0` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: `0 ${px}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <div style={{ width: 28, height: 1, background: '#c8370a' }} />
            <span style={{ fontFamily: 'monospace', color: '#c8370a', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase' }}>Client Stories</span>
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: isMobile ? 48 : 68, color: '#fff', letterSpacing: '0.02em', lineHeight: 0.9, margin: `0 0 ${isMobile ? '36px' : '52px'}` }}>WHAT THEY <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)', color: 'transparent' }}>SAY.</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 2 }}>
            {testimonials.map(t => (
              <div key={t.name} style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', padding: isMobile ? '28px 22px' : '40px 36px' }}>
                <div style={{ display: 'flex', gap: 2, marginBottom: 16 }}>{[...Array(5)].map((_,i) => <span key={i} style={{ color: '#c8370a', fontSize: 12 }}>★</span>)}</div>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: isMobile ? 14 : 15, lineHeight: 1.8, marginBottom: 22, fontStyle: 'italic' }}>"{t.quote}"</p>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 18, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
                  <div>
                    <div style={{ color: '#fff', fontWeight: 600, fontSize: 13 }}>{t.name}</div>
                    <div style={{ fontFamily: 'monospace', fontSize: 8.5, color: 'rgba(255,255,255,0.25)', marginTop: 3 }}>{t.loc}</div>
                  </div>
                  <div style={{ fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c8370a', padding: '4px 10px', border: '1px solid rgba(200,55,10,0.3)' }}>{t.trip}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#c8370a', padding: `${isMobile ? '72px' : '100px'} ${px}`, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.07, backgroundImage: 'repeating-linear-gradient(-45deg, rgba(255,255,255,0.6) 0, rgba(255,255,255,0.6) 1px, transparent 0, transparent 50%)', backgroundSize: '28px 28px' }} />
        <div style={{ position: 'relative' }}>
          <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: isMobile ? 'clamp(40px,10vw,64px)' : 'clamp(52px,6vw,96px)', color: '#fff', letterSpacing: '0.02em', lineHeight: 0.9, margin: '0 0 16px' }}>READY TO CLIMB WITH US?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: 1.7, maxWidth: 400, margin: '0 auto 32px' }}>Browse our trips or reach out directly. Ian and Matt personally reply to every inquiry.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            <a href="/trips" style={{ background: '#fff', color: '#c8370a', padding: '13px 32px', fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none' }}>Browse All Trips</a>
            <a href="/contact" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.5)', color: '#fff', padding: '13px 32px', fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none' }}>Get in Touch</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#0d1117', borderTop: '1px solid rgba(255,255,255,0.04)', padding: `48px ${px} 32px` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'auto 1fr auto', gap: isMobile ? 32 : 72, marginBottom: 36 }}>
            <div>
              <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, textDecoration: 'none' }}>
                <div style={{ width: 28, height: 28, background: '#c8370a', display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(0 0, 100% 0, 100% 72%, 72% 100%, 0 100%)' }}><span style={{ fontFamily: "'Bebas Neue',sans-serif", color: '#fff', fontSize: 11 }}>BC</span></div>
                <span style={{ fontFamily: "'Bebas Neue',sans-serif", color: '#fff', fontSize: 13, letterSpacing: '0.15em' }}>ADVENTURE GUIDES</span>
              </a>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <a href="tel:2067994092" style={{ color: 'rgba(255,255,255,0.28)', fontSize: 11, fontFamily: 'monospace', textDecoration: 'none' }}>(206) 799-4092</a>
                <a href="mailto:info@bcadventureguides.com" style={{ color: 'rgba(255,255,255,0.28)', fontSize: 11, fontFamily: 'monospace', textDecoration: 'none' }}>info@bcadventureguides.com</a>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(3,1fr)', gap: isMobile ? 24 : 40 }}>
              {[{title:'Trips',links:['Ski & Splitboard','Alpine Climbing','Rock Climbing','Avalanche']},{title:'Company',links:['About BCAG','Our Guides','Testimonials','Contact']},{title:'Resources',links:['Trip Policy','Gear Lists','Rentals','Blog']}].map(col => (
                <div key={col.title}>
                  <div style={{ fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: 12 }}>{col.title}</div>
                  {col.links.map(link => <a key={link} href="/trips" style={{ display: 'block', color: 'rgba(255,255,255,0.35)', fontSize: 12, textDecoration: 'none', marginBottom: 8 }}>{link}</a>)}
                </div>
              ))}
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 18, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
            <span style={{ fontFamily: 'monospace', fontSize: 10, color: 'rgba(255,255,255,0.14)' }}>© {new Date().getFullYear()} BC Adventure Guides</span>
            <span style={{ fontFamily: 'monospace', fontSize: 10, color: 'rgba(255,255,255,0.14)' }}>Images © Pablo Puruncajas</span>
          </div>
        </div>
      </footer>
    </div>
  )
}