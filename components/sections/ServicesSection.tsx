import Link from 'next/link'
import { Wrench, Zap, Gauge, Laptop, ArrowRight } from 'lucide-react'

const services = [
  {
    id: 'serwis',
    icon: Wrench,
    title: 'Serwis Samochodowy',
    description: 'Kompleksowa obsługa serwisowa z wpisem do elektronicznej książki serwisowej',
    link: '/uslugi/serwis-samochodowy',
    features: ['Diagnostyka', 'Przeglądy', 'Naprawy'],
  },
  {
    id: 'chiptuning',
    icon: Zap,
    title: 'Chip Tuning',
    description: 'Profesjonalny tuning silnika z gwarancją i możliwością pomiaru mocy',
    link: '/uslugi/chip-tuning',
    features: ['Do +35% mocy', 'Mniejsze spalanie', 'Gwarancja'],
  },
  {
    id: 'hamownia',
    icon: Gauge,
    title: 'Hamownia',
    description: 'Profesjonalny pomiar mocy i momentu obrotowego na nowoczesnej hamowni',
    link: '/uslugi/hamownia',
    features: ['Pomiar mocy', 'Test wydajności', 'Protokół pomiaru'],
  },
  {
    id: 'elektronika',
    icon: Laptop,
    title: 'Elektronika Warsztatowa',
    description: 'Sprzedaż profesjonalnego sprzętu diagnostycznego i narzędzi warsztatowych',
    link: '/uslugi/elektronika-warsztatowa',
    features: ['Testery', 'Programatory', 'Narzędzia'],
  },
]

export default function ServicesSection() {
  return (
    <section id="uslugi" className="section-padding bg-erwo-gray">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="mb-4">Nasze Usługi</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Oferujemy kompleksową obsługę Twojego samochodu - od rutynowych przeglądów po zaawansowany chip tuning
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
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
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-erwo-red rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center text-erwo-red font-roboto font-bold mt-auto">
                  Dowiedz się więcej
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
