import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chip Tuning – Co musisz wiedzieć przed modyfikacją? | ERWO Garage',
  description: 'Kompleksowy przewodnik po chip tuningu. Dowiedz się, jak zwiększyć moc swojego auta bezpiecznie i z gwarancją w ERWO Garage Radomsko.',
}

export default function ChipTuningPostPage() {
  return (
    <main className="pt-24">
      <section className="bg-erwo-black text-white py-16">
        <div className="container-custom max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Wróć do bloga
          </Link>
          <div className="inline-block bg-erwo-red text-white text-xs font-bold px-3 py-1 rounded-full mb-4">Chip Tuning</div>
          <h1 className="text-3xl md:text-4xl font-bebas tracking-wide mb-4">Chip Tuning – Co musisz wiedzieć przed modyfikacją?</h1>
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 20 października 2025</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min czytania</span>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="relative h-72 rounded-xl overflow-hidden mb-10">
            <Image src="/images/IMG_7383.jpeg" alt="Chip Tuning" fill className="object-cover" />
          </div>

          <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Chip tuning to jedna z najpopularniejszych metod na zwiększenie osiągów samochodu bez ingerencji w mechanikę silnika. Polega na modyfikacji oprogramowania sterownika ECU (Electronic Control Unit) – komputera zarządzającego pracą silnika. Ale zanim zdecydujesz się na ten krok, warto wiedzieć, czego się spodziewać.
            </p>

            <h2 className="text-2xl font-bebas tracking-wide text-erwo-black">Jak działa chip tuning?</h2>
            <p>
              Producenci samochodów celowo zostawiają w sterownikach pewien zapas parametrów – ze względu na różne rynki, jakość paliwa czy wymagania emisyjne. Chip tuning optymalizuje te parametry: ciśnienie doładowania, dawkowanie paliwa, wyprzedzenie zapłonu i inne mapy silnika. Efektem jest więcej mocy, lepszy moment obrotowy i często niższe zużycie paliwa.
            </p>

            <h2 className="text-2xl font-bebas tracking-wide text-erwo-black">Ile można zyskać?</h2>
            <p>
              Przyrosty zależą od silnika i jego potencjału. Przy silnikach turbodoładowanych (diesel i benzynowych) efekty są najlepsze – typowe przyrosty to 20-35% mocy i 25-40% momentu obrotowego. Silniki wolnossące dają mniejsze efekty (5-10%).
            </p>

            <h2 className="text-2xl font-bebas tracking-wide text-erwo-black">Czy chip tuning jest bezpieczny?</h2>
            <p>
              Wykonany profesjonalnie – tak. Kluczowe jest, aby modyfikacja uwzględniała wytrzymałość silnika, skrzyni biegów i pozostałych podzespołów. W ERWO Garage każdy tuning poprzedzamy diagnostyką stanu technicznego pojazdu. Parametry dobieramy indywidualnie, nigdy nie przekraczając bezpiecznych granic dla danego układu.
            </p>

            <h2 className="text-2xl font-bebas tracking-wide text-erwo-black">Gwarancja i możliwość cofnięcia</h2>
            <p>
              W ERWO Garage każda modyfikacja objęta jest gwarancją. Co więcej, zawsze możesz wrócić do ustawień fabrycznych – przechowujemy oryginalny plik ze sterownika. Oferujemy również pomiar mocy przed i po tuningu na naszej hamowni, co potwierdza rzeczywiste efekty.
            </p>

            <div className="bg-erwo-gray rounded-xl p-6 mt-8">
              <p className="font-bold text-erwo-dark mb-2">Zainteresowany chip tuningiem?</p>
              <p className="text-gray-600 mb-4">Zadzwoń lub napisz – doradzimy najlepsze rozwiązanie dla Twojego auta.</p>
              <Link href="/kontakt" className="btn-primary">Umów wizytę</Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
