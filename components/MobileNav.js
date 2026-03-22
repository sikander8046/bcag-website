'use client'
import { useState, useEffect } from 'react'

export default function MobileNav({ activePage = '' }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const links = [
    { label: 'Trips', href: '/trips' },
    { label: 'Ski & Board', href: '/trips' },
    { label: 'Alpine', href: '/trips' },
    { label: 'Rock', href: '/trips' },
    { label: 'Avalanche', href: '/trips' },
    { label: "Women's", href: '/trips' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled || open ? '#080c10' : 'transparent',
        borderBottom: scrolled || open ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'background 0.4s, border 0.4s',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>

          {/* Logo */}
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', flexShrink: 0 }}>
            <div style={{ width: 32, height: 32, background: '#c8370a', display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(0 0, 100% 0, 100% 72%, 72% 100%, 0 100%)', flexShrink: 0 }}>
              <span style={{ fontFamily: "'Bebas Neue',sans-serif", color: '#fff', fontSize: 12, letterSpacing: 1 }}>BC</span>
            </div>
            <div>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", color: '#fff', fontSize: 14, letterSpacing: '0.15em', lineHeight: 1 }}>ADVENTURE GUIDES</div>
              <div style={{ fontFamily: 'monospace', color: 'rgba(255,255,255,0.28)', fontSize: 7, letterSpacing: '0.2em', textTransform: 'uppercase' }}>IFMGA · AMGA Certified</div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            {[['Ski & Board', '/trips'], ['Alpine', '/trips'], ['Rock', '/trips'], ['Avalanche', '/trips'], ['About', '/about']].map(([label, href]) => (
              <a key={label} href={href} style={{ color: activePage === label ? '#fff' : 'rgba(255,255,255,0.45)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => { if (activePage !== label) e.target.style.color = 'rgba(255,255,255,0.45)' }}
              >{label}</a>
            ))}
            <a href="/contact" style={{ background: '#c8370a', color: '#fff', padding: '8px 20px', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600, transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = '#e04010'}
              onMouseLeave={e => e.currentTarget.style.background = '#c8370a'}
            >Contact</a>
          </nav>

          {/* Hamburger */}
          <button
            className="mobile-nav-toggle"
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'none', flexDirection: 'column', gap: 5, alignItems: 'center', justifyContent: 'center' }}
            aria-label="Toggle menu"
          >
            <span style={{ display: 'block', width: 22, height: 1.5, background: '#fff', transition: 'all 0.25s', transform: open ? 'rotate(45deg) translateY(5px)' : 'none' }} />
            <span style={{ display: 'block', width: 22, height: 1.5, background: '#fff', transition: 'all 0.25s', opacity: open ? 0 : 1 }} />
            <span style={{ display: 'block', width: 22, height: 1.5, background: '#fff', transition: 'all 0.25s', transform: open ? 'rotate(-45deg) translateY(-5px)' : 'none' }} />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 49, background: '#080c10', paddingTop: 64, overflowY: 'auto' }}>
          <div style={{ padding: '32px 24px' }}>
            {links.map((link, i) => (
              <a key={link.label} href={link.href} onClick={() => setOpen(false)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', textDecoration: 'none', color: '#fff', fontFamily: "'Bebas Neue',sans-serif", fontSize: 32, letterSpacing: '0.05em', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#c8370a'}
                onMouseLeave={e => e.currentTarget.style.color = '#fff'}
              >
                {link.label}
                <svg width="18" height="10" viewBox="0 0 18 10" fill="none"><path d="M1 5h16M12 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            ))}

            <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="tel:2067994092" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,0.4)', fontSize: 14, textDecoration: 'none', fontFamily: 'monospace', letterSpacing: '0.08em' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                (206) 799-4092
              </a>
              <a href="mailto:info@bcadventureguides.com" style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, textDecoration: 'none', fontFamily: 'monospace', letterSpacing: '0.05em' }}>
                info@bcadventureguides.com
              </a>
            </div>

            <a href="/trips" onClick={() => setOpen(false)} style={{ display: 'block', marginTop: 28, background: '#c8370a', color: '#fff', padding: '16px', fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none', textAlign: 'center' }}>
              Browse All Trips
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-toggle { display: flex !important; }
        }
      `}</style>
    </>
  )
}