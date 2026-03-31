import Image from 'next/image'
import Link from 'next/link'
import { STATS } from '@/lib/constants'

export default function AboutSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/garage4.jpeg"
              alt="ERWO Garage - Warsztat"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="mb-6">O ERWO Garage</h2>
            <div className="space-y-4 text-gray-700 text-base md:text-lg">
              <p>
                <strong className="text-erwo-red">ERWO Garage</strong> to profesjonalny warsztat
                samochodowy z wieloletnim doświadczeniem w branży automotive. Specjalizujemy się
                w kompleksowej obsłudze serwisowej, chip tuningu oraz diagnostyce komputerowej.
              </p>
              <p>
                Nasz zespół to certyfikowani mechanicy z pasją do motoryzacji. Dysponujemy
                najnowszym sprzętem diagnostycznym oraz nowoczesną hamownią, co pozwala nam
                świadczyć usługi na najwyższym poziomie.
              </p>
              <p>
                Jesteśmy <strong>autoryzowanym serwisem BMW i MINI</strong>,
                co gwarantuje profesjonalną obsługę zgodną z wymogami producenta.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 mb-8">
              {STATS.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bebas text-erwo-red mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-roboto">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/o-nas" className="btn-primary">
                Poznaj nas lepiej
              </Link>
              <Link href="/kontakt" className="btn-outline">
                Skontaktuj się
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
