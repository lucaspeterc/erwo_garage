'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react'
import { CONTACT_INFO } from '@/lib/constants'

export default function KontaktPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const [error, setError] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(false)

    const form = e.currentTarget
    const data = new FormData(form)
    data.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      })
      const json = await res.json()
      if (json.success) {
        setSubmitted(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="bg-erwo-black text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bebas tracking-wide mb-4">Kontakt</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Masz pytania? Chcesz umówić wizytę? Skontaktuj się z nami – odpowiemy najszybciej jak to możliwe.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bebas tracking-wide mb-8 text-erwo-black">Dane kontaktowe</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-erwo-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-erwo-red" />
                  </div>
                  <div>
                    <p className="font-bold text-erwo-dark">Adres</p>
                    <p className="text-gray-600">{CONTACT_INFO.fullAddress}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-erwo-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-erwo-red" />
                  </div>
                  <div>
                    <p className="font-bold text-erwo-dark">Telefon</p>
                    <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-erwo-red hover:underline">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-erwo-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-erwo-red" />
                  </div>
                  <div>
                    <p className="font-bold text-erwo-dark">E-mail</p>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-erwo-red hover:underline">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-erwo-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-erwo-red" />
                  </div>
                  <div>
                    <p className="font-bold text-erwo-dark">Godziny otwarcia</p>
                    <p className="text-gray-600">{CONTACT_INFO.hours.weekday}</p>
                    <p className="text-gray-600">{CONTACT_INFO.hours.saturday}</p>
                    <p className="text-gray-600">{CONTACT_INFO.hours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-2xl font-bebas tracking-wide mb-8 text-erwo-black">Wyślij wiadomość</h2>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <CheckCircle className="w-16 h-16 text-erwo-green" />
                  <p className="text-xl font-bold text-erwo-dark">Wiadomość wysłana!</p>
                  <p className="text-gray-600">Odezwiemy się najszybciej jak to możliwe.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input type="hidden" name="from_name" value="ERWO Garage - Formularz kontaktowy" />
                  <input type="hidden" name="subject" value="Nowa wiadomość ze strony erwo-garage.pl" />
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
                      Wystąpił błąd podczas wysyłania. Spróbuj ponownie lub zadzwoń pod {CONTACT_INFO.phone}.
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-erwo-dark mb-1">Imię i nazwisko *</label>
                      <input required type="text" name="name" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-erwo-red" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-erwo-dark mb-1">Telefon</label>
                      <input type="tel" name="phone" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-erwo-red" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-erwo-dark mb-1">E-mail *</label>
                    <input required type="email" name="email" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-erwo-red" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-erwo-dark mb-1">Temat</label>
                    <select name="subject" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-erwo-red">
                      <option value="">Wybierz temat</option>
                      <option>Serwis samochodowy</option>
                      <option>Chip Tuning</option>
                      <option>Hamownia</option>
                      <option>Elektronika warsztatowa</option>
                      <option>Inne</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-erwo-dark mb-1">Wiadomość *</label>
                    <textarea required name="message" rows={5} className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-erwo-red resize-none" />
                  </div>
                  <button type="submit" disabled={loading} className="btn-primary w-full py-4 text-lg disabled:opacity-60">
                    {loading ? 'Wysyłanie...' : 'Wyślij wiadomość'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.3!2d19.4533!3d51.0656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUHJ6ZWRib3Jza2EgNDUsIDk3LTUwMCBSYWRvbXNrbw!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="ERWO Garage - mapa dojazdu"
        />
      </section>
    </main>
  )
}
