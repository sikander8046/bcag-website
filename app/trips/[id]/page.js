'use client'

import { useState, useMemo, useEffect } from 'react'
import MobileNav from '@/components/MobileNav'

const ALL_TRIPS = [
  { id: 'forbidden-tour', title: 'Forbidden Tour', category: 'Ski & Splitboard', location: 'North Cascades, WA', duration: '4 Days', durationDays: 4, difficulty: 'Expert', price: 1395, spotsLeft: 3, season: 'Spring', image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=85', shortDesc: 'The Cascades answer to the Haute Route. Three passes, three peaks, endless descents across the largest glaciers in the Lower 48.' },
  { id: 'steep-camp', title: 'Steep Camp', category: 'Ski & Splitboard', location: 'North Cascades, WA', duration: '3 Days', durationDays: 3, difficulty: 'Advanced', price: 975, spotsLeft: 5, season: 'Winter', image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=85', shortDesc: 'Master steep and technical terrain with focused coaching. Small groups, maximum progression.' },
  { id: 'aiare-level-1', title: 'AIARE Level 1 Course', category: 'Avalanche', location: 'Washington Cascades', duration: '3 Days', durationDays: 3, difficulty: 'Beginner', price: 650, spotsLeft: 8, season: 'Winter', image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=85', shortDesc: 'The gold standard in recreational avalanche education. Learn to travel safely in the backcountry.' },
  { id: 'aiare-level-2', title: 'AIARE Level 2 Course', category: 'Avalanche', location: 'Washington Cascades', duration: '4 Days', durationDays: 4, difficulty: 'Intermediate', price: 950, spotsLeft: 6, season: 'Winter', image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=85', shortDesc: 'Advanced avalanche decision-making for experienced backcountry travelers.' },
  { id: 'aiare-rescue', title: 'AIARE Rescue Course', category: 'Avalanche', location: 'Washington Cascades', duration: '1 Day', durationDays: 1, difficulty: 'Beginner', price: 225, spotsLeft: 10, season: 'Winter', image: 'https://images.unsplash.com/photo-1516592673884-4a382d1124c2?w=800&q=85', shortDesc: 'Focused companion rescue training. Practice beacon searches and shoveling strategies.' },
  { id: 'chamonix-climbing', title: 'Chamonix — French Alps', category: 'Alpine', location: 'Chamonix, France', duration: '8 Days', durationDays: 8, difficulty: 'Advanced', price: 3200, spotsLeft: 2, season: 'Summer', image: 'https://images.unsplash.com/photo-1502126324834-38f8e02d7160?w=800&q=85', shortDesc: 'Climb the classics of the Mont Blanc massif with IFMGA certified guides.' },
  { id: 'alaska-ski-mo', title: 'Alaska Range Ski Mo Camp', category: 'Ski & Splitboard', location: 'Alaska Range, AK', duration: '10 Days', durationDays: 10, difficulty: 'Expert', price: 4800, spotsLeft: 4, season: 'Spring', image: 'https://images.unsplash.com/photo-1516592673884-4a382d1124c2?w=800&q=85', shortDesc: 'Fly-in glacier skiing deep in the Alaska Range. First descents, remote camps, ten days.' },
  { id: 'morning-star-peak', title: 'Morning Star Peak', category: 'Rock', location: 'North Cascades, WA', duration: '1 Day', durationDays: 1, difficulty: 'Intermediate', price: 425, spotsLeft: 6, season: 'Summer', image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&q=85', shortDesc: 'Classic multi-pitch granite. II+ 5.10a. Best moderate route in the Cascades.' },
  { id: 'dorado-needle', title: 'Dorado Needle — NW Ridge', category: 'Alpine', location: 'North Cascades, WA', duration: '2 Days', durationDays: 2, difficulty: 'Intermediate', price: 750, spotsLeft: 4, season: 'Summer', image: 'https://images.unsplash.com/photo-1502126324834-38f8e02d7160?w=800&q=85', shortDesc: 'A stunning two-day alpine objective in the heart of the Cascades.' },
  { id: 'forbidden-peak', title: 'Forbidden Peak — East Ridge', category: 'Alpine', location: 'North Cascades, WA', duration: '2 Days', durationDays: 2, difficulty: 'Advanced', price: 850, spotsLeft: 3, season: 'Summer', image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=85', shortDesc: 'One of the finest alpine routes in North America. III 5.8. Exposed ridge climbing.' },
  { id: 'snoqualmie-ski', title: 'Snoqualmie Pass Ski Tours', category: 'Ski & Splitboard', location: 'Snoqualmie Pass, WA', duration: '1 Day', durationDays: 1, difficulty: 'Beginner', price: 295, spotsLeft: 8, season: 'Winter', image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=85', shortDesc: 'Perfect intro to backcountry skiing. Local flavor, accessible terrain, expert guidance.' },
  { id: 'haute-route', title: 'Haute Route', category: 'Ski & Splitboard', location: 'Swiss Alps', duration: '7 Days', durationDays: 7, difficulty: 'Advanced', price: 3800, spotsLeft: 4, season: 'Spring', image: 'https://images.unsplash.com/photo-1502126324834-38f8e02d7160?w=800&q=85', shortDesc: 'The original hut-to-hut ski traverse. Chamonix to Zermatt — the trip that started it all.' },
  { id: 'rogers-pass', title: 'Rogers Pass Adventure Week', category: 'Ski & Splitboard', location: 'Rogers Pass, BC', duration: '7 Days', durationDays: 7, difficulty: 'Advanced', price: 2600, spotsLeft: 5, season: 'Winter', image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=85', shortDesc: "Canada's backcountry ski mecca. Deep Selkirk powder and hut-to-hut travel." },
  { id: 'japan-powder', title: 'Japan — Zen of Powder', category: 'Ski & Splitboard', location: 'Niseko, Japan', duration: '10 Days', durationDays: 10, difficulty: 'Intermediate', price: 3400, spotsLeft: 6, season: 'Winter', image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=85', shortDesc: 'Legendary Hokkaido powder with Japanese culture and incredible food.' },
  { id: 'womens-ski-alpinism', title: "Women's Intro to Ski Alpinism", category: "Women's Programs", location: 'North Cascades, WA', duration: '3 Days', durationDays: 3, difficulty: 'Intermediate', price: 875, spotsLeft: 7, season: 'Spring', image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=85', shortDesc: "Women-specific ski mountaineering. Build confidence and community in a supportive environment." },
  { id: 'crevasse-rescue', title: 'Crevasse Rescue Seminar', category: 'Alpine', location: 'North Cascades, WA', duration: '1 Day', durationDays: 1, difficulty: 'Intermediate', price: 295, spotsLeft: 9, season: 'Summer', image: 'https://images.unsplash.com/photo-1516592673884-4a382d1124c2?w=800&q=85', shortDesc: 'Essential skills for glacier travel. Learn crevasse rescue and safe glacier movement.' },
]

const CATEGORIES = ['All', 'Ski & Splitboard', 'Alpine', 'Rock', 'Avalanche', "Women's Programs"]
const DIFFICULTIES = ['All', 'Beginner', 'Intermediate', 'Advanced', 'Expert']
const SEASONS = ['All', 'Winter', 'Spring', 'Summer']
const SORT_OPTIONS = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Duration: Short to Long', 'Duration: Long to Short']

const diffConfig = {
  Beginner: { dot: '#4ade80', color: '#4ade80' },
  Intermediate: { dot: '#60a5fa', color: '#60a5fa' },
  Advanced: { dot: '#fbbf24', color: '#fbbf24' },
  Expert: { dot: '#f87171', color: '#f87171' },
}

export default function TripsPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [difficulty, setDifficulty] = useState('All')
  const [season, setSeason] = useState('All')
  const [maxPrice, setMaxPrice] = useState(5000)
  const [sort, setSort] = useState('Featured')
  const [hoveredTrip, setHoveredTrip] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const filtered = useMemo(() => {
    let result = ALL_TRIPS.filter(t => {
      if (search && !t.title.toLowerCase().includes(search.toLowerCase()) && !t.shortDesc.toLowerCase().includes(search.toLowerCase()) && !t.location.toLowerCase().includes(search.toLowerCase())) return false
      if (category !== 'All' && t.category !== category) return false
      if (difficulty !== 'All' && t.difficulty !== difficulty) return false
      if (season !== 'All' && t.season !== season) return false
      if (t.price > maxPrice) return false
      return true
    })
    switch (sort) {
      case 'Price: Low to High': result = [...result].sort((a, b) => a.price - b.price); break
      case 'Price: High to Low': result = [...result].sort((a, b) => b.price - a.price); break
      case 'Duration: Short to Long': result = [...result].sort((a, b) => a.durationDays - b.durationDays); break
      case 'Duration: Long to Short': result = [...result].sort((a, b) => b.durationDays - a.durationDays); break
    }
    return result
  }, [search, category, difficulty, season, maxPrice, sort])

  const clearFilters = () => { setSearch(''); setCategory('All'); setDifficulty('All'); setSeason('All'); setMaxPrice(5000); setSort('Featured') }
  const hasActiveFilters = search || category !== 'All' || difficulty !== 'All' || season !== 'All' || maxPrice < 5000
  const px = isMobile ? '20px' : '48px'

  return (
    <div style={{ background: '#080c10', minHeight: '100vh', fontFamily: "'DM Sans', sans-serif", overflowX: 'hidden' }}>
      <MobileNav />

      {/* HERO HEADER */}
      <section style={{ position: 'relative', paddingTop: 64, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1920&q=80" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.2) saturate(0.4)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(8,12,16,0.5) 0%, rgba(8,12,16,1) 100%)' }} />
        </div>
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: `${isMobile ? '48px' : '64px'} ${px} ${isMobile ? '40px' : '52px'}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            <div style={{ width: 28, height: 1, background: '#c8370a' }} />
            <span style={{ fontFamily: 'monospace', color: '#c8370a', fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase' }}>All Expeditions</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
            <h1 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: isMobile ? 'clamp(48px,12vw,72px)' : 'clamp(56px,7vw,100px)', color: '#fff', letterSpacing: '0.02em', lineHeight: 0.9, margin: 0 }}>
              FIND YOUR<br /><span style={{ color: '#c8370a' }}>ADVENTURE.</span>
            </h1>
            <div style={{ textAlign: isMobile ? 'left' : 'right', paddingBottom: 4 }}>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: isMobile ? 40 : 52, color: '#fff', letterSpacing: '0.05em', lineHeight: 1 }}>{filtered.length}</div>
              <div style={{ fontFamily: 'monospace', fontSize: 8.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>Trips Found</div>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH + FILTERS */}
      <div style={{ background: '#0d1117', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'sticky', top: 64, zIndex: 40 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: `16px ${px}` }}>

          {/* Search */}
          <div style={{ position: 'relative', marginBottom: 12 }}>
            <div style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.25)', pointerEvents: 'none' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            </div>
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search trips, locations, activities..."
              style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', padding: '11px 14px 11px 40px', color: '#fff', fontSize: 14, outline: 'none', boxSizing: 'border-box', fontFamily: "'DM Sans', sans-serif", transition: 'border-color 0.2s' }}
              onFocus={e => e.target.style.borderColor = '#c8370a'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
            />
            {search && <button onClick={() => setSearch('')} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'rgba(255,255,255,0.3)', cursor: 'pointer', fontSize: 18, lineHeight: 1 }}>×</button>}
          </div>

          {/* Mobile: toggle filters button */}
          {isMobile ? (
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <button onClick={() => setShowFilters(!showFilters)} style={{ background: showFilters ? '#c8370a' : 'rgba(255,255,255,0.06)', border: `1px solid ${showFilters ? '#c8370a' : 'rgba(255,255,255,0.1)'}`, color: '#fff', padding: '8px 16px', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', fontWeight: 600, fontFamily: "'DM Sans', sans-serif", display: 'flex', alignItems: 'center', gap: 8 }}>
                ⚙ Filters {hasActiveFilters ? `(active)` : ''}
              </button>
              {hasActiveFilters && <button onClick={clearFilters} style={{ background: 'none', border: '1px solid rgba(200,55,10,0.4)', color: '#c8370a', padding: '8px 14px', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>Clear</button>}
            </div>
          ) : (
            /* Desktop filters */
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {CATEGORIES.map(c => (
                  <button key={c} onClick={() => setCategory(c)} style={{ background: category === c ? '#c8370a' : 'rgba(255,255,255,0.04)', border: `1px solid ${category === c ? '#c8370a' : 'rgba(255,255,255,0.1)'}`, color: category === c ? '#fff' : 'rgba(255,255,255,0.45)', padding: '6px 12px', fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', fontWeight: 600, transition: 'all 0.2s', fontFamily: "'DM Sans', sans-serif" }}>{c}</button>
                ))}
              </div>
              <div style={{ width: 1, height: 24, background: 'rgba(255,255,255,0.1)' }} />
              <select value={difficulty} onChange={e => setDifficulty(e.target.value)} style={{ background: '#0d1117', border: '1px solid rgba(255,255,255,0.1)', color: difficulty !== 'All' ? '#fff' : 'rgba(255,255,255,0.4)', padding: '6px 28px 6px 10px', fontSize: 11, outline: 'none', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='rgba(255,255,255,0.3)'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 8px center' }}>
                {DIFFICULTIES.map(d => <option key={d} value={d} style={{ background: '#0d1117' }}>{d === 'All' ? 'All Levels' : d}</option>)}
              </select>
              <select value={season} onChange={e => setSeason(e.target.value)} style={{ background: '#0d1117', border: '1px solid rgba(255,255,255,0.1)', color: season !== 'All' ? '#fff' : 'rgba(255,255,255,0.4)', padding: '6px 28px 6px 10px', fontSize: 11, outline: 'none', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='rgba(255,255,255,0.3)'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 8px center' }}>
                {SEASONS.map(s => <option key={s} value={s} style={{ background: '#0d1117' }}>{s === 'All' ? 'All Seasons' : s}</option>)}
              </select>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontFamily: 'monospace', fontSize: 8.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', whiteSpace: 'nowrap' }}>Max</span>
                <input type="range" min={200} max={5000} step={100} value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))} style={{ width: 90, accentColor: '#c8370a', cursor: 'pointer' }} />
                <span style={{ fontFamily: 'monospace', fontSize: 11, color: maxPrice < 5000 ? '#fff' : 'rgba(255,255,255,0.35)', minWidth: 48, letterSpacing: '0.05em' }}>{maxPrice < 5000 ? `$${maxPrice.toLocaleString()}` : 'Any $'}</span>
              </div>
              <div style={{ width: 1, height: 24, background: 'rgba(255,255,255,0.1)' }} />
              <select value={sort} onChange={e => setSort(e.target.value)} style={{ background: '#0d1117', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', padding: '6px 28px 6px 10px', fontSize: 11, outline: 'none', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='rgba(255,255,255,0.3)'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 8px center' }}>
                {SORT_OPTIONS.map(s => <option key={s} value={s} style={{ background: '#0d1117' }}>{s}</option>)}
              </select>
              {hasActiveFilters && <button onClick={clearFilters} style={{ background: 'none', border: '1px solid rgba(200,55,10,0.4)', color: '#c8370a', padding: '6px 12px', fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>Clear All</button>}
            </div>
          )}

          {/* Mobile expanded filters */}
          {isMobile && showFilters && (
            <div style={{ marginTop: 12, padding: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <div style={{ fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 8 }}>Category</div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {CATEGORIES.map(c => <button key={c} onClick={() => setCategory(c)} style={{ background: category === c ? '#c8370a' : 'rgba(255,255,255,0.06)', border: `1px solid ${category === c ? '#c8370a' : 'rgba(255,255,255,0.1)'}`, color: category === c ? '#fff' : 'rgba(255,255,255,0.5)', padding: '6px 12px', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer', fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>{c}</button>)}
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <div>
                  <div style={{ fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 7 }}>Difficulty</div>
                  <select value={difficulty} onChange={e => setDifficulty(e.target.value)} style={{ width: '100%', background: '#0d1117', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '8px 10px', fontSize: 12, outline: 'none', fontFamily: "'DM Sans', sans-serif" }}>
                    {DIFFICULTIES.map(d => <option key={d} value={d} style={{ background: '#0d1117' }}>{d === 'All' ? 'All Levels' : d}</option>)}
                  </select>
                </div>
                <div>
                  <div style={{ fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 7 }}>Season</div>
                  <select value={season} onChange={e => setSeason(e.target.value)} style={{ width: '100%', background: '#0d1117', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '8px 10px', fontSize: 12, outline: 'none', fontFamily: "'DM Sans', sans-serif" }}>
                    {SEASONS.map(s => <option key={s} value={s} style={{ background: '#0d1117' }}>{s === 'All' ? 'All Seasons' : s}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <div style={{ fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 8 }}>Max Price: <span style={{ color: maxPrice < 5000 ? '#fff' : 'rgba(255,255,255,0.4)' }}>{maxPrice < 5000 ? `$${maxPrice.toLocaleString()}` : 'Any'}</span></div>
                <input type="range" min={200} max={5000} step={100} value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))} style={{ width: '100%', accentColor: '#c8370a', cursor: 'pointer' }} />
              </div>
              <div>
                <div style={{ fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 7 }}>Sort By</div>
                <select value={sort} onChange={e => setSort(e.target.value)} style={{ width: '100%', background: '#0d1117', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '8px 10px', fontSize: 12, outline: 'none', fontFamily: "'DM Sans', sans-serif" }}>
                  {SORT_OPTIONS.map(s => <option key={s} value={s} style={{ background: '#0d1117' }}>{s}</option>)}
                </select>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* TRIPS GRID */}
      <section style={{ background: '#080c10', padding: `40px 0 100px` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: `0 ${px}` }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: isMobile ? 48 : 64, color: 'rgba(255,255,255,0.05)', marginBottom: 14 }}>NO TRIPS FOUND</div>
              <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 14, marginBottom: 20 }}>Try adjusting your filters.</p>
              <button onClick={clearFilters} style={{ background: '#c8370a', color: '#fff', padding: '11px 24px', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>Reset Filters</button>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap: 3 }}>
              {filtered.map(trip => {
                const cfg = diffConfig[trip.difficulty]
                const hovered = hoveredTrip === trip.id
                return (
                  <a key={trip.id} href={`/trips/${trip.id}`}
                    style={{ display: 'block', textDecoration: 'none', position: 'relative', overflow: 'hidden', background: '#0d1117', border: `1px solid ${hovered ? 'rgba(200,55,10,0.3)' : 'rgba(255,255,255,0.05)'}`, transition: 'border-color 0.3s', cursor: 'pointer' }}
                    onMouseEnter={() => setHoveredTrip(trip.id)}
                    onMouseLeave={() => setHoveredTrip(null)}
                  >
                    <div style={{ position: 'relative', height: isMobile ? 200 : 220, overflow: 'hidden' }}>
                      <img src={trip.image} alt={trip.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)', transform: hovered ? 'scale(1.06)' : 'scale(1)' }} />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,17,23,0.92) 0%, rgba(13,17,23,0.2) 60%, transparent 100%)' }} />
                      <div style={{ position: 'absolute', top: 10, left: 10, right: 10, display: 'flex', justifyContent: 'space-between' }}>
                        {trip.spotsLeft <= 4 ? <div style={{ background: '#c8370a', color: '#fff', fontFamily: 'monospace', fontSize: 7.5, letterSpacing: '0.18em', textTransform: 'uppercase', padding: '4px 8px', fontWeight: 700 }}>{trip.spotsLeft} spots left</div> : <div />}
                        <div style={{ background: 'rgba(8,12,16,0.75)', color: 'rgba(255,255,255,0.45)', fontFamily: 'monospace', fontSize: 7, letterSpacing: '0.16em', textTransform: 'uppercase', padding: '4px 8px', border: '1px solid rgba(255,255,255,0.1)' }}>{trip.season}</div>
                      </div>
                      <div style={{ position: 'absolute', bottom: 10, left: 14 }}>
                        <div style={{ fontFamily: 'monospace', fontSize: 7, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 2 }}>From</div>
                        <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 28, color: '#fff', letterSpacing: '0.04em', lineHeight: 1 }}>${trip.price.toLocaleString()}</div>
                      </div>
                    </div>
                    <div style={{ padding: '18px 18px 20px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                        <span style={{ fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c8370a' }}>{trip.category}</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                          <div style={{ width: 5, height: 5, borderRadius: '50%', background: cfg.dot }} />
                          <span style={{ fontFamily: 'monospace', fontSize: 7.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: cfg.color }}>{trip.difficulty}</span>
                        </div>
                      </div>
                      <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 24, color: '#fff', letterSpacing: '0.03em', lineHeight: 0.95, margin: '0 0 8px' }}>{trip.title}</h3>
                      <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, lineHeight: 1.65, margin: '0 0 14px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{trip.shortDesc}</p>
                      <div style={{ display: 'flex', gap: 14, paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.06)', alignItems: 'center' }}>
                        <span style={{ fontFamily: 'monospace', fontSize: 9, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em' }}>◷ {trip.duration}</span>
                        <span style={{ fontFamily: 'monospace', fontSize: 9, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em' }}>◎ {trip.location.split(',')[0]}</span>
                        <span style={{ marginLeft: 'auto', color: hovered ? '#c8370a' : 'rgba(255,255,255,0.2)', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', transition: 'color 0.2s' }}>View →</span>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          )}

          {/* Custom trip CTA */}
          <div style={{ marginTop: 48, background: 'rgba(200,55,10,0.06)', border: '1px solid rgba(200,55,10,0.2)', padding: isMobile ? '32px 24px' : '44px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr auto', alignItems: 'center', gap: 24, textAlign: isMobile ? 'center' : 'left' }}>
            <div>
              <div style={{ fontFamily: 'monospace', fontSize: 8.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c8370a', marginBottom: 8 }}>Can't find what you're looking for?</div>
              <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: isMobile ? 34 : 40, color: '#fff', letterSpacing: '0.03em', lineHeight: 0.95, margin: '0 0 8px' }}>WE BUILD CUSTOM TRIPS.</h3>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13.5, lineHeight: 1.7, margin: 0, maxWidth: 500 }}>Have a specific objective, group size, or date? Ian and Matt design private programs from scratch.</p>
            </div>
            <a href="/contact" style={{ background: '#c8370a', color: '#fff', padding: '13px 28px', fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: 8, justifyContent: 'center' }}>Plan a Custom Trip →</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#0d1117', borderTop: '1px solid rgba(255,255,255,0.04)', padding: `48px ${px} 32px` }}>
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

      <style>{`input::placeholder{color:rgba(255,255,255,0.2)!important;}select option{background:#0d1117;}input[type=range]::-webkit-slider-thumb{background:#c8370a;}`}</style>
    </div>
  )
}