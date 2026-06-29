'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { projects, categories } from '@/lib/realizacje'

export default function RealizacjeClient() {
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
