import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

// Sample projects - can be moved to a data file later
const projects = [
  {
    id: 1,
    title: 'BMW M3 - Chip Tuning Stage 2',
    category: 'Chip Tuning',
    image: '/images/IMG_7919.jpeg',
    specs: '+65 KM | +85 Nm',
  },
  {
    id: 2,
    title: 'Audi A4 - Diagnostyka i Naprawa',
    category: 'Serwis',
    image: '/images/IMG_8159.jpeg',
    specs: 'Wymiana rozrządu',
  },
  {
    id: 3,
    title: 'VW Golf GTI - Test Mocy',
    category: 'Hamownia',
    image: '/images/IMG_8315.jpeg',
    specs: '285 KM | 380 Nm',
  },
  {
    id: 4,
    title: 'BMW 320d - Chip Tuning',
    category: 'Chip Tuning',
    image: '/images/IMG_8587.jpeg',
    specs: '+40 KM | +80 Nm',
  },
  {
    id: 5,
    title: 'Mini Cooper S - Stage 1',
    category: 'Chip Tuning',
    image: '/images/IMG_9102.jpeg',
    specs: '+35 KM | +50 Nm',
  },
  {
    id: 6,
    title: 'Audi S3 - Serwis i Tuning',
    category: 'Kompleksowa obsługa',
    image: '/images/IMG_9700.jpeg',
    specs: '+55 KM | +90 Nm',
  },
]

export default function ProjectsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="mb-4">Nasze Realizacje</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Zobacz efekty naszej pracy - setki zadowolonych klientów i udanych projektów
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg card-hover bg-white"
            >
              {/* Image */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-erwo-red text-white px-3 py-1 rounded-full text-sm font-roboto font-bold">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl mb-2 group-hover:text-erwo-red transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 font-roboto-condensed">
                  {project.specs}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-erwo-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-xl mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.specs}</p>
                  <span className="inline-flex items-center text-erwo-red font-bold">
                    Zobacz szczegóły
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/realizacje" className="btn-primary text-lg px-8 py-4">
            Zobacz wszystkie realizacje
          </Link>
        </div>
      </div>
    </section>
  )
}
