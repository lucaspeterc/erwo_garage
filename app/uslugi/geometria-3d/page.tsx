import Link from 'next/link'
import { CheckCircle, Phone } from 'lucide-react'
import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Geometria 3D | ERWO Garage Radomsko',
  description: 'Profesjonalna geometria 3D kół w Radomsku. Precyzyjne ustawienie zbieżności, pochylenia i kąta skrętu. ERWO Garage.',
}

const features = [
  'Pomiar i regulacja zbieżności kół',
  'Pomiar i regulacja pochylenia kół',
  'Regulacja kąta wyprzedzenia osi skrętu',
  'Diagnostyka geometrii zawieszenia',
  'Pomiar na nowoczesnym urządzeniu 3D',
  'Wydruk protokołu pomiarowego przed i po regulacji',
  'Korekta po wymianie elementów zawieszenia',
]

export default function Geometria3DPage() {
  return (
    <main className="pt-24">
      <section className="bg-erwo-black text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bebas tracking-wide mb-4">Geometria 3D</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Precyzyjny pomiar i regulacja geometrii kół na nowoczesnym urządzeniu 3D. Bezpieczeństwo i komfort jazdy.
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
                Nieprawidłowa geometria kół powoduje nierównomierne zużycie opon, zwiększone zużycie paliwa oraz pogorszenie prowadzenia pojazdu. Regularna kontrola geometrii to inwestycja w bezpieczeństwo i oszczędność.
              </p>
            </div>

            <div className="bg-erwo-gray rounded-xl p-8 space-y-6">
              <h3 className="text-2xl font-bebas tracking-wide text-erwo-black">Kiedy sprawdzić geometrię?</h3>
              <ul className="space-y-4 text-gray-700">
                {[
                  'Po wymianie elementów zawieszenia lub układu kierowniczego',
                  'Po uderzeniu w krawężnik lub dziurę w drodze',
                  'Gdy auto ciągnie w jedną stronę',
                  'Przy nierównomiernym zużyciu opon',
                  'Po każdej wymianie opon sezonowych',
                  'Profilaktycznie co 20 000 km',
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
