import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'ERWO Garage - Profesjonalny Serwis & Chip Tuning | Radomsko',
  description: 'Profesjonalny serwis samochodowy, chip tuning, hamownia i diagnostyka komputerowa w Radomsku. Autoryzowany serwis BMW, MINI. Gwarancja do 100 tys. km.',
  keywords: [
    'mechanik Radomsko',
    'chip tuning Radomsko',
    'serwis BMW Radomsko',
    'diagnostyka komputerowa Radomsko',
    'hamownia Radomsko',
    'serwis samochodowy Radomsko',
    'ERWO Garage'
  ],
  authors: [{ name: 'ERWO Garage' }],
  openGraph: {
    title: 'ERWO Garage - Profesjonalny Serwis & Chip Tuning',
    description: 'Profesjonalny serwis samochodowy, chip tuning i diagnostyka w Radomsku',
    url: 'https://erwo-garage.pl',
    siteName: 'ERWO Garage',
    locale: 'pl_PL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'ERWO Garage',
  description: 'Profesjonalny serwis samochodowy, chip tuning, hamownia i diagnostyka komputerowa w Radomsku.',
  url: 'https://erwo-garage.pl',
  telephone: '+48794961118',
  email: 'kontakt@erwo-garage.pl',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Przedborska 45',
    addressLocality: 'Radomsko',
    postalCode: '97-500',
    addressCountry: 'PL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.0656,
    longitude: 19.4533,
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '14:00' },
  ],
  sameAs: [
    'https://www.facebook.com/ERWOGarage/',
    'https://www.instagram.com/erwo_garage/',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
