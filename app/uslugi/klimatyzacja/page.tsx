import Link from 'next/link'
import { CheckCircle, Phone } from 'lucide-react'
import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Klimatyzacja | ERWO Garage Radomsko',
  description: 'Serwis klimatyzacji samochodowej w Radomsku. Nabijanie, odgrzybianie, diagnostyka i naprawa układu klimatyzacji. ERWO Garage.',
}

const features = [
  'Nabijanie czynnika chłodniczego (R134a / R1234yf)',
  'Test szczelności układu klimatyzacji',
  'Odgrzybianie i dezynfekcja ozonem',
  'Wymiana filtra kabinowego',
  'Diagnostyka i naprawa sprężarki',
  'Wymiana osuszacza klimatyzacji',
  'Kontrola wydajności chłodzenia',
]

export default function KlimatyzacjaPage() {
  return (
    <main className="pt-24">
      <section className="bg-erwo-black text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bebas tracking-wide mb-4">Klimatyzacja</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Kompleksowy serwis klimatyzacji samochodowej. Nabijanie, odgrzybianie i naprawa układu A/C.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bebas tracking-wide mb-6 text-erwo-black">Co oferujemy?</h2>
              <ul className="space-y-3 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-erwo-red flex-shrink-0" />
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Sprawna klimatyzacja to nie tylko komfort, ale też bezpieczeństwo. Regularny serwis zapobiega rozwojowi bakterii i grzybów w układzie wentylacji, a także przedłuża żywotność sprężarki i pozostałych komponentów.
              </p>
            </div>

            <div className="bg-erwo-gray rounded-xl p-8 space-y-6">
              <h3 className="text-2xl font-bebas tracking-wide text-erwo-black">Kiedy serwisować klimatyzację?</h3>
              <ul className="space-y-4 text-gray-700">
                {[
                  'Co najmniej raz w roku – przed sezonem letnim',
                  'Gdy klimatyzacja słabo chłodzi',
                  'Przy nieprzyjemnym zapachu z nawiewów',
                  'Gdy sprężarka głośno pracuje lub wyłącza się',
                  'Po dłuższym postoju pojazdu',
                  'Przy parującej szybie przedniej mimo nawiewu',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-erwo-red font-bold">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-3 pt-4">
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="btn-primary flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Zadzwoń: {CONTACT_INFO.phone}
                </a>
                <Link href="/kontakt" className="btn-outline flex items-center justify-center">
                  Umów wizytę
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
