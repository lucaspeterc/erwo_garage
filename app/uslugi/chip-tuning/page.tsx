import Link from 'next/link'
import { CheckCircle, Phone, Zap } from 'lucide-react'
import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Chip Tuning | ERWO Garage Radomsko',
  description: 'Profesjonalny chip tuning silnika w Radomsku. Zwiększenie mocy do 35%, poprawa momentu obrotowego, zmniejszenie spalania. Gwarancja na modyfikację. Pomiar na hamowni.',
}

const benefits = [
  'Zwiększenie mocy silnika nawet do 35%',
  'Poprawa momentu obrotowego',
  'Zmniejszenie zużycia paliwa',
  'Lepsza odpowiedź na gaz',
  'Gwarancja na wykonaną modyfikację',
  'Możliwość pomiaru mocy przed i po na hamowni',
  'Bezpieczne parametry – w granicach wytrzymałości silnika',
  'Możliwość przywrócenia ustawień fabrycznych',
]

const examples = [
  { car: 'BMW 320d (F30)', before: '184 KM / 380 Nm', after: '220 KM / 450 Nm' },
  { car: 'VW Golf VII 2.0 TDI', before: '150 KM / 340 Nm', after: '185 KM / 400 Nm' },
  { car: 'Audi A4 2.0 TFSI', before: '190 KM / 320 Nm', after: '240 KM / 380 Nm' },
  { car: 'BMW 530d (G30)', before: '265 KM / 620 Nm', after: '320 KM / 700 Nm' },
]

export default function ChipTuningPage() {
  return (
    <main className="pt-24">
      <section className="bg-erwo-black text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bebas tracking-wide mb-4">Chip Tuning</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Profesjonalny tuning silnika z gwarancją i możliwością pomiaru mocy na własnej hamowni.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bebas tracking-wide mb-6 text-erwo-black">Korzyści chip tuningu</h2>
              <ul className="space-y-3 mb-10">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-erwo-red flex-shrink-0" />
                    <span className="text-gray-700">{b}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl font-bebas tracking-wide mb-6 text-erwo-black">Przykładowe wyniki</h2>
              <div className="space-y-3">
                {examples.map((ex) => (
                  <div key={ex.car} className="bg-erwo-gray rounded-lg p-4">
                    <p className="font-bold text-erwo-dark mb-2">{ex.car}</p>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-gray-500">Przed: {ex.before}</span>
                      <Zap className="w-4 h-4 text-erwo-red" />
                      <span className="text-erwo-red font-semibold">Po: {ex.after}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-erwo-gray rounded-xl p-8 space-y-6">
              <h3 className="text-2xl font-bebas tracking-wide text-erwo-black">Jak przebiega tuning?</h3>
              <ol className="space-y-4">
                {[
                  'Diagnostyka stanu technicznego pojazdu',
                  'Odczyt oryginalnego oprogramowania ze sterownika',
                  'Optymalizacja map w oprogramowaniu silnika',
                  'Wgranie zmodyfikowanego oprogramowania',
                  'Pomiar mocy na hamowni (opcjonalnie)',
                  'Jazda próbna i weryfikacja parametrów',
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-7 h-7 bg-erwo-red text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
                    <span className="text-gray-700 pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
              <div className="bg-erwo-red/10 border border-erwo-red/20 rounded-lg p-4">
                <p className="text-erwo-dark font-semibold">Gwarancja na modyfikację</p>
                <p className="text-gray-600 text-sm mt-1">Każdy tuning wykonany w ERWO Garage objęty jest gwarancją. Możliwość powrotu do ustawień fabrycznych.</p>
              </div>
              <div className="space-y-3">
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="btn-primary flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Zadzwoń: {CONTACT_INFO.phone}
                </a>
                <Link href="/kontakt" className="btn-outline flex items-center justify-center">
                  Zapytaj o wycenę
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
