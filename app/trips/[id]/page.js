'use client'

import { use, useState, useEffect } from 'react'
import MobileNav from '@/components/MobileNav'
import { trips } from '@/lib/data'

const diffConfig = {
  Beginner:     { dot: '#4ade80', color: '#4ade80', label: 'Beginner' },
  Intermediate: { dot: '#60a5fa', color: '#60a5fa', label: 'Intermediate' },
  Advanced:     { dot: '#fbbf24', color: '#fbbf24', label: 'Advanced' },
  Expert:       { dot: '#f87171', color: '#f87171', label: 'Expert' },
}

const GEAR_LISTS = {
  'Ski & Splitboard': [
    'Splitboard or touring skis + skins', 'Ski boots (AT or BC compatible)', 'Helmet',
    'Avalanche beacon (mandatory)', 'Avalanche probe (mandatory)', 'Avalanche shovel (mandatory)',
    'Ski goggles + sunglasses', 'Layering system (base, mid, shell)', 'Waterproof pants',
    'Insulated jacket', 'Gloves + liner gloves + mitts', 'Gaiters',
    'Ski poles with powder baskets', 'Daypack (30–40L)', 'Navigation (phone + paper map)',
    'Headlamp + extra batteries', 'Sunscreen SPF 50+', 'First aid kit',
  ],
  'Alpine': [
    'Mountaineering boots', 'Crampons (12-point)', 'Ice axe', 'Helmet',
    'Harness', 'Belay device + locking carabiner', 'Prusik cord (6mm × 5m × 2)',
    'Layering system (base, mid, shell)', 'Waterproof hardshell jacket + pants',
    'Insulated belay jacket', 'Gloves + liner gloves', 'Gaiters',
    'Mountaineering pack (40–55L)', 'Headlamp + extra batteries',
    'Sunscreen SPF 50+ + lip balm', 'Glacier glasses', 'Navigation tools',
  ],
  'Rock': [
    'Rock shoes', 'Helmet', 'Harness', 'Belay device + locking carabiner',
    '6–8 locking carabiners', 'Slings (120cm × 2, 60cm × 2)',
    'Approach shoes', 'Layering system', 'Softshell or light fleece',
    'Rain jacket', 'Daypack (25–35L)', 'Headlamp',
    'Sunscreen + lip balm', 'Water (3L minimum)', 'High-calorie snacks',
  ],
  'Avalanche': [
    'Avalanche beacon (mandatory — must be worn on your person)', 'Avalanche probe (mandatory)',
    'Avalanche shovel (mandatory)', 'Backcountry skis or splitboard + skins',
    'Ski or AT boots', 'Helmet', 'Ski goggles + sunglasses',
    'Layering system (base, mid, shell)', 'Waterproof jacket + pants',
    'Gloves + warm hat', 'Daypack (25–35L)',
    'Water + snacks', 'Headlamp', 'Sunscreen SPF 50+',
  ],
  "Women's Programs": [
    'Splitboard or touring skis + skins', 'Ski boots (AT or BC compatible)', 'Helmet',
    'Avalanche beacon (mandatory)', 'Avalanche probe (mandatory)', 'Avalanche shovel (mandatory)',
    'Ski goggles + sunglasses', 'Layering system (base, mid, shell)', 'Waterproof pants',
    'Insulated jacket', 'Gloves + mitts', 'Gaiters',
    'Ski poles with powder baskets', 'Daypack (30–40L)', 'Headlamp + extra batteries',
    'Sunscreen SPF 50+', 'First aid kit',
  ],
}

const FAQS = [
  { q: 'What is your cancellation policy?', a: 'Cancellations made more than 60 days prior to the trip date receive a full refund minus a $100 processing fee. 30–60 days: 50% refund. Less than 30 days: no refund. We strongly recommend travel insurance.' },
  { q: 'What fitness level is required?', a: 'Each trip lists a difficulty rating. In general, you should be able to hike with a 30-pound pack for 6-8 hours before coming on any overnight trip. Specific fitness benchmarks are listed on each trip page or available on request.' },
  { q: 'Do you provide equipment?', a: 'Group safety equipment (ropes, hardware, rescue gear) is always provided. Personal gear (boots, skis, harness, etc.) is your responsibility. Rental gear is available at many locations — ask us for recommendations.' },
  { q: 'How far in advance should I book?', a: 'Popular trips like the Forbidden Tour fill up 6–9 months in advance. We recommend booking as early as possible to secure your spot. A 25% deposit holds your reservation.' },
  { q: 'Is travel insurance required?', a: "Travel insurance is required for all international trips and strongly recommended for domestic expeditions. Your policy must include emergency evacuation coverage. We're happy to recommend providers." },
  { q: 'What happens if weather forces a change of plans?', a: "Safety is our top priority. If conditions deteriorate, our guides will always have a Plan B. We never cancel a trip because of weather alone — we adapt. On rare occasions when a trip cannot safely proceed, we offer rebooking options." },
]

export default function TripDetailPage({ params }) {
  const { id } = use(params)
  const trip = trips.find(t => t.id === id)

  const [isMobile, setIsMobile] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [heroLoaded, setHeroLoaded] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    const timer = setTimeout(() => setHeroLoaded(true), 80)
    return () => { window.removeEventListener('resize', check); clearTimeout(timer) }
  }, [])

  if (!trip) {
    return (
      <div style={{ background: '#080c10', minHeight: '100vh', fontFamily: "'DM Sans', sans-serif", display: 'flex', flexDirection: 'column' }}>
        <MobileNav />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '80px 24px' }}>
          <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 120, color: 'rgba(255,255,255,0.04)', lineHeight: 1, marginBottom: 24 }}>404</div>
          <h1 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 42, color: '#fff', letterSpacing: '0.04em', margin: '0 0 12px' }}>TRIP NOT FOUND</h1>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 15, marginBottom: 32, maxWidth: 360 }}>We couldn't find that trip. It may have sold out or been removed.</p>
          <a href="/trips" style={{ background: '#c8370a', color: '#fff', padding: '13px 32px', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none' }}>View All Trips</a>
        </div>
      </div>
    )
  }

  const cfg = diffConfig[trip.difficulty] || diffConfig['Intermediate']
  const relatedTrips = trips.filter(t => t.id !== trip.id && (t.category === trip.category || t.difficulty === trip.difficulty)).slice(0, 3)
  const gearList = GEAR_LISTS[trip.category] || GEAR_LISTS['Alpine']
  const px = isMobile ? '20px' : '48px'
  const TABS = ['overview', 'itinerary', 'gear', 'faq']

  return (
    <div style={{ background: '#080c10', minHeight: '100vh', fontFamily: "'DM Sans', sans-serif", overflowX: 'hidden' }}>

      {/* HERO */}
      <section style={{ position: 'relative', height: isMobile ? '75vh' : '85vh', minHeight: isMobile ? 480 : 580, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 50 }}>
          <MobileNav />
        </div>
        <img
          src={trip.heroImage}
          alt={trip.title}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(8,12,16,0.35) 0%, rgba(8,12,16,0.05) 30%, rgba(8,12,16,0.75) 70%, rgba(8,12,16,1) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(8,12,16,0.7) 0%, rgba(8,12,16,0.1) 60%, transparent 100%)' }} />

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: `0 ${px} ${isMobile ? '40px' : '64px'}`, zIndex: 10 }}>
          <div style={{ opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? 'none' : 'translateY(16px)', transition: 'all 0.7s ease 0.05s' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 24, height: 1, background: '#c8370a' }} />
                <span style={{ fontFamily: 'monospace', color: '#c8370a', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase' }}>{trip.category}</span>
              </div>
              <span style={{ fontFamily: 'monospace', color: 'rgba(255,255,255,0.2)', fontSize: 9 }}>·</span>
              <span style={{ fontFamily: 'monospace', color: 'rgba(255,255,255,0.35)', fontSize: 9, letterSpacing: '0.14em' }}>{trip.location}</span>
            </div>

            <h1 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: isMobile ? 'clamp(44px,11vw,72px)' : 'clamp(56px,7vw,108px)', lineHeight: 0.88, color: '#fff', letterSpacing: '0.02em', margin: '0 0 20px', maxWidth: 900 }}>
              {trip.title.toUpperCase()}
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 12 : 20, flexWrap: 'wrap' }}>
              {/* Difficulty badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 7, background: 'rgba(8,12,16,0.65)', border: `1px solid ${cfg.dot}33`, padding: '6px 12px', backdropFilter: 'blur(8px)' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: cfg.dot, flexShrink: 0 }} />
                <span style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: cfg.color }}>{trip.difficulty}</span>
              </div>
              {/* Duration */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 7, background: 'rgba(8,12,16,0.65)', padding: '6px 12px', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <span style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>◷ {trip.duration}</span>
              </div>
              {/* Ratio */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 7, background: 'rgba(8,12,16,0.65)', padding: '6px 12px', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <span style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>Guide ratio {trip.ratio}</span>
              </div>
              {/* Price */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginLeft: isMobile ? 0 : 'auto' }}>
                <span style={{ fontFamily: 'monospace', fontSize: 10, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>from</span>
                <span style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: isMobile ? 38 : 48, color: '#fff', letterSpacing: '0.04em', lineHeight: 1 }}>${trip.price.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN LAYOUT */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: `0 ${px}`, display: isMobile ? 'block' : 'grid', gridTemplateColumns: '1fr 340px', gap: 48, paddingTop: 48 }}>

        {/* LEFT COLUMN — TABS */}
        <div>
          {/* Tab bar */}
          <div style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: 40, gap: 0, overflowX: 'auto' }}>
            {TABS.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                style={{ background: 'none', border: 'none', borderBottom: activeTab === tab ? '2px solid #c8370a' : '2px solid transparent', color: activeTab === tab ? '#fff' : 'rgba(255,255,255,0.35)', padding: isMobile ? '14px 16px' : '16px 24px', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", transition: 'color 0.2s', whiteSpace: 'nowrap', marginBottom: -1 }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 24, height: 1, background: '#c8370a' }} />
                <span style={{ fontFamily: 'monospace', color: '#c8370a', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase' }}>Trip Overview</span>
              </div>
              <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: isMobile ? 40 : 52, color: '#fff', letterSpacing: '0.03em', lineHeight: 0.9, margin: '0 0 24px' }}>ABOUT THIS TRIP</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, lineHeight: 1.85, marginBottom: 32, maxWidth: 640 }}>{trip.longDesc}</p>

              {/* Quick stats grid */}
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: 2, marginBottom: 40 }}>
                {[
                  ['Duration', trip.duration],
                  ['Difficulty', trip.difficulty],
                  ['Guide Ratio', trip.ratio],
                  ['Season', trip.season],
                ].map(([label, value]) => (
                  <div key={label} style={{ background: '#0d1117', border: '1px solid rgba(255,255,255,0.06)', padding: '20px 18px' }}>
                    <div style={{ fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 8 }}>{label}</div>
                    <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 22, color: '#fff', letterSpacing: '0.04em', lineHeight: 1 }}>{value}</div>
                  </div>
                ))}
              </div>

              {/* Dates */}
              {trip.dates && trip.dates.length > 0 && (
                <div style={{ marginBottom: 40 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                    <div style={{ width: 24, height: 1, background: '#c8370a' }} />
                    <span style={{ fontFamily: 'monospace', color: '#c8370a', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase' }}>Available Dates</span>
                  </div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {trip.dates.map((date, i) => (
                      <div key={i} style={{ background: 'rgba(200,55,10,0.08)', border: '1px solid rgba(200,55,10,0.25)', padding: '8px 16px' }}>
                        <span style={{ fontFamily: 'monospace', fontSize: 11, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.06em' }}>{date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Included / Not Included */}
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 2, marginBottom: 40 }}>
                <div style={{ background: '#0d1117', border: '1px solid rgba(255,255,255,0.06)', padding: '24px 22px' }}>
                  <div style={{ fontFamily: 'monospace', fontSize: 8.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#4ade80', marginBottom: 14 }}>✓ Included</div>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.75, margin: 0 }}>{trip.included}</p>
                </div>
                <div style={{ background: '#0d1117', border: '1px solid rgba(255,255,255,0.06)', padding: '24px 22px' }}>
                  <div style={{ fontFamily: 'monospace', fontSize: 8.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 14 }}>✗ Not Included</div>
                  <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, lineHeight: 1.75, margin: 0 }}>{trip.notIncluded}</p>
                </div>
              </div>

              {/* Gallery */}
              {trip.gallery && trip.gallery.length > 0 && (
                <div style={{ marginBottom: 40 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                    <div style={{ width: 24, height: 1, background: '#c8370a' }} />
                    <span style={{ fontFamily: 'monospace', color: '#c8370a', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase' }}>Gallery</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: 3 }}>
                    {trip.gallery.map((img, i) => (
                      <div key={i} style={{ position: 'relative', paddingBottom: '75%', overflow: 'hidden', background: '#0d1117' }}>
                        <img src={img} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ITINERARY TAB */}
          {activeTab === 'itinerary' && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 24, height: 1, background: '#c8370a' }} />
                <span style={{ fontFamily: 'monospace', color: '#c8370a', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase' }}>Day by Day</span>
              </div>
              <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: isMobile ? 40 : 52, color: '#fff', letterSpacing: '0.03em', lineHeight: 0.9, margin: '0 0 32px' }}>ITINERARY</h2>

              {trip.itinerary && trip.itinerary.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {trip.itinerary.map((day, i) => (
                    <div key={i} style={{ background: '#0d1117', border: '1px solid rgba(255,255,255,0.06)', padding: isMobile ? '22px 20px' : '28px 32px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '72px 1fr', gap: isMobile ? 10 : 28, alignItems: 'start' }}>
                      <div style={{ display: 'flex', flexDirection: isMobile ? 'row' : 'column', alignItems: isMobile ? 'center' : 'flex-start', gap: isMobile ? 10 : 4 }}>
                        <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: isMobile ? 32 : 44, color: 'rgba(200,55,10,0.4)', lineHeight: 1 }}>D{day.day}</div>
                        {isMobile && <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.1)' }} />}
                        <div style={{ fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', paddingTop: isMobile ? 0 : 2 }}>Day {day.day}</div>
                      </div>
                      <div>
                        <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 22, color: '#fff', letterSpacing: '0.04em', lineHeight: 1, margin: '0 0 6px' }}>{day.title.toUpperCase()}</h3>
                        <div style={{ fontFamily: 'monospace', fontSize: 9, color: '#c8370a', letterSpacing: '0.12em', marginBottom: 12 }}>{day.stats}</div>
                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13.5, lineHeight: 1.75, margin: 0 }}>{day.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ background: '#0d1117', border: '1px solid rgba(255,255,255,0.06)', padding: '40px 32px', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 36, color: 'rgba(255,255,255,0.08)', marginBottom: 12 }}>CUSTOM ITINERARY</div>
                  <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 14, lineHeight: 1.7, maxWidth: 400, margin: '0 auto 24px' }}>The itinerary for this program varies based on conditions, group ability, and objectives. Contact us for a detailed breakdown.</p>
                  <a href="/contact" style={{ background: '#c8370a', color: '#fff', padding: '11px 24px', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block' }}>Request Itinerary</a>
                </div>
              )}
            </div>
          )}

          {/* GEAR TAB */}
          {activeTab === 'gear' && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 24, height: 1, background: '#c8370a' }} />
                <span style={{ fontFamily: 'monospace', color: '#c8370a', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase' }}>What to Bring</span>
              </div>
              <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: isMobile ? 40 : 52, color: '#fff', letterSpacing: '0.03em', lineHeight: 0.9, margin: '0 0 16px' }}>GEAR LIST</h2>
              <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13.5, lineHeight: 1.75, marginBottom: 32, maxWidth: 560 }}>
                This is the gear list for {trip.category} programs. Some items may vary by specific trip — your guide will confirm before departure.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 2, marginBottom: 32 }}>
                {gearList.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '13px 16px', background: '#0d1117', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(200,55,10,0.5)', flexShrink: 0 }} />
                    <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.4 }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ background: 'rgba(200,55,10,0.07)', border: '1px solid rgba(200,55,10,0.2)', padding: '20px 22px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{ color: '#c8370a', fontSize: 16, flexShrink: 0, marginTop: 1 }}>ⓘ</div>
                <div>
                  <div style={{ color: '#fff', fontWeight: 600, fontSize: 13, marginBottom: 5 }}>Gear rentals available</div>
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12.5, lineHeight: 1.65, margin: 0 }}>Don't have everything on the list? We can point you to rental shops near the trailhead. Contact us after booking.</p>
                </div>
              </div>
            </div>
          )}

          {/* FAQ TAB */}
          {activeTab === 'faq' && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 24, height: 1, background: '#c8370a' }} />
                <span style={{ fontFamily: 'monospace', color: '#c8370a', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase' }}>Common Questions</span>
              </div>
              <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: isMobile ? 40 : 52, color: '#fff', letterSpacing: '0.03em', lineHeight: 0.9, margin: '0 0 32px' }}>FAQ</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {FAQS.map((faq, i) => (
                  <div key={i} style={{ background: '#0d1117', border: '1px solid rgba(255,255,255,0.06)', padding: '22px 24px' }}>
                    <div style={{ color: '#fff', fontWeight: 600, fontSize: 14, marginBottom: 10, lineHeight: 1.4 }}>{faq.q}</div>
                    <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13.5, lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 32, background: 'rgba(200,55,10,0.06)', border: '1px solid rgba(200,55,10,0.2)', padding: '24px 22px', display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <div style={{ color: '#fff', fontWeight: 600, fontSize: 13.5, marginBottom: 4 }}>Still have questions?</div>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, margin: 0 }}>Ian and Matt answer every inquiry personally.</p>
                </div>
                <a href="/contact" style={{ background: '#c8370a', color: '#fff', padding: '11px 22px', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap' }}>Ask a Guide →</a>
              </div>
            </div>
          )}

          {/* Mobile booking CTA (non-fixed, inline) */}
          {isMobile && (
            <div style={{ marginTop: 40, marginBottom: 8, background: '#0d1117', border: '1px solid rgba(255,255,255,0.08)', padding: '28px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 5 }}>from</div>
                  <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 44, color: '#fff', letterSpacing: '0.04em', lineHeight: 1 }}>${trip.price.toLocaleString()}</div>
                </div>
                {trip.spotsLeft && trip.spotsLeft <= 4 && (
                  <div style={{ background: '#c8370a', color: '#fff', fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.16em', textTransform: 'uppercase', padding: '6px 10px', fontWeight: 700 }}>{trip.spotsLeft} spots left</div>
                )}
              </div>
              {trip.dates && trip.dates.length > 0 && (
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 8 }}>Dates</div>
                  {trip.dates.slice(0, 2).map((d, i) => (
                    <div key={i} style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12.5, marginBottom: 4, fontFamily: 'monospace' }}>{d}</div>
                  ))}
                </div>
              )}
              <a href={trip.bookingUrl || '#'} style={{ display: 'block', background: '#c8370a', color: '#fff', padding: '15px 24px', fontSize: 12, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none', textAlign: 'center' }}>
                Book This Trip
              </a>
              <a href="/contact" style={{ display: 'block', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.55)', padding: '13px 24px', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', textAlign: 'center', marginTop: 8 }}>
                Ask a Question
              </a>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN — STICKY SIDEBAR (desktop only) */}
        {!isMobile && (
          <div>
            <div style={{ position: 'sticky', top: 88 }}>
              <div style={{ background: '#0d1117', border: '1px solid rgba(255,255,255,0.08)' }}>
                {/* Price header */}
                <div style={{ padding: '28px 28px 22px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <div style={{ fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 8 }}>Price per person, from</div>
                  <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 52, color: '#fff', letterSpacing: '0.04em', lineHeight: 1, marginBottom: 10 }}>${trip.price.toLocaleString()}</div>
                  {trip.spotsLeft && trip.spotsLeft <= 4 && (
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(200,55,10,0.12)', border: '1px solid rgba(200,55,10,0.3)', padding: '5px 10px' }}>
                      <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#c8370a' }} />
                      <span style={{ fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#c8370a', fontWeight: 700 }}>{trip.spotsLeft} spots left</span>
                    </div>
                  )}
                </div>

                {/* Trip details */}
                <div style={{ padding: '20px 28px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {[
                    ['Duration', trip.duration],
                    ['Guide Ratio', trip.ratio],
                    ['Difficulty', trip.difficulty],
                    ['Season', trip.season],
                    ['Location', trip.location],
                  ].map(([label, value]) => (
                    <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>{label}</span>
                      <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12.5, fontWeight: 500 }}>{value}</span>
                    </div>
                  ))}
                </div>

                {/* Dates */}
                {trip.dates && trip.dates.length > 0 && (
                  <div style={{ padding: '20px 28px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                    <div style={{ fontFamily: 'monospace', fontSize: 8.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 12 }}>Available Dates</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {trip.dates.map((date, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#c8370a', flexShrink: 0 }} />
                          <span style={{ fontFamily: 'monospace', fontSize: 11, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.04em' }}>{date}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA buttons */}
                <div style={{ padding: '22px 28px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <a href={trip.bookingUrl || '#'}
                    style={{ display: 'block', background: '#c8370a', color: '#fff', padding: '15px 24px', fontSize: 12, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none', textAlign: 'center', transition: 'background 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#e04010'}
                    onMouseLeave={e => e.currentTarget.style.background = '#c8370a'}
                  >
                    Book This Trip
                  </a>
                  <a href="/contact"
                    style={{ display: 'block', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.55)', padding: '13px 24px', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', textAlign: 'center', transition: 'border-color 0.2s, color 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = '#fff' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.55)' }}
                  >
                    Ask a Question
                  </a>
                </div>

                {/* Trust signals */}
                <div style={{ padding: '16px 28px 24px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    ['✓', 'IFMGA certified guides'],
                    ['✓', 'Small group — ' + trip.ratio + ' ratio'],
                    ['✓', 'Safety gear included'],
                  ].map(([icon, text]) => (
                    <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                      <span style={{ color: '#4ade80', fontSize: 11, fontWeight: 700 }}>{icon}</span>
                      <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12 }}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* RELATED TRIPS */}
      {relatedTrips.length > 0 && (
        <section style={{ background: '#0d1117', padding: `${isMobile ? '64px' : '96px'} 0`, marginTop: 64, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: `0 ${px}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div style={{ width: 24, height: 1, background: '#c8370a' }} />
              <span style={{ fontFamily: 'monospace', color: '#c8370a', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase' }}>You Might Also Like</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 36, gap: 12 }}>
              <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: isMobile ? 44 : 60, color: '#fff', letterSpacing: '0.03em', lineHeight: 0.9, margin: 0 }}>RELATED TRIPS</h2>
              <a href="/trips" style={{ color: 'rgba(255,255,255,0.3)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }}>
                View All <svg width="14" height="7" viewBox="0 0 16 8" fill="none"><path d="M1 4h14M10 1l5 3-5 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : `repeat(${relatedTrips.length}, 1fr)`, gap: 3 }}>
              {relatedTrips.map(related => {
                const rcfg = diffConfig[related.difficulty] || diffConfig['Intermediate']
                return (
                  <a key={related.id} href={`/trips/${related.id}`}
                    style={{ display: 'block', textDecoration: 'none', background: '#080c10', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden', transition: 'border-color 0.3s' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(200,55,10,0.3)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}
                  >
                    <div style={{ position: 'relative', height: isMobile ? 180 : 200, overflow: 'hidden' }}>
                      <img src={related.image} alt={related.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,12,16,0.85) 0%, transparent 60%)' }} />
                      <div style={{ position: 'absolute', bottom: 10, left: 14 }}>
                        <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 24, color: '#fff', letterSpacing: '0.04em', lineHeight: 1 }}>${related.price.toLocaleString()}</div>
                      </div>
                    </div>
                    <div style={{ padding: '16px 18px 18px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                        <span style={{ fontFamily: 'monospace', fontSize: 7.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c8370a' }}>{related.category}</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                          <div style={{ width: 4, height: 4, borderRadius: '50%', background: rcfg.dot }} />
                          <span style={{ fontFamily: 'monospace', fontSize: 7.5, color: rcfg.color, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{related.difficulty}</span>
                        </div>
                      </div>
                      <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 22, color: '#fff', letterSpacing: '0.03em', lineHeight: 0.95, margin: '0 0 8px' }}>{related.title}</h3>
                      <div style={{ display: 'flex', gap: 12, paddingTop: 10, borderTop: '1px solid rgba(255,255,255,0.05)', alignItems: 'center' }}>
                        <span style={{ fontFamily: 'monospace', fontSize: 9, color: 'rgba(255,255,255,0.28)', letterSpacing: '0.08em' }}>◷ {related.duration}</span>
                        <span style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.2)', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>View →</span>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer style={{ background: '#080c10', borderTop: '1px solid rgba(255,255,255,0.04)', padding: `48px ${px} 32px` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'auto 1fr', gap: isMobile ? 32 : 72, marginBottom: 36 }}>
            <div>
              <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, textDecoration: 'none' }}>
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

      {/* Mobile fixed bottom CTA */}
      {isMobile && (
        <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 100, background: '#080c10', borderTop: '1px solid rgba(255,255,255,0.1)', padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>from</div>
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 28, color: '#fff', letterSpacing: '0.04em', lineHeight: 1 }}>${trip.price.toLocaleString()}</div>
          </div>
          <a href="/contact" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '11px 16px', fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none' }}>Inquire</a>
          <a href={trip.bookingUrl || '#'} style={{ background: '#c8370a', color: '#fff', padding: '11px 20px', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none' }}>Book Now</a>
        </div>
      )}
    </div>
  )
}
