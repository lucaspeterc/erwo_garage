'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  { id: 1, title: 'BMW M3 – Chip Tuning Stage 2', category: 'Chip Tuning', image: '/images/bmw.jpeg', specs: '+65 KM | +85 Nm' },
  { id: 2, title: 'Audi A4 – Wymiana rozrządu', category: 'Serwis', image: '/images/audi.jpeg', specs: 'Wymiana rozrządu' },
  { id: 3, title: 'VW Golf GTI – Test mocy', category: 'Hamownia', image: '/images/vw.jpeg', specs: '285 KM | 380 Nm' },
  { id: 4, title: 'BMW 320d – Chip Tuning', category: 'Chip Tuning', image: '/images/bmw2.jpeg', specs: '+40 KM | +80 Nm' },
  { id: 5, title: 'Skoda Octavia – Stage 1', category: 'Chip Tuning', image: '/images/skoda.jpeg', specs: '+35 KM | +50 Nm' },
  { id: 6, title: 'Audi S3 – Serwis i tuning', category: 'Kompleksowa obsługa', image: '/images/audi2.jpeg', specs: '+55 KM | +90 Nm' },
  { id: 7, title: 'Serwis – diagnostyka', category: 'Serwis', image: '/images/garage.jpeg', specs: 'Diagnostyka komputerowa' },
  { id: 8, title: 'Hamownia – pomiar mocy', category: 'Hamownia', image: '/images/garage2.jpeg', specs: 'Protokół pomiarowy' },
  { id: 9, title: 'BMW – Chip Tuning przygotowanie', category: 'Chip Tuning', image: '/images/bmw3.jpeg', specs: 'Stage 1' },
  { id: 10, title: 'Serwis klimatyzacji', category: 'Serwis', image: '/images/garage3.jpeg', specs: 'Serwis AC' },
  { id: 11, title: 'BMW – kompleksowa obsługa', category: 'Kompleksowa obsługa', image: '/images/bmw4.jpeg', specs: 'Serwis + tuning' },
  { id: 12, title: 'Hamownia – wyniki', category: 'Hamownia', image: '/images/garage4.jpeg', specs: 'Pomiar przed/po' },
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
