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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
