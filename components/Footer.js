'use client'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { colors, fonts, spacing } from '@/lib/tokens'

const FOOTER_COLS = [
  { title: 'Trips', links: ['Ski & Splitboard', 'Alpine Climbing', 'Rock Climbing', 'Avalanche'] },
  { title: 'Company', links: ['About BCAG', 'Our Guides', 'Testimonials', 'Contact'] },
  { title: 'Resources', links: ['Trip Policy', 'Gear Lists', 'Rentals', 'Blog'] },
]

export default function Footer() {
  const isMobile = useMediaQuery(`(max-width: ${spacing.maxWidth}px)`.replace('1200', '768'))

  const px = isMobile ? spacing.pagePaddingMobile : spacing.pagePaddingDesktop

  return (
    <footer style={{ background: colors.bgSecondary, borderTop: `1px solid ${colors.borderSubtle}`, padding: `48px ${px} 32px` }}>
      <div style={{ maxWidth: spacing.maxWidth, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'auto 1fr', gap: isMobile ? 32 : 72, marginBottom: 36 }}>

          {/* Brand + contact */}
          <div>
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, textDecoration: 'none' }}>
              <div style={{ width: 28, height: 28, background: colors.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(0 0, 100% 0, 100% 72%, 72% 100%, 0 100%)', flexShrink: 0 }}>
                <span style={{ fontFamily: fonts.display, color: colors.textPrimary, fontSize: 11 }}>BC</span>
              </div>
              <span style={{ fontFamily: fonts.display, color: colors.textPrimary, fontSize: 13, letterSpacing: '0.15em' }}>ADVENTURE GUIDES</span>
            </a>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <a href="tel:2067994092" style={{ color: 'rgba(255,255,255,0.28)', fontSize: 11, fontFamily: fonts.mono, textDecoration: 'none' }}>(206) 799-4092</a>
              <a href="mailto:info@bcadventureguides.com" style={{ color: 'rgba(255,255,255,0.28)', fontSize: 11, fontFamily: fonts.mono, textDecoration: 'none' }}>info@bcadventureguides.com</a>
            </div>
          </div>

          {/* Link columns */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(3, 1fr)', gap: isMobile ? 24 : 40 }}>
            {FOOTER_COLS.map(col => (
              <div key={col.title}>
                <div style={{ fontFamily: fonts.mono, fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: colors.textFaint, marginBottom: 12 }}>{col.title}</div>
                {col.links.map(link => (
                  <a key={link} href="/trips" style={{ display: 'block', color: colors.textMuted, fontSize: 12, textDecoration: 'none', marginBottom: 8 }}>{link}</a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: `1px solid ${colors.borderSubtle}`, paddingTop: 18, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
          <span style={{ fontFamily: fonts.mono, fontSize: 10, color: 'rgba(255,255,255,0.14)' }}>© {new Date().getFullYear()} BC Adventure Guides</span>
          <span style={{ fontFamily: fonts.mono, fontSize: 10, color: 'rgba(255,255,255,0.14)' }}>Images © Pablo Puruncajas</span>
        </div>
      </div>
    </footer>
  )
}
