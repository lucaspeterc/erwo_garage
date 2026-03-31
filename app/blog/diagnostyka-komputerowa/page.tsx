import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diagnostyka komputerowa – Klucz do sprawnego auta | ERWO Garage',
  description: 'Jak nowoczesna diagnostyka komputerowa pomaga w szybkim wykryciu usterek i oszczędza Twoje pieniądze. ERWO Garage Radomsko.',
}

export default function DiagnostykaPage() {
  return (
    <main className="pt-24">
      <section className="bg-erwo-black text-white py-16">
        <div className="container-custom max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Wróć do bloga
          </Link>
          <div className="inline-block bg-erwo-red text-white text-xs font-bold px-3 py-1 rounded-full mb-4">Diagnostyka</div>
          <h1 className="text-3xl md:text-4xl font-bebas tracking-wide mb-4">Diagnostyka komputerowa – Klucz do sprawnego auta</h1>
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 10 października 2025</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 4 min czytania</span>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="relative h-72 rounded-xl overflow-hidden mb-10">
            <Image src="/images/IMG_7353.jpeg" alt="Diagnostyka komputerowa" fill className="object-cover" />
          </div>

          <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Nowoczesne samochody to zaawansowane systemy elektroniczne. Silnik, skrzynia biegów, ABS, ESP, poduszki powietrzne – każdy z tych układów sterowany jest przez osobny sterownik. Gdy pojawia się problem, diagnostyka komputerowa pozwala w ciągu kilku minut zlokalizować usterkę z dużą precyzją.
            </p>

            <h2 className="text-2xl font-bebas tracking-wide text-erwo-black">Czym jest diagnostyka OBD2?</h2>
            <p>
              OBD2 (On-Board Diagnostics) to standardowy interfejs diagnostyczny obecny we wszystkich autach osobowych od 2001 roku (benzynowe) i 2004 roku (diesle). Poprzez złącze OBD2 nasz specjalistyczny tester odczytuje kody błędów zapisane przez sterowniki pojazdu, wartości na żywo z czujników oraz przeprowadza testy aktuatorów.
            </p>

            <h2 className="text-2xl font-bebas tracking-wide text-erwo-black">Co możemy sprawdzić?</h2>
            <ul className="space-y-2">
              {[
                'Kody błędów z wszystkich sterowników pojazdu',
                'Wartości na żywo: temperatura, ciśnienia, lambda, kąt wyprzedzenia zapłonu',
                'Stan czujników (MAF, MAP, O2, temperatury)',
                'Działanie wtryskiwaczy i cewek zapłonowych',
                'Układ ABS, ESP, poduszki powietrzne',
                'Skrzynia biegów – adaptacje, błędy, temperatury',
                'Kasowanie inspekcji i zerowanie adaptacji (Reset Service)',
              ].map((s) => (
                <li key={s} className="flex gap-2">
                  <span className="text-erwo-red font-bold mt-0.5">→</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bebas tracking-wide text-erwo-black">Dlaczego warto zrobić diagnostykę przed naprawą?</h2>
            <p>
              Diagnostyka pozwala uniknąć kosztownego &bdquo;strzelania na ślepo&rdquo; &ndash; wymiany części, które mogą być sprawne. Precyzyjne zlokalizowanie usterki skraca czas naprawy i obniża jej koszt. W ERWO Garage diagnostykę wykonujemy specjalistycznym sprzętem dedykowanym dla marek BMW, MINI, Audi, VW, Skoda, Seat i innych.
            </p>

            <div className="bg-erwo-gray rounded-xl p-6 mt-8">
              <p className="font-bold text-erwo-dark mb-2">Pali się kontrolka? Coś nie gra?</p>
              <p className="text-gray-600 mb-4">Zapraszamy na diagnostykę. Szybko i precyzyjnie znajdziemy przyczynę problemu.</p>
              <Link href="/kontakt" className="btn-primary">Umów wizytę</Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
