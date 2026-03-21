'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const trips = [
  { id: 'forbidden-tour', title: 'Forbidden Tour', category: 'SKI TRAVERSE', location: 'North Cascades', duration: '4 Days', difficulty: 'Expert', price: 1395, spotsLeft: 3, season: 'Spring', image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=900&q=90', shortDesc: 'The Cascades answer to the Haute Route. Three passes. Three peaks. Endless descents.' },
  { id: 'steep-camp', title: 'Steep Camp', category: 'SKI COURSE', location: 'North Cascades', duration: '3 Days', difficulty: 'Advanced', price: 975, spotsLeft: 5, season: 'Winter', image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=900&q=90', shortDesc: 'Master technical steep terrain. Small groups. Maximum progression.' },
  { id: 'aiare-level-1', title: 'AIARE Level 1', category: 'AVALANCHE', location: 'Washington Cascades', duration: '3 Days', difficulty: 'Beginner', price: 650, spotsLeft: 8, season: 'Winter', image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=900&q=90', shortDesc: 'The gold standard in avalanche education. Could save your life.' },
  { id: 'chamonix-climbing', title: 'Chamonix Alps', category: 'ALPINE CLIMB', location: 'Chamonix, France', duration: '8 Days', difficulty: 'Advanced', price: 3200, spotsLeft: 2, season: 'Summer', image: 'https://images.unsplash.com/photo-1502126324834-38f8e02d7160?w=900&q=90', shortDesc: 'Classics of the Mont Blanc massif with IFMGA certified guides.' },
  { id: 'alaska-ski-mo', title: 'Alaska Range', category: 'EXPEDITION', location: 'Alaska Range', duration: '10 Days', difficulty: 'Expert', price: 4800, spotsLeft: 4, season: 'Spring', image: 'https://images.unsplash.com/photo-1516592673884-4a382d1124c2?w=900&q=90', shortDesc: 'Fly-in glacier skiing. First descents. Remote camps. Ten days.' },
  { id: 'morning-star-peak', title: 'Morning Star', category: 'ROCK CLIMB', location: 'North Cascades', duration: '1 Day', difficulty: 'Intermediate', price: 425, spotsLeft: 6, season: 'Summer', image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=900&q=90', shortDesc: 'Classic multi-pitch granite. II+ 5.10a. Best moderate in the range.' },
]

const difficultyConfig = {
  Beginner:     { dot: '#4ade80', label: 'BEGINNER' },
  Intermediate: { dot: '#60a5fa', label: 'INTERMEDIATE' },
  Advanced:     { dot: '#fbbf24', label: 'ADVANCED' },
  Expert:       { dot: '#f87171', label: 'EXPERT' },
}

export default function HomePage() {
  const [heroLoaded, setHeroLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div style={{ background: '#080c10', minHeight: '100vh', fontFamily: "'DM Sans', sans-serif", overflowX: 'hidden' }}>

      {/* ─── HERO ─── */}
      <section style={{ position: 'relative', height: '100vh', minHeight: 700, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, transform: `translateY(${scrollY * 0.35}px)` }}>
          <img
            src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1920&q=95"
            alt=""
            style={{ width: '100%', height: '115%', objectFit: 'cover', objectPosition: 'center 30%' }}
          />
        </div>

        {/* Overlays */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(8,12,16,0.25) 0%, rgba(8,12,16,0.05) 35%, rgba(8,12,16,0.65) 75%, rgba(8,12,16,1) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(8,12,16,0.75) 0%, rgba(8,12,16,0.15) 55%, transparent 100%)' }} />
        {/* Grain */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.035, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat', backgroundSize: '128px' }} />

        {/* Navbar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '28px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 36, height: 36, background: '#c8370a', display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(0 0, 100% 0, 100% 72%, 72% 100%, 0 100%)' }}>
              <span style={{ fontFamily: "'Bebas Neue',sans-serif", color: '#fff', fontSize: 14, letterSpacing: 1 }}>BC</span>
            </div>
            <div>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", color: '#fff', fontSize: 16, letterSpacing: '0.15em', lineHeight: 1 }}>ADVENTURE GUIDES</div>
              <div style={{ fontFamily: 'monospace', color: 'rgba(255,255,255,0.3)', fontSize: 7.5, letterSpacing: '0.22em', textTransform: 'uppercase' }}>IFMGA · AMGA Certified</div>
            </div>
          </div>
          <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            {[['Ski & Board','/trips'],['Alpine','/trips'],['Rock','/trips'],['Avalanche','/trips'],['About','/about']].map(([label, href]) => (
              <a key={label} href={href} style={{ color: 'rgba(255,255,255,0.55)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}
              >{label}</a>
            ))}
            <a href="/contact" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.25)', color: '#fff', padding: '8px 22px', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600, transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#c8370a'; e.currentTarget.style.borderColor = '#c8370a' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)' }}
            >Contact</a>
          </nav>
        </div>

        {/* Hero content */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 48px 80px', display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'flex-end', gap: 40, zIndex: 10 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24, opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? 'translateY(0)' : 'translateY(18px)', transition: 'all 0.8s ease 0.1s' }}>
              <div style={{ width: 40, height: 1, background: '#c8370a' }} />
              <span style={{ fontFamily: 'monospace', color: '#c8370a', fontSize: 9.5, letterSpacing: '0.25em', textTransform: 'uppercase' }}>Pacific Northwest · Alaska · Alps · Andes</span>
            </div>
            <h1 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(70px, 9vw, 138px)', lineHeight: 0.87, color: '#fff', letterSpacing: '0.02em', margin: '0 0 26px', opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? 'translateY(0)' : 'translateY(28px)', transition: 'all 1s ease 0.2s' }}>
              THE PEAKS<br />
              <span style={{ color: '#c8370a' }}>AWAIT</span><br />
              <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.25)', color: 'transparent', fontSize: '82%' }}>YOUR CALL.</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, lineHeight: 1.75, maxWidth: 460, marginBottom: 38, opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? 'translateY(0)' : 'translateY(18px)', transition: 'all 0.9s ease 0.38s' }}>
              IFMGA & AMGA certified guides leading ski tours, alpine climbs, and backcountry expeditions across the world's greatest mountain ranges.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? 'translateY(0)' : 'translateY(18px)', transition: 'all 0.9s ease 0.52s' }}>
              <a href="/trips" style={{ background: '#c8370a', color: '#fff', padding: '14px 34px', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10, transition: 'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#e04010'}
                onMouseLeave={e => e.currentTarget.style.background = '#c8370a'}
              >
                Explore All Trips
                <svg width="16" height="9" viewBox="0 0 16 9" fill="none"><path d="M1 4.5h14M10.5 1l4.5 3.5-4.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="/contact" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.18)', color: '#fff', padding: '14px 34px', fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', backdropFilter: 'blur(8px)', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.13)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.38)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)' }}
              >Talk to a Guide</a>
            </div>
          </div>
          {/* Trust stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'stretch', opacity: heroLoaded ? 1 : 0, transition: 'opacity 1.2s ease 0.7s' }}>
            {[['IFMGA','Certified'],['AMGA','Accredited'],['USFS','Permitted']].map(([t,b]) => (
              <div key={t} style={{ border: '1px solid rgba(255,255,255,0.12)', padding: '10px 18px', textAlign: 'center', backdropFilter: 'blur(8px)', background: 'rgba(0,0,0,0.35)' }}>
                <div style={{ fontFamily: "'Bebas Neue',sans-serif", color: '#c8370a', fontSize: 15, letterSpacing: '0.12em' }}>{t}</div>
                <div style={{ fontFamily: 'monospace', color: 'rgba(255,255,255,0.3)', fontSize: 7.5, letterSpacing: '0.2em', textTransform: 'uppercase' }}>{b}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, zIndex: 10 }}>
          <div style={{ fontFamily: 'monospace', fontSize: 7.5, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)' }}>Scroll</div>
          <div style={{ width: 1, height: 44, background: 'linear-gradient(to bottom, rgba(255,255,255,0.28), transparent)' }} />
        </div>
      </section>

      {/* ─── STATS STRIP ─── */}
      <section style={{ background: '#0d1117', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {[['20+','Years in the Mountains'],['IFMGA','Highest Certification'],['500+','Expeditions Led'],['4','Continents']].map(([val, label], i) => (
            <div key={val} style={{ padding: '40px 0', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 50, color: '#fff', letterSpacing: '0.05em', lineHeight: 1 }}>{val}</div>
              <div style={{ fontFamily: 'monospace', fontSize: 8.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginTop: 8 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TRIPS GRID ─── */}
      <section style={{ background: '#080c10', padding: '120px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 64 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                <div style={{ width: 32, height: 1, background: '#c8370a' }} />
                <span style={{ fontFamily: 'monospace', color: '#c8370a', fontSize: 9.5, letterSpacing: '0.22em', textTransform: 'uppercase' }}>Featured Expeditions</span>
              </div>
              <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 70, color: '#fff', letterSpacing: '0.03em', lineHeight: 0.9, margin: 0 }}>
                CHOOSE<br />YOUR<br /><span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)', color: 'transparent' }}>ADVENTURE</span>
              </h2>
            </div>
            <a href="/trips" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,0.35)', fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600, transition: 'color 0.2s', paddingBottom: 4 }}
              onMouseEnter={e => e.currentTarget.style.color = '#c8370a'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
            >
              View All 30+ Trips
              <svg width="18" height="9" viewBox="0 0 18 9" fill="none"><path d="M1 4.5h16M12 1l5 3.5L12 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>

          {/* Asymmetric grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: '340px 340px', gap: 3 }}>
            {trips.map((trip, i) => {
              const isHero = i === 0
              const cfg = difficultyConfig[trip.difficulty]
              return (
                <a key={trip.id} href={`/trips/${trip.id}`}
                  style={{ gridColumn: isHero ? '1' : 'auto', gridRow: isHero ? '1 / 3' : 'auto', position: 'relative', overflow: 'hidden', display: 'block', textDecoration: 'none', cursor: 'pointer' }}
                  onMouseEnter={e => {
                    e.currentTarget.querySelector('.ti').style.transform = 'scale(1.07)'
                    e.currentTarget.querySelector('.tc').style.transform = 'translateY(0)'
                    e.currentTarget.querySelector('.tc').style.opacity = '1'
                    e.currentTarget.querySelector('.to').style.opacity = '1'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.querySelector('.ti').style.transform = 'scale(1)'
                    e.currentTarget.querySelector('.tc').style.transform = 'translateY(14px)'
                    e.currentTarget.querySelector('.tc').style.opacity = '0'
                    e.currentTarget.querySelector('.to').style.opacity = '0'
                  }}
                >
                  <img className="ti" src={trip.image} alt={trip.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,12,16,0.96) 0%, rgba(8,12,16,0.28) 50%, transparent 100%)' }} />
                  <div className="to" style={{ position: 'absolute', inset: 0, background: 'rgba(200,55,10,0.1)', opacity: 0, transition: 'opacity 0.4s' }} />

                  {trip.spotsLeft <= 4 && <div style={{ position: 'absolute', top: 14, left: 14, background: '#c8370a', color: '#fff', fontFamily: 'monospace', fontSize: 8.5, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '5px 10px', fontWeight: 700 }}>{trip.spotsLeft} spots left</div>}
                  <div style={{ position: 'absolute', top: 14, right: 14, background: 'rgba(8,12,16,0.7)', color: 'rgba(255,255,255,0.45)', fontFamily: 'monospace', fontSize: 7.5, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '5px 10px', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(6px)' }}>{trip.category}</div>

                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: isHero ? '28px' : '18px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
                      <div style={{ width: 5, height: 5, borderRadius: '50%', background: cfg.dot }} />
                      <span style={{ fontFamily: 'monospace', fontSize: 7.5, letterSpacing: '0.2em', color: cfg.dot, textTransform: 'uppercase' }}>{cfg.label}</span>
                    </div>
                    <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: isHero ? 50 : 26, color: '#fff', letterSpacing: '0.03em', lineHeight: 0.93, margin: '0 0 7px' }}>{trip.title.toUpperCase()}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: isHero ? 14 : 10 }}>
                      <span style={{ fontFamily: 'monospace', fontSize: 8.5, color: 'rgba(255,255,255,0.32)', letterSpacing: '0.1em' }}>{trip.location}</span>
                      <span style={{ width: 2, height: 2, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'block', flexShrink: 0 }} />
                      <span style={{ fontFamily: 'monospace', fontSize: 8.5, color: 'rgba(255,255,255,0.32)', letterSpacing: '0.1em' }}>{trip.duration}</span>
                    </div>
                    {isHero && <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13.5, lineHeight: 1.65, marginBottom: 18, maxWidth: 420 }}>{trip.shortDesc}</p>}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ fontFamily: 'monospace', fontSize: 7.5, color: 'rgba(255,255,255,0.28)', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 2 }}>From</div>
                        <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: isHero ? 34 : 22, color: '#fff', letterSpacing: '0.05em', lineHeight: 1 }}>${trip.price.toLocaleString()}</div>
                      </div>
                      <div className="tc" style={{ background: '#c8370a', color: '#fff', padding: '9px 16px', fontSize: 9.5, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', transform: 'translateY(14px)', opacity: 0, transition: 'all 0.32s cubic-bezier(0.25,0.46,0.45,0.94)', display: 'flex', alignItems: 'center', gap: 7 }}>
                        View Trip
                        <svg width="13" height="7" viewBox="0 0 13 7" fill="none"><path d="M1 3.5h11M8 1l3.5 2.5L8 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── MANIFESTO ─── */}
      <section style={{ position: 'relative', padding: '160px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1516592673884-4a382d1124c2?w=1920&q=85" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.22) saturate(0.4)' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(8,12,16,0.92) 35%, rgba(8,12,16,0.5) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '0 48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
              <div style={{ width: 32, height: 1, background: '#c8370a' }} />
              <span style={{ fontFamily: 'monospace', color: '#c8370a', fontSize: 9.5, letterSpacing: '0.22em', textTransform: 'uppercase' }}>Why BCAG</span>
            </div>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 78, color: '#fff', letterSpacing: '0.02em', lineHeight: 0.9, margin: '0 0 30px' }}>
              THE WORLD'S<br />MOST QUALIFIED<br /><span style={{ color: '#c8370a' }}>GUIDES.</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15.5, lineHeight: 1.8, marginBottom: 38, maxWidth: 400 }}>
              Ian Nicholson and Matt Schonwald hold the IFMGA certification — the highest international mountain guiding standard, earned across all three disciplines. Less than 2% of guides worldwide achieve this.
            </p>
            <a href="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, color: '#fff', fontSize: 10.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.18)', paddingBottom: 8, transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#c8370a'; e.currentTarget.style.borderBottomColor = '#c8370a' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.18)' }}
            >
              Meet the Guides
              <svg width="18" height="9" viewBox="0 0 18 9" fill="none"><path d="M1 4.5h16M12 1l5 3.5L12 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            {[['01','Safety First','WFR certified. Conservative decisions. Every single trip.'],['02','Small Ratios','Max 4:1. Real coaching, not crowd management.'],['03','Leave No Trace','Deep respect for the alpine environments we love.'],['04','True Alpinists','First ascents, guidebook authors, AMGA examiners.']].map(([num,title,body]) => (
              <div key={num} style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.06)', padding: '26px 22px', transition: 'border-color 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(200,55,10,0.4)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
              >
                <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 34, color: 'rgba(200,55,10,0.28)', letterSpacing: '0.1em', lineHeight: 1, marginBottom: 12 }}>{num}</div>
                <div style={{ color: '#fff', fontWeight: 600, fontSize: 13.5, marginBottom: 7 }}>{title}</div>
                <div style={{ color: 'rgba(255,255,255,0.33)', fontSize: 12.5, lineHeight: 1.65 }}>{body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section style={{ background: '#0d1117', padding: '120px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
            <div style={{ width: 32, height: 1, background: '#c8370a' }} />
            <span style={{ fontFamily: 'monospace', color: '#c8370a', fontSize: 9.5, letterSpacing: '0.22em', textTransform: 'uppercase' }}>Client Stories</span>
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 64, color: '#fff', letterSpacing: '0.03em', lineHeight: 0.9, margin: '0 0 60px' }}>WHAT THEY<br />SAY.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
            {[
              { name: 'Sarah K.', loc: 'Seattle', trip: 'Forbidden Tour', quote: "The single best week of my life. Ian made an incredibly demanding route feel achievable. Views from Eldorado's summit brought me to tears." },
              { name: 'Marcus T.', loc: 'Portland', trip: 'AIARE Level 1', quote: "Matt is an exceptional educator. This course changed how I think about backcountry travel entirely. Worth every single penny." },
              { name: 'Julia R.', loc: 'Denver', trip: 'Chamonix Alps', quote: "Summiting in the French Alps with BCAG was a bucket list moment. Their expertise made it both safe and deeply memorable." },
              { name: 'David L.', loc: 'San Francisco', trip: 'Steep Camp', quote: "I've skied with many guides. BCAG operates at a completely different level — technically, educationally, in every single way." },
            ].map(t => (
              <div key={t.name} style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.055)', padding: '30px 26px', transition: 'border-color 0.3s, background 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(200,55,10,0.38)'; e.currentTarget.style.background = 'rgba(200,55,10,0.04)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.055)'; e.currentTarget.style.background = 'rgba(255,255,255,0.025)' }}
              >
                <div style={{ display: 'flex', gap: 2, marginBottom: 18 }}>{[...Array(5)].map((_, i) => <span key={i} style={{ color: '#c8370a', fontSize: 11 }}>★</span>)}</div>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13.5, lineHeight: 1.75, marginBottom: 26, fontStyle: 'italic' }}>"{t.quote}"</p>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 18 }}>
                  <div style={{ color: '#fff', fontWeight: 600, fontSize: 12.5 }}>{t.name}</div>
                  <div style={{ fontFamily: 'monospace', fontSize: 8.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#c8370a', marginTop: 4 }}>{t.trip}</div>
                  <div style={{ fontFamily: 'monospace', fontSize: 8.5, color: 'rgba(255,255,255,0.22)', marginTop: 2 }}>{t.loc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <section style={{ background: '#c8370a', padding: '17px 0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', animation: 'marquee 22s linear infinite', whiteSpace: 'nowrap', width: 'max-content' }}>
          {[...Array(4)].map((_, r) =>
            ['North Cascades','Alaska Range','French Alps','Swiss Alps','Patagonia','Ecuador','Japan','Rogers Pass'].map(d => (
              <span key={`${d}-${r}`} style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 19, color: 'rgba(255,255,255,0.88)', letterSpacing: '0.15em', marginRight: 48 }}>
                {d} <span style={{ color: 'rgba(255,255,255,0.35)', marginRight: 48 }}>·</span>
              </span>
            ))
          )}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-25%) } }`}</style>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section style={{ position: 'relative', padding: '160px 48px', background: '#080c10', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.025, backgroundImage: 'repeating-linear-gradient(-45deg, rgba(255,255,255,0.6) 0, rgba(255,255,255,0.6) 1px, transparent 0, transparent 50%)', backgroundSize: '30px 30px' }} />
        <div style={{ position: 'relative', maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontFamily: 'monospace', color: '#c8370a', fontSize: 9.5, letterSpacing: '0.26em', textTransform: 'uppercase', marginBottom: 22 }}>— Book Your Adventure</div>
          <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(62px, 8vw, 118px)', color: '#fff', letterSpacing: '0.02em', lineHeight: 0.88, margin: '0 0 30px' }}>
            EVERY MOUNTAIN.<br />
            <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.18)', color: 'transparent' }}>EVERY</span>
            <span style={{ color: '#c8370a' }}> SEASON.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: 15.5, lineHeight: 1.75, maxWidth: 480, margin: '0 auto 46px' }}>
            Not sure where to start? Ian and Matt personally answer every inquiry. Tell us your dream — we'll build the trip.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 44 }}>
            <a href="/trips" style={{ background: '#c8370a', color: '#fff', padding: '15px 40px', fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none', transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = '#e04010'}
              onMouseLeave={e => e.currentTarget.style.background = '#c8370a'}
            >Browse All Trips</a>
            <a href="/contact" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.18)', color: '#fff', padding: '15px 40px', fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; e.currentTarget.style.background = 'transparent' }}
            >Talk to a Guide</a>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 36, flexWrap: 'wrap' }}>
            <a href="tel:2067994092" style={{ color: 'rgba(255,255,255,0.28)', fontSize: 11.5, textDecoration: 'none', fontFamily: 'monospace', letterSpacing: '0.08em', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.28)'}
            >(206) 799-4092</a>
            <a href="mailto:info@bcadventureguides.com" style={{ color: 'rgba(255,255,255,0.28)', fontSize: 11.5, textDecoration: 'none', fontFamily: 'monospace', letterSpacing: '0.08em', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.28)'}
            >info@bcadventureguides.com</a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ background: '#0d1117', borderTop: '1px solid rgba(255,255,255,0.04)', padding: '60px 48px 40px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 72, alignItems: 'start', marginBottom: 48 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 32, height: 32, background: '#c8370a', display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(0 0, 100% 0, 100% 72%, 72% 100%, 0 100%)' }}>
                  <span style={{ fontFamily: "'Bebas Neue',sans-serif", color: '#fff', fontSize: 12 }}>BC</span>
                </div>
                <div style={{ fontFamily: "'Bebas Neue',sans-serif", color: '#fff', fontSize: 14, letterSpacing: '0.15em' }}>ADVENTURE GUIDES</div>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.22)', fontSize: 11.5, lineHeight: 1.75, maxWidth: 240 }}>
                IFMGA/AMGA Mountain Guides.<br />Seattle, WA.<br />Operating since 2004.
              </p>
              <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <a href="tel:2067994092" style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11, fontFamily: 'monospace', textDecoration: 'none', letterSpacing: '0.06em', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#fff'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.3)'}
                >(206) 799-4092</a>
                <a href="mailto:info@bcadventureguides.com" style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11, fontFamily: 'monospace', textDecoration: 'none', letterSpacing: '0.06em', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#fff'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.3)'}
                >info@bcadventureguides.com</a>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
              {[
                { title: 'Trips', links: ['Ski & Splitboard','Alpine Climbing','Rock Climbing','Avalanche Courses',"Women's Programs"] },
                { title: 'Company', links: ['About BCAG','Our Guides','Testimonials','Partners','Contact'] },
                { title: 'Resources', links: ['Trip Policy','Gear Lists','Rentals','Calendar','Blog'] },
              ].map(col => (
                <div key={col.title}>
                  <div style={{ fontFamily: 'monospace', fontSize: 8.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', marginBottom: 16 }}>{col.title}</div>
                  {col.links.map(link => (
                    <a key={link} href="/trips" style={{ display: 'block', color: 'rgba(255,255,255,0.36)', fontSize: 12.5, textDecoration: 'none', marginBottom: 10, transition: 'color 0.2s' }}
                      onMouseEnter={e => e.target.style.color = '#fff'}
                      onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.36)'}
                    >{link}</a>
                  ))}
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontFamily: 'monospace', fontSize: 8.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', marginBottom: 14 }}>Certified By</div>
              {['IFMGA','AMGA','USFS Permitted'].map(b => (
                <div key={b} style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '7px 14px', marginBottom: 8, display: 'block', width: 'fit-content' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: 8.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.32)' }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 22, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'monospace', fontSize: 10, color: 'rgba(255,255,255,0.14)', letterSpacing: '0.1em' }}>© {new Date().getFullYear()} BC Adventure Guides. All rights reserved.</span>
            <span style={{ fontFamily: 'monospace', fontSize: 10, color: 'rgba(255,255,255,0.14)', letterSpacing: '0.1em' }}>Images © Pablo Puruncajas</span>
          </div>
        </div>
      </footer>
    </div>
  )
}