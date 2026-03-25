import { trips } from '@/lib/data'
import TripDetailView from '@/components/TripDetailView'

export async function generateMetadata({ params }) {
  const { id } = await params
  const trip = trips.find(t => t.id === id)
  if (!trip) return { title: 'Trip Not Found | BC Adventure Guides' }
  return {
    title: `${trip.title} | BC Adventure Guides`,
    description: trip.shortDesc,
    openGraph: { images: [trip.heroImage] },
  }
}

export default async function TripDetailPage({ params }) {
  const { id } = await params
  const trip = trips.find(t => t.id === id) || null
  const relatedTrips = trip
    ? trips.filter(t => t.id !== trip.id && (t.category === trip.category || t.difficulty === trip.difficulty)).slice(0, 3)
    : []
  return <TripDetailView trip={trip} relatedTrips={relatedTrips} />
}
