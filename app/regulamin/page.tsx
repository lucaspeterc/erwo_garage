import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Regulamin | ERWO Garage',
  description: 'Regulamin korzystania ze strony internetowej erwo-garage.pl.',
  alternates: { canonical: '/regulamin' },
  robots: { index: true, follow: true },
}

export default function RegulaminPage() {
  return (
    <main className="pt-24">
      <section className="bg-erwo-black text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bebas tracking-wide">Regulamin</h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl space-y-8 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bebas tracking-wide text-erwo-black mb-3">1. Postanowienia ogólne</h2>
            <p>
              Niniejszy regulamin określa zasady korzystania ze strony internetowej dostępnej pod
              adresem erwo-garage.pl, prowadzonej przez ERWO Garage, ul. {CONTACT_INFO.address},
              {' '}{CONTACT_INFO.postalCode} {CONTACT_INFO.city}.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bebas tracking-wide text-erwo-black mb-3">2. Charakter informacyjny</h2>
            <p>
              Strona ma charakter informacyjny i służy prezentacji oferty warsztatu. Informacje
              o usługach, parametrach chip tuningu i cenach nie stanowią oferty handlowej
              w rozumieniu art. 66 Kodeksu cywilnego, a jedynie zaproszenie do kontaktu.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bebas tracking-wide text-erwo-black mb-3">3. Formularz kontaktowy</h2>
            <p>
              Korzystanie z formularza kontaktowego jest dobrowolne i bezpłatne. Wysłanie wiadomości
              wymaga podania danych niezbędnych do udzielenia odpowiedzi. Zasady przetwarzania danych
              opisuje <a href="/polityka-prywatnosci" className="text-erwo-red hover:underline">Polityka prywatności</a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bebas tracking-wide text-erwo-black mb-3">4. Prawa autorskie</h2>
            <p>
              Treści, zdjęcia i materiały zamieszczone na stronie stanowią własność ERWO Garage lub
              są wykorzystywane na podstawie odpowiednich uprawnień. Kopiowanie i rozpowszechnianie
              bez zgody jest zabronione.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bebas tracking-wide text-erwo-black mb-3">5. Kontakt</h2>
            <p>
              W sprawach związanych z funkcjonowaniem strony prosimy o kontakt:
              {' '}<a href={`mailto:${CONTACT_INFO.email}`} className="text-erwo-red hover:underline">{CONTACT_INFO.email}</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
