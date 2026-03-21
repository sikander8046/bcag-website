import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0f1923] text-white">
      <div className="bg-[#d4420a] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 style={{fontFamily:'Bebas Neue,sans-serif'}} className="text-3xl md:text-4xl tracking-wide text-white mb-1">READY FOR YOUR NEXT ADVENTURE?</h3>
            <p className="text-white/70 text-sm">IFMGA certified guides. World-class terrain. Unforgettable experiences.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link href="/trips" className="bg-white text-[#d4420a] font-semibold px-6 py-3 rounded text-sm hover:bg-[#f5f2ec] transition-colors">Browse Trips</Link>
            <Link href="/contact" className="border border-white/40 text-white font-semibold px-6 py-3 rounded text-sm hover:bg-white/10 transition-colors">Talk to a Guide</Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-[#d4420a] rounded flex items-center justify-center">
                <span style={{fontFamily:'Bebas Neue,sans-serif'}} className="text-white text-sm">BC</span>
              </div>
              <div>
                <span style={{fontFamily:'Bebas Neue,sans-serif'}} className="text-white text-lg tracking-widest block leading-none">ADVENTURE GUIDES</span>
              </div>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-5 max-w-xs">All programs directed by Ian Nicholson and Matt Schonwald, IFMGA/AMGA Mountain Guides.</p>
            <div className="space-y-2">
              <a href="tel:2067994092" className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors"><Phone size={13} />(206) 799-4092</a>
              <a href="mailto:info@bcadventureguides.com" className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors"><Mail size={13} />info@bcadventureguides.com</a>
              <div className="flex items-center gap-2 text-white/40 text-sm"><MapPin size={13} />Seattle, WA</div>
            </div>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-8 h-8 border border-white/20 rounded flex items-center justify-center text-white/40 hover:text-white transition-colors"><Instagram size={14} /></a>
              <a href="#" className="w-8 h-8 border border-white/20 rounded flex items-center justify-center text-white/40 hover:text-white transition-colors"><Facebook size={14} /></a>
            </div>
          </div>
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/30 mb-4">Trips</h4>
            <ul className="space-y-2">
              {['Ski & Splitboard','Alpine Climbing','Rock Climbing','Avalanche Courses',"Women's Programs"].map(l => (
                <li key={l}><Link href="/trips" className="text-sm text-white/40 hover:text-white transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/30 mb-4">Company</h4>
            <ul className="space-y-2">
              {[['About', '/about'],['Our Guides', '/about#guides'],['Testimonials', '/about#testimonials'],['Contact', '/contact']].map(([l, h]) => (
                <li key={l}><Link href={h} className="text-sm text-white/40 hover:text-white transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {['IFMGA Certified','AMGA Certified','USFS Permitted'].map(b => (
              <div key={b} className="border border-white/20 px-3 py-1 rounded">
                <span className="font-mono text-[9px] tracking-widest uppercase text-white/40">{b}</span>
              </div>
            ))}
          </div>
          <p className="font-mono text-[10px] text-white/20">© {new Date().getFullYear()} BC Adventure Guides</p>
        </div>
      </div>
    </footer>
  )
}
