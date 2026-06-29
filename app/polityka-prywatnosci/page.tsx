import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Polityka prywatności | ERWO Garage',
  description: 'Polityka prywatności serwisu erwo-garage.pl – informacje o przetwarzaniu danych osobowych zgodnie z RODO.',
  alternates: { canonical: '/polityka-prywatnosci' },
  robots: { index: true, follow: true },
}

export default function PolitykaPrywatnosciPage() {
  return (
    <main className="pt-24">
      <section className="bg-erwo-black text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bebas tracking-wide">Polityka prywatności</h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl prose-erwo space-y-8 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bebas tracking-wide text-erwo-black mb-3">1. Administrator danych</h2>
            <p>
              Administratorem danych osobowych jest <strong>ERWO Garage</strong> z siedzibą przy
              ul. {CONTACT_INFO.address}, {CONTACT_INFO.postalCode} {CONTACT_INFO.city}.
              W sprawach dotyczących danych osobowych możesz skontaktować się z nami pod adresem
              e-mail: <a href={`mailto:${CONTACT_INFO.email}`} className="text-erwo-red hover:underline">{CONTACT_INFO.email}</a> lub
              telefonicznie: <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-erwo-red hover:underline">{CONTACT_INFO.phone}</a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bebas tracking-wide text-erwo-black mb-3">2. Zakres i cel przetwarzania</h2>
            <p>
              Za pośrednictwem formularza kontaktowego zbieramy dane, które podajesz dobrowolnie:
              imię i nazwisko, adres e-mail, numer telefonu (opcjonalnie) oraz treść wiadomości.
              Dane te przetwarzamy wyłącznie w celu udzielenia odpowiedzi na Twoje zapytanie oraz
              obsługi ewentualnej wizyty w warsztacie.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bebas tracking-wide text-erwo-black mb-3">3. Podstawa prawna</h2>
            <p>
              Dane przetwarzamy na podstawie art. 6 ust. 1 lit. a (zgoda) oraz lit. f (prawnie
              uzasadniony interes administratora, polegający na obsłudze korespondencji)
              Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bebas tracking-wide text-erwo-black mb-3">4. Odbiorcy danych</h2>
            <p>
              Wiadomości z formularza są dostarczane za pośrednictwem usługi <strong>Web3Forms</strong>,
              która pełni rolę podmiotu przetwarzającego dane w naszym imieniu. Dane mogą być
              przetwarzane na serwerach poza Europejskim Obszarem Gospodarczym z zachowaniem
              odpowiednich zabezpieczeń. Nie sprzedajemy ani nie udostępniamy Twoich danych w celach
              marketingowych podmiotom trzecim.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bebas tracking-wide text-erwo-black mb-3">5. Okres przechowywania</h2>
            <p>
              Dane przechowujemy przez czas niezbędny do obsługi zapytania, a następnie do czasu
              przedawnienia ewentualnych roszczeń lub do momentu cofnięcia zgody.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bebas tracking-wide text-erwo-black mb-3">6. Twoje prawa</h2>
            <p>
              Masz prawo do dostępu do swoich danych, ich sprostowania, usunięcia lub ograniczenia
              przetwarzania, przenoszenia danych, wniesienia sprzeciwu oraz cofnięcia zgody w dowolnym
              momencie. Przysługuje Ci również prawo wniesienia skargi do Prezesa Urzędu Ochrony
              Danych Osobowych (PUODO).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bebas tracking-wide text-erwo-black mb-3">7. Pliki cookies</h2>
            <p>
              Serwis może wykorzystywać pliki cookies niezbędne do jego prawidłowego działania oraz
              osadzone mapy Google. Możesz zarządzać plikami cookies w ustawieniach swojej
              przeglądarki.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
