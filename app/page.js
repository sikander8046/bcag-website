'use client'
import { useEffect, useState } from 'react'
import MobileNav from '@/components/MobileNav'
import { trips as allTrips } from '@/lib/data'

const trips = allTrips.slice(0, 6)

const difficultyConfig = {
  Beginner: { dot: '#4ade80' }, Intermediate: { dot: '#60a5fa' },
  Advanced: { dot: '#fbbf24' }, Expert: { dot: '#f87171' },
}

export default function HomePage() {
  const [heroLoaded, setHeroLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [hoveredTrip, setHoveredTrip] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 100)
    const handleScroll = () => setScrollY(window.scrollY)
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', checkMobile)
    return () => { clearTimeout(timer); window.removeEventListener('scroll', handleScroll); window.removeEventListener('resize', checkMobile) }
  }, [])

  const px = isMobile ? '20px' : '48px'
  const py = isMobile ? '72px' : '120px'

  return (
    <div style={{ background: '#080c10', minHeight: '100vh', fontFamily: "'DM Sans', sans-serif", overflowX: 'hidden' }}>

      {/* HERO */}
      <section style={{ position: 'relative', height: '100vh', minHeight: 600, overflow: 'hidden' }}>
        {/* Navbar sits inside hero so it overlays the image */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 50 }}>
          <MobileNav />
        </div>

        <div style={{ position: 'absolute', inset: 0, transform: isMobile ? 'none' : `translateY(${scrollY * 0.35}px)` }}>
          <img src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1920&q=95" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(8,12,16,0.3) 0%, rgba(8,12,16,0.05) 35%, rgba(8,12,16,0.7) 75%, rgba(8,12,16,1) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(8,12,16,0.8) 0%, rgba(8,12,16,0.15) 55%, transparent 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat', backgroundSize: '128px' }} />

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: `0 ${px} ${isMobile ? '48px' : '80px'}`, zIndex: 10 }}>
          <div style={{ opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? 'none' : 'translateY(18px)', transition: 'all 0.8s ease 0.1s', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
            <div style={{ width: 28, height: 1, background: '#c8370a', flexShrink: 0 }} />
            <span style={{ fontFamily: 'monospace', color: '#c8370a', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase' }}>IFMGA / AMGA Certified Guides</span>
          </div>
          <h1 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: isMobile ? 'clamp(52px,13vw,80px)' : 'clamp(70px,9vw,138px)', lineHeight: 0.87, color: '#fff', letterSpacing: '0.02em', margin: '0 0 20px', opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? 'none' : 'translateY(28px)', transition: 'all 1s ease 0.2s' }}>
            THE PEAKS<br /><span style={{ color: '#c8370a' }}>AWAIT</span><br />
            <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.25)', color: 'transparent', fontSize: '82%' }}>YOUR CALL.</span>
          </h1>
          {!isMobile && (
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, lineHeight: 1.75, maxWidth: 460, marginBottom: 32, opacity: heroLoaded ? 1 : 0, transition: 'all 0.9s ease 0.38s' }}>
              IFMGA & AMGA certified guides leading ski tours, alpine climbs, and backcountry expeditions across the world's greatest mountain ranges.
            </p>
          )}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', opacity: heroLoaded ? 1 : 0, transition: 'all 0.9s ease 0.52s' }}>
            <a href="/trips" style={{ background: '#c8370a', color: '#fff', padding: isMobile ? '13px 26px' : '14px 34px', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = '#e04010'}
              onMouseLeave={e => e.currentTarget.style.background = '#c8370a'}
            >Explore Trips</a>
            <a href="/contact" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: isMobile ? '13px 26px' : '14px 34px', fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none' }}>Talk to a Guide</a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: '#c8370a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: `0 ${px}`, display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4,1fr)' }}>
          {[['20+','Years'],['IFMGA','Certified'],['500+','Clients'],['4','Continents']].map(([val,label],i) => (
            <div key={val} style={{ padding: isMobile ? '28px 0' : '36px 0', textAlign: 'center', borderRight: !isMobile && i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none', borderBottom: isMobile && i < 2 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: isMobile ? 38 : 48, color: '#fff', letterSpacing: '0.05em', lineHeight: 1 }}>{val}</div>
              <div style={{ fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginTop: 6 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TRIPS */}
      <section style={{ background: '#080c10', padding: `${py} 0` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: `0 ${px}` }}>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'flex-end', justifyContent: 'space-between', marginBottom: isMobile ? 32 : 56, gap: 12 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={{ width: 28, height: 1, background: '#c8370a' }} />
                <span style={{ fontFamily: 'monospace', color: '#c8370a', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase' }}>Featured Expeditions</span>
              </div>
              <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: isMobile ? 52 : 70, color: '#fff', letterSpacing: '0.03em', lineHeight: 0.9, margin: 0 }}>
                CHOOSE YOUR<br /><span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)', color: 'transparent' }}>ADVENTURE</span>
              </h2>
            </div>
            <a href="/trips" style={{ color: 'rgba(255,255,255,0.35)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8 }}>
              View All 30+ Trips <svg width="16" height="8" viewBox="0 0 16 8" fill="none"><path d="M1 4h14M10 1l5 3-5 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>

          {/* Trip grid - single col on mobile, asymmetric on desktop */}
          {isMobile ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {trips.map((trip) => {
                const cfg = difficultyConfig[trip.difficulty]
                const hovered = hoveredTrip === trip.id
                return (
                  <a key={trip.id} href={`/trips/${trip.id}`}
                    style={{ display: 'block', textDecoration: 'none', position: 'relative', overflow: 'hidden', aspectRatio: '4/3' }}
                    onMouseEnter={() => setHoveredTrip(trip.id)}
                    onMouseLeave={() => setHoveredTrip(null)}
                  >
                    <img src={trip.image} alt={trip.title} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,12,16,0.96) 0%, rgba(8,12,16,0.3) 50%, transparent 100%)' }} />
                    {trip.spotsLeft <= 4 && <div style={{ position: 'absolute', top: 12, left: 12, background: '#c8370a', color: '#fff', fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '4px 9px', fontWeight: 700 }}>{trip.spotsLeft} spots left</div>}
                    <div style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(8,12,16,0.7)', color: 'rgba(255,255,255,0.45)', fontFamily: 'monospace', fontSize: 7.5, letterSpacing: '0.18em', textTransform: 'uppercase', padding: '4px 9px', border: '1px solid rgba(255,255,255,0.1)' }}>{trip.category}</div>
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                        <div style={{ width: 5, height: 5, borderRadius: '50%', background: cfg.dot }} />
                        <span style={{ fontFamily: 'monospace', fontSize: 7.5, color: cfg.dot, letterSpacing: '0.18em', textTransform: 'uppercase' }}>{trip.difficulty}</span>
                      </div>
                      <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 32, color: '#fff', letterSpacing: '0.03em', lineHeight: 0.93, margin: '0 0 6px' }}>{trip.title.toUpperCase()}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                        <span style={{ fontFamily: 'monospace', fontSize: 8, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>{trip.location}</span>
                        <span style={{ width: 2, height: 2, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'block' }} />
                        <span style={{ fontFamily: 'monospace', fontSize: 8, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>{trip.duration}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 28, color: '#fff', letterSpacing: '0.04em', lineHeight: 1 }}>${trip.price.toLocaleString()}</div>
                        <span style={{ background: '#c8370a', color: '#fff', padding: '8px 16px', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>View →</span>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: '340px 340px', gap: 3 }}>
              {trips.map((trip, i) => {
                const isHero = i === 0
                const cfg = difficultyConfig[trip.difficulty]
                const hovered = hoveredTrip === trip.id
                return (
                  <a key={trip.id} href={`/trips/${trip.id}`}
                    style={{ gridColumn: isHero ? '1' : 'auto', gridRow: isHero ? '1 / 3' : 'auto', position: 'relative', overflow: 'hidden', display: 'block', textDecoration: 'none' }}
                    onMouseEnter={() => setHoveredTrip(trip.id)}
                    onMouseLeave={() => setHoveredTrip(null)}
                  >
                    <img src={trip.image} alt={trip.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', transform: hovered ? 'scale(1.06)' : 'scale(1)' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,12,16,0.96) 0%, rgba(8,12,16,0.28) 50%, transparent 100%)' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(200,55,10,0.08)', opacity: hovered ? 1 : 0, transition: 'opacity 0.4s' }} />
                    {trip.spotsLeft <= 4 && <div style={{ position: 'absolute', top: 12, left: 12, background: '#c8370a', color: '#fff', fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '4px 9px', fontWeight: 700 }}>{trip.spotsLeft} spots left</div>}
                    <div style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(8,12,16,0.7)', color: 'rgba(255,255,255,0.45)', fontFamily: 'monospace', fontSize: 7.5, letterSpacing: '0.18em', textTransform: 'uppercase', padding: '4px 9px', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(6px)' }}>{trip.category}</div>
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: isHero ? '28px' : '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
                        <div style={{ width: 5, height: 5, borderRadius: '50%', background: cfg.dot }} />
                        <span style={{ fontFamily: 'monospace', fontSize: 7.5, color: cfg.dot, letterSpacing: '0.18em', textTransform: 'uppercase' }}>{trip.difficulty}</span>
                      </div>
                      <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: isHero ? 50 : 26, color: '#fff', letterSpacing: '0.03em', lineHeight: 0.93, margin: '0 0 7px' }}>{trip.title.toUpperCase()}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: isHero ? 14 : 10 }}>
                        <span style={{ fontFamily: 'monospace', fontSize: 8.5, color: 'rgba(255,255,255,0.32)', letterSpacing: '0.1em' }}>{trip.location}</span>
                        <span style={{ width: 2, height: 2, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'block', flexShrink: 0 }} />
                        <span style={{ fontFamily: 'monospace', fontSize: 8.5, color: 'rgba(255,255,255,0.32)', letterSpacing: '0.1em' }}>{trip.duration}</span>
                      </div>
                      {isHero && <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13.5, lineHeight: 1.65, marginBottom: 18, maxWidth: 420 }}>{trip.shortDesc}</p>}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: isHero ? 34 : 22, color: '#fff', letterSpacing: '0.04em', lineHeight: 1 }}>${trip.price.toLocaleString()}</div>
                        <div style={{ background: '#c8370a', color: '#fff', padding: '9px 16px', fontSize: 9.5, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: hovered ? 1 : 0, transform: hovered ? 'translateY(0)' : 'translateY(14px)', transition: 'all 0.32s ease', display: 'flex', alignItems: 'center', gap: 7 }}>View Trip</div>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* MANIFESTO */}
      <section style={{ position: 'relative', padding: `${isMobile ? '80px' : '160px'} 0`, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1516592673884-4a382d1124c2?w=1920&q=85" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.22) saturate(0.4)' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(8,12,16,0.95) 0%, rgba(8,12,16,0.6) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: `0 ${px}`, display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 48 : 80, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{ width: 28, height: 1, background: '#c8370a' }} />
              <span style={{ fontFamily: 'monospace', color: '#c8370a', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase' }}>Why BCAG</span>
            </div>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: isMobile ? 52 : 78, color: '#fff', letterSpacing: '0.02em', lineHeight: 0.9, margin: '0 0 24px' }}>
              THE WORLD'S<br />MOST QUALIFIED<br /><span style={{ color: '#c8370a' }}>GUIDES.</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, lineHeight: 1.8, marginBottom: 32, maxWidth: 400 }}>Ian Nicholson and Matt Schonwald hold the IFMGA certification — the highest international mountain guiding standard. Less than 2% of guides worldwide achieve this.</p>
            <a href="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: 6 }}>
              Meet the Guides <svg width="16" height="8" viewBox="0 0 16 8" fill="none"><path d="M1 4h14M10 1l5 3-5 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            {[['01','Safety First','WFR certified. Conservative decisions on every trip.'],['02','Small Ratios','Max 4:1. Real coaching, not crowd management.'],['03','Leave No Trace','Deep respect for the alpine environments we love.'],['04','True Alpinists','First ascents, guidebook authors, AMGA examiners.']].map(([num,title,body]) => (
              <div key={num} style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.06)', padding: isMobile ? '20px 16px' : '26px 22px' }}>
                <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 30, color: 'rgba(200,55,10,0.3)', lineHeight: 1, marginBottom: 10 }}>{num}</div>
                <div style={{ color: '#fff', fontWeight: 600, fontSize: 13, marginBottom: 6 }}>{title}</div>
                <div style={{ color: 'rgba(255,255,255,0.33)', fontSize: 12, lineHeight: 1.6 }}>{body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: '#0d1117', padding: `${py} 0` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: `0 ${px}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <div style={{ width: 28, height: 1, background: '#c8370a' }} />
            <span style={{ fontFamily: 'monospace', color: '#c8370a', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase' }}>Client Stories</span>
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: isMobile ? 48 : 64, color: '#fff', letterSpacing: '0.03em', lineHeight: 0.9, margin: `0 0 ${isMobile ? '36px' : '56px'}` }}>WHAT THEY SAY.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4,1fr)', gap: 2 }}>
            {[
              { name: 'Sarah K.', loc: 'Seattle', trip: 'Forbidden Tour', quote: "The single best week of my life. Ian made an incredibly demanding route feel achievable." },
              { name: 'Marcus T.', loc: 'Portland', trip: 'AIARE Level 1', quote: "Matt is an exceptional educator. This course changed how I think about backcountry travel." },
              { name: 'Julia R.', loc: 'Denver', trip: 'Chamonix Alps', quote: "Summiting in the French Alps with BCAG was a bucket list moment. Unforgettable." },
              { name: 'David L.', loc: 'San Francisco', trip: 'Steep Camp', quote: "I've skied with many guides. BCAG operates at a completely different level." },
            ].map(t => (
              <div key={t.name} style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.055)', padding: isMobile ? '24px 20px' : '28px 24px' }}>
                <div style={{ display: 'flex', gap: 2, marginBottom: 14 }}>{[...Array(5)].map((_,i) => <span key={i} style={{ color: '#c8370a', fontSize: 11 }}>★</span>)}</div>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13.5, lineHeight: 1.75, marginBottom: 20, fontStyle: 'italic' }}>"{t.quote}"</p>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 16 }}>
                  <div style={{ color: '#fff', fontWeight: 600, fontSize: 12.5 }}>{t.name}</div>
                  <div style={{ fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#c8370a', marginTop: 3 }}>{t.trip}</div>
                  <div style={{ fontFamily: 'monospace', fontSize: 8, color: 'rgba(255,255,255,0.25)', marginTop: 2 }}>{t.loc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section style={{ background: '#c8370a', padding: '16px 0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', animation: 'marquee 22s linear infinite', whiteSpace: 'nowrap', width: 'max-content' }}>
          {[...Array(4)].map((_, r) =>
            ['North Cascades','Alaska Range','French Alps','Swiss Alps','Patagonia','Ecuador','Japan','Rogers Pass'].map(d => (
              <span key={`${d}-${r}`} style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 18, color: 'rgba(255,255,255,0.88)', letterSpacing: '0.15em', marginRight: 40 }}>{d} <span style={{ color: 'rgba(255,255,255,0.35)', marginRight: 40 }}>·</span></span>
            ))
          )}
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ position: 'relative', padding: `${isMobile ? '80px' : '160px'} ${px}`, background: '#080c10', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.022, backgroundImage: 'repeating-linear-gradient(-45deg, rgba(255,255,255,0.6) 0, rgba(255,255,255,0.6) 1px, transparent 0, transparent 50%)', backgroundSize: '28px 28px' }} />
        <div style={{ position: 'relative', maxWidth: 800, margin: '0 auto' }}>
          <div style={{ fontFamily: 'monospace', color: '#c8370a', fontSize: 9, letterSpacing: '0.26em', textTransform: 'uppercase', marginBottom: 20 }}>— Book Your Adventure</div>
          <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: isMobile ? 'clamp(48px,12vw,72px)' : 'clamp(62px,8vw,118px)', color: '#fff', letterSpacing: '0.02em', lineHeight: 0.88, margin: '0 0 24px' }}>
            EVERY MOUNTAIN.<br /><span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.18)', color: 'transparent' }}>EVERY</span><span style={{ color: '#c8370a' }}> SEASON.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: 15, lineHeight: 1.75, maxWidth: 440, margin: '0 auto 36px' }}>Ian and Matt personally answer every inquiry. Tell us your dream — we'll build the trip.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 32 }}>
            <a href="/trips" style={{ background: '#c8370a', color: '#fff', padding: '14px 36px', fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none' }}>Browse All Trips</a>
            <a href="/contact" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.18)', color: '#fff', padding: '14px 36px', fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none' }}>Talk to a Guide</a>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 28, flexWrap: 'wrap' }}>
            <a href="tel:2067994092" style={{ color: 'rgba(255,255,255,0.28)', fontSize: 11, textDecoration: 'none', fontFamily: 'monospace', letterSpacing: '0.08em' }}>(206) 799-4092</a>
            <a href="mailto:info@bcadventureguides.com" style={{ color: 'rgba(255,255,255,0.28)', fontSize: 11, textDecoration: 'none', fontFamily: 'monospace', letterSpacing: '0.06em' }}>info@bcadventureguides.com</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#0d1117', borderTop: '1px solid rgba(255,255,255,0.04)', padding: `48px ${px} 32px` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'auto 1fr auto', gap: isMobile ? 36 : 72, alignItems: 'start', marginBottom: 40 }}>
            <div>
              <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, textDecoration: 'none' }}>
                <div style={{ width: 28, height: 28, background: '#c8370a', display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(0 0, 100% 0, 100% 72%, 72% 100%, 0 100%)' }}><span style={{ fontFamily: "'Bebas Neue',sans-serif", color: '#fff', fontSize: 11 }}>BC</span></div>
                <span style={{ fontFamily: "'Bebas Neue',sans-serif", color: '#fff', fontSize: 13, letterSpacing: '0.15em' }}>ADVENTURE GUIDES</span>
              </a>
              <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: 11, lineHeight: 1.7, maxWidth: 220, margin: '0 0 14px' }}>IFMGA/AMGA Mountain Guides. Seattle, WA.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <a href="tel:2067994092" style={{ color: 'rgba(255,255,255,0.28)', fontSize: 11, fontFamily: 'monospace', textDecoration: 'none' }}>(206) 799-4092</a>
                <a href="mailto:info@bcadventureguides.com" style={{ color: 'rgba(255,255,255,0.28)', fontSize: 11, fontFamily: 'monospace', textDecoration: 'none' }}>info@bcadventureguides.com</a>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(3,1fr)', gap: isMobile ? 24 : 40 }}>
              {[{title:'Trips',links:['Ski & Splitboard','Alpine Climbing','Rock Climbing','Avalanche Courses']},{title:'Company',links:['About BCAG','Our Guides','Testimonials','Contact']},{title:'Resources',links:['Trip Policy','Gear Lists','Rentals','Blog']}].map(col => (
                <div key={col.title}>
                  <div style={{ fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: 12 }}>{col.title}</div>
                  {col.links.map(link => <a key={link} href="/trips" style={{ display: 'block', color: 'rgba(255,255,255,0.35)', fontSize: 12, textDecoration: 'none', marginBottom: 8 }}>{link}</a>)}
                </div>
              ))}
            </div>
            {!isMobile && (
              <div>
                <div style={{ fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: 12 }}>Certified</div>
                {['IFMGA','AMGA','USFS'].map(b => <div key={b} style={{ border: '1px solid rgba(255,255,255,0.09)', padding: '6px 12px', marginBottom: 6, display: 'block', width: 'fit-content' }}><span style={{ fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>{b}</span></div>)}
              </div>
            )}
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 18, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
            <span style={{ fontFamily: 'monospace', fontSize: 10, color: 'rgba(255,255,255,0.14)' }}>© {new Date().getFullYear()} BC Adventure Guides</span>
            <span style={{ fontFamily: 'monospace', fontSize: 10, color: 'rgba(255,255,255,0.14)' }}>Images © Pablo Puruncajas</span>
          </div>
        </div>
      </footer>

      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-25%) } }`}</style>
    </div>
  )
}