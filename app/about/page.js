'use client'

import { useState } from 'react'

const guides = [
  {
    name: 'Ian Nicholson',
    title: 'IFMGA / AMGA Mountain Guide',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=85',
    years: 20,
    bio: 'Ian has spent over two decades guiding in the Cascades, Alps, Andes, and ranges across the globe. He holds the highest international guiding certification (IFMGA) and has authored guidebooks to the region. He trains new guides through the AMGA and has pioneered first ascents throughout the North Cascades.',
    certs: ['IFMGA', 'AMGA Rock', 'AMGA Alpine', 'AMGA Ski', 'WFR'],
    highlights: ['First ascents in the North Cascades', 'AMGA Guide Trainer & Examiner', 'Published guidebook author', 'IFMGA Board representative'],
    specialties: ['Ski Mountaineering', 'Alpine Climbing', 'Rock Climbing'],
  },
  {
    name: 'Matt Schonwald',
    title: 'IFMGA / AMGA Mountain Guide',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=85',
    years: 18,
    bio: 'Matt brings 18 years of high-altitude experience across four continents. A passionate educator, he trains guides through the AMGA and has led expeditions from Patagonia to the Himalayas. His deep knowledge of avalanche terrain and glacier travel makes him one of the most sought-after guides in the Pacific Northwest.',
    certs: ['IFMGA', 'AMGA Ski', 'AMGA Alpine', 'AIARE Pro', 'WFR'],
    highlights: ['Himalayan expedition leader', 'AMGA Ski Examiner', 'Avalanche curriculum developer', 'Cascade Range specialist'],
    specialties: ['Backcountry Skiing', 'Avalanche Education', 'Alpine Climbing'],
  },
]

const testimonials = [
  { name: 'Sarah K.', loc: 'Seattle, WA', trip: 'Forbidden Tour', quote: "The single best week of my life. Ian made an incredibly demanding route feel achievable. The views from Eldorado's summit brought me to tears." },
  { name: 'Marcus T.', loc: 'Portland, OR', trip: 'AIARE Level 1', quote: "Matt is an exceptional educator. This course changed how I think about backcountry travel entirely. Worth every penny — this knowledge could save your life." },
  { name: 'Julia R.', loc: 'Denver, CO', trip: 'Chamonix Alps', quote: "Summiting in the French Alps with BCAG was a bucket list moment. Their expertise and local knowledge made it both safe and deeply memorable." },
  { name: 'David L.', loc: 'San Francisco, CA', trip: 'Steep Camp', quote: "I've skied with many guides over the years. BCAG operates at a completely different level — technically, educationally, and in every other way." },
]

const values = [
  { num: '01', title: 'Authenticity', body: 'Your adventure is something you help create. We provide the tools and guidance to make you an integral part of the experience, leaving you with a deeper connection to the outdoors.' },
  { num: '02', title: 'Safety', body: 'Conservative decision-making and Wilderness First Responder certified guides on every trip. We never compromise on this — not for weather, not for schedule, not for anything.' },
  { num: '03', title: 'Environment', body: 'Small group ratios minimize our impact on pristine natural areas. Guided by Leave No Trace principles, we protect the fragile alpine ecosystems we are privileged to visit.' },
  { num: '04', title: 'Excellence', body: 'IFMGA certification — the highest international guiding standard. Our guides attend ongoing training, pursue new routes, and are committed to raising the bar for the profession.' },
]

export default function AboutPage() {
  const [mobileOpen, setMobileOpen] = useState(false)

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
              <a key={label} href={href} style={{ color: label === 'About' ? '#fff' : 'rgba(255,255,255,0.45)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: label === 'About' ? 600 : 500, transition: 'color 0.2s', borderBottom: label === 'About' ? '1px solid #c8370a' : 'none', paddingBottom: label === 'About' ? 2 : 0 }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => { if (label !== 'About') e.target.style.color = 'rgba(255,255,255,0.45)' }}
              >{label}</a>
            ))}
            <a href="/contact" style={{ background: '#c8370a', color: '#fff', padding: '8px 22px', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600, transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = '#e04010'}
              onMouseLeave={e => e.currentTarget.style.background = '#c8370a'}
            >Contact</a>
          </nav>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section style={{ position: 'relative', height: '65vh', minHeight: 500, overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1516592673884-4a382d1124c2?w=1920&q=90"
          alt="Mountain guides"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(8,12,16,0.5) 0%, rgba(8,12,16,0.2) 40%, rgba(8,12,16,0.85) 85%, rgba(8,12,16,1) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(8,12,16,0.7) 0%, transparent 60%)' }} />
        {/* Grain */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat', backgroundSize: '128px' }} />

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, maxWidth: 1200, margin: '0 auto', padding: '0 48px 72px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
            <div style={{ width: 32, height: 1, background: '#c8370a' }} />
            <span style={{ fontFamily: 'monospace', color: '#c8370a', fontSize: 9.5, letterSpacing: '0.25em', textTransform: 'uppercase' }}>Who We Are</span>
          </div>
          <h1 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(64px, 8vw, 120px)', color: '#fff', letterSpacing: '0.02em', lineHeight: 0.88, margin: 0 }}>
            ABOUT<br />
            <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.25)', color: 'transparent' }}>BC ADVENTURE</span><br />
            <span style={{ color: '#c8370a' }}>GUIDES.</span>
          </h1>
        </div>
      </section>

      {/* ─── MISSION ─── */}
      <section style={{ background: '#080c10', padding: '120px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
              <div style={{ width: 32, height: 1, background: '#c8370a' }} />
              <span style={{ fontFamily: 'monospace', color: '#c8370a', fontSize: 9.5, letterSpacing: '0.22em', textTransform: 'uppercase' }}>Our Mission</span>
            </div>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 68, color: '#fff', letterSpacing: '0.02em', lineHeight: 0.9, margin: '0 0 28px' }}>
              FORGING<br />CONNECTIONS<br /><span style={{ color: '#c8370a' }}>IN THE MOUNTAINS.</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15.5, lineHeight: 1.8, marginBottom: 20 }}>
              BC Adventure Guides offers the experience of a lifetime to those who want to broaden their horizons through new challenges, cultures, and exotic places. We are knowledgeable, licensed, and certified guides on a mission to forge connections between amazing people and thrilling experiences.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 14.5, lineHeight: 1.8, marginBottom: 40 }}>
              Ski down Ecuador's tropical glaciers or climb the Matterhorn in the Swiss Alps. No matter what your life-changing experience looks like, our guides are here to help you check those bucket list items sooner than you thought possible.
            </p>
            {/* Stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
              {[['20+', 'Years'], ['IFMGA', 'Certified'], ['500+', 'Clients'], ['4', 'Continents']].map(([val, label]) => (
                <div key={label} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', padding: '20px 16px', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 36, color: '#fff', letterSpacing: '0.05em', lineHeight: 1 }}>{val}</div>
                  <div style={{ fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginTop: 6 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image stack */}
          <div style={{ position: 'relative', height: 560 }}>
            <img
              src="https://images.unsplash.com/photo-1502126324834-38f8e02d7160?w=800&q=85"
              alt="Alpine climbing"
              style={{ position: 'absolute', top: 0, left: 0, width: '80%', height: '70%', objectFit: 'cover' }}
            />
            <img
              src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&q=85"
              alt="Backcountry skiing"
              style={{ position: 'absolute', bottom: 0, right: 0, width: '65%', height: '55%', objectFit: 'cover', border: '4px solid #080c10' }}
            />
            {/* Accent block */}
            <div style={{ position: 'absolute', bottom: '55%', left: '78%', transform: 'translate(-50%, 50%)', background: '#c8370a', padding: '16px 20px', zIndex: 10 }}>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 28, color: '#fff', letterSpacing: '0.08em', lineHeight: 1 }}>IFMGA</div>
              <div style={{ fontFamily: 'monospace', fontSize: 7.5, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: 3 }}>Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section style={{ background: '#0d1117', padding: '120px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 64 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                <div style={{ width: 32, height: 1, background: '#c8370a' }} />
                <span style={{ fontFamily: 'monospace', color: '#c8370a', fontSize: 9.5, letterSpacing: '0.22em', textTransform: 'uppercase' }}>What Drives Us</span>
              </div>
              <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 68, color: '#fff', letterSpacing: '0.02em', lineHeight: 0.9, margin: 0 }}>
                OUR<br /><span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)', color: 'transparent' }}>VALUES.</span>
              </h2>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
            {values.map(v => (
              <div key={v.num} style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', padding: '36px 28px', transition: 'border-color 0.3s, background 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(200,55,10,0.45)'; e.currentTarget.style.background = 'rgba(200,55,10,0.05)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.025)' }}
              >
                <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 52, color: 'rgba(200,55,10,0.2)', letterSpacing: '0.08em', lineHeight: 1, marginBottom: 20 }}>{v.num}</div>
                <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 28, color: '#fff', letterSpacing: '0.05em', margin: '0 0 12px' }}>{v.title.toUpperCase()}</h3>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, lineHeight: 1.75 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GUIDES ─── */}
      <section id="guides" style={{ background: '#080c10', padding: '120px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
            <div style={{ width: 32, height: 1, background: '#c8370a' }} />
            <span style={{ fontFamily: 'monospace', color: '#c8370a', fontSize: 9.5, letterSpacing: '0.22em', textTransform: 'uppercase' }}>The Team</span>
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 68, color: '#fff', letterSpacing: '0.02em', lineHeight: 0.9, margin: '0 0 72px' }}>
            MEET YOUR<br /><span style={{ color: '#c8370a' }}>GUIDES.</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {guides.map((guide, i) => (
              <div key={guide.name} style={{ display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr', gap: 0, minHeight: 560 }}>

                {/* Image side */}
                <div style={{ position: 'relative', overflow: 'hidden', order: i % 2 === 0 ? 1 : 2 }}>
                  <img
                    src={guide.image}
                    alt={guide.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', filter: 'grayscale(20%) contrast(1.05)' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: i % 2 === 0 ? 'linear-gradient(90deg, transparent 60%, rgba(8,12,16,1) 100%)' : 'linear-gradient(270deg, transparent 60%, rgba(8,12,16,1) 100%)' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(8,12,16,0.8) 100%)' }} />
                  {/* Year badge */}
                  <div style={{ position: 'absolute', top: 28, left: i % 2 === 0 ? 28 : 'auto', right: i % 2 !== 0 ? 28 : 'auto', background: 'rgba(8,12,16,0.85)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 18px', backdropFilter: 'blur(8px)' }}>
                    <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 32, color: '#c8370a', lineHeight: 1 }}>{guide.years}+</div>
                    <div style={{ fontFamily: 'monospace', fontSize: 7.5, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Years Guiding</div>
                  </div>
                </div>

                {/* Content side */}
                <div style={{ background: '#0d1117', padding: '64px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', order: i % 2 === 0 ? 2 : 1 }}>
                  <div style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c8370a', marginBottom: 12 }}>{guide.title}</div>
                  <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 56, color: '#fff', letterSpacing: '0.03em', lineHeight: 0.9, margin: '0 0 24px' }}>{guide.name.toUpperCase()}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14.5, lineHeight: 1.8, marginBottom: 32, maxWidth: 420 }}>{guide.bio}</p>

                  {/* Certs */}
                  <div style={{ marginBottom: 28 }}>
                    <div style={{ fontFamily: 'monospace', fontSize: 8.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', marginBottom: 12 }}>Certifications</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {guide.certs.map(c => (
                        <span key={c} style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', padding: '5px 12px', border: '1px solid rgba(200,55,10,0.4)', color: 'rgba(200,55,10,0.85)' }}>{c}</span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <div style={{ fontFamily: 'monospace', fontSize: 8.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', marginBottom: 12 }}>Highlights</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {guide.highlights.map(h => (
                        <div key={h} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                          <div style={{ width: 4, height: 4, background: '#c8370a', flexShrink: 0, borderRadius: '50%' }} />
                          <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section id="testimonials" style={{ background: '#0d1117', padding: '120px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
            <div style={{ width: 32, height: 1, background: '#c8370a' }} />
            <span style={{ fontFamily: 'monospace', color: '#c8370a', fontSize: 9.5, letterSpacing: '0.22em', textTransform: 'uppercase' }}>Client Stories</span>
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 68, color: '#fff', letterSpacing: '0.02em', lineHeight: 0.9, margin: '0 0 60px' }}>
            WHAT THEY<br /><span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)', color: 'transparent' }}>SAY.</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
            {testimonials.map((t, i) => (
              <div key={t.name} style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', padding: '40px 36px', transition: 'border-color 0.3s, background 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(200,55,10,0.38)'; e.currentTarget.style.background = 'rgba(200,55,10,0.04)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.025)' }}
              >
                <div style={{ display: 'flex', gap: 3, marginBottom: 20 }}>
                  {[...Array(5)].map((_, i) => <span key={i} style={{ color: '#c8370a', fontSize: 13 }}>★</span>)}
                </div>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, lineHeight: 1.8, marginBottom: 28, fontStyle: 'italic' }}>"{t.quote}"</p>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ color: '#fff', fontWeight: 600, fontSize: 13.5 }}>{t.name}</div>
                    <div style={{ fontFamily: 'monospace', fontSize: 8.5, color: 'rgba(255,255,255,0.25)', marginTop: 3 }}>{t.loc}</div>
                  </div>
                  <div style={{ fontFamily: 'monospace', fontSize: 8.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#c8370a', padding: '5px 12px', border: '1px solid rgba(200,55,10,0.3)' }}>{t.trip}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ─── */}
      <section style={{ background: '#080c10', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '80px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px', textAlign: 'center' }}>
          <div style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', marginBottom: 32 }}>Certifications & Permits</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginBottom: 32 }}>
            {['IFMGA Certified', 'AMGA Rock Guide', 'AMGA Alpine Guide', 'AMGA Ski Guide', 'USFS Permitted', 'Leave No Trace', 'WFR Certified', 'AIARE Professional'].map(b => (
              <div key={b} style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '9px 20px' }}>
                <span style={{ fontFamily: 'monospace', fontSize: 9.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)' }}>{b}</span>
              </div>
            ))}
          </div>
          <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: 11.5, fontFamily: 'monospace', letterSpacing: '0.06em', maxWidth: 600, margin: '0 auto', lineHeight: 1.8 }}>
            BCAG operates under Special Use Permits with the Okanogan-Wenatchee and Mt Baker-Snoqualmie National Forests, and is an equal opportunity outdoor recreation service provider.
          </p>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ background: '#c8370a', padding: '100px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.07, backgroundImage: 'repeating-linear-gradient(-45deg, rgba(255,255,255,0.6) 0, rgba(255,255,255,0.6) 1px, transparent 0, transparent 50%)', backgroundSize: '28px 28px' }} />
        <div style={{ position: 'relative' }}>
          <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(52px, 6vw, 96px)', color: '#fff', letterSpacing: '0.02em', lineHeight: 0.9, margin: '0 0 20px' }}>
            READY TO CLIMB WITH US?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, lineHeight: 1.7, maxWidth: 460, margin: '0 auto 40px' }}>
            Browse our trips or reach out directly. Ian and Matt personally reply to every single inquiry.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
            <a href="/trips" style={{ background: '#fff', color: '#c8370a', padding: '14px 36px', fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none', transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = '#f5f2ec'}
              onMouseLeave={e => e.currentTarget.style.background = '#fff'}
            >Browse All Trips</a>
            <a href="/contact" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.5)', color: '#fff', padding: '14px 36px', fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.borderColor = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)' }}
            >Get in Touch</a>
          </div>
        </div>
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