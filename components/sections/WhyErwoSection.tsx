import { CheckCircle, Cpu, Users, ShieldCheck } from 'lucide-react'
import { WHY_ERWO } from '@/lib/constants'

const iconMap = {
  'check-circle': CheckCircle,
  'cpu': Cpu,
  'users': Users,
  'shield-check': ShieldCheck,
}

export default function WhyErwoSection() {
  return (
    <section className="section-padding bg-erwo-black text-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="mb-4">Dlaczego ERWO Garage?</h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Wybierz profesjonalizm, doświadczenie i najwyższą jakość obsługi
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_ERWO.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon as keyof typeof iconMap]
            return (
              <div
                key={index}
                className="text-center group"
              >
                {/* Icon */}
                <div className="w-20 h-20 bg-erwo-red/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-erwo-red transition-all duration-300">
                  <IconComponent className="w-10 h-10 text-erwo-red group-hover:text-white transition-all duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl mb-4 group-hover:text-erwo-red transition-colors">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm md:text-base">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-8 bg-erwo-dark rounded-lg text-center">
          <h3 className="text-2xl md:text-3xl mb-4">
            Gwarancja do <span className="text-erwo-red">100 000 km</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Na wybrane usługi oferujemy rozszerzoną gwarancję do 100 tysięcy kilometrów.
            Twój spokój i bezpieczeństwo są dla nas najważniejsze.
          </p>
        </div>
      </div>
    </section>
  )
}
