import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react'
import { CONTACT_INFO, NAV_LINKS, SOCIAL_MEDIA } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-erwo-black text-white">
      {/* Main Footer Content */}
      <div className="container-custom px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div>
            <Image
              src="/images/logo/WhatsApp Image 2025-11-09 at 10.53.19.jpeg"
              alt="ERWO Garage Logo"
              width={180}
              height={60}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm mb-4">
              Profesjonalny serwis samochodowy, chip tuning i diagnostyka komputerowa w Radomsku.
            </p>
            <div className="flex gap-4">
              <a
                href={SOCIAL_MEDIA.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-erwo-dark hover:bg-erwo-red rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_MEDIA.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-erwo-dark hover:bg-erwo-red rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_MEDIA.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-erwo-dark hover:bg-erwo-red rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-roboto font-bold mb-4">Szybkie linki</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-erwo-red transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Usługi */}
          <div>
            <h4 className="text-lg font-roboto font-bold mb-4">Nasze usługi</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/uslugi/serwis-samochodowy"
                  className="text-gray-400 hover:text-erwo-red transition-colors text-sm"
                >
                  Serwis Samochodowy
                </Link>
              </li>
              <li>
                <Link
                  href="/uslugi/chip-tuning"
                  className="text-gray-400 hover:text-erwo-red transition-colors text-sm"
                >
                  Chip Tuning
                </Link>
              </li>
              <li>
                <Link
                  href="/uslugi/hamownia"
                  className="text-gray-400 hover:text-erwo-red transition-colors text-sm"
                >
                  Hamownia
                </Link>
              </li>
              <li>
                <Link
                  href="/uslugi/elektronika-warsztatowa"
                  className="text-gray-400 hover:text-erwo-red transition-colors text-sm"
                >
                  Elektronika Warsztatowa
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-lg font-roboto font-bold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-erwo-red flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  {CONTACT_INFO.address}<br />
                  {CONTACT_INFO.postalCode} {CONTACT_INFO.city}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-erwo-red flex-shrink-0" />
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-gray-400 hover:text-erwo-red transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-erwo-red flex-shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-gray-400 hover:text-erwo-red transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-erwo-red flex-shrink-0 mt-0.5" />
                <div className="text-gray-400">
                  <p>{CONTACT_INFO.hours.weekday}</p>
                  <p>{CONTACT_INFO.hours.saturday}</p>
                  <p>{CONTACT_INFO.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-erwo-dark">
        <div className="container-custom px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              &copy; {currentYear} ERWO Garage. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex gap-6">
              <Link href="/polityka-prywatnosci" className="hover:text-erwo-red transition-colors">
                Polityka prywatności
              </Link>
              <Link href="/regulamin" className="hover:text-erwo-red transition-colors">
                Regulamin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
