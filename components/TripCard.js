import Link from 'next/link'
import { Clock, Users, MapPin, ChevronRight } from 'lucide-react'

const difficultyColors = {
  Beginner: 'bg-green-900/60 text-green-300',
  Intermediate: 'bg-blue-900/60 text-blue-300',
  Advanced: 'bg-amber-900/60 text-amber-300',
  Expert: 'bg-red-900/60 text-red-300',
}

export default function TripCard({ trip }) {
  return (
    <Link href={`/trips/${trip.id}`} className="group block bg-[#0f1923] rounded-xl overflow-hidden border border-white/5 hover:border-[#d4420a]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative h-52 overflow-hidden">
        <img src={trip.image} alt={trip.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1923]/80 via-transparent to-transparent" />
        {trip.spotsLeft <= 4 && (
          <div className="absolute top-3 left-3 bg-[#d4420a] text-white text-[10px] font-mono font-semibold px-2 py-1 rounded tracking-wider uppercase">{trip.spotsLeft} spots left</div>
        )}
        <div className="absolute top-3 right-3 bg-black/50 text-white/70 text-[10px] font-mono px-2 py-1 rounded tracking-wider uppercase border border-white/10">{trip.season}</div>
        <div className="absolute bottom-3 left-3">
          <span style={{fontFamily:'Bebas Neue,sans-serif'}} className="text-white text-2xl tracking-wide">${trip.price.toLocaleString()}</span>
          <span className="text-white/50 text-xs ml-1">/ person</span>
        </div>
      </div>
      <div className="p-5">
        <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-[#d4420a] mb-2">{trip.category}</div>
        <h3 className="text-white font-semibold text-base mb-2 leading-tight group-hover:text-[#d4420a]/90 transition-colors">{trip.title}</h3>
        <p className="text-white/40 text-xs leading-relaxed mb-4 line-clamp-2">{trip.shortDesc}</p>
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <div className="flex items-center gap-1 text-white/40 text-xs"><Clock size={11} />{trip.duration}</div>
          <div className="flex items-center gap-1 text-white/40 text-xs"><MapPin size={11} />{trip.location}</div>
          <div className="flex items-center gap-1 text-white/40 text-xs"><Users size={11} />{trip.ratio}</div>
        </div>
        <div className="flex items-center justify-between">
          <span className={`text-[10px] font-mono font-semibold px-2 py-1 rounded tracking-wider uppercase ${difficultyColors[trip.difficulty]}`}>{trip.difficulty}</span>
          <span className="flex items-center gap-1 text-[#d4420a] text-xs font-semibold group-hover:gap-2 transition-all">View Trip <ChevronRight size={13} /></span>
        </div>
      </div>
    </Link>
  )
}
