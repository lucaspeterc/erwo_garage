import Link from 'next/link'
import { CheckCircle, Phone } from 'lucide-react'
import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Serwis Samochodowy | ERWO Garage Radomsko',
  description: 'Kompleksowy serwis samochodowy w Radomsku. BMW, MINI, VW, Audi i inne marki. Diagnostyka, przeglądy, wymiana rozrządów, sprzęgła, klimatyzacja. Wpis do elektronicznej książki serwisowej.',
}

const services = [
  'Diagnostyka komputerowa',
  'Przeglądy prewencyjne i rejestracyjne',
  'Serwis klimatyzacji',
  'Wymiana rozrządów',
  'Wymiana oleju i filtrów',
  'Wymiana klocków i tarcz hamulcowych',
  'Wymiana sprzęgła',
  'Naprawa układu chłodzenia',
  'Naprawa zawieszenia',
  'Serwis skrzyni biegów',
  'Wymiana oleju w skrzyni DSG/automatycznej',
  'Wpis do elektronicznej książki serwisowej',
]

export default function SerwisPage() {
  return (
    <main className="pt-24">
      <section className="bg-erwo-black text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bebas tracking-wide mb-4">Serwis Samochodowy</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Kompleksowa obsługa serwisowa z wpisem do elektronicznej książki serwisowej. BMW, MINI, VW, Audi, Skoda, Seat i inne marki.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bebas tracking-wide mb-6 text-erwo-black">Co oferujemy?</h2>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-erwo-red flex-shrink-0" />
                    <span className="text-gray-700">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-erwo-gray rounded-xl p-8 space-y-6">
              <h3 className="text-2xl font-bebas tracking-wide text-erwo-black">Dlaczego ERWO Garage?</h3>
              <p className="text-gray-600 leading-relaxed">
                Specjalizujemy się w serwisie marek premium – szczególnie BMW i MINI – ale obsługujemy wszystkie marki osobowe i dostawcze. Każda naprawa jest poprzedzona szczegółową diagnostyką komputerową, a klient jest informowany o zakresie prac i kosztach przed ich rozpoczęciem.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Używamy wyłącznie oryginalnych lub równoważnych części od certyfikowanych dostawców. Po serwisie dokonujemy wpisu do elektronicznej książki serwisowej, co chroni Twoją gwarancję producenta.
              </p>
              <div className="bg-erwo-red/10 border border-erwo-red/20 rounded-lg p-4">
                <p className="text-erwo-dark font-semibold">Gwarancja na wykonane usługi do 100 000 km</p>
              </div>
              <div className="space-y-3 pt-2">
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="btn-primary flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Zadzwoń: {CONTACT_INFO.phone}
                </a>
                <Link href="/kontakt" className="btn-outline flex items-center justify-center">
                  Umów wizytę online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
