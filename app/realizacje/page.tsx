'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  { id: 1, title: 'Audi RS7 2025 – serwis układu hamulcowego', category: 'Serwis', image: '/images/audi7.jpeg', specs: 'Serwis hamulców' },
  { id: 2, title: 'VW Golf VII 1.4TSI – Stage 1 ECU + TCU', category: 'Chip Tuning', image: '/images/vw7.jpeg', specs: '+30 KM | +50 Nm' },
  // { id: 3, title: 'Nissan Qashqai 1.2 Turbo – Chip Tuning', category: 'Chip Tuning', image: '/images/nissan-qashqai.jpeg', specs: '+30 KM | +40 Nm' },
  { id: 4, title: 'BMW F10 2.0d N47 – modyfikacja punktów zmiany biegów', category: 'Chip Tuning', image: '/images/bmw4.jpeg', specs: 'Mapa skrzyni biegów' },
  { id: 5, title: 'Nissan 350Z – serwis mechaniczny', category: 'Serwis', image: '/images/received_1264102973931009.jpeg', specs: 'Serwis mechaniczny' },
  { id: 6, title: 'Skoda Octavia VRS 2.0TDI – Chip Tuning', category: 'Chip Tuning', image: '/images/skoda5.jpeg', specs: '+30 KM | +50 Nm' },
  { id: 7, title: 'Naprawa elektroniki samochodowej', category: 'Serwis', image: '/images/audi3.jpeg', specs: 'Diagnostyka i naprawa' },
  { id: 8, title: 'VW Arteon R 320KM – modyfikacja skrzyni biegów', category: 'Chip Tuning', image: '/images/vw4.jpeg', specs: 'Mapa skrzyni biegów' },
  { id: 9, title: 'Audi Q7 3.0TDI – modyfikacja ciśnienia oleju', category: 'Serwis', image: '/images/audi5.jpeg', specs: 'Modyfikacja ciśnienia oleju' },
  { id: 10, title: 'Porsche Cayenne 3.0TDI – serwis eksploatacyjny', category: 'Serwis', image: '/images/porsche.jpeg', specs: 'Serwis eksploatacyjny' },
  { id: 11, title: 'Skoda Superb 1.5TSI – serwis + Stage 1', category: 'Kompleksowa obsługa', image: '/images/skoda2.jpeg', specs: '+40 KM | +60 Nm' },
  { id: 12, title: 'Jaguar 3.0d – Chip Tuning', category: 'Chip Tuning', image: '/images/jaguar.jpeg', specs: '+90 KM | +140 Nm' },
]

const categories = ['Wszystkie', 'Chip Tuning', 'Serwis', 'Hamownia', 'Kompleksowa obsługa']

export default function RealizacjePage() {
  const [active, setActive] = useState('Wszystkie')

  const filtered = active === 'Wszystkie' ? projects : projects.filter((p) => p.category === active)

  return (
    <main className="pt-24">
      <section className="bg-erwo-black text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bebas tracking-wide mb-4">Nasze Realizacje</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Zobacz efekty naszej pracy – setki zadowolonych klientów i udanych projektów.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full font-roboto font-medium transition-all duration-200 ${
                  active === cat
                    ? 'bg-erwo-red text-white'
                    : 'bg-erwo-gray text-erwo-dark hover:bg-erwo-red/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg card-hover bg-white">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-erwo-red text-white px-3 py-1 rounded-full text-sm font-roboto font-bold">
                    {project.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-erwo-dark mb-1 group-hover:text-erwo-red transition-colors">{project.title}</h3>
                  <p className="text-gray-500 text-sm">{project.specs}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">Chcesz dołączyć do grona naszych zadowolonych klientów?</p>
            <Link href="/kontakt" className="btn-primary text-lg px-8 py-4">
              Umów wizytę
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
