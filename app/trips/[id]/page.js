'use client'

import { useState, useMemo } from 'react'

const ALL_TRIPS = [
  { id: 'forbidden-tour', title: 'Forbidden Tour', category: 'Ski & Splitboard', subcategory: 'Traverse', location: 'North Cascades, WA', duration: '4 Days', durationDays: 4, difficulty: 'Expert', price: 1395, spotsLeft: 3, season: 'Spring', image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=85', shortDesc: 'The Cascades answer to the Haute Route. Three passes, three peaks, endless descents across the largest glaciers in the Lower 48.' },
  { id: 'steep-camp', title: 'Steep Camp', category: 'Ski & Splitboard', subcategory: 'Course', location: 'North Cascades, WA', duration: '3 Days', durationDays: 3, difficulty: 'Advanced', price: 975, spotsLeft: 5, season: 'Winter', image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=85', shortDesc: 'Master steep and technical terrain with focused coaching. Small groups, maximum progression, real results.' },
  { id: 'aiare-level-1', title: 'AIARE Level 1 Course', category: 'Avalanche', subcategory: 'Course', location: 'Washington Cascades', duration: '3 Days', durationDays: 3, difficulty: 'Beginner', price: 650, spotsLeft: 8, season: 'Winter', image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=85', shortDesc: 'The gold standard in recreational avalanche education. Learn to travel safely and make smart decisions in the backcountry.' },
  { id: 'aiare-level-2', title: 'AIARE Level 2 Course', category: 'Avalanche', subcategory: 'Course', location: 'Washington Cascades', duration: '4 Days', durationDays: 4, difficulty: 'Intermediate', price: 950, spotsLeft: 6, season: 'Winter', image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=85', shortDesc: 'Advanced avalanche decision-making for experienced backcountry travelers. Develop your own terrain management framework.' },
  { id: 'aiare-rescue', title: 'AIARE Rescue Course', category: 'Avalanche', subcategory: 'Course', location: 'Washington Cascades', duration: '1 Day', durationDays: 1, difficulty: 'Beginner', price: 225, spotsLeft: 10, season: 'Winter', image: 'https://images.unsplash.com/photo-1516592673884-4a382d1124c2?w=800&q=85', shortDesc: 'Focused companion rescue training. Practice beacon searches, probing, and shoveling strategies under realistic conditions.' },
  { id: 'chamonix-climbing', title: 'Chamonix — French Alps', category: 'Alpine', subcategory: 'International', location: 'Chamonix, France', duration: '8 Days', durationDays: 8, difficulty: 'Advanced', price: 3200, spotsLeft: 2, season: 'Summer', image: 'https://images.unsplash.com/photo-1502126324834-38f8e02d7160?w=800&q=85', shortDesc: 'Climb the classics of the Mont Blanc massif — aiguilles, arêtes, and glaciers — with IFMGA certified guides.' },
  { id: 'alaska-ski-mo', title: 'Alaska Range Ski Mo Camp', category: 'Ski & Splitboard', subcategory: 'Expedition', location: 'Alaska Range, AK', duration: '10 Days', durationDays: 10, difficulty: 'Expert', price: 4800, spotsLeft: 4, season: 'Spring', image: 'https://images.unsplash.com/photo-1516592673884-4a382d1124c2?w=800&q=85', shortDesc: 'Fly-in glacier skiing deep in the Alaska Range. First descents, remote camps, and 10 days of expedition-style ski mountaineering.' },
  { id: 'morning-star-peak', title: 'Morning Star Peak', category: 'Rock', subcategory: 'Multi-pitch', location: 'North Cascades, WA', duration: '1 Day', durationDays: 1, difficulty: 'Intermediate', price: 425, spotsLeft: 6, season: 'Summer', image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&q=85', shortDesc: 'Classic multi-pitch granite on one of the finest moderate routes in the Cascades. II+ 5.10a. Spectacular views guaranteed.' },
  { id: 'dorado-needle', title: 'Dorado Needle — NW Ridge', category: 'Alpine', subcategory: 'Summit', location: 'North Cascades, WA', duration: '2 Days', durationDays: 2, difficulty: 'Intermediate', price: 750, spotsLeft: 4, season: 'Summer', image: 'https://images.unsplash.com/photo-1502126324834-38f8e02d7160?w=800&q=85', shortDesc: 'A stunning two-day alpine objective in the heart of the Cascades. Glacier travel, mixed terrain, and a beautiful summit.' },
  { id: 'forbidden-peak', title: 'Forbidden Peak — East Ridge', category: 'Alpine', subcategory: 'Summit', location: 'North Cascades, WA', duration: '2 Days', durationDays: 2, difficulty: 'Advanced', price: 850, spotsLeft: 3, season: 'Summer', image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=85', shortDesc: 'One of the finest alpine routes in North America. III 5.8. Exposed ridge climbing with breathtaking Cascade views.' },
  { id: 'snoqualmie-ski', title: 'Snoqualmie Pass Ski Tours', category: 'Ski & Splitboard', subcategory: 'Day Tour', location: 'Snoqualmie Pass, WA', duration: '1 Day', durationDays: 1, difficulty: 'Beginner', price: 295, spotsLeft: 8, season: 'Winter', image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=85', shortDesc: 'Perfect introduction to backcountry skiing. Local flavor, accessible terrain, expert guidance just 45 minutes from Seattle.' },
  { id: 'haute-route', title: 'Haute Route', category: 'Ski & Splitboard', subcategory: 'Traverse', location: 'Swiss Alps', duration: '7 Days', durationDays: 7, difficulty: 'Advanced', price: 3800, spotsLeft: 4, season: 'Spring', image: 'https://images.unsplash.com/photo-1502126324834-38f8e02d7160?w=800&q=85', shortDesc: 'The original hut-to-hut ski traverse. Chamonix to Zermatt across the high Alps — the trip that started it all.' },
  { id: 'rogers-pass', title: 'Rogers Pass Adventure Week', category: 'Ski & Splitboard', subcategory: 'Hut Trip', location: "Rogers Pass, BC, Canada", duration: '7 Days', durationDays: 7, difficulty: 'Advanced', price: 2600, spotsLeft: 5, season: 'Winter', image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=85', shortDesc: "Canada's backcountry ski mecca. Deep Selkirk powder, hut-to-hut travel, and some of the best lift-accessed touring in the world." },
  { id: 'japan-powder', title: 'Japan — Zen of Powder', category: 'Ski & Splitboard', subcategory: 'International', location: 'Niseko, Japan', duration: '10 Days', durationDays: 10, difficulty: 'Intermediate', price: 3400, spotsLeft: 6, season: 'Winter', image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=85', shortDesc: 'Legendary Hokkaido powder with Japanese culture, incredible food, and BCAG guides. Ski and sushi — the perfect combination.' },
  { id: 'womens-ski-alpinism', title: "Women's Intro to Ski Alpinism", category: "Women's Programs", subcategory: 'Course', location: 'North Cascades, WA', duration: '3 Days', durationDays: 3, difficulty: 'Intermediate', price: 875, spotsLeft: 7, season: 'Spring', image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=85', shortDesc: "Women-specific ski mountaineering program led by female guides. Build confidence, skills, and community in a supportive environment." },
  { id: 'crevasse-rescue', title: 'Crevasse Rescue Seminar', category: 'Alpine', subcategory: 'Course', location: 'North Cascades, WA', duration: '1 Day', durationDays: 1, difficulty: 'Intermediate', price: 295, spotsLeft: 9, season: 'Summer', image: 'https://images.unsplash.com/photo-1516592673884-4a382d1124c2?w=800&q=85', shortDesc: 'Essential skills for glacier travel. Learn crevasse rescue, rope team management, and safe glacier movement in one intensive day.' },
]

const CATEGORIES = ['All', 'Ski & Splitboard', 'Alpine', 'Rock', 'Avalanche', "Women's Programs"]
const DIFFICULTIES = ['All', 'Beginner', 'Intermediate', 'Advanced', 'Expert']
const SEASONS = ['All', 'Winter', 'Spring', 'Summer']
const SORT_OPTIONS = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Duration: Short to Long', 'Duration: Long to Short']

const difficultyConfig = {
  Beginner:     { dot: '#4ade80', color: '#4ade80' },
  Intermediate: { dot: '#60a5fa', color: '#60a5fa' },
  Advanced:     { dot: '#fbbf24', color: '#fbbf24' },
  Expert:       { dot: '#f87171', color: '#f87171' },
}

export default function TripsPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [difficulty, setDifficulty] = useState('All')
  const [season, setSeason] = useState('All')
  const [maxPrice, setMaxPrice] = useState(5000)
  const [sort, setSort] = useState('Featured')
  const [hoveredTrip, setHoveredTrip] = useState(null)

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

  const clearFilters = () => {
    setSearch(''); setCategory('All'); setDifficulty('All'); setSeason('All'); setMaxPrice(5000); setSort('Featured')
  }

  const hasActiveFilters = search || category !== 'All' || difficulty !== 'All' || season !== 'All' || maxPrice < 5000

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
            <a href="/contact" style={{ background: '#c8370a', color: '#fff', padding: '8px 22px', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600, transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = '#e04010'}
              onMouseLeave={e => e.currentTarget.style.background = '#c8370a'}
            >Contact</a>
          </nav>
        </div>
      </header>

      {/* ─── HERO HEADER ─── */}
      <section style={{ position: 'relative', paddingTop: 72, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1920&q=80" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.2) saturate(0.4)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(8,12,16,0.5) 0%, rgba(8,12,16,1) 100%)' }} />
        </div>
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '64px 48px 56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
            <div style={{ width: 32, height: 1, background: '#c8370a' }} />
            <span style={{ fontFamily: 'monospace', color: '#c8370a', fontSize: 9.5, letterSpacing: '0.25em', textTransform: 'uppercase' }}>All Expeditions</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32 }}>
            <h1 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(56px, 7vw, 100px)', color: '#fff', letterSpacing: '0.02em', lineHeight: 0.9, margin: 0 }}>
              FIND YOUR<br />
              <span style={{ color: '#c8370a' }}>ADVENTURE.</span>
            </h1>
            <div style={{ textAlign: 'right', paddingBottom: 8 }}>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 52, color: '#fff', letterSpacing: '0.05em', lineHeight: 1 }}>{filtered.length}</div>
              <div style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>Trips Found</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SEARCH + FILTERS ─── */}
      <div style={{ background: '#0d1117', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'sticky', top: 72, zIndex: 40 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px 48px' }}>

          {/* Search bar */}
          <div style={{ position: 'relative', marginBottom: 16 }}>
            <div style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.25)', pointerEvents: 'none' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            </div>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search trips, locations, activities..."
              style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', padding: '13px 16px 13px 44px', color: '#fff', fontSize: 14, outline: 'none', boxSizing: 'border-box', fontFamily: "'DM Sans', sans-serif", transition: 'border-color 0.2s' }}
              onFocus={e => e.target.style.borderColor = '#c8370a'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
            />
            {search && (
              <button onClick={() => setSearch('')} style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'rgba(255,255,255,0.3)', cursor: 'pointer', fontSize: 18, lineHeight: 1 }}>×</button>
            )}
          </div>

          {/* Filter row */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>

            {/* Category pills */}
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {CATEGORIES.map(c => (
                <button key={c} onClick={() => setCategory(c)}
                  style={{ background: category === c ? '#c8370a' : 'rgba(255,255,255,0.04)', border: `1px solid ${category === c ? '#c8370a' : 'rgba(255,255,255,0.1)'}`, color: category === c ? '#fff' : 'rgba(255,255,255,0.45)', padding: '7px 14px', fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', fontWeight: 600, transition: 'all 0.2s', fontFamily: "'DM Sans', sans-serif" }}
                >{c}</button>
              ))}
            </div>

            <div style={{ width: 1, height: 28, background: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />

            {/* Difficulty */}
            <select value={difficulty} onChange={e => setDifficulty(e.target.value)}
              style={{ background: '#0d1117', border: '1px solid rgba(255,255,255,0.1)', color: difficulty !== 'All' ? '#fff' : 'rgba(255,255,255,0.4)', padding: '7px 32px 7px 12px', fontSize: 11, letterSpacing: '0.08em', outline: 'none', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='rgba(255,255,255,0.3)'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center' }}
            >
              {DIFFICULTIES.map(d => <option key={d} value={d} style={{ background: '#0d1117' }}>{d === 'All' ? 'All Levels' : d}</option>)}
            </select>

            {/* Season */}
            <select value={season} onChange={e => setSeason(e.target.value)}
              style={{ background: '#0d1117', border: '1px solid rgba(255,255,255,0.1)', color: season !== 'All' ? '#fff' : 'rgba(255,255,255,0.4)', padding: '7px 32px 7px 12px', fontSize: 11, letterSpacing: '0.08em', outline: 'none', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='rgba(255,255,255,0.3)'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center' }}
            >
              {SEASONS.map(s => <option key={s} value={s} style={{ background: '#0d1117' }}>{s === 'All' ? 'All Seasons' : s}</option>)}
            </select>

            {/* Price range */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', whiteSpace: 'nowrap' }}>Max</span>
              <input type="range" min={200} max={5000} step={100} value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))}
                style={{ width: 100, accentColor: '#c8370a', cursor: 'pointer' }}
              />
              <span style={{ fontFamily: 'monospace', fontSize: 11, color: maxPrice < 5000 ? '#fff' : 'rgba(255,255,255,0.35)', minWidth: 52, letterSpacing: '0.05em' }}>
                {maxPrice < 5000 ? `$${maxPrice.toLocaleString()}` : 'Any $'}
              </span>
            </div>

            <div style={{ width: 1, height: 28, background: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />

            {/* Sort */}
            <select value={sort} onChange={e => setSort(e.target.value)}
              style={{ background: '#0d1117', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', padding: '7px 32px 7px 12px', fontSize: 11, letterSpacing: '0.08em', outline: 'none', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='rgba(255,255,255,0.3)'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center' }}
            >
              {SORT_OPTIONS.map(s => <option key={s} value={s} style={{ background: '#0d1117' }}>{s}</option>)}
            </select>

            {/* Clear */}
            {hasActiveFilters && (
              <button onClick={clearFilters}
                style={{ background: 'none', border: '1px solid rgba(200,55,10,0.4)', color: '#c8370a', padding: '7px 14px', fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', fontWeight: 600, transition: 'all 0.2s', fontFamily: "'DM Sans', sans-serif" }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(200,55,10,0.1)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'none' }}
              >Clear All</button>
            )}
          </div>
        </div>
      </div>

      {/* ─── TRIPS GRID ─── */}
      <section style={{ background: '#080c10', padding: '48px 0 120px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>

          {/* No results */}
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '100px 0' }}>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 64, color: 'rgba(255,255,255,0.06)', letterSpacing: '0.05em', marginBottom: 16 }}>NO TRIPS FOUND</div>
              <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 15, marginBottom: 24 }}>Try adjusting your filters or search term.</p>
              <button onClick={clearFilters} style={{ background: '#c8370a', color: '#fff', padding: '12px 28px', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>Reset Filters</button>
            </div>
          )}

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3 }}>
            {filtered.map((trip) => {
              const cfg = difficultyConfig[trip.difficulty]
              const isHovered = hoveredTrip === trip.id
              return (
                <a
                  key={trip.id}
                  href={`/trips/${trip.id}`}
                  style={{ display: 'block', textDecoration: 'none', position: 'relative', overflow: 'hidden', background: '#0d1117', border: '1px solid rgba(255,255,255,0.05)', transition: 'border-color 0.3s', cursor: 'pointer' }}
                  onMouseEnter={() => setHoveredTrip(trip.id)}
                  onMouseLeave={() => setHoveredTrip(null)}
                >
                  {/* Image */}
                  <div style={{ position: 'relative', height: 220, overflow: 'hidden' }}>
                    <img src={trip.image} alt={trip.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)', transform: isHovered ? 'scale(1.07)' : 'scale(1)' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,17,23,0.9) 0%, rgba(13,17,23,0.2) 60%, transparent 100%)' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(200,55,10,0.08)', opacity: isHovered ? 1 : 0, transition: 'opacity 0.3s' }} />

                    {/* Badges */}
                    <div style={{ position: 'absolute', top: 12, left: 12, right: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      {trip.spotsLeft <= 4
                        ? <div style={{ background: '#c8370a', color: '#fff', fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '4px 9px', fontWeight: 700 }}>{trip.spotsLeft} spots left</div>
                        : <div />
                      }
                      <div style={{ background: 'rgba(8,12,16,0.75)', color: 'rgba(255,255,255,0.45)', fontFamily: 'monospace', fontSize: 7.5, letterSpacing: '0.18em', textTransform: 'uppercase', padding: '4px 9px', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(6px)' }}>{trip.season}</div>
                    </div>

                    {/* Price on image */}
                    <div style={{ position: 'absolute', bottom: 12, left: 16 }}>
                      <div style={{ fontFamily: 'monospace', fontSize: 7.5, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 2 }}>From</div>
                      <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 30, color: '#fff', letterSpacing: '0.04em', lineHeight: 1 }}>${trip.price.toLocaleString()}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '20px 20px 22px' }}>
                    {/* Category + Difficulty */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                      <span style={{ fontFamily: 'monospace', fontSize: 8.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#c8370a' }}>{trip.category}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                        <div style={{ width: 5, height: 5, borderRadius: '50%', background: cfg.dot, flexShrink: 0 }} />
                        <span style={{ fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.16em', textTransform: 'uppercase', color: cfg.color }}>{trip.difficulty}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 26, color: '#fff', letterSpacing: '0.03em', lineHeight: 0.95, margin: '0 0 10px', transition: 'color 0.2s', ...(isHovered ? { color: 'rgba(255,255,255,0.85)' } : {}) }}>{trip.title}</h3>

                    {/* Desc */}
                    <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12.5, lineHeight: 1.65, margin: '0 0 16px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{trip.shortDesc}</p>

                    {/* Meta */}
                    <div style={{ display: 'flex', gap: 16, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                      {[
                        { icon: '◷', val: trip.duration },
                        { icon: '◎', val: trip.location.split(',')[0] },
                      ].map(m => (
                        <div key={m.val} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                          <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 10 }}>{m.icon}</span>
                          <span style={{ fontFamily: 'monospace', fontSize: 9.5, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em' }}>{m.val}</span>
                        </div>
                      ))}
                      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6, color: isHovered ? '#c8370a' : 'rgba(255,255,255,0.2)', transition: 'color 0.25s', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                        View
                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" style={{ transform: isHovered ? 'translateX(3px)' : 'translateX(0)', transition: 'transform 0.25s' }}><path d="M1 3.5h10M7.5 1l3 2.5L7.5 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>

          {/* Custom trip CTA */}
          <div style={{ marginTop: 64, background: 'rgba(200,55,10,0.06)', border: '1px solid rgba(200,55,10,0.2)', padding: '48px', display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: 40 }}>
            <div>
              <div style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c8370a', marginBottom: 10 }}>Can't find what you're looking for?</div>
              <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 40, color: '#fff', letterSpacing: '0.03em', lineHeight: 0.95, margin: '0 0 10px' }}>WE BUILD CUSTOM TRIPS.</h3>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, lineHeight: 1.7, margin: 0, maxWidth: 520 }}>Have a specific objective, group size, or date in mind? Ian and Matt design private programs from scratch — your mountain, your timeline, your goals.</p>
            </div>
            <a href="/contact" style={{ background: '#c8370a', color: '#fff', padding: '14px 32px', fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'background 0.2s', flexShrink: 0, display: 'flex', alignItems: 'center', gap: 10 }}
              onMouseEnter={e => e.currentTarget.style.background = '#e04010'}
              onMouseLeave={e => e.currentTarget.style.background = '#c8370a'}
            >
              Plan a Custom Trip
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none"><path d="M1 4h12M8.5 1l4 3-4 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
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

      <style>{`input[type=range]::-webkit-slider-thumb{background:#c8370a;} input::placeholder{color:rgba(255,255,255,0.2);} select option{background:#0d1117;color:#fff;}`}</style>
    </div>
  )
}