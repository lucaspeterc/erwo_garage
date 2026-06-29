import Link from 'next/link'
import { projectsSection as copy } from '@/lib/copy'
import { projects } from '@/lib/realizacje'
import ProjectsInfiniteGrid from './ProjectsInfiniteGrid'

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

        {/* Projects Grid (infinite scroll) */}
        <ProjectsInfiniteGrid projects={projects} />

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
