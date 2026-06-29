import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { CONTACT_INFO, SOCIAL_MEDIA } from '@/lib/constants'
import { reviews } from '@/lib/copy'

const SITE_URL = 'https://erwo-garage.pl'
const OG_IMAGE = '/images/garage.jpeg'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#E31E24',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'ERWO Garage - Profesjonalny Serwis & Chip Tuning | Radomsko',
    template: '%s | ERWO Garage',
  },
  description: 'Profesjonalny serwis samochodowy, chip tuning, hamownia i diagnostyka komputerowa w Radomsku. Serwis BMW, MINI, VW, Audi. Gwarancja do 100 tys. km.',
  keywords: [
    'mechanik Radomsko',
    'chip tuning Radomsko',
    'serwis BMW Radomsko',
    'diagnostyka komputerowa Radomsko',
    'hamownia Radomsko',
    'serwis samochodowy Radomsko',
    'ERWO Garage',
  ],
  authors: [{ name: 'ERWO Garage' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ERWO Garage - Profesjonalny Serwis & Chip Tuning',
    description: 'Profesjonalny serwis samochodowy, chip tuning i diagnostyka w Radomsku',
    url: SITE_URL,
    siteName: 'ERWO Garage',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'ERWO Garage - warsztat samochodowy w Radomsku',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ERWO Garage - Profesjonalny Serwis & Chip Tuning',
    description: 'Profesjonalny serwis samochodowy, chip tuning i diagnostyka w Radomsku',
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const avgRating =
  reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  '@id': `${SITE_URL}/#business`,
  name: 'ERWO Garage',
  description: 'Profesjonalny serwis samochodowy, chip tuning, hamownia i diagnostyka komputerowa w Radomsku.',
  url: SITE_URL,
  image: `${SITE_URL}${OG_IMAGE}`,
  telephone: CONTACT_INFO.phone.replace(/\s/g, ''),
  email: CONTACT_INFO.email,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT_INFO.address,
    addressLocality: CONTACT_INFO.city,
    postalCode: CONTACT_INFO.postalCode,
    addressCountry: 'PL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: CONTACT_INFO.coordinates.lat,
    longitude: CONTACT_INFO.coordinates.lng,
  },
  areaServed: [
    { '@type': 'City', name: 'Radomsko' },
    { '@type': 'AdministrativeArea', name: 'powiat radomszczański' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: avgRating.toFixed(1),
    reviewCount: reviews.length,
    bestRating: 5,
    worstRating: 1,
  },
  sameAs: [SOCIAL_MEDIA.facebook, SOCIAL_MEDIA.instagram, SOCIAL_MEDIA.youtube],
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
