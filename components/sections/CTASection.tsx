import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'
import { CONTACT_INFO } from '@/lib/constants'

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-erwo-red to-red-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="mb-6 text-white">
            Potrzebujesz Profesjonalnej Obsługi Swojego Auta?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Umów się na wizytę już dziś i przekonaj się o najwyższej jakości naszych usług
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/kontakt"
              className="bg-white text-erwo-red px-8 py-4 rounded-lg font-roboto font-bold text-lg
                         hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Umów wizytę online
            </Link>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-roboto font-bold text-lg
                         hover:bg-white hover:text-erwo-red transition-all duration-300 shadow-lg
                         flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Zadzwoń teraz
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-white/90">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span className="font-roboto">{CONTACT_INFO.phone}</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/30" />
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span className="font-roboto">{CONTACT_INFO.email}</span>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/80">
              <strong className="text-white">Godziny otwarcia:</strong>{' '}
              {CONTACT_INFO.hours.weekday} | {CONTACT_INFO.hours.saturday}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
