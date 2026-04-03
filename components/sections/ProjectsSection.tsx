import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { projectsSection as copy, projects as projectsData } from '@/lib/copy'

const images = [
  '/images/bmw.jpeg',
  '/images/audi.jpeg',
  '/images/vw.jpeg',
  '/images/bmw2.jpeg',
  '/images/skoda.jpeg',
  '/images/audi2.jpeg',
]

const projects = projectsData.map((p, i) => ({
  id: i + 1,
  title: p.title,
  category: p.category,
  image: images[i] ?? '/images/bmw.jpeg',
  specs: p.spec,
}))

export default function ProjectsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="mb-4">{copy.heading}</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {copy.subheading}
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
                    {copy.viewDetails}
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
            {copy.allProjects}
          </Link>
        </div>
      </div>
    </section>
  )
}
