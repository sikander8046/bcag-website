import './globals.css'
import MobileNav from '@/components/MobileNav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'BC Adventure Guides | IFMGA Certified Mountain Guides',
  description: 'Expert-led ski tours, alpine climbing, rock climbing, and avalanche courses in the Cascades and beyond. Led by IFMGA/AMGA certified guides.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: '#080c10' }}>
        <MobileNav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
