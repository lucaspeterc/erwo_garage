import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'
import JsonLd, { breadcrumbLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Wymiana rozrządu BMW – Kiedy i dlaczego? | ERWO Garage',
  description: 'Poznaj objawy zużycia rozrządu BMW i dowiedz się, kiedy należy wykonać wymianę, aby uniknąć poważnej awarii silnika.',
  alternates: { canonical: '/blog/wymiana-rozrzadu-bmw' },
  openGraph: {
    title: 'Wymiana rozrządu BMW – Kiedy i dlaczego? | ERWO Garage',
    description: 'Poznaj objawy zużycia rozrządu BMW i dowiedz się, kiedy należy wykonać wymianę, aby uniknąć poważnej awarii silnika.',
    url: 'https://erwo-garage.pl/blog/wymiana-rozrzadu-bmw',
    type: 'article',
    publishedTime: '2025-10-15',
  },
}

export default function RozrzadBMWPage() {
  return (
    <main className="pt-24">
      <JsonLd data={breadcrumbLd([{ name: 'Strona główna', path: '/' }, { name: 'Blog', path: '/blog' }, { name: 'Wymiana rozrządu BMW – Kiedy i dlaczego?', path: '/blog/wymiana-rozrzadu-bmw' }])} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Article', headline: 'Wymiana rozrządu BMW – Kiedy i dlaczego?', description: 'Poznaj objawy zużycia rozrządu BMW i dowiedz się, kiedy należy wykonać wymianę, aby uniknąć poważnej awarii silnika.', datePublished: '2025-10-15', dateModified: '2025-10-15', articleSection: 'Serwis', author: { '@type': 'Organization', name: 'ERWO Garage' }, publisher: { '@type': 'Organization', name: 'ERWO Garage', logo: { '@type': 'ImageObject', url: 'https://erwo-garage.pl/images/garage.jpeg' } }, image: 'https://erwo-garage.pl/images/garage.jpeg', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://erwo-garage.pl/blog/wymiana-rozrzadu-bmw' } }} />
      <section className="bg-erwo-black text-white py-16">
        <div className="container-custom max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Wróć do bloga
          </Link>
          <div className="inline-block bg-erwo-red text-white text-xs font-bold px-3 py-1 rounded-full mb-4">Serwis</div>
          <h1 className="text-3xl md:text-4xl font-bebas tracking-wide mb-4">Wymiana rozrządu BMW – Kiedy i dlaczego?</h1>
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 15 października 2025</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 7 min czytania</span>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="relative h-72 rounded-xl overflow-hidden mb-10">
            <Image src="/images/bmw4.jpeg" alt="Wymiana rozrządu BMW" fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
          </div>

          <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Układ rozrządu to jeden z kluczowych elementów silnika. Odpowiada za synchronizację pracy zaworów z ruchem tłoków. Jego awaria – szczególnie w silnikach BMW – może oznaczać poważne i kosztowne uszkodzenie silnika. Dlatego regularna wymiana rozrządu to jeden z najważniejszych przeglądów, o którym nie wolno zapominać.
            </p>

            <h2 className="text-2xl font-bebas tracking-wide text-erwo-black">Kiedy wymieniać rozrząd w BMW?</h2>
            <p>
              BMW zaleca wymianę łańcucha lub paska rozrządu zazwyczaj co 60 000–100 000 km, w zależności od modelu i roku produkcji. Jednak w praktyce wiele silników BMW (szczególnie N47, N57, N20, N26) jest znanych z problemów z łańcuchem rozrządu znacznie wcześniej. Nie warto czekać na objawy – zapobiegawcza wymiana jest wielokrotnie tańsza od naprawy poawaryjnej.
            </p>

            <h2 className="text-2xl font-bebas tracking-wide text-erwo-black">Objawy zużytego rozrządu</h2>
            <ul className="space-y-2">
              {['Charakterystyczny metaliczny stukot przy zimnym rozruchu', 'Błędy sterownika silnika (kontrolka Check Engine)', 'Zwiększone zużycie oleju', 'Problemy z rozruchem silnika', 'Utrata mocy i nierówna praca silnika'].map((s) => (
                <li key={s} className="flex gap-2">
                  <span className="text-erwo-red font-bold mt-0.5">→</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bebas tracking-wide text-erwo-black">Co wymieniamy podczas serwisu rozrządu?</h2>
            <p>
              Profesjonalna wymiana rozrządu w ERWO Garage obejmuje nie tylko łańcuch lub pasek, ale również napinaczy, prowadnic, pompy wody (jeśli napędzana jest przez rozrząd) oraz wszystkich uszczelek. Używamy wyłącznie oryginalnych lub certyfikowanych części. Po wymianie dokonujemy wpisu do elektronicznej książki serwisowej.
            </p>

            <div className="bg-erwo-gray rounded-xl p-6 mt-8">
              <p className="font-bold text-erwo-dark mb-2">Masz BMW i niepewny stan rozrządu?</p>
              <p className="text-gray-600 mb-4">Zapraszamy na diagnostykę. Lepiej sprawdzić zawczasu niż naprawiać po awarii.</p>
              <Link href="/kontakt" className="btn-primary">Umów przegląd</Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
