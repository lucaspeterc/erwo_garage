'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { projectsSection as copy } from '@/lib/copy'
import type { Project } from '@/lib/realizacje'

const INITIAL_COUNT = 9
const STEP = 6

export default function ProjectsInfiniteGrid({ projects }: { projects: Project[] }) {
  const [visible, setVisible] = useState(INITIAL_COUNT)
  const sentinelRef = useRef<HTMLDivElement>(null)

  const hasMore = visible < projects.length

  useEffect(() => {
    if (!hasMore) return
    const el = sentinelRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible((v) => Math.min(v + STEP, projects.length))
        }
      },
      { rootMargin: '200px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [hasMore, projects.length])

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.slice(0, visible).map((project) => (
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
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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

      {/* Sentinel + wskaźnik ładowania */}
      {hasMore && (
        <div ref={sentinelRef} className="flex justify-center py-10" aria-hidden="true">
          <div className="w-8 h-8 border-4 border-erwo-red/30 border-t-erwo-red rounded-full animate-spin" />
        </div>
      )}
    </>
  )
}
