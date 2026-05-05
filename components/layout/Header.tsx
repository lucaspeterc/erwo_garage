'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { NAV_LINKS, CONTACT_INFO } from '@/lib/constants'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar - tylko desktop */}
      <div className="bg-erwo-black text-white py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center px-4">
          <div className="flex items-center gap-6 text-sm">
            <span>Przedborska 45, Radomsko</span>
            <span>|</span>
            <span>Pon - Pt: 9:00 - 17:00</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-erwo-red transition-colors">
              {CONTACT_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container-custom px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/WhatsApp Image 2025-11-09 at 10.53.19.jpeg"
              alt="ERWO Garage Logo"
              width={180}
              height={60}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="relative group">
                {link.submenu ? (
                  <div>
                    <button className="flex items-center gap-1 font-roboto font-medium text-erwo-dark hover:text-erwo-red transition-colors">
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {/* Dropdown menu */}
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <ul className="py-2">
                        {link.submenu.map((sublink) => (
                          <li key={sublink.href}>
                            <Link
                              href={sublink.href}
                              className="block px-4 py-3 text-sm hover:bg-erwo-gray hover:text-erwo-red transition-colors"
                            >
                              {sublink.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="font-roboto font-medium text-erwo-dark hover:text-erwo-red transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Button - Desktop */}
          <Link href="/kontakt" className="btn-primary hidden lg:inline-block">
            Umów wizytę
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-erwo-dark hover:text-erwo-red transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <ul className="space-y-2 mt-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  {link.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(link.label)}
                        className="flex items-center justify-between w-full px-4 py-3 font-roboto font-medium text-erwo-dark hover:bg-erwo-gray rounded-lg transition-colors"
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openSubmenu === link.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openSubmenu === link.label && (
                        <ul className="mt-2 ml-4 space-y-2">
                          {link.submenu.map((sublink) => (
                            <li key={sublink.href}>
                              <Link
                                href={sublink.href}
                                className="block px-4 py-2 text-sm text-erwo-dark hover:text-erwo-red transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {sublink.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="block px-4 py-3 font-roboto font-medium text-erwo-dark hover:bg-erwo-gray rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              <li className="px-4 pt-4">
                <Link
                  href="/kontakt"
                  className="btn-primary w-full text-center block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Umów wizytę
                </Link>
              </li>
              <li className="px-4">
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center justify-center gap-2 py-3 text-erwo-red font-roboto font-bold"
                >
                  <Phone className="w-5 h-5" />
                  {CONTACT_INFO.phone}
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
