'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Ski & Splitboard', href: '/trips', children: [
    { label: 'Ski Tours', href: '/trips' },
    { label: 'Ski Courses', href: '/trips' },
    { label: 'Hut Trips', href: '/trips' },
  ]},
  { label: 'Alpine', href: '/trips', children: [
    { label: 'Alpine Courses', href: '/trips' },
    { label: 'North American Climbs', href: '/trips' },
    { label: 'International Expeditions', href: '/trips' },
  ]},
  { label: 'Rock', href: '/trips', children: [
    { label: 'Rock Courses', href: '/trips' },
    { label: 'Rock Climbs', href: '/trips' },
  ]},
  { label: 'Avalanche', href: '/trips', children: [
    { label: 'AIARE Level 1', href: '/trips/aiare-level-1' },
    { label: 'AIARE Level 2', href: '/trips' },
  ]},
  { label: "Women's Programs", href: '/trips' },
  { label: 'About', href: '/about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0f1923] shadow-lg' : 'bg-gradient-to-b from-black/60 to-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#d4420a] rounded flex items-center justify-center">
              <span style={{fontFamily:'Bebas Neue,sans-serif'}} className="text-white text-sm tracking-wide">BC</span>
            </div>
            <div>
              <span style={{fontFamily:'Bebas Neue,sans-serif'}} className="text-white text-lg tracking-widest block leading-none">ADVENTURE</span>
              <span className="text-white/40 text-[9px] tracking-[0.2em] uppercase block leading-none font-mono">GUIDES</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}>
                <Link href={link.href} className="flex items-center gap-1 px-3 py-2 text-white/80 hover:text-white text-sm font-medium transition-colors">
                  {link.label}
                  {link.children && <ChevronDown size={13} className="opacity-50" />}
                </Link>
                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 w-52 bg-[#0f1923] border border-white/10 rounded-lg overflow-hidden shadow-xl py-1">
                    {link.children.map((child) => (
                      <Link key={child.label} href={child.href} className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">{child.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:2067994092" className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors">
              <Phone size={14} /><span className="font-mono text-xs">(206) 799-4092</span>
            </a>
            <Link href="/trips" className="bg-[#d4420a] hover:bg-[#e85520] text-white px-5 py-2 rounded text-sm font-semibold transition-colors">View All Trips</Link>
          </div>

          <button className="lg:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#0f1923] pt-16 overflow-y-auto">
          <div className="px-6 py-8 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link href={link.href} onClick={() => setMobileOpen(false)} className="block py-3 text-white font-semibold text-lg border-b border-white/10">{link.label}</Link>
                {link.children && (
                  <div className="pl-4 pb-2">
                    {link.children.map((child) => (
                      <Link key={child.label} href={child.href} onClick={() => setMobileOpen(false)} className="block py-2 text-white/50 text-sm hover:text-white transition-colors">{child.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-6 space-y-3">
              <a href="tel:2067994092" className="flex items-center gap-2 text-white/60 text-sm"><Phone size={14} />(206) 799-4092</a>
              <Link href="/trips" onClick={() => setMobileOpen(false)} className="block w-full bg-[#d4420a] text-white text-center py-3 rounded font-semibold">View All Trips</Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
