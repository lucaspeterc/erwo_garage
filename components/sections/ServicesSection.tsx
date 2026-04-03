import Link from 'next/link'
import { Wrench, Zap, Gauge, Laptop, ArrowRight } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import { servicesSection as copy, serviceFeatureLabels } from '@/lib/copy'

const iconMap = { Wrench, Zap, Gauge, Laptop }
const iconByServiceId: Record<string, keyof typeof iconMap> = {
  serwis: 'Wrench',
  chiptuning: 'Zap',
  hamownia: 'Gauge',
  elektronika: 'Laptop',
}

export default function ServicesSection() {
  return (
    <section id="uslugi" className="section-padding bg-erwo-gray">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="mb-4">{copy.heading}</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {copy.subheading}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[iconByServiceId[service.id]]
            const features = serviceFeatureLabels[service.id] ?? []
            return (
              <Link
                key={service.id}
                href={service.link}
                className="group bg-white rounded-lg p-6 shadow-lg card-hover"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-erwo-red/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-erwo-red transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-erwo-red group-hover:text-white transition-all duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl mb-3 group-hover:text-erwo-red transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-erwo-red rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center text-erwo-red font-roboto font-bold mt-auto">
                  {copy.cta}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
