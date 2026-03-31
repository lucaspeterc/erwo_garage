import Link from 'next/link'
import { CheckCircle, Phone } from 'lucide-react'
import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Elektronika Warsztatowa | ERWO Garage Radomsko',
  description: 'Sprzedaż profesjonalnego sprzętu diagnostycznego i narzędzi warsztatowych w Radomsku. Testery, programatory, doradztwo techniczne.',
}

const products = [
  'Testery diagnostyczne OBD2',
  'Programatory sterowników ECU',
  'Interfejsy do pojazdów BMW, VW, Mercedes i inne',
  'Narzędzia specjalistyczne do demontażu',
  'Sprzęt do serwisu klimatyzacji',
  'Mierniki i oscyloskopy samochodowe',
  'Doradztwo w doborze sprzętu',
]

export default function ElektronikaPage() {
  return (
    <main className="pt-24">
      <section className="bg-erwo-black text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bebas tracking-wide mb-4">Elektronika Warsztatowa</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Sprzedaż profesjonalnego sprzętu diagnostycznego i narzędzi warsztatowych. Doradztwo dla mechaników i hobbystów.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bebas tracking-wide mb-6 text-erwo-black">Co oferujemy?</h2>
              <ul className="space-y-3 mb-8">
                {products.map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-erwo-red flex-shrink-0" />
                    <span className="text-gray-700">{p}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Jako warsztat korzystający na co dzień z profesjonalnego sprzętu diagnostycznego, wiemy dokładnie co działa, a co nie. Pomagamy innym warsztatom i pasjonatom motoryzacji dobrać odpowiedni sprzęt do ich potrzeb.
              </p>
            </div>

            <div className="bg-erwo-gray rounded-xl p-8 space-y-6">
              <h3 className="text-2xl font-bebas tracking-wide text-erwo-black">Dla kogo?</h3>
              <ul className="space-y-4 text-gray-700">
                {[
                  'Warsztaty samochodowe szukające niezawodnego sprzętu',
                  'Mechanicy chcący rozszerzyć swoje możliwości diagnostyczne',
                  'Pasjonaci motoryzacji i tunerzy',
                  'Właściciele flot pojazdów',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-erwo-red font-bold">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-sm">
                Skontaktuj się z nami aby dowiedzieć się więcej o dostępnym asortymencie i aktualnych cenach.
              </p>
              <div className="space-y-3 pt-2">
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="btn-primary flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Zadzwoń: {CONTACT_INFO.phone}
                </a>
                <Link href="/kontakt" className="btn-outline flex items-center justify-center">
                  Zapytaj o sprzęt
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
