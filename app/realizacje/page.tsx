import type { Metadata } from 'next'
import RealizacjeClient from './RealizacjeClient'

export const metadata: Metadata = {
  title: 'Realizacje - Chip Tuning i Serwis | ERWO Garage Radomsko',
  description: 'Galeria naszych realizacji: chip tuning, modyfikacje skrzyni biegów i serwis aut BMW, Audi, VW, Porsche, Mercedes i innych. Zobacz efekty pracy ERWO Garage w Radomsku.',
  alternates: {
    canonical: '/realizacje',
  },
  openGraph: {
    title: 'Realizacje - Chip Tuning i Serwis | ERWO Garage',
    description: 'Galeria naszych realizacji: chip tuning i serwis aut premium w Radomsku.',
    url: 'https://erwo-garage.pl/realizacje',
    type: 'website',
  },
}

export default function RealizacjePage() {
  return <RealizacjeClient />
}
