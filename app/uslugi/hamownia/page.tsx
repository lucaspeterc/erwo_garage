import Link from 'next/link'
import { CheckCircle, Phone } from 'lucide-react'
import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Hamownia | ERWO Garage Radomsko',
  description: 'Profesjonalny pomiar mocy i momentu obrotowego na hamowni w Radomsku. Test przed i po chip tuningu. Wydruk protokołu pomiarowego.',
}

const features = [
  'Pomiar mocy rzeczywistej (KM / kW)',
  'Pomiar momentu obrotowego (Nm)',
  'Test przed i po chip tuningu',
  'Wydruk protokołu pomiarowego',
  'Porównanie krzywych mocy',
  'Diagnoza problemów silnika pod obciążeniem',
  'Możliwość nagrania przebiegu pomiaru',
]

export default function HamowniaPage() {
  return (
    <main className="pt-24">
      <section className="bg-erwo-black text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bebas tracking-wide mb-4">Hamownia</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Profesjonalny pomiar mocy i momentu obrotowego na nowoczesnej hamowni. Twarde dane zamiast obietnic.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bebas tracking-wide mb-6 text-erwo-black">Co mierzymy?</h2>
              <ul className="space-y-3 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-erwo-red flex-shrink-0" />
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Pomiar na hamowni to jedyna miarodajna metoda weryfikacji rzeczywistej mocy silnika. Dane z komputera pokładowego mogą być niedokładne – hamownia pokazuje prawdę. Dlatego każdy chip tuning w ERWO Garage możemy potwierdzić twardymi danymi z wydruku.
              </p>
            </div>

            <div className="bg-erwo-gray rounded-xl p-8 space-y-6">
              <h3 className="text-2xl font-bebas tracking-wide text-erwo-black">Kiedy warto przyjechać na hamownię?</h3>
              <ul className="space-y-4 text-gray-700">
                {[
                  'Przed i po chip tuningu – weryfikacja efektów',
                  'Przy zakupie używanego auta – sprawdź czy moc zgadza się z dokumentami',
                  'Przy problemach z silnikiem – diagnoza pod obciążeniem',
                  'Przy przygotowaniu auta do zawodów',
                  'Z ciekawości – ile naprawdę ma Twoje auto?',
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
                  Umów termin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
