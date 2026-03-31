import Image from 'next/image'
import Link from 'next/link'
import { Award, Shield, Users, Wrench } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'O nas | ERWO Garage - Serwis & Chip Tuning Radomsko',
  description: 'Poznaj ERWO Garage – wielokrotnego laureata Orłów Motoryzacji. Profesjonalny serwis BMW, MINI i chip tuning w Radomsku od ponad 15 lat.',
}

const awards = [
  { year: '2025', title: 'Orzeł Motoryzacji' },
  { year: '2024', title: 'Orzeł Motoryzacji' },
  { year: '2023', title: 'Orzeł Motoryzacji' },
  { year: '2022', title: 'Orzeł Motoryzacji' },
  { year: '2021', title: 'Orzeł Motoryzacji' },
  { year: '2019', title: 'Orzeł Motoryzacji' },
]

const values = [
  {
    icon: Shield,
    title: 'Uczciwość',
    description: 'Zawsze transparentna wycena i wyjaśnienie każdej naprawy przed przystąpieniem do pracy.',
  },
  {
    icon: Wrench,
    title: 'Fachowość',
    description: 'Certyfikowani mechanicy z wieloletnim doświadczeniem przy markach premium i nie tylko.',
  },
  {
    icon: Users,
    title: 'Podejście do klienta',
    description: 'Traktujemy każde auto jak własne. Indywidualne podejście i doradztwo bez wciskania zbędnych usług.',
  },
  {
    icon: Award,
    title: 'Jakość potwierdzona nagrodami',
    description: 'Wielokrotny laureat prestiżowego wyróżnienia Orły Motoryzacji – przyznawanego najlepszym warsztatom w Polsce.',
  },
]

export default function ONasPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="bg-erwo-black text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bebas tracking-wide mb-4">O nas</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Pasja do motoryzacji, precyzja w działaniu i zaufanie klientów od ponad 15 lat.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 md:h-[480px] rounded-xl overflow-hidden">
              <Image
                src="/images/garage4.jpeg"
                alt="Warsztat ERWO Garage"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bebas tracking-wide mb-6 text-erwo-black">
                Kim jesteśmy?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-erwo-dark">ERWO Garage</strong> to rodzinny warsztat samochodowy zlokalizowany przy ul. Przedborskiej 45 w Radomsku, prowadzony przez <strong className="text-erwo-dark">Wojciecha Piwowarczyka</strong>. Działamy z pasją do motoryzacji od ponad 15 lat.
                </p>
                <p>
                  Specjalizujemy się w kompleksowym serwisie samochodowym – ze szczególnym uwzględnieniem marek BMW i MINI – oraz w profesjonalnym chip tuningu z pomiarem mocy na własnej hamowni.
                </p>
                <p>
                  Jesteśmy wielokrotnym laureatem prestiżowego wyróżnienia <strong className="text-erwo-dark">Orły Motoryzacji</strong>, przyznawanego najlepszym warsztatom w Polsce przez niezależne jury. To dla nas powód do dumy i codzienna motywacja do jeszcze lepszej pracy.
                </p>
                <p>
                  Nasi klienci cenią nas za uczciwość, fachowość i transparentną komunikację. Nie wciskamy zbędnych usług – wyjaśniamy co, dlaczego i za ile.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/kontakt" className="btn-primary">
                  Umów wizytę
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-erwo-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bebas tracking-wide mb-4 text-erwo-black">Nasze wartości</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="w-14 h-14 bg-erwo-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7 text-erwo-red" />
                </div>
                <h3 className="font-bold text-erwo-dark text-lg mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section-padding bg-erwo-black text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bebas tracking-wide mb-4">Orły Motoryzacji</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Prestiżowe wyróżnienie przyznawane najlepszym warsztatom w Polsce przez niezależne jury. Jesteśmy z niego dumni.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {awards.map((a) => (
              <div key={a.year} className="bg-erwo-red/10 border border-erwo-red/30 rounded-xl px-8 py-5 text-center">
                <Award className="w-8 h-8 text-erwo-red mx-auto mb-2" />
                <p className="font-bebas text-2xl text-erwo-red">{a.year}</p>
                <p className="text-gray-300 text-sm">{a.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { value: '15+', label: 'Lat doświadczenia' },
              { value: '5000+', label: 'Zadowolonych klientów' },
              { value: '6x', label: 'Orzeł Motoryzacji' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-5xl font-bebas text-erwo-red mb-2">{s.value}</p>
                <p className="text-gray-600">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
