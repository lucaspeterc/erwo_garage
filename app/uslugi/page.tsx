import type { Metadata } from 'next'
import Link from 'next/link'
import { Wrench, Zap, Gauge, Laptop, Compass, Snowflake, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Usługi - Serwis, Chip Tuning, Hamownia | ERWO Garage Radomsko',
  description: 'Pełna oferta ERWO Garage w Radomsku: serwis samochodowy, chip tuning, hamownia, geometria 3D, klimatyzacja i elektronika warsztatowa. BMW, Audi, VW i inne marki.',
  alternates: { canonical: '/uslugi' },
  openGraph: {
    title: 'Usługi | ERWO Garage Radomsko',
    description: 'Serwis, chip tuning, hamownia, geometria 3D, klimatyzacja i elektronika warsztatowa.',
    url: 'https://erwo-garage.pl/uslugi',
    type: 'website',
  },
}

const services = [
  { title: 'Serwis Samochodowy', description: 'Kompleksowa obsługa serwisowa z wpisem do elektronicznej książki serwisowej. BMW, MINI, VW, Audi i inne.', href: '/uslugi/serwis-samochodowy', Icon: Wrench },
  { title: 'Chip Tuning', description: 'Profesjonalny tuning silnika z gwarancją – wzrost mocy nawet do 35% i niższe spalanie.', href: '/uslugi/chip-tuning', Icon: Zap },
  { title: 'Hamownia', description: 'Pomiar mocy i momentu obrotowego na nowoczesnej hamowni. Test przed i po tuningu.', href: '/uslugi/hamownia', Icon: Gauge },
  { title: 'Geometria 3D', description: 'Precyzyjny pomiar i regulacja geometrii zawieszenia na sprzęcie 3D.', href: '/uslugi/geometria-3d', Icon: Compass },
  { title: 'Klimatyzacja', description: 'Serwis, odgrzybianie i napełnianie klimatyzacji – także czynnik R1234yf.', href: '/uslugi/klimatyzacja', Icon: Snowflake },
  { title: 'Elektronika Warsztatowa', description: 'Sprzedaż i doradztwo w zakresie profesjonalnego sprzętu diagnostycznego.', href: '/uslugi/elektronika-warsztatowa', Icon: Laptop },
]

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://erwo-garage.pl/' },
    { '@type': 'ListItem', position: 2, name: 'Usługi', item: 'https://erwo-garage.pl/uslugi' },
  ],
}

export default function UslugiPage() {
  return (
    <main className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="bg-erwo-black text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bebas tracking-wide mb-4">Nasze Usługi</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Kompleksowa obsługa Twojego samochodu w jednym miejscu – od rutynowych przeglądów po zaawansowany chip tuning.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map(({ title, description, href, Icon }) => (
              <Link
                key={href}
                href={href}
                className="group block p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-xl hover:border-erwo-red/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-erwo-red/10 rounded-full flex items-center justify-center mb-5 group-hover:bg-erwo-red transition-colors">
                  <Icon className="w-7 h-7 text-erwo-red group-hover:text-white transition-colors" />
                </div>
                <h2 className="text-xl font-bold text-erwo-dark mb-2 group-hover:text-erwo-red transition-colors">{title}</h2>
                <p className="text-gray-600 text-sm mb-4">{description}</p>
                <span className="inline-flex items-center text-erwo-red font-bold text-sm">
                  Dowiedz się więcej
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">Nie wiesz, której usługi potrzebujesz? Doradzimy.</p>
            <Link href="/kontakt" className="btn-primary text-lg px-8 py-4">
              Umów wizytę
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
