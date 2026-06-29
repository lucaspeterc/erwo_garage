import type { Metadata } from 'next'
import KontaktClient from './KontaktClient'

export const metadata: Metadata = {
  title: 'Kontakt - Umów wizytę | ERWO Garage Radomsko',
  description: 'Skontaktuj się z ERWO Garage w Radomsku, ul. Przedborska 45. Telefon, e-mail, formularz kontaktowy i dojazd. Pon–Pt 9:00–17:00. Umów serwis lub chip tuning.',
  alternates: {
    canonical: '/kontakt',
  },
  openGraph: {
    title: 'Kontakt - Umów wizytę | ERWO Garage',
    description: 'Skontaktuj się z ERWO Garage w Radomsku. Telefon, e-mail, formularz i dojazd.',
    url: 'https://erwo-garage.pl/kontakt',
    type: 'website',
  },
}

export default function KontaktPage() {
  return <KontaktClient />
}
